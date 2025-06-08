import React from 'react';
import { Award } from 'lucide-react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer';

const sponsorsData = [
  {
    name: 'Times of India',
    image: 'https://mcmscache.epapr.in/post_images/website_350/post_28927036/full.jpg',
  },
  {
    name: 'Gaana',
    image: 'https://miro.medium.com/v2/resize:fit:768/1*k_wNq_cl2EJixZO9dSesew.jpeg',
  },
  {
    name: 'Times Now Navbharat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Times-now-navbharat.png',
  },
  {
    name: 'Zoom TV',
    image: 'https://yt3.googleusercontent.com/ytc/AIdro_lZEnCMQZz6FfEgDysuhVObO6O972OlqzBOaGwninMVpWk=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Filmfare',
    image: 'https://static.businessworld.in/Untitled%20design%20(15)_20240516212640original_image_18.webp',
  },
  {
    name: 'Femina',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/432704925/EU/NP/YN/184162459/afaqs-2020-11-897aa17c-6d41-4951-a73a-c383421cd793-femina-brand-logo-500x500.webp',
  },
  {
    name: 'Movies Now',
    image: 'https://exchange4media.gumlet.io/news-photo/93540-moviemain.jpg',
  },
  {
    name: 'Grazia',
    image: 'https://logowik.com/content/uploads/images/grazia6007.jpg',
  },
];

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/60 
      rounded-2xl overflow-hidden hover:border-gray-600/80 hover:shadow-2xl hover:shadow-black/50 
      transition-all duration-500 cursor-pointer backdrop-blur-sm">
      
      {/* Subtle premium glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Content */}
      <div className="relative p-10 h-full flex flex-col items-center justify-center text-center">
        
        {/* Logo container */}
        <div className="">
          
          {/* Premium subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] 
            to-gray-300/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="relative h-24 w-auto max-w-48 object-contain filter brightness-105 
              group-hover:brightness-110 transition-all duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Sponsor name */}
        <h3 className="text-2xl font-semibold text-white/95 mb-3 group-hover:text-white 
          transition-colors duration-500 tracking-tight font-light">
          {sponsor.name}
        </h3>

        {/* Premium accent line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-gray-500/60 via-gray-400/80 to-gray-500/60 
          group-hover:w-24 transition-all duration-700 group-hover:from-gray-400/80 
          group-hover:via-gray-300/90 group-hover:to-gray-400/80" />
      </div>

      {/* Subtle corner highlight */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.02] 
        to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 
        transition-opacity duration-700" />
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar className="relative z-10 m-0 p-0" />
      
      <section className="py-24 bg-black relative overflow-hidden">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 60%), 
                             radial-gradient(circle at 75% 75%, #4b5563 0%, transparent 60%)`,
            backgroundSize: '120px 120px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-gray-300 text-sm font-medium tracking-wider uppercase 
                border border-gray-600/40 px-6 py-3 rounded-full bg-gray-800/30 backdrop-blur-sm">
                Trusted Sponsors
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6">
              <span className="text-red-600">Our </span>
              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-normal">
                Sponsors
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Collaborating with industry leaders who share our commitment to 
              innovation and excellence
            </p>

            <div className="mt-10">
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-500/60 to-transparent mx-auto" />
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sponsorsData.map((sponsor, index) => (
              <SponsorCard
                key={index}
                sponsor={sponsor}
              />
            ))}
          </div>

          {/* Bottom section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-gray-400 text-sm font-medium">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-500/40" />
              <span className="px-6 py-3 bg-gray-800/40 rounded-full border border-gray-700/50 backdrop-blur-sm">
                Building the future together
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-500/40" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer></Footer>
    </div>
  );
};

export default Sponsors;