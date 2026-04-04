import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Resume from './components/Resume';


function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about-me' element={<AboutMe/>}></Route>
          <Route path='skills' element={<Skills/>}></Route>
          <Route path='projects' element={<Projects/>}></Route>
          <Route path='resume' element={<Resume/>}></Route>
          <Route path='contact-page' element={<ContactPage/>}></Route>
        </Routes>
        {/* <button onClick="topFunction()" id="myBtn" title="Go to top">Top</button> */}
    </div>
  );
}

export default App;
