import React from 'react'
import './Casestudy.css'
import { Link } from 'react-router-dom';

const Casestudy = () => {
  return (
    <div className="casestudy">

      <Link to="/" className='home-nav'><h3>Home</h3></Link>

        <div className="project-head">  
        <h1>L.A. Tabor Law Firm, PLLC</h1>
          <div className="title-descrip">
            <p>April 2024</p>
            <p>UX Conceptual Design</p>
            <p>Solo Project</p>
          </div>
        </div>

        <img src="/lataborthumbnail.png" alt="thumbnail" className='case-image' />


        <div className="main-text">

          <div className="textsection" id='line'>
            <h2>Summary</h2>
            <p>The L.A. Tabor Law Firm, PLLC official website serves as a information hub for those seeking workers' compensation
              representation. This website combines worker's compensation information and resources to equip users with the knowledge
              and confidence they need to address their legal situations. 
            </p>
          </div>

          <div className="textsection" id='line'>
            <h2>Initial Thoughts</h2>
            <div className="it-grid">
              <div className="it-gridsection">
                <h3>Target Users</h3>
                <ul>
                  <li>People seeking workers' compensation representation</li>
                  <li>Injured workers researching legal options</li>
                </ul>
              </div>
              <div className="it-gridsection">
                <h3>Research Methods</h3>
                <ul>
                  <li>Interview with the firm</li>
                  <li>Online research</li>
                  <li>Online survey</li>
                  <li>In person interviews</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="textsection" id='line'>
            <h2>Design Process</h2>
            <img src="/la-designproc.png" alt="design-process" className='design-process'/>
          </div>

          <div className="textsection" id='line'>
            <h2>Defining The Problem</h2>

            <p> It is not uncommon for the average person who doesn't practice law to be uneducated and unaware of the processes
              that take place when you've been injured in the work place. People who are facing these issues need factual and helpful
              information to make an informed decision on what to do next. Each state has different laws surround workplace injury, so it can
              be difficult for a user to navigate towards a solution. 
            </p>
          </div>

          <div className="textsection">
            <h2>Research</h2>

            <h3>User Interviews</h3>
            <p>The primary goal of this website is to supply users who may be suffering from a workplace 
              injury with information about different legal options. Therfore, using a user-centered design process is
              essential to design the website purely in the interest of the user. I conducted interviews with 20 partcipants who
              are either seeking legal representation or have recieved it in the past. These are the results of the interviews:
            </p>
            <div className="it-grid">
              <div className="it-gridsection">
                <p>Question 1</p>
                <h3 className='question'>How do you typically search for legal services?</h3>
                <ul>
                  <li>Google - 40%</li>
                  <li>Social Media - 18%</li>
                  <li>Referrals - 19%</li>
                  <li>Legal Directories - 23%</li>
                </ul>
              </div>
              <div className="it-gridsection">
                <p>Question 2</p>
                <h3 className='question'>What makes you feel confident in a law firm's expertise and reliability?</h3>
                <ul>
                  <li>Experience - 52%</li>
                  <li>Transparency - 15%</li>
                  <li>Legal Information - 20%</li>
                  <li>Testimonials - 13%</li>
                </ul>
              </div>
            </div>
          </div>

          <img src="/latabor-piechart.png" alt="piechart" className='piechart-img' />

          <div className="textsection" id='line'>
            <h3>Main Goals</h3>
            <h4>Access to Information</h4>
            <p>People who seek representation for workers' compensation are usually those who are not well versed in
              what happens next when they are injured in the work place. This website will present helpful information to the user to
              give them confidence to move forward with a lawyer. 
            </p>
            <h4>Access to the Law Firm</h4>
            <p>Once a user is informed on the laws surrounding injuries in the workplace, they will have the ability to contact
              L.A. Tabor Law Firm for more information or to request an appointment. 
            </p>
            
          </div>
          
          <div className="textsection" id='line'>
            <h2>Wireframing</h2>
            <h3>Low Fidelity</h3>
            <img src="/la-lowfidelity.png" alt="low-fidelity" className='lowfidelity' />
            <h3>Mid Fidelity</h3>
            <img src="/la-midfidelity.png" alt="mid-fidelity" className='midfidelity' />
          </div>

          <div className="textsection" id='line'>
            <h2>Final Design</h2>
            <h3>High Fidelity</h3>
            <img src="/latabor-prototype.png" alt="final design" className='finalDesign' />
          </div>

          <div className="textsection" id='line'>
            <h2>User Testing</h2>
            <h3>User Feedback</h3>
            <ul>
              <li>It is convenient to find all of the information on one platform.</li>
              <li>The resources page made it easy to find specific topics.</li>
              <li>It is convenient to request a consultation using the form.</li>
            </ul>
          </div>

          <div className='textsection'>
            <h2>Conclusion</h2>
            <p>I designed this website to meet the needs of the users. I found that relying on the feedback of the users through 
              each step of the process improved the design beyond what I initially imagined. Overall, I enjoyed working with the firm and interviewees
              to find a solution that met each of their needs. This case study allowed me to play around with all kinds of ideas and pushed me to grow as a designer.
            </p>
          </div>
        </div>

    </div>
  )
}

export default Casestudy