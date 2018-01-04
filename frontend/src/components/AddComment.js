import React, { Component } from 'react'
import {
  Form,
  Button
} from 'semantic-ui-react'

class AddComment extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Input placeholder="Nome" />
          <Form.TextArea placeholder="Comentário" />
          <Button content='Adicionar comentário' labelPosition='left' icon='edit' primary />
        </Form>
      </div>
    )
  }

}

export default AddComment
