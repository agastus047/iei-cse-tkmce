import React from 'react'
import {execomlist,webteam} from '@/components/execomlist'
import Execomcard from '@/components/Execomcard'

const Execom = () => {
  return (
    <div className='flex-col   mt-16 mb-16 justify-items-center '>
      <div className='flex flex-col items-center'>
        <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{ color: "#00ADB5" }}>TEAM</h1>
      </div>
        <hr style={{top: '20px',border: 'none',height: '4px',background: '#393E46',marginBottom:'10px',width:'50%',float:'right'}}></hr>
        <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'>
        <div className='flex justify-center pt-3 items-center'><p className='text-white font-extrabold text-3xl'>EXECOM</p></div>
        </span>
        <div className='xl:pl-10 xl:pr-10 '>
        <div className='flex flex-wrap gap-10 xl:gap-16 justify-center content-center '>
        {
            execomlist.map(item => (
                
                  <Execomcard items={item}/>      
        ))
        }
        </div>
        </div>
        <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'>
        <div className='flex justify-center pt-3 items-center'><p className='text-white font-extrabold text-3xl'>Web Team</p></div>
        </span>
        <div className='xl:pl-10 xl:pr-10  '>
        <div className='flex flex-wrap gap-10 xl:gap-16 justify-center content-center mb-10'>
        {
            webteam.map(item => (
                
                  <Execomcard items={item}/>      
        ))
        }
        </div>
        </div>
    </div>
  )
}

export default Execom