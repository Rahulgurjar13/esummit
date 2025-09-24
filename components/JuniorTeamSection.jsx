import React, { useState } from 'react';

const JuniorTeamSection = () => {
  const teams = {
    coreLeadership: [
      { id: 3, name: 'Sunidhee', role: 'Chief of Marketing', image: 'images/1726331401734 - Sunidhee Nibheria.jpg' },
      { id: 4, name: 'Tanishk', role: 'Chief of Marketing', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4' },
      { id: 5, name: 'Shruti', role: 'Chief of Operations', image: 'images/shruti.jpeg' },
      { id: 6, name: 'Saransh', role: 'Chief of Startup Support', image: 'images/IMG_6915 - Saransh Jain.jpeg' },
    ],
    pr: [
      { id: 7, name: 'Jaanvi', role: 'PR Head', image: 'images/janwvi.jpeg' },
      { id: 8, name: 'Varun', role: 'PR Head', image: 'images/InShot_20250821_172926552 - Varun Jain.jpg' },
      { id: 9, name: 'Yedunandan', role: 'PR Member', image: 'images/yedvdun.jpeg' },
    
    ],
    design: [
      { id: 12, name: 'Dhruv', role: 'Design Head', image: 'images/SAVE_20250211_155223 - Dhruv Mehta.jpg' },
      { id: 13, name: 'Avni', role: 'Designer', image: 'images/avini.jpeg' },
      { id: 14, name: 'Ayushika', role: 'Designer', image: 'images/ID - Ayushika Verma.jpg' },
        { id: 10, name: 'Kunal', role: 'Designer', image: 'images/IMG_9481 - Kunal Hooda.jpeg' },
      { id: 11, name: 'Diwakar', role: 'Designer', image: 'https://images.unsplash.com/photo-1506794778202-26a994e6a4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=90&crop=faces&facepad=4' },
   
    ],
    multimedia: [
      { id: 16, name: 'Krishna', role: 'Multimedia Head', image: 'images/IMG_9912 - Krishna Goyal.jpeg' },
      { id: 17, name: 'Kartikeya', role: 'Multimedia Member', image: 'images/IMG_20250821_150724-removebg-preview - Kartikeya Singh.jpg' },
      { id: 18, name: 'Tanmay', role: 'Multimedia Member', image: 'images/tanmay jain.jpeg' },
    ],
    socialMedia: [
      { id: 19, name: 'Akkshat', role: 'Social Media Head', image: 'images/akk.png' },
      { id: 20, name: 'Akansha', role: 'Social Media Member', image: 'images/View recent photos.jpeg - Akansha Bhutani.png' },
    ],
    operations: [
      { id: 21, name: 'Manish', role: 'Operations Head', image: 'images/IMG_20250820_085107 - Manish Solanki.jpg' },
      { id: 22, name: 'Arya', role: 'Operations Member', image: 'images/IMG_8998 - Arya Prakash.jpeg' },
      { id: 23, name: 'Riddhima', role: 'Operations Member', image: 'images/Screenshot_2025-03-27-20-42-40-592_com.android.chrome-edit - Riddhima Srivastava.jpg' },
      { id: 24, name: 'Nemi', role: 'Operations Member', image: 'images/nemi.jpeg' },
      { id: 25, name: 'Aarushi', role: 'Operations Member', image: 'images/Snapchat-385519136 - Arushi Chakraborty.jpg' },
      { id: 26, name: 'Sumidson', role: 'Operations Member', image: 'images/son.JPG' },
      { id: 27, name: 'Ishaan', role: 'Operations Member', image: 'images/DSC00935 - Ishaan Sharma.JPG' },
    ],
    events: [
      { id: 28, name: 'Archit', role: 'Events Team', image: 'images/archit.jpeg' },
      { id: 29, name: 'Devanshi', role: 'Events Team', image: 'images/spark - Devanshi.jpg' },
      { id: 30, name: 'Sanchit', role: 'Events Team', image: 'images/sanchit.jpg' },
      { id: 31, name: 'Aditi', role: 'Events Team', image: 'images/aditi_2.jpeg' },
      { id: 32, name: 'Janwi', role: 'Events Team', image: 'images/beep - Janwi singh.JPG' },
    ],
    tech: [
      { id: 33, name: 'Rahul Gujjar', role: 'Tech Head', image: 'images/rahul1.jpg' },
      { id: 34, name: 'Avi', role: 'Tech Member', image: 'images/WhatsApp Image 2025-06-04 at 21.04.22 - Avi Srivastava.jpeg' },
      { id: 35, name: 'Vishu', role: 'Tech Member', image: 'images/WhatsApp Image 2025-08-21 at 21.20.27 - vishu.jpeg' },
      { id: 36, name: 'Anshul', role: 'Tech Member', image: 'images/anshul.jpeg' },
    ],
    finance: [
      { id: 37, name: 'Ananya', role: 'Sponsorships Head', image: 'images/IMG_0515 - Ananya Mishra.jpeg' },
      { id: 38, name: 'Pranay', role: 'Finance Member', image: 'images/pranay.jpeg' },
      { id: 39, name: 'Himani', role: 'Finance Member', image: 'images/IMG_1301 - _himanii _.png' },
      { id: 40, name: 'Divine', role: 'Finance Member', image: 'images/divine.jpg' },
      { id: 41, name: 'Anushka', role: 'Finance Member', image: 'images/anushka.jpeg' },
      { id: 42, name: 'Janvi', role: 'Finance Member', image: 'images/IMG_20250821_150432 - Janvi Pargai.jpg' },
      { id: 43, name: 'Parth', role: 'Finance Member', image: 'images/parth.png' },
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
          <div className="relative overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-72 object-cover object-center transition-all duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 10%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1">
                {person.name}
              </h3>
              <p className="text-red-500 font-medium text-sm mb-1">{person.role}</p>
            </div>
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
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, red 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            SPARK <span className="text-red-600">Teams</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation and entrepreneurship at Bennett University.
          </p>
        </div>

        <div className="mb-20"><TeamHeader heading="Core Leadership" /><TeamGrid teamMembers={teams.coreLeadership} /></div>
        <div className="mb-20"><TeamHeader heading="Public Relations" /><TeamGrid teamMembers={teams.pr} /></div>
        <div className="mb-20"><TeamHeader heading="Design" /><TeamGrid teamMembers={teams.design} /></div>
        <div className="mb-20"><TeamHeader heading="Multimedia" /><TeamGrid teamMembers={teams.multimedia} /></div>
        <div className="mb-20"><TeamHeader heading="Social Media" /><TeamGrid teamMembers={teams.socialMedia} /></div>
        <div className="mb-20"><TeamHeader heading="Operations" /><TeamGrid teamMembers={teams.operations} /></div>
        <div className="mb-20"><TeamHeader heading="Events" /><TeamGrid teamMembers={teams.events} /></div>
        <div className="mb-20"><TeamHeader heading="Tech" /><TeamGrid teamMembers={teams.tech} /></div>
        <div className="mb-20"><TeamHeader heading="Finance" /><TeamGrid teamMembers={teams.finance} /></div>
      </div>
    </div>
  );
};

export default JuniorTeamSection;
