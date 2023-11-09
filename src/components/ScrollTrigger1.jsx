import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Ellipse2 from '/public/assets/Ellipse2.png';

function ScrollTrigger1() {
  return (
    <div className="bg-cyanblue p-4 md:p-8 relative" >
      <div className='absolute bottom-0'>
          <Image src={Ellipse2} className='w-40 md:w-72'/>
      </div>
      <div className="flex md:flex-row justify-between md:gap-10 mt-10 pt-10 md:mr-5 lg:mr-10">
        <div className="h-1 md:h-2 w-32 md:w-56 lg:w-96 text-left bg-[#393E46]"></div>
        <div className="font-Poppins  font-bold md:text-6xl sm:text-4xl text-xl text-white text-right md:text-right ">
          WHO ARE WE?
        </div>  
      </div>
      <div className="text-white break-words md:text-2xl text-sm font-Poppins mt-4 md:mr-5 lg:mr-10 md:ml-5 lg:ml-10 md:mt-6 ml-5 text-right mb-20">
        IEI CSE SB at TKM College of Engineering is a vibrant community
        functioning under the esteemed banner of IEI Kollam Local Chapter!
        At IEI CSE SB TKMCE we aim to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club;
        we're a dynamic hub for future computer science engineers!
      </div>
      
    </div>
  );
}

export default ScrollTrigger1;
