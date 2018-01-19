import React, { Component } from 'react'
import {
  Grid,
  Icon,
  Label
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  FetchGetAllPosts,
  FetchDeletePost,
  FetchVotePost
} from '../actions'

class PostActions extends Component {

  onVote(id, option){
    this.props.dispatch(FetchVotePost(id, option))
    this.props.dispatch(FetchGetAllPosts())
  }

  onClickDelete(post){
    this.props.dispatch(FetchDeletePost(post))
    this.props.dispatch(FetchGetAllPosts())
  }

  render() {
    const { post } = this.props

    return (
      <Grid stackable columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Label as={Link} to={{pathname:`/${post.category}/${post.id}`, hash: '#comment'}}>
              <Icon name='comment' /> {post.commentCount}
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Icon name='like outline' size='large' link onClick={() => this.onVote(post.id,'upVote')}/>
            <Label circular>{post.voteScore}</Label>
            <Icon name='dislike outline' size='large' link onClick={() => this.onVote(post.id,'downVote')}/>
          </Grid.Column>
          <Grid.Column>
            <Label as={Link} to={{
              pathname: `/editPost/${post.id}`,
              state: {...post, postUrl: this.props.location.pathname}
            }}>
              <Icon name='pencil' />editar
            </Label>
            <Label as={Link} to='/' onClick={() => this.onClickDelete(post)}><Icon name='trash' />excluir</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(connect()(PostActions))
