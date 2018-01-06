import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Container
} from 'semantic-ui-react'

import Header from './Header'
import Footer from './Footer'
import FormPost from './FormPost'
import Main from './Main'

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Switch>
        <Route path="/posts" component={FormPost} />
        <Route path="/posts/:id" component={FormPost} />
        <Route component={Main} />
      </Switch>
    </Container>
    <Footer />
  </div>
)

export default App
