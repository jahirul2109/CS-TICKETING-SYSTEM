import React from 'react'

export default function Card() {
    return (
        <div className='grid grid-cols-5 w-10/12 mx-auto mt-20'>
            <div className='col-span-4'>
                <h1 className='text-xl mx-3 font-bold'>Coustomers Ticket</h1>
                <div className='grid grid-cols-2 gap-3 w-full'>
                    <div className='p-2 rounded-lg shadow-md'>
                        <div className='flex justify-between text-xl font-semibold text-gray-900'>
                            <h1 className=''>Login issue Can't Aecces Account</h1>
                            <div className='btn border-none outline-none  rounded-full bg-green-300 text-green-600'> <div className='w-3 h-3 rounded-full bg-green-600'></div>Open</div>
                        </div>
                        <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo tempore mollitia corrupti culpa quibusdam.</p>
                        <div className='flex justify-between text-gray-800'>
                            <div className='flex justify-between gap-2'>
                                <h1 className='font-semibold'>#1001</h1>
                                <h1 className='text-red-500 font-semibold'>HIGH PRIORITY</h1>
                            </div>
                            <div className='flex justify-between gap-1 items-center text-gray-800 '>
                                <p>Jone doe</p>
                                <i className="fa-regular text-xl fa-calendar"></i>
                                <span>19/05/2026</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 rounded-lg shadow-md'>
                        <div className='flex justify-between text-xl font-semibold text-gray-900'>
                            <h1 className=''>Login issue Can't Aecces Account</h1>
                            <div className='btn border-none outline-none  rounded-full bg-green-300 text-green-600'> <div className='w-3 h-3 rounded-full bg-green-600'></div>Open</div>
                        </div>
                        <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo tempore mollitia corrupti culpa quibusdam.</p>
                        <div className='flex justify-between text-gray-800'>
                            <div className='flex justify-between gap-2'>
                                <h1 className='font-semibold'>#1001</h1>
                                <h1 className='text-red-500 font-semibold'>HIGH PRIORITY</h1>
                            </div>
                            <div className='flex justify-between gap-1 items-center text-gray-800 '>
                                <p>Jone doe</p>
                                <i className="fa-regular text-xl fa-calendar"></i>
                                <span>19/05/2026</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=''>
                <div>
                    <h1 className='text-xl font-bold'>Task Status</h1>
                    {/* Task Status Card */}
                    <div>
                        <div className='bg-white rounded-md shadow-md p-4'>
                            <h1 className='font-semibold'>Payment Faild - Card Declined</h1>
                            <button className='btn bg-green-600 border-none w-full'>Complete</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Resovled Task</h1>
                </div>
            </div>
        </div>
    )
}
