
import logo from "../assets/logo.png"
import vectorSearch from "../assets/search.png"
import vectorNotif from "../assets/notif.png"
import vectorGiftBox from "../assets/gift-box.png"
import vectorDropdown from "../assets/drop-down.png"
import profileImage from "../assets/profile-img.png"

import {GiftIcon, SearchIcon} from "@heroicons/react/outline"
import {BellIcon, UserIcon, ChevronDoubleDownIcon} from "@heroicons/react/solid"

const Navbar = () => {

  return (
    <div className="Header container:xs pr-4 flex flex-row h-16 w-full items-center bg-black justify-between">
      <div className="HeaderLeft flex gap-8 ml-[60px]">
        {/* Logo Image */}
        <img src={logo} alt="logo" className="Logo w-[36px] h-[44px]" />
        {/* Menu Kiri */}
        <div className="MenuItems flex invisible md:visible ">
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
          <li> <SearchIcon className="w-6 h-6"/></li>
          <li> User </li>
          <li> <BellIcon className="w-6 h-6"/></li>
          <li> <GiftIcon className="w-6 h-6"/> </li>
          <div className="flex items-center gap-[10px]">
            <li><UserIcon className="w-6 h-6"/></li>
            <li><ChevronDoubleDownIcon className="w-6 h-6"/></li>
          </div> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
