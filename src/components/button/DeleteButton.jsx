import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function DeleteButton() {
  return (
    <button className='bg-red-600 text-[16px] text-white font-semibold font-montserrat px-4 py-2 rounded-xl flex items-center'>
        <AiFillDelete size={20} className='mr-1'/> Hapus  
    </button>
  )
}

export default DeleteButton