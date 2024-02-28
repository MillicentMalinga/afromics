import React from 'react'
import { JobCard } from '../components/JobCard'
import { DashBar } from '../components/DashBar'
import  Woman  from '../assets/images/woman-scientist.png'
import { Link } from 'react-router-dom'
import { DashCarousel } from './DashCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faLocationPin, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { DashTabs } from '../components/DashTabs'


function Dashboard() {
  return (
    <div className='bg-white '>
<DashBar usrName="Millicent" />
<form action="">
<div className="flex lg:flex-row sm:flex-col w-3/5 self-center border-[1px] border-blue-gray-800 mx-auto my-20 shadow-lg rounded-lg">
  <div className="lg:w-1/2  sm:w-full flex sm:border-b-[1px] sm:border-b-blue-gray-500 flex-row px-4 gap-2 self-center  ">
  <FontAwesomeIcon icon={faMagnifyingGlass}  className='text-blue-gray-600 self-center'/>
  <input type='text' className='w-full font-body-plex py-4 lg:border-r-[1px] border-blue-gray-700' placeholder='Search for projects, opportunities, datasets'/> </div>
  <div className="lg:w-1/2 sm:w-full sm:border-b-[1px] sm:border-b-blue-gray-500 flex gap-2 flex-row px-4 self-center  ">
  <FontAwesomeIcon icon={faLocationDot}  className='text-blue-gray-600 self-center'/>
  <input type='text' className=' w-full font-body-plex py-4' placeholder='City, or Country'/>
  <input type="submit" value="Search" className='bg-blue-gray-700 px-6 py-0 h-8 self-center rounded-md font-body-plex text-white' />
 </div>
</div>

</form>

<div className="flex flex-row gap-4 w-3/5 self-center mx-auto">
  <DashTabs />
</div>

    </div>
  )
}

export default Dashboard