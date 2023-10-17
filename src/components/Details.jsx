import React from 'react';

function Details() {
  return (
    <div className="bg-white p-4 md:p-8">
      <div className="grid mt-10 mb-10 grid-cols-1 md:grid-cols-3 gap-4">
        <div className="ml-10 mr-10 relative bg-white p-4 md:p-6 text-center rounded-lg">
          <div className="absolute top-0 left-0 w-12 h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl md:text-5xl font-Poppins font-bold mt-4'>Established</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>1935</h2>
        </div>

        <div className="ml-10 mr-10 relative bg-white p-4 md:p-6 text-center mt-4 md:mt-0 rounded-lg">
          <div className="absolute top-0 left-0 w-12 h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl md:text-5xl font-Poppins font-bold mt-4'>Members</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>223+</h2>
        </div>

        <div className="ml-10 mr-10 relative bg-white p-4 md:p-6 text-center mt-4 md:mt-0 rounded-lg">
          <div className="absolute top-0 left-0 w-12 h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl md:text-5xl font-Poppins font-bold mt-4'>Events</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>007+</h2>
        </div>
      </div>
    </div>
  );
}

export default Details;
