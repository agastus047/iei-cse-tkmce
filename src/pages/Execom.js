import React, { useState } from 'react';
import { execomlist23, execomlist24, webteam23, webteam24 } from '@/data/execomlist';
import Execomcard from '@/components/Execomcard';

const Execom = () => {
  const [activeyear, setactiveyear] = useState('2024');

  const handleclick = (year) => {
    setactiveyear(year);
  };

  return (
    <div className='flex-col mt-16 mb-16 justify-items-center'>
      <div className='flex flex-col items-center'>
        <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{ color: "#00ADB5" }}>TEAM</h1>
      </div>
      <hr style={{ top: '20px', border: 'none', height: '4px', background: '#393E46', marginBottom: '10px', width: '50%', float: 'right' }}></hr>
      <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'>
        <div className='flex justify-center pt-3 items-center'>
          <p className='text-white font-extrabold text-3xl'>EXECOM</p>
        </div>
      </span>
      <div className='flex justify-center gap-10'>
        <button
          className={`p-2 text-xl font-Poppins mt-10 border-2 border-[#00ADB5] ${activeyear === '2023' ? 'bg-[#00ADB5]' : 'bg-white'}`}
          onClick={() => handleclick("2023")}
        >
          2023
        </button>
        <button
          className={`p-2 text-xl font-Poppins mt-10 border-2 border-[#00ADB5] ${activeyear === '2024' ? 'bg-[#00ADB5]' : 'bg-white'}`}
          onClick={() => handleclick("2024")}
        >
          2024
        </button>
      </div>
      <div className='xl:pl-10 xl:pr-10'>
        <div className='flex flex-wrap gap-10 xl:gap-16 justify-center content-center'>
          {(activeyear === '2023' ? execomlist23 : execomlist24).map(item => (
            <Execomcard key={item.id} items={item} />
          ))}
        </div>
      </div>


      {activeyear === '2023' && (
        <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'>
          <div className='flex justify-center pt-3 items-center'>
            <p className='text-white font-extrabold text-3xl'>Web Team</p>
          </div>
        </span>
      )}


      <div className='xl:pl-10 xl:pr-10'>
        <div className='flex flex-wrap gap-10 xl:gap-16 justify-center content-center mb-10'>
          {(activeyear === '2023' ? webteam23 : webteam24).map(item => (
            <Execomcard key={item.id} items={item} />
          ))}

        </div>
      </div>
    </div>
  );
};
export default Execom;