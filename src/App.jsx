import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from './Components/Title/Title'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Languages from './Components/Languages/Languages'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Resume/Resume'
import CaseStudy from './Components/Casestudy/Casestudy'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  AOS.init()
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path='/' element={<>
          <Navbar />
            <Title />
            <About />
            <Projects />
            <Languages />
            <Contact />
            <Resume />
            </>} />
          <Route path='/casestudy' element={<CaseStudy />} />
        </Routes>
      </div>
</BrowserRouter>
  )
}

export default App
