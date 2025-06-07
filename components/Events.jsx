import React, { useState } from 'react';
import { Trophy, Presentation, Users, MessageCircle, Lightbulb, Briefcase, ShoppingBag, Star, Calendar, Award, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const EventCard = ({ session, title, description, categories, icon: Icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl overflow-hidden 
        hover:border-red-500 hover:-translate-y-2 transition-all duration-300 
        hover:shadow-xl hover:shadow-red-500/25 group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="relative p-6 pb-4">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
          <div className="w-full h-full rounded-full bg-red-500 blur-xl transform scale-150" />
        </div>
        
        {/* Session badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30">
            {session}
          </span>
          <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
            <Icon className="text-red-400" size={20} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 
          transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-grow">
        <p className="text-gray-400 leading-relaxed text-sm mb-4 flex-grow group-hover:text-gray-300 
          transition-colors duration-300">
          {description}
        </p>

        {/* Categories */}
        {categories && (
          <div className="mb-4">
            <h4 className="text-red-400 text-xs font-semibold mb-2 uppercase tracking-wide">Categories:</h4>
            <div className="space-y-1">
              {categories.map((category, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-500 rounded-full" />
                  <span className="text-gray-400 text-xs">{category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-4" />

        {/* Footer stats */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-red-500" />
            <span>Nov 22-23</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={12} className="text-red-500" />
            <span>Live Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      session: "SESSION 1",
      title: "SPARK TANK",
      description: "Bennett University's sector agnostic business plan competition to select innovative ideas. Winners will be rewarded with exciting cash and other prizes from a pool worth Rs. 10 lakh.",
      categories: [
        "Spark Tank Junior: School Students (9th, 10th, 11th & 12th)",
        "Spark Tank Senior: College Students | Individual Innovators | Startup Companies"
      ],
      icon: Trophy
    },
    {
      session: "SESSION 2",
      title: "STARTUP EXPO",
      description: "A platform for startups to showcase their products, with top ideas from each category presenting to VCs, professors, investors, mentors, and students. Exhibit types include Startup, Young Innovator, and Sponsor Stalls.",
      icon: Presentation
    },
    {
      session: "SESSION 3",
      title: "ENTREPRENEURIAL JOURNEY",
      description: "Aspiring entrepreneurs will receive guidance on essential topics from experts across various domains like management, communication, and law, enriching their entrepreneurial journey.",
      icon: Users
    },
    {
      session: "SESSION 4",
      title: "EXPERT TALK & PANEL DISCUSSIONS",
      description: "Industry leaders and experts share insights through engaging talks and interactive panel discussions, providing valuable knowledge and networking opportunities for aspiring entrepreneurs.",
      icon: MessageCircle
    },
    {
      session: "SESSION 5",
      title: "IDEATHON",
      description: "Access tailored solutions to address your business challenges by connecting with students from relevant fields. A 1-month challenge with exciting cash prizes based on team progress.",
      icon: Lightbulb
    },
    {
      session: "SESSION 6",
      title: "INTERNSHIP FAIR",
      description: "Connects students with recruiters from startups, corporations, media houses, and NGOs, offering a seamless path to secure internships and kickstart their careers.",
      icon: Briefcase
    },
    {
      session: "SESSION 7",
      title: "BUSINESS BAZAAR",
      description: "A multi-day event where university students showcase their business ideas or startups by setting up stalls to sell their products, providing a platform for entrepreneurial talent and innovation.",
      icon: ShoppingBag
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase 
              border border-red-500/30 px-4 py-2 rounded-full">
              Nov 22-23, 2024 • Bennett University
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">EVENTS AT</span><br />
            <span className="text-red-600">BENNOVATE <span className="text-white">4.0</span></span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join us for an immersive experience featuring competitions, exhibitions, expert insights, 
            and networking opportunities designed to fuel your entrepreneurial journey
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              session={event.session}
              title={event.title}
              description={event.description}
              categories={event.categories}
              icon={event.icon}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <Star className="text-red-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Bennovate?</h3>
            <p className="text-gray-300 mb-6">
              Don't miss this opportunity to be part of Bennett University's premier entrepreneurship summit
            </p>
            <button className="bg-red-600 hover:bg-red-500 text-white font-semibold 
              py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105
              flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-red-500/30">
              <span>Register Now</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <div className="w-8 h-px bg-red-500/50" />
            <span>Innovation • Excellence • Entrepreneurship</span>
            <div className="w-8 h-px bg-red-500/50" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;