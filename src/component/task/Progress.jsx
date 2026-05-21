import React from 'react'

export default function InProgress({ selected, setSelected, addResolve, removeSelected }) {
    const removeProgress = (data) => {
        const remaningData = selected.filter(card => card.id !== data.id);
        setSelected(remaningData)
    }
    const handelResolve = (data) => {
        addResolve(data)
    }
    return (
        <div className=''>
            <div>
                <h1 className='text-xl font-bold'>Task Status</h1>
                {/* Task Status Card */}
                {selected.map(task => <div>
                    <div className='bg-white rounded-md mb-2 shadow-md p-4'>
                        <h1 className='font-semibold'>{task.title}</h1>
                        <button
                            onClick={() => {
                                removeProgress(task)
                                handelResolve(task)
                            }}
                            className='btn bg-green-600 border-none w-full'>Complete</button>
                    </div>
                </div>)}
            </div>
            <div>
                <h1 className='text-xl font-bold'>Resovled Task</h1>
                {removeSelected.map(resolve => <div>
                    <div className='bg-white rounded-md mb-2 shadow-md p-4'>
                        <h1 className='font-semibold'>{resolve.title}</h1>
                        <button
                            disabled={true}
                            className='btn bg-green-600 border-none w-full'>Resolve</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
