import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onJobClick, onInterviewClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-100 to-orange-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-11 w-11 object-contain" />
            <span className="text-lg font-semibold text-gray-700">Jobvisitors</span>
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <Link to="/" className="text-orange-600">Home</Link>
            <span onClick={onJobClick} className="text-gray-700 hover:text-orange-600 cursor-pointer">Job</span>
            <span onClick={onInterviewClick} className="text-gray-700 hover:text-orange-600 cursor-pointer">Interview Prepration</span>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About us</Link>
          </div>

          <div className="hidden md:block">
          <button> <a href='https://www.instagram.com/jobvisitors'  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 w-16">Contact Us </a> </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-right">
          <div onClick={onJobClick} className="text-gray-700 hover:text-orange-600 cursor-pointer">Jobs</div>
          <div onClick={onInterviewClick} className="text-gray-700 hover:text-orange-600 cursor-pointer">Interview Prepration</div>
          <Link to="/about" className="text-gray-700 hover:text-orange-600 block">About us</Link>
        <button> <a href='https://www.instagram.com/jobvisitors'  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 w-16">Contact Us </a> </button> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
