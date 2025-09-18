import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Award, Sparkles } from 'lucide-react';

const EventCard = ({ title, image, description, year, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-xl overflow-hidden 
        hover:border-red-500 hover:-translate-y-2 transition-all duration-300 
        hover:shadow-xl hover:shadow-red-500/25 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500
            group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        
        {/* Year badge */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full 
          text-sm font-bold shadow-lg">
          {year}
        </div>

        {/* Sparkle icon on hover */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 delay-100">
          <Sparkles className="text-red-400" size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 
          transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 
          transition-colors duration-300">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 py-2">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-red-500" />
            <span>2 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-red-500" />
            <span>500+</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-red-500" />
            <span>Summit</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        {/* Button with link */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block bg-red-600 hover:bg-red-500 text-white font-semibold 
            py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]
            flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/30"
        >
          <span>Explore Event</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const StartupEvents = () => {
  const events = [
    {
      title: "Bennovate 1.0",
      year: "2022",
      image: "https://www.bennett.edu.in/wp-content/uploads/2022/12/winners1.jpg",
      description: "Bennett University's inaugural entrepreneurship summit brought together industry veterans and budding entrepreneurs for a transformative two-day event focused on innovation and networking.",
      link: "https://www.bennett.edu.in/innovation-centre/bennovate-2022/"   // 🔗 Add event link here
    },
    {
      title: "Bennovate 2.0",
      year: "2023",
      image: "https://www.bennett.edu.in/wp-content/uploads/2023/12/Bennovate-2.0.jpg",
      description: "The second edition featured enhanced collaboration between startups, investors, and industry leaders, supported by StartinUP and WASME for greater impact.",
      link: "https://www.bennett.edu.in/innovation-centre/bennovate/"   // 🔗 Add event link here
    },
    {
      title: "Bennovate 3.0",
      year: "2024",
      image: "https://thekhaitanschool.org/wp-content/uploads/2024/11/Photo-from-Tanu-1.jpg",
      description: "The latest summit expanded to include young entrepreneurs, academics, and seasoned professionals, creating a comprehensive platform for innovation and growth.",
      link: "https://www.bennett.edu.in/innovation-centre/bennovate-2024/"   // 🔗 Add event link here
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, red 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase 
              border border-red-500/30 px-4 py-2 rounded-full">
              Innovation • Excellence • Growth
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-red-600">Bennovate</span>
            <span className="text-white"> Archives</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Journey through Bennett University's premier entrepreneurship summits that 
            shaped the future of innovation and business excellence
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              year={event.year}
              image={event.image}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <div className="w-8 h-px bg-red-500/50" />
            <span>Building the future, one summit at a time</span>
            <div className="w-8 h-px bg-red-500/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupEvents;
