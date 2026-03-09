import React from 'react'

function AboutMe() {
  return (
    <div style={{paddingLeft:'100px', paddingTop:'100px', paddingRight:'800px'}}>
      <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> ABOUT ME </h1> 
      <h5 style={{color:'#a1dbff', fontFamily:'fantasy'}}> Me, Myself & I </h5> 
      <hr style={{color:'white', width:'1300px'}}></hr>
      <h5>
      <em style={{color:'#a1ff85ff', fontFamily:'monospace'}}>“I believe in achieving results aligning with objectives, mission and vision of the organization for a holistic growth of self along with the organization.” </em>  
      </h5> <br></br>
      <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> My Qualifications :</h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li>Master in Full Stack Web Development with Java - Professional Course</li>
        <li>Masters in E-Commerce</li>
        <li>Bachelors in Banking and Insurance</li>
      </ul>
      <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> As a Developer : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li>Passion for building scalable and user-friendly applications.</li>
        <li>Interest in problem-solving and continuous learning.</li>
        <li>Good at adapting to new technologies.</li>
      </ul>

    </div>
  )
}

export default AboutMe