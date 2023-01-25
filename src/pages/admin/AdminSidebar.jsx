import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="absolute h-screen w-full bg-[rgb(238,242,230)]">
      <div className="flex h-full w-full">
        <div className="h-full w-[340px p-5">
          <p className="font-montserrat font-bold text-[24px] px-5">Update</p>
          <Link to='/admin-mosqueku/keuangan'>
            <div className="h-[91] w-[340px] hover:bg-[#e5e3cc] p-4 cursor-pointer">
              <p className="font-montserrat font-medium text-[24px]">Keuangan</p>
            </div>
          </Link>
          <Link to='/admin-mosqueku/kegiatan'>
            <div className="h-[91] w-[340px] hover:bg-[#e5e3cc] p-4 cursor-pointer">
              <p className="font-montserrat font-medium text-[24px]">Informasi</p>
            </div>
          </Link>
          <Link to='/admin-mosqueku/event'>
            <div className="h-[91] w-[340px] hover:bg-[#e5e3cc] p-4 cursor-pointer">
              <p className="font-montserrat font-medium text-[24px]">Acara</p>
            </div>
          </Link>
          
          
          
        </div>
        <div className="h-full w-full pt-20">
        <Outlet/>
        </div>
        
      </div>
    </div>
  );
}

export default AdminSidebar;
