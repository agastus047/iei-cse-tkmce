import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Execomcard = ({ items }) => {
  const iconStyle = {
    fontSize: '90px', 
    '@media (max-width: 768px)': {
      fontSize: '60px', 
    },
    '@media (min-width: 1440px)': {
      fontSize: '100px',
    },
    
  };

  const handleLinkedInClick = () => {
    window.open(items.linkedIn, '_blank');
  };

  return (
    <div className='group [perspective:1000px] mt-10 '>
      <div className='w-60 h-72 lg:w-60 lg:h-72 m-auto bg-white flex flex-col border-4 border-cyan-500 p-2 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] -z-50'>
      <div className="card-image w-full h-60 lg:h-60 relative overflow-hidden inset-0">
      {items.imgcorrect ? (
        <img
          src={items.img}
          className="absolute object-cover h-full w-full"
          alt="Image"
          style={{ zIndex: 0, pointerEvents: 'none' }}
        />
      ) : (
        <img
          src={items.img}
          className="absolute object-center h-full w-full"
          alt="Image"
          style={{ zIndex: 0, pointerEvents: 'none' }}
        />
      )}
    </div>
        <div className='flex flex-col justify-start items-start text-3xl text-black font-bold font-Poppins'>
          <p className='text-xl'>{items.name}</p>
          <p className='text-xs'>{items.position}</p>
        </div>
        <div className='absolute inset-0 h-full w-full text-center text-slate-200 [transform:rotateY(180deg)]  [backface-visibility:hidden] [transform-style:preserve-3d] z-50' style={{ backgroundColor: "#00ADB5" }}>
          <div className='flex justify-center items-center h-full z-50'>
            <LinkedInIcon sx={{ ...iconStyle, zIndex: 5, cursor: 'pointer' }} onClick={handleLinkedInClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execomcard;
