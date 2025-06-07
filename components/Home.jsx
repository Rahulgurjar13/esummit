import React, { useState, useEffect } from 'react';
import AboutGES from "./aboutbennovate";
import AboutGES2 from "./aboutbennovate2";
import HubVisionaries from "./aboutbennovate3";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import StartupEvents from "./StartupEvents";
import KeyFeatures from "./KeyFeatures";
import AgendaSection from "./AgendaSection";
import Partners from "./partners";
import Hero from "./herosection";

// Welcome Screen Component
const WelcomeScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const welcomeMessages = [
    {
      main: "Welcome to BENNOVATE 4.0",
      sub: "Bennett University's Premier Entrepreneurship Summit"
    },
    {
      main: "Where Founders Meet Funders",
      sub: "November 20-21, 2025"
    },
    {
      main: "Innovation Meets Opportunity",
      sub: "Join us for an incredible entrepreneurial experience"
    },
    {
      main: "Get Ready for an Amazing Journey!",
      sub: "Experience the future of entrepreneurship"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < welcomeMessages.length - 1) {
        setIsTransitioning(true);
        
        // Small delay for fade out effect
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
          setIsTransitioning(false);
        }, 300);
      } else {
        // Smooth exit transition
        setIsTransitioning(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 2200); // Slightly longer display time for better readability

    return () => clearTimeout(timer);
  }, [currentStep, onComplete, welcomeMessages.length]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced background with smoother gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_rgba(220,38,38,0.05)_40%,_transparent_70%)]" />
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content with improved transitions */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Bennett University Logo with smooth entrance */}
        <div className="mb-8 sm:mb-12 transform transition-all duration-1000 ease-out">
          <img
            src="https://www.bennett.edu.in/wp-content/uploads/2019/10/Bennett-University-logo1-.png"
            alt="Bennett University Logo"
            className="w-64 sm:w-80 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Welcome Message with smoother transitions */}
        <div className="mb-8 sm:mb-12 min-h-[200px] flex flex-col justify-center">
          <div className={`transform transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {welcomeMessages[currentStep].main}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {currentStep === 1 ? (
                <span className="text-red-400 font-medium">
                  {welcomeMessages[currentStep].sub}
                </span>
              ) : (
                welcomeMessages[currentStep].sub
              )}
            </p>
          </div>
        </div>

        {/* Enhanced progress indicator */}
        <div className="flex justify-center space-x-3 mb-8">
          {welcomeMessages.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out rounded-full ${
                index === currentStep 
                  ? 'w-8 h-2 bg-red-500 shadow-lg shadow-red-500/50' 
                  : index < currentStep
                    ? 'w-2 h-2 bg-red-400'
                    : 'w-2 h-2 bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Improved loading animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-red-500/30 border-t-red-500"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-10 w-10 border border-red-500/20"></div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS with smoother animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes float {
          0% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-25px) scale(1.1); 
            opacity: 1; 
          }
          75% { 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.3; 
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-float {
          animation: float 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent layout shift */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

const Homebutton = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Small delay to ensure smooth transition to main content
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  // Show welcome screen first
  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  // Main website content with fade-in effect
  return (
    <div className={`bg-black min-h-screen flex flex-col transition-opacity duration-1000 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Landing Page Section */}
      <LandingPage setShowRegisterForm={setShowRegisterForm} />

      {/* AboutGES Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px] transform transition-all duration-700 ease-out">
        <AboutGES />
      </section>

      {/* HubVisionaries Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px] sm:mt-[-200px] lg:mt-[-200px] transform transition-all duration-700 ease-out">
        <HubVisionaries />
      </section>

      {/* AboutGES2 Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px] sm:mt-[-120px] lg:mt-[-120px] transform transition-all duration-700 ease-out">
        <AboutGES2 />
      </section>

      {/* StartupEvents Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-0 sm:mt-[-80px] lg:mt-[-120px] transform transition-all duration-700 ease-out">
        <StartupEvents />
      </section>

      {/* KeyFeatures Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transform transition-all duration-700 ease-out">
        <KeyFeatures />
      </section>

      {/* Partners Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transform transition-all duration-700 ease-out">
        <Partners />
      </section>

      {/* Footer Section */}
      <footer className="w-full mt-12 sm:mt-16 lg:mt-20 transform transition-all duration-700 ease-out">
        <Footer />
      </footer>
    </div>
  );
};

export default Homebutton;