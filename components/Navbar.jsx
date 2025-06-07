import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if link is active
  const isActive = (path) => location.pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links data
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/Events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/agenda", label: "Agenda" },
    { path: "/Speakers", label: "Speakers" },
    { path: "/contact-us", label: "Contact us" },
    { path: "/sponsor", label: "Our sponsor" },
    { path: "/spark", label: "Spark" }
  ];

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <div className="hidden md:block mx-auto max-w-7xl border border-gray-800 rounded-full bg-black bg-opacity-20 backdrop-blur-sm px-8 py-2 my-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="relative group">
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
              <img
                src="/images/SPARK E-CELL.png"
                className="h-12 w-20 relative transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                alt="spark Logo"
              />
            </Link>
          </div>
          
          <div className="flex items-center lg:space-x-8 md:space-x-6">
            {navLinks.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="group relative py-1"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(item.path) 
                    ? 'text-white' 
                    : 'text-gray-400 group-hover:text-white'
                } lg:text-base md:text-sm`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-70'
                }`} />
                <span className="absolute -inset-2 rounded-lg bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>
          
          <a
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center px-5 py-2 rounded-full border border-gray-700 hover:border-white transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <svg
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
              <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
            </svg>
            <span className="relative z-10 group-hover:font-medium transition-all duration-300">Register</span>
          </a>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden mx-3 sm:mx-4 border border-gray-800 rounded-2xl bg-black bg-opacity-20 backdrop-blur-sm px-3 sm:px-4 py-3 my-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative flex-shrink-0">
            <img
              src="/images/SPARK E-CELL.png"
              className="h-10 sm:h-12 w-auto"
              alt="spark Logo"
            />
          </Link>

          {/* Mobile Register Button and Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-200 whitespace-nowrap min-h-[42px] sm:min-h-[48px] touch-manipulation"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
                <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
              </svg>
              <span className="font-medium">Register</span>
            </a>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-3 pt-3 border-t border-gray-800">
            <nav className="flex flex-col space-y-1 max-h-[400px] overflow-y-auto">
              {navLinks.map((item, index) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-sm sm:text-base font-medium ${
                    isActive(item.path) 
                      ? 'bg-gray-800 text-white shadow-sm' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                  } transition-all duration-200 min-h-[44px] flex items-center touch-manipulation`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <span className="flex items-center w-full">
                    {item.label}
                    {isActive(item.path) && (
                      <svg className="w-4 h-4 ml-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </Link>
              ))}
            </nav>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;