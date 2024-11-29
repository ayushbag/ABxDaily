import React, { useContext, useState, ReactMarkdown } from 'react'
import { HiExternalLink } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import { BlogContext } from '../contexts/BlogContext';


const trimDesc = (text, length) => {
    if (!text) return "";
    let words = text.split(' ');
    return words.length > length
        ? words.splice(0, length).join(' ') + '...'
        : text;
}

const BlogsCard = () => {

    const { blogs, loading, error } = useContext(BlogContext)
    

    return (
            <section className='w-full'>
                <div className='h-full gap-5 p-2 sm:p-4 rounded-lg border-[1px] border-zinc-50/5 bg-zinc-800/50 backdrop-blur flex flex-col sm:flex-row items-start text-start justify-center sm:justify-start'>
                    
                    {/* // Image */}
                    <div className='w-full h-[40vw] sm:w-[25vw] sm:h-[12vw] rounded-lg bg-zinc-500'>
                        img
                    </div>

                    {/* Content  */}
                    <div className='flex flex-col text-white gap-2 sm:gap-4 justify-start text-start w-full items-start'>
                        <div className='flex justify-between w-full items-center'>
                            <div className='text-2xl sm:text-3xl font-dmsans font-semibold text-start  leading-7'>
                                {trimDesc('Javascript v8 engine in detailed', 4)}
                            </div>
                            <div>
                                <button className='text-2xl sm:text-3xl px-2 py-2 bg-zinc-50 bg-opacity-40 rounded-lg'>
                                    <HiExternalLink />
                                </button>
                            </div>
                        </div>
                        <div className='text-zinc-400 font-montserrat text-sm'>
                            {trimDesc('hllo', 7)} <span className='text-zinc-300/90'>Read more</span>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default BlogsCard