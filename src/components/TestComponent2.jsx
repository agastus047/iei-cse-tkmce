import React from 'react'
import Image from 'next/image'
const TestComponent2 = () => {
  return (
    <>
    <div className='flex justify-evenly  items-center h-screen'>
        <div className='flex-col  font-Michroma ml-20 w-3/6 text-left'>
            <h1 className='text-white mb-10 font-semibold text-6xl'>Vision</h1>
            <p className='text-white text-2xl font-normal'>A pathway to technological realm"<br></br> We envision to be one of the vibrant professional society of technologists and applied scientists in the world.</p>
        
        </div>
        <div class='imageContainer' >
            <Image
            
            src="/vision.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className='shadow-6xl shadow-black'
            />
      
        </div>
    </div>
    <div className='flex justify-evenly  items-center h-screen'>
    <div class='imageContainer2' >
        <Image
        
        src="/vision.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className='shadow-6xl shadow-black'
        />
  
    </div>
    <div className='flex-col  font-Michroma ml-20 w-3/6 text-right'>
        <h1 className='text-white mb-10 font-semibold text-6xl'>Mission</h1>
        <p className='text-white text-2xl font-normal'>Our mission at IEI CSE SB TKMCE is to empower computer science enthusiasts like you with an unparalleled experience. We're not just a club; we're a dynamic hub for future computer science engineers!</p>
    
    </div>
    
</div>
    </>
  )
}

export default TestComponent2