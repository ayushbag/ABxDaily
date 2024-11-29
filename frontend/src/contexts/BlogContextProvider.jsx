import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogContext } from './BlogContext'

const BlogProvider = ({children}) => {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://api.github.com/repos/ayushbag/BlogsFiles/contents"
        );

        console.log(response);  

        const markdownUrls = response.data
          .filter(file => 
              file.type === 'file' &&
              (file.name.endsWith('.md') || file.name.endsWith('.markdown'))
            )
          .map(file => file.download_url);

        // console.log(markdownUrls);

        const blogsContent = await Promise.all(
          markdownUrls.map(async (url) => {
            const response = await axios.get(url)
            return response.data;
          })
        )

        setBlogs(blogsContent)
        
        setLoading(false)
      } catch (error) {
        setError("Failed to fetch the Blogs")
        console.log(error);
      }
    }

    fetchData()
  }, [])
  

  return (
    <BlogContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider