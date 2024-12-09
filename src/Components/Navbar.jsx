import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import {NavLink , Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
          <div>
            
            
            <img src="/Images/CARVALOGO.svg" height={170} alt="" />
              <div className='Company-name'>
                Carva MediaHub
                <div className="Company-desc">Digital Media Expert</div>  
              </div>
          </div>

          <ul className='list'>
          <NavLink className = {(e)=>{ return e.isActive?"bg-white":"maroon"}} to="/">Home</NavLink>
          <NavLink className = {(e)=>{ return e.isActive?"bg-white":"maroon"}} to="/about">About</NavLink>
          <NavLink className = {(e)=>{ return e.isActive?"bg-white":"maroon"}} to="/Services">Services</NavLink>
          <NavLink className = {(e)=>{ return e.isActive?"bg-white":"maroon"}} to="/Contact-us">Contact-Us</NavLink>
            
            <Link to='https://www.instagram.com/carva_mediahub?igsh=MWx2aGx0ZDV2d2Z2cA==' target='_blank'><FaInstagram size={40} color='black'/></Link>
            <Link to="https://www.linkedin.com/company/carva-mediahub/posts/?feedView=all" target='_blank'><FaLinkedin size={40} color='black'/></Link>
          </ul>

        </div>
      

    </div>
  )
}

export default Navbar
