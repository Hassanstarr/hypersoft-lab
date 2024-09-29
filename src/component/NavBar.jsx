import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../style/navBar.css"
import umtLogo from '../asset/umtLogo.png'

const NavBar = () => {

  const LightMode = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
  const DarkMode = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme');
  const [themeIcon, setThemeIcon] = useState(LightMode);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme('light-theme')
      setThemeIcon(LightMode)
      localStorage.setItem('theme', 'light-theme');
    } else {
      setTheme('dark-theme')
      setThemeIcon(DarkMode)
      localStorage.setItem('theme', 'dark-theme');
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  console.log(theme);


  return (
    <nav>

      <div className='logo-container'>
        <img src={umtLogo} alt="" />
      </div>

      <div ref={buttonRef} className="menu-icon" onClick={toggleMobileMenu}>
        <div style={{ fontSize: "1rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Select Page
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 5px' }}>
          &#9776;
        </div>
      </div>

      <ul ref={menuRef} className={isMobileMenuOpen ? 'nav-links open' : 'nav-links'}>
        <li onClick={isMobileMenuOpen ? toggleMobileMenu : null}> <Link to="/">Home</Link ></li>
        <li onClick={isMobileMenuOpen ? toggleMobileMenu : null}> <Link to="/research">Research</Link> </li>
        <li onClick={isMobileMenuOpen ? toggleMobileMenu : null}> <Link to="/people">People</Link> </li>
        <li onClick={isMobileMenuOpen ? toggleMobileMenu : null}> <Link to="/publications">Publications</Link> </li>
        <li onClick={isMobileMenuOpen ? toggleMobileMenu : null}> <Link to="/contact">Contact</Link> </li>


        <div className="nav-block">
          <ul>
            <li onClick={toggleTheme} className='themebtn'>
              {themeIcon}
            </li>
          </ul>
        </div>
      </ul>


    </nav>

  )
}

export default NavBar