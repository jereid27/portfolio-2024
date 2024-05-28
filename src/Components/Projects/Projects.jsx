import React, { useState, useEffect }from 'react'
import './Projects.css'

const Projects = () => {

  return (
    <div className='projects'>
        <div className="projectHeader">
            <h1>PROJECTS</h1>
            <h3>FRONTEND | BACKEND | FULLSTACK</h3>
        </div>

        <div className="proj-grid">
            {/*First Project*/}
            <div className="gridItem"><img className='projImg'src='src/assets/workwiz-home.png'/></div>
            <div className="gridItem"><h1 className='proj1-header'>Work Wizard - Employee Dashboard</h1>
                <p>Work Wizard - Employee Dashboard is a fullstack application built using Java, Spring Boot, Spring Boot Security,
                    HTML, CSS, and PostgreSQL designed to help independent contractors such as cosmetologists and tattoo artists 
                    manage their pay log, consultation notes, and inventory. The user can safely create and log into their own account
                    and manage specific details about their business with CRUD functionality. A generative report for payment history
                    can be made and viewed based on the information entered by the user.</p>
            </div>

            {/*Second Project*/}
            <div className="gridItem"><h1 className='proj1-header'>Meridian Tattoo Supply</h1>
                <p>Meridian Tattoo supply is a fullstack application built using Java, Spring Boot,
                HTML, CSS, and H2 database to allow users to shop online for parts and products. Using CRUD functionality, a user can add, update, and
                delete parts or products from their inventory. Search fuctionality is available to find specific items in each section.</p>
            </div>
            <div className="gridItem"><img className='projImg' src='src/assets/tattooSupply.png'/></div>

            <div className="gridItem"><img className='projImg' src='src/assets/world-map.png'/></div>
            <div className="gridItem"><h1 className='proj1-header'>World Map</h1>
                <p>This world map, created using AngularJS, allows users to view API sourced facts about individual countries. This is made possible
                     by leveraging mouse events that display information on screen derived from an API when a user selects a desired country.</p></div>
        </div>
    </div>
  )
}

export default Projects