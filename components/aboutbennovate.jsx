import React from 'react';

const AboutGES = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors duration-300">
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQFiTLXz_cdjUQ/feedshare-shrink_800/feedshare-shrink_800/0/1732355828136?e=2147483647&v=beta&t=DOw44X2Jjpxh7evr1XHsYBYKUttu7QTMA1pbNw7PLBs"
            alt="Conference Hall"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <p className="text-red-400 text-lg mb-2">Fueling Ideas</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Bennovate 4.0 ?
            </h2>
          </div>
                    
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Bennett Hatchery, under the Centre for Innovation and Entrepreneurship, Bennett
University is organizing its momentous Entrepreneurship summit “Bennovate” at the
campus. The E-summit is being held with the support of StartinUP (UP govt) and WASME
(World Association of Small and Medium Enterprises).The E-summit will be conducting a
variety of entrepreneurship events catering to an array of audiences across all the verticals
of entrepreneurship. The event will include Young start-ups which will be independent
from school and colleges. School student innovators, Wannapreneurs, Government
officials, Corporates, Industry Leaders, Investors, Academic Community will also be a part
of the E-summit
          </p>
          
        
        </div>
      </div>
    </div>
  );
};

export default AboutGES;