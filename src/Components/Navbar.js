import React from "react";
import './css/Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="Navbar">
        <span id="my-symbol">GAURAV</span>
      <div className="links">
        <Link to="/Portfolio/" className="link" id="home">Home</Link>
        <Link to="/Portfolio/About" id="about" className="link">About</Link>
        <Link to="/Portfolio/Skills" id="skills" className="link">Skills</Link>
        <Link to="/Portfolio/Projects " id="contact" className="link">Projects</Link>
        <Link to="/Portfolio/Contact" id="contact" className="link">Contact</Link>
      </div>  
    </div>
  )
};

export default Navbar;
