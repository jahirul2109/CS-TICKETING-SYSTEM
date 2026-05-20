import React, { use } from 'react'
import Card from './Card'

export default function Cardcointainer({promiseData}) {
    const coustomerData = use (promiseData);
    console.log(coustomerData)
    return (
        <div className='grid grid-cols-5 w-11/12 mx-auto mt-20'>
            <Card coustomerData = {coustomerData}></Card>
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
