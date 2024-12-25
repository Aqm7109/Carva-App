// import React, { useEffect, useState } from 'react';
// import './App.css'; // Assuming your CSS is in App.css
// const ScrollAnimationComponent = () => {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in-viewport');
//           } else {
//             entry.target.classList.remove('animate-in-viewport');
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible
//     );

//     const elements = document.querySelectorAll('.animate');
//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       elements.forEach((element) => {
//         observer.unobserve(element);
//       });
//     };
//   }, []);

//   return (
//     <>
      
//     </>
//   );
// };

// export default ScrollAnimationComponent;
