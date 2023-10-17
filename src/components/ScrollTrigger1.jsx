import React from 'react';

function ScrollTrigger1() {
  return (
    <div className="bg-cyanblue p-4 md:p-8">
      <div className="flex md:flex-row justify-between md:gap-24">
        <div className="h-1 w-40 mt-10 md:mt-5 md:w-96 md:text-left bg-black"></div>
        <div className="font-Poppins font-bold text-xl md:text-4xl text-white md:text-right">
          WHO ARE WE?
        </div>
      </div>
      <div className="text-white text-md md:text-2xl font-Poppins mt-4 md:mt-6 md:text-right">
        IEI CSE SB at TKM College of Engineering is a vibrant community
        functioning under the esteemed banner of IEI Kollam Local Chapter!
        At IEI CSE SB TKMCE we aim to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club;
        we're a dynamic hub for future computer science engineers!
      </div>
    </div>
  );
}

export default ScrollTrigger1;
