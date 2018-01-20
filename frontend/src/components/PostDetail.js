import React, { Component } from 'react'
import {
  Grid,
  Header,
  Icon,
  Label,
  Divider,
  Comment
} from 'semantic-ui-react'
import {
  FetchGetPostDetail,
  FetchDeletePost,
  FetchGetPostComments,
  FetchVotePost,
  FetchVoteComment,
  FetchDeleteComment
} from '../actions'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Author from './Author'
import FormComment from './FormComment'
import PostActions from './PostActions'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.onVote = this.onVote.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  componentDidMount() {
    const postId = this.props.match.params.id
    this.props.dispatch(FetchGetPostDetail(postId))
    this.props.dispatch(FetchGetPostComments(postId))
  }
  onVote(id,vote){
    this.props.dispatch(FetchVotePost(id,vote))
    this.props.dispatch(FetchGetPostDetail(id))
  }
  onClickDelete(post){
    this.props.dispatch(FetchDeletePost(post))
  }
  onVoteComment(id,vote){
    this.props.dispatch(FetchVoteComment(id,vote))
  }
  onClickDeleteComment(comment){
    this.props.dispatch(FetchDeleteComment(comment))
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.comments.length !== nextProps.comments.length) {
      this.props.dispatch(FetchGetPostDetail(this.props.post.id))
    }
  }

  render() {
    const { post, comments } = this.props

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column floated='left' width={13}>
              <Header as='h2' style={{ margin: '0px 0px 5px' }}>{post.title}</Header>
              <Author name={post.author} timestamp={post.timestamp} />
            </Grid.Column>
            <Grid.Column floated='right' width={3} textAlign='right'>
              <Label as={Link} to={`/${post.category}`} color='teal' >
                <Icon name='tag' /> {post.category}
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>{post.body}</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <PostActions
                post={post}
                onVote={this.onVote}
                onClickDelete={this.onClickDelete}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider section />

        <Header size='medium'>{post.commentCount > 0 ? 'Comentários da postagem' : 'Nenhum comentário'} </Header>
        {comments.map(comment => (
          <Comment.Group size='small' key={comment.id} style={{ maxWidth: '100%' }}>
            <Comment>
              <Comment.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <Author name={comment.author} timestamp={comment.timestamp} color='black' />
                    </Grid.Column>
                    <Grid.Column width={5} textAlign='right'>
                      <Icon name='like outline' size='large' link onClick={() => this.onVoteComment(comment.id,'upVote')}/>
                      <Label circular>{comment.voteScore}</Label>
                      <Icon name='dislike outline' size='large' link onClick={() => this.onVoteComment(comment.id,'downVote')}/>
                      <Link
                        to={{
                          pathname: `/editComment/${comment.id}`,
                          state: {...comment, postUrl: this.props.location.pathname}
                        }}>
                        <Icon name='pencil' link color='black' size='large' />
                      </Link>
                      <Icon onClick={() => this.onClickDeleteComment(comment)} link name='trash' size='large' />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Comment.Text>{comment.body}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        ))}

        <Divider section />

        <FormComment parentId={this.props.match.params.id} postUrl={this.props.location.pathname} />

      </div>
    )
  }

}

const mapStateToProps = ({post, comments}) => ({
  post,
  comments: comments.slice().sort(sortBy('-voteScore'))
})

export default connect(mapStateToProps)(PostDetail)
