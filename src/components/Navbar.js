import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  useEffect(()=> {
    const handleScroll = () => {
      let navbar = document.querySelector(".sticky-top");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
    window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
// For Sticky Navbar (on scrolling)
<div className='nav-style sticky-top'>

{/* offCanvas Navbar */}
  <nav className="navbar navbar-expand-lg">
   <div className="container-fluid">

{/* Toggle Button */}
    <button className="navbar-toggler ms-auto bg-body-tertiary" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarScroll" 
    aria-controls="navbarScroll" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Index */}
    <div className="collapse navbar-collapse" id="navbarScroll">

    <ul className="navbar-nav ms-auto">
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
    <Link className="nav-link" to="projects">My Blogs</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="contact-page">Let's Connect</Link>
  </li>
</ul>
   </div>
   </div>
  </nav>
</div>
  )
}

export default Navbar