import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Ellipse1 from '/public/assets/Ellipse1.png';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function ScrollTrigger2() {
  // const containerRef = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const image = containerRef.current.querySelector('.cover');
  //   const rotationAngle = 180; 

  //   gsap.to(image, {
  //     rotation: rotationAngle,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: 'body',
  //       start: 'bottom-center',
  //       end: 'bottom center',
  //       scrub: 2,
  //     },
  //   });
  // }, []);

  return (
    <div className="bg-hero-bg p-4 md:p-8 relative">
      {/* <div className='cover absolute top-0 right-6 md:top-60 md:right-8'>
          <Image src={Ellipse1} className='w-48 md:w-72'/>
      </div> */}
      <div className="flex md:flex-row justify-between md:gap-24 mt-20">
        <div className="font-Poppins font-bold md:text-6xl sm:text-4xl text-xl text-black md:text-right md:ml-20">
          WHAT WE DO?
        </div>
        <div className="h-1 md:h-2 w-40 mt-10 md:mt-5 md:w-96 md:text-left bg-cyanblue"></div>
      </div>
      <div className="text-black md:text-2xl text-sm md:ml-20 font-Poppins mt-4 md:mt-6 md:text-left mb-20">
        <p>Exclusive Resources: Dive into a treasure trove of cutting-edge<br></br>
        resources, from the latest tech trends to in-depth coding tutorials – we've got your back.</p>
        <p>
        <br></br>
        Mentorship: Connect with industry experts and seasoned professors who are<br></br>
        eager to guide you on your journey to becoming a top-notch computer scientist.</p>
        <p>
        <br></br>
        Innovation Playground: Explore innovation labs, hackathons, and tech workshops <br></br>designed to ig </p>
      </div>
    </div>
  );
}

export default ScrollTrigger2;