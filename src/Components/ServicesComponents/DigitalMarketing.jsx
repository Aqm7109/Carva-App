import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';
const DigitalMarketing = () => {
  
  const [ref, inView] = useInView({
      triggerOnce: false, // Animation triggers both on entry and exit
      threshold: 0.2, // Adjust to control when the animation starts
    });

  return (
    <div>
       <div className={`Marketing-container Flex-class ${inView ? 'visible' : ''}`} ref={ref} >
       <div className='polaroid-video'><video src="/Images/large.mp4" alt="video" autoPlay muted loop  /></div> 
                       <div className="dev-content">
                         <span className="subtitle-webdev">Digital Marketing</span>
                         <div className='webdev-content'>
                          <div>
                          In today's fast-paced, digital-first world, businesses need to leverage cutting-edge marketing strategies to stay ahead of the competition. Our Digital Marketing Services help you effectively reach your target audience, boost brand visibility, and drive sales through a variety of online channels. Whether you're looking to enhance your online presence or launch a new campaign, we have the expertise to make it happen.</div>
                          
                          <div>Why Choose Us ?</div>
                          </div>
              
                          <div className='dd1'>
                            <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Customized Solutions: We tailor our strategies to meet the unique needs of your business.</div>
                            <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Data-Driven Approach: Our decisions are powered by data and insights to ensure the best outcomes.</div>
                            <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Results-Oriented: We focus on ROI, driving real growth through measurable outcomes.</div>
                          </div>
              
            
                      </div> 
                     
                    </div>
    </div>
  )
}

export default DigitalMarketing