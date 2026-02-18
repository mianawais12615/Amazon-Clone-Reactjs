import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from '../Pages/ContactUs/Contact.jsx';
import Blog from '../Pages/Blog/Blog.jsx';
import Sell from '../Pages/Sell/Sell.jsx';



createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Sell" element={<Sell />} />
    </Routes>
  </BrowserRouter>,
)
