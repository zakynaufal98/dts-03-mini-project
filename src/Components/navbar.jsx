import logo from "../assets/logo.png";

import { GiftIcon, SearchIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  UserIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";

const Navbar = () => {
  return (
    <div className="Header container:sm pr-6 flex flex-row h-16 w-full items-center bg-[#141414] justify-between">
      <div className="HeaderLeft flex gap-8 ml-4">
        {/* Logo Image */}
        <img src={logo} alt="logo" className="Logo w-[36px] h-[44px]" />
        {/* Menu Kiri */}
        <div className="MenuItems flex invisible md:visible ">
          <ul className="flex flex-row gap-[20px] text-white text-xs items-center ">
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
      <div className="HeaderRight justify-self-end flex">
        <SearchIcon className="text-white w-6 h-6 mr-3" />
        <ul className="hidden gap-5 items-center text-white text-xs sm:flex">
          <li> User </li>
          <li>
            {" "}
            <BellIcon className="w-6 h-6" />
          </li>
          <li>
            {" "}
            <GiftIcon className="w-6 h-6" />{" "}
          </li>
          <div className="flex items-center gap-[10px]">
            <li>
              <UserIcon className="w-6 h-6" />
            </li>
            <li>
              <ChevronDoubleDownIcon className="w-6 h-6" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
