import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

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
        headers: { "Content-Type": "multipart/form-data" },
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex py-12 items-center justify-center px-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Create an Account ✨
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Join the No.1 Freelancing Portal today
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Alex Hormozi"
              value={input.fullName}
              onChange={changeEventHandler}
              name="fullName"
              className="mt-1"
            />
          </div>

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

          {/* Phone */}
          <div className="mb-4">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="(123) 456-7890"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              name="phoneNumber"
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

          {/* Role */}
          <div className="mb-6">
            <Label className="mb-2 block">Register as</Label>
            <RadioGroup className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="freelancer"
                  checked={input.role === "freelancer"}
                  onChange={changeEventHandler}
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
                />
                <span>Recruiter</span>
              </label>
            </RadioGroup>
          </div>

          {/* Profile Upload */}
          <div className="mb-6">
            <Label className="block mb-2">Profile Picture</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-[#1DA1F2] text-white py-2 rounded-lg hover:bg-[#138edb] transition duration-300"
          >
            Sign Up
          </Button>

          {/* Login Link */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#1DA1F2] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
