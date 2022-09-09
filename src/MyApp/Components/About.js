import React from 'react'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import '../Assests/CSS/About.css'
import MyPic from '../Assests/Images/Myimg.png'
const About = () => {
  return (
    <div className='container'>
    <div className='heading'><h1>About Me</h1></div>
    <Row>
    <Col>
    <img 
src={MyPic}
alt='Mypic'
/>
</Col>
    <Col class='Text'>
    <h4>
“My name is Ishan Sharma and I am a full-time freelance web developer who specializes in creating dynamic and beautiful web pages. 
I have been in the field for nearly 1 year, and have been loving every minute of it. 
I am a blogger, entrepreneur, designer, developer, and overall thinker. 
Check out some of the links below to see what I’ve been up to lately.”
</h4>
</Col>
  </Row>
</div>

  )
}

export default About
