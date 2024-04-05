import React from 'react'
import Data from '../assets/images/undraw_data_re_80ws.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the import path as necessary

import DataCard from '../components/DataCard';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';





function Datasets() {
  const [datasets, setDatasets] = useState([]);



  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const datasetsSnapshot = await getDocs(query(collection(db, "Datasets"), orderBy("timeStamp", "desc")));
        const datasetsArray = [];
        datasetsSnapshot.forEach(doc => datasetsArray.push({ id: doc.id, ...doc.data() }));
  
     
  
        setDatasets(datasetsArray);
      
      } catch (error) {
        console.error("Error fetching datasets:", error);
      }
    };
  
    fetchDatasets();
  }, []);
  

  // Filter datasets based on the search query
  const filteredDatasets = datasets.filter(dataset => 
    dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.long_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.category.toLowerCase().includes(searchQuery.toLowerCase()) // Since tags is a single category
  );

  


  return (
    <div className='bg-gray-200 text-blue-gray-800 mt-0'>


<div className='flex flex-col  place-content-center my-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex flex-col place-content-center gap-8'>
          <img src={Data} alt="" className='lg:w-1/3 sm:w-full rounded-b-full lg:self-center' />
          <div className='self-center mx-4'>
          <h1 className='font-body-plex lg:text-3xl sm:text-2xl font-bold'>Datasets</h1>
        <p className="font-body-plex font-normal text-md">
        Explore the vast universe of genomic data with us. Uncover the secrets of life, one dataset at a time.        </p>
        
          </div>
          <div  className="flex flex-row justify-center gap-8">
            <Link to="/datasets/new" className=" rounded-full w-max px-6 py-4 text-teal-500 font-body-plex font-bold">
              New Dataset <FontAwesomeIcon icon={faPen} className="ml-2" />
            </Link>
         
      
        </div>
        </div>
        
    
        
        
      </div>
    </div>
   
    <div className='mx-auto w-4/5 '>
     
      <input
        type="text"
        placeholder="Search datasets..." 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} className='w-full px-4 py-2 rounded-full border-[1px] border-blue-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 bg-white font-body-plex font-normal text-md text-blue-gray-800'
      />
    {filteredDatasets.length > 0 ? (
  <div className='flex flex-col w-full gap-8 mx-auto'>
    {filteredDatasets.map(dataset => (
      <DataCard
        key={dataset.id} // Assuming each dataset has a unique 'id' property
        title={dataset.title}
        short_description={dataset.short_description}
        long_description={dataset.description}
        id={dataset.id}

        file={dataset.file}
        country={dataset.country}
        user={dataset.author}  category={dataset.category}// Fallback to 'other' if no match
      />
    ))}
  </div>
) : (
  <p>No datasets found.</p>
)}

    </div>
    <div className='bg-blue-gray-50 mt-10'>
    <Footer />
    </div>
    </div>
  )
}

export default Datasets