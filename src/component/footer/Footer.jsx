import React from 'react'

export default function Footer() {
    return (
        <div className='bg-neutral text-neutral-content mt-2 py-10'>
            <footer className="footer grid grid-cols-1 md:grid-cols-5 w-11/12 mx-auto my-10  ">
                <nav>
                    <h6 className="space-x-0.5 uppercase text-xl font-semibold ">Cs Ticketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et quas perspiciatis ut nobis sequi reprehenderit recusandae neque, numquam cum optio eaque blanditiis, quibusdam ex quaerat vel ab consequuntur excepturi!</p>
                </nav>
                <nav>
                    <h6 className=" font-semibold text-white">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className=" font-semibold text-white">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className=" font-semibold text-white">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className=" text-xl font-semibold text-white">Social links</h6>
                    <a className="link link-hover flex justify-center items-center"> <img src="https://static.vecteezy.com/system/resources/thumbnails/065/386/537/small/facebook-circle-logo-icon-fb-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" className='w-8 h-8  rounded-full' alt="" /> Terms of use</a>
                    <a className="link link-hover flex justify-center items-center"> <img src="https://static.vecteezy.com/system/resources/thumbnails/065/386/537/small/facebook-circle-logo-icon-fb-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" className='w-8 h-8  rounded-full' alt="" /> Privacy policy</a>
                    <a className="link link-hover flex justify-center items-center"> <img src="https://static.vecteezy.com/system/resources/thumbnails/065/386/537/small/facebook-circle-logo-icon-fb-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" className='w-8 h-8  rounded-full' alt="" /> Cookie policy</a>
                </nav>
            </footer>
            <div className='text-center my-3'><p>@2026 CS - Ticket System. All rights resrved</p></div>
        </div>
    )
}