import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import MiniHero from './MiniHero';


const Hero = ({ onScrollToBlogs }) => {

  return (
    <section className='max-w-7xl mx-auto mt-12 md:mt-28 px-6 flex flex-col items-start sm:items-center '>
      <MiniHero />
      <div className='flex flex-col text-center text-white gap-6'>
        <h1 className='sm:text-6xl lg:text-7xl text-4xl font-bold font-dmsans tracking-normal sm:text-center text-start flex-wrap'>
          Fresh Perspectives, <br />
          <span className='bg-gradient-to-r from-lime-300 via-emerald-500 to-cyan-400 bg-clip-text
           text-transparent'>
            Delivered Daily
          </span>
        </h1>
        <p className='md:text-base sm:text-center text-start text-slate-400 font-montserrat'>
          Welcome to ABxDaily - sharing articles, insights and more.
        </p>
      </div>
      <button onClick={onScrollToBlogs} className='flex z-10 bg-gradient-to-br text-zinc-900 shadow-xl font-medium from-lime-500
       to-sky-400 mt-4 rounded-lg text-center gap-2 items-center text-sm px-6 py-2 sm:text-base sm:mt-12 lg:mt-16 lg:text-lg 
       hover:text-zinc-800 hover:shadow-lg ease-in-out duration-100 transition-colors font-sans
       '>
        Start Reading <HiMiniArrowLongRight />
      </button>
      <div className='border-b-[0.1rem] border-zinc-700 w-full sm:mt-20 mt-10 z-20' />
    </section>
  )
}

export default Hero