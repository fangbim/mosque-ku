import React from 'react'
import ButtonAdd from '../../components/button/ButtonAdd'

function AdminEvent() {
  return (
    <div className="h-full w-[1348px] bg-white rounded-3xl">
      <div className="mx-20 py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-montserrat font-semibold text-[40px] p-10">
            Update Event
          </h1>
          <ButtonAdd />
        </div>
        <div className="w-full bg-black h-[2px]"></div>
      </div>
    </div>
  )
}

export default AdminEvent