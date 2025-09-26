import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, red 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-12"></div>
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/images/SPARK E-CELL.png"
                  className="w-20"
                  alt="SPARK E-Cell Logo"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              E-Cell SPARK at Bennett University fuels entrepreneurial spirit through workshops, startup events, and collaborative initiatives, empowering students to innovate and lead in the startup ecosystem.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-4">
              <h4 className="text-white text-sm font-semibold mb-3">Join Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-black text-sm text-gray-300 placeholder:text-gray-500 rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-700/40"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-500 hover:shadow-red-500/25 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Events
                </a>
              </li>
              <li>
                <a href="/Agenda" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Agenda
                </a>
              </li>
              <li>
                <a href="/Speakers" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Speakers
                </a>
              </li>
              <li>
                <a href="/sponsor" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Sponsors
                </a>
              </li>
              <li>
                <a href="/spark" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → About SPARK E-Cell
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm">
                  → Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Organization */}
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Organization</h4>
                <p className="text-gray-400 text-sm font-medium">SPARK E-Cell, Bennett University</p>
              </div>
              
              {/* Address */}
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Address</h4>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  Plot Nos. 8-11, TechZone II<br />
                  Greater Noida, Uttar Pradesh – 201310<br />
                  India
                </address>
              </div>
              
              {/* Email */}
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Email</h4>
                <a 
                  href="mailto:sparkecell@bennett.edu.in" 
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm underline decoration-red-400/40 hover:decoration-red-400"
                >
                  sparkecell@bennett.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8"></div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SPARK E-Cell, Bennett University. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with 
              <span className="text-red-500 animate-pulse">❤</span>
              by Rahul Gujjar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
