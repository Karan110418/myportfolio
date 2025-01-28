import React, { useState } from 'react'
import logo from '../../Assets/logo.jpg'
import './Navbar.css'
import { About } from '../About/About'
import resume from '../../Assets/Kresume_web.pdf'


export const Navbar = () => {

    
  return (
    <>
   
    <div className='navbar'>
       <div className='nav-content'>
        <img src={logo} className='logo' alt='' />

        <ul>
            <li>
                <a className='menu-item' >Home</a>
            </li>

            <li>
                <a className='menu-item'>About</a>
            </li>

            <li>
                <a className='menu-item'>Projects</a>
            </li>

            <li>
                <a className='menu-item'>Contact Me</a>
            </li>

            <button className='contactbtn' onClick={()=>{}}><a href={resume} download='resume'style={{textDecoration:"none", color:"white"}}>Resume</a></button>
        </ul>

       </div>
    </div>
    </>
  )
}
