import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <section className='md:hidden bg-zinc-900/90 backdrop-blur border-[1px] shadow-2xl shadow-zinc-950 border-zinc-600 w-32 absolute top-[9vh] right-7 h-25 rounded-lg'>
            <div className='flex flex-col text-center text-normal text-zinc-100 text-sm font-medium p-3 gap-2 '>
                <Link className='hover:text-zinc-300' to='#'>Home</Link>
                <div className='border-b-[1px] border-zinc-800'></div>
                <Link className='hover:text-zinc-300' to='#'>About me</Link>
                <div className='border-b-[1px] border-zinc-800'></div>
                <Link className='hover:text-zinc-300' to='#'>Github</Link>
                <div className='border-b-[1px] border-zinc-800'></div>
                <Link className='hover:text-zinc-300' to='#'>𝕏</Link>
            </div>
        </section>
    )
}

export default Sidebar