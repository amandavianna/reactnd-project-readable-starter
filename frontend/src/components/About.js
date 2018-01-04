import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import myImage from '../images/agnes.jpg'

const About = () => (
  <Segment
    textAlign='center'
    style={{ margin: '0px 0px 30px', padding: '15px' }}
  >
    <Image
      alt='Eu'
      src={myImage}
      centered
      size='small'
      circular
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
  </Segment>
)

export default About
