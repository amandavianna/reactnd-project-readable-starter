import React from 'react'
import { Link } from 'react-router-dom'
import {
  Segment,
  Grid,
  Form,
  Select,
  Button,
  Divider
} from 'semantic-ui-react'

const orderOptions = [
  {
    value: '0',
    text: 'Data'
  },
  {
    value: '1',
    text: 'Maior Pontuação'
  }
  ,
  {
    value: '2',
    text: 'Menor Pontuação'
  }
]

const OrderBy = () => (
  <Segment
    basic
    style={{ margin: '0px 0px 20px', padding: '0px' }}
    vertical
  >
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <Form>
              <Form.Field inline>
                <label>Ordenar por: </label>
                <Select options={orderOptions} />
              </Form.Field>
            </Form>
          </Grid.Column>

          <Grid.Column width={4}>
            <Link to="/posts">
              <Button fluid color='pink'>Inserir Post</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />

  </Segment>
)

export default OrderBy
