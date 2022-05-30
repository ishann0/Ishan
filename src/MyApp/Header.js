import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import Indexjs from './index'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Logo from './assests/images/logo2.png'
export default function header() {
  let width='100px'
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
  <NavLink className="nav-link active" to= "/">  <img src={Logo}
    width = {width}  
    /></NavLink>
    <NavbarToggle aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
      <Nav className="me-auto">
 
       <NavLink className="nav-link active" to='/About'>About</NavLink>
       <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
      </Nav>
    </NavbarCollapse>
  </Container>
</Navbar>  )


}




