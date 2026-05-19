import React from 'react'

export default function Navbar() {
    return (
        <div className=' mx-auto shadow-sm'>
            <div className="navbar flex justify-between  w-10/12 mx-auto">
                <div className="">
                    <a className="btn  text-xl">CS-Ticketing System</a>
                </div>
            <div className='flex gap-2 '>
                <button className="btn text-xs bg-white text-black ">Home</button>
                <button className="btn text-xs bg-white text-black ">FAQ</button>
                <button className="btn text-xs bg-white text-black ">Changelog</button>
                <button className="btn text-xs bg-white text-black ">Blog</button>
                <button className="btn text-xs bg-white text-black ">Download</button>
                <button className="btn text-xs bg-white text-black ">Contact</button>
                <button className="btn text-xs bg-white text-black btn-success">+ New Project</button>
            </div>
            </div>
        </div>
    )
}
