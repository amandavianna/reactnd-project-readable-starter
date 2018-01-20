import React from 'react'
import {
  Grid,
  Icon,
  Label
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const PostActions = ({ post, location, onVote, onClickDelete }) => (
  <Grid stackable columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Label as={Link} to={{pathname:`/${post.category}/${post.id}`, hash: '#comment'}}>
          <Icon name='comment' /> {post.commentCount}
        </Label>
      </Grid.Column>
      <Grid.Column>
        <Icon name='like outline' size='large' link onClick={() => onVote(post.id,'upVote')}/>
        <Label circular>{post.voteScore}</Label>
        <Icon name='dislike outline' size='large' link onClick={() => onVote(post.id,'downVote')}/>
      </Grid.Column>
      <Grid.Column>
        <Label as={Link} to={{
          pathname: `/editPost/${post.id}`,
          state: {...post, postUrl: location.pathname}
        }}>
          <Icon name='pencil' />editar
        </Label>
        <Label as={Link} to='/' onClick={() => onClickDelete(post)}><Icon name='trash' />excluir</Label>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default withRouter(connect()(PostActions))
