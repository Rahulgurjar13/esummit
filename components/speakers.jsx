import React, { useState } from "react";
import { MapPin, Calendar, Award } from "lucide-react";
import Navbar from "./Navbar"; // Adjust path as needed
import Footer from "./Footer";

// Reusable Button Component
const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-500 shadow-lg hover:shadow-red-500/25",
    outline: "border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 focus:ring-red-500/50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// Speaker Card Component
const SpeakerCard = ({ speaker, isHovered, setHoveredSpeaker }) => (
  <div
    className="group cursor-pointer"
    onMouseEnter={() => setHoveredSpeaker(speaker.id)}
    onMouseLeave={() => setHoveredSpeaker(null)}
  >
    <div
      className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 hover:border-red-500/40 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-red-500/15 overflow-hidden hover:bg-gradient-to-br hover:from-gray-900/80 hover:to-black/80 transform hover:-translate-y-1"
    >
      {/* Speaker Image */}
      <div className="relative overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-56 object-cover object-center transition-all duration-700 group-hover:scale-105"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Speaker Info */}
      <div className="p-6 space-y-4">
        {/* Name & Title */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1">
            {speaker.name}
          </h3>
          <p className="text-red-500 font-medium text-sm mb-1">{speaker.title}</p>
          <p className="text-gray-400 text-sm">{speaker.company}</p>
        </div>

        {/* Session */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-1.5 rounded-full">
          <Calendar size={12} className="text-red-400" />
          <span className="text-red-400 font-medium text-xs">{speaker.session}</span>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm leading-relaxed">{speaker.bio}</p>

        {/* Achievements */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-sm flex items-center gap-2">
            <Award size={14} className="text-red-500" />
            Key Achievements
          </h4>
          <div className="space-y-1">
            {speaker.achievements.slice(0, 2).map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-400 text-xs leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// SpeakersSection Component
const SpeakersSection = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: "Kunal Shah",
      title: "Founder & CEO",
      company: "CRED",
      category: "keynote",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Serial entrepreneur and angel investor who revolutionized digital payments in India with FreeCharge and now leads CRED.",
      session: "Future of Innovation",
      achievements: ["Built $1B+ companies", "100+ angel investments", "Forbes 30 Under 30"],
    },
    {
      id: 2,
      name: "Dr. Prabhu Kumar",
      title: "Vice Chancellor",
      company: "Bennett University",
      category: "keynote",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Distinguished academic leader with 25+ years in higher education, driving innovation in entrepreneurship education.",
      session: "Opening Ceremony",
      achievements: ["25+ years in academia", "50+ research papers", "Education innovator"],
    },
    {
      id: 3,
      name: "Radhika Aggarwal",
      title: "Co-founder & CMO",
      company: "ShopClues",
      category: "founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Pioneer in Indian e-commerce, building one of India's largest online marketplaces with innovative marketing strategies.",
      session: "E-commerce Revolution",
      achievements: ["$1B+ GMV platform", "Marketing innovator", "Women entrepreneur award"],
    },
    {
      id: 4,
      name: "Sandeep Singhal",
      title: "Co-founder & Managing Director",
      company: "Nexus Venture Partners",
      category: "investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Leading VC with 15+ years of investment experience, backing category-defining startups across India and Southeast Asia.",
      session: "Funding Landscape 2025",
      achievements: ["$1B+ AUM fund", "50+ investments", "Board positions at unicorns"],
    },
    {
      id: 5,
      name: "Falguni Nayar",
      title: "Founder & CEO",
      company: "Nykaa",
      category: "founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Former investment banker turned beauty entrepreneur, built India's leading beauty and lifestyle platform.",
      session: "Women in Entrepreneurship",
      achievements: ["Public company CEO", "Beauty industry disruptor", "Economic Times Entrepreneur"],
    },
    {
      id: 6,
      name: "Anand Daniel",
      title: "Partner",
      company: "Accel Partners",
      category: "investor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Senior partner at Accel with expertise in consumer internet and fintech investments across India and Southeast Asia.",
      session: "Early Stage Investing",
      achievements: ["100+ investments", "Flipkart early investor", "Consumer tech expert"],
    },
    {
      id: 7,
      name: "Ritesh Agarwal",
      title: "Founder & CEO",
      company: "OYO Hotels",
      category: "founder",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Young entrepreneur who built the world's largest hospitality chain, revolutionizing budget accommodation globally.",
      session: "Scaling Globally",
      achievements: ["World's largest hotel chain", "Youngest unicorn founder", "Global expansion expert"],
    },
    {
      id: 8,
      name: "Shanti Mohan",
      title: "Managing Partner",
      company: "LetsVenture",
      category: "investor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces&facepad=3",
      bio: "Angel investor and startup ecosystem builder, democratizing early-stage investments in India.",
      session: "Angel Investing Trends",
      achievements: ["1000+ startup investments", "Ecosystem builder", "Angel network pioneer"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 text-sm font-medium tracking-widest uppercase">Meet Our</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Expert <span className="text-red-600">Speakers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn from industry leaders, successful entrepreneurs, and visionary investors shaping the future of business and innovation.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              isHovered={hoveredSpeaker === speaker.id}
              setHoveredSpeaker={setHoveredSpeaker}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SpeakersSection;