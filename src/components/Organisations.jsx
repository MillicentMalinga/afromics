import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,

  Typography,

} from "@material-tailwind/react";

import Secure from '../assets/images/secure-data.png'
import Collaboration from '../assets/images/collaboration.jpg'
import UserMana from '../assets/images/collab.png'

function Organisations() {
  return (
    <div className='bg-white py-10 '>
      <p className='font-body-plex text-blue-gray-600 text-md font-medium'>
        Our Products
      </p>
      <h1 className='font-body-plex text-2xl font-medium text-blue-gray-800 mb-20'>
      What We Offer to Research Organisations
      </h1>
      <div className="grid lg:mx-16 sm:mx-4 sm:gap-8 lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-1">

    <Card className="mt-6 lg:w-96 sm:w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={Secure}
          alt="Security"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="text-left mb-2 font-body-plex">
          Secure Data Management
        </Typography>
        <Typography className='font-body-plex text-left'>
          Afromics offers organisations secure data management solutions to ensure that sensitive data is protected and only accessible to authorised personnel.
          
        </Typography>
      </CardBody>
     
    </Card>

    <Card className="mt-6 lg:w-96 sm:w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={Collaboration}
          alt="Collaboration"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-body-plex">
          Collaboration
        </Typography>
        <Typography className='font-body-plex text-left'>
          Collaborate with other organisations and researchers to share data, resources and expertise to accelerate genomics research in Africa.
        </Typography>
      </CardBody>
     
    </Card>
    <Card className="mt-6 lg:w-96 sm:w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={UserMana}
          alt="User Management"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-body-plex text-left">
          User Management
        </Typography>
        <Typography className='font-body-plex text-left'>
          Manage who has access to your data and resources with our user management solutions.
        </Typography>
      </CardBody>
      
    </Card>
         
      </div>
      
    </div>
  )
}

export default Organisations