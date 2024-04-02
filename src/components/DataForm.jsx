// import { faCamera, faUpload } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { useState, useEffect } from 'react'
// import { storage } from '../firebaseConfig'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from '../firebaseConfig'
// import { serverTimestamp } from 'firebase/firestore'
// import { africanCountries } from '../countries'
// import { Progress } from "@material-tailwind/react";
// import { useNavigate } from 'react-router-dom'
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import {toast} from 'react-toastify'



// function DataForm() {

//   const [perc, setPerc] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);

//   const [coverImage, setCoverImage] = useState(null);
//   const [datasetFile, setDatasetFile] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [country, setCountry] = useState('');
  
//   // Update your handle change function to handle changes to any field in the form
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
  
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: files[0],
//     }));
//   };
  


//   const handleUpload = async () => {
//     if (!coverImage || !datasetFile || !title || !description || !country || !user) return;

//     const coverImageRef = ref(storage, `coverImages/${coverImage.name}`);
//     const datasetFileRef = ref(storage, `datasets/${datasetFile.name}`);

//     try {
//       // Upload cover image
//       await uploadBytes(coverImageRef, coverImage);
//       const coverImageUrl = await getDownloadURL(coverImageRef);

//       // Upload dataset file
//       await uploadBytes(datasetFileRef, datasetFile);
//       const datasetFileUrl = await getDownloadURL(datasetFileRef);

//       // Save dataset details to Firestore
//       await addDoc(collection(db, "datasets"), {
//         title,
//         description,
//         country,
//         userUid: user.uid,
//         coverImageUrl,
//         datasetFileUrl,
//       });

//       alert("Dataset uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading dataset: ", error);
//       alert("Error uploading dataset");
//     }
//   };


//   return (
//     <div>
//         <div className="flex flex-col gap-10">
//             <p className="font-body-plex text-lg font-bold">
//             Basic Setup
//             </p>
//             <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <div className='mt-6'>
//             <label htmlFor="file">
//                  <span  className='font-body-plex font-semibold text-red-900 text-xs'>Upload Dataset: </span> <FontAwesomeIcon icon={faUpload} className='mx-2 lg:text-2xl sm:text-sm md:text-md' />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={handleFileChange}
//                   style={{ display: "none" }}
//                 required />
//                 {!file && <p className='font-body-plex text-red-900 text-xs font-bold'>Came all this way just to not upload a file huh? Sassy!</p>}
//                 {file && <p className='font-body-plex text-green-900 text-xs font-bold'>{file.name}</p>}
//             </div>
//             <div className='mt-6'>
//             <label htmlFor="image">
//                  <span  className='font-body-plex font-semibold text-red-900 text-xs'>Upload Cover Image: </span> <FontAwesomeIcon icon={faCamera} className='mx-2 lg:text-2xl sm:text-sm md:text-md' />
//                 </label>
//                 <input
//                   type="file"
//                   id="image"
//                   onChange={handleFileChange}
//                   style={{ display: "none" }}
//                 required />
//                 {!coverImage && <p className='font-body-plex text-red-900 text-xs font-bold'>Every dataset should feel special. Upload a cover image for your dataset.</p>}
//                 {coverImage && <p className='font-body-plex text-green-900 text-xs font-bold'>{coverImage.name}</p>}
//             </div>
//             <div className="flex flex-col gap-2">
//                 <label htmlFor="title" className='font-body-plex font-semibold text-xs'>Dataset Name<span className='text-red-800'>*</span></label>
//                 <input type="text" name="title" id="title" value={title} onChange={handleChange} placeholder='Enter a clear name for your dataset' className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm border-blue-gray-100 rounded-lg px-4 py-2" required/>
//                 {
//                     title.length > 50 ? <p className='text-red-800 text-xs font-body-plex'>Title cannot be more than 50 characters</p> : 
//                     <p className='text-green-600 text-xs font-body-plex'>{title.length}/{50}</p>
//                 }
                
//             </div>
//             <div className="flex flex-col gap-2 my-2">
//                 <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Description<span className='text-red-800'>*</span></label>
//                 <textarea rows={5} type="text" name="description" id="description" value={description} onChange={handleChange} placeholder='Enter a concise description' 
//                 className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm border-blue-gray-100 rounded-lg px-4 py-2" required />
//                 {
//                     description.length > 140 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be more than 140 characters</p> : 
//                     <p className='text-green-600 text-xs font-body-plex'>{description.length}/{140}</p>
//                 }
                
//             </div>

            
//             <div className="flex flex-col gap-2 my-2">
//             <label htmlFor="tags" className='font-bold text-xs font-body-plex'>Category <span className='text-red-800'>*</span></label>
//             <select name='tags'  id="tags" value={tags} onChange={handleChange} className='font-body-plex border-[1px] border-blue-gray-500 rounded-lg py-2 px-4' required>
//             <option value="" disabled selected>--</option>
//           <option value="cancer">Cancer</option>
//           <option value="viral">Viral</option>
//           <option value="bacterial">Bacterial</option>
//           <option value="HIV">HIV</option>
//           <option value="other">Others</option>
//         </select>
                
//             </div>
 
//             <div className="flex flex-col gap-2 my-2 font-body-plex text-xs">
//             <label htmlFor="country" className='font-bold text-xs'>Country <span className='text-red-800'>*</span></label>
//             <select name='country'  id="country" value={country} onChange={handleChange} className='font-body-plex border-[1px] border-blue-gray-500 rounded-lg py-2 px-4' required>
//             <option value="" disabled selected>--</option>
//             {
//   africanCountries.map(country => (
//     <option value={country}>{country}</option>
//   ))
// }
          
        
//         </select>
                
//             </div>


           






// <input
//   type="submit"  disabled={isUploading}
  
//   value={isUploading ? "Waiting for dataset..." : "Upload"}
//   className='bg-blue-gray-900 text-white w-max font-body-plex font-bold disabled:bg-blue-gray-200 rounded-full border-[1px] border-blue-gray-700 px-6 py-2'
// />            </form>
//         </div>


//     </div>


//   )

// }

// export default DataForm