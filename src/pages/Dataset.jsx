import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc, arrayUnion, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { UserAuth } from '../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart, faComment, faCloudArrowDown, faPen } from '@fortawesome/free-solid-svg-icons';
import formatDate from '../components/formatDate';
import Footer from '../components/Footer';

import { Dialog } from '@material-tailwind/react';



const Dataset = () => {
  const [dataset, setDataset] = useState(null);
  const [comment, setComment] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { dataId } = useParams(); // Assumes URL parameter is named 'datasetId'
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [isFormVisible, setIsFormVisible] = useState(false);


  
  // Fetch a single dataset from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Datasets", dataId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDataset({ id: docSnap.id, ...docSnap.data() });
          // setFormData({
          //   title: dataset.title || '',
          //   short_description: dataset.short_description || '',
          //   long_description: dataset.long_description || '',
          //   category: dataset.category || '',
          //   country: dataset.country || '',
          // });
        } else {
          console.log("No such document!");
          toast.error("Dataset not found.");
          navigate("/datasets"); // Redirect if dataset is not found, adjust as necessary
        }
      }  catch (error) {
        console.error("Error fetching dataset:", error);
        toast.error("Error fetching dataset.");
      }
    };

    if (dataId) {
      fetchData();
    }
  }, [dataId, navigate]);
   // Depend on datasetId, add navigate to dependency array if used for redirection
   const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


   const handleLike = async () => {
    const postDoc = doc(db, 'Datasets', dataId);
    const postSnapshot = await getDoc(postDoc);
    const postData = postSnapshot.data();

    // Check if the user has already liked the post
    if (!postData.likes) postData.likes = [];

    if (postData.likes?.includes(user?.uid)) {
        toast.error('We know the post is amazing. But you can only give one like');
        
        return;
    }

    // Add the user's ID to the likes array
    await updateDoc(postDoc, {
        likes: arrayUnion(user.uid)
    });

    // Update the local state
    setDataset({ ...dataset, likes: [...(dataset.likes || []), user.uid] });
   
};


const handleComment = async (event) => {
    event.preventDefault();
    const postDoc = doc(db, 'Datasets', dataId);
    const newComment = { text: comment, author: user?.displayName }; // The comment is now an object
    await updateDoc(postDoc, {
        comments: arrayUnion(newComment)
    });
    setDataset({ ...dataset, comments: [...(dataset.comments || []), newComment] });
    setOpen(false);
    toast.success('Comment added successfully');
    setComment('');
};

const handleDelete = async (dataId) => { 
    
    // Add this function
    try {
        await deleteDoc(doc(db, 'Datasets', dataId));

        // Remove the post from local state
        navigate('/datasets')
        toast.success('Post deleted successfully');
    } catch (error) {
        console.error("Error deleting post: ", error);
    }
}

// const handleEdit = async() => {
//   e.preventDefault();
//   setUpdating(true)
//   try {
     
//       const data = {...formData};
   
//       await updateDoc(doc(db, "Datasets", dataId), data);
     
      
      
//       setIsFormVisible(false)
//       toast.success("Dataset updated successfully")

//   } catch (error) {
//       console.log(error.message)
//       console.log(error.code)
//       // toast.error("Error updating profile")

// }
// }









// const {title, short_description, long_description, category, country} = formData;
// const handleChange = (e) => { 
//     setFormData((prev) => ({
//         ...prev,
//         [e.target.id]: e.target.value
//     }))
// }

// // Your form remains the same

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUpdating(true)
//     try {
       
//         const data = {...formData};
     
//         await updateDoc(doc(db, "Datasets", dataId), data);
       
        
        
//         // setOpen(false);
//         // toast.success("Profile updated successfully")

