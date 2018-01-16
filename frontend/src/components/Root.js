import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Segment,
  Grid,
  Form,
  Button,
  Divider,
  Select
} from 'semantic-ui-react'
import PostsList from './PostsList'

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderBy: '-voteScore'
    }
  }

  handleInputChange = (event, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
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
                  <Select placeholder='Maior Pontuação'
                    options={[
                      {
                        key: 'maiorPontuacao',
                        value: '-voteScore',
                        text: 'Maior Pontuação'
                      },
                      {
                        key: 'menorPontuacao',
                        value: 'voteScore',
                        text: 'Menor Pontuação'
                      },
                      {
                        key: 'data',
                        value: '-timestamp',
                        text: 'Data'
                      }
                    ]}
                    name='orderBy'
                    onChange={this.handleInputChange}
                  />
                </Form.Field>
              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
              <Link to={{
                pathname: '/addPost',
                state: {postUrl: '/'}
              }}>
                <Button fluid color='pink'>Adicionar Post</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />

        <PostsList orderBy={this.state.orderBy} />

      </Segment>
    )
  }
}

export default connect()(Root)
