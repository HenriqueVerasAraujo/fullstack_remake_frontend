import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
 <BrowserRouter>
 <NavBar />
  <Routes>
    <Route exact path="/" element={ <Home /> } />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
