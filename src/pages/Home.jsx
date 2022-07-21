import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import url from '../helpers/url';
import myContext from '../context/myContext';
import SinglePost from '../components/SinglePost';

export default function Home() {
  const {allPosts, setAllPosts} = useContext(myContext);
  const [renderPosts, setRenderPosts] = useState(false);

  const getPosts = async() => {
    const fetchPosts = await axios.get(`${url}/posts/getall`);
    setAllPosts(fetchPosts.data);
  };

  const deletePost = async (postId) => {
    const filteredList = allPosts.filter((post) => post.id !== Number(postId));
    axios.delete(`${url}/posts/delete/${postId}`);
    setAllPosts(filteredList);
  }

  useEffect(() => {
    if (allPosts.length === 0) {
      getPosts();
      setRenderPosts(true);
    }
  }, []);

  useEffect(() => {
      getPosts();
      setRenderPosts(true);
    
  }, []);

  return (
    <div className='w-full h-screen bg-neutral-100'>
      <div className='w-full h-auto flex justify-center absolute top-[120px] z-0 bg-neutral-100'>
        <div className='lg:w-[40%] w-[80%] flex flex-col'>
          {renderPosts && (allPosts.map((singlePost) => (
            <SinglePost 
            title={singlePost.postTitle}
            text={singlePost.postText}
            postId={singlePost.id}
            username={singlePost.username}
            deletePost={deletePost}
            likes={singlePost.Likes}
            />
          )))}
        </div>
      </div>
    </div>
  )
};
