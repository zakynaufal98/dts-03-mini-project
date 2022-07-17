import react from "react";

const Navbar = () =>  {
    return (
        <div className="Navbar">
            <div className="Logo">
            <img></img>
            </div>
        <div className="ListMenu bg-auto bg-black">
            <ul className="flex text-white-600">
                <li> Home</li>
                <li> Series</li>
                <li> Movies</li>
                <li> New and Popular</li>
                <li> My List</li>
            </ul>
        </div>
        </div>
        
    )
}

export default Navbar