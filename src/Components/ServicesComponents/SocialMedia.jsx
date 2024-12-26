import React from 'react'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
const SocialMedia = () => {

  const [ref, inView] = useInView({
      triggerOnce: false, // Animation triggers both on entry and exit
      threshold: 0.2, // Adjust to control when the animation starts
    });

  return (
    <div>
           <div className={`Social-Media-container Flex-class1 ${inView ? 'visible' : ''}`} ref={ref} >

           <img className='svg1' src="/Images/mobile-posts.svg" alt="" width='280' />

                    <div className="dev-content">

                    <div className="subtitle-webdev">Social Media Marketing</div>

                    <div className='webdev-content'>
                          <div>
                          In today's digital age, social media marketing is a powerful tool for businesses to reach and engage with their target audience.With tailored content and strategic advertising, businesses can effectively promote products and services, engage with their audience in real-time, and gather valuable insights through social media analytics.Social media marketing is essential for growing your online presence and achieving business success.</div>
                          
                          {/* <div>Why Choose Us ?</div> */}
                    </div>

                    <div className='dd'>
                                  <FontAwesomeIcon icon={faCaretRight} className="icon" />Drive Conversions
                                  <FontAwesomeIcon icon={faCaretRight} className="icon" />Customer Relations
                                  <FontAwesomeIcon icon={faCaretRight} className="icon" />Brand Awareness
                                  <FontAwesomeIcon icon={faCaretRight} className="icon" />Stay Competitive
                                  {/* <FontAwesomeIcon icon={faCaretRight} className="icon" />E-Commerce Project */}
                    </div>

              

                    </div>
                    <img  className = 'svg2' src="/Images/social-growth.svg" alt="" width='280' />

            </div>
    </div>
  )
}

export default SocialMedia
