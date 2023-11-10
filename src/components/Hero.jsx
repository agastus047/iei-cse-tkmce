import React from 'react';

const Hero = () => {
  return (
    <div className="bg-hero-bg md:h-128 h-128 py-48 md:py-32 ">
      <div className="container mx-auto text-center">
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
