import React from 'react'
import Title from './Components/Title/Title'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Languages from './Components/Languages/Languages'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Resume/Resume'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  AOS.init()
  return (
    <div>
      <Navbar/>
      <Title/>
      <About/>
      <Projects/>
      <Languages/>
      <Contact/>
      <Resume/>
    </div>
  )
}

export default App
