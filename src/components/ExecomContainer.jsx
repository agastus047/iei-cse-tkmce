import React from 'react';

import Link from 'next/link';

const ExecutiveTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="mt-0 md:mt-10 rounded-lg overflow-hidden p-6 mx-auto">
          
          <img src='/assets/execommember/Sanjay S J.jpg' className="border-4 border-cyanblue shadow-md  w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mb-4 text-center">CHAIRPERSON</h2>

        </div>
        <div className="rounded-lg overflow-hidden p-6 mx-auto">
         
          <img src='/assets/execommember/Sanjay S J.jpg' className="ml-5 md:ml-0 border-4 border-cyablue shadow-md w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mb-4 text-center">FACULTY COORDINATOR</h2>

        </div>
        <div className="mt-0 md:mt-10 rounded-lg overflow-hidden p-6 mx-auto">

          <img src='/assets/execommember/Mohammed sinan pakkada .jpg' className="ml-5 border-4 border-cyablue shadow-md  w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold mb-4 text-center">GENERAL SECRETARY</h2>

        </div>
      </div>
      <button className="mb-8 bg-cyanblue text-white px-6 py-3 rounded-full hover:bg-nav-bg transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/Execom">Our Team</Link>
      </button>
    </div>
  );
};

export default ExecutiveTeam;
