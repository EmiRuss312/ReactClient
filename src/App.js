import './App.css'; 
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';
 
function App() { 
  return ( 
    <div> 
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div> 
  ); 
} 
 
export default App;
