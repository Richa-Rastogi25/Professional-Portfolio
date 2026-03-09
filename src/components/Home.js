import React from 'react'

function Home() {
  return (
    <div style={{paddingLeft:'100px', paddingTop:'100px'}}>
        <h5 style={{color:'whitesmoke', fontFamily:'monospace', fontWeight:'bolder'}}> Hello I'm </h5>
        <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> Richa Rastogi </h1>        
        <div className="rotator-container">
            <div className="text-rotator">Java Full Stack Web Developer</div>
            <div className="text-rotator">E-Commerce Specialist</div>
            <div className="text-rotator">Banking and Insurance</div>
        </div>
        <hr style={{color:'white', width:'1300px'}}></hr>
        <div style={{paddingRight:'200px'}}> 
        <p  style={{color: '#a1dbff', fontFamily:'monospace'}}>A postgraduate with an academic background in E-Commerce, driven by a passion for thriving in the dynamic world of <b style={{color:'#a1ff85ff'}}>e-commerce and information technology</b>. <br></br>
        I have successfully completed a professional course in Java Full Stack Web Development, further strengthening my technical expertise.<br></br> 
        Highly motivated to learn, contribute meaningfully, and grow within a collaborative team environment.
        </p>
        </div>
    </div>
  )
}

export default Home