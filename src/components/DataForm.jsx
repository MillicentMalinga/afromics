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
import { Progress } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";




function DataForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [file, setFile] = useState('')
    const [accept, setAccept] = useState(false)
    const [country, setCountry] = useState('')
    const [error, setError] = useState('')
    const [perc, setPerc] = useState(0)
    const [data, setData] = useState()
  
    const [uploadDetails, setUploadDetails] = useState({ title: "", country: "", description:"" });

    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
    
    useEffect(() => {
        const uploadFile = () => {
          const name = new Date().getTime() + file.name;
    
          console.log(name);
          const storageRef = ref(storage, name);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              setPerc(progress);
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData(downloadURL);
              });
            }
          );
        };
        file && uploadFile();
      }, [file]);



const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "Datasets"), {
        title: title,
        description: description,
        tags: tags,
        file: data,
        country:country,  
        timeStamp: serverTimestamp()

      }
     
      )
        .then(() => {
          handleOpen()
          setUploadDetails({ title: title, country: country, description: description });
            setCountry('')
            setDescription('')
            setTitle('')
            setTags('')
            setFile('')
            setPerc(0)
           
            setAccept(false)
        })
      .catch((e) => {
        setError(e.message)
      
      });
}


  return (
    <div>
        <div className="flex flex-col gap-10">
            <p className="font-body-plex text-lg font-bold">
            Basic Setup
            </p>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className='font-body-plex font-semibold text-xs'>Dataset Name<span className='text-red-800'>*</span></label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a clear name for your dataset' className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm border-blue-gray-100 rounded-lg px-4 py-2" required/>
                {
                    title.length > 50 ? <p className='text-red-800 text-xs font-body-plex'>Title cannot be more than 50 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{title.length}/{50}</p>
                }
                
            </div>
            <div className="flex flex-col gap-2 my-2">
                <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Description<span className='text-red-800'>*</span></label>
                <textarea rows={5} type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter a concise description' 
                className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm border-blue-gray-100 rounded-lg px-4 py-2" required />
                {
                    description.length > 140 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be more than 140 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{description.length}/{140}</p>
                }
                
            </div>

            
            <div className="flex flex-col gap-2 my-2">
            <label htmlFor="tags" className='font-bold text-xs font-body-plex'>Category <span className='text-red-800'>*</span></label>
            <select name='tags'  id="tags" value={tags} onChange={(e) => setTags(e.target.value)} className='font-body-plex border-[1px] border-blue-gray-500 rounded-lg py-2 px-4' required>
            <option value="" disabled selected>--</option>
          <option value="cancer">Cancer</option>
          <option value="viral">Viral</option>
          <option value="bacterial">Bacterial</option>
          <option value="HIV">HIV</option>
          <option value="other">Others</option>
        </select>
                
            </div>
 
            <div className="flex flex-col gap-2 my-2 font-body-plex text-xs">
            <label htmlFor="country" className='font-bold text-xs'>Country <span className='text-red-800'>*</span></label>
            <select name='country'  id="country" value={country} onChange={(e) => setCountry(e.target.value)} className='font-body-plex border-[1px] border-blue-gray-500 rounded-lg py-2 px-4' required>
            <option value="" disabled selected>--</option>
            {
  africanCountries.map(country => (
    <option value={country}>{country}</option>
  ))
}
          
        
        </select>
                
            </div>


            <div className='mt-6'>
            <label htmlFor="file">
                 <span  className='font-body-plex font-semibold text-red-900 text-xs'>Upload Dataset: </span> <FontAwesomeIcon icon={faUpload} className='mx-2 lg:text-2xl sm:text-sm md:text-md' />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                required />
                {!file && <p className='font-body-plex text-red-900 text-xs font-bold'>Came all this way just to not upload a file huh? Sassy!</p>}
                {file && <p className='font-body-plex text-green-900 text-xs font-bold'>{file.name}</p>}
            </div>

<div className="flex flex-row gap-2">
<input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept" checked={accept} onChange={(e) => setAccept(e.target.checked)} className='font-body-plex text-sm'>I agree to the terms and conditions</label>
</div>

{error && <p className='text-red-800 font-body-plex text-xs'>{error}</p>}
{
  perc > 0 && <p className='font-body-plex text-green-800 text-xs'>Dataset Upload Progress: {perc}%</p>
}




<input
  type="submit"
  disabled={perc < 100 || error}
  value={perc === 100 ? "Upload" : "Waiting for dataset..."}
  className='bg-blue-gray-900 text-white w-max font-body-plex font-bold disabled:bg-blue-gray-200 rounded-full border-[1px] border-blue-gray-700 px-6 py-2'
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
          The <span className="text-red-800">{uploadDetails.title} </span> dataset from <span className="text-red-800">{uploadDetails.country}</span>  was Successfully uploaded!
          </p>
          <p className='font-body-plex text-blue-gray-800 italic font-normal'>
          Description: {uploadDetails.description}

          </p>
        </DialogBody>
        <DialogFooter>
          <button
            
            onClick={handleOpen}
            className="mr-1 font-body-plex  bg-blue-gray-900 text-white uppercase rounded-full w-max py-2 px-4"
          >
            <span>Close</span>
          </button>
          <button  className='font-body-plex bg-blue-gray-900 text-white uppercase rounded-full w-max py-2 px-4' onClick={handleOpen}>
            <span>Upload More</span>
          </button>
        </DialogFooter>
      </Dialog>
    </>
    </div>


  )

}

export default DataForm