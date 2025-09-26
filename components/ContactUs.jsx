import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight,
  Zap,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-500 shadow-lg hover:shadow-red-500/25",
    outline: "border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 focus:ring-red-500/50"
  };
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxlmsKQT6PsV7hzy4NBl5ppPjiWDTcBdzOS1fEknQ5wUVhWW9vdqQFS4t89jUy0b3EyVw/exec';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setSubmitMessage('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    setFormStatus('loading');

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        event: 'Bennovate 4.0'
      };

      console.log('Sending data to Google Apps Script:', submissionData); // Debug log
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypass CORS restrictions
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Fetch request completed:', response); // Debug log (limited with no-cors)
      // Since no-cors prevents response access, assume success if no error
      setFormStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log('Error details:', {
        message: error.message,
        stack: error.stack
      });
      setFormStatus('error');
      setSubmitMessage('Something went wrong. Please try again or contact us directly.');
      
      setTimeout(() => {
        setFormStatus('idle');
        setSubmitMessage('');
      }, 5000);
    }
  };

  const StatusMessage = () => {
    if (formStatus === 'idle') return null;
    const statusConfig = {
      loading: {
        icon: <Loader2 className="w-5 h-5 animate-spin" />,
        className: "bg-blue-600/20 border-blue-500/50 text-blue-400",
        iconClassName: "text-blue-400"
      },
      success: {
        icon: <CheckCircle className="w-5 h-5" />,
        className: "bg-green-600/20 border-green-500/50 text-green-400",
        iconClassName: "text-green-400"
      },
      error: {
        icon: <AlertCircle className="w-5 h-5" />,
        className: "bg-red-600/20 border-red-500/50 text-red-400",
        iconClassName: "text-red-400"
      }
    };

    const config = statusConfig[formStatus];

    return (
      <div className={`flex items-center space-x-3 p-4 rounded-xl border backdrop-blur-sm ${config.className} mb-4 animate-in fade-in duration-300`}>
        <div className={config.iconClassName}>
          {config.icon}
        </div>
        <p className="text-sm font-medium">{submitMessage}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Curved Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          <path 
            d="M0,150 Q380,50 760,200 Q1140,350 1520,150 Q1720,80 1920,180 L1920,0 L0,0 Z" 
            fill="url(#gradient1)" 
            opacity="0.8"
          />
          <path 
            d="M0,400 Q320,250 640,420 Q960,590 1280,380 Q1600,170 1920,350 L1920,0 L0,0 Z" 
            fill="url(#gradient3)" 
            opacity="0.6"
          />
          <path 
            d="M0,750 Q480,550 960,800 Q1440,1050 1920,700 L1920,1080 L0,1080 Z" 
            fill="url(#gradient2)" 
            opacity="0.5"
          />
          <path 
            d="M0,950 Q640,800 1280,950 Q1600,1050 1920,900 L1920,1080 L0,1080 Z" 
            fill="url(#gradient4)" 
            opacity="0.3"
          />
          <path 
            d="M0,280 Q240,180 480,320 Q720,460 960,280 Q1200,100 1440,280 Q1680,460 1920,320" 
            stroke="rgba(239, 68, 68, 0.9)" 
            strokeWidth="4" 
            fill="none"
            opacity="0.8"
            strokeLinecap="round"
          />
          <path 
            d="M0,680 Q320,530 640,720 Q960,910 1280,680 Q1600,450 1920,720" 
            stroke="rgba(239, 68, 68, 0.7)" 
            strokeWidth="3" 
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
          <path 
            d="M0,500 Q480,350 960,550 Q1440,750 1920,480" 
            stroke="rgba(239, 68, 68, 0.5)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path 
            d="M150,80 Q550,30 950,180 Q1350,330 1750,120" 
            stroke="rgba(239, 68, 68, 0.4)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.7"
            strokeLinecap="round"
          />
          <path 
            d="M80,980 Q480,880 880,1020 Q1280,1160 1800,920" 
            stroke="rgba(239, 68, 68, 0.3)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <circle cx="250" cy="200" r="6" fill="rgba(239, 68, 68, 0.9)" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="600" cy="350" r="4" fill="rgba(239, 68, 68, 0.8)" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1100" cy="250" r="8" fill="rgba(239, 68, 68, 1)" opacity="1">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite"/>
            <animate attributeName="r" values="6;10;6" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1500" cy="580" r="5" fill="rgba(239, 68, 68, 0.7)" opacity="0.8">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="4;7;4" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="750" r="3" fill="rgba(239, 68, 68, 0.6)" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1300" cy="800" r="7" fill="rgba(239, 68, 68, 0.8)" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite"/>
            <animate attributeName="r" values="5;9;5" dur="4.5s" repeatCount="indefinite"/>
          </circle>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.25)" />
              <stop offset="30%" stopColor="rgba(239, 68, 68, 0.15)" />
              <stop offset="70%" stopColor="rgba(239, 68, 68, 0.08)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.1)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.15)" />
              <stop offset="40%" stopColor="rgba(239, 68, 68, 0.12)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.18)" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.2)" />
              <stop offset="50%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.05)" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
              <stop offset="60%" stopColor="rgba(239, 68, 68, 0.08)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50"></div>

      {/* BENNOVATE Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center transform -translate-y-8">
          <h1 className="text-[18rem] font-black text-white opacity-[0.03] select-none leading-none tracking-wider mb-2">
            BENNOVATE
          </h1>
          <div className="text-[7rem] font-bold text-red-600 opacity-[0.08] select-none leading-none tracking-widest">
            4.0
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-8">
        <div className="flex items-center justify-between">
          <a href="/events">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-900/90 to-black/90 px-7 py-4 rounded-3xl border-2 border-red-600/60 backdrop-blur-2xl shadow-2xl shadow-red-600/15">
                <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-wide">BENNOVATE</h1>
                  <div className="text-red-400 text-sm font-semibold tracking-wider">4.0</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/events">
            <div className="flex items-center space-x-3 text-gray-300 bg-gradient-to-r from-gray-900/70 to-black/70 px-7 py-4 rounded-full border border-gray-700/60 backdrop-blur-2xl shadow-xl">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-md shadow-red-500/60"></div>
              <span className="text-sm font-medium">GO BACK</span>
            </div>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-3">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/25 to-red-700/25 text-red-400 text-sm font-semibold rounded-full border border-red-600/40 backdrop-blur-2xl shadow-xl">
                  Bennovate 4.0
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Get in touch
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Have questions about Bennovate 4.0 or ready to<br />
                transform your business with AI automation?
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/60 hover:border-red-600/60 hover:bg-gray-900/70 transition-all duration-500 backdrop-blur-2xl shadow-2xl hover:shadow-3xl hover:shadow-red-600/8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-xl backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">Email us</h3>
                      <p className="text-gray-300 text-xs">bennovate@bennett.edu.in</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/60 hover:border-red-600/60 hover:bg-gray-900/70 transition-all duration-500 backdrop-blur-2xl shadow-2xl hover:shadow-3xl hover:shadow-red-600/8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-xl backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">Call us</h3>
                      <p className="text-gray-300 text-xs">+91 120 266 7000</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/60 hover:border-red-600/60 hover:bg-gray-900/70 transition-all duration-500 backdrop-blur-2xl shadow-2xl hover:shadow-3xl hover:shadow-red-600/8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-xl backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">Our location</h3>
                      <p className="text-gray-300 text-xs">Bennett University, Greater Noida</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-3xl rounded-3xl p-8 border-2 border-gray-700/80 shadow-[0_25px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 rounded-3xl border border-red-600/30 pointer-events-none shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
              
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Send us a message</h3>
                <p className="text-gray-300 text-sm">We'll get back to you within 24 hours</p>
              </div>
              
              <StatusMessage />
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-5 relative z-10">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-5 py-4 bg-gray-800/90 border-2 border-gray-600/80 rounded-xl text-white placeholder-gray-400 focus:border-red-500/80 focus:outline-none focus:bg-gray-700/90 focus:shadow-2xl focus:shadow-red-500/20 transition-all duration-300 font-medium shadow-xl backdrop-blur-sm hover:border-gray-500/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-5 py-4 bg-gray-800/90 border-2 border-gray-600/80 rounded-xl text-white placeholder-gray-400 focus:border-red-500/80 focus:outline-none focus:bg-gray-700/90 focus:shadow-2xl focus:shadow-red-500/20 transition-all duration-300 font-medium shadow-xl backdrop-blur-sm hover:border-gray-500/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or questions about Bennovate 4.0..."
                      rows={4}
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-5 py-4 bg-gray-800/90 border-2 border-gray-600/80 rounded-xl text-white placeholder-gray-400 focus:border-red-500/80 focus:outline-none focus:bg-gray-700/90 focus:shadow-2xl focus:shadow-red-500/20 transition-all duration-300 resize-none font-medium shadow-xl backdrop-blur-sm hover:border-gray-500/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl shadow-red-600/40 hover:shadow-[0_20px_40px_rgba(239,68,68,0.5)] flex items-center justify-center space-x-3 text-base border border-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16">
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-2xl border-t border-gray-800/60 px-8 py-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bennovate 4.0 - Bennett University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;