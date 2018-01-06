import React, { Component } from 'react'
import OrderBy from './OrderBy'
import PostsList from './PostsList'

class AllPosts extends Component {
  render() {
    return (
      <div>
        <OrderBy/>
        <PostsList />
      </div>
    )
  }
}

export default AllPosts