//     } catch (error) {
//         console.log(error.message)
//         console.log(error.code)
//         // toast.error("Error updating profile")
//     }finally {
//         toast.success("Dataset updated successfully")
//         setOpen(!open)
//     }
// }    

  // Conditional rendering based on the dataset state
  return (
    <div className='bg-inherit'>
      {dataset ? (
        <div className='dataset-container w-4/5 mx-auto flex flex-col'>
          <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row my-10 items-center justify-between gap-4">
          <p className="font-body-plex text-blue-gray-500 font-semibold text-xs">
              {dataset.author}
            </p>
            <p className="font-body-plex sm:flex-grow text-blue-gray-500 font-bold text-xs">
              {dataset.timeStamp && formatDate(dataset.timeStamp.seconds * 1000)}
            </p>
           
            <a href={dataset.file} target='_blank' rel='noreferrer' className='bg-teal-600 flex flex-row items-center shadow-lg text-white font-body-plex font-bold rounded-lg w-max px-4 py-[2px] '>
       <FontAwesomeIcon icon={faCloudArrowDown} /> Download
            </a>
            {
                user?.uid === dataset.user && (
                  <div className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faTrash} className='text-red-400 text-xl' onClick={() => handleDelete(dataset.id)} />
                    <FontAwesomeIcon icon={faPen} className='text-teal-500 text-xl' onClick={toggleFormVisibility} />
                    </div>
                )
            }
            </div>
            <p className="font-logo md:text-2xl sm:text-lg font-bold text-blue-gray-600">
{dataset.title}
            </p>
            <p className='font-bold text-xs font-body-plex text-blue-gray-600'>
              Collected in {dataset.country}
            </p>
           
           <div className="flex-flex-col my-10 items-center-justify-center">
            <p className="font-body-plex text-blue-gray-500 font-normal text-sm">
                {dataset.short_description}
              </p>
              <p className="font-body-plex text-blue-gray-500 font-normal text-sm">
                {dataset.long_description}
              </p>
           </div>
          </div>
        <hr  />
         
        

          <div className="flex flex-row my-10 bg-inherit border-[1px] border-blue-gray-100 gap-6 rounded-3xl mx-auto w-max px-4 py-2">
             <div className="flex flex-row gap-2">
                <FontAwesomeIcon onClick={handleLike} icon={faHeart} className=' text-2xl hover:text-red-300 text-blue-gray-400' />
           
            <p className='text-blue-gray-500'>{dataset.likes?.length || 0}</p>
            </div>       
            <div className="flex flex-row gap-2">
                <FontAwesomeIcon onClick={handleOpen} icon={faComment} className='hover:text-teal-400 text-2xl text-blue-gray-400' />
           
            <p className='text-blue-gray-500'>{dataset.comments?.length || 0}</p>
            </div>   
            </div>
          {/* Render additional dataset details here */}
          <div className='flex flex-col gap-6'>
                <p className="text-md font-bold font-body-plex text-blue-gray-600">
                    Comments
                </p>
                {dataset.comments && dataset.comments.map((comment, index) => (
                    <div className="flex flex-col font-body-plex text-sm text-blue-gray-600 " key={index}>
                    <p className='font-bold text-xs' >{comment.author}</p>
                    <p className='text-md '> {comment.text}</p>
                    </div>
                 
                ))}
            </div>
        </div>
      ) : (
        <p>Loading dataset...</p> // Adjust based on your loading state or preference
      )}
       <div className='bg-gray-50 flex flex-col gap-10'>
       <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-teal-50 h-[50%] shadow-none py-10"
      >
            <h2 className='text-lg font-bold text-center font-body-plex text-blue-gray-800'>Share your thoughts</h2>
       <form onSubmit={handleComment} className='bg-transparent flex flex-col align-middle my-[10%] w-1/2 mx-auto '>
                <textarea type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Leave your thoughts for the author" className='h-full bg-teal-50 font-body-plex text-xs' cols={30} />
                <button type="submit" className='rounded-full bg-teal-100 shadow-xl text-sm font-body-plex w-max px-8 py-2 font-semibold '>Comment</button>
            </form>
      </Dialog>
    
  
       <Footer /> 
     </div>
    </div>
  );
};

export default Dataset;
