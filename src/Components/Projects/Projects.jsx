import React, { useState, useEffect }from 'react'
import './Projects.css'

const Projects = () => {

  return (
    <div className='projects' id='projects'>
        <div className="projectHeader">
            <h1>PROJECTS</h1>
            <h3>FRONTEND | BACKEND | FULLSTACK</h3>
        </div>

        <div className="proj-grid">
            {/*First Project*/}
            <div className="gridItem" data-aos='fade-right' data-aos-easing='ease-in'><img className='projImg'src='/workwiz-home.png'/></div>
            <div className="gridItem" data-aos='fade-right' data-aos-easing='ease-in'><h1 className='proj1-header'>Work Wizard - Employee Dashboard</h1>
                <p>Work Wizard - Employee Dashboard is a fullstack application built using Java, Spring Boot, Spring Boot Security,
                    HTML, CSS, and PostgreSQL designed to help independent contractors such as cosmetologists and tattoo artists 
                    manage their pay log, consultation notes, and inventory. The user can safely create and log into their own account
                    and manage specific details about their business with CRUD functionality. A generative report for payment history
                    can be made and viewed based on the information entered by the user.</p>
                    <div className="links">
                    <a href='https://d424-capstone-d7449667325d.herokuapp.com/' target='_blank'><p>Visit Site</p></a>
                    <a href='https://github.com/jereid27/workWizard' target='_blank'><p>View Code</p></a>
                </div>
            </div>

            {/*Second Project*/}
            <div className="gridItem" data-aos='fade-left' data-aos-easing='ease-in'><h1 className='proj1-header'>Meridian Tattoo Supply</h1>
                <p>Meridian Tattoo supply is a fullstack application built using Java, Spring Boot,
                HTML, CSS, and H2 database to allow users to shop online for parts and products. Using CRUD functionality, a user can add, update, and
                delete parts or products from their inventory. Search fuctionality is available to find specific items in each section.</p>
                <div className="links">
                    <a className='link2' href='https://github.com/jereid27/Supply-Store-Springboot' target='_blank'><p>View Code</p></a>
                </div>
            </div>
            <div className="gridItem" data-aos='fade-left' data-aos-easing='ease-in'><img className='projImg' src='/tattooSupply.png'/></div>

            {/*Third Project*/}
            <div className="gridItem" data-aos='fade-right' data-aos-easing='ease-in'><img className='projImg' src='/world-map.png'/></div>
            <div className="gridItem" data-aos='fade-right' data-aos-easing='ease-in'><h1 className='proj1-header'>World Map</h1>
                <p>This world map, created using AngularJS, allows users to view API sourced facts about individual countries. This is made possible
                     by leveraging mouse events that display information on screen derived from an API when a user selects a desired country.</p>
                     <div className="links">
                     <a className='link2' href='https://github.com/jereid27/World-Map' target='_blank'><p>View Code</p></a>
                     </div>
                     </div>
        </div>
        <div className='borderBottom'></div>
    </div>
  )
}

export default Projects