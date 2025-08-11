import React from 'react'
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Muzammil Khan. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer