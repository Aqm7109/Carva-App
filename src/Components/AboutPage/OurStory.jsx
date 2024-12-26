import React from 'react';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  // Use Intersection Observer for scroll detection
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers both on entry and exit
    threshold: 0.25, // Adjust to control when the animation starts
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
          Carva MediaHub was born during the pandemic, a time when the world shifted online, and premium businesses sought innovative ways to adapt to the digital-first era. It all started with two friends who recognized the need for bespoke strategies to help high-end brands maintain their excellence in an evolving market.We began by offering tailored solutions to elevate their online presence and connect them with discerning audiences.
          </div>
          <div className="Story-content-2">
           What started as a passion project quickly grew into a premium Social Media Marketing Agency dedicated to empowering elite brands with cutting-edge digital strategies. Today, Carva MediaHub continues to partner with top-tier clients, delivering unparalleled results with creativity and precision.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
