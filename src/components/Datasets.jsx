import React from 'react'
import HeroResearch from './HeroResearch'
import Data from '../assets/images/undraw_data_re_80ws.svg'
import { Link } from 'react-router-dom'


function Datasets() {
  return (
    <div className='bg-white'>

<HeroResearch />
<div className='flex flex-col place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex flex-col place-content-center gap-8'>
          <img src={Data} alt="" className='lg:w-1/3 sm:w-full rounded-b-full lg:self-center' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-3xl sm:text-2xl font-bold'>Datasets</h1>
        <p className="font-body-plex font-normal text-md">
        Explore the vast universe of genomic data with us. Uncover the secrets of life, one dataset at a time.        </p>
        
          </div>
          <div  className="flex flex-row justify-center gap-8">
            <Link to="/datasets/new" className="bg-blue-gray-900 rounded-full w-max px-6 py-4 text-white font-body-plex font-bold">
              New Dataset
            </Link>
            <Link to="/work" className="bg-white border-[1px] sm font-bold border-blue-gray-900  rounded-full w-max px-6 py-4 text-blue-gray-900 font-body-plex">
              Your Data
            </Link>
        
        </div>
        </div>
        
    
        
        
      </div>
    </div>
    </div>
  )
}

export default Datasets