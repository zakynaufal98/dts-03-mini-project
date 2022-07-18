import react, { useState } from "react";
import logo from "../assets/logo.png"
import vectorSearch from "../assets/search.png"
import vectorNotif from "../assets/notif.png"
import vectorGiftBox from "../assets/gift-box.png"
import vectorDropdown from "../assets/drop-down.png"
import profileImage from "../assets/profile-img.png"

const Navbar = () => {

   return (
    <div className="Header flex flex-row h-[5.875rem] w-screen h-screen bg-black gap-[540px] ">
      <div className="HeaderLeft flex ml-[60px] mt-[24px] w-[473px] h-[44px] items-center gap-[50px] bg-red-500">
        <div className="Logo flex w-[36px] h-[44px] ">
          <img src={logo} alt="logo"/>
        </div>
        <div className="MenuItems flex ">
          <ul className="flex flex-row gap-[20px] text-white text-[14px] items-center ">
            <li>Home</li>
            <li>Series</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
          </ul>
        </div>
      </div>
      <div className="HeaderRight flex mt-[30px] mw-[14.625em] h-[2rem] items-center justify-center bg-yellow-500">
        <ul className="flex gap-[20px] text-white text-[14px] items-center">
          <li> <img src={vectorSearch} alt="search"/></li>
          <li> User </li>
          <li> <img src={vectorNotif} alt="noftiy"/></li>
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
