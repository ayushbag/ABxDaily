import React, { useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Layout = () => {

  const blogRef = useRef(null)

  const scrollToBlogs = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
        <div className='bg-zinc-900 overflow-x-hidden'>
            <Header />            
            <Hero onScrollToBlogs={scrollToBlogs} />
            <Blogs ref={blogRef} />
            <Footer />
        </div>
    </>
  )
}

export default Layout