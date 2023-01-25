import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

function Navbar() { 
  return (
    <div className="py-5 px-20 flex items-center w-full justify-between sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <img className="w-24" src="./images/logo-mosqueku.png" alt="logo" />
        <div className="block px-5">
          <h1 className="font-montserrat text-4xl font-bold cursor-pointer"><Link to='/'>Mosqueku</Link></h1>
          <h5 className="font-montserrat font-light -tracking-[-0.4em] text-[12px]">
            Solusi Digital Umat
          </h5>
        </div>
      </div>

      <div className="flex items-center w-[35em] justify-between">
        <h1 className="text-[1.5rem] font-montserrat font-medium cursor-pointer "><a href="#home" onClick={<Home/>}>Home</a></h1>
        <h1 className="text-[1.5rem] font-montserrat font-medium cursor-pointer"><a href="#features" onClick={<Home/>}>Features</a></h1>
        <h1 className="text-[1.5rem] font-montserrat font-medium cursor-pointer"><a href="#aboutus" onClick={<Home/>}>About us</a></h1>
        <Link to='/signup'><button className="bg-[#3D8361] py-3 px-5 text-white rounded-xl font-montserrat font-semibold hover:bg-[#1C6758]">Get Started</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
