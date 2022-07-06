import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';

function App() {
  return (
 <BrowserRouter>
 <NavBar />
  <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route exact path="/createuser" element={ <CreateUser/> } />
    <Route exact path="/login" element={ <Login/> } />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
