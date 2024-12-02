import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css';

const BlogsPage = () => {

  const [blogContent, setBlogContent] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const { title } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://raw.githubusercontent.com/ayushbag/BlogsFiles/main/${title}`
        )
        setBlogContent(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error);
        console.log("Error While Fetching Data");
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  

  return (
    <section className='w-full h-full bg-zinc-950'>
      <div className='markdown-body max-w-4xl mx-auto p-4 sm:p-10 lg:p-12 bg-zinc-950'>
        <ReactMarkdown>
          {blogContent}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default BlogsPage
