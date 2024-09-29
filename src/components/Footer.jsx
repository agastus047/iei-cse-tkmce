import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import TwitterIcon from '@mui/icons-material/Twitter';

import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Link from 'next/link';

import { useState } from 'react';

export default function Footer() {

  const [about, setAbout] = useState(false)

  const [team, setTeam] = useState(false)

  const [contact, setContact] = useState(false)

  return (

    <div className="bg-[#222831] pt-8 md:pt-16 pb-8 md:pb-8 md:flex px-5 md:pr-12 md:pl-12 lg:pr-20 lg:pl-20 lg:gap-2 xl:pr-32 xl:pl-32 font-michroma " >

      <div className="flex-col gap-16 md:gap-5 md:w-1/2">

        <div className="text-2xl text-white font-bold font-clash tracking-wider mb-4">

          IEI TKMCE



        </div>

        <div className="text-xs text-white mb-4">

          A pathway to technological realm” We envision to be one of the vibrant professional society of technologists and applied scientists in the world.

        </div>

        <div className='flex gap-2 md:gap-4 mb-4'>

         

          <Link href={"https://www.instagram.com/iei_tkm_cse/"}><InstagramIcon sx={{ color: 'white' }} className='w-8 h-8 ' /></Link>

          <Link href={"https://www.linkedin.com/company/iei-cse-tkmce/"}><LinkedInIcon sx={{ color: 'white' }} className='w-8 h-8 ' /></Link>

          

        </div>

       

      </div>

      <div className="flex md:w-1/2 md:gap-6 lg:gap-10 md:justify-end justify-between">

        <div className='flex flex-col gap-2 md:mt-0 mt-2 '>

          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onClick={() => {

            setAbout(!about)

          }}>

            ABOUT

          </div>

          <div className={about ? 'text-white text-xs md:block' : 'text-white text-xs hidden md:block'}>

            <Link href="/About">About Us</Link>

          </div>

          

        </div>

        <div className='flex flex-col gap-2 md:mt-0 mt-2'>

          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onClick={() => {

            setTeam(!team)

          }}>

            TEAM

          </div>
          <Link href={"/Execom"}>
          <div className={team ? 'text-white text-xs md:block' : 'text-white text-xs hidden md:block'}>

            Execom

          </div>
          
          </Link>

          
        </div>

        <div className='flex flex-col gap-2 md:mt-0 mt-2'>

          <div className='text-white font-semibold text-xs md:cursor-none cursor-pointer' onClick={() => {

            setContact(!contact)

          }}>

            CONTACT

          </div>

          <div className={contact ? 'text-white text-xs md:block' : 'text-white text-xs hidden md:block'}>

            ieicse@tkmce.in

          </div>

        </div>

      </div>

    </div>

  );

}