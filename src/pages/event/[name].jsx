import eventlist from '@/components/eventlist';
import React from 'react'
import { useRouter } from 'next/router';

const Eventpage = () => {

  const router = useRouter();
  const { name } = router.query;

  const eventdata = eventlist.find((event) => event.link === name);

  return (
    <div className=' xl:pr-64 xl:pl-64 lg:pr-36 lg:pl-36 md:pr-10 sm:pr-20 sm:pl-20 pl-2 pr-2 md:pl-10 pb-10 pt-10 '>
      <div className='border-4  md:block  md:gap-10 gap-10 bg-white shadow-lg md:p-5 p-5 font-Poppins'>
        <div className='md:w-full  md:flex block md:justify-between md:items-center md:gap-10 '>
          <div className='flex justify-center md:w-1/2 '>
          <img src={eventdata?.img} className="z-10 sm:w-96 sm:h-96 w-64 h-64 mb-10 md:mb-0" alt="Image" />
          </div>
          <div className='flex flex-col md:w-1/2 mb-10 '>
            <h1 className='text-3xl text-center font-Poppins font-bold mt-10 mb-8'>{eventdata?.name}</h1>
            <p className='font-Poppins'>{eventdata?.discription}</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:w-full '>
          <div className='flex flex-col '>
            <h3 className='font-bold '>Price</h3>
            <p>Rs.100</p>
          </div>
          <div className='md:flex  justify-between gap-10 grid xs:grid-cols-3 grid-cols-2  xs:gap-5' >

            <div className='flex flex-col'>
              <h3 className='font-bold'>Start Date</h3>
              <p>06-10-2023</p>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold'>End Date</h3>
              <p>10-10-2023</p>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold'>Venue</h3>
              <p>Tkm</p>
            </div>
          </div>


          <div>
            <p className=' 4xl font-bold'>COORDINATORS</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-semibold'>Amalendu</h3>
              <p>+8078213133</p>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold'>Amalendu</h3>
              <p>+8078213133</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className="bg-nav-bg  text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black ">
              Register
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eventpage