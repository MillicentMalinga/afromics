import React from 'react'
import Student  from '../assets/images/course-hero.png'
import HeroResearch from './HeroResearch'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faChartSimple, faDna, faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
  } from "@material-tailwind/react";

const data = [
    {
        title: 'Python Programming',
        icon: faPython,
        link: '/courses/python',
        description: 'Dive into Python programming with a comprehensive introduction to its powerful syntax, libraries, and applications. Perfect for beginners looking to make their mark in coding.'
    },

    {
        title: 'Data Analysis Fundamentals',
        icon: faChartLine,
        link: '/courses/data-analysis',
        description: 'Unlock the potential of data analysis. Learn to interpret, analyze, and visualize data using modern tools and techniques to make informed decisions.'
    },
    {
        title: 'Introduction to Bioinformatics',
        icon: faDna,
        link: '/courses/bioinformatics',
        description: 'Explore the intersection of biology and informatics. Gain essential skills in managing and analyzing biological data for groundbreaking research in genetics and molecular biology.'
    },
    {
        title: 'Machine Learning Essentials',
        icon: faRobot,
        link: '/courses/machine-learning',
        description: 'Step into the world of machine learning. Understand the fundamentals, algorithms, and real-world applications that empower machines to learn from data.'
    },
    {
        title: 'Data Visualization Techniques',
        icon: faChartSimple,
        link: '/courses/data-visualization',
        description: 'Bring your data to life with engaging visualizations. Learn how to communicate complex information effectively using various visualization tools and techniques.'
    },
    {
        title: 'Genomic Data Science',
        icon: faDna,
        link: '/courses/data-science',
        description: 'Embark on a journey through the world of genomics data science. Learn how to analyze and interpret genetic data to unlock the secrets of DNA.'
    },
    
]


 
export function LearnDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <button className='bg-blue-gray-800 px-4 py-2 rounded-lg uppercase text-white font-body-plex font-bold' onClick={handleOpen}>Discover Why</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="red" variant="h4">
            You should read this!
          </Typography>
          <Typography className="text-center font-normal">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function Courses() {
  return (
    <div className='bg-white text-blue-gray-800'>
          <HeroResearch className=""/>   
      <div className='lg:w-4/5 py-8 mb-20  px-10 pb-40 mx-auto flex h-[55vh] flex-col gap-4'>
        <div className='flex lg:flex-row-reverse sm:flex-col gap-8'>
          <img src={Student} alt="" className='lg:w-1/3 sm:w-full rounded-b-full' />
          <div className='lg:self-center sm:text-left lg:mx-4 sm:mx-0'>
          <h1 className='font-body-plex text-blue-gray-700 lg:text-4xl sm:text-2xl font-bold'>Learn </h1>
        <p className="font-body-plex text-sm font-light">
We have curated simple but ver useful beginner guides to data analysis, and bioinformatics       </p>

<hr className='border-blue-gray-500 my-4'/>

<LearnDialog />
          </div>
        </div>          
        
      </div>

      <div className="flex-col flex py-20 mb-10 mt-20 w-4/5 mx-auto bg-white">
        <div className="flex-col flex">
            <p className="font-bold font-body-plex text-sm">
                All Courses
            </p>
            <p className="font-light font-body-plex text-sm">
                Explore all our courses
            </p>
        </div>
        <div className='w-full mx-auto flex flex-col gap-4'>
        {
            data.map(course => (
                <Link to={course.link} className='w-full bg-blue-gray-50'>
                <div className='bg-blue-gray-50 p-4 flex flex-row gap-4 rounded-lg'>
                    <div className='bg-blue-gray-100 p-4 rounded-lg h-max'>
                        <FontAwesomeIcon icon={course.icon} className=' text-blue-gray-800 text-2xl' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-body-plex text-blue-gray-800 font-medium'>{course.title}</h1>
                        <p className='font-body-plex text-blue-gray-700 text-sm'>{course.description}</p>
                    </div>
                </div>
                </Link>
            ))
        }
      <div className="flex items-center justify-center">
  <hr className="border-blue-gray-500 flex-grow my-4 mx-2" />
  <span className="text-center font-body-plex text-blue-gray-700 italic">The End</span>
  <hr className="border-blue-gray-500 flex-grow my-4 mx-2" />
</div>

        </div>
      </div>

    </div>
  )
}

export default Courses