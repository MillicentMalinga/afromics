import React from 'react'
import CreateMenu from '../components/CreateMenu'
import TrendingOrgs from '../components/TrendingOrgs'
import Woman from '../assets/images/woman-research-removebg-preview.png'
import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { db } from '../firebaseConfig'
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore';
import JobCard from '../components/JobCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'






function Researchers() {
  const auth = getAuth();
  const [projects, setProjects] = useState([]);
 
const user = auth.currentUser;

useEffect(() => {
  async function fetchProjects() {
      const blogPostsCollection = collection(db, 'Projects');
      const q = query(blogPostsCollection, orderBy("deadline", "desc"), limit(3)); // Order by createdAt
      const projectsSnapshot = await getDocs(q);
      const projects = projectsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

      // Fetch author's displayName for each post
     
      setProjects(projects);
  }

  fetchProjects().catch(console.error);
}, []);


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
    <div className='flex flex-col py-10 bg-blue-gray-50 place-content-center'>
    <div className="font-body-plex text-left text-blue-gray-900 w-4/5 mx-auto">
        <p className="text-sm font-bold">
            Trending Projects
        </p>
        <p className="font-light">
            Check out these latest projects that other scientists are collaborating on. 
        </p>
        </div>  
        <div className="flex flex-col my-10 gap-8">
        {projects.map(project => (
                <JobCard key={project.id} {...project} />
        ))
        }

          <div className="mx-auto w-4/5 text-right mt-8 ">
                <Link to="/projects" className=" text-blue-gray-900 font-semibold font-body-plex text-md w-max  py-4 px-6 place-self-end">
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
                </div>
           
</div>
   </div>    </div>

    
  )
}

export default Researchers