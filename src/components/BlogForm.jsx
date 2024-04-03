import React from 'react'
import { useState } from 'react'
import { UserAuth } from '../context/authContext'
import { db, storage } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle,faCloudArrowUp, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import InputGroup from './InputGroup'

function BlogForm() {
    // unpacking the user object from the UserAuth hook
    const { user } = UserAuth();
const [isPublishing, setIsPublishing] = useState(false);
    // form state
    const [blogForm, setBlogForm] = useState({
        title: '',
        content: {
            blocks: [
                {
                    subtitle: '',
                    text: ''
                }
            ]
        
        },
        category: '',
        image: ''
    })

    // file state
    const [file, setFile]  = useState(null);



    const { title, content, category } = blogForm;
    const handleChange = (e, index) => {
        const updatedBlocks = [...content.blocks];
        updatedBlocks[index] = {
            ...updatedBlocks[index],
            [e.target.name]: e.target.value
        };
        setBlogForm({
            ...blogForm,
            content: {
                ...content,
                blocks: updatedBlocks
            }
        });
    }

    const newBlockForm = () => {
        setBlogForm(prevState => ({
            ...prevState,
            content: {
                ...prevState.content,
                blocks: [...prevState.content.blocks, { subtitle: '', text: '' }]
            }
        }));
    }

    const removeBlockForm = (index) => {
        setBlogForm({
            ...blogForm,
            content: {
                ...content,
                blocks: content.blocks.filter((_, i) => i !== index)
            }
        });
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setFile(file);
        } else {
            toast.error('Please upload an image file');
        }
    }
//  upload to database

async function handleSubmit(e) {
    e.preventDefault();
    setIsPublishing(true);
    if (!file) {
        alert('Please upload a cover image');
        setIsPublishing(false);
        return;
    }
    if (content.blocks.length < 1) {
        alert('Please add at least one block of content');
        setIsPublishing(false);
        return;
    }
    for (let block of content.blocks) {
        if (block.subtitle.length < 10 || block.text.length < 150) {
            alert('Each subtitle must be at least 10 characters and each text must be at least 150 characters.');
            setIsPublishing(false);
            return;

        }
    }

    // 1. Upload the cover image to Firebase Storage
    const storageRef = ref(storage, `coverImages/${file.name}`);
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

            // 2. Upload the blog post data to Firestore
            await addDoc(collection(db, 'blogPosts'), {
                ...blogForm,
                image: downloadURL,
                author: user?.uid,
                createdAt: new Date().toISOString()
            });

            // Clear the form
            toast.success('Blog post published successfully');
            setIsPublishing(false);
            setBlogForm({
                title: '',
                content: {
                    blocks: [
                        {
                            subtitle: '',
                                text: ''
                            
                        }
                    ]
                },
                tags: [],
                category: '',
                image: ''
            });
            setFile(null);
        }
    );
}

    return (
        <div className='flex flex-col mx-auto py-20 px-10 bg-white rounded-xl shadow-xl w-4/5'>
          

            <form className='w-full gap-10 mx-auto flex flex-col' onSubmit={handleSubmit}>

                <input type='text' className='font-body-plex lg:text-2xl' name='title' placeholder='Title' value={title} onChange={(e) => setBlogForm({ ...blogForm, [e.target.name]: e.target.value })} />
                <label htmlFor="file-upload" className="custom-file-upload">
                <FontAwesomeIcon icon={faCloudArrowUp} />
    <span className='font-body-plex font-bold text-xs text-blue-gray-300 '>{file ? file.name : "Upload cover image"}</span>

</label>
<input id="file-upload" type="file" style={{display: 'none'}} onChange={handleFileChange} />

<span className='cursor-pointer font-body-plex font-bold text-xs text-blue-gray-300 ' onClick={newBlockForm}>
<FontAwesomeIcon icon={faNewspaper} /> Add New Block
</span>
                {
                    content.blocks.map((block, index) => {
                        return (
                            <div key={index} className='flex border-b-[1px] border-b-blue-gray-300 flex-row w-full justify-between'>
                                <div className="flex flex-col gap-6">
                                <InputGroup>
                                <input type='text' name='subtitle' placeholder='Subtitle' value={block.subtitle} onChange={(e) => handleChange(e, index)} className={`w-full px-4 py-2 rounded-xl  font-body-plex text-sm font-bold border-[1px]`} />
</InputGroup>
{
                                block.subtitle.length < 10 && <p className='text-red-500 text-sm'>Subtitle must be at least 10 characters</p>
}
                              
                                <InputGroup>
                                <textarea name='text' cols={500} placeholder='Content' value={block.text} onChange={(e) => handleChange(e, index)} className={`w-full rounded-xl px-4 py-2  text-sm font-body-plex border-[1px] font-light`} />
                                </InputGroup>
                                {block.text.length < 150 && <p className='text-red-500 text-sm'>Content must be at least 150 characters</p>}
                                </div>
                                <FontAwesomeIcon icon={faMinusCircle}  className='text-red-400' onClick={() => removeBlockForm(index)} />
                            </div>
                        )
                    })
                }

                <input type="submit"  value={isPublishing ? "Publishing" : "Publish"} className='bg-blue-gray-700 rounded-3xl px-4 py-2 font-body-plex text-white' />
            </form>

        </div>
    )
}


export default BlogForm;