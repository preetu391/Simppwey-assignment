import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newpage from './/components/Newpage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Navbar/>} />
       <Route path="/card/:id" element={<Newpage/>} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


