import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { LogOut, Settings, User, Menu, X } from 'lucide-react'

const Navbar = () => {
  const user = false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#ffffff] max-w-[1450px] m-6 mx-auto rounded-xl shadow-md ">
      <div className='flex items-center justify-between px-4 md:px-10 h-16'>
        
        {/* Logo */}
        <div>
          <Link to='/'>
            <h1 className="text-black text-2xl font-bold">
              Skill<span className='text-[#1DA1F2]'>Factory</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex'>
          <ul className='flex font-medium gap-5 items-center'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/jobs'><li>Jobs</li></Link>
            <Link to='/browse'><li>Browse</li></Link>
          </ul>
        </div>

        {/* Right Section */}
        {
          !user ? (
            <div className='hidden md:flex gap-2'>
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className='bg-[#1DA1F2] hover:bg-[#1686cb] text-white'>SignUp</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg rounded-xl">
                {/* your popover content remains same */}
              </PopoverContent>
            </Popover>
          )
        }

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className='flex flex-col gap-3 font-medium'>
            <Link to='/'><li onClick={() => setMenuOpen(false)}>Home</li></Link>
            <Link to='/jobs'><li onClick={() => setMenuOpen(false)}>Jobs</li></Link>
            <Link to='/browse'><li onClick={() => setMenuOpen(false)}>Browse</li></Link>
          </ul>

          {
            !user ? (
              <div className='flex flex-col gap-2'>
                <Link to="/login"><Button variant="outline" className="w-full">Login</Button></Link>
                <Link to="/signup"><Button className='bg-[#1DA1F2] hover:bg-[#1686cb] text-white w-full'>SignUp</Button></Link>
              </div>
            ) : (
              <div className="pt-2">
                {/* You can also drop the popover here for mobile */}
                <Button className="w-full flex items-center gap-2"><User size={16}/> Profile</Button>
                <Button className="w-full flex items-center gap-2"><Settings size={16}/> Settings</Button>
                <Button className="w-full flex items-center gap-2 text-red-500"><LogOut size={16}/> Logout</Button>
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}

export default Navbar
