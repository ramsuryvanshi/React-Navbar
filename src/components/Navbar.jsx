import React, { useState } from 'react';

import './Navbar.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home  from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'

function Navbar() {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <BrowserRouter>
    <nav className='navbar'>
    <div className='navbar-logo'>Website </div>
    <div className='mneu' onClick={toggleMenu}>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
    </div>
    <ul className={isMenuOpen?'navbar-links active':'navbar-links '}>
        <li>
         <NavLink to={'/'} onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}  onClick={toggleMenu}>About</NavLink>
         </li>
         <li>
            <NavLink to={'/service'} onClick={toggleMenu}>Service</NavLink>
            </li>      
        <li>
            <NavLink to={'/contact'} onClick={toggleMenu}> Contact</NavLink>
            </li>
    </ul>
   
    </nav>
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default Navbar