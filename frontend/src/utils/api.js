const API = 'http://localhost:3001'

const headers = {
  'Authorization': 'whatever-you-want',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

//Categories
export const getAllCategoriesAPI = () => {
  return fetch(`${API}/categories`, { headers }).then(res => res.json())
}

export const getPostCategoryAPI = category => {
  return fetch(`${API}/${category}/posts`, { headers }).then(res => res.json())
}

//Posts
export const getAllPostsAPI = () => {
  return fetch(`${API}/posts`, { headers }).then(res => res.json())
}

export const addPostAPI = post => {
  return fetch(`${API}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then((res) => res.json())
}

export const getPostDetailAPI = id => {
  return fetch(`${API}/posts/${id}`, { headers }).then(res => res.json())
}

export const votePostAPI = (id, option) => {
  return fetch(`${API}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then((res) => res.json())
}

export const editPostAPI = post => {
  return fetch(`${API}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  }).then((res) => res.json())
}

export const deletePostAPI = id => {
  return fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then((res) => res.json())
}

//Comments
export const getPostCommentsAPI = id => {
  return fetch(`${API}/posts/${id}/comments`, { headers }).then((res) => res.json())
}

export const addCommentAPI = comment => {
  return fetch(`${API}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  }).then((res) => res.json())
}

export const getCommentDetailAPI = id => {
  return fetch(`${API}/comments/${id}`, { headers }).then((res) => res.json())
}

export const voteCommentAPI = (id, option) => {
  return fetch(`${API}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then((res) => res.json())
}

export const editCommentAPI = comment => {
  return fetch(`${API}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  }).then((res) => res.json())
}

export const deleteCommentAPI = id => {
  return fetch(`${API}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then((res) => res.json())
}
