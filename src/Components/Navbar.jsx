import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  // State to track if the name is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex justify-around fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 p-4">
      <ul className="flex justify-center space-x-6 sm:space-x-12 font-semibold text-gray-700">
        <li className="relative">
          <a
            href="#home"
            className="text-xl font-bold hover:text-blue-600 transition-colors duration-300"
            // Event handlers to show/hide the popup
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Muzammil Khan
          </a>
          {/* The popup is conditionally rendered based on the hover state */}
          <div className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-4 
            bg-white rounded-lg shadow-xl text-sm z-50 text-left 
            border border-gray-200 transition-all duration-300 
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
          `}>
            <h4 className="font-bold text-blue-600">Muzammil Khan</h4>
            <p className="mt-1 text-gray-800">Full Stack MERN Developer</p>
            <p className="mt-1 text-gray-800">Machine Learning Enthusiast</p>
            <p className="mt-1 text-gray-800">B.E. (CSE) Graduate</p>
            <p className="mt-1 text-gray-800 font-medium">Email: <span className="font-normal">muzammil092000@gmail.com</span></p>
          </div>
        </li>
      </ul>

      <ul className="flex justify-center space-x-6 sm:space-x-12 font-semibold text-gray-700">
        <li><a href="#home" className="hover:text-blue-600 transition-colors duration-300">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition-colors duration-300">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600 transition-colors duration-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition-colors duration-300">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-600 transition-colors duration-300">Experience</a></li>
        <li><a href="#education" className="hover:text-blue-600 transition-colors duration-300">Education</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar