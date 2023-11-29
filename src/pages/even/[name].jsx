import eventlist from '@/components/eventlist';
import React from 'react'

const Eventpage = ({eventdata}) => {
  return (
    <div className=' xl:pr-72 xl:pl-72 lg:pr-64 lg:pl-64 md:pr-40 sm:pr-20 sm:pl-20 pl-2 pr-2 md:pl-40 pb-10 pt-10 '>
      <div className='border-4 flex flex-col gap-10 bg-white shadow-lg md:p-20 p-5'>
        <img src={eventdata.img} className="z-10 w-96 h-96" alt="Image"/>
        <h1 className='text-3xl'>{eventdata.name}</h1>
        <p>{eventdata.discription}</p>
        <div className='flex flex-col'>
          <h3 className='font-bold'>Price</h3>
          <p>Rs.100</p>
        </div>
        <div className='flex justify-between'>
          
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
          <p className='underline 4xl'>REGISTRATION DETAILS</p>
        </div>
        <div className='flex justify-between'>
          
          <div className='flex flex-col'>
            <h3 className='font-bold'>Start Date</h3>
            <p>06-10-2023</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bold'>End Date</h3>
            <p>10-10-2023</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bold'>Fees</h3>
            <p>Rs.1000</p>
          </div>
        </div>
        <div>
          <p className='underline 4xl'>COORDINATORS</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h3 className='font-bold'>Amalendu</h3>
            <p>+8078213133</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bold'>Amalendu</h3>
            <p>+8078213133</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const name  = context.query.name;
  const event = eventlist.find((event) => event.link === name);
  if (event != undefined) {
    return {
      props: {
        eventdata: event,
      },
    };
  } else {
    return {
      props: {
        eventdata: null,
      },
    };
  }
}
export default Eventpage