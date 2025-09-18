import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import Navbar from './Navbar'; // Adjust the import path as needed

// Constants for Vanta.js configuration
const VANTA_CONFIG = {
  el: null,
  THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1,
  scaleMobile: 1,
  color: 0xff5722, // Orange
  color2: 0xffffff, // White
  size: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black
  points: 10,
  maxDistance: 20,
  spacing: 15,
  showDots: true,
};

// Bennovate Logo Component
const BennovateLogo = ({ className = 'w-full max-w-2xl h-auto' }) => (
  <svg viewBox="0 0 1080 720" className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="32" y="540" fill="white" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="130" letterSpacing="2px">
      BENNOVATE
    </text>
    <text x="880" y="540" fill="#3B82F6" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="130">
      4.0
    </text>
    <rect x="24" y="560" width="1030" height="80" rx="40" fill="#DC2626" />
    <text x="50" y="620" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="48" letterSpacing="3px">
      WHERE FOUNDERS MEET FUNDERS
    </text>
  </svg>
);

// Stars Background Component
const StarsBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: '40%' }}>
    {[
      { top: 'top-20', left: 'left-10 sm:left-40', opacity: '30%' },
      { top: 'top-60', left: 'left-5 sm:left-20', opacity: '40%' },
      { top: 'top-10', left: 'left-20 sm:left-80', opacity: '30%' },
      { top: 'top-40', right: 'right-10 sm:right-60', opacity: '40%' },
      { top: 'top-80', right: 'right-5 sm:right-40', opacity: '30%' },
    ].map((star, index) => (
      <div
        key={index}
        className={`absolute w-1 h-1 bg-white rounded-full ${star.top} ${star.left || star.right}`}
        style={{ opacity: star.opacity }}
      />
    ))}
  </div>
);

// Vanta Background Component
const VantaBackground = ({ vantaRef }) => {
  useEffect(() => {
    const vantaEffect = GLOBE({ ...VANTA_CONFIG, el: vantaRef.current });
    return () => vantaEffect?.destroy();
  }, [vantaRef]);

  return <div ref={vantaRef} className="absolute inset-0 z-0" style={{ opacity: '65%' }} />;
};

// Main LandingPage Component
const LandingPage = () => {
  const vantaRef = useRef(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Layers */}
      <VantaBackground vantaRef={vantaRef} />
      <StarsBackground />

      {/* Content Container */}
      <div className="relative z-10">
        <Navbar />

        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="flex justify-center mb-[-100px]">
            <div className="rounded-lg p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-12 mt-[50px]">
              <img
                src="https://www.bennett.edu.in/wp-content/uploads/2019/10/Bennett-University-logo1-.png"
                alt="Bennett University Logo"
                className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
              <BennovateLogo className="w-[370px] h-[400px] mt-[-130px] ml-[-5px] " />
            </div>
          </div>

          <p className="text-white mb-2 text-1xl sm:text-base mt-10">Presents Bennett University</p>

          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4  ">
            E-SUMMIT'25
          </h1>

          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-white mb-6 sm:mb-8 font-light tracking-wider">
            Innovation Meets Opportunity
          </h2>

          <p className="text-white mb-6 sm:mb-8 text-1xl sm:text-base">15th November – 16th November 2025</p>

          {/* Hero Partners */}
          <div className="mt-6 sm:mt-8 flex justify-center items-center space-x-2">
            <span className="text-white text-xs sm:text-sm">In Association with</span>
            <img
              src="https://brandlogos.net/wp-content/uploads/2021/10/coca-cola-logo.png"
              alt="Coca-Cola Logo"
              className="w-16 sm:w-20 h-auto rounded-full"
              onError={(e) => {
                console.error('Partner logo failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;