import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import { storage } from '../firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { serverTimestamp } from 'firebase/firestore'
import { africanCountries } from '../countries'
import InputGroup from './InputGroup'

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from 'react-toastify'
import { UserAuth } from '../context/authContext'


const categories = [
  "viral", "bacterial", "fungal", "cancer", "other"
]


function ProjectForm() {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    const [short_description, setShortDescription] = useState('')
    const [long_description, setLongDescription] = useState('')
    const [deadline, setDeadline] = useState('')
    const {user} = UserAuth();
    const [country, setCountry] = useState('')
    const [delivery, setDelivery] = useState('')
    const [category, setCategory] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    
  
    const [uploadDetails, setUploadDetails] = useState({ title: "", short_description: "", long_description:"", deadline: "" });

    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
    
  


const handleSubmit = async (e) => {
    e.preventDefault();
  setIsSubmitting(true);
    const docRef = await addDoc(collection(db, "Projects"), {
        title: title,
        short_description: short_description,
        long_description: long_description,
        deadline: deadline,
        timeStamp: serverTimestamp(),
        user: user?.uid,
        contact: user?.email,
        leadResearcher: user?.displayName,
        country: country,
        delivery: delivery,
        category: category

      }
     
      )
        .then(() => {
      
          toast.success("Project successfully shared!")

          setUploadDetails({ title: title, long_description, short_description, deadline});
          setTitle('')
          setLongDescription('')
          setShortDescription('')
          setDeadline('')
          setCountry('')
          setDelivery('')  

        })
      .catch((e) => {
        setError(e.message)
      
      });
}


  return (
    <div className=''>
        <div className="flex flex-col gap-10">
            <p className="font-body-plex text-lg font-bold">
            Basic Setup
            </p>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className='font-body-plex font-semibold text-xs'>Project Name<span className='text-red-800'>*</span></label>
             
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a clear name for your project' className="border-[1px] font-body-plex shadow-inner   placeholder:font-light placeholder:text-blue-gray-700 placeholder:text-sm border-blue-gray-100 rounded-lg px-4 py-2" required/>
                {
                    title.length < 50 ? <p className='text-red-800 text-xs font-body-plex'>Title cannot be less than 50 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{title.length}/{50}</p>
                }
              
            </div>
            <div className="flex flex-col gap-2 my-2">
                <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Short Description<span className='text-red-800'>*</span></label>
                <textarea rows={5} type="text" name="description" id="description" value={short_description} onChange={(e) => setShortDescription(e.target.value)} placeholder='Enter a concise description' 
                className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm shadow-inner border-blue-gray-100 rounded-lg px-4 py-2" required />
                {
                    short_description.length < 140 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be less than 140 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{short_description.length}/{140}</p>
                }
                
            </div>
            <div className="flex flex-col gap-2 my-2">
                <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Long Description<span className='text-red-800'>*</span></label>
                <textarea rows={5} type="text" name="description" id="description" value={long_description} onChange={(e) => setLongDescription(e.target.value)} placeholder='Enter a concise description' 
                className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm border-blue-gray-100 rounded-lg px-4 py-2" required />
                {
                   long_description.length < 300 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be less than 300 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{long_description.length}</p>
                }
                
            </div>
            <div className='flex flex-col'>
            <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Category<span className='text-red-800'>*</span></label>

            <select id="country" value={category} onChange={(e) => setCategory(e.target.value)} required className='w-full mx-auto shadow-inner rounded-xl font-body-plex px-4 py-2 font-semibold text-xs text-blue-gray-500'>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="country" className='font-body-plex font-semibold text-xs'>Country<span className='text-red-800'>*</span></label>

            <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} required className='w-full mx-auto shadow-inner rounded-xl font-body-plex px-4 py-2 font-semibold text-xs text-blue-gray-500'>
                {africanCountries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>

                ))}
            </select>
        </div>
        <div className='flex flex-col'>
        <label htmlFor="delivery" className='font-body-plex font-semibold text-xs'>Work Delivery<span className='text-red-800'>*</span></label>
            <select id="delivery" value={delivery} onChange={(e) => setDelivery(e.target.value)} required className='w-full mx-auto shadow-inner rounded-xl font-body-plex px-4 py-2 font-semibold text-xs text-blue-gray-500'>
                  <option value="online">Online</option>
                  <option value="in person">In Person</option>
            </select>
        </div>
            <div className="flex flex-col gap-2 my-2">
           <label htmlFor="deadline" className='font-body-plex font-semibold text-xs'>Deadline<span className='text-red-800'>*</span></label>
                <input type="date" name="deadline" id="deadline" className='font-body-plex text-xs border-b-[1px] border-b-blue-gray-400 text-blue-gray-700' value={deadline} onChange={(e) => setDeadline(e.target.value)} required/>
            </div>
 
<input  type="submit"  className='bg-blue-gray-900 text-white w-max font-body-plex font-bold disabled:bg-blue-gray-200 rounded-full border-[1px] border-blue-gray-700 px-6 py-2'
/>            </form>
        </div>

        <>
      
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader></DialogHeader>
        <DialogBody>
          <p className="font-body-plex text-green-800 text-sm">
          The <span className="text-red-800">{uploadDetails.title} </span> project <span className="text-red-800">{uploadDetails.country}</span>  was Successfully shared!
          </p>
          <p className='font-body-plex text-blue-gray-800 italic font-normal'>
          Description: {uploadDetails.short_description}

          </p>
        </DialogBody>
        <DialogFooter>
          <button
            
            onClick={handleOpen}
            className="mr-1 font-body-plex border-blue-gray-100 border-[1px]  bg-white text-blue-gray-700 text-sm uppercase rounded-full w-max py-2 px-4"
          >
            <span>Close</span>
          </button>
          <button  className='font-body-plex bg-blue-gray-900 text-white uppercase text-sm rounded-full w-max py-2 px-4' onClick={handleOpen}>
            <span>Upload More</span>
          </button>
        </DialogFooter>
      </Dialog>
    </>
    </div>


  )

}

export default ProjectForm