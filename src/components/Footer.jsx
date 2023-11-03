import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useState } from 'react';
export default function Footer() {
  const [about,setAbout]=useState(false)
  const [team , setTeam ]=useState(false)
  const [contact , setContact]=useState(false)
  return (
    <div className="bg-[#222831] pt-4 md:pt-8 pb-4 md:pb-8  md:flex px-5 md:pr-8 md:pl-8 lg:pr-20 lg:pl-20 lg:gap-10 md:gap-16 font-michroma" >
      <div className="flex-col gap-10 md:gap-5 md:w-1/2">
        <div className="text-l text-white font-bold font-clash tracking-wider mb-4">
          IEI CSE TKMCE

        </div>
        <div className="text-xs text-white mb-4">
          A pathway to technological realm” We envision to be one of the vibrant professional society of technologists and applied scientists in the world.
        </div>
        <div className='flex gap-2 md:gap-4 mb-4'>
          <FacebookRoundedIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <TwitterIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <InstagramIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <LinkedInIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <WhatsAppIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
        </div>
        <div className='text-white text-xs mb-4'>
        Terms and condisions
        </div>
      </div>
      <div className="flex  md:w-1/2 md:gap-4 lg:gap-10 md:justify-end justify-between">
        <div className='flex flex-col md:mt-0 mt-2 '>
          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onMouseEnter={()=>{
            setAbout(!about)
          }}>
             ABOUT
          </div>
          <div className={about?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            <Link href="/About">About Us</Link>
          </div>
          <div className={about?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            Vision
          </div>
          <div className={about?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            Mision
          </div>
        </div>
        <div className='flex flex-col md:mt-0 mt-2'>
          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onMouseEnter={()=>{
            setTeam(!team)
          }}>
            TEAM
          </div>
          <div className={team?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            Execom
          </div>
          <div className={team?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            Web Team
          </div>   
        </div>
        <div className='flex flex-col md:mt-0 mt-2'>
          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onMouseEnter={()=>{
            setContact(!contact)
          }}>
            CONTACT
          </div>
          <div className={contact?'text-white text-xs  md:block':'text-white text-xs hidden md:block'}>
            ieicse@tkmce.in
          </div>
        </div>
      </div>
    </div>
  );
}