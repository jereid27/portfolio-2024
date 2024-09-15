import React, { useEffect, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);

            window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <div>
        <div className={`navbar ${sticky? 'dark-nav' : ''} ${mobileMenu?'':'hide-mobile-menu'}`}>
            <div className="firstNav">
                <ul>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>ABOUT</AnchorLink></li>
                    <li><AnchorLink className='anchor-link' offset={50} href='#resume'>RESUME</AnchorLink></li>
                </ul>
            </div>
            <AnchorLink className='anchor-link' offset={50} href='#title'><img src="/star-img.webp" alt="star" className="star" onClick={toggleMenu} /></AnchorLink>
            <div className="secondNav">
                <ul>
                <AnchorLink className='anchor-link' offset={50} href='#projects'><li>PROJECTS</li></AnchorLink>
                <AnchorLink className='anchor-link' offset={50} href='#contact'><li>CONTACT</li></AnchorLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar