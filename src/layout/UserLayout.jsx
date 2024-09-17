import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import UserHeader from "../components/user/Header";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstants } from "../config/axiosInstants";
import { clearUser, saveUser } from "../redux/features/userSlice";

const UserLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isUserExist } = useSelector((state) => state.user); // Corrected 'isUserExists' to 'isUserExist'

  const checkUser = async () => {
    try {
      await axiosInstants({
        method: "GET",
        url: "/user/check-user",
      });
      dispatch(saveUser());
      setLoading(true);
    } catch (error) {
      dispatch(clearUser()); // If loggin error call the clear fuction false
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  return (
    loading && (
      <div>
        {isUserExist ? <UserHeader /> : <Header />}

        <Outlet />
      </div>
    )
  );
};

export default UserLayout;
