import React from 'react'
import Secure from '../assets/images/secure-data.png'
import Collaboration from '../assets/images/collaboration.jpg'
import UserMana from '../assets/images/collab.png'
import CustomCard from './CustomCard';
import Collab from '../assets/images/collab.png';
import CustomNav  from './CustomNav';
import { PricingCard } from './PricingCard';
import Footer from './Footer';


// List of services offered to organisations

const services = [
  {
    title: 'Standard', 
    team: '10',
    dataSize: '10',
    jobPosts: '20',
    Archive: '10',
  },
  {
    title: 'Premium', 
    team: '20',
    dataSize: '20',
    jobPosts: '40',
    Archive: '20',
  },
  {
    title: 'Enterprise', 
    team: '30',
    dataSize: '30',
    jobPosts: '60',
    Archive: '30',
  }

]


function Organisations() {
  return (
    <div className="bg-blue-gray-50">
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
         
        </div>
        
    
        
        
      </div>
    </div>
<div className="bg-white shadow-2xl my-10 py-20 px-20 w-4/5 mx-auto grid gap-4 lg:grid-cols-3 sm:grid-cols-1">

 {
    services.map((service, index) => (
      <PricingCard {...service} key={index}/>
    ))
 }
</div>
<div className='bg-blue-gray-50 mt-10'>
    <Footer />
    </div>
    </div>
  )
}

export default Organisations