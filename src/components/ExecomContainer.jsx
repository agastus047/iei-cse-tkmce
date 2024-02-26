import React from 'react';

import Link from 'next/link';

const ExecutiveTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-[#393E46]">
     <p className='text-[#393e46] text-center font-extrabold mt-5 md:text-6xl sm:text-4xl text-2xl'>Execom</p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="mt-0 md:mt-10 rounded-lg overflow-hidden p-6 mx-auto">
          <img src='/assets/execommember/Sanjay S J.jpg' className="bg-cyanblue border-4 border-cyanblue shadow-md w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mx-auto" />
          <h1 className="text-2xl font-bold text-center">Sanjay S J</h1>
          <h2 className="text-xl font-medium mb-4 text-center">Chairperson</h2>
        </div>

        <div className="rounded-lg overflow-hidden p-6 mx-auto">
          <img src='/assets/execommember/Shyna.jpg' className="bg-cyanblue border-4 border-cyanblue shadow-md w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mx-auto" />
          <h1 className="text-2xl font-bold text-center">Shyna</h1>
          <h2 className="text-xl font-medium mb-4 text-center">Faculty Coordinator</h2>
        </div>

        <div className="mt-0 md:mt-10 rounded-lg overflow-hidden p-6 mx-auto">
          <img src='/assets/execommember/Mohammed sinan pakkada.jpg' className="bg-cyanblue border-4 border-cyanblue shadow-md w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mx-auto" />
          <h1 className="text-2xl font-bold text-center">Muhohammed Sinan Pakkada</h1>
          <h2 className="text-xl font-medium mb-4 text-center">General Secretary</h2>
        </div>

      </div>

      <button className="mb-5 bg-cyanblue text-white px-6 py-3 rounded-full hover:bg-nav-bg transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/Execom">Our Team</Link>
      </button>
    </div>
  );
};

export default ExecutiveTeam;
