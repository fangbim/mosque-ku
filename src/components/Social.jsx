import React from 'react'

function Social(props) {

    const src = props.src
    const title = props.title

  return (
    <div className='flex w-[180px] h-[54px] bg-white border-neutral-600 border rounded-[10px] justify-center items-center cursor-pointer'>
    <img className='pr-2' src={src} alt='social-icon'/>
    <p className='text-[12px]'>{title}</p> 
    </div>
  )
}

export default Social