import React from 'react'
import Image from 'next/image'
const TestComponent2 = () => {
    const customBoxShadowStyle1 = {
        border: '4px solid #000',
        boxShadow: '-40px -40px 0px rgba(255, 255, 255, 1)',
        clipPath: 'polygon(0% 30%, 30% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 80%)',
      };
      const customBoxShadowStyle2 = {
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        clipPath: 'polygon(0% 0%, 90% 0%, 100% 5%, 100% 90%, 90% 100%, 90% 100%, 20% 100%, 0% 80%)',
      };
  return (
    <div className='flex-col '>
    <div className='flex justify-between  items-center mb-10 '>
        <div className='flex-col  font-Michroma ml-10 lg:ml-20 w-3/6 text-left'>
            <h1 className='text-white mb-10 font-semibold lg:text-6xl text-5xl' >Vision</h1>
            <p className='text-white lg:text-2xl text-l font-normal'>"A pathway to technological realm"<br></br> We envision to be one of the vibrant professional society of technologists and applied scientists in the world.</p>
        
        </div>
        <div className='lg:w-500 lg:h-500 w-64 h-64'  style={customBoxShadowStyle1} >
            <Image
            
            src="/vision.png"
            width={500}
            height={200}
            alt="Picture of the author"
        
            />
      
        </div>
    </div>
    <div className='flex justify-between  items-center'>
    <div className='lg:w-500 lg:h-500 w-64 h-64' style={customBoxShadowStyle2} >
        <Image
        
        src="/ai.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className='shadow-20 shadow-10 shadow-0 shadow-40 shadow-black'
        />
  
    </div>
    <div className='flex-col  font-Michroma mr-5 lg:mr-10 w-3/6 text-right'>
        <h1 className='text-white mb-10 font-semibold lg:text-6xl text-5xl '>Mission</h1>
        <p className='text-white lg:text-2xl text-l font-normal'>Our mission at IEI CSE SB TKMCE is to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club; we're a dynamic hub for future computer science engineers!</p>
    
    </div>
    
</div>
    </div>
  )
}

export default TestComponent2