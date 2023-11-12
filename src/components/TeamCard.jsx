import dp from "public/assets/dp.png"
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Teamcard =({items})=>
{
    return(
        <div className="group flex justify-between w-72 bg-white lg:w-84 h-96 m-auto rounded-sm border-4 border-cyan-500">
            <div className="mt-2 mr-2 ml-2 bg-white h-auto grid grid-col-1 gap-2">
                <div className="relative w-48 h-48">
                    <Image src={dp} className="absolute bg-black object-cover object-center h-full w-full rounded-t-md z-10" alt="Image"/>
                </div>
                <div className="bg-nav-bg h-px w-full hover:w-48"></div>
                <h1 className="ml-1 mb-1 text-nav-bg text-2xl font-bold">MUHAMMED SINAN</h1>
                <h2 className="mb-1 ml-1 text-xl text-nav-bg">Position</h2>
            </div>
            <div className="w-24 mr-2 mt-2 mb-2 bg-nav-bg grid grid-col-1 gap-1 justify-center items-center ">
                <a href=''><LinkedInIcon className="text-5xl text-gray-500 transform transition-transform hover:scale-105"/></a>
                <a href='' className=""> <InstagramIcon className="text-5xl text-gray-500 transform transition-transform hover:scale-105"/></a>
                <a href='' className=""> <GitHubIcon className="text-5xl text-gray-500 transform transition-transform hover:scale-105"/></a>
            </div>
    </div>
    )
}

export default Teamcard