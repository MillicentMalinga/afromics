import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
  return (
    <div className='rounded-lg bg-white h-10 flex flex-row px-4 py-2 border-blue-gray-100 border-2'>
        <input type="text" placeholder={props.prompt} className='border-none outline-none' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-gray-200' />

    </div>
  )
}

export default Search