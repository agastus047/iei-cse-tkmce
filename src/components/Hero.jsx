import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-oldeenglish text-black md:text-6xl">
          The Institution of Engineers India
        </h1>
        <h2 className='text-5xl font-oldeenglish text-black md:text-6xl'>
            Computer Science
        </h2>
        <div className="h-2 bg-[#00ADB5] w-64 mx-auto my-8 md:w-128"></div>
        <h2 className="text-2xl text-black md:text-4xl">TKM College of Engineering</h2>
      </div>
    </div>
  );
};

export default Hero;
