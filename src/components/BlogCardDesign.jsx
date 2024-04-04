import React from 'react'
import { Link } from 'react-router-dom'
import Collab from '../assets/images/woman-scientist.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



function BlogCardDesign({title, img, author, likes, body, date, category}) {
  return (
    <div className='bg-white flex flex-row justify-start gap-6 h-auto'>
        <div className="rounded-2xl h-60">
            <img src={img} alt="Collab" className='rounded-2xl w-full h-full object-cover' />
            
        </div>
        <div className="body flex flex-col w-2/3">
            <div className="flex flex-row text-blue-gray-600 gap-6">
                <p className="font-body-plex font-normal text-xs text-blue-gray-300">
                    {date}
                </p>
                <p className="font-body-plex  bg-blue-gray-100 rounded-xl px-2 text-xs font-medium">
                    {category}
                </p>

            </div>
            <p className='text-lg font-body-plex font-bold my-4 text-blue-gray-900'>
                {title}
            </p>
            <p className='text-xs line-clamp-2 ... text-ellipsis font-body-plex text-blue-gray-800'>
                {body}
            </p>

            <div className="flex flex-row justify-between my-4">
                <div className="flex flex-row gap-2">
                    <p className='text-xs font-body-plex text-blue-gray-400'>
                        Written by: {author}
                    </p>
                </div>
                <p className='text-xs font-body-plex font-bold text-blue-gray-400'>
                  <FontAwesomeIcon icon={faThumbsUp} /> {likes} 
                </p>
                </div>
        </div>


    </div>
  )
}

export default BlogCardDesign