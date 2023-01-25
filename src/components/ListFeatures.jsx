import React from 'react'
import Features from "../components/Features";

function ListFeatures() {
  return (
    <div className='grid items-center w-full py-20'>
        <div className=' items-center w-full justify-center grid'>
        <h1 className='font-montserrat font-extrabold text-[48px]'>Fitur lain dari Mosqueku</h1>
        </div>
        <div className='w-full py-20 flex items-center justify-evenly px-40'>
        <Features pathImage='./images/praying.png' featureName='Jadwal Sholat' path='/morefeatures'/>
        <Features pathImage='./images/dua-hands.png' featureName='Doa Harian' path='/morefeatures'/>
        <Features pathImage='./images/beads.png' featureName='Bacaan Dzikir' path='/morefeatures'/>
        <Features pathImage='./images/quran.png' featureName='Belajar Islam' path='/morefeatures'/>
        <Features pathImage='./images/gift.png' featureName='Berbagi Sesama' path='/morefeatures'/>
        </div>
    </div>    
  )
}

export default ListFeatures