import React from 'react'
import HeroResearch from './HeroResearch'
import DataForm from './DataForm'
import ProjectForm from './ProjectForm'

function NewProject() {
  return (
    <div className='bg-white text-blue-gray-800'>
       
        <HeroResearch />

        <div className="flex flex-col  place-content-center my-20 pb-20 lg:w-3/5 mx-auto gap-20">
            <div>

           
            <p className="font-body-plex text-xl font-bold">
                Invite other scientists to collaborate on a project
            </p>
            <p className="font-body-plex text-sm">
                
                Share your project idea with other researchers and scientists. Be it a project that requires a team to work on, or a project that you believe can be used to solve a problem, we are here to help you share it with the world.               
            </p>
            </div>
        <hr  className='w-full'/>
           <ProjectForm />
        </div>
       

    </div>
  )
}

export default NewProject