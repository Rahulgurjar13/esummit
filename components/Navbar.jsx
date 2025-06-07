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
      {/* Desktop, Tablet, and Large Mobile Navbar (768px and up) */}
      <div className="hidden md:block mx-auto max-w-7xl border border-gray-800 rounded-full bg-black bg-opacity-20 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 my-2 sm:my-4">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="relative group">
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
              <img
                src="/images/SPARK E-CELL.png"
                className="h-8 w-12 sm:h-10 sm:w-16 lg:h-12 lg:w-20 relative transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                alt="spark Logo"
              />
            </Link>
          </div>
          
          {/* Navigation Links - Responsive spacing and sizing */}
          <div className="flex items-center justify-center flex-1 px-4">
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="group relative py-1 whitespace-nowrap"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive(item.path) 
                      ? 'text-white' 
                      : 'text-gray-400 group-hover:text-white'
                  } text-xs sm:text-sm lg:text-base xl:text-base`}>
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-70'
                  }`} />
                  <span className="absolute -inset-1 sm:-inset-2 rounded-lg bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Register Button - Responsive sizing */}
          <div className="flex-shrink-0">
            <a
              href="https://lu.ma/2risnlos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded-full border border-gray-700 hover:border-white transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
                <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
              </svg>
              <span className="relative z-10 group-hover:font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base">
                Register
              </span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar (below 768px) */}
      <div className="md:hidden mx-2 sm:mx-4 border border-gray-800 rounded-2xl bg-black bg-opacity-20 backdrop-blur-sm px-3 sm:px-4 py-2 my-2">
        <div className="flex justify-between items-center">
          {/* Mobile Logo */}
          <Link to="/" className="relative flex-shrink-0">
            <img
              src="/images/SPARK E-CELL.png"
              className="h-6 w-10 sm:h-8 sm:w-12"
              alt="spark Logo"
            />
          </Link>

          {/* Mobile Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Register Button */}
            <a
              href="https://lu.ma/2risnlos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-700 hover:border-white transition-all duration-300"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" />
                <path d="M10 12C6.68629 12 4 14.6863 4 18H16C16 14.6863 13.3137 12 10 12Z" />
              </svg>
              <span className="text-xs sm:text-sm">Register</span>
            </a>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
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
        {isMenuOpen && (
          <div className="mt-3 pb-2 pt-1 border-t border-gray-800 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              {navLinks.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-200 ${
                    isActive(item.path) 
                      ? 'bg-gray-800 text-white shadow-sm' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                  } text-sm sm:text-base`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;