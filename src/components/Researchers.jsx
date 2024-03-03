import React from 'react'
import Sidebar from './Sidebar'
import {faUser, faHome, faDatabase, faGear,  faFile, faComment, faBriefcase, faBlog, faBars, faUserLarge, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import CreateMenu from './CreateMenu'
import TrendingOrgs from './TrendingOrgs'


const data = [
  {

    title: 'Home',
    icon: faHome,
    link: '/researchers'
  },
  {
    title: 'Datasets',
    icon: faDatabase,
    link: '/datasets'
  },
  {
    title: 'Papers',
    icon: faFile,
    link: '/papers'
  },
  {
    title: 'Discussions',
    icon: faComment,
    link: '/discussions'
  },
  {
    title: 'Opportunities',
    icon: faBriefcase,
    link: '/opportunities'
  },
  {
    title: 'Blog',
    icon: faBlog,
    link: '/blog'
  }
]

const userData = [
  {
    title: 'My Profile',
    icon: faUser,
    link: '/profile'
  },
  {
    title: 'My Work',
    icon: faBriefcase,
    link: '/work'
  },
  {
    title: 'Settings',
    icon: faGear,
    link: '/settings'
  },
 
  {
    title: 'SignOut',
    icon: faRightFromBracket,
    link: '/signout'
  }
]
function Researchers() {
  return (
    <div className='bg-white text-blue-gray-700 '>
    <div className=' py-4 flex flex-row justify-between'>
      <div>

     
      <Sidebar items={data} placement="left" header={faBars} size="xl"/>
      </div>
      <Search prompt="Search" />
      <div>

     
      <Sidebar items={userData} placement="right" size="2xl" header={faUserLarge} />
      </div>
     
    </div>

    <div className='flex flex-col place-content-center my-10 lg:py-10 sm:py-10'>
      <div className='w-4/5 mx-auto flex flex-col'>
        <h1 className='font-body-plex lg:text-4xl sm:text-2xl '>Welcome Back, </h1>
        <p className="font-body-plex">
          We are excited to have you back. Find your next research opportunity, connect with other researchers and explore new datasets.
        </p>
        <div  className="self-end">
        <CreateMenu />
        </div>
        
      </div>
    </div>
    <TrendingOrgs />
    </div>

    
  )
}

export default Researchers