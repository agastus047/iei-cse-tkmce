import Link from "next/link";

const Eventcard =({items})=>
{
    
    return(
        <Link href={`/event/${items.link}`} className="flex justify-center px-4 md:px-0">
        
        <div className="w-[250px] lg:w-72 h-96  flex flex-col ">
        <div className="card-image w-full h-72 relative overflow-hidden border-4 border-cyan-500">
          <img
            src={items.img}
            className="absolute object-cover object-center h-full w-full  z-10"
            alt="Image"
          />
        </div>
        
    </div>
    
    </Link>
    )
}

export default Eventcard;
