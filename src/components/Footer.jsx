import React from "react";

function Footer() {

    const aboutus="Mosqueku adalah startup digital yang fokus pada informasi mengenai keuangan dan kegiatan masjid di lingkungan anda. Kami memiliki tujuan untuk membantu para jamaah menemukan informasi mengenai masjid-masjid sekitar mereka. Kami juga menyediakan platform yang mudah digunakan bagi para takmir dan pengelola masjid untuk membagikan informasi tentang kegiatan masjid mereka kepada jamaah. Kami percaya bahwa dengan menyediakan informasi yang akurat dan tepat waktu, kami dapat membantu para jamaah menjalankan ibadah dengan lebih lancar dan nyaman. Kami terus berupaya untuk meningkatkan layanan kami demi kebaikan para jamaah masjid di Indonesia.";

  return (
    <div className="bg-[#3D8361] w-full h-[35.813rem] flex justify-evenly py-20">
      <div className="w-[27.625rem]">
        <div className="flex items-center">
          <img
            className="w-[87px]"
            src="./images/logo-mosqueku.png"
            alt="logo-mosqueku"
          />
          <h1 className="text-white text-[40px] font-montserrat font-bold px-5">
            MosqueKu
          </h1>
        </div>
        <p className="text-[20px] text-white font-normal font-montserrat py-3">
          Memberikan informasi mengenai masjid dan juga mendukung aktivitas
          ibadah anda
        </p>
        <h1 className="text-[32px] text-white font-montserrat font-extrabold py-10">Follow us</h1>
      </div>
      <div className="w-[53.375rem] justify-center block">
        <h1 className="text-white text-[40px] font-montserrat font-bold text-center">About us</h1>
        <p className="text-[24px] text-white font-montserrat font-light text-right">{aboutus}</p>
      </div>
    </div>
  );
}

export default Footer;
