import React from 'react'
import HeroImage from '../assets/images/scientists.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <div className="flex sm:flex-col-reverse lg:flex-row lg:mx-16 sm:mx-8 mt-8">
            <div className="w-1/2 lg:mx-4 self-center justify-self-center">
            
<p className="text-4xl font-body-plex text-left self-center">
  We are leveraging the of the cloud to accelerate genomics research in Africa
</p>
<p className='text-left text-md mt-8 font-body-plex'>
  Afromics is a revolutionary online genomic data management center dedicated to enhancing genomics research across Africa to facilitate seamless data sharing, storage and analysis between organisations and researchers.  </p>


            </div>
            <div className="w-1/2">
                <img className='rounded-xl' src={HeroImage} alt="AfroMics" />
            </div>
        </div>
    </div>
  )
}

export default Hero