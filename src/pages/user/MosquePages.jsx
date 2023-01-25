import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MosqueBalances from "./MosqueBalances";
import {SidebarItems} from '../../components/SidebarItems'
import { Link, Outlet, Route, Routes } from "react-router-dom";
import InfoKegiatan from "./InfoKegiatan";
import ListEvent from "./ListEvent";

function MosquePages() {

  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <div className="grid  h-full w-52 items-center justify-center pt-14">
          {SidebarItems.map((items, index)=>{
            return(
              <div key={index} className={items.cName}>
                <Link to={items.path}>
                  <img
                    className="w-[60px] py-7 cursor-pointer"
                    src={items.icon}
                    alt={items.cName}
                  />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="bg-[#EEF2E6] w-full h-screen grid justify-center rounded-tl-[50px]">
          <div className="grid py-32">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MosquePages;
