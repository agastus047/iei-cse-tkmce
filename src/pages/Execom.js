import React from 'react'
import {execomlist,webteam} from '@/components/execomlist'
import Execomcard from '@/components/Execomcard'

const Execom = () => {
  return (
    <div className='flex-col  justify-items-center '>
        <div  className='flex flex-col justify-end items-center h-32 w-3/6'>
            <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{color:"#00ADB5"}}>TEAM</h1>
           
        </div>
        <hr style={{top: '20px',border: 'none',height: '4px',background: '#393E46',marginBottom:'10px',width:'50%',float:'left'}}></hr>
        <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'>
        <div className='flex justify-center pt-3 items-center'><p className='text-white font-extrabold text-3xl'>EXECOM</p></div>
        </span>
        <div className='xl:pl-10 xl:pr-10  '>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-10 grid-cols-1'>
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
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-10 grid-cols-1'>
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