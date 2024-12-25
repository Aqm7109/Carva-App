import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
      <div>
          {/* <div className="separator"></div> */}
          <div className="footer-section">
           <div> 
            <img src="/Images/CARVALOGO.svg" alt="check again" height={300} />
            <div className='copyright-content'>&copy; 2024 <div>Carva MediaHub</div></div>
          </div>

          <div className='Our-services'>
              <div>Services</div>
              <div><NavLink className='NavLink' to="/Services">Web Development</NavLink></div>
              <div><NavLink className='NavLink' to = "/Services">Content Creation</NavLink></div>
              <div><NavLink className='NavLink' to = "/Services">Social Media Marketing</NavLink></div>
              <div><NavLink className='NavLink' to = "/Services">Digital Marketing</NavLink></div>
              
          </div>

          <div className="contact-section">
              <div>Contacts</div>
              <div>+91 9573929045</div>
              <div>carvamediahub@gmail.com</div>
          </div>
          
      

          </div>
       </div>
  )
}

export default Footer
