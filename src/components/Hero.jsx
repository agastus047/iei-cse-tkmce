import React from 'react';

const Hero = () => {
  return (
    <div className="bg-hero-bg md:h-screen  py-48 md:py-32 flex justify-center content-center min-h-screen -mb-20 xss:-mb-24 sm:-mb-28 xl:-mb-32">
      
      <div className="container mx-auto text-center">
        <div className='md:h-40 xl:h-0 h-0'></div>
        <h1 className="text-5xl font-oldEnglish text-black md:text-8xl">
          The Institution of Engineers India
        </h1>
        <h2 className='text-5xl font-oldEnglish text-black md:text-8xl'>
            Computer Science
        </h2>
        <div className="h-1 md:h-2 bg-[#00ADB5] w-64 mx-auto my-6 md:my-8 md:w-128"></div>
        <h2 className="text-2xl font-Poppins text-nav-bg md:text-4xl">TKM College of Engineering</h2>
      </div>
    </div>
  );
};

export default Hero;
