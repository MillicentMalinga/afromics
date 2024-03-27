import React from 'react'
import HeroResearch from './HeroResearch'
import Data from '../assets/images/undraw_data_re_80ws.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, getDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the import path as necessary
import IconCard from './IconCard';
import DataCard from './DataCard';






function Datasets() {
  const [datasets, setDatasets] = useState([]);
  const [userNames, setUserNames] = useState({});


  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const datasetsSnapshot = await getDocs(query(collection(db, "Datasets"), orderBy("timeStamp", "desc")));
        const datasetsArray = [];
        const userNamesMap = {};
  
        for (const document of datasetsSnapshot.docs) {
          const dataset = { id: document.id, ...document.data() };
          datasetsArray.push(dataset);
  
          // Check if the user's name is already fetched to avoid unnecessary queries
          if (!userNamesMap[dataset.user]) {
            const userSnap = await getDoc(doc(db, "Users", dataset.user));
            if (userSnap.exists()) {
              // Assuming user's name is stored under firstName and lastName fields
              const userData = userSnap.data();
              userNamesMap[dataset.user] = `${userData.firstName} ${userData.lastName}`;
            } else {
              userNamesMap[dataset.user] = "Unknown User"; // Handle case where user data is not found
            }
          }
        }
  
        setDatasets(datasetsArray);
        setUserNames(userNamesMap);
      } catch (error) {
        console.error("Error fetching datasets:", error);
      }
    };
  
    fetchDatasets();
  }, []);
  

  // Filter datasets based on the search query
  const filteredDatasets = datasets.filter(dataset => 
    dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.tags.toLowerCase().includes(searchQuery.toLowerCase()) // Since tags is a single category
  );

  


  return (
    <div className='bg-blue-gray-100 text-blue-gray-800'>

<HeroResearch />
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
            <Link to="/datasets/new" className="bg-blue-gray-600 rounded-full w-max px-6 py-4 text-white font-body-plex font-bold">
              New Dataset
            </Link>
            <Link to="/work" className="bg-white border-[1px] sm font-bold border-blue-gray-900  rounded-full w-max px-6 py-4 text-blue-gray-600 font-body-plex">
              Your Data
            </Link>
      
        </div>
        </div>
        
    
        
        
      </div>
    </div>
   
    <div>
     
      <input
        type="text"
        placeholder="Search datasets..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }} // Example styling, adjust as needed
      />
    {filteredDatasets.length > 0 ? (
  <div className='flex flex-col w-4/5 gap-4 mx-auto'>
    {filteredDatasets.map(dataset => (
      <DataCard
        key={dataset.id} // Assuming each dataset has a unique 'id' property
        title={dataset.title}
        description={dataset.description}
        file={dataset.file}
        country={dataset.country}
        user={userNames[dataset.user]}  tags={dataset.tags}// Fallback to 'other' if no match
      />
    ))}
  </div>
) : (
  <p>No datasets found.</p>
)}

    </div>
    </div>
  )
}

export default Datasets