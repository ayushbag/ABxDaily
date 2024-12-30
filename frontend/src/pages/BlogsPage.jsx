import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css';
import LoadingComponent from '../components/Loading'

const BlogsPage = () => {

  const [blogContent, setBlogContent] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const { title } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/repos/ayushbag/BlogsFiles/contents/${title}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        )
        const content = atob(response.data.content); // ATOB is used to decode base64 format
        setBlogContent(content);
        setLoading(false);
      } catch (error) {
        console.error("Error While Fetching Data:", error);
        setLoading(false);
      }
    };
    

    fetchData()
  }, [])
  

  return (
    <section className='w-full h-full bg-zinc-950'>
      {loading ? <LoadingComponent/> :
      <div className='markdown-body text-white max-w-4xl mx-auto p-4 sm:p-10 lg:p-12 bg-zinc-950'>
        <ReactMarkdown>
          {blogContent}
        </ReactMarkdown>
      </div>
      }
    </section>
  )
}

export default BlogsPage
