import React, { useState } from "react";
import { ChevronDown, Calendar, MapPin, Clock, User } from "lucide-react";
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

// Agenda Item Component
const AgendaItem = ({ session, toggleSessionDetails, isExpanded }) => (
  <div
    className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden group cursor-pointer hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-black/70"
    onClick={() => toggleSessionDetails(session.id)}
  >
    <div className="p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-5">
          {/* Time */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 px-4 py-2.5 rounded-full backdrop-blur-sm">
            <Clock size={14} className="text-red-400" />
            <span className="text-red-400 font-medium text-sm">{session.time}</span>
          </div>
          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight">
            {session.title}
          </h3>
          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                <User size={12} className="text-red-500" />
              </div>
              <span className="font-medium">{session.speaker}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                <MapPin size={12} className="text-red-500" />
              </div>
              <span className="font-medium">{session.location}</span>
            </div>
          </div>
        </div>
        {/* Expand Icon */}
        <div className="flex-shrink-0 ml-6">
          <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-600/30 group-hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm">
            <ChevronDown
              className={`text-red-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
    {isExpanded && (
      <div className="px-8 pb-8 animate-in slide-in-from-top duration-300">
        <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-6 space-y-6 backdrop-blur-sm">
          {/* Description */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-red-500 rounded-full"></div>
              About This Session
            </h4>
            <p className="text-gray-300 leading-relaxed">{session.description}</p>
          </div>
          {/* Highlights */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-red-500 rounded-full"></div>
              Key Highlights
            </h4>
            <div className="grid gap-3">
              {session.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-red-400 transition-colors duration-200"></div>
                  <span className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

// AgendaSection Component
const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [expandedSession, setExpandedSession] = useState(null);

  const days = [
    { id: 1, date: "20st November", day: "Day 1" },
    { id: 2, date: "21nd November", day: "Day 2" },
  ];

  const agenda = {
    1: [
      {
        id: "d1s1",
        time: "09:00 AM - 10:30 AM",
        title: "Opening Ceremony",
        location: "Main Auditorium",
        speaker: "Dr. Prabhu Kumar",
        description: "Welcome address and introduction to Bennovate'25 with insights into the entrepreneurial ecosystem in India.",
        highlights: ["Lighting the lamp ceremony", "Welcome address by University President", "Introduction to summit theme"],
      },
      {
        id: "d1s2",
        time: "11:00 AM - 12:30 PM",
        title: "Keynote Session: Future of Innovation",
        location: "Main Auditorium",
        speaker: "Kunal Shah, Founder - CRED",
        description: "An insightful discussion on how innovation is shaping industries and creating new opportunities for entrepreneurs.",
        highlights: ["Disruption in fintech", "Building for India's unique market", "Scaling startups in competitive environments"],
      },
    ],
    2: [
      {
        id: "d2s1",
        time: "01:30 PM - 02:30 PM",
        title: "Panel Discussion: Funding Landscape 2025",
        location: "Conference Hall B",
        speaker: "Venture Capital Panel",
        description: "Leading VCs discuss current investment trends, what they look for in startups, and predictions for the coming year.",
        highlights: ["Early-stage funding strategies", "VC expectations in 2025", "Preparing for investor meetings"],
      },
      {
        id: "d2s2",
        time: "03:00 PM - 05:00 PM",
        title: "Startup Pitch Competition - Finals",
        location: "Innovation Hub",
        speaker: "Selected Startups",
        description: "Selected startups present their business ideas to a panel of judges for feedback and prizes.",
        highlights: ["5-minute detailed pitches", "Q&A with judges", "Prize distribution"],
      },
    ],
  };

  const toggleSessionDetails = (sessionId) => {
    setExpandedSession(expandedSession === sessionId ? null : sessionId);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 text-sm font-medium tracking-widest uppercase">Schedule</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Event <span className="text-red-600">Agenda</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Two action-packed days of knowledge, networking, and opportunities to boost your entrepreneurial journey.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-1.5 flex shadow-2xl">
            {days.map((day) => (
              <Button
                key={day.id}
                variant={activeDay === day.id ? "default" : "outline"}
                className={`px-8 py-4 ${activeDay === day.id ? "" : "text-gray-400 hover:text-white hover:bg-red-600/20"}`}
                onClick={() => setActiveDay(day.id)}
              >
                <div className="text-center">
                  <div className="font-semibold text-lg">{day.day}</div>
                  <div className="text-sm opacity-90">{day.date}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          {agenda[activeDay].map((session) => (
            <AgendaItem
              key={session.id}
              session={session}
              toggleSessionDetails={toggleSessionDetails}
              isExpanded={expandedSession === session.id}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <div className="w-8 h-px bg-red-500/50" />
            <span>Innovation • Excellence • Entrepreneurship</span>
            <div className="w-8 h-px bg-red-500/50" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AgendaSection;