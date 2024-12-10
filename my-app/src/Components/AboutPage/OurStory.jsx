import React from 'react';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  // Use Intersection Observer for scroll detection
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers both on entry and exit
    threshold: 0.2, // Adjust to control when the animation starts
  });

  return (
    <div className="Our-story">
      <p>Our Story</p>
      <div
        className={`Flex-class ${inView ? 'visible' : ''}`}
        ref={ref} // Attach ref to the container
      >
        <img src="/Images/CARVALOGO.svg" height={600} alt="" />
        <div className="Storycontainer">
          <div className="Story-content-1">
            Every website has a story, and your visitors want to hear yours. This
            space is a great opportunity to give a full background on who you are,
            what your team does, and what your site has to offer. Double click on
            the text box to start editing your content and make sure to add all
            the relevant details you want site visitors to know.
          </div>
          <div className="Story-content-2">
            If you’re a business, talk about how you started and share your
            professional journey. Explain your core values, your commitment to
            customers, and how you stand out from the crowd. Add a photo, gallery,
            or video for even more engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
