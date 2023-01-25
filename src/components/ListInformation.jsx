import React from 'react'
import DeleteButton from './button/DeleteButton'
import EditButton from './button/EditButton'

function ListInformation() {
  return (
    <div className='h-full w-full border-neutral-600 border rounded-xl drop-shadow-lg'>
        <div className='p-5'>
        <div>
            <p className='text-2xl font-semibold font-montserrat'>Tanggal: 08 Januari 2023</p>
        </div>
        <div className='w-full bg-black h-[1px] mb-5'></div>
        <div>
            <p className='text-2xl font-semibold font-montserrat'>Pesan:  Kepada Jamaah di harapkan bisa menghadiri acara Maulid Nabi Muhammad SAW pada hari rabu besok.</p>
        </div>
        <div className='flex justify-end py-5'>
            <EditButton/>
            <DeleteButton/>
        </div>
        </div>
        
    </div>
  )
}

export default ListInformation