import React, { useEffect, useRef ,useState} from 'react';
import Image from 'next/image';
import Ellipse1 from '/public/assets/Ellipse2new.png';

function ScrollTrigger2() {
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newRotation = scrollY * 0.1;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-hero-bg p-4 md:p-8 relative">
      <div className='absolute top-0 right-6 md:top-0 md:right-8'>
      <div className="overflow-hidden h-[50%] relative">
          <Image
            ref={imageRef}
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease' }}
            src={Ellipse1}
            className='w-40 md:w-72 mt-[-90px] md:mt-[-140px]'
          />
        </div>
      </div>
      <div className="flex md:flex-row justify-between md:gap-24 mt-20 md:mt-32 relative">
        <div className="font-Poppins font-bold md:text-5xl sm:text-4xl text-xl text-black md:text-right lg:ml-12 md:ml-5 ">
          WHAT WE DO?
        </div>
        <div className="h-1 md:h-2 md:mt-5 w-32 md:w-56 lg:w-96 sm:48 md:text-left bg-cyanblue"></div>
      </div>
      <div className="text-black md:text-2xl text-sm md:ml-5 lg:ml-12 ml-2 mr-2 lg:mr-12 md:mr-5 font-Poppins mt-4 md:mt-6 md:text-left mb-20">
        <p className='break-words'>Exclusive Resources: Dive into a treasure trove of cutting-edge
          resources, from the latest tech trends to in-depth coding tutorials – we've got your back.</p>
        <p className='break-words'>
          <br></br>
          Mentorship: Connect with industry experts and seasoned professors who are
          eager to guide you on your journey to becoming a top-notch computer scientist.</p>
        <p className='break-words'>
          <br></br>
          Innovation Playground: Explore innovation labs, hackathons, and tech workshops <br></br>designed to ig </p>
      </div>
    </div>
  );
}

export default ScrollTrigger2;
