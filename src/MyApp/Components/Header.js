import React from 'react'
import '../Assests/CSS/Header.css'
import { NavLink } from 'react-router-dom'
const Headerr = () => {
  return (
	<section className="main">
				<div className="menu">
				<nav>
                <NavLink className="nav-link active" to='/About'>About</NavLink>
                <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
				</nav>
				</div>


		</section>
  )
}

export default Headerr
