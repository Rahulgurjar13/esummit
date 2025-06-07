// components/herosection.jsx
import React from 'react';

// Button component defined in the same file
const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  onClick, 
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded border transition-colors duration-200 font-medium";
  
  const variantClasses = {
    default: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    outline: "bg-transparent border-current hover:bg-current hover:bg-opacity-10"
  };
  
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <button 
      className={finalClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Hero component
const Hero = ({ setShowRegisterForm }) => {
  const scrollToTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="flex justify-center mt-10 sm:mt-20 mb-4 sm:mb-6">
        <div className="rounded-lg p-2 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <img
            src="/images/4.0.png"
            alt="Startup Hub"
            className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px] h-auto"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img
            src="https://www.bennett.edu.in/wp-content/uploads/2019/10/Bennett-University-logo1-.png"
            alt="Bennett University"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      <p className="text-white mb-2 text-sm sm:text-base">Presents Bennett University</p>
      
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4">
        E-SUMMIT'25
      </h1>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mb-6 sm:mb-8 font-light tracking-wider">
        Innovation Meets Opportunity
      </h2>
      
      <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">21st November - 23rd November</p>

     
      {/* Hero Partners */}
      <div className="mt-6 sm:mt-8 flex justify-center items-center space-x-2">
        <span className="text-white text-xs sm:text-sm">In Association with</span>
        <img
          src="https://brandlogos.net/wp-content/uploads/2021/10/coca-cola-logo.png"
          alt="Coca-Cola"
          className="w-16 sm:w-20 h-auto rounded-full"
          onError={(e) => {
            console.error('Partner logo failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </section>
  );
};

export default Hero;