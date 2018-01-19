import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Container,
  Grid
} from 'semantic-ui-react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Root from './Root'
import FormPost from './FormPost'
import FormComment from './FormComment'
import PostsCategory from './PostsCategory'
import PostDetail from './PostDetail'
import Page404 from './Page404'

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={11}>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route exact path="/addPost" component={FormPost} />
              <Route exact path="/editPost/:id" component={FormPost} />
              <Route exact path="/editComment/:id" component={FormComment} />
              <Route exact path="/posts/:id" component={PostDetail} />
              <Route exact path="/:category" component={PostsCategory} />
              <Route component={Page404} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default App
