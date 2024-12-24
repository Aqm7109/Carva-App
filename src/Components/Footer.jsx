import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
          <div className="footer-section">
           <div> 
            <img src="/Images/CARVALOGO.svg" alt="check again" height={300} />
            <div className='copyright-content'>&copy; 2024 <div>Carva MediaHub</div></div>
          </div>

          <div className='Our-services'>
              <div>Services</div>
              <div>Web Development</div>
              <div>Content Creation</div>
              <div>Social Media Marketing</div>
              <div>Digital Marketing</div>
          </div>

          <div className="contact-section">
              <div>Contacts</div>
              <div>+91 9573929045</div>
              <div>carvamediahub@gmail.com</div>
          </div>
          
      

          </div>
    
  )
}

export default Footer
