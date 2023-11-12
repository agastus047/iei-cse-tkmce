import Teamcard from '@/components/TeamCard';
import React from 'react';


const Team = () => {
//   const cards = eventlist.map(item => (
//       <Teamcard items={item} />
//   ));

  return (
    <div className='flex-col mt-16 mb-16'>
      <div className='flex flex-col items-center'>
        <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{ color: "#00ADB5" }}>TEAM</h1>
      </div>
      <hr style={{ top: '20px', border: 'none', height: '4px', background: '#393E46', marginBottom: '10px', width: '50%', float: 'right' }}></hr>
      <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10 text-white text-3xl md:text-4xl text-center font-bold py-3'>EXECOM</span>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-8 lg:gap-16'>
        <Teamcard/>
        <Teamcard/>
        <Teamcard/> 
      </div>
      <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10 text-white text-3xl md:text-4xl text-center font-bold py-3'>WEB TEAM</span>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-8 lg:gap-16'>
        <Teamcard/>
        <Teamcard/>
        <Teamcard/>
      </div>
    </div>
  );
}

export default Team;
