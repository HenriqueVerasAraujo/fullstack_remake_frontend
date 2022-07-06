import myContext from "./myContext";
import React, { useState } from 'react';

export default function provider({ children }) {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [displayUsername, setDisplayUsername] = useState('');

const contextValue = {
  displayUsername,
  setDisplayUsername,
};

  return (
    <myContext.Provider value = { contextValue }>
      { children }
    </myContext.Provider> 
  )
}