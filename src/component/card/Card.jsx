import React from 'react'

export default function Card() {
    return (
        <div className='grid grid-cols-5 w-10/12 mx-auto'>
            <div className='col-span-4'>
                <h1>Coustomers Ticket</h1>
                <div className='grid grid-cols-2 w-full'>
                    <div className='p-4 rounded-lg '>
                        <div className='flex'>
                            <h1>Login issue Can't Aecces Account</h1>
                            <h1 className='btn roundfu'>Open</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo tempore mollitia corrupti culpa quibusdam.</p>
                        <div className='flex'>
                            <div className='flex justify-between '>
                                <h1>#1001</h1>
                                <h1>HIGH PRIORITY</h1>
                            </div>
                            <div className='flex'>
                                <p>Jone doe</p>
                                {/* <i></i> */}
                                <span>19/05/2026</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 rounded-lg '>
                        <div className='flex'>
                            <h1>Login issue Can't Aecces Account</h1>
                            <h1 className='btn roundfu'>Open</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo tempore mollitia corrupti culpa quibusdam.</p>
                        <div className='flex'>
                            <div className='flex justify-between '>
                                <h1>#1001</h1>
                                <h1>HIGH PRIORITY</h1>
                            </div>
                            <div className='flex'>
                                <p>Jone doe</p>
                                {/* <i></i> */}
                                <span>19/05/2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <h1>Task Status</h1>
                <div>

                </div>
            </div>
        </div>
    )
}
