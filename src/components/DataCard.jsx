import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

function DataCard(props) {

  return (
    <div className='bg-blue-gray-50 shadow-md rounded-lg gap-2 py-2 h-max flex flex-col px-10'>
      <div className="flex flex-row justify-between items-center">
      <p className="text-blue-gray-200 font-body-plex text-lg uppercase font-bold">
        {props.title}
      </p>
      <p className="text-blue-gray-800 font-body-plex text-xs bg-blue-gray-100 w-max px-4 rounded-xl">
        {props.tags}
      </p>
      </div>
      <p className="font-body-plex text-blue-gray-600 font-sm">
        {props.description}
      </p>
     
      
      <p className="text-blue-gray-800 font-body-plex font-normal text-xs">
      Uploaded by:  {props.user}
      </p>
      <div className="flex flex-row items-center">
        <p className="text-blue-gray-800 text-xs italic font-body-plex">
          {props.country}
        </p>
        <a  href={props.file} target="_blank" rel="noopener noreferrer"   className="text-blue-gray-900 text-xs rounded-full w-max px-4 py-2 font-body-plex font-bold">
          <FontAwesomeIcon icon={faScroll} className="mr-2" />
          View Dataset
        </a>

</div>

<hr className='border-[1px] border-blue-gray-200 my-4' />
    
    </div>
  )
}

export default DataCard