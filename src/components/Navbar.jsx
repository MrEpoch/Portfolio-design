import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">Alexandr Stenčuk</div>
      <div className="empty"></div>
      <div className="navbar-elements-container">
        <Link to="/">About</Link>
        <Link to="/">Experience</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
}
