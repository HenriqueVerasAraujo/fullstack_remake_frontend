import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import url from '../helpers/url';
import { useNavigate } from 'react-router-dom';

export default function SinglePost({ title, text, username, postId, deletePost }) {
    const [height, setHeight] = useState('h-[210px]');
    const navigate = useNavigate();
    const loggedUsername = localStorage.getItem('username');

    const verifyHeight = () => {
        if (text.length <= 155) {
            return setHeight('h-[210px]');
        };
        if (text.length > 155 && text.length <= 310) {
           return setHeight('h-[310px]');
        };
        if (text.length > 310 && text.length <= 410) {
            return setHeight('h-[340px]');
         };
         if (text.length > 410 && text.length < 510) {
            return setHeight('h-[400px]');
         };
    };

    useEffect(() => {
        verifyHeight();
    }, [])

    return (
        <div className={`w-full ${height} flex justify-end items-end hover:justify-start hover:items-start mb-8`}>
          <div className='transition ease-in delay-10 w-[99%] h-[98%] border-2 z-10 rounded-md shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.3)] bg-white'>
              <div className='w-full h-full flex flex-col justify-between'>
                  <div className='px-2'>
                      <div className='border-b-2 border-neutral-300 flex justify-between items-center py-1'>
                          <h1 className='text-3xl font-bold truncate ...'>{title}</h1>
                          <div className='bg-yellow-400 rounded-full p-2'>
                              <h1 className=' text-xl font-bold'>{'</>'}</h1>
                          </div>
                      </div>
                  </div>
                      <div onClick={() => navigate(`/posts/${postId}`)} className='px-6 py-3 w-full h-full flex items-center hover:cursor-pointer'>
                          <p className='text-xl break-all'>{text}</p>
                      </div>
                  <div className='bg-yellow-400 h-[70px] rounded-b-sm flex items-center justify-end px-5'>
                      <div className='flex justify-center items-center'>
                          {username === loggedUsername && (
                              <button className='bg-black text-white' type='button' onClick={ ()=>{ deletePost(postId) } }>DELETE</button>
                          )}
                          {/* {likeStatus ? (
                              <button type='button' onClick={likeFunction}>
                                  <ThumbFull className='w-6'/>
                              </button>
                              ) : (
                              <button type='button' onClick={likeFunction}>
                                  <ThumbUpIcon className='w-6'/>
                              </button>
                          )}
                          <h2 className='mr-7 ml-1 text-xl font-bold'> {likesNumber}</h2> */}
                      </div>
                      <div className='flex justify-center items-center'>
                          <h2>By:</h2>
                          <h2 className='hover:text-white cursor-pointer ml-1'>{username}</h2>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
}
