import React from 'react';

function Details() {
  return (
    <div className="bg-white p-4 md:p-8">
      <div className="grid mt-10 mb-10 grid-cols-1 md:grid-cols-3 gap-4">
        <div className="ml-20 mr-20 md:ml-10 md:mr-10 relative bg-white p-4 md:p-6 text-center rounded-lg hover:scale-110 border-2 md:border-transparent transform transition-transform duration-100 ease-in-out">
          <div className="absolute top-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-md md:text-2xl lg:text-4xl  font-clash mt-4 mx-0'>Established</h1>
          <h2 className='text-md md:text-lg lg:text-5xl font-michroma '>2020</h2>
        </div>

        <div className="ml-20 mr-20 md:ml-10 md:mr-10 relative bg-white p-4 md:p-6 text-center mt-4 md:mt-0 rounded-lg border-2 md:border-transparent hover:scale-110 transform transition-transform duration-100 ease-in-out">
          <div className="absolute top-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-md md:text-2xl lg:text-4xl  font-clash mt-4 mr-4'>Members//</h1>
          <h2 className='text-md md:text-lg lg:text-5xl font-michroma'>350+</h2>
        </div>

        <div className="ml-20 mr-20 md:ml-10 md:mr-10 relative bg-white p-4 md:p-6 text-center mt-4 md:mt-0 rounded-lg border-2 md:border-transparent hover:scale-110 transform transition-transform duration-100 ease-in-out">
          <div className="absolute top-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute top-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-t-4 border-r-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 left-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-l-4 border-black rounded-lg"></div>
          <div className="absolute bottom-0 right-0 hidden md:block md:w-12 md:h-12 bg-white border-b-4 border-r-4 border-black rounded-lg"></div>
          <h1 className='text-md md:text-2xl lg:text-4xl font-clash mt-4'>Events////</h1>
          <h2 className='text-md md:text-lg lg:text-5xl  font-michroma  '>66+</h2>
        </div>
      </div>
    </div>
  );
}

export default Details;
