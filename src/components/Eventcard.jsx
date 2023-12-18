import Link from "next/link";

const Eventcard = ({ items }) => {
  return (
    <Link href={`/event/${items.link}`}>
      <div className="w-60 lg:w-72 h-96 m-auto flex flex-col">
        <div className="card-image w-full h-72 relative overflow-hidden border-4 border-cyan-500">
          <img
            src={items.img}
            className="absolute object-cover object-center h-full w-full rounded-t-md z-10"
            alt="Image"
          />
        </div>
        <div className="flex h-16 bg-nav-bg justify-center items-center text-3xl text-white font-bold border-4 border-cyan-500 border-t-0">
          {items.name}
        </div>
      </div>
    </Link>
  );
};

export default Eventcard;
