import React from 'react'
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div style={{paddingLeft:'100px', paddingTop:'100px', paddingRight:'500px'}}>
      <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> Get in touch with me ! </h1>
      <h5 style={{color:'#a1dbff', fontFamily:'monospace'}}> You can drop me an email or connect with me via LinkedIn. I’ll get back to you at the earliest. </h5>
      <hr style={{color:'white', width:'1300px'}}></hr>
      <h5 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Drop an email : richa.rastogi234@gmail.com </h5>
      <br/>
      <h5 style={{color:'#a1ff85ff', fontFamily:'monospace',}}> <Link className="nav-link profile" to="https://www.linkedin.com/in/richa-rastogi-developer/" 
            target="_blank" 
            rel="noopener noreferrer">
    Visit my LinkedIn Profile
    </Link> </h5>

      
    </div>
  )
}

export default ContactPage