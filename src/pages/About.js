import React from 'react'

const About = () => {
  return (
    <div className='flex-col  justify-items-center mt-24'>
        <div  className='flex flex-col justify-end items-center h-32'>
            <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{color:"#00ADB5"}}>ABOUT US</h1>
           
        </div>
        <hr style={{top: '20px',border: 'none',height: '4px',background: '#393E46',marginBottom:'10px',width:'50%',float:'right'}}></hr>
        <span style={{ backgroundColor: '#00ADB5', height: '60px', width: '100%', display: 'block' }} className='mt-10'></span>
        <div className='mt-10 sm:ml-32 sm:pr-32 sm:pb-10 sm:pt-10 pr-16 ml-16 mb-10'>
            <p className='font-Poppins text-2xl font-normal text-black'>Welcome to the dynamic world of The Institution of Engineers (India) at TKM College of Engineering – your gateway to holistic growth and professional excellence! 🚀<br/><br/> We are proud to be one of the esteemed chapters under the prestigious national organization of engineers in India.<br/><br/> At IEI CSE TKMCE, we believe in hands-on learning and growth. That's why we bring you a world of opportunities:<br/><br/> Inspiring Tech Talks: Immerse yourself in the latest industry insights, trends, and innovations with our engaging tech talks led by industry experts.<br/><br/> Practical Workshops: Get your hands dirty and enhance your technical skills through hands-on workshops designed to make you industry-ready.<br/><br/> Thrilling Competitions: Compete, innovate, and stand out! Our competitions are your chance to shine and showcase your talents on a larger stage.<br/><br/> A Stellar Team: Our exceptional executive committee and dedicated student members are here to support your journey and foster your ambitions.<br/><br/> Join us at IEI CSE TKMCE, where we don't just imagine the future – we engineer it. Unlock your full potential, broaden your horizons, and embark on an exciting journey towards becoming a true trailblazer in the world of engineering. Your future starts here</p>
        </div>
    </div>
  )
}

export default About