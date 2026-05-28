import React from 'react'

export default function Card({ addProgress, cards, setCards }) {
    // removeCards 
    const removehandel = (data) => {
        const remaing = cards.filter(card => card.id !== data.id);
        setCards(remaing)
    }
    const handelSelect = (data) => {
        addProgress(data)
    }
    return (
        <div className='md:col-span-4'>
            <h1 className='text-xl mx-3 font-bold'>Coustomers Ticket</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                {cards.map(data => <div 
                key={data?.id}
                onClick={() => {
                    removehandel(data)
                    handelSelect(data)
                }} className='p-2 rounded-lg shadow-md bg-white'>
                    <div className='flex justify-between text-xl font-semibold text-gray-900'>
                        <h1 className=''>{data.title}</h1>
                        <div className={`btn border-none outline-none  rounded-full ${data.status == "Open" ? "bg-green-300 text-green-500" : "bg-orange-300 text-orange-500"}`}> <div className={`w-3 h-3 rounded-full ${data.status == "Open" ? "bg-green-400" : "bg-orange-400"}`}></div>{data.status}</div>
                    </div>
                    <p className='text-gray-800'>{data.title}</p>
                    <div className='flex justify-between text-gray-800'>
                        <div className='flex justify-between gap-2'>
                            <h1 className='font-semibold'>{data.id}</h1>
                            <h1 className={data.priority == "HIGH PRIORITY" ? "text-red-500 font-semibold" : data.priority == "MEDIUM PRIORITY" ? "text-orange-400 font-semibold" : "text-green-500 font-semibold"}>{data.priority}</h1>
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
