import React from 'react'
import { HiExternalLink } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Cover from '../assets/Cover1.jpg'

const BlogsCard = ({ title }) => {

    const navigate = useNavigate() 

    const splitTitle = title.slice(0, -3)

    return (
        <section className='w-full' onClick={() => navigate(`/blogs/${title}`)}>
            <div className='h-full gap-5 p-2 sm:p-4 rounded-lg border-[1px] border-zinc-50/5 bg-zinc-800/50 backdrop-blur flex flex-col sm:flex-row items-start text-start justify-center sm:justify-start'>

                {/* // Image */}
                <div className='w-full object-contain overflow-hidden opacity-80 h-[40vw] sm:w-[25vw] sm:h-[12vw] rounded-lg bg-zinc-500'>
                    <img src={Cover} alt="Cover" />
                </div>

                {/* Content  */}
                <div className='flex flex-col text-white gap-2 sm:gap-4 justify-start text-start w-full items-start'>
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-2xl sm:text-4xl sm:mt-2 font-dmsans font-semibold text-start  leading-7'>
                            {splitTitle}
                        </div>
                        <div>
                            <button className='text-2xl sm:text-3xl px-2 py-2 bg-zinc-50 bg-opacity-40 rounded-lg'>
                                <HiExternalLink />
                            </button>
                        </div>
                    </div>
                    <div className='text-zinc-400 font-montserrat text-sm sm:pr-20 pr-10 pb-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis atque illo, cumque cum similique quibusdam!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsCard