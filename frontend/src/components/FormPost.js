import React, { Component } from 'react'
import {
  Form,
  Button,
  TextArea
} from 'semantic-ui-react'

class FormPost extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Form.Input required label='Título' />
        </Form.Field>
        <Form.Field>
          <Form.Input required label='Autor' />
        </Form.Field>
        <Form.Field>
          <Form.Input required label='Categoria' />
        </Form.Field>
        <Form.Field>
          <Form.Field required label='Descrição' id='form-textarea-control-opinion' control={TextArea} />
        </Form.Field>
        <Button type='submit' color='pink'>Adicionar novo Post</Button>
      </Form>
    )
  }
}

export default FormPost
