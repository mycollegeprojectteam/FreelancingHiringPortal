import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Avatar, AvatarImage } from "../avatar";
import { LogOut, Settings, User, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fetch user if not in Redux store (optional)
  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        try {
          const res = await axios.get(`${USER_API_END_POINT}/me`, {
            withCredentials: true,
          });
          if (res.data.success) dispatch(setUser(res.data.user));
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUser();
  }, [dispatch, user]);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-white shadow-md w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Skill<span className="text-[#1DA1F2]">Factory</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5 font-medium">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link to="/admin/companies">Companies</Link>
                  </li>
                  <li>
                    <Link to="/admin/jobs">Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/browse">Browse</Link>
                  </li>
                </>
              )}
            </ul>

            {!user ? (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#1DA1F2] hover:bg-[#c1e0f3] text-white">
                    SignUp
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname || "User"}
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white shadow-lg rounded-xl p-4">
                  <div className="mb-3 font-medium">{user?.fullname}</div>
                  <div className="flex flex-col gap-2 text-gray-600">
                    {user.role === "student" && (
                      <Button
                        variant="link"
                        className="flex items-center gap-2"
                        onClick={() => navigate("/profile")}
                      >
                        <User2 /> View Profile
                      </Button>
                    )}
                    <Button
                      variant="link"
                      className="flex items-center gap-2 text-red-500"
                      onClick={logoutHandler}
                    >
                      <LogOut /> Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <ul className="flex flex-col gap-3 font-medium">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link to="/admin/companies" onClick={() => setMenuOpen(false)}>
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/jobs" onClick={() => setMenuOpen(false)}>
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobs" onClick={() => setMenuOpen(false)}>
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse" onClick={() => setMenuOpen(false)}>
                      Browse
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {!user ? (
              <div className="mt-3 flex flex-col gap-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-[#1DA1F2] hover:bg-[#1786ca] text-white">
                    SignUp
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-2">
                {user.role === "student" && (
                  <Button
                    className="w-full flex items-center gap-2"
                    onClick={() => {
                      navigate("/profile");
                      setMenuOpen(false);
                    }}
                  >
                    <User2 /> Profile
                  </Button>
                )}
                <Button
                  className="w-full flex items-center gap-2 text-red-500"
                  onClick={() => {
                    logoutHandler();
                    setMenuOpen(false);
                  }}
                >
                  <LogOut /> Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
