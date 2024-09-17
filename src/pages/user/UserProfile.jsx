// import React, { useEffect, useState } from "react";
// import { axiosInstants } from "../../config/axiosInstants";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
//   // navigate function for user logout
//   const navigate = useNavigate();
//   // user profile management state
//   const [isUser, setIsuser] = useState({});
//   // user profile data
//   const fetchUserProfile = async () => {
//     try {
//       const response = await axiosInstants({
//         method: "GET",
//         url: "/user/profile",
//       });
//       setIsuser(response.data);
//     } catch (error) {}
//   };

//   // user logout function
//   const handleLogout = async () => {
//     try {
//       await axiosInstants({
//         method: "POST",
//         url: "/user/logout",
//       });
//       navigate("/login");
//       toast.success("User logged out");
//     } catch (error) {}
//   };
//   useEffect(() => {
//     fetchUserProfile();
//   }, []);
//   return (
//     <div className="flex justify-center items-center w-full ">
//       <div className="container py-7 flex flex-col items-center mt-5 w-[90%] shadow-lg rounded-lg ">
//         <div>
//           <img src={isUser.image} className="rounded-full w-[180px]" />
//         </div>
//         <div className="text-center ">
//           <h1 className="text-[28px] font-semibold ">{isUser.name}</h1>
//           <span className="font-medium ">{isUser.email}</span>
//           <h4>{isUser.phone}</h4>
//         </div>
//         <div className="flex justify-between w-[90%]">
//           <button
//             onClick={handleLogout}
//             className="bg-orange-400 mt-5 rounded-md font-semibold py-1 px-4"
//           >
//             Logout
//           </button>
//           <button className="border border-orange-400 mt-5 py-1 px-4 font-semibold rounded-md">Edit user</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

