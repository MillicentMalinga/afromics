import React from 'react'
import S3 from '../assets/images/storage-amazon-s3-bucket-with-objects.svg'
import  IAM from '../assets/images/aws-iam-identity-and-access-management.svg'
import  Lambda from '../assets/images/compute-aws-lambda-lambdafunction.svg'
import Cognito from '../assets/images/aws-cognito.svg'
import IconCard from './IconCard'
import { Link } from 'react-router-dom'



const features = [
    {
        title: 'Simple Storage Service',
        description: 'Our platform uses Amazon S3 to store your data, and archive it according to your set timelines,  ensuring that it is secure and accessible', 
        image: S3, 
        link: 'https://aws.amazon.com/s3/'
    }, 
    {
        title: 'Identity and Access Management',
        description: 'We use AWS IAM to manage who has access to your data and resources, and what level of access they have',
        image: IAM,
        link: 'https://aws.amazon.com/iam/'
    }, 
    {
        title: 'Serverless Computing',
        description: 'We use AWS Lambda to make sure that collaboration as data is uploaded to S3 Buckets is almost in real time',
        image: Lambda,
        link: 'https://aws.amazon.com/lambda/'
    },
    {
        title: 'User Authentication',
        description: 'We use AWS Cognito to ensure that only authorised personnel can access your data and resources',
        image: Cognito,
        link: 'https://aws.amazon.com/cognito/'
    }

    
]

function Features() {
  return (
    <div className='bg- py-10 flex flex-col'>
        <p className='font-body-plex font-bold text-blue-gray-700 sm:text-left sm:w-4/5 sm:mx-auto  text-lg uppercase'>
            Technologies We Use
        </p>
        <p className='lg:text-2xl sm:text-xl sm:text-left sm:w-4/5 sm:mx-auto font-bold font-body-plex text-blue-gray-800'>
            Our Platforms Uses the Latest AWS Technologies to Ensure that Your Data is Secure and Accessible
        </p>

        <div className="grid lg:mx-auto my-10 sm:mx-auto w-4/5 gap-8 lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1">
            {features.map((feature, index) => (
                <IconCard key={index} title={feature.title} description={feature.description} image={feature.image} link={feature.link} />
            ))}
            </div>  
        <div>
      
        </div>
    </div>
  )
}

export default Features