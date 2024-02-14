import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button

} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Secure from '../assets/images/secure-data.png'
import Collaboration from '../assets/images/collaboration.jpg'
import UserMana from '../assets/images/collab.png'

function Organisations() {
  return (
    <div className='bg-white py-10 '>
      <p className='font-body-plex text-blue-gray-600 text-md font-medium'>
      What We Offer to Research Organisations
      </p>
      <h1 className='font-body-plex text-2xl font-medium text-blue-gray-800 mb-20'>
      Our Services
      </h1>
      <div className="grid lg:mx-16 my-10 sm:mx-4 gap-8 lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-1">

    <Card className="mt-6 w-80">
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

    <Card className="mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={Collaboration}
          alt="Collaboration"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-body-plex text-left">
          Collaboration
        </Typography>
        <Typography className='font-body-plex text-left'>
          Collaborate with other organisations and researchers to share data, resources and expertise to accelerate genomics research in Africa.
        </Typography>
      </CardBody>
     
    </Card>
    <Card className="mt-6 w-80">
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
<div className="bg-blue-gray-50 py-10">
<p className='font-body-plex text-blue-gray-600 text-2xl font-medium'>
      Pricing
      </p>

<div className="lg:mx-16 my-8 py-10 grid lg:grid-cols-3 sm:grid-cols-1">
<Card  variant="gradient" className="w-full max-w-[20rem] p-8 bg-blue-gray-500">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase font-body-plex"
        >
          FREE TIER
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl font-logo">$</span>0{" "}
          <span className="self-end text-4xl font-logo">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">5 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">5GB Storage Buckets</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">720 hours of Compute</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">Free Visualisations</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">Limited Sales Support</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 font-body-plex"
          ripple={false}
          fullWidth={true}
        >
          Getting Started
        </Button>
      </CardFooter>
    </Card>

    <Card  variant="gradient" className="w-full max-w-[20rem] p-8 bg-blue-gray-700">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase font-body-plex"
        >
          PREMIUM
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl font-logo"> <span className='text-sm font-body-plex'>from</span>
            $</span>50{" "}
          <span className="self-end text-4xl font-logo">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">20 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">1TB Storage Buckets</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">Unlimited hours of Compute</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">Public Data Archive</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-900">Sales Support</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 font-body-plex"
          ripple={false}
          fullWidth={true}
        >
          Getting Started
        </Button>
      </CardFooter>
    </Card>
  
    <Card  variant="gradient" className="w-full max-w-[20rem] p-8 bg-blue-gray-900">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase font-body-plex"
        >
GOLD        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl font-logo"> <span className='text-sm font-body-plex'>from</span>
            $</span>150{" "}
          <span className="self-end text-4xl font-logo">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-50">Multiple Organisations</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-50">Unlimited Storage</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-50">Private Archives</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-50">Sales of Genomic Insights</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 text-black p-1">
            <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <Typography className="font-normal font-body-plex text-blue-gray-50">Sales Support</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 font-body-plex"
          ripple={false}
          fullWidth={true}
        >
          Getting Started
        </Button>
      </CardFooter>
    </Card>
</div>
</div>
      
    </div>
  )
}

export default Organisations