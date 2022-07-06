import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';

export default function NavBar() {
  const { displayUsername, setDisplayUsername } = useContext(myContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const verifyLogin = () => {
    if (displayUsername !== '') {
      setLoggedIn(true);
    }
    const localStorageUsername = localStorage.getItem('username');
    if (localStorageUsername) {
      setDisplayUsername(localStorageUsername);
      setLoggedIn(true);
    }
  }
  const LogOutFunction = () => {
    localStorage.clear();
    setLoggedIn(false);
    setDisplayUsername('');
    navigate('/');
    window.location.reload();
  }
  useEffect(() => {
    verifyLogin();
  }, [displayUsername]);

  return (
    <div className='w-full h-[70px] bg-gradient-to-b bg-yellow-500 fixed z-10 border-b-4 border-black shadow-xl'>
      <div className='w-full h-full flex items-center px-10 justify-between'>
      <div className='flex text-zinc-800 text-3xl font-bold'>
            <h1 className='mr-5 text-4xl'>{`</>`}</h1>
          <Link to='/'>
            <h1 className='mr-5'>Home</h1>
          </Link>
          <Link to='/createpost'>
            <h1>Create Post</h1>
          </Link>
        </div>
        { !loggedIn ? (
          <div className='flex text-zinc-800 text-3xl font-bold justify-items-center'>
          <Link to='/login'>
            <h1 className='mr-5'>Log In</h1>
          </Link>
          <Link to='createuser'>
          <h1>Sign Up</h1>
          </Link>
        </div>
        ) : (
          <div className='flex text-zinc-800 text-3xl font-bold justify-items-center'>
            <h1 className='mr-5'>{ displayUsername }</h1>
          <h1 onClick={LogOutFunction} >Log Out</h1>
        </div>
        ) }
      </div>
    </div>
  )
};
