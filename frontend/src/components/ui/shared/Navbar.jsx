import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { LogOut, Settings, User } from 'lucide-react'

const Navbar = () => {
  const user = false;

  
  return (
    <div className="bg-[#ffffff] m-4 mr-12 ml-12 rounded-xl shadow-md">
      <div className='flex items-center justify-between px-10 h-16'>
        <div>
          <Link to='/'> <h1 className="text-black  p-4 text-2xl font-bold first:ml-0">Skill<span className='text-[#1DA1F2]'>Factory</span></h1></Link>
        </div>
        <div >
          <ul className='flex font-medium gap-5 items-center '>
            <Link to='/'><li>Home</li></Link>
            <Link><li>Jobs</li></Link>
            <Link><li>Browse</li></Link>
          </ul>
        </div>

        {
          !user ? (
            <div className='flex gap-2 p-4'>
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button  className='bg-[#1DA1F2] hover:bg-[#1686cb] text-white'>SignUp</Button></Link>
            </div>
          ) : (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white shadow-lg rounded-xl ">
                  <div className="flex items-center gap-4">

                    <Avatar className="cursor-pointer w-14 h-14">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h1 className="font-semibold text-base">John Doe</h1>
                      <p className="text-xs text-muted-foreground">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <hr className="-mx-4 border-t border-gray-300 my-3" />
                  </div>
                  <div className=" space-y-2">
                    <Button

                      className="w-full ml-[-6px]  justify-start text-sm flex items-center gap-2 
             rounded-sm bg-white text-black 
             border-none shadow-none 
             hover:bg-gray-100 hover:text-black 
             focus:outline-none focus:ring-0 focus:ring-offset-0 
             focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <User className="w-4 h-4" />
                      <span>View Profile</span>
                    </Button>

                    <Button

                      className="w-full m-[-6px] justify-start text-sm flex items-center gap-2 
             rounded-sm bg-white text-black 
             border-none shadow-none 
             hover:bg-gray-100 hover:text-black 
             focus:outline-none focus:ring-0 focus:ring-offset-0 
             focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Button>

                    <hr className="-mx-4 border-t border-gray-300 my-3" />

                    <div className='flex justify-between items-center ml-[12px]'>
                      <div className='m-[-6px]'><h1 className="font-semibold text-base">Free Plan</h1>
                        <p className="text-xs text-muted-foreground">
                          Upgrade to add more than 1 user
                        </p></div>
                      <div>
                        <Button className='bg-[#db0b0b] m-[-8px] text-white'>Upgrade</Button>
                      </div>

                    </div>
                    <div className="w-full">
                      <hr className="-mx-4 border-t border-gray-300 my-3" />
                    </div>
                    <Button
                      className="w-full m-[-6px] justify-start text-sm flex items-center gap-2 
             rounded-sm bg-white text-red-500
             border-none shadow-none 
             hover:bg-gray-100 hover:text-red-500
             focus:outline-none focus:ring-0 focus:ring-offset-0 
             focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </Button>
                  </div>


                </PopoverContent>

              </Popover>
            </div>
          )
        }


      </div>

    </div>
  )
}

export default Navbar