import React from 'react'

export default function Card({ coustomerData }) {
    return (
        <div className='col-span-4'>
            <h1 className='text-xl mx-3 font-bold'>Coustomers Ticket</h1>
            <div className='grid grid-cols-2 gap-3 w-full'>
                {coustomerData.map(data => <div className='p-2 rounded-lg shadow-md bg-white'>
                    <div className='flex justify-between text-xl font-semibold text-gray-900'>
                        <h1 className=''>{data.title}</h1>
                        <div className='btn border-none outline-none  rounded-full bg-green-300'> <div className='w-3 h-3 rounded-full bg-green-600'></div>Open</div>
                    </div>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo tempore mollitia corrupti culpa quibusdam.</p>
                    <div className='flex justify-between text-gray-800'>
                        <div className='flex justify-between gap-2'>
                            <h1 className='font-semibold'>{data.id}</h1>
                            <h1 className= {data.priority == "HIGH PRIORITY" ? "text-red-500 font-semibold" : data.priority == "MEDIUM PRIORITY" ? "text-orange-400 font-semibold" : "text-green-500 font-semibold"}>{data.priority}</h1>
                        </div>
                        <div className='flex justify-between gap-1 items-center text-gray-800 '>
                            <p>{data.customer}</p>
                            <i className="fa-regular text-xl fa-calendar"></i>
                            <span>19/05/2026</span>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
