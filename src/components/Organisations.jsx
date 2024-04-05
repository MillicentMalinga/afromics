import React from 'react'

import Collab from '../assets/images/secure-data.png';

import { PricingCard } from './PricingCard';
import Footer from './Footer';
import ContactForm from './ContactForm';
import IconCard from './IconCard';


// List of services offered to organisations

const features = [
  {
    title: 'Data Management',
    description: 'We provide secure data management solutions for your organisation, ensuring that your data is secure and accessible when you need it.',
    image: 'https://img.icons8.com/ios/452/data-configuration.png',
    link: '/about-us'
  },
  {
    title: 'Data Analysis',
    description: 'Our team of data scientists will help you make sense of your data, providing insights that will help you make informed decisions.',
    image: 'https://img.icons8.com/ios/452/data-configuration.png',
    link: '/about-us'
  },
  {
    title: 'Data Visualization',
    description: 'We provide data visualization services that will help you present your data in a way that is easy to understand and interpret.',
    image: 'https://img.icons8.com/ios/452/data-configuration.png',
    link: '/about-us'
  },
  {
    title: 'Talent Development',
    description: 'We provide training and mentorship to help your team develop the skills they need to manage and analyze data effectively.',
    image: "https://icons8.com/icon/U2FkwMbhMlLj/group",
    link: '/about-us'
  }
]


function Organisations() {
  return (
    <div className="bg-blue-50">
      
      <div className='flex flex-col place-content-center mb-10 lg:py-10 sm:py-10'>
      
      <div className='w-4/5 mx-auto flex flex-col gap-4'>
        <div className='flex lg:flex-row sm:flex-col gap-8'>
          <img src={Collab} alt="" className='lg:w-2/5 sm:w-full rounded-b-full rounded-t-full' />
          <div className='self-center flex flex-col mx-4 gap-4'>
          <h1 className='font-body-plex lg:text-4xl sm:text-2xl'> </h1>
        <p className="font-body-plex md:text-4xl font-bold sm:text-2xl text-blue-gray-900">
Data Management Solutions for your organisations        </p>
<p className='text-lg text-blue-gray-600 font-body-plex'>
  We handle your genomic research data with the utmost care and security. Our services are tailored to meet the needs of your organisation, no matter the size.
    We do the heavy lifting so you can focus on what you do best.
</p>

<ContactForm />
     

          </div>

         
         
        </div>
        
    
        
        
      </div>
    </div>

<div className=' mt-10 py-10'>
  <p className='text-sm font-bold font-body-plex w-4/5 mx-auto'>
    Our Services
  </p>
<div className="grid lg:mx-auto my-10 sm:mx-auto w-4/5 gap-8 lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1">
            {features.map((feature, index) => (
               <div className='bg-white shadow-xl h-auto p-6 flex flex-col gap-4'>
               <div className='flex flex-row gap-2'>
               <p className='font-body-plex font-semibold text-lg font-blue-gray-700'>
                   {feature.title}
       </p>
               </div>
       
               <p className='font-body-plex text-blue-gray-800 text-left'>
                   {feature.description}
               </p>
       
              
       
           </div>
            ))}
            </div>  
    <Footer />
    </div>
    </div>
  )
}

export default Organisations