import React from 'react';
import Image from 'next/image';
const TestComponent2 = () => {
  const customBoxShadowStyle1 = {
    zIndex: '1',
    clipPath: 'polygon(0% 30%, 30% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 80%)',
  };

  const customBoxShadowStyle2 = {
    clipPath: 'polygon(0% 0%, 90% 0%, 100% 5%, 100% 90%, 90% 100%, 90% 100%, 20% 100%, 0% 80%)',
    position: 'absolute', 
    zIndex: '1', 
    marginLeft: '0',
  };

  const customBoxShadowStyle3 = {
    position: 'absolute', 
    background: '#1F2025',
   
    zIndex: '0',
    clipPath: 'polygon(14% 0, 89% 0, 100% 8%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0 9%)',
   
  };
  const customBoxShadowStyle4 = {
    position: 'absolute', 
    background: '#1F2025',
    
    zIndex: '0',
    clipPath: 'polygon(0% 30%, 30% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 80%)',
   
  };

  return (
    <div className='flex-col'>
      <div className='flex justify-between md:gap-10 lg:gap-20 xs:gap-5 xxs:gap-5 items-center mb-10 mr-0'>
        <div className='flex-col font-Michroma ml-10 lg:ml-20 w-3/6 text-left'>
          <h1 className='text-white mb-10 font-semibold lg:text-6xl xs:text-2xl xxs:text-2xl xxxs:text-2xl text-5xl'>Vision</h1>
          <p className='text-white lg:text-2xl text-l font-normal xs:p-2'>"A pathway to technological realm"<br /> We envision to be one of the vibrant professional society of technologists and applied scientists in the world.</p>
        </div>
        <div style={customBoxShadowStyle1}>
          <Image
            
            src="/vision.png"
            height={400}
            width={450}
            alt="Picture of the author"
            className='lg:w-500 lg:h-500 sm:w-72 sm:h-72  xxs:w-40 xxs:h-40 xxxs:w-36 w-64 h-64'
          />
        </div>
        <div style={customBoxShadowStyle4} className='lg:w-350 lg:h-350  lg:right-40  lg:mb-36 md:right-16 md:w-64 md:h-64  sm:right-16 sm:w-60 sm:h-60 xs:h-32      xxs:right-8 xxs:w-32 xxs:h-32  xxxs:w-12 xxxs:right-3 w-48 h-52  mb-8 '></div>
      </div>

      <div className='flex justify-between lg:gap-20 items-center'>
      <div className='lg:w-500 lg:h-500  w-3/6   h-64'>
      <Image

        style={customBoxShadowStyle2}
        src="/ai.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className='lg:w-500 lg:h-500 sm:w-72 sm:h-72  xxs:w-40 xxs:h-40 w-44 h-64'
      />
    </div>
    <div style={customBoxShadowStyle3} className='lg:w-400 lg:h-400 lg:ml-20 lg:mb-64 sm:w-64 sm:h-64   sm:mb-12  xxs:w-32 xxs:h-32 xxs:mb-48 xxs:ml-6 w-52 h-64  ml-2'>
      </div>

      <div className='flex-col font-Michroma mr-5 lg:mr-10 w-3/6 text-right'>
        <h1 className='text-white mb-10 font-semibold lg:text-6xl xs:text-2xl xxs:text-2xl  text-5xl'>Mission</h1>
        <p className='text-white lg:text-2xl text-l font-normal'>Our mission at IEI CSE SB TKMCE is to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club; we're a dynamic hub for future computer science engineers!</p>
      </div>
    </div>
    </div>
  );
};

export default TestComponent2;
