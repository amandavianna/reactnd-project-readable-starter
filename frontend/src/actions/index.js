import uuid from 'js-uuid'

import {
  getAllCategoriesAPI,
  getPostCategoryAPI,
  getAllPostsAPI,
  addPostAPI,
  getPostDetailAPI,
  votePostAPI,
  editPostAPI,
  deletePostAPI,
  getPostCommentsAPI,
  addCommentAPI,
  voteCommentAPI,
  editCommentAPI,
  deleteCommentAPI
} from '../utils/api'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_POST_CATEGORY = 'GET_POST_CATEGORY'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_POST_DETAIL = 'GET_POST_DETAIL'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

//Categories
const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})

export const FetchGetAllCategories = () => dispatch => {
  getAllCategoriesAPI().then(categories => {
    dispatch(getAllCategories(categories))
  })
}

const getPostCategory = posts => ({
  type: GET_POST_CATEGORY,
  posts
})

export const FetchGetPostCategory = (category) => dispatch => {
  getPostCategoryAPI(category).then(posts => {
    dispatch(getPostCategory(posts))
  })
}

//Posts
const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts
})

export const FetchGetAllPosts = () => dispatch => {
  getAllPostsAPI().then(posts => {
    dispatch(getAllPosts(posts))
  })
}

const addPost = post => ({
  type: ADD_POST,
  post
})

export const FetchAddPost = (post) => dispatch => {
  const params = {...post, id: uuid.v1(), timestamp: Date.now()}
  addPostAPI(params).then((post) => {
   dispatch(addPost(post))
  })
}

const getPostDetail = post => ({
  type: GET_POST_DETAIL,
  post
})

export const FetchGetPostDetail = (id) => dispatch => {
  getPostDetailAPI(id).then(post => {
    dispatch(getPostDetail(post))
  })
}

const votePost = post => ({
  type: VOTE_POST,
  post
})

export const FetchVotePost = (id, option) => dispatch => {
  votePostAPI(id, option).then((post) => {
    dispatch(votePost(post))
  })
}

const editPost = post => ({
  type: EDIT_POST,
  post
})

export const FetchEditPost = (post) => dispatch => {
  editPostAPI(post).then((post) => {
    dispatch(editPost(post))
  })
}

const deletePost = post => ({
  type: DELETE_POST,
  post
})

export const FetchDeletePost = (post) => dispatch => {
  deletePostAPI(post.id).then((post) => {
    dispatch(deletePost(post))
  })
}

//Comments
const getPostComments = comments => ({
  type: GET_POST_COMMENTS,
  comments
})

export const FetchGetPostComments = (postId) => dispatch => {
  getPostCommentsAPI(postId).then((comments) => {
    dispatch(getPostComments(comments))
  })
}

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

export const FetchAddComment = (comment) => dispatch => {
  const params = {...comment, id: uuid.v1(), timestamp: Date.now()}
  addCommentAPI(params).then((comment) => {
    dispatch(addComment(comment))
  })
}

const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment
})

export const FetchVoteComment = (id, option) => dispatch => {
  voteCommentAPI(id, option).then((comment) => {
    dispatch(voteComment(comment))
  })
}

const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

export const FetchEditComment = (comment) => dispatch => {
  editCommentAPI(comment).then((comment) => {
    dispatch(editComment(comment))
  })
}

const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

export const FetchDeleteComment = (comment) => dispatch => {
  deleteCommentAPI(comment.id).then((comment) => {
    dispatch(deleteComment(comment))
  })
}
