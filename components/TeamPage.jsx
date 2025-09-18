import React, { useState } from 'react';
import JuniorTeamSection from './JuniorTeamSection';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Arni",
      role: "Secretary",
      image: "images/arni.jpg",
      bio: "Leading SPARK with a vision for innovation and entrepreneurship at Bennett University."
    },
    {
      id: 2,
      name: "Ansh",
      role: "Joint Secretary",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80&crop=faces&facepad=3",
      bio: "Supporting the Secretary in driving SPARK’s mission for startup growth and excellence."
    }
  ];

  const LeadershipCard = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="group cursor-pointer"
        key={person.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 hover:border-red-500/40 rounded-2xl 
            transition-all duration-500 hover:shadow-xl hover:shadow-red-500/15 overflow-hidden
            hover:bg-gradient-to-br hover:from-gray-900/80 hover:to-black/80 transform hover:-translate-y-1 mx-auto w-72"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-72 object-cover object-center transition-all duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 10%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>

          {/* Info */}
          <div className="p-6 space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1">
                {person.name}
              </h3>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-1.5 rounded-full">
                <span className="text-red-400 font-medium text-xs">{person.role}</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{person.bio}</p>
          </div>
        </div>
      </div>
    );
  };

  const TeamHeader = ({ heading }) => (
    <div className="mb-10 text-center">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <span className="text-red-500 text-sm font-medium tracking-widest uppercase">{heading}</span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>
      <h2 className="text-3xl font-bold text-white">
        {heading} <span className="text-red-600">Team</span>
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
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

      <Navbar className="relative z-10 m-0 p-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 pt-16">
          <div className="transform transition-all duration-300 ease-in-out group">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet Our <br />
              <span className="text-red-600">SPARK</span> Team
            </h1>
            <div className="mt-8 flex">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xl text-gray-400 leading-relaxed">
              Our team at SPARK, Bennett University, is a dynamic group of entrepreneurial minds driven by passion, innovation, and the spirit of building a better tomorrow through startups and impactful ideas.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 text-sm font-medium tracking-widest uppercase">Leadership</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-red-600">Leadership</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Visionary Secretary and Joint Secretary steering SPARK E-Cell with passion and purpose, fostering innovation and entrepreneurship on campus.
          </p>
          <div className="mt-3 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-4xl">
          {teamMembers.map(member => (
            <LeadershipCard key={member.id} person={member} />
          ))}
        </div>

        <JuniorTeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;