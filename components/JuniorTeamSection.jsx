import React, { useState } from 'react';

const JuniorTeamSection = () => {
  const teams = {
    coreLeadership: [
      
      { id: 3, name: 'Sunidhee', role: 'Chief of Marketing', image: 'public/images/1726331401734 - Sunidhee Nibheria.jpg', bio: 'Overseeing marketing strategies and campaigns.' },
      { id: 4, name: 'Tanishk', role: 'Chief of Marketing', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Driving brand visibility and engagement.' },
      { id: 5, name: 'Shruti', role: 'Chief of Operations', image: 'public/images/5acb7c8a-d4b2-4867-810c-047198ee1882 - Shruti Srivastava.jpeg', bio: 'Ensuring smooth operational execution.' },
      { id: 6, name: 'Saransh', role: 'Chief of Startup Support', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting startup initiatives and growth.' },
    ],
    pr: [
      { id: 7, name: 'Jaanvi', role: 'Head of PR', image: 'https://images.unsplash.com/photo-1522075469751-6603fb6861bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading public relations efforts.' },
      { id: 8, name: 'Tanishk', role: 'PR Member', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to PR strategies.' },
      { id: 9, name: 'Varun', role: 'PR Member', image: 'public/images/InShot_20250821_172926552 - Varun Jain.jpg', bio: 'Engaging with media and stakeholders.' },
      { id: 10, name: 'Yedunandan', role: 'PR Member', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting PR outreach initiatives.' },
    ],
    design: [
      { id: 11, name: 'Dhruv', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading the design team for creative output.' },
      { id: 12, name: 'Avni', role: 'Designer', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Creating visually appealing designs.' },
      { id: 13, name: 'Ayushika', role: 'Designer', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to design projects.' },
      { id: 14, name: 'Kunal', role: 'Designer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Crafting innovative design solutions.' },
      { id: 15, name: 'Diwakar', role: 'Designer', image: 'https://images.unsplash.com/photo-1506794778202-26a994e6a4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Enhancing visual branding.' },
    ],
    multimedia: [
      { id: 16, name: 'Krish', role: 'Head of Multimedia', image: 'https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading multimedia content creation.' },
      { id: 17, name: 'Krishna', role: 'Multimedia Member', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Producing engaging multimedia content.' },
      { id: 18, name: 'Kartikeya', role: 'Multimedia Member', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting multimedia projects.' },
      { id: 19, name: 'Tanmay', role: 'Multimedia Member', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Creating dynamic visual content.' },
    ],
    socialMedia: [
      { id: 20, name: 'Akansha', role: 'Social Media Lead/Member', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Managing social media presence.' },
      { id: 21, name: 'Akkshat', role: 'Social Media Lead/Member', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Driving social media engagement.' },
    ],
    content: [
      { id: 22, name: 'Raini', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Crafting compelling content for SPARK.' },
    ],
    operations: [
      { id: 23, name: 'Manish', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Overseeing operational workflows.' },
      { id: 24, name: 'Arya', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting operational tasks.' },
      { id: 25, name: 'Riddhima', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Ensuring smooth operations.' },
      { id: 26, name: 'Nemi', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to operational efficiency.' },
      { id: 27, name: 'Aarushi', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting event and task coordination.' },
      { id: 28, name: 'Lavanya', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1506794778202-26a994e6a4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Enhancing operational processes.' },
      { id: 29, name: 'Ishaan', role: 'Operations Member', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Assisting in operational planning.' },
      { id: 30, name: 'Sumidson', role: 'Operations Member', image: 'public/images/DSC_0034 (1) - Sumidson.S. Henry.JPG', bio: 'Supporting team operations.' },
    ],
    events: [
      { id: 31, name: 'Archit', role: 'Head of Events', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading event planning and execution.' },
      { id: 32, name: 'Devanshi', role: 'Events Member', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Coordinating event logistics.' },
      { id: 33, name: 'Sanchit', role: 'Events Member', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting event organization.' },
      { id: 34, name: 'Aditi', role: 'Events Member', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Assisting in event planning.' },
      { id: 35, name: 'Janwi', role: 'Events Member', image: 'https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to event success.' },
    ],
    tech: [
      { id: 36, name: 'Rahul', role: 'Head of Tech', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading technical development.' },
      { id: 37, name: 'Avi', role: 'Tech Member', image: 'public/images/WhatsApp Image 2025-06-04 at 21.04.22 - Avi Srivastava.jpeg', bio: 'Developing technical solutions.' },
      { id: 38, name: 'Vishu', role: 'Tech Member', image: 'public/images/WhatsApp Image 2025-08-21 at 21.20.27 - vishu.jpeg', bio: 'Supporting tech initiatives.' },
      { id: 39, name: 'Anshul', role: 'Tech Member', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to tech projects.' },
    ],
    finance: [
      { id: 40, name: 'Ananya', role: 'Sponsorships Head', image: 'https://images.unsplash.com/photo-1506794778202-26a994e6a4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Leading sponsorship and finance efforts.' },
      { id: 41, name: 'Vijendra Pranay', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Managing financial operations.' },
      { id: 42, name: 'Divine', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1522075469751-6603fb6861bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting financial planning.' },
      { id: 43, name: 'Himani', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Assisting in sponsorship coordination.' },
      { id: 44, name: 'Janvi', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to financial strategies.' },
      { id: 45, name: 'Anushka', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Supporting budget management.' },
      { id: 46, name: 'Manthan', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Assisting in financial operations.' },
      { id: 47, name: 'Parth', role: 'Finance Member', image: 'https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4', bio: 'Contributing to sponsorship efforts.' },
    ],
  };

  const MemberCard = ({ person }) => {
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
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1">
                {person.name}
              </h3>
              <p className="text-red-500 font-medium text-sm mb-1">{person.role}</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-1.5 rounded-full">
              <span className="text-red-400 font-medium text-xs">
                {person.id <= 6 ? 'Core Leadership' :
                 person.id <= 10 ? 'PR' :
                 person.id <= 15 ? 'Design' :
                 person.id <= 19 ? 'Multimedia' :
                 person.id <= 21 ? 'Social Media' :
                 person.id <= 22 ? 'Content' :
                 person.id <= 30 ? 'Operations' :
                 person.id <= 35 ? 'Events' :
                 person.id <= 39 ? 'Tech' : 'Finance'}
              </span>
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

  const TeamGrid = ({ teamMembers }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {teamMembers.map(member => (
        <MemberCard key={member.id} person={member} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, red 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            SPARK <span className="text-red-600">Teams</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation and entrepreneurship at Bennett University.
          </p>
        </div>

        {/* Team Sections */}
        <div className="mb-20">
          <TeamHeader heading="Core Leadership" />
          <TeamGrid teamMembers={teams.coreLeadership} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Public Relations" />
          <TeamGrid teamMembers={teams.pr} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Design" />
          <TeamGrid teamMembers={teams.design} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Multimedia" />
          <TeamGrid teamMembers={teams.multimedia} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Social Media" />
          <TeamGrid teamMembers={teams.socialMedia} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Content" />
          <TeamGrid teamMembers={teams.content} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Operations" />
          <TeamGrid teamMembers={teams.operations} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Events" />
          <TeamGrid teamMembers={teams.events} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Tech" />
          <TeamGrid teamMembers={teams.tech} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Finance" />
          <TeamGrid teamMembers={teams.finance} />
        </div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;