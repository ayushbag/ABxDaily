import React, {useState, useEffect, forwardRef} from 'react'
import BlogsCard from './BlogsCard.jsx'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

const Blogs = forwardRef((prop, ref) =>  {

  const [blogsTitle, setBlogsTitle] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
      async function fetchData() {
          try {
              setLoading(true)
              const response = await axios.get(
                'https://api.github.com/repos/ayushbag/BlogsFiles/contents'
              ) 

              setBlogsTitle(response.data
                .filter(
                    file => file.type === 'file' &&
                    (file.name.endsWith('.md') || file.name.endsWith('.markdown'))
                )
                .map(file => file.name)
                )

              setLoading(false)
          } catch (error) {
              console.log(error);
              console.log("error while fetchng")
          }
      }

      fetchData()
      console.log(blogsTitle);
  }, [])


  return (
    <section ref={ref} className='max-w-6xl mx-auto px-6 sm:px-12 sm:mt-6 gap-4 flex flex-col'>
        <div>
          <div>
              <div className='sm:text-3xl lg:text-5xl lg:text-zinc-400 text-3xl text-zinc-300 font-dmsans font-bold my-10'>
                  Blogs
              </div>
          </div>
          <div className='gap-6 flex flex-col'>
              {loading ? <Skeleton />:
              blogsTitle.map((blog) => (
                <BlogsCard key={blog} title={blog} />
              ))}
              
          </div>
          <div className='mb-40 sm:mb-60'></div>
        </div>
    </section>
  )
});

export default Blogs