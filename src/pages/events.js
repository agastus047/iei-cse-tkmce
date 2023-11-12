import React from 'react';
import Eventcard from '../components/eventspgCard';
import eventlist from '../components/eventlist';

const Event = () => {
  const cards = eventlist.map(item => (
      <Eventcard items={item} />
  ));

  return (
    <div className='flex-col mt-16 mb-16'>
      <div className='flex flex-col items-center'>
        <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{ color: "#00ADB5" }}>EVENTS</h1>
      </div>
      <hr style={{ top: '20px', border: 'none', height: '4px', background: '#393E46', marginBottom: '10px', width: '50%', float: 'right' }}></hr>
      <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'></span>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-8 lg:gap-16'>
        {cards}
      </div>
    </div>
  );
}

export default Event;
