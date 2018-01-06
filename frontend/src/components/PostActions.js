import React from 'react'
import {
  Icon,
  Label
} from 'semantic-ui-react'

const PostActions = () => (
  <div>
    <Label>
      <Icon name='comment' size='large' /> 2 comentário(s)
    </Label>

    <Label>
      <Icon name='like outline' size='large' /> 2 like
    </Label>

    <Label>
      <Icon name='dislike outline' size='large' /> 1 dislike
    </Label>

    <Label><Icon name='pencil' size='large' />editar</Label>

    <Label><Icon name='trash' size='large' />excluir</Label>
  </div>
)

export default PostActions
