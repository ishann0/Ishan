import React from 'react'
import '../MyApp/Assests/CSS/Header.css'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import Indexjs from './index'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Logo from './Assests/Images/logo2.png'
export default function header() {
  let width='100px'
  return (
<>
    <div className="container-fluid">
    <div className="row d-flex d-md-block flex-nowrap wrapper">
        <div className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
            <div className="list-group border-0 text-center text-md-left">
              <div className='logo'>
              <img
              src={Logo}
              alt='Logo'
              width={width}
              />
              </div>
            <NavLink className="nav-link active" to= "/"> Home </NavLink>
            <NavLink className="nav-link active" to='/About'>About</NavLink>
       <NavLink className="nav-link active" to="/Contact">Contact</NavLink>

            </div>
        </div>
        <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main-menu-icon">
            <a href="#" data-target="#sidebar" data-toggle="collapse"><i className="text-dark fa fa-navicon fa-lg py-2 p-1"></i></a>
        </main>
    </div>
</div>


{/* MOBILE----------MENU */}
<div className="navbar navbar-inverse navbar-fixed-top">
<div className='container'>
<Navbar bg="light" expand="lg">
<NavLink className="nav-link active" to= "/">  <img src={Logo}
width = {width}  
alt='Hell'

/></NavLink>
<NavbarToggle aria-controls="basic-navbar-nav" />
<NavbarCollapse id="basic-navbar-nav">
  <Nav className="me-auto">

  <NavLink className="nav-link active" to= "/Home"> Home </NavLink>
   <NavLink className="nav-link active" to='/About'>About</NavLink>
   <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
  </Nav>
</NavbarCollapse>
</Navbar> 
</div>
</div>
</>
 )


}




