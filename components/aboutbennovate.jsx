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
          To provide budding entrepreneurs an ideal platform to showcase their talent, Bennett
University is coming up with its Third edition of the entrepreneurship summit this year,
titled 'Bennovate 4.0'
.
The summit is being organized to recognize & reward the spark of entrepreneurship
among young innovators as well as school students, to make them believe that they
have the power to create the future they want to live in.
The two-day event provides an avenue to bring together industry veterans to interact
and draw attention to best practices and promote innovation.
Bennovate will offer a key networking opportunity that provides students with a
competitive environment to share ideas and foster a community of innovation and
entrepreneurship. This is the ideal platform for startups from ideation stage to
commercialized stage.
          </p>
          
          {/* Optional: Add a CTA button */}
          <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-lg
            hover:bg-red-500 transition-colors duration-300 text-lg hover:shadow-lg hover:shadow-red-500/30">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutGES;