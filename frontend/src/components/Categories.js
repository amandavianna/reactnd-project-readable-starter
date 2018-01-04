import React from 'react'
import { Segment, Label, Header } from 'semantic-ui-react'

const Categories = () => (
  <Segment
    style={{ margin: '0px', padding: '20px' }}
  >
    <Header as='h4' content='Categorias' />
    <Label.Group color='blue'>
      <Label>Fun</Label>
      <Label>Happy</Label>
      <Label>Smart</Label>
      <Label>Witty</Label>
    </Label.Group>
  </Segment>
)

export default Categories
