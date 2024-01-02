import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/skillsim.png'

const Navbar = () => {
  return (
    <nav className='navbar__main'>
    <Link to="/"><img className='nav__icon' src={logo} alt=''/></Link>
    <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Legal</Link>
            <Link to='/'>Program</Link>
            <button className="login">Login</button>
    </div>
   
    </nav>
  )
}

export default Navbar
