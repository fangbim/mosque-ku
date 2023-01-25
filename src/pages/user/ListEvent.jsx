import React from 'react'

function ListEvent() {

    const namaEvent  = 'Maulid Nabi Muhammad SAW'
    const time = '17:30 WIB'
  return (
    <div>
        <h1 className='font-montserrat font-semibold text-2xl p-10'>Event Bulan November</h1>
        <div className='w-[1324px] h-[381px] bg-[#3d8361] rounded-[50px]'>
            <div className='grid p-20'>
            <h1 className='font-montserrat font-bold text-6xl text-white'>{namaEvent}</h1>
            <h1 className='font-montserrat font-bold text-4xl text-white'>{time}</h1>
            </div>
            <div className='grid justify-end px-20'>
            <button className='w-[295px] h-[77px] bg-[#d6cda4] font-montserrat font-bold text-2xl text-[#3d8361] rounded-[30px]'>Daftar kehadiran</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default ListEvent