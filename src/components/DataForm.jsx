import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { storage } from '../firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { serverTimestamp } from 'firebase/firestore'
import { africanCountries } from '../countries'


import { toast } from 'react-toastify'
import { UserAuth } from '../context/authContext'


const categories = [
  "viral", "bacterial", "fungal", "cancer", "other"
]


function DataForm() {
    const [title, setTitle] = useState('')
    const [short_description, setShortDescription] = useState('')
    const [long_description, setLongDescription] = useState('')
   
    const {user} = UserAuth();
    const [country, setCountry] = useState('')
   
    const [category, setCategory] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [file, setFile] = useState(null)
    
  

 
  
    
  


    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      const fileName = serverTimestamp() + file.name;
      const storageRef = ref(storage, `Datasets/ ${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed', 
          (snapshot) => {
              // You can use this section to display the upload progress
          }, 
          (error) => {
              // Handle unsuccessful uploads
              toast.error(error.message);
          }, 
          async () => {
              // Get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
              const docRef = await addDoc(collection(db, "Datasets"), {
                  title: title,
                  short_description: short_description,
                  long_description: long_description,
                  timeStamp: serverTimestamp(),
                  user: user?.uid,
                  contact: user?.email,
                  author: user?.displayName,
                  country: country,
                  file: downloadURL,
                  category: category
              }).then(() => {
                  toast.success("Project successfully shared!")
                  
                  setTitle('')
                  setLongDescription('')
                  setShortDescription('')
                  setCountry('')
                  setFile(null) 
                  setCategory('') 
                  setIsSubmitting(false)
              }).catch((e) => {
                  console.error(e)
                  toast.error("An error occured. Please try again")
              });
          }
      );
  }
  


  return (
    <div>
        <div className="flex flex-col gap-10">
            <p className="font-body-plex text-lg font-bold">
            Basic Setup
            </p>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <input type="file" id="file-upload" name="file" onChange={(e) => setFile(e.target.files[0])} className="hidden" />  
                <FontAwesomeIcon icon={faCloudArrowUp} />
    <span className='font-body-plex font-bold text-xs text-blue-gray-300 '>{file ? file.name : "Upload dataset"}</span>

</label>
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className='font-body-plex font-semibold text-xs'>Dataset Name<span className='text-red-800'>*</span></label>
             
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a clear name for your project' className="border-[1px] font-body-plex shadow-inner   placeholder:font-light placeholder:text-blue-gray-700 placeholder:text-sm border-blue-gray-100 rounded-lg px-4 py-2" required/>
                {
                    title.length < 10 ? <p className='text-red-800 text-xs font-body-plex'>Title cannot be less than 50 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{title.length}</p>
                }
              
            </div>
            <div className="flex flex-col gap-2 my-2">
                <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Short Description<span className='text-red-800'>*</span></label>
                <textarea rows={5} type="text" name="description" id="description" value={short_description} onChange={(e) => setShortDescription(e.target.value)} placeholder='Enter a concise description' 
                className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm shadow-inner border-blue-gray-100 rounded-lg px-4 py-2" required />
                {
                    short_description.length < 140 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be less than 140 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{short_description.length}</p>
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
            <label htmlFor="category" className='font-body-plex font-semibold text-xs'>Category<span className='text-red-800'>*</span></label>

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
   

<input  type="submit"

className='bg-blue-gray-700
 text-white w-max font-body-plex font-bold
  disabled:bg-blue-gray-200 rounded-3xl border-[1px] border-blue-gray-700 px-6 
  py-2' value={isSubmitting ? "Submitting" : "Submit"}
/>            </form>
        </div>


    </div>


  )

}

export default DataForm