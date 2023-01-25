import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/input/CustomInput";
import InputDropdown from "../../components/input/InputDropdown";

function RegisterMosque() {
  return (
    <div className="h-full w-full">
      <img
        className="absolute h-full w-full object-cover"
        src="./images/mosq.jpg"
        alt="bg-page"
      />

      <div className="absolute h-full w-[714px] bg-black opacity-50"></div>
      <div className="absolute p-20 items-center justify-center w-[714px]">
        <div className="grid items-center justify-center">
          <div className="grid items-center justify-center">
            <Link to="/">
              <img
                className="w-[180px]"
                src="./images/logo-mosqueku.png"
                alt="logo-mosqueku"
              />
            </Link>
          </div>
          <h1 className="font-montserrat font-black text-white text-[40px]">
            Join MosqueKu Sekarang dan dapatkan:
          </h1>
          <ul className="list-disc text-white text-[24px] font-bold pl-20">
            <li>Kemudahan dalam menginformasikan Kegiatan masjid sekitar.</li>
            <li>Pengelolaan Keuangan masjid jadi lebih mudah dan praktis.</li>
            <li>Pengalaman ibadah anda dengan fitur - fitur ekslusif</li>
          </ul>
          <p className="font-black text-white text-[16px]">
            Jangan lewatkan kesempatan untuk menikmati fitur terbaru kami yang
            akan membantu Anda mencari informasi tentang masjid di sekitar Anda
            dengan lebih cepat dan mudah
          </p>
        </div>
      </div>

      <div className="flex h-full w-full justify-end py-10 px-64">
      <div className=" absolute grow bg-[#EEF2E6] w-[700px] rounded">
      <div className="grid justify-center items-center py-20">
      <h1 className="font-extrabold text-[40px] pb-10">Registrasi Akun Masjid</h1>

        <CustomInput label='Nama Masjid' type='text'/>
        <CustomInput label='Nama Pengurus' type='text'/>
        <CustomInput label='Alamat Lengkap' type='text'/>
        <InputDropdown />
        <Link to='/admin-mosqueku'>
        <button className="w-full bg-[#3D8361] py-3 px-5 text-white rounded-xl font-montserrat font-bold text-[16px] hover:bg-[#1C6758]">Registrasi</button>
        </Link>
        
      </div>

       
      </div>
      </div>

      
    </div>
  );
}

export default RegisterMosque;
