import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
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
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Login to continue exploring opportunities
          </p>

          {/* Email */}
          <div className="mb-4">
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="alex.hormozi@example.com"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
              className="mt-1"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="********"
              value={input.password}
              onChange={changeEventHandler}
              name="password"
              className="mt-1"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <Label className="mb-2 block">Login as</Label>
            <RadioGroup className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="freelancer"
                  checked={input.role === "freelancer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <span>Freelancer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <span>Recruiter</span>
              </label>
            </RadioGroup>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-[#1DA1F2] text-white py-2 rounded-lg hover:bg-[#138edb] transition duration-300"
          >
            Login
          </Button>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#1DA1F2] font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
