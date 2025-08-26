import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { USER_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { toast } from 'sonner';


const Signup = () => {

  const [input, setInput] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: ''
  })
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message || "Something went wrong, please try again.");
      }
    }
  }

      return (
        <div>
          <Navbar />
          <div className='flex items-center justify-center max-w-4xl mx-auto '>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-xl p-4 my-10 shadow-md bg-white'>
              <h1 className='text-4xl mb-5 mt-[-4px] font-bold text-center'>Sign Up</h1>
              <div className='my-2 '>
                <Label className='mb-1'>Full Name</Label>
                <Input type="text" placeholder="Alex Hormonzi" value={input.fullName} onChange={changeEventHandler} name="fullName" className='outline-0 focus-visible:ring-0 focus:ring-0' />
              </div>
              <div className='my-2'>
                <Label className='mb-1'>Email Address</Label>
                <Input type="email" placeholder="alex.hormonzi@example.com" value={input.email} onChange={changeEventHandler} name="email" className='outline-0 focus-visible:ring-0 focus:ring-0' />
              </div>
              <div className='my-2'>
                <Label className='mb-1'>Phone Number</Label>
                <Input type="tel" placeholder="(123) 456-7890" value={input.phoneNumber} onChange={changeEventHandler} name="phoneNumber" className='outline-0 focus-visible:ring-0 focus:ring-0' />
              </div>
              <div className='my-2'>
                <Label className='mb-1'>Password</Label>
                <Input type="password" placeholder="********" value={input.password} onChange={changeEventHandler} name="password" className='outline-0 focus-visible:ring-0 focus:ring-0' />
              </div>

              <div className='flex flex-col'>
                <RadioGroup className="flex items-center gap-2 my-2" aria-label="View density">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="freelancer"
                      checked={input.role === "freelancer"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label htmlFor="option-one">Freelancer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label htmlFor="option-two">Recruiter</Label>
                  </div>
                </RadioGroup>

                <div className='flex items-center gap-2'>
                  <Label >Profile </Label>
                  <Input accept="image/*" type="file" onChange={changeFileHandler} className='cursor-pointer' />
                </div>
              </div>
              <Button type="submit" className='w-full bg-[#1DA1F2] text-white py-2 rounded-lg my-4 hover:bg-[#138edb] transition duration-300'>Sign Up</Button>
              <span className='text-sm flex items-center justify-center'>Already have an account? <Link to='/login' className='text-blue-500 underline mr-5'>Login</Link></span>
            </form>

          </div>
        </div>
      );
    };

    export default Signup;
