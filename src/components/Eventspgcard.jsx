import Router from "next/router";

const Eventcard =({items})=>
{
    return(
        <div className="md:mt-5 w-64 md:w-72 bg-white lg:w-84 h-84 m-auto flex flex-col rounded-lg border-4 border-cyan-500  transform transition-transform hover:scale-105 " onClick={() => Router.push("/event/" + items.link)}>
        <div className="mt-2 mr-2 ml-2 bg-white card-image w-auto h-72 relative overflow-hidden rounded-lg shadow-lg">
            <img src={items.img} className="absolute bg-white object-cover object-center h-full w-full rounded-t-md z-10" alt="Image"/>
        </div>
        <div className='flex h-16 bg-white justify-center items-center text-2xl md:text-3xl text-nav-bg border-4 border-white border-t-0'>
          {items.name} 
        </div>
    </div>
    )
}

export default Eventcard