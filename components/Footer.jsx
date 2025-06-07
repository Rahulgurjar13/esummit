import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const developerInfo = {
    name: 'Rahul Gujjar',
    role: 'Website Developer',
    image: 'https://blockchainweek-bu.vercel.app/images/rahul1.jpg',
    ethereum_address: 'Tech Head'
  };

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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6"></div>
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/images/SPARK E-CELL.png "
                  className="w-20"
                  alt="IBF Logo"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
            E-Cell SPARK at Bennett University fuels entrepreneurial spirit through workshops, startup events, and collaborative initiatives, empowering students to innovate and lead in the startup ecosystem.
            </p>
            <div className="pt-4">
              <h4 className="text-white text-sm font-semibold mb-3">Join Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-black text-sm text-gray-300 placeholder:text-red-400 rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-700/40"
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

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">→ Timeline</span></li>
              <li><span className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">→ Workshop</span></li>
              <li><span className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">→ Sponsors</span></li>
              <li><span className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">→ About Us</span></li>
            </ul>
          </div>

          {/* E-Summit Address - Improved Organization */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">E-Summit Address</h3>
            <div className="space-y-4">
              {/* Organization */}
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Organization</h4>
                <p className="text-gray-400 text-sm">SPARK E-Cell, Bennett University</p>
              </div>
              
              {/* Physical Address */}
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Address</h4>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  Plot Nos. 8-11, TechZone II<br />
                  Greater Noida, Uttar Pradesh – 201310<br />
                  India
                </address>
              </div>
              
              {/* Contact */}
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

          {/* Developer Card */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/40 hover:border-red-500/40 transition-all duration-500 group hover:shadow-red-500/15">
            <h3 className="text-white text-lg font-semibold mb-6">Developer</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={developerInfo.image}
                  alt={developerInfo.name}
                  className="w-40 h-40 rounded-full object-cover ring-2 ring-red-500 p-1 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-800"></span>
              </div>
              <h4 className="text-white text-lg font-medium group-hover:text-red-400 transition-colors duration-300">{developerInfo.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{developerInfo.role}</p>
              <div className="text-xs font-mono text-red-400 bg-red-600/20 border border-red-500/30 px-3 py-1 rounded-full">
                {developerInfo.ethereum_address}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6"></div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Spark E-cell. All rights reserved.
            </p>
          
            <p className="text-white text-sm flex items-center gap-2">
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