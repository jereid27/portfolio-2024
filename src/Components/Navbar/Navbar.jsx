import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="firstNav">
                <ul>
                    <li>ABOUT</li>
                    <li>RESUME</li>
                </ul>
            </div>
            <img src="src/assets/star-img.webp" alt="star" className="star" />
            <div className="secondNav">
                <ul>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar