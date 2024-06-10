import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume' id='resume'>
        <div className="borderTop"></div>
        <div className="resume-bar" data-aos='fade' data-aos-easing='ease-in'>
            <p>
                 Take a copy of my resume before you go!</p>
        <a href="/JudeReid-Resume.pdf" download>Download
        <img className='downloadImg' src="/download.png" alt="download" /></a>
        </div>
    </div>
  )
}

export default Resume