import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';

function DataForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')
    const [file, setFile] = useState('')
    const [visibility, setVisibility] = useState('')
    const [accept, setAccept] = useState(false)

   
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });


  return (
    <div>
        <div className="flex flex-col gap-10">
            <p className="font-body-plex text-lg font-bold">
            Basic Setup
            </p>
            <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className='font-body-plex font-semibold text-xs'>Dataset Name<span className='text-red-800'>*</span></label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a clear name for your dataset' className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm border-blue-gray-100 rounded-lg px-4 py-2" />
                {
                    title.length > 50 ? <p className='text-red-800 text-xs font-body-plex'>Title cannot be more than 50 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{title.length}/{50}</p>
                }
                
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="description" className='font-body-plex font-semibold text-xs'>Description<span className='text-red-800'>*</span></label>
                <textarea rows={5} type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter a concise description' 
                className="border-[1px] font-body-plex placeholder:font-light placeholder:text-sm text-sm border-blue-gray-100 rounded-lg px-4 py-2" />
                {
                    description.length > 140 ? <p className='text-red-800 text-xs font-body-plex'>Description can not be more than 140 characters</p> : 
                    <p className='text-green-600 text-xs font-body-plex'>{description.length}/{140}</p>
                }
                
            </div>

            <div>
           {/* Learn File Input in React */}
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="visibility" className='font-bold text-sm'>Visibility</label>
            <select name='visibility'  id="visibility" value={visibility} onChange={(e) => setVisibility(e.target.value)} className='font-body-plex border-[1px] border-blue-gray-500 rounded-lg py-2 px-4'>
            <option value="" disabled selected>--</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
                
            </div>
<div className="flex flex-row gap-2">
<input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept" checked={accept} onChange={(e) => setAccept(e.target.checked)} className='font-body-plex text-sm'>I agree to the terms and conditions</label>
</div>
           
            <input type="submit" disabled={!accept} value="Upload" className='active:bg-blue-gray-900 text-white w-max font-body-plex font-bold disabled:bg-blue-gray-200 rounded-full border-[1px] border-blue-gray-700 px-6 py-2' />
            </form>
        </div>
    </div>
  )
}

export default DataForm