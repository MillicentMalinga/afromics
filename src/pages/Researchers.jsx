import React from 'react'


import CreateMenu from '../components/CreateMenu'
import TrendingOrgs from '../components/TrendingOrgs'
import Woman from '../assets/images/woman-research-removebg-preview.png'

import { getAuth } from 'firebase/auth'






function Researchers() {
  const auth = getAuth();
 
const user = auth.currentUser;


  return (
    
    <div className='bg-gray-50 text-blue-gray-700 '>


    <div className='flex flex-col place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex lg:flex-row sm:flex-col gap-8'>
          <img src={Woman} alt="" className='lg:w-2/3 sm:w-full rounded-b-full' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-4xl sm:text-2xl'>Welcome Back, {user.displayName} </h1>
        <p className="font-body-plex">
          We are excited to have you back. Find your next research opportunity, connect with other researchers and explore new datasets.
        </p>
        <CreateMenu />
          </div>
          <div  className="">
        
        </div>
        </div>
        
    
        
        
      </div>
    </div>
    <TrendingOrgs />
    </div>

    
  )
}

export default Researchers