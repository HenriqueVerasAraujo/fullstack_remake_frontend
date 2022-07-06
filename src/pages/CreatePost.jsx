import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import url from '../helpers/url';

export default function CreatePost() {
	const navigate = useNavigate();

	const initialValues = {
		postTitle:'',
		postText:'',
	};

	const onSubmit = async (data) => {
		const newPost = await axios.post(`${url}/posts/createpost`, data, {headers: {token: localStorage.getItem('token')}});
		if (newPost.data.error) {
			return alert('You need to be logged in to create a Post!')
		}
		return navigate('/');
	};

	const validationSchema = Yup.object().shape({
		postTitle:Yup.string().required('A Title is required').min(3).max(40),
		postText:Yup.string().required('A Post Message is required').min(2).max(500),
	});
	
	return (
		<div className='absolute top-[120px]'>
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<div>
							<Form className='flex flex-col w-[500px] mt-10'>
									<label className='text-2xl' htmlFor="postTitle">Title: </label>
									<ErrorMessage component='span' name='postTitle'/>
									<Field className='mb-5 text-2xl' name='postTitle'  placeholder="Your title here..."/>
									
									<label className='text-2xl' htmlFor="postText">Post Message: </label>
									<ErrorMessage component='span' name='postText'/>
									<Field as="textarea" name='postText' className="mb-5 text-2xl w-full h-[100px] resize-none" />
									<button className='bg-blue-300' type='submit'>Confirm</button>
							</Form>
					 </div>
			</Formik>
	</div>
	)
}
