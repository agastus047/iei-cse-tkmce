import eventlist from '@/data/eventlist';
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
const Eventpage = () => {

  const router = useRouter();
  const { name } = router.query;

  const eventdata = eventlist.find((event) => event.link === name);

  return (
    <div className=' xl:pr-64 xl:pl-64 lg:pr-36 lg:pl-36 md:pr-10 sm:pr-20 sm:pl-20 pl-2 pr-2 md:pl-10 pb-10 pt-10 '>
      <div className='border-4  md:block  md:gap-10 gap-10 bg-white shadow-lg md:p-5 p-5 font-Poppins'>
        <div className='md:w-full  md:flex block md:justify-between md:items-center md:gap-10 '>
          <div className='flex md:justify-between justify-center md:w-1/2 '>
          <img src={eventdata?.img} className="z-10 sm:w-96 sm:h-96 w-64 h-64 mb-10 md:mb-0" alt="Image" />
          </div>
          <div className='flex flex-col md:w-1/2 mb-10 '>
            <h1 className='text-3xl text-center font-Poppins font-bold mt-10 mb-8'>{eventdata?.name}</h1>
            <p className='font-Poppins whitespace-pre-wrap'>{eventdata?.discription}</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:w-full '>
          <div className='flex flex-col pt-5 md:mt-0'>
            <h3 className='font-bold  '>Price</h3>
            <p>Rs.{eventdata?.price.ieiMember}</p>
          </div>
          <div className={eventdata?.enddate !==''? 'md:flex justify-between  grid xs:grid-cols-3 grid-cols-2  xs:gap-5':'md:flex gap-20  grid xs:grid-cols-3 grid-cols-2  xs:gap-5'} >

            <div className='flex flex-col'>
              <h3 className='font-bold'>Start Date</h3>
              <p>{eventdata?.date}</p>
            </div>
            {eventdata?.enddate !== '' ? (
              <>
                <div className='flex flex-col'>
                  <h3 className='font-bold'>End Date</h3>
                  <p>{eventdata?.enddate}</p>
                </div>
              </>
            ) : (
              <>
              </>
            )}
            <div className='flex flex-col'>
              <h3 className='font-bold'>Venue</h3>
              <p>{eventdata?.venue}</p>
            </div>
          </div>


          <div>
            <p className=' 4xl font-bold'>COORDINATORS</p>
          </div>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <h3 className='font-semibold'>{eventdata?.cordinator[1][0]}</h3>
              <p>{eventdata?.cordinator[1][1]}</p>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold'>{eventdata?.cordinator[2][0]}</h3>
              <p>{eventdata?.cordinator[2][1]}</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <Link href={`/Register/${eventdata?.link}`}>
              {eventdata?.isRegistrationOpen?<button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black">
              Register
            </button>:<></>}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eventpage