import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import '../Services.css'
const webdev = () => {
  return (
    <div>
      
      <div className="container">
         <div><img src="/Images/Webdevelopment.png" alt="" height={380}/></div> 
        
        <div className="dev-content">
           <span className="subtitle-webdev">Website Development</span>
           <div className='webdev-content'>
            <div>
            Our web design and development agency offers comprehensive services for creating websites of any complexity, ranging from simple one-page sites to large-scale information portals with advanced layouts or B2B platforms for effective online business operations.</div>
            
            <div>Website development by our experts serves as a robust tool, enabling you to find the best solutions for business growth on the internet. We create custom designs and applications from the ground up, avoiding standard templates. This approach lends uniqueness to our projects, enhances promotion, and ensures excellent conversion rates.</div>
            </div>

            <div className='dd'>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />Single Page Applications
              <FontAwesomeIcon icon={faCaretRight} className="icon" />Landing Page
              <FontAwesomeIcon icon={faCaretRight} className="icon" />Corporate Website
              {/* <FontAwesomeIcon icon={faCaretRight} className="icon" />E-Commerce Project */}
            </div>
            <div className='dd'>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />E-Commerce Project
              <FontAwesomeIcon icon={faCaretRight} className="icon" />Redesign
              <FontAwesomeIcon icon={faCaretRight} className="icon" />Website Improvement
            </div>


        </div>
         
      </div>

    </div>
  )
}

export default webdev
