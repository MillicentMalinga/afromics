import React from 'react'
import DataForm from '../components/DataForm'

function NewData() {
  return (
    <div className='text-blue-gray-800'>
       
   

        <div className="flex flex-col  place-content-center my-20 pb-20 lg:w-3/5 mx-auto gap-20">
            <div>

           
            <p className="font-body-plex text-xl font-bold">
                Upload a new dataset
            </p>
            <p className="font-body-plex text-sm">
                
                Share data that can lead to new discoveries and insights. Be it data that is still fresh and requires new insights to be drawn from it, or data you believe can be used to solve a problem, we are here to help you share it with the world.
               
            </p>
            </div>
        <hr  className='w-full'/>
           <DataForm />
        </div>
       

    </div>
  )
}

export default NewData