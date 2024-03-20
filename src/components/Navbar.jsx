import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from '/public/assets/logo.png';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className="bg-nav-bg w-full top-0 left-0 right-0 h-20 xss:h-24 sm:h-28 lg:h-28">
        <div className="container mx-auto flex justify-between items-center  ">
          <div className="w-3/12 p-5 flex items-center ">
            <Link href="/" className="text-2xl font-semibold ">
              <Image
                src={Logo}
                alt="Logo"
                width={70}
                height={95}
                className="cursor-pointer transition-all hover:scale-95 md:hover:scale-100"
              />
            </Link>
          </div>
          <div className="hidden lg:text-2xl md:flex md:flex-row md:mr-20 md:gap-14">
            <Link href="/" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Home
            </Link>
            <Link href="/About" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              About
            </Link>
            <Link href="/Events" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Events
            </Link>
            <Link href="/Execom" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Team
            </Link>
           
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {open ? <CloseIcon /> : <MenuIcon className='text-white' />}
            </IconButton>
          </div>
        </div>
      </nav>
      <Drawer anchor="right" open={open} onClose={toggleDrawer} className=''>
        <div className="bg-hero-bg flex flex-col h-screen w-screen ">
          <div className="bg-hero-bg flex justify-between items-center p-2 pr-4">
            <IconButton edge="start" color="inherit" aria-label="close" onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className="bg-hero-bg mt-16 flex flex-col justify-between items-center gap-20 px-10 ">
              <Link href="/" onClick={closeDrawer}>
                <ListItemText primary="Home" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/About" onClick={closeDrawer}>
                <ListItemText primary="About" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/Events" onClick={closeDrawer}>
                <ListItemText primary="Events" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/Execom" onClick={closeDrawer}>
                <ListItemText primary="Team" className='hover:text-[#00ADB5]'/>
              </Link>
              
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;