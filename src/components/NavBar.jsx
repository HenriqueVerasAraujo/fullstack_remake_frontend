import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='w-full h-[70px] bg-gradient-to-b bg-yellow-500 fixed z-10 border-b-4 border-black shadow-xl'>
      <div className='w-full h-full flex items-center px-10 justify-between'>
      <div className='flex text-zinc-800 text-3xl font-bold'>
            <h1 className='mr-5 text-4xl'>{`</>`}</h1>
          <Link to='/'>
            <h1 className='mr-5'>Home</h1>
          </Link>
          <Link to='/newpost'>
            <h1>Create Post</h1>
          </Link>
        </div>
        <div className='flex text-zinc-800 text-3xl font-bold justify-items-center'>
          <Link to='/login'>
            <h1 className='mr-5'>Login</h1>
          </Link>
          <Link to='createuser'>
          <h1>Create User</h1>
          </Link>
        </div>
      </div>
    </div>
  )
};
