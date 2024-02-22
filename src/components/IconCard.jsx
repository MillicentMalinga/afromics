import React from 'react'

function IconCard(props) {
  return (
    <div className='bg-white shadow-xl h-auto p-6 flex flex-col gap-4'>
        <div className='flex flex-row gap-2'>
            <img src={props.image} alt="Service" className='h-10' />
        <p className='font-body-plex font-semibold text-lg font-blue-gray-700'>
            {props.title}
</p>
        </div>

        <p className='font-body-plex text-blue-gray-800 text-left'>
            {props.description}
        </p>

        <a href={props.link} target='_blank' rel='noreferrer' className='self-start text-white rounded-lg ml-0 hover:bg-blue-gray-200 font-body-plex px-4 py-2 bg-blue-gray-900 text-left'>Learn More </a>
       

    </div>
  )
}

export default IconCard