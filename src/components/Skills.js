import React from 'react'

function Skills() {
  return (
     <div style={{paddingLeft:'100px', paddingTop:'100px', paddingRight:'100px'}}> 
       <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> SKILLS </h1>  
       <h5 style={{color:'#a1dbff', fontFamily:'fantasy'}}> My Technical Skills </h5>
      <hr style={{color:'white', width:'1300px'}}></hr>

      <div  className='column'> 
      <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Programming Languages :</h4>
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li>Java</li>
        <li>JavaScript</li>
      </ul>
      <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Web Technologies & Frameworks : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li> Spring Boot </li>
        <li> React.js </li>
        <li> HTML </li>
        <li> CSS </li>
        <li> Bootstrap </li>
      </ul>
      <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Database : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li> MySQL </li>
        </ul>
        <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> IDEs : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li> Visual Studio Code </li>
        <li> Eclipse IDE </li>
        <li> NetBeans IDE </li>
        </ul>
        <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> MS Office Suite : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li> PPT </li>
        <li> Excel </li>
        <li> Word </li>
        <li> Power BI </li>
        </ul>         
         <h4 style={{color:'#a1ff85ff', fontFamily:'monospace'}}> Graphic Design : </h4> 
      <ul style={{listStyleType:'square', color:'#a1dbff'}}>
        <li> Usign PPT </li>
        <li> Canva </li>
        </ul>
        </div>

    </div>
  )
}

export default Skills