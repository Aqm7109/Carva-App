import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
const Contentcreation = () => {

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers both on entry and exit
    threshold: 0.2, // Adjust to control when the animation starts
  });
  return (
    <div>
        <div className={`container1 Flex-class1 ${inView ? 'visible' : ''}`} ref={ref}>
                
                <div className="dev-content">
                   <span className="subtitle-webdev">Content Creation</span>
                   <div className='webdev-content'>
                    <div>
                    Our approach to content creation is rooted in understanding the unique characteristics and goals of your brand. We begin by conducting comprehensive research to grasp the nuances of your industry, audience preferences, and the competitive landscape. This allows us to tailor our content strategy, ensuring it effectively communicates your brand's message while highlighting its distinctive voice.</div>
                    
                    <div>What We Offer : </div>
                    </div>
        
                    <div className='dd1'>
                      <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Blog Writing & Articles</div>
                      <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Social Media Content</div>
                      <div><FontAwesomeIcon icon={faCaretRight} className="icon" />Graphic Design</div>
                    </div>
        
        
                </div>
                <div className='roundimg'><img src="/Images/contentcreation.png" alt="" height={500}/></div> 
              </div>

    </div>
  )
}

export default Contentcreation
