import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../helpers/url';

export default function SinglePostPage() {
    const { id } = useParams();
    const [postData, setPostData] = useState({});
    const [commentData, setCommentData] = useState([]);
    const [height, setHeight] = useState('h-[210px]');
    const [render, setRender] = useState(false);

    let initialValues = {
        commentText: '',
    };

    const onSubmit = async(data) => {
        const sendComment = await axios.post(`${url}/comments/createcomment`, {...data, postId: id}, {headers: {token: localStorage.getItem('token')}});
        if (sendComment.data.error) {
            return alert('You need to be Logged In to comment a post!');
        }
        const allComments = await axios.get(`${url}/comments/${id}`);
        setCommentData(allComments.data);
        document.location.reload(true);
    };

    const validationSchema = Yup.object().shape({
        commentText:Yup.string().required('A text is required').min(3).max(200),
        });
        
    const getData = async (id) => {
        const post = await axios.get(`${url}/posts/getsingle/${id}`);
        setPostData(post.data);
        const comments = await axios.get(`${url}/comments/${id}`);
        setCommentData(comments.data);
    };

    const verifyHeight = async (post) => {
        if (post.postText.length <= 155) {
             setHeight('h-[210px]');
        };
        if (post.postText.length > 155 && post.postText.length <= 310) {
            setHeight('h-[310px]');
        };
        if (post.postText.length > 310 && post.postText.length <= 410) {
             setHeight('h-[340px]');
         };
         if (post.postText.length > 410 && post.postText.length < 510) {
             setHeight('h-[400px]');
         };
    };

    useEffect(() => {
        getData(id);
        if(postData !== {}) {
            verifyHeight(postData);  
        };
        setRender(true);
    }, []);

  return (
      <div className='w-full h-screen z-0 bg-neutral-100'>
        <div className='w-full h-auto bg-neutral-100 flex justify-center absolute top-[120px]'>
            <div className='w-[40%] h-full'>
                {/* Post area */}
                    <div className={`w-full ${height} flex justify-end items-end hover:justify-start hover:items-start mb-8`}>
                        <div className=' transition ease-in delay-10 w-[99%] h-[98%] border-2 rounded-md shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_10px_0px_rgba(0,0,0,0.3)] bg-white'>
                            <div className='w-full h-full flex flex-col justify-between'>
                                <div className='px-2'>
                                    <div className='border-b-2 border-neutral-300 flex justify-between items-center py-1'>
                                        <h1 className='text-3xl font-bold truncate ...'>{postData.postTitle}</h1>
                                        <div className='bg-yellow-400 rounded-full p-2'>
                                            <h1 className=' text-xl font-bold'>{'</>'}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-6 py-3 w-full h-full flex items-center'>
                                    <p className='text-xl break-all'>{postData.postText}</p>
                                </div>
                                <div className='bg-yellow-400 h-[70px] rounded-b-sm flex items-center justify-end px-5'>
                                    <h2>By: {postData.username}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comments area */}
                    {/* <div className='flex flex-col items-center my-10'>
                        <h1>COMMENTS:</h1>
                        <div className='w-full border-2 border-neutral-300 rounded-md bg-white p-3'>
                            {comments.map((singleComment) => (
                                <div className='w-full border-2 border-neutral-300 mb-5 rounded-md'>
                                    <div>
                                        <h1 className='p-3'>{singleComment.commentText}</h1> 
                                    </div>
                                    <div className='bg-yellow-400 w-full h-[30px] flex justify-between items-center px-5'>
                                        {username === singleComment.username && (
                                            <h1 
                                            className='bg-black text-white rounded-md px-3' 
                                            onClick={() => {deleteComment(singleComment.id)}}
                                            >Delete
                                            </h1>
                                        )}
                                        <h1>By: {singleComment.username}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    {/* Create a Comment area */}
                    <div className='flex items-center flex-col'>
                        <h1>Create a comment:</h1>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form className='flex flex-col'>
                                <ErrorMessage component='span' name='commentText'/>
                                <label htmlFor="commentText"> Comment: 
                                    <Field type='text' name='commentText' placeholder='Your comment here...'></Field>
                                </label>
                                <button className='bg-blue-600' type='submit'>Create Comment</button>
                            </Form>
                        </Formik>
                    </div>
            </div>
        </div>
      </div>
  )
}
