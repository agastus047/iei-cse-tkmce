import eventlist from '@/data/eventlist';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Register = () => {
  const router = useRouter();
  const { link } = router.query;
  const eventdata = eventlist.find((event) => event.link === link);
  
  return (
    <div className='flex p-2 border-4 shadow-lg font-Poppins w-full '>
      <div className='md:w-4/12 flex flex-col gap-4 p-2 h-screen justify-center items-center min-h-screen -mb-20 xss:-mb-24 sm:-mb-28 xl:-mb-28  sticky  top-0'>
        <h1 className='text-4xl font-bold '>{eventdata?.name}</h1>
        <p className="font-semibold">{eventdata?.discription}</p>
      </div>
      <div className="w-8/12  ">
        
      </div>

    </div>
  )
}

export default Register