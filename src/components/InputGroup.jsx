import React from 'react'

function InputGroup({children}) {
  return (
    <div className='rounded-2xl shadow-inner font-body-plex text-xs font-light overflow-hidden flex flex-row  w-4/5 mx-auto px-4 py-2 border-white border-2'>

         {children}
    </div>
  )
}

export default InputGroup