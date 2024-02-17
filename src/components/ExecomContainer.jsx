import React from 'react';
import Link from 'next/link';

const ExecomContainer = () => {

  return (
    <div className='flex flex-col items-center bg-nav-bg'>
        <div className="mt-10 mb-10 md:mt-0 md:mb-0 flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center h-auto ">
            <div className="md:mt-24 overflow-hidden rounded-full border-4 border-white">
                <img src='/assets/execommember/Sanjay S J.jpg' className="w-64 h-64 object-cover rounded-lg" />
            </div>
            <div className="overflow-hidden rounded-full border-4 border-white">
                <img src='/assets/execommember/Bharath Vishnu.jpg' className="w-64 h-64 object-cover rounded-lg" />
            </div>
            <div className='md:mt-24 overflow-hidden rounded-full border-4 border-white'>
                <img src='/assets/execommember/Mohammed sinan pakkada .jpg' className="w-64 h-64 object-cover rounded-lg" />
            </div>
        </div>
        <div className='mt-2 mb-5 px-5 py-3 bg-cyanblue hover:bg-white text-white hover:text-black relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden transition-colors duration-300'>
            <Link href="/Execom">OUR TEAM</Link>
        </div>
    </div>
  );
};

export default ExecomContainer
