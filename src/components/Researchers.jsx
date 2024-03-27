import React from 'react'
import Sidebar from './Sidebar'
import {faUser, faHome, faDatabase, faGear,  faFile, faComment, faBriefcase, faBlog, faBars, faUserLarge, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import CreateMenu from './CreateMenu'
import TrendingOrgs from './TrendingOrgs'
import Woman from '../assets/images/woman-research-removebg-preview.png'
import HeroResearch from './HeroResearch'
import { UserAuth } from '../context/authContext'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'
import { useState, useEffect } from 'react'




function Researchers() {
  const {user} = UserAuth();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {


      if (user) {
        
        const userDocRef = doc(db, 'Users', user.uid); // user.uid is the ID of the logged-in user
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setFirstName(userDoc.data().firstName); // Extracting the firstName field
        } else {
          setFirstName(''); // If the user document doesn't exist, set firstName to an empty string
        }
      }
    };

    fetchUserData();
  }, [user]);



  return (
    
    <div className='bg-white text-blue-gray-700 '>
     
    <HeroResearch />

    <div className='flex flex-col place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex lg:flex-row sm:flex-col gap-8'>
          <img src={Woman} alt="" className='lg:w-2/3 sm:w-full rounded-b-full' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-4xl sm:text-2xl'>Welcome Back, {firstName} </h1>
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