import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logoMe.png"

export default function Navbar() {

  return (
    <nav className='navbar'>
        <div className="empty"></div>
        <div className="navbar-elements-container">
            <Link to="/">About</Link>
            <Link to="/">Experience</Link>
            <Link to="/">Contact</Link>
        </div>
    </nav>
  )
}
