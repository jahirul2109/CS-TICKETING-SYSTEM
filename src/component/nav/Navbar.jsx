import React from 'react'
export default function Navbar() {

    return (
        <div className=' mx-auto bg-white shadow-sm'>
            <div className="navbar flex justify-between  w-11/12 mx-auto">
                <div className="">
                    <a className="btn  text-xl">CS-Ticketing System</a>
                </div>
                <div>
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn m-1  text-white"><i className="fa-solid fa-bars"></i></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-white/20 backdrop-blur-2xl rounded-box z-1 w-52 p-2 shadow-sm">
                            <li className=''><a>Home</a></li>
                            <li className=''><a>FAQ</a></li>
                            <li className=''><a>Changelog</a></li>
                            <li className=''><a>Blog</a></li>
                            <li className=''><a>Download</a></li>
                            <li className=''><a>Contact</a></li>
                            <li className=''><a>New Project</a></li>
                        </ul>
                    </div>
                </div>
                <div className='md:flex gap-2 hidden '>
                    <button className="btn text-xs bg-white text-black ">Home</button>
                    <button className="btn text-xs bg-white text-black " >FAQ</button>
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