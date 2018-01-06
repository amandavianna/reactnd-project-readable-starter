import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Grid
} from 'semantic-ui-react'

import AllPosts from './AllPosts'
import PostsCategory from './PostsCategory'
import PostDetail from './PostDetail'
import Sidebar from './Sidebar'
import Page404 from './Page404'

const Main = () => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={11}>
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route path="/:category" component={PostsCategory} />
            <Route path="/:category/:post_id" component={PostDetail} />
            <Route component={Page404} />
          </Switch>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </div>
)

export default Main
