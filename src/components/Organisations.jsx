import React from 'react'
import Secure from '../assets/images/secure-data.png'
import Collaboration from '../assets/images/collaboration.jpg'
import UserMana from '../assets/images/collab.png'
import CustomCard from './CustomCard';
import Collab from '../assets/images/collab.png';
import CustomNav  from './CustomNav';


// List of services offered to organisations

const services = [
  {
    title: "Secure Data Management",
    description: "Afromics offers organisations secure data management solutions to ensure that sensitive data is protected and only accessible to authorised personnel.",
    image: Secure
  },
  {
    title: "Collaboration",
    description: "Collaborate with other organisations and researchers to share data, resources and expertise to accelerate genomics research in Africa.",
    image: Collaboration
  },
  {
    title: "User Management",
    description: "Manage who has access to your data and resources with our user management solutions.",
    image: UserMana
  }

]


function Organisations() {
  return (
    <div className="bg-blue-gray-100">
      <CustomNav buttonText="Contact Sales"/>
      <div className='flex flex-col place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex lg:flex-row sm:flex-col gap-8'>
          <img src={Collab} alt="" className='lg:w-2/3 sm:w-full rounded-b-full rounded-t-full' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-4xl sm:text-2xl'> </h1>
        <p className="font-body-plex">
          We are excited to have you back. Find your next research opportunity, connect with other researchers and explore new datasets.
        </p>
     
          </div>
          <div  className="">
        
        </div>
        </div>
        
    
        
        
      </div>
    </div>

    </div>
  )
}

export default Organisations