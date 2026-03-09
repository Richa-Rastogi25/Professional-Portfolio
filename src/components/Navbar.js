import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-style'>
<ul className="nav justify-content-end">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="about-me#">About me</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="skills">Skills</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="projects">Projects</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/RichaRastogi.pdf" 
            target="_blank" 
            rel="noopener noreferrer">
    Resume
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="contact-page">Contact</Link>
  </li>
</ul>
    </div>
  )
}

export default Navbar