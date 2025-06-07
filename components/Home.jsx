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
  
  const welcomeMessages = [
    "Welcome to BENNOVATE 4.0",
    "Where Founders Meet Funders",
    "Innovation Meets Opportunity",
    "Get Ready for an Amazing Journey!"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < welcomeMessages.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Wait a bit longer on the last message, then complete
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Bennett University Logo */}
        <div className="mb-8 sm:mb-12">
          <img
            src="https://www.bennett.edu.in/wp-content/uploads/2019/10/Bennett-University-logo1-.png"
            alt="Bennett University Logo"
            className="w-32 sm:w-40 md:w-48 h-auto mx-auto opacity-90"
          />
        </div>

        {/* Welcome Message */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-pulse">
            {welcomeMessages[currentStep]}
          </h1>
          
          {currentStep === 0 && (
            <p className="text-lg sm:text-xl text-gray-300 animate-fade-in">
              Bennett University's Premier Entrepreneurship Summit
            </p>
          )}
          
          {currentStep === 1 && (
            <p className="text-lg sm:text-xl text-red-400 animate-fade-in">
              November 20-21, 2025
            </p>
          )}
          
          {currentStep === 2 && (
            <p className="text-lg sm:text-xl text-gray-300 animate-fade-in">
              Join us for an incredible entrepreneurial experience
            </p>
          )}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {welcomeMessages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-red-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Loading animation */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-red-500 border-t-transparent"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const Homebutton = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Show welcome screen first
  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  // Main website content
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Landing Page Section */}
      <LandingPage setShowRegisterForm={setShowRegisterForm} />

      {/* AboutGES Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px]">
        <AboutGES />
      </section>

      {/* HubVisionaries Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px] sm:mt-[-200px] lg:mt-[-200px]">
        <HubVisionaries />
      </section>

      {/* AboutGES2 Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-[-120px] sm:mt-[-120px] lg:mt-[-120px]">
        <AboutGES2 />
      </section>

      {/* StartupEvents Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-0 sm:mt-[-80px] lg:mt-[-120px]">
        <StartupEvents />
      </section>

      {/* KeyFeatures Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <KeyFeatures />
      </section>

      {/* Partners Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Partners />
      </section>

      {/* Footer Section */}
      <footer className="w-full mt-12 sm:mt-16 lg:mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default Homebutton;