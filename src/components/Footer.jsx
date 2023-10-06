import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <div className="bg-[#222831] pt-4 md:pt-8 pb-4 md:pb-8 grid md:grid-cols-12 px-5 md:px-20 gap-2 md:gap-20 font-michroma" >
      <div className="grid md:col-span-6 gap-2 md:gap-4">
        <div className="text-l text-white font-bold font-clash tracking-wider">
          IEI CSE TKMCE

        </div>
        <div className="text-xs text-white">
          A pathway to technological realm” We envision to be one of the vibrant professional society of technologists and applied scientists in the world.
        </div>
        <div className='flex gap-2 md:gap-4'>
          <FacebookRoundedIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <TwitterIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <InstagramIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <LinkedInIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
          <WhatsAppIcon sx={{ color: 'white' }} className='w-8 h-8 ' />
        </div>
        <div className='text-white text-xs'>
        Terms and condisions
        </div>
      </div>
      <div className="grid md:col-span-6 md:grid-cols-6 gap-2 md:gap-4">
        <div className='grid col-span-2 gap-1 place-content-start'>
          <div className='text-white font-semibold text-xs'>
            ABOUT
          </div>
          <div className='text-white text-xs hidden md:block'>
            About Us
          </div>
          <div className='text-white text-xs hidden md:block'>
            Vision
          </div>
          <div className='text-white text-xs hidden md:block'>
            Mision
          </div>
        </div>
        <div className='grid col-span-2 gap-2 place-content-start'>
          <div className='text-white font-semibold text-xs'>
            TEAM
          </div>
          <div className='text-white text-xs hidden md:block'>
            Execom
          </div>
          <div className='text-white text-xs hidden md:block'>
            Web Team
          </div>   
        </div>
        <div className='grid col-span-2 gap-2 place-content-start'>
          <div className='text-white font-semibold text-xs '>
            CONTACT
          </div>
          <div className='text-white text-xs hidden md:block'>
            ieicse@tkmce.in
          </div>
        </div>
      </div>
    </div>
  );
}