import React from 'react';
import { Award } from 'lucide-react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer';

const sponsorsData = [
  {
    name: 'Times of India',
    image: 'https://mcmscache.epapr.in/post_images/website_350/post_28927036/full.jpg',
    description: 'Shaping India\'s future with trusted news and insights.',
    category: 'Media Sponsor'
  },
  {
    name: 'Spotify',
    image: 'https://miro.medium.com/v2/resize:fit:768/1*k_wNq_cl2EJixZO9dSesew.jpeg',
    description: 'Unlimited music, anytime, anywhere – feel the beat!',
    category: 'Technology Sponsor'
  },
  {
    name: 'Times Now Navbharat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Times-now-navbharat.png',
    description: 'Fearless journalism, unbiased news – Times Now Navbharat!',
    category: 'Media Sponsor'
  },
  {
    name: 'Zoom TV',
    image: 'https://yt3.googleusercontent.com/ytc/AIdro_lZEnCMQZz6FfEgDysuhVObO6O972OlqzBOaGwninMVpWk=s900-c-k-c0x00ffffff-no-rj',
    description: 'Bollywood, entertainment, and trends – Stay tuned with Zoom!',
    category: 'Entertainment Sponsor'
  },
  {
    name: 'Filmfare',
    image: 'https://static.businessworld.in/Untitled%20design%20(15)_20240516212640original_image_18.webp',
    description: 'Celebrating cinema, honoring excellence – Filmfare Awards & beyond!',
    category: 'Awards Sponsor'
  },
  {
    name: 'Femina',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/432704925/EU/NP/YN/184162459/afaqs-2020-11-897aa17c-6d41-4951-a73a-c383421cd793-femina-brand-logo-500x500.webp',
    description: 'Empowering women with style, success, and inspiration – Femina!',
    category: 'Lifestyle Sponsor'
  },
  {
    name: 'Movies Now',
    image: 'https://exchange4media.gumlet.io/news-photo/93540-moviemain.jpg',
    description: 'Your ultimate destination for movie news and reviews – Movies Now!',
    category: 'Entertainment Sponsor'
  },
  {
    name: 'Grazia',
    image: 'https://logowik.com/content/uploads/images/grazia6007.jpg',
    description: 'Where fashion meets style and sophistication – Grazia!',
    category: 'Fashion Sponsor'
  },
];

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="relative bg-black border border-gray-800 rounded-2xl overflow-hidden 
      hover:border-red-500/50 transition-all duration-300 group">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-red-900/5" />
      
      {/* Content */}
      <div className="relative p-6">
        
        {/* Logo container with refined background */}
        <div className="h-16 mb-5 flex items-center justify-center bg-white/5 
          rounded-xl border border-gray-800/50 backdrop-blur-sm">
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="max-h-10 max-w-full object-contain filter brightness-110"
          />
        </div>

        {/* Sponsor name */}
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 
          transition-colors duration-300 tracking-tight">
          {sponsor.name}
        </h3>

        {/* Category with refined styling */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-red-300 
            bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 
            px-3 py-1.5 rounded-lg tracking-wide">
            <Award size={10} className="text-red-400" />
            {sponsor.category}
          </span>
        </div>

        {/* Description with better spacing */}
        <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 line-clamp-2">
          {sponsor.description}
        </p>

        {/* Refined bottom accent */}
        <div className="pt-4 border-t border-gray-800/50">
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full 
            group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-red-500 text-sm font-medium tracking-wider uppercase 
                border border-red-500/30 px-4 py-2 rounded-full">
                Trusted Sponsors
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-red-600">Sponsors</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders who share our commitment to 
              innovation and excellence
            </p>

            <div className="mt-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto" />
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorsData.map((sponsor, index) => (
              <SponsorCard
                key={index}
                sponsor={sponsor}
              />
            ))}
          </div>

          {/* Bottom section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
              <div className="w-8 h-px bg-red-500/50" />
              <span>Building the future together</span>
              <div className="w-8 h-px bg-red-500/50" />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Sponsors;