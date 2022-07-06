import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import CreateUser from './pages/CreateUser';

function App() {
  return (
 <BrowserRouter>
 <NavBar />
  <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route exact path="/createuser" element={ <CreateUser/> } />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
