import React, { useState } from 'react'
import trace from '../assets/trace.svg'
import { HiBars3BottomRight } from "react-icons/hi2";
import Sidebar from './Sidebar';

const Header = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false)

    return (
        <section>
            <div className='max-w-7xl z-20 w-full sticky mx-auto flex justify-between items-center px-6 md:px-12 py-5 bg-transparent text-white'>
                <div className='text-white flex'>
                    <img className='text-white -translate-x-1' src={trace} width={40} alt="AB" />
                    <div className='flex pt-2 -translate-x-2 font-medium tracking-normal font-sans text-lg text-zinc-50/40'>xDaily</div>
                </div>
                <div className='md:flex gap-20 hidden'>
                    <div className='flex items-center gap-2 text-sm pt-1 font-sans'>
                    </div>
                </div>
                <div className='md:hidden text-3xl' onClick={() => setToggleSidebar(!toggleSidebar)}>
                    <HiBars3BottomRight />
                </div>
            </div>
            {/* { toggleSidebar && <Sidebar />  } */}
        </section>
    )
}

export default Header