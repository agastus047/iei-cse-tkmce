import React from 'react';

function Details() {
  return (
    <div className="bg-white h-auto">
      <div className="bg-white py-3 md:py-0 md:grid md:grid-cols-3 gap-10">
        <div className="ml-20 mr-20 mt-5 md:mr-0 md:ml-40 md:mt-20 md:mb-20 relative bg-white h-auto p-4 text-center">
          <div className="absolute top-0 left-0 w-8 h-8 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl mt-4 md:text-5xl font-Poppins font-bold'>Established</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>1935</h2>
        </div>
        <div className="ml-20 mr-20 mt-5 md:ml-20 md:mr-10 md:mt-20 md:mb-20 h-auto relative bg-white p-4 text-center">
          <div className="absolute top-0 left-0 w-8 h-8 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl mt-4 md:text-5xl font-Poppins font-bold'>Members//</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>223+</h2>
        </div>
        <div className="ml-20 mr-20 mt-5 mb-5 md:ml-10 md:mr-40 md:mt-20 md:mb-20  h-auto relative bg-white p-4 text-center">
          <div className="absolute top-0 left-0 w-8 h-8 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-xl mt-4 md:text-5xl font-Poppins font-bold'>Events//</h1>
          <h2 className='text-2xl md:text-8xl font-Poppins font-bold'>007+</h2>
        </div>
      </div>
    </div>
  );
}

export default Details;
