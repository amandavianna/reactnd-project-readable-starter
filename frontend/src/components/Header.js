import React from 'react'
import { Segment } from 'semantic-ui-react'

const Header = () => (
  <Segment
    textAlign='center'
    basic
    secondary
    style={{ margin: '0px 0px 30px', padding: '20px 0px' }}
  >
    <h1>
      <a href="/">
        Blog da Amanda
      </a>
    </h1>
  </Segment>
)

export default Header
