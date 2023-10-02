import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/logo.png";

function NavLink({to, children}) {
    return <Link href={to} className={`mx-4 text-white text-xl hover:text-[#00ADB5]`}>
        {children}
    </Link>
}//styling

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-nav-bg h-20">
                <Link className="text-xl font-semibold" href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={75}
                    height={75}
                    className="cursor-pointer"
                  />
                </Link>
            </div>
            <div className="flex flex-col ml-4 items-center">
                <Link className="hover:text-[#00ADB5] text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className="hover:text-[#00ADB5] text-xl font-medium my-4" href="/events" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Events
                </Link>
                <Link className="hover:text-[#00ADB5] text-xl font-medium my-4" href="/team" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Team
                </Link>
                <Link className="hover:text-[#00ADB5] text-xl font-medium my-4" href="/blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blog
                </Link>
                <Link className="hover:text-blue-500 text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Login
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-nav-bg px-4 py-8 h-28 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 p-14 flex items-center">
                <Link className="text-2xl font-semibold" href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={95}
                    height={75}
                    className="cursor-pointer"
                  />
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger custom */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex md:gap-24">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                    <NavLink to="/team">
                        Team
                    </NavLink>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                    <NavLink to="/">
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    )}