import React from 'react'

export default function Count({ selected, removeSelected }) {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-2 gap-3 text-white mt-20'>
      <div className='bg-green-400 text-center py-22 rounded-lg '> <p>In-Progress</p> <h1 className='text-2xl font-bold'>{selected.length}</h1></div>
      <div className='bg-green-400 text-center py-22 rounded-lg '> <p>Resolved</p> <h1 className='text-2xl font-bold'>{removeSelected.length}</h1></div>
    </div>
  )
}
