import React, { useEffect, useState } from 'react';
import {db} from '../firebaseConfig';
import {collection, getDocs, query, orderBy} from 'firebase/firestore';
import JobCard from '../components/JobCard';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Add this line

    useEffect(() => {
        async function fetchProjects() {
            const blogPostsCollection = collection(db, 'Projects');
            const q = query(blogPostsCollection, orderBy("deadline", "desc")); // Order by createdAt
            const projectsSnapshot = await getDocs(q);
            const projects = projectsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
            // Fetch author's displayName for each post
           
            setProjects(projects);
        }
    
        fetchProjects().catch(console.error);
    }, []);

    // Filter projects based on search term
const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.long_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.delivery.toLowerCase().includes(searchTerm.toLowerCase()) 

);


    return (
        <div className='flex flex-col gap-10 mt-10 bg-gray-50'>
            
            <div className='flex flex-col place-content-center gap-2 '>
                <Link to="/projects/new" className="border-[1px] font-body-plex text-center text-xs self-center font-bold text-teal-900 w-max rounded-full border-blue-gray-200 p-2">
                    Don't see a project that interests you? Share your own project 
                    <FontAwesomeIcon  icon={faArrowRight} className='text-md ml-2 ' />
                </Link>

            <p className='font-body-plex text-3xl font-bold text-blue-gray-600 text-center'>Our Available Research Projects</p>
            <p className='font-body-plex text-sm text-blue-gray-500 text-center'>Explore projects shared by researchers and scientists</p>
            </div>
            <div className='my-10 flex flex-col justify-around gap-10 '>           
            {projects.map(project => (
                <JobCard key={project.id} {...project} />
                   
                
            ))}
        </div>
        <Footer />
        </div>
    );
};

export default Projects;

