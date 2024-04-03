import React from 'react'
import BlogForm from '../components/BlogForm'
import HeroResearch from '../components/HeroResearch'
import {Link} from 'react-router-dom'
import Blog from "../assets/images/course-hero.png"
import Footer from '../components/Footer'
import { UserAuth } from '../context/authContext'


function NewBlog() {
  const {user}  = UserAuth();
  return (
    <div>
      <HeroResearch />
      <div className='flex flex-col  place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex flex-col place-content-center gap-8'>
          <img src={Blog} alt="" className='lg:w-1/3 sm:w-full rounded-b-full lg:self-center' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-3xl sm:text-2xl font-bold'>Write with Us</h1>
        <p className="font-body-plex font-normal text-md">
Whether it's your opinion on the state of health in Africa, or something specific like a research you worked on, 
we have a community of readers who would love to hear from you.        </p>        
          </div>
          <div  className="flex flex-row justify-center gap-8">
           
            <Link to={`/blogs/${user?.uid}`} className="bg-white border-[1px] sm font-bold border-blue-gray-900  rounded-full w-max px-6 py-4 text-blue-gray-600 font-body-plex">
              Your Posts
            </Link>
      
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