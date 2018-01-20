import { combineReducers } from 'redux'

import {
  GET_ALL_CATEGORIES,
  GET_POST_CATEGORY,
  GET_ALL_POSTS,
  ADD_POST,
  GET_POST_DETAIL,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  GET_POST_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions'

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...action.posts]
    case GET_POST_CATEGORY:
      return [...action.posts]
    case ADD_POST:
      return [...state, action.post]
    case DELETE_POST:
      return state.filter(post => post.id !== action.id)
    case VOTE_POST:
    case EDIT_POST:
      return state.map(post => post.id === action.post.id ? action.post : post)
    default:
      return state
  }
}

const post = (state = [], action) => {
  switch (action.type) {
    case GET_POST_DETAIL:
      return action.post
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return [...action.categories.categories]
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
    return [...action.comments]

    case ADD_COMMENT:
    return [...state, action.comment]

    case VOTE_COMMENT:
    return state.map(comment => comment.id === action.comment.id ? action.comment : comment)

    case DELETE_COMMENT:
    return state.filter((comment) => comment.id !== action.comment.id)

    case EDIT_COMMENT:
    return state.map(comment => comment.id === action.comment.id ? action.comment : comment)

    default:
      return state
  }
}

export default combineReducers({
  posts,
  post,
  comments,
  categories
})
