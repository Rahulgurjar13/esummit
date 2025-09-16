import React from 'react';
import { Award } from 'lucide-react';

const partnersData = [
  {
    name: 'LakMe',
    image: 'https://getvectorlogo.com/wp-content/uploads/2018/12/lakme-vector-logo.png',
  },
  {
    name: 'RedTape',
    image: 'https://i.pinimg.com/736x/ba/bf/e4/babfe4cadba602b742f08cb2cc73cc2f.jpg',
  },
  {
    name: 'Burger King',
    image: 'https://images.seeklogo.com/logo-png/2/1/burger-king-logo-png_seeklogo-23687.png',
  },
  {
    name: 'Pepsi',
    image: 'https://graphicsprings.com/wp-content/uploads/2023/07/image-178-3-1024x683.jpg',
  },
  {
    name: 'EaseMyTrip',
    image: 'https://images.seeklogo.com/logo-png/35/1/easemytrip-com-logo-png_seeklogo-351185.png',
  },
  {
    name: 'Femina',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/432704925/EU/NP/YN/184162459/afaqs-2020-11-897aa17c-6d41-4951-a73a-c383421cd793-femina-brand-logo-500x500.webp',
  },
  {
    name: 'Garnier',
    image: 'https://1000logos.net/wp-content/uploads/2022/04/Garnier-logo.jpg',
  },
  {
    name: 'Dominos',
    image: 'https://inkbotdesign.com/wp-content/uploads/2012/09/Dominos-Logo-Design.png.webp',
  },
];

const PartnerCard = ({ partner }) => {
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
            src={partner.image}
            alt={partner.name}
            className="relative h-24  w-auto max-w-48 object-contain filter brightness-105 
              group-hover:brightness-110 transition-all duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Partner name */}
        <h3 className="text-2xl mt-10 text-white/95 mb-3 group-hover:text-white 
          transition-colors duration-500 tracking-wide font-light">
          {partner.name}
        </h3>

        {/* Premium accent line */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-red-600 via-red-400/80 to-red-600 
          group-hover:w-24 transition-all duration-700 group-hover:from-gray-400/80 
          group-hover:via-gray-300/90 group-hover:to-gray-400/80 shadow-red-500 " />
      </div>

      {/* Subtle corner highlight */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.02] 
        to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 
        transition-opacity duration-700" />
    </div>
  );
};

const Partners = () => {
  return (
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
         
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6">
            <span className="text-red-600">Past </span>
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-normal">
            Sponsor
            </span>
          </h2>
          
          

          <div className="mt-10">
            <div className="w-200 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent mx-auto" />
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnersData.map((partner, index) => (
            <PartnerCard
              key={index}
              partner={partner}
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
  );
};

export default Partners;