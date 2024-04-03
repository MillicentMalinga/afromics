import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc, query, orderBy, limit} from "firebase/firestore";
import { db } from "../firebaseConfig"; // import your Firebase config file
import { Link } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';
import HeroResearch from '../components/HeroResearch';
import Footer from '../components/Footer';
import { CarouselBlog } from '../components/CarouselBlog';

function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [topPosts, setTopPosts] = useState([]);


    useEffect(() => {
        async function fetchBlogPosts() {
            const blogPostsCollection = collection(db, 'blogPosts');
            const blogPostsSnapshot = await getDocs(blogPostsCollection);
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


    useEffect(() => {
        async function fetchTopPosts() {
            const postsQuery = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(3));
            const postsSnapshot = await getDocs(postsQuery);
            const posts = postsSnapshot.docs.map(doc => doc.data());
            setTopPosts(posts);
        }

        fetchTopPosts().catch(console.error);
    }, []);


    return (
        <div>
            <HeroResearch />
           {topPosts && <CarouselBlog carouselData={topPosts}/>}

            <div className="grid lg:grid-cols-3 my-10 w-4/5 mx-auto sm:grid-cols-1 gap-9">
            {blogPosts.map((post, index) => (
                <Link to={`/blogs/${post.id}`} key={index}>
                    <BlogCard  title={post.title} img={post.image} author={post.authorName} likes={post.likes?.length || 0} 
                 body={post.content.blocks.length > 0 && (
                        <div>
                            <h3>{post.content.blocks[0].subtitle}</h3>
                            <p className='text-clip h-20'>{post.content.blocks[0].text}</p>
                        </div>
                    )}
                    
                    />
                   
                </Link>
            ))}
            </div>
            <Footer />
        </div>
    );
}

export default BlogPosts;
