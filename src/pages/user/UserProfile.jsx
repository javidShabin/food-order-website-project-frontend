import React, { useEffect, useState } from "react";
import { axiosInstants } from "../../config/axiosInstants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import ProfileEdit from "../../components/user/ProfileEdit";

const ProfilePage = () => {
  // show edit profile state
  const [showEdit, setShowEdite] = useState(false);
  // navigate function for user logout
  const navigate = useNavigate();
  // user profile management state
  const [isUser, setIsuser] = useState({});
  // user profile data
  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/user/profile",
      });
      setIsuser(response.data);
    } catch (error) {
      toast.error("Failed to fetch user profile");
    }
  };

  // user logout function
  const handleLogout = async () => {
    try {
      await axiosInstants({
        method: "POST",
        url: "/user/logout",
      });
      navigate("/login");
      toast.success("User logged out");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  const handleEdite = () => {
    setShowEdite(true);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center w-full h-[91vh]">
          <div className="container py-7 flex flex-col items-center mt-5 w-[90%] shadow-lg rounded-lg ">
            <div>
              <img src={isUser.image} alt="User profile" className="rounded-full w-[180px]" />
            </div>
            <div className="text-center ">
              <h1 className="text-[28px] font-semibold ">{isUser.name}</h1>
              <span className="font-medium ">{isUser.email}</span>
              <h4>{isUser.phone}</h4>
            </div>
            <div className="flex justify-between w-[90%]">
              <button
                onClick={handleLogout}
                className="bg-orange-400 mt-5 rounded-md font-semibold py-1 px-4"
              >
                Logout
              </button>
              <button
                className="border border-orange-400 mt-5 py-1 px-4 font-semibold rounded-md"
                onClick={handleEdite}
              >
                Edit user
              </button>
            </div>
          </div>
        </div>

        {showEdit && (
          <div className="container absolute top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white w-[90%] md:w-[50%] p-5 rounded-lg">
              <X
                className="absolute top-3 right-3 cursor-pointer text-black"
                onClick={() => setShowEdite(false)}
              />
              <ProfileEdit/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
