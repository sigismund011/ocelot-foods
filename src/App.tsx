import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Story from './pages/Story';
import About from './pages/About';
import Contact from './pages/Contact';
import GrainOfSelim from './pages/GrainOfSelim';
import Cloves from './pages/Cloves';
import GingerPowder from './pages/GingerPowder';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grain-of-selim" element={<GrainOfSelim />} />
          <Route path="/cloves" element={<Cloves />} />
          <Route path="/ginger-powder" element={<GingerPowder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;