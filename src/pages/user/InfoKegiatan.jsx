import React from 'react'

function InfoKegiatan() {

    const time = 'Today';
    const msgDate = 'Minggu, 28 Januari 2023'
    const msg = 'Kepada Jamaah di harapkan bisa mengikuti kegiatan maulid nabi di hari rabu besok.'
  return (
    <>
    <div className='grid w-auto h-auto'>
    <p className='font-montserrat font-medium text-2xl'>{time}</p> 
    </div>
       
    <div className='w-[1324px] h-[199px] bg-[#3D8361]'>
        <div className='p-10'>
        <p className='font-montserrat font-light text-sm text-white'>{msgDate}</p>
        <h1 className='font-montserrat font-medium text-2xl text-white'>{msg}</h1>
        </div>
    </div>
    <div className='w-[1324px] h-[199px] bg-[#3D8361]'>
        <div className='p-10'>
        <p className='font-montserrat font-light text-sm text-white'>{msgDate}</p>
        <h1 className='font-montserrat font-medium text-2xl text-white'>{msg}</h1>
        </div>
    </div>
    <div className='w-[1324px] h-[199px] bg-[#3D8361]'>
        <div className='p-10'>
        <p className='font-montserrat font-light text-sm text-white'>{msgDate}</p>
        <h1 className='font-montserrat font-medium text-2xl text-white'>{msg}</h1>
        </div>
    </div>
    </>
    
  )
}

export default InfoKegiatan