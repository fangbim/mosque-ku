import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function MPVBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center w-full justify-center">
      <div className="w-[91.5rem] bg-[#3D8361] py-16 rounded-[50px] flex">
        <div className="py-10 px-32">
          <div className="w-[596px]">
            <h1 className="font-montserrat font-black text-5xl text-white leading-tight">
              Dapatkan Kemudahan Dalam Menjangkau Informasi Masjid
            </h1>
          </div>
          <div className="w-[438px]">
            <h5 className="text-white font-montserrat font-normal text-[20px]">
              Informasi kegiatan masjid dan manajemen keuangan masjid
            </h5>
          </div>
          <div className="py-5 flex w-[31rem] justify-between">
            <Link to='/registermosque'>
            <button className="bg-white py-4 px-5 rounded-[40px] text-[#3D8361] font-montserrat font-bold text-[16px]">
              Buat halaman masjid
            </button>
            </Link>
            
            <button className="border-2 py-4 px-5 rounded-[40px] text-white font-montserrat font-bold text-[16px]" type="button" onClick={() => setShowModal(true)}>
              Gabung halaman masjid
            </button>
          </div>
        </div>
        <div className="">
          <img className="w-[649px]" src="./images/banner-vektor.png" alt="banner-vektor" />
        </div>
      </div>
    </div>

    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between px-4 pt-2">
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div className="grid lex items-center justify-center px-5 py-5">
                <h3 className="font-semibold text-center text-[20px]">  
                  Masukkan Kode Masjid
                </h3>
                <p className=" text-slate-500 text-[14px] font-normal leading-relaxed">
                  Kode masjid di berikan oleh admin  masjid sekitarmu
                </p>
              </div>
              {/*body*/}
              <div className="relative px-6 py-3 flex-auto">
                <input className="w-[385px] h-[44px] bg-white border rounded-[8px] p-3" placeholder="Kode"></input>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6  rounded-b">
                <Link to='/mosque'>
                <button
                  className="w-[385px] bg-[#3D8361] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-[10px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Gabung
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}

    </>
    
  );
}

export default MPVBanner;
