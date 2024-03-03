import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
  return (
    <div className='rounded-xl bg-white h-10 lg:w-3/5 sm:w-max flex flex-row justify-between px-4 py-2 border-blue-gray-100 border-[1px]'>
        <input type="text"  placeholder={props.prompt} className='search font-body-plex text-blue-gray-600 border-none outline-none focus:outline-none w-full' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-gray-200' />

    </div>
  )
}

export default Search