import react, { useState } from "react";
import logo from "../assets/logo.png"
import vectorSearch from "../assets/search.png"
import vectorNotif from "../assets/notif.png"
import vectorGiftBox from "../assets/gift-box.png"
import vectorDropdown from "../assets/drop-down.png"
import profileImage from "../assets/profile-img.png"

const Navbar = () => {

  return (
    <div className="Header container flex flex-row h-16 w-full items-center bg-black justify-between">
      <div className="HeaderLeft flex gap-8 ml-[60px]">
        {/* Logo Image */}
        <img src={logo} alt="logo" className="Logo w-[36px] h-[44px]" />
        {/* Menu Kiri */}
        <div className="MenuItems flex">
          <ul className="flex flex-row gap-[20px] text-white text-xs items-center ">
            <li>Home</li>
            <li>Series</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
          </ul>
        </div>
      </div>

      {/* Menu Kanan */}
      <div className="HeaderRight flex justify-self-end">
        <ul className="flex gap-5 items-center text-white text-xs">
          <li> <img src={vectorSearch} alt="search"/></li>
          <li> User </li>
          <li> <img src={vectorNotif} alt="notify"/></li>
          <li> <img src={vectorGiftBox} alt="box"/></li>
          <div className="flex items-center gap-[10px]">
            <li><img src={profileImage} alt="" /></li>
            <li><img src={vectorDropdown} alt="" /></li>
          </div> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
