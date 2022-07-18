import react from "react";

const Navbar = () => {
  return (
    <div className="Navbar flex h-24 w-full bg-full bg-black ">
      <div className="HeaderLeft w-24">
        <div className="Logo">
          <img />
        </div>
        <div className="ListMenu">
          <ul className="flex text-white">
            <li> Home</li>
            <li> Series</li>
            <li> Movies</li>
            <li> New and Popular</li>
            <li> My List</li>
          </ul>
        </div>
      </div>
      <div className="HeaderRight">

      </div>
    </div>
  );
};

export default Navbar;
