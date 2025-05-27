import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Ocelot Foods Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900 ml-2">Ocelot Foods</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-emerald-600">Products</Link>
            <Link to="/blog" className="text-gray-600 hover:text-emerald-600">Blog</Link>
            <Link to="/our-story" className="text-gray-600 hover:text-emerald-600">Our Story</Link>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/our-story"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
