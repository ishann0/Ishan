import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assests/CSS/Home.css'
import Image1 from '../Assests/Images/Image1.png'
import Image2 from '../Assests/Images/Image2.png'
import Image3 from '../Assests/Images/Image3.png'

const Home = () => {
  const width= '100px';
  const width2= '150px'
  return (
    <div className='container'>
        <div className="container1">
    <div className="cards">
      <div className="face face1">
        <div className="content">
           <img src={Image1}
           width = {width}
           alt='Hell'

           />           
          <h3>Ishan Sharma</h3>
        </div> 
      </div>
      <div className="face face2">
        <div className="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <NavLink to ='/Item1' >Read More</NavLink>
        </div>
      </div>
   </div>
   
   <div className="cards">
      <div className="face face1">
        <div className="content">
        <img src={Image2}
           width = {width}
           alt='Hell'

           />           
          <h3>Ishan Sharma</h3>        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <NavLink to ='/Item2' >Read More</NavLink>
        </div>
      </div>
   </div>
   
   
   <div className="cards">
      <div className="face face1">
        <div className="content">
        <img src={Image3}
           width = {width2}
           alt='Hell'

           />           
          <h3>Ishan Sharma</h3>

        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
          <NavLink to ='/Item3' >Read More</NavLink>
        </div>
      </div>
   </div>
   
   
   
   
   
   
 </div>
    </div>
  )
}

export default Home
