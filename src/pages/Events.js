import React from 'react';
import Eventcard from '../components/Eventspgcard';
import eventlist from '../components/eventlist';

const Events = () => {
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
      <div className='mt-12 md:mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb-10 grid-cols-1 justify-center items-center gap-12 sm:gap-8 md:gap-8 lg:gap-8'>
        {cards}
      </div>
    </div>
  );
}

export default Events;