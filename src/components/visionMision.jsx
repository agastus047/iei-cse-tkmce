import React from 'react';
import Image from 'next/image';
const TestComponent2 = () => {
  

 

  const customBoxShadowStyle3 = {
   
    background: '#1F2025',
   
   
    clipPath: 'polygon(14% 0, 89% 0, 100% 8%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0 9%)',
   
  };
  const customBoxShadowStyle4 = {
    
    background: '#1f2025',
    
   
    clipPath: 'polygon(13% 0, 100% 0, 100% 30%, 100% 88%, 90% 100%, 30% 100%, 0 67%, 0 10%)',
   
  };
  
  return (
    <div className='flex-col justify-start '>
      <div className='flex justify-between md:gap-10 lg:gap-5 gap-5  items-center  mr-0 pt-4 pb-4' style={{background:'#00ADB5'}}>
        <div className='flex-col font-Poppins ml-5 lg:ml-20 w-3/6 text-left md:ml-12' style={{background:'#00ADB5'}}>
          <h1 style={{background:'#00ADB5'}} className='vision text-white sm:mb-10 mb-2 font-extrabold   md:text-6xl sm:text-4xl text-xl'>Vision</h1>
          <p style={{background:'#00ADB5'}} className='text-white md:text-2xl text-sm font-normal p-2'>"A pathway to technological realm"<br /> We envision to be one of the vibrant professional society of technologists and applied scientists in the world.</p>
          <hr style={{top: '20px',border: 'none',height: '4px',background: '#393E46',marginBottom:'10px'}}></hr>
        </div>
        <div style={customBoxShadowStyle4} className='absolute xl:w-400 xl:h-500 xl:-mb-4  xl:right-32 lg:w-350 lg:h-390  lg:right-16  lg:-mb-10  sm:right-10  sm:w-64 sm:h-72 sm:-mb-7   min-[320px]:right-5 max-[640px]:right-12 w-32 h-36 -mb-4' ></div>
        <div  className='bg-#00ADB5 '>

        <svg viewBox="0 0 100 100"  className='relative xl:w-500 xl:h-500 lg:w-400 lg:h-400 sm:w-72 sm:h-72  w-36 h-36   '>

        <defs>
          <pattern id="imagePattern1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">



            <image xlinkHref="/vision.png" x="0" y="0" width="100" height="100" preserveAspectRatio="xMinYMin slice"  />



          </pattern>



        </defs>



        <polygon points="0 30, 30 0, 100 0, 100 0, 100 0, 100 100, 10 100, 0 80" fill="url(#imagePattern1)" stroke="#1f2025" strokeWidth="0" />
        


        <polyline points="70,1 31,1 1,31 1,80 11,99 20 " fill="none" stroke="#000000" strokeWidth="0.5" />
        <polygon points="85 2, 100 2, 100 7, 80 7" fill="#00ADB5" stroke="#00ADB5" strokeWidth="1" />



      </svg>
          
        </div>
        
        
        
        </div>

      <div className='flex justify-between lg:gap-20 xl:-ml-10  pb-8 pt-8 lg:h-500 sm:h-400  ' style={{backgroundColor:'#393E46'}}>
      <div style={customBoxShadowStyle3} className='absolute  lg:w-80 lg:h-80 xl:ml-24 lg:ml-20   lg:-mt-6    sm:w-64 sm:h-64   sm:-mt-6  w-28 h-28 ml-7 -mt-4'>
      </div>
      <div>
          <svg viewBox="0 0 100 100"   className='relative xl:w-450 xl:h-450 xl:mb-72 lg:w-400 lg:h-400 sm:w-72 sm:h-72  w-36 h-36  '>



            <defs>



              <pattern id="imagePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">



                <image xlinkHref="/ai.png" x="0" y="0" width="100" height="100" preserveAspectRatio="xMinYMin slice" />



              </pattern>



            </defs>



            <polygon points="0 0, 90 0, 100 5, 100 90, 90 100, 90 100, 20 100, 0 80" fill="url(#imagePattern)" stroke="#1f2025" strokeWidth="0" />



            <polyline points="85,5 95,10 95,86 90,93 20,93 " fill="none" stroke="#000000" strokeWidth="0.5" />
            <polygon points="0 6, 8 6, 13 15, 0 15" fill="#393E46" stroke="#393E46" strokeWidth="0" />



          </svg>
          
    </div>
    

      <div className='flex-col font-Poppins md:mr-10 mr-5 lg:mr-20 w-3/6 text-right items-center lg:pt-10' >
        <h1 className='text-white sm:mb-10 font-extrabold md:text-6xl  text-xl mb-2 sm:text-4xl '>Mission</h1>
        <p className='text-white md:text-2xl text-sm font-normal '>Our mission at IEI CSE SB TKMCE is to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club; we're a dynamic hub for future computer science engineers!</p>
        <hr style={{position: 'relative',top: '20px',border: 'none',height: '4px',background: '#00ADB5',}}></hr>
      </div>
    </div>
    </div>
  );
};

export default TestComponent2;