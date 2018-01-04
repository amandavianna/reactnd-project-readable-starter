import React from 'react'
import {
  Container,
  Grid
} from 'semantic-ui-react'

import Header from './Header'
import Footer from './Footer'

// import OrderBy from './OrderBy'
// import Posts from './Posts'

// import FormPost from './FormPost'

// import PostsCategory from './PostsCategory'

import Post from './Post'

import Sidebar from './Sidebar'


const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={11}>
            {/* <OrderBy/>
            <Posts /> */}
            {/* <FormPost/> */}
            {/* <PostsCategory /> */}
            <Post />
          </Grid.Column>
          <Grid.Column width={5}>
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default App
