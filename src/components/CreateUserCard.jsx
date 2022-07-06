import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import url from '../helpers/url';

export default function CreateUserCard() {
	const initialValues = {
		username:'',
		password:'',
	};

	const onSubmit = () => {
	
	}

	const validationSchema = Yup.object().shape({
		username:Yup.string().required('A Username is required').min(3).max(30),
		password:Yup.string().required('A Password is required').min(3, 'The Password must have min. of 3 caracters').max(15),
		});


  return (
    <div className='w-[1100px] h-[700px] mt-8 bg-yellow-400 flex items-center justify-between border-2 border-neutral-300 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]'>
			<div className='w-[40%] h-full bg-black'></div>
			<div className='w-[60%] h-full bg-white flex flex-col'>
				<div className='w-full h-[15%] bg-yellow-400 border-b-4 border-neutral-800 flex justify-center items-center'>
							<h1 className='text-5xl font-bold'>Sign Up</h1>
				</div>
				<div className='w-full h-[85%] bg-white flex flex-col items-center'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <div className='flex flex-col w-[80%] h-[50%] mt-10'>
                        <Form className='flex flex-col'>
                            <label className='text-xl' htmlFor="username">Username: </label>
                            <ErrorMessage component='span' className='text-red-700' name='username'/>
                            <Field className='mb-5 border-2 rounded-md text-2xl' name='username'  placeholder="Ex. MyUserName"/>
                            
                            <label className='text-xl' htmlFor="password">Password: </label>
                            <ErrorMessage component='span' className='text-red-700' name='password'/>
                            <Field className='mb-5 border-2 rounded-md text-2xl'type='password' name='password' placeholder="Password must have 3-15 caracters."/>
                            <button className='bg-black text-white border-black border-2 font-bold rounded-md h-10 hover:bg-yellow-400 hover:text-black cl' type='submit'>CREATE ACCOUNT</button>
                        </Form>
                        {/* <div className='flex justify-center mt-5 text-xl'>
                            {render && (
                                <h1>{message}</h1>
                            )}
                        </div> */}
                    </div>
                </Formik>
                <div className='flex'>
                    <h1>Already have an account?</h1>
										<Link to='/login'>
                    	<h1 className='text-blue-500 ml-2'>Click here to Log in!</h1>
										</Link>
                </div>
            </div>
			</div>
    </div>
  )
}
