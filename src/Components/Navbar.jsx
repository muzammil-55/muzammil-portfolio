import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide React for icons

const Navbar = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the name is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  // Close the mobile menu on window resize for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is Tailwind's 'md' breakpoint
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 p-4 px-8">
      {/* Name and Popup for desktop */}
      <div className="relative">
        <a
          href="#home"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Muzammil Khan
        </a>
        <div className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-2 w-54 p-4 
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
      </div>

      {/* Hamburger menu button for mobile screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop navigation links */}
      <ul className="hidden md:flex justify-center space-x-8 font-semibold text-gray-700">
        <li><a href="#home" className="hover:text-blue-600 transition-colors duration-300">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition-colors duration-300">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600 transition-colors duration-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition-colors duration-300">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-600 transition-colors duration-300">Experience</a></li>
        <li><a href="#education" className="hover:text-blue-600 transition-colors duration-300">Education</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a></li>
      </ul>

      {/* Mobile menu (conditionally rendered) */}
      <div className={`
        md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}
      `}>
        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-semibold">
          <li><a href="#home" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">About</a></li>
          <li><a href="#skills" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Skills</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Projects</a></li>
          <li><a href="#experience" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Experience</a></li>
          <li><a href="#education" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Education</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-600 transition-colors duration-300 block w-full text-center">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;