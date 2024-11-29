import React, {forwardRef} from 'react'
import BlogsCard from './BlogsCard'

const Blogs = forwardRef((prop, ref) =>  {
  return (
    <section ref={ref} className='max-w-6xl mx-auto px-6 sm:px-12 sm:mt-6 gap-4 flex flex-col'>
        <div>
          <div>
              <div className='sm:text-3xl lg:text-5xl lg:text-zinc-400 text-3xl text-zinc-300 font-dmsans font-bold my-10'>
                  Blogs
              </div>
          </div>
          <div className='gap-6 flex flex-col'>
              <BlogsCard />
              <BlogsCard />
          </div>
          <div className='mb-40 sm:mb-60'></div>
        </div>
    </section>
  )
});

export default Blogs