import React from 'react'
import { HiLockOpen } from "react-icons/hi2";

const MiniHero = () => {
  return (
    <div className='mb-6 z-10 hidden sm:flex backdrop-blur items-center gap-2 bg-cyan-400/15 text-zinc-50 px-4 text-xs py-2 rounded-full border-[1px] border-zinc-50/20'>
        <HiLockOpen className='text-sky-400'/> Unlock your Potential
    </div>
  )
}

export default MiniHero