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
      <nav className="bg-nav-bg w-full top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-3/12 p-6 flex items-center">
            <Link href="/" className="text-2xl font-semibold ">
              <Image
                src={Logo}
                alt="Logo"
                width={95}
                height={75}
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
            <Link href="/events" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Events
            </Link>
            <Link href="/team" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Team
            </Link>
            <Link href="/blog" className="text-white hover:text-[#00ADB5]" onClick={closeDrawer}>
              Blog
            </Link>
            <Link href="/login" className="text-white hover:text-blue-500" onClick={closeDrawer}>
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {open ? <CloseIcon /> : <MenuIcon className='text-white' />}
            </IconButton>
          </div>
        </div>
      </nav>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div className="bg-hero-bg flex flex-col h-screen w-screen">
          <div className="bg-hero-bg flex justify-between items-center p-2 pr-4">
            <div></div>
            <IconButton edge="end" color="inherit" aria-label="close" onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className="mt-10 flex flex-col justify-between items-center gap-10 px-10 ">
              <Link href="/" onClick={closeDrawer}>
                <ListItemText primary="Home" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/About" onClick={closeDrawer}>
                <ListItemText primary="About" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/events" onClick={closeDrawer}>
                <ListItemText primary="Events" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/team" onClick={closeDrawer}>
                <ListItemText primary="Team" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/blog" onClick={closeDrawer}>
                <ListItemText primary="Blog" className='hover:text-[#00ADB5]'/>
              </Link>
              <Link href="/login" onClick={closeDrawer}>
                <ListItemText primary="Login" className='hover:text-[#00ADB5]' />
              </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;