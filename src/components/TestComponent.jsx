import React from 'react';
import Image from 'next/image';

const TestComponent2 = () => {
  const customBoxShadowStyle1 = {
    position: 'absolute', 
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
    clipPath: ' polygon(21% 0, 100% 0, 100% 0, 100% 70%, 100% 100%, 13% 100%, 1% 89%, 0 20%)',
   
  };

  return (
    <div className='flex-col  w-full max-w-screen-xl mx-auto'>
      <div className='flex   justify-between items-center mb-10 mr-0'>
        <div className='flex-col font-Michroma ml-10 lg:ml-20 w-3/6 text-left'>
          <h1 className='text-white mb-10 font-semibold lg:text-6xl text-5xl'>Vision</h1>
          <p className='text-white lg:text-2xl text-l font-normal'>"A pathway to technological realm"<br /> We envision to be one of the vibrant professional society of technologists and applied scientists in the world.</p>
        </div>
        <div  className='lg:w-500 lg:h-500 w-64 h-64 lg:-mr-20'>
          <Image
          style={customBoxShadowStyle1}
            src="/vision.png"
            height={400}
            width={450}
            className='lg:w-500 lg:h-500 w-56 h-64 p-0  m-0'
            alt="Picture of the author"
          />
        </div>
        <div style={customBoxShadowStyle4} className='lg:w-400 lg:h-350 lg:right-36 lg:mb-36 md:right-20 sm:right-30  xxxs:-right-20 xs:-right-10 xxs:right-50 w-52 h-52  mb-8 '></div>
    </div>

      <div className='flex  justify-between w-screen items-center'>
      
        <div className='lg:w-500 lg:h-500  w-3/6   h-64'>
          <Image

            style={customBoxShadowStyle2}
            src="/ai.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className='lg:w-500 lg:h-500 w-56 h-64'
          />
        </div>
        <div style={customBoxShadowStyle3} className='lg:w-400 lg:h-400 lg:ml-20 lg:mb-64  w-52 h-64 mb-12 ml-2'>
        
   
      </div>

      <div className='flex-col  font-Michroma  w-3/6 text-right'>
        <h1 className='text-white mb-10 font-semibold lg:text-6xl text-5xl'>Mission</h1>
        <p className='text-white lg:text-2xl text-l font-normal'>Our mission at IEI CSE SB TKMCE is to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club; we're a dynamic hub for future computer science engineers!</p>
      </div>
    </div>
    </div>
  );
};

export default TestComponent2;
