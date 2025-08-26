import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link} from "react-router-dom";
import { USER_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        console.log("Login Response :", res.data);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-4xl mx-auto '>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-xl p-4 my-10 shadow-md bg-white'>
          <h1 className='text-4xl mb-5 mt-[-4px] font-bold text-center'>Login</h1>

          <div className='my-2'>
            <Label className='mb-1'>Email Address</Label>
            <Input type="email" placeholder="alex.hormonzi@example.com" value={input.email} onChange={changeEventHandler} name="email" className='outline-0 focus-visible:ring-0 focus:ring-0' />
          </div>

          <div className='my-2'>
            <Label className='mb-1'>Password</Label>
            <Input type="password" placeholder="********" value={input.password} onChange={changeEventHandler} name="password" className='outline-0 focus-visible:ring-0 focus:ring-0' />
          </div>

          <div className='flex flex-col'>
            <RadioGroup className="flex items-center gap-2 my-.5" aria-label="View density">
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


          </div>
          <Button type="submit" className='w-full bg-[#1DA1F2] text-white py-2 rounded-lg my-1 hover:bg-[#138edb] transition duration-300'>Login</Button>
          <span className='text-sm flex items-center justify-center mt-2'>Don't have an account? <Link to='/signup' className='text-blue-500 underline mr-5'>Sign Up</Link></span>
        </form>

      </div>
    </div>
  );
};

export default Login;
