import React from "react";

function DailySurah() {

    const isi = '"Dan janganlah kamu mendekati zina; (zina) itu sungguh suatu perbuatan keji, dan suatu jalan yang buruk”';
    const chapter = "QS. Al-Isra' Ayat 32";

  return (
    <div className="grid justify-center items-center w-full">
      <div className="w-[91.5rem] h-[27.125rem] bg-[#3D8361]  rounded-[60px]">
        <div className="grid justify-center items-center py-10 text-center">
          <h1 className="text-[36px] text-white font-montserrat font-black">
            Daily Surah
          </h1>
          <div className="w-[78.688rem] py-14">
            <h1 className="text-[36px] text-white font-montserrat font-medium">
              {isi}
            </h1>
            <h1 className="text-[36px] text-white font-montserrat font-medium py-10">
              {chapter}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailySurah;
