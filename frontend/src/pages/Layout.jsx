import React, { useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import mesh from '../assets/mesh.jpg'

const Layout = () => {

  const blogRef = useRef(null)

  const scrollToBlogs = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
        <div className='bg-zinc-900 w-full'>
            <Header />            
            <Hero onScrollToBlogs={scrollToBlogs} />
            <Blogs ref={blogRef} />
            <Footer />
        </div>
    </>
  )
}

export default Layout