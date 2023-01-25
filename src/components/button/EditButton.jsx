import React from 'react'
import {MdModeEditOutline} from 'react-icons/md'

function EditButton() {
  return (
    <button className='bg-blue-600 text-[16px] text-white font-semibold font-montserrat px-4 py-2 rounded-xl flex items-center'>
        <MdModeEditOutline size={20} className='mr-1'/> Edit  
    </button>
  )
}

export default EditButton