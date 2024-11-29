import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import trace from '../assets/trace.svg'
import { HiBars3BottomRight } from "react-icons/hi2";
import Sidebar from './Sidebar';

const Header = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false)

    return (
        <section>
            <div className='max-w-7xl z-20 sticky mx-auto flex justify-between items-center px-6 md:px-12 py-5 bg-transparent text-white'>
                <div className='text-white flex'>
                    <img className='text-white -translate-x-1' src={trace} width={40} alt="AB" />
                    <div className='flex pt-2 -translate-x-2 font-medium tracking-normal font-sans text-lg text-zinc-50/40'>xDaily</div>
                </div>
                <div className='md:flex gap-20 hidden'>
                    <div className='flex items-center gap-2 text-sm pt-1 font-sans'>
                        <Link className='hover:bg-zinc-50/10 px-4 py-2 rounded-lg' to='/'>Home</Link> 
                        <Link className='hover:bg-zinc-50/10 px-4 py-2 rounded-lg' to='/about'>About me</Link> 
                        {/* <Link className='px-4 py-2 hover:border-b-2 rounded-sm border-lime-300' to='/github'>Github</Link>  */}
                        {/* <Link className='px-4 py-2 hover:border-b-2 rounded-sm border-lime-300' to='/Twitter'>𝕏</Link> */}
                    </div>
                    {/* <div className='hidden text-sm font-semibold gap-4 lg:flex'>
                        <button className='bg-lime-500 py-2 px-4 rounded-lg hover:bg-lime-600'>
                            <h3 className='leading-none'>Login</h3>
                        </button>
                        <button className='border-[0.1rem] bg-white/10 hover:text-zinc-300 px-4 py-2 leading-none rounded-lg border-zinc-200'>
                            Get Started
                        </button>
                    </div> */}
                </div>
                <div className='md:hidden text-3xl' onClick={() => setToggleSidebar(!toggleSidebar)}>
                    <HiBars3BottomRight />
                </div>
            </div>
            { toggleSidebar && <Sidebar />  }
            {/* <div className='border-b-[0.1rem] border-zinc-600' /> */}
        </section>
    )
}

export default Header