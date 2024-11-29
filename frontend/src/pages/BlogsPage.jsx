import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogsPage = () => {

  const { blogs, loading, error } = useContext(BlogContext)

  const loadingText = <div className='h-[100vh] w-full mx-auto flex items-center justify-center'>Loading...</div>

  return (
    <div className='markdown-body p-4 sm:p-10 lg:p-12 bg-zinc-950'>
      {error && <p>Error!</p>}
      {loading ? loadingText
      :
      <ReactMarkdown>
        {blogs[0]}
      </ReactMarkdown>
      }
      {/* {blogs.map((item) => (
        <ReactMarkdown>{item}</ReactMarkdown>
      ))} */}
    </div>
  )
}

export default BlogsPage
