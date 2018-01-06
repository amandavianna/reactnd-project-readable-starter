import React, { Component } from 'react'
import {
  Grid,
  Header,
  Icon,
  Label,
  List
} from 'semantic-ui-react'
import Author from './Author'
import PostActions from './PostActions'

class PostsList extends Component {
  render() {
    return (
      <List divided relaxed>
        <List.Item>
          <List.Content>
          <Grid>
              <Grid.Row>
                <Grid.Column floated='left' width={13}>
                  <Header as='h3' style={{ margin: '0px 0px 5px' }}>Second Header</Header>
                  <Author name='Amanda Vianna' timestamp='03/01/2018'/>
                </Grid.Column>
                <Grid.Column floated='right' width={3} textAlign='right'>
                  <Label.Group color='teal'>
                    <Label as='a'>
                      <Icon name='tag' />
                      Smart
                    </Label>
                  </Label.Group>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <p>{('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod').substr(0, 300).trim()}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <PostActions />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Content>
        </List.Item>

      </List>
    )
  }

}

export default PostsList
