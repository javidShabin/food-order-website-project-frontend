import React, { useState } from "react";
import { CircleUser, Menu, ShoppingBag, X } from "lucide-react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserHeader = () => {
  // get profile image from redux
  const profileImg = useSelector((state) => state.profile.image);
  // Show menubar function state
  const [showMenu, setShowMenu] = useState(false);

  // Menubar toggle function
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <header className="flex justify-center items-center py-3 sm:py-4 shadow-lg sticky top-0 left-0 bg-white z-10">
      <div className="container flex justify-between items-center w-[95%]">
        {/* Logo */}
        <div className="logo">
          <img src={logo} className="w-[80px] sm:w-[100px]" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex font-semibold gap-10 sm:gap-16 cursor-pointer">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={"/restaurant"}>
            <li>Restaurants</li>
          </Link>
        </ul>

        {/* Icons */}
        <div className="icon flex gap-5 md:gap-10">
          <Link to="/user/cart">
            <ShoppingBag />
          </Link>
          <Link to="/user/profile">
            <div className="rounded-full">
              <img
                src={profileImg}
                className="w-[35px] sm:w-[35px] h-[35px] rounded-full"
              />
            </div>
          </Link>

          {/* Menu Icon for Mobile */}
          {showMenu ? (
            <X className="h-8 block sm:hidden" onClick={toggleMenu} />
          ) : (
            <Menu className="h-8 block sm:hidden" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 font-semibold sm:hidden transition duration-300 ease-in-out">
          <Link onClick={toggleMenu}>
            <li>Home</li>
          </Link>
          <Link onClick={toggleMenu}>
            <li>About</li>
          </Link>
          <Link onClick={toggleMenu}>
            <li>Restaurants</li>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default UserHeader;
