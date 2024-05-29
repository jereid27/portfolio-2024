import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume'>
        <h1>Go ahead and take a resume while you are here!</h1>
        <a href="/src/assets/jude-resume24.pdf" download>Download Resume</a>
        <div className="borderBottom"></div>
    </div>
  )
}

export default Resume