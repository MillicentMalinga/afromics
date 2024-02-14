import React from 'react'
import HeroImage from '../assets/images/scientists.png'

function Hero() {
  return (
    <div>
        <div className="flex mb-10 sm:flex-col-reverse lg:flex-row lg:mx-16 sm:mx-2 mt-8">
            <div className="lg:w-1/2 sm:w-4/5 lg:mx-4 self-center justify-self-center">
            
<p className="text-4xl font-body-plex text-left self-center">
  We are leveraging the power of the cloud to accelerate genomics research in Africa
</p>
<p className='text-left text-md mt-8 font-body-plex'>
  Afromics is a revolutionary online genomic data management center dedicated to enhancing genomics research across Africa to facilitate seamless data sharing, storage and analysis between organisations and researchers.  </p>

<button className='my-4 text-white  border-blue-gray-800 bg-blue-gray-800 font-body-plex flex gap-2 px-5 py-2 rounded-xl shadow-lg'>
  Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

</button>
            </div>
            <div className="lg:w-1/2 sm:w-4/5 sm:self-center">
                <img className='rounded-xl' src={HeroImage} alt="AfroMics" />
            </div>
        </div>
    </div>
  )
}

export default Hero