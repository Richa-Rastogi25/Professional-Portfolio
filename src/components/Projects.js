import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
      <div style={{paddingLeft:'100px', paddingTop:'100px', paddingRight:'100px'}}>
       <h1 style={{color:'#94b9e4ff', fontFamily:'fantasy', fontSize:'80px'}}> PROJECTS </h1>  
       <h5 style={{color:'#a1dbff', fontFamily:'fantasy'}}> Deployed Projects </h5>
      <hr style={{color:'white'}}></hr>

<div style={{gridTemplateColumns: '1fr'}} className="d-grid gap-5 row-gap-5">

{/* Carousel (cards inside) */}
{/* Indicators */}
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>

  {/* Slides */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* Card 01 */}
      <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 01: </strong> Amazon Web Services </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title: </strong> Automated Deployment of a Web based Game using CI/CD Pipeline on AWS | 2025</p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Developed and deployed a simple interactive game using React JS with HTML & CSS, showcasing end-to-end UI development. Implemented GitHub-based version control and a CI/CD pipeline to automate testing, building and deployment processes. Enabled automatic deployment to AWS S3 on every GitHub push, eliminating manual effort and ensuring consistent, reliable delivery of the application.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>AWS Services Used: </strong> S3 Bucket, IAM User
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages: </strong> JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks: </strong> React.js, HTML, CSS, Bootstrap
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> IDEs: </strong> Visual Studio Code
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Visit Github Repository</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="carousel-item">
      {/* Card 02 */}
      <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 02: </strong> Java Full Stack Web Development </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title: </strong> Government Social Security Administration - PMJJBY | Alpha Bank | 2025 </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Developed a Java Full Stack Application based on the PMJJBY scheme within the Alpha Bank. The system facilitates integration between banks and insurance providers for social security enrolment and fund management of customers. It handles the complete workflow from frontend customer data collection to backend processing and database management.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages: </strong> Java and JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks: </strong> Spring Boot, React.js, HTML, CSS, Bootstrap
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Database: </strong> MySQL
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> IDEs: </strong> Visual Studio Code and Eclipse IDE
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Visit Github Repository</Link>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="carousel-item">
       {/* Card 03 */}
      <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 03: </strong> Java </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Banking Application | Alpha Bank | 2025  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed and developed a banking system using Java to perform core operations. Implemented full CRUD functionality for managing customer and account data.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> Java
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> IDEs : </strong> Eclipse IDE
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Visit Github Repository</Link>
          </li>
        </ul>
      </div>
    </div>

   <div className="carousel-item">
     {/* Card 04 */} 
      <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 04: </strong> Advance JavaScript using React.js </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Banking Application | Alpha Bank | 2025  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed and implemented the database architecture for a banking system using MySQL. Handled data storage, retrieval, and management with optimized SQL queries and relational schema design.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks : </strong> React.js, HTML, CSS, Bootstrap
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> IDEs : </strong> Visual Studio Code
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Case Study Documentation</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="carousel-item">
     {/* Card 05 */}  
     <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 05: </strong> Database Management System  </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Database | Alpha Bank | 2025  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed and implemented the database architecture for a banking system using MySQL. Handled data storage, retrieval, and management with optimized SQL queries and relational schema design.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> Java and JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks : </strong> Spring Boot, React.js, HTML, CSS, Bootstrap
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Database : </strong> MySQL
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Case Study Documentation</Link>
          </li>
        </ul>
      </div>
  </div>

      <div className="carousel-item">
     {/* Card 06 */}  
     <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 06: </strong> HTML, CSS and JavaScript  </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Bank Website | Alpha Bank | 2025  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed a static coffee website using HTML, CSS, and JavaScript. Designed responsive layouts, styled interactive UI components, and implemented client-side functionalities to enhance user engagement.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks : </strong> HTML, Bootstrap, CSS
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Check</Link>
          </li>
        </ul>
      </div>
  </div>

        <div className="carousel-item">
     {/* Card 07 */}  
     <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 07: </strong> HTML, CSS and JavaScript  </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Coffee Static Website | Marvel Cafe Coffee | 2024  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed a static coffee website using HTML, CSS, and JavaScript. Designed responsive layouts, styled interactive UI components, and implemented client-side functionalities to enhance user engagement.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> Basic JavaScript
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Web Technologies & Frameworks : </strong> HTML, CSS
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Check</Link>
          </li>
        </ul>
      </div>
  </div>

          <div className="carousel-item">
     {/* Card 08 */}  
     <div className="card card-style">
       <div className="card-body">
        <h5 className="card-title" style={{color:'#a1ff85ff', fontFamily:'monospace'}}> <strong> Project 08: </strong> Java Web Application </h5>
        <p className="card-text" style={{color:'#a1ff85ff', fontFamily:'monospace', fontSize: '18px'}}> <strong> Title : </strong> Travel Website | TRAVELOCITY | 2019  </p>
       </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{color:'#94b9e4ff', fontFamily:'monospace', fontSize: '18px'}}>
              Designed Travel Website using Java Application as part academic project with a team.
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong>Programming Languages : </strong> Java
          </li>
          <li className="list-group-item" style={{color:'#a1dbff', fontFamily:'monospace', fontSize: '18px'}}> <strong> IDEs Used : </strong> NetBeans IDE
          </li>
          <li className="list-group-item" style={{fontFamily:'monospace', fontSize: '18px'}}>  <Link to="#" className="card-link">Check</Link>
          </li>
        </ul>
      </div>
  </div>

  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
</div>     

    </div>
    {/* <footer>
      eduinsure copyright
    </footer> */}
    </div>
  )
}

export default Projects