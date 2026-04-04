import React from 'react'
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div style={{paddingLeft:'100px', paddingTop:'100px', paddingRight:'500px'}}>
      <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> Get in touch with me ! </h1>
      {/* <hr style={{color:'white', width:'500px'}}></hr> */}
      <h5 style={{color:'#a1dbff', fontFamily:'monospace'}}> 
        I'm always open to new opportunities and collaborations.
        You can drop me an Email, connect with me on LinkedIn or explore my Github Repository Hub. <br></br>
        I’ll get back to you at the earliest. </h5>
      <hr style={{color:'white', width:'500px'}}></hr>
      
      <h5 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Drop an email <i className="bi bi-envelope-at-fill"></i> : richa.rastogi234@gmail.com </h5> 
      <br/>
      
      <h5 style={{color:'#a1ff85ff', fontFamily:'monospace',}}> <Link className="nav-link profile" to="https://github.com/Richa-Rastogi25" 
            target="_blank" 
            rel="noopener noreferrer">
    Visit my Github Workspace <i className="bi bi-github"></i>
    </Link> </h5>
      <br/>
      
      <h5 style={{color:'#a1ff85ff', fontFamily:'monospace',}}> <Link className="nav-link profile" to="https://www.linkedin.com/in/richa-rastogi-developer/" 
            target="_blank" 
            rel="noopener noreferrer">
    Visit my LinkedIn Profile <i className="bi bi-linkedin"></i>
    </Link> </h5>


      
    </div>
  )
}

export default ContactPage