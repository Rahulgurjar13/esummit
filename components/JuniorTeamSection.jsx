import React, { useState } from 'react';

const JuniorTeamSection = () => {
  const teams = {
    tech: [
      { id: 1, name: "Arjun Sharma", role: "Full Stack Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Crafting elegant solutions with React, Node.js and modern web technologies." },
      { id: 2, name: "Priya Nair", role: "Mobile Developer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Specializing in cross-platform mobile applications with Flutter and React Native." },
      { id: 3, name: "Rohan Patel", role: "Data Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Building robust data pipelines and analytics infrastructure." },
      { id: 4, name: "Ananya Gupta", role: "UX/UI Designer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Creating intuitive and beautiful user experiences focused on accessibility." }
    ],
    marketing: [
      { id: 5, name: "Vikram Singh", role: "Content Strategist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Developing engaging content strategies across multiple platforms." },
      { id: 6, name: "Neha Kapoor", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Growing our brand presence through strategic social media campaigns." },
      { id: 7, name: "Karan Malhotra", role: "SEO Specialist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Optimizing our digital footprint for maximum visibility and engagement." },
      { id: 8, name: "Diya Verma", role: "Growth Marketer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Driving user acquisition through data-driven growth strategies." }
    ],
    management: [
      { id: 9, name: "Aditya Rao", role: "Project Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Ensuring projects are delivered on time, within scope and budget." },
      { id: 10, name: "Shreya Iyer", role: "HR Specialist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Building our culture and ensuring our team has everything they need to succeed." },
      { id: 11, name: "Rahul Khanna", role: "Account Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Managing client relationships and ensuring exceptional service delivery." },
      { id: 12, name: "Pooja Desai", role: "Finance Analyst", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Providing financial insights to support strategic business decisions." }
    ],
    // Update other teams similarly with varied Unsplash URLs and &crop=faces&facepad=4
    pr_outreach: [
      { id: 13, name: "Sameer Joshi", role: "PR Coordinator", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Building relationships with media and community partners." },
      { id: 14, name: "Tara Menon", role: "Event Planner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Organizing impactful events to promote our mission." },
      { id: 15, name: "Nikhil Reddy", role: "Outreach Specialist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Expanding our network through strategic outreach initiatives." },
      { id: 16, name: "Riya Chopra", role: "Communications Lead", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Crafting compelling narratives for our public presence." }
    ],
    design: [
      { id: 17, name: "Ishita Bose", role: "Graphic Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Creating visually stunning designs for our brand identity." },
      { id: 18, name: "Aryan Thakur", role: "Motion Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Bringing our concepts to life through animated visuals." },
      { id: 19, name: "Sana Kulkarni", role: "Web Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Designing responsive and engaging web interfaces." },
      { id: 20, name: "Kabir Mehra", role: "Brand Designer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Developing consistent branding across all platforms." }
    ],
    multimedia: [
      { id: 21, name: "Meera Pillai", role: "Video Editor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Producing high-quality video content for our audience." },
      { id: 22, name: "Yash Dubey", role: "Photographer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Capturing moments that tell our story visually." },
      { id: 23, name: "Kavya Jain", role: "Audio Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Creating immersive audio experiences for our projects." },
      { id: 24, name: "Siddharth Roy", role: "Multimedia Producer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Overseeing multimedia content creation and delivery." }
    ],
    research: [
      { id: 25, name: "Aisha Siddiqui", role: "Blockchain Researcher", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Exploring cutting-edge blockchain technologies and trends." },
      { id: 26, name: "Omkar Yadav", role: "Data Analyst", image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Analyzing data to inform our strategic decisions." },
      { id: 27, name: "Tanvi Shah", role: "Market Researcher", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Studying market trends to guide our growth strategy." },
      { id: 28, name: "Harsh Vardhan", role: "Tech Analyst", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4", bio: "Evaluating emerging technologies for implementation." }
    ]
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
                {person.id <= 4 ? 'Developer' :
                 person.id <= 8 ? 'Marketing' :
                 person.id <= 12 ? 'Operations' :
                 person.id <= 16 ? 'PR & Outreach' :
                 person.id <= 20 ? 'Design' :
                 person.id <= 24 ? 'Multimedia' : 'Research'}
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
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-red-600">Core</span> Teams
          </h1>
         
          <div className="mt-8 flex justify-center">
            
          </div>
        </div>

        {/* Team Sections */}
        <div className="mb-20">
          <TeamHeader heading="Technology" />
          <TeamGrid teamMembers={teams.tech} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Marketing" />
          <TeamGrid teamMembers={teams.marketing} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="Management" />
          <TeamGrid teamMembers={teams.management} />
        </div>

        <div className="mb-20">
          <TeamHeader heading="PR & Outreach" />
          <TeamGrid teamMembers={teams.pr_outreach} />
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
          <TeamHeader heading="Research" />
          <TeamGrid teamMembers={teams.research} />
        </div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;