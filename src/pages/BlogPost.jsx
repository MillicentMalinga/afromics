import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // import your Firebase config file
import { UserAuth } from '../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faComment, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dialog, } from "@material-tailwind/react";
import Footer from '../components/Footer';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { toast } from 'react-toastify';
import BlogCardDesign from '../components/BlogCardDesign';


function BlogPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState('');
    const [open, setOpen] = React.useState(false);
    const [topPosts, setTopPosts] = useState([]);
    const handleOpen = () => setOpen((cur) => !cur);
    const navigate  = useNavigate();
const {user} = UserAuth();
    useEffect(() => {
        async function fetchBlogPost() {
            const postDoc = doc(db, 'blogPosts', postId);
            const postSnapshot = await getDoc(postDoc);
            const postData = postSnapshot.data();
            postData.id = postSnapshot.id;
            // Fetch author's displayName
            const userSnapshot = await getDoc(doc(db, 'users', postData.author));
            const userData = userSnapshot.data();
            postData.authorName = userData.displayName;
           
                  
        
            // Fetch comment authors' displayNames
            if(!postData.comments) postData.comments = [];
            if (Array.isArray(postData.comments)) {
                for (let comment of postData.comments) {
                    const commentAuthorSnapshot = await getDoc(doc(db, 'users', comment.author));
                    const commentAuthorData = commentAuthorSnapshot.data();
                    comment.authorName = commentAuthorData?.displayName;
                }
            
            }
           
        
            setPost(postData);
        }
        

        fetchBlogPost().catch(console.error);
    }, [postId]);

    useEffect(() => {
        async function fetchTopPosts() {
            const postsQuery = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(3));
            const postsSnapshot = await getDocs(postsQuery);
            const posts = postsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

             // Fetch author's displayName for each post
             for (let post of posts) {
                const userSnapshot = await getDoc(doc(db, 'users', post.author));
                const userData = userSnapshot.data();
                post.authorName = userData.displayName;
            }
            setTopPosts(posts);
        }

        fetchTopPosts().catch(console.error);
    }, []);


    const handleLike = async () => {
        const postDoc = doc(db, 'blogPosts', postId);
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
        setPost({ ...post, likes: [...(post.likes || []), user.uid] });
    };
    

    const handleComment = async (event) => {
        event.preventDefault();
        const postDoc = doc(db, 'blogPosts', postId);
        const newComment = { text: comment, author: user?.displayName }; // The comment is now an object
        await updateDoc(postDoc, {
            comments: arrayUnion(newComment)
        });
        setPost({ ...post, comments: [...(post.comments || []), newComment] });
        setOpen(false);
        toast.success('Comment added successfully');
        setComment('');
    };

    const handleDelete = async (postId) => { 
        
        // Add this function
        try {
            await deleteDoc(doc(db, 'blogPosts', postId));

            // Remove the post from local state
            navigate('/blogs')
            toast.success('Post deleted successfully');
        } catch (error) {
            console.error("Error deleting post: ", error);
        }
    }

    function formatDate(isoString) {
        let date = new Date(isoString);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    }
    

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-gray-50 mt-10 flex flex-col gap-10'>
         
            <div className="flex flex-col">
            
            <img src={post.image} alt={post.title} className='h-1/4 shadow-2xl rounded-full w-1/4 place-self-center object-cover'/>
            
            {user?.uid === post.author && ( // Add this conditional rendering
                        <div className='place-self-center flex flex-row gap-4 mt-4'>
                            <button onClick={() => handleDelete(post.id)}><FontAwesomeIcon icon={faTrash} className='text-red-500' /></button>
                           
                            {/* <button>
                                <Link to={`/blogs/edit/${post.id}`}>
                                    <FontAwesomeIcon icon={faPen} className='text-teal-600' />
                                </Link>
                            </button> */}
                        </div>
                    )}
            <div className="w-4/5 mx-auto my-4">

            <h2 className='font-logo text-2xl text-center'>{post.title}</h2>
            <div className="flex flex-row justify-center gap-4 text-blue-gray-400 font-body-plex">
            <p className='text-md font-semibold'>Written by: {post.authorName}</p>
              <span className='flex flex-row gap-2 text-md '>

          <p>{formatDate(post.createdAt)}</p>
              </span>
              
            
            
            </div>
            <div>
                {post.content.blocks.map((block, index) => (
                    <div className='flex flex-col font-body-plex text-blue-gray-800 gap-2 my-8' key={index}>
                        <h3 className='text-lg font-bold '>{block.subtitle}</h3>
                        <p className='text-sm font-normal'>{block.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row bg-inherit border-[1px] border-blue-gray-100 gap-6 rounded-3xl mx-auto w-max px-4 py-2">
             <div className="flex flex-row gap-2">
                <FontAwesomeIcon onClick={handleLike} icon={faHeart} className=' text-2xl text-blue-gray-400' />
           
            <p className='text-blue-gray-500'>{post.likes?.length || 0}</p>
            </div>       
            <div className="flex flex-row gap-2">
                <FontAwesomeIcon onClick={handleOpen} icon={faComment} className=' text-2xl text-blue-gray-400' />
           
            <p className='text-blue-gray-500'>{post.comments?.length || 0}</p>
            </div>   
            </div>
            <div className='flex flex-col gap-6'>
                <p className="text-md font-bold font-body-plex text-blue-gray-600">
                    Comments
                </p>
                {post.comments && post.comments.map((comment, index) => (
                    <div className="flex flex-col font-body-plex text-sm text-blue-gray-600 " key={index}>
                    <p className='font-bold text-xs' >{comment.author}</p>
                    <p className='text-md '> {comment.text}</p>
                    </div>
                 
                ))}
            </div>
           
            </div>
            </div>
           
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
           <div className="w-4/5 mx-auto gap-4 my-10">
            <h2 className='text-lg font-bold font-body-plex text-blue-gray-600 text-left my-10'>Top Posts</h2>
        <div className="flex flex-col  gap-4 ">
            {topPosts.map((post, index) => (
                <Link to={`/blogs/${post.id}`} key={index}>
                <BlogCardDesign key={index} img={post.image} category={post.category || 'other'} title={post.title} body={post.content.blocks.length > 0 && (
                    <div>
                        <h3>{post.content.blocks[0].subtitle}</h3>
                        <p className='text-clip h-20'>{post.content.blocks[0].text}</p>
                    </div>
                )} author={post.authorName || 'Admin'} date={formatDate(post.createdAt)} likes={post.likes?.length || 0} />
           </Link>
           ))}
            
        </div>
        </div>
          <Footer /> 
        </div>
    );
}

export default BlogPost;
