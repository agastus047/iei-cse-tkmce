import Link from "next/link";

const Eventcard =({items})=>
{
    return(
        <Link href={`/event/${items.link}`}>
        <div className="md:mt-5 w-64 md:w-72 bg-white lg:w-84 h-84 m-auto flex flex-col gap-4 rounded-lg border-4 border-cyan-500  transform transition-transform hover:scale-105  ">
        <div className="mt-2 mr-2 ml-2 bg-white card-image w-auto h-72 relative overflow-hidden rounded-lg shadow-lg">
            <img src={items.img} className="absolute bg-white object-fill h-full w-full rounded-t-md z-10" alt="Image"/>
        </div>
        <div className=' h-24  bg-white  text-2xl text-nav-bg border-4 border-white border-t-0  overflow-hidden overflow-ellipsis'>
          <h1 className="text-left text-2xl">{items.name}</h1> 
          <p className="text-xs">{items.discription}</p>
        </div>
    </div>
    </Link>
    )
}

export default Eventcard