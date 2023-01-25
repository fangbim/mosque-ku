import React from 'react'
import { IoIosAddCircle } from 'react-icons/io';

function ButtonAdd() {
  return (
    <div>
      <button className='bg-[#3D8361] text-white text-2xl font-semibold font-montserrat p-4 rounded-xl'>
        
          <div className='flex items-center justify-evenly'>
          <IoIosAddCircle size={45}/>
          <p> Add New</p>
          </div>
        
    </button>
    </div>
    
  )
}

export default ButtonAdd