import React from 'react'
import { PiXLogo } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <section className='max-w-7xl z-20 p-6'>
        <div className='border-b-[0.1rem] border-zinc-700 w-full' />
        <div className='text-zinc-500 font-medium text-xs pt-2 sm:pt-4 text-center mb-4'>
            <p className='max-w-40 sm:max-w-full mx-auto'> Copyright © 2024 ABxDaily. All Rights Reserved. </p>
        </div>
        <div className='text-zinc-500 text-2xl text-center items-center justify-center flex gap-3'>
            <div>
                <a target='_blank' href="https://x.com/ayushbag99"><PiXLogo /></a>
            </div>
            <div>
                <a target='_blank' href="https://github.com/ayushbag"><FiGithub /></a>
            </div>
            <div>
                <a href="#"><BsStackOverflow /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer