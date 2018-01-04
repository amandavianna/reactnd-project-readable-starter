import React, { Component } from 'react'
import {
  Comment,
  Icon,
  Label,
  Grid
} from 'semantic-ui-react'
import Author from './Author'

class GetComment extends Component {
  render() {
    return (
      <div>
        <Comment.Group size='small'>
          <Comment>
            <Comment.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={11}>
                    <Author name='Amanda Vianna' timestamp='03/01/2018' color='black' />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Label circular>2</Label>
                    <Icon name='like outline' size='large' />
                    <Label circular>1</Label>
                    <Icon name='dislike outline' size='large' />
                    <Icon link name='pencil' size='large' />
                    <Icon link name='trash' size='large' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Comment.Text>How artistic!</Comment.Text>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={11}>
                    <Author name='Amanda Vianna' timestamp='03/01/2018' color='black' />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Label circular>2</Label>
                    <Icon name='like outline' size='large' />
                    <Label circular>1</Label>
                    <Icon name='dislike outline' size='large' />
                    <Icon link name='pencil' size='large' />
                    <Icon link name='trash' size='large' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </div>
    )
  }

}

export default GetComment
