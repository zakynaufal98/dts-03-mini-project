import logo from "../assets/logo.png";


import { GiftIcon, SearchIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  UserIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";
import { useState } from "react";

function Dropdown() {
  return (
    <div className="flex absolute justify-end w-screen pr-5">
      <div className="text-white bg-[#141414] px-6 py-3">
        Logout
      </div>
    </div>
  )
}

const Navbar = () => {
  const [value, setToggle] = useState(false)

  function toggleDropdown(val) {
    setToggle(!val)
    console.log(val)
  }

  return (
    <div>
      <div className="Header container:sm pr-6 flex flex-row h-16 w-full items-center bg-[#141414] justify-between">
        <div className="HeaderLeft flex gap-8 ml-4">
          {/* Logo Image */}
          <img src={logo} alt="logo" className="Logo w-[36px] h-[44px] self-center" />
          {/* Menu Kiri */}
          <div className="MenuItems flex invisible md:visible ">
            <ul className="flex flex-row gap-[20px] text-white text-sm items-center ">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/series">
                <li>Series</li>
              </Link>
              <Link to="/movies">
                <li>Movies</li>
              </Link>
              <Link to="/new-and-popular">
                <li>New and Popular</li>
              </Link>
              <Link to="/My-List">
                <li>My List</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Menu Kanan */}
        <div className="HeaderRight justify-self-end flex gap-2">
          <SearchIcon className="text-white w-6 h-6 " />
          <ul className="hidden gap-5 items-center text-white text-xs sm:flex">
            <li> User </li>
            <li>
              <BellIcon className="w-6 h-6" />
            </li>
            <li>
              <GiftIcon className="w-6 h-6" />
            </li>

            <li>
              <UserIcon className="w-6 h-6" />
            </li>


          </ul>
          <ChevronDoubleDownIcon className="w-6 h-6 cursor-pointer text-white" onClick={() => toggleDropdown(value)} />

        </div>

      </div>
      {value && <Dropdown />}
    </div>
  );
};

export default Navbar;
