import React from 'react'
import { Header } from 'semantic-ui-react'
import { dateFormat } from '../utils/helpers'

const Author = ({name, timestamp, color}) => (
  <Header
    as='h5'
    color={color || 'grey'}
    style={{ margin: '0px' }}
  >
    {name} | {dateFormat(timestamp)}
  </Header>
)

export default Author
