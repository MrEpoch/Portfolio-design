import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logoMe.png"

export default function Navbar() {

  return (
    <nav className='navbar'>
        <div className="navbar-specialDesign">
            <img width={100} height={100} src={Logo} />
        </div>
        <div className="navbar-elements-container">
            <Link to="/">About</Link>
            <Link to="/">Experience</Link>
            <Link to="/">Contact</Link>
        </div>
    </nav>
  )
}
