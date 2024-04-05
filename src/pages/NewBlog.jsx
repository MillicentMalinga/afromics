import React from 'react'
import BlogForm from '../components/BlogForm'


import Blog from "../assets/images/course-hero.png"
import Footer from '../components/Footer'




function NewBlog() {

  return (
    <div className='bg-gray-50'>
    
      <div className='flex flex-col  place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex flex-col place-content-center gap-8'>
          <img src={Blog} alt="" className='lg:w-1/3 sm:w-full rounded-b-full lg:self-center' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-3xl sm:text-2xl font-bold text-blue-gray-600'>Write with Us</h1>
        <p className="font-body-plex font-normal text-md text-blue-gray-500">
Whether it's your opinion on the state of health in Africa, or something specific like a research you worked on, 
we have a community of readers who would love to hear from you.        </p>        
          </div>
          <div  className="flex flex-row justify-center gap-8">
           
         
      
        </div>
        </div>
        
    
        
        
      </div>
    </div>
        <BlogForm />

        <Footer />
    </div>
  )
}

export default NewBlog