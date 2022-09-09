import React from 'react'
import '../Assests/CSS/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  return (
    <Container>
      <Row>
        <div class="container-1">
        <Col>  

          <div class="card">
      <div class="face face1">
        <div class="content">
           <img src="https://img.icons8.com/color/48/000000/itachi-uchiha.png"/>           
          <h3>Text</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <a href="#" type="button">Read More</a>
        </div>
      </div>
   </div>
   </Col>
        <Col> 
          <div class="card">
      <div class="face face1">
        <div class="content">
     <img src="https://img.icons8.com/color/48/000000/kakashi-hatake.png"/>             
          <h3>Text</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <a href="#" type="button">Read More</a>
        </div>
      </div>
   </div>
   </Col>
        <Col> 
          <div class="card">
      <div class="face face1">
        <div class="content">
          <img src="https://img.icons8.com/color/48/000000/naruto.png"/>
           <h3>Text</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <a href="#" type="button">Read More</a>
        </div>
      </div>
   </div>
   
   </Col>
   </div>
      </Row>
    </Container>
        

  )
}

export default Home
