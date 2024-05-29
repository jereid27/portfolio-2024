import React from 'react'
import './Languages.css'

const Languages = () => {
  return (
    <div className='languages'>

        <div className="languagesHeader">
                    <h1>LANGUAGES \ <span>FRAMEWORKS</span></h1>
                    <h3>This list continues to grow:)</h3>
        </div>

        <div className="languagesGrid" data-aos='fade-up' data-aos-easing='ease-in'>
            <div className="lang-grid-itm"><img className='java' src='/src/assets/java-logo.png' alt='java logo'/></div>
            <div className="lang-grid-itm"><img className='javascript' src='/src/assets/javascript-logo.png' alt='js logo'/></div>
            <div className="lang-grid-itm"><img className='python' src='/src/assets/python-logo.png' alt='python logo'/></div>
            <div className="lang-grid-itm"><img className='html' src='/src/assets/html-logo.png' alt='html logo'/></div>
            <div className="lang-grid-itm"><img className='springboot' src='/src/assets/spring-boot-logo.png' alt='springboot logo'/></div>
            <div className="lang-grid-itm"><img className='react' src='/src/assets/react-logo.png' alt='react logo'/></div>
            <div className="lang-grid-itm"><img className='angular' src='/src/assets/angular-logo.png' alt='angular logo'/></div>
            <div className="lang-grid-itm"><img className='css' src='/src/assets/css-logo.png' alt='css logo'/></div>
        </div>

        <div className='borderBottom'></div>
        
    </div>
  )
}

export default Languages