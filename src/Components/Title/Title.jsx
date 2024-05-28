import React from 'react'
import './Title.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Title = () => {
  return (
    <div className='title' id='title'>

        <div className="titleContent">

                <div className="titleName">
                    <h1 className='firstName'>JUDE</h1>
                    <h1 className='lastName'>&nbsp;REID</h1>
                </div>

                <div className="titleLine"></div>

                <div className="titleText">
                    <h2>A design driven full stack software engineer devoted
                            to building accessible and efficient programs.
                    </h2>
                    <h3 className='connectButton'>Connect With Me!</h3>
                </div>

        </div>

        <AnchorLink className='anchor-link' offset={50} href='#about'><div className='arrows'></div></AnchorLink>

    </div>
  )
}

export default Title