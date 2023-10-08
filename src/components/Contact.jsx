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
        // Add more media queries and size adjustments as needed
      };
      
    return(
    <div className=" h-80 bg-cyanblue flex flex-col items-center text-white ">
        <div className=" text-5xl h-full my-16  font-bold">Contact Us</div>
        <div className="flex flex-row gap-14 w-full items-center justify-center items-baseline h-full mb-16 ml-11">
          <a href='https://www.youtube.com/watch?v=O0N4Ona214g'>  <FacebookOutlinedIcon sx={iconStyle}/></a>
           <a href='google.com'> <TwitterIcon sx={iconStyle}/></a>
            <a href='google.com'><InstagramIcon sx={iconStyle}/></a>
           <a href='google.com'> <LinkedInIcon sx={iconStyle}/></a>
           <a href='google.com'> <WhatsAppIcon  sx={iconStyle}/></a>
        </div>
    </div>
    )
}

export default Contact