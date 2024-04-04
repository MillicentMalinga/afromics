import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc, query, orderBy} from "firebase/firestore";
import { db } from "../firebaseConfig"; // import your Firebase config file
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import BlogCardDesign from '../components/BlogCardDesign';
import formatDate  from '../components/formatDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomNav from '../components/CustomNav';
import {  faPen} from '@fortawesome/free-solid-svg-icons';



function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);
    // Add this line

    useEffect(() => {
        async function fetchBlogPosts() {
            const blogPostsCollection = collection(db, 'blogPosts');
            const q = query(blogPostsCollection, orderBy("createdAt", "desc")); // Order by createdAt
            const blogPostsSnapshot = await getDocs(q);
            const posts = blogPostsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
            // Fetch author's displayName for each post
            for (let post of posts) {
                const userSnapshot = await getDoc(doc(db, 'users', post.author));
                const userData = userSnapshot.data();
                post.authorName = userData.displayName;
            }
    
            setBlogPosts(posts);
        }
    
        fetchBlogPosts().catch(console.error);
    }, []);
    

   


    return (
        <div className='bg-white'>
            <CustomNav />
            <div className=" h-[60vh] justify-center bg-image items-start w-4/5 mx-auto flex flex-col " >
                <Link to="/blogs/new" className="flex flex-row gap-4">
                <div className='border-[1px] border-blue-gray-50 rounded-full bg-zinc-200 text-blue-gray-500 font-body-plex text-xs font-semibold px-4 py-2'>
Share your thoughts


                </div>
             
                    
                    <FontAwesomeIcon icon={faPen} className='font-bold text-teal-800 font-body-plex py-2 text-xs' />
               
                </Link>

                <div className='flex flex-col justify-center  content-center align-middle place-content-center'>
                    <p className='sm:text-lg lg:text-4xl text-teal-400 font-body-plex font-semibold text-center'>
                        Get the latest research and insights from our blog
                    </p>
                </div>
                
                   
                <p className="text-xs font-normal text-teal-600 font-body-plex">
                 We have a collection of articles on various topics. You can also contribute to our blog by sharing your research and insights.
                </p>

            </div>

        
<div className='h-full'>
  
{/* <div className="grid grid-cols-6 w-4/5 gap-4 mx-auto">
    {
        tags.map((tag, index) => (
            <div key={index}  className={`border-blue-gray-50 border-[1px] px-4 cursor-pointer py-2 rounded-full text-xs font-body-plex font-semibold text-blue-gray-500`}>
                {tag} 
            </div>
        ))
    
    }

      
</div> */}

            <div className="my-4 w-4/5 flex flex-col gap-10  mx-auto h-[50%]">
            {blogPosts.map((post, index) => (
                <Link to={`/blogs/${post.id}`} key={index}>
                    <BlogCardDesign  title={post.title} category={post.category || 'other'} img={post.image} date={formatDate(post.createdAt)} author={post.authorName || 'Admin'} likes={post.likes?.length || 0} 
                 body={post.content.blocks.length > 0 && (
                        <div>
                            <h3>{post.content.blocks[0].subtitle}</h3>
                            <p className='text-clip h-20'>{post.content.blocks[0].text}</p>
                        </div>
                    )}
                    
                    />
                           <hr className='w-full mx-auto my-10 border-[1px] border-teal-500' />

                </Link>

            ))}
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default BlogPosts;
