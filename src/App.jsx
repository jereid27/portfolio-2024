import React from 'react'
import Title from './Components/Title/Title'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  AOS.init();
  return (
    <div>
      <Navbar/>
      <Title/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
