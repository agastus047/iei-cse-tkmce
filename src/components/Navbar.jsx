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
          <div className="hidden md:flex md:flex-row md:mr-0 md:gap-14">
            <Link href="/" className="text-2xl text-white hover:text-[#00ADB5]">
              Home
            </Link>
            <Link href="/About" className="text-2xl text-white hover:text-[#00ADB5]">
              About
            </Link>
            <Link href="/events" className="text-2xl text-white hover:text-[#00ADB5]">
              Events
            </Link>
            <Link href="/team" className="text-2xl text-white hover:text-[#00ADB5]">
              Team
            </Link>
            <Link href="/blog" className="text-2xl text-white hover:text-[#00ADB5]">
              Blog
            </Link>
            <Link href="/login" className="text-2xl text-white hover:text-blue-500">
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
          <List className="flex flex-col justify-between items-center gap-10 ml-24 px-10">
            <ListItem button>
              <Link href="/">
                <ListItemText primary="Home" className='hover:text-[#00ADB5]'/>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/About">
                <ListItemText primary="About" className='hover:text-[#00ADB5]'/>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/events">
                <ListItemText primary="Events" className='hover:text-[#00ADB5]'/>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/team">
                <ListItemText primary="Team" className='hover:text-[#00ADB5]'/>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/blog">
                <ListItemText primary="Blog" className='hover:text-[#00ADB5]'/>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/login">
                <ListItemText primary="Login" className='hover:text-[#00ADB5]' />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
