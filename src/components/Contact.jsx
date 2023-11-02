import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () =>
{
    const iconStyle = {
        fontSize: '90px', // Default size
        '@media (max-width: 768px)': {
          fontSize: '60px', // Adjust size for screens smaller than 768px
        },
        '@media (min-width: 1440px)': {
          fontSize: '100px', // Adjust size for screens smaller than 768px
        },
        // Add more media queries and size adjustments as needed
      };
      
    return(
    <div className=" h-64 md:h-96 bg-cyanblue flex flex-col items-center text-white ">
        <div className="text-4xl lg:text-5xl flex items-center h-24 my-6 lg:my-16  font-bold">Contact Us</div>
        <div className="flex flex-row flex-wrap gap-14 lg:gap-20 items-center   mx-3">
           <a href='google.com'><InstagramIcon sx={iconStyle}/></a>
           <a href='google.com'> <LinkedInIcon sx={iconStyle}/></a>
           <a href='google.com'> <WhatsAppIcon sx={iconStyle}/></a>
           <a href='https://www.youtube.com/watch?v=O0N4Ona214g'><FacebookOutlinedIcon className="hidden md:flex" sx={iconStyle}/></a>
           <a href='google.com'> <TwitterIcon className="hidden md:flex" sx={iconStyle}/></a>
        </div>
    </div>
    )
}

export default Contact