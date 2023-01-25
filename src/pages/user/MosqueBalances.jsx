import React from "react";

function MosqueBalances() {
  const masjid = 'Masjid Agung "Maulanan Malik Ibrahim" Gresik';
  const alamat =
    "Jl. DR. Wahidin Sudiro Husodo, Klangonan, Kembangan, Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61124";

    const balances = '30.000.000.000'

  return (
    <>
    <div className="w-[1324px] h-[316px] bg-[#1C6758] rounded-[50px]">
        
        <div className="p-10 flex justify-around">

        <div className="w-auto h-auto">
          <div className="flex">
            <img className="w-[30px] h-[30px]" src="../images/pin.png" alt="pin"/>
            <div className=" w-[500px] px-2">
            <h1 className="font-montserrat font-bold text-[16px] text-white">
              {masjid}
            </h1>
            <p className="font-montserrat font-normal text-[10px] text-white">
              {alamat}
            </p>
            </div>
            
          </div>
          <div className="py-10">
            <h1 className="font-montserrat font-medium text-[16px] text-white ">Saldo Masjid saat ini</h1>
            <h1 className="font-montserrat font-extrabold text-6xl text-white" >Rp. {balances}</h1>
          </div>
        </div>

            <div className="grid items-center justify-center">
                <img className="w-80 pt-7" src="../images/mosque-solid-colored.png" alt=""/>
            </div>
        </div>
      </div>
    </>
  );
}

export default MosqueBalances;
