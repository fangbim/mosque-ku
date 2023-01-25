import React from "react";
import ButtonAdd from "../../components/button/ButtonAdd";
import DropdownMoth from "../../components/DropdownMonth";
import ListInformation from "../../components/ListInformation";

function AdminInformation() {
  return (
    <div className="h-full w-[1348px] bg-white rounded-3xl">
      <div className="mx-20 py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-montserrat font-semibold text-[40px] p-10">
            Update Informasi Kegiatan
          </h1>
          <ButtonAdd/>
        </div>
        <div className="w-full bg-black h-[2px]"></div>
        <div className="w-full h-full justify-end p-5">
          <DropdownMoth/>
        </div>
        <ListInformation/>
      </div>
    </div>
  );
}

export default AdminInformation;
