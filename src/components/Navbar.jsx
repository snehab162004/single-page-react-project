import React from 'react';
import logo from '../images/logo.png'
import '../styles/navbar.css'
export default function Navbar() {
  return (
      <nav className='nav-container'>
        <img src={logo}
         alt='react-logo'
         className='logo'
         />
         <h3 className='logo-name'>ReactFacts</h3>
         <h4 className='heading'>React Course - Project 1</h4>
      </nav>

  );
}


