import React, { Component } from 'react'
import {
  Icon,
  Label
} from 'semantic-ui-react'

import PostsList from './PostsList'

class PostsCategory extends Component {
  render() {
    return (
      <div>
        <Label.Group color='teal'>
          <Label>
            <Icon name='tag' />
            Smart
            <Label.Detail>22</Label.Detail>
          </Label>
        </Label.Group>
        <PostsList />
      </div>
    )
  }
}

export default PostsCategory
