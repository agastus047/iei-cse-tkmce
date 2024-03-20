import Link from "next/link";

const Eventcard = ({ items }) => {
    return (
        <Link href={`/event/${items.link}`}>
            <div className="md:mt-5 w-64 md:w-72 bg-white lg:w-84 h-84 m-auto flex flex-col gap-4 rounded-lg border-4 border-cyan-500  transform transition-transform hover:scale-105  ">
                <div className="mt-2 mr-2 ml-2 bg-white card-image w-auto h-72 relative overflow-hidden rounded-lg shadow-lg">
                    <img src={items.img} className="absolute bg-white object-fill h-full w-full rounded-t-md z-10" alt="Image" />
                </div>
                <div className='flex flex-col  h-32  bg-white  border-4 border-white border-t-0   '>
                    <div className="flex justify-center items-center h-3/4"><h1 className="break-words text-center text-xl font-bold font-Poppins">{items.name}</h1></div>
                    <p className="text-sm line-clamp-2 font-Poppins">{items.discription}</p>
                </div>
            </div>
        </Link>
    )
}

export default Eventcard