import React from 'react'
import Secure from '../assets/images/secure-data.png'
import Collaboration from '../assets/images/collaboration.jpg'
import UserMana from '../assets/images/collab.png'
import CustomCard from './CustomCard';


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
    <div className='bg-white py-10 '>
      <p className='font-body-plex text-blue-gray-600 text-xs font-semibold uppercase'>
      What We Offer
      </p>
      <h1 className='font-body-plex text-2xl font-medium text-blue-gray-800 mb-20'>
      Our Services
      </h1>
      <div className="grid lg:mx-auto my-10 sm:mx-auto w-4/5 gap-8 lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-1">

{    services.map((service, index) => (
      <CustomCard key={index} title={service.title} description={service.description} image={service.image} /> 
    ))
}


         
      </div>

      
    </div>
  )
}

export default Organisations