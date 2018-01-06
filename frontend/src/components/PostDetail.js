import React, { Component } from 'react'
import {
  Grid,
  Header,
  Icon,
  Label,
  Divider
} from 'semantic-ui-react'
import Author from './Author'
import PostActions from './PostActions'
import GetComment from './GetComment'
import AddComment from './AddComment'

class PostDetail extends Component {
  render() {
    return (
      <div>
          <Grid>
              <Grid.Row>
                <Grid.Column floated='left' width={13}>
                  <Header as='h3' style={{ margin: '0px 0px 5px' }}>Second Header</Header>
                  <Author name='Amanda Vianna' timestamp='03/01/2018' />
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
                    <PostActions />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider />

            <GetComment />
            <AddComment />
      </div>
    )
  }

}

export default PostDetail
