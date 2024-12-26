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
      <div className='md:h-screen md:bg-[url("./3.png")] md:bg-cover md:bg-center md:bg-no-repeat bg-opacity-50 bg-none'>
          <div className='bg-zinc-900 bg-opacity-75 w-full h-full'>
            <Header />
            <Hero onScrollToBlogs={scrollToBlogs} />
          </div>
        </div>
        <Blogs ref={blogRef} />
        <Footer />
      </div>
    </>
  )
}

export default Layout