import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import {
  Grid,
  Header,
  Icon,
  Label,
  List
} from 'semantic-ui-react'
import Author from './Author'
import PostActions from './PostActions'
import {
  FetchGetAllPosts
} from '../actions'

class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(FetchGetAllPosts())
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <List divided relaxed>
          {posts.map(post => (
            <List.Item key={post.id} style={{ padding: '15px 0' }}>
              <List.Content>
              <Grid>
                  <Grid.Row>
                    <Grid.Column floated='left' width={13}>
                      <Header as='h3' style={{ margin: '0px 0px 5px' }}>
                        <Link to={`/${post.category}/${post.id}`}>
                          {post.title}
                        </Link>
                      </Header>
                      <Author name={post.author} timestamp={post.timestamp}/>
                    </Grid.Column>
                    <Grid.Column floated='right' width={3} textAlign='right'>
                      <Label as={Link} to={`/${post.category}`} color='teal'>
                        <Icon name='tag' /> {post.category}
                      </Label>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                    {post.body !== undefined ?
                      <p>{post.body.substr(0, 300).trim()}</p>
                    : ''}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <PostActions post={post} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    )
  }

}

const mapStateToProps = ({posts}, ownProps) => ({
  posts: posts.sort(sortBy(ownProps.orderBy))
})

export default connect(mapStateToProps)(PostsList)
