import React from 'react'
import { Header } from 'semantic-ui-react'

const Author = ({name, timestamp, color}) => (
  <Header
    as='h5'
    color={color || 'grey'}
    style={{ margin: '0px' }}
  >
    {name} | {timestamp}
  </Header>
)

export default Author
