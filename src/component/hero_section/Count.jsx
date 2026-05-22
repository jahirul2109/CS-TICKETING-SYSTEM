import React from 'react'
import vectorImg from "../../assets/vector1.png"

export default function Count({ selected, removeSelected }) {
  return (
    <div className='w-11/12  mx-auto grid grid-cols-2 gap-3 text-white mt-20'>
      <div className=' text-center py-22  relative overflow-hidden rounded-2xl '>
        {/* right img */}
        <img src= {vectorImg} className='right-0  rotate-y-180  top-0 h-full opacity-100 absolute' alt="" />
        {/* left img */}
        <img src= {vectorImg} className='left-0 top-0  h-full opacity-100 absolute' alt="" />
        
        <div className='absolute -z-10  inset-0 bg-linear-to-r from-purple-700/90 to-purple-400/50'></div>
       <div className='text-2xl'> <p>In-Progress</p> <h1 className='text-2xl font-bold'>{selected.length}</h1></div>
      </div>
      <div className=' text-center py-22 rounded-2xl overflow-hidden relative '>
        <img src={vectorImg}  className='absolute left-0 top-0 h-full opacity-90'alt="" />
        <img src={vectorImg} className='absolute right-0 rotate-y-180 top-0 h-full opacity-90' alt="" />
        <div className=' -z-10 absolute bg-linear-to-r from-green-400/40 to-green-800/90 inset-0'></div>
       <div className='text-2xl'> <p>Resolved</p> <h1 className='text-2xl font-bold'>{removeSelected.length}</h1></div>
      </div>
    </div>
  )
}
