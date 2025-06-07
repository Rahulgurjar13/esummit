import { useEffect, useRef, useState } from 'react';

const KeyFeatures = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    { 
      number: 20, 
      suffix: 'K+', 
      label: 'Attendees',
      description: 'Industry professionals from across the globe'
    },
    { 
      number: 25, 
      suffix: '+', 
      label: 'Startups',
      description: 'Innovative companies showcasing cutting-edge technology'
    },
    { 
      number: 50, 
      suffix: '+', 
      label: 'Events',
      description: 'Keynotes, workshops, and networking opportunities'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startAnimation) return;
      
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startAnimation]);
    
    return count;
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-black"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-light mb-4 transition-all duration-800 ${
            startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-white">Our </span>
            <span className="text-red-600 font-normal">Impact</span>
          </h2>
          <div className={`w-16 h-px bg-red-600 mx-auto transition-all duration-1000 delay-300 ${
            startAnimation ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`text-center group transition-all duration-700 ${
                startAnimation
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 200}ms`,
              }}
            >
              {/* Numbers */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-7xl sm:text-8xl font-light text-red-600 tracking-tight">
                    {startAnimation ? (
                      <AnimatedCounter end={feature.number} duration={2} />
                    ) : (
                      0
                    )}
                  </span>
                  <span className="text-4xl text-red-400 font-light ml-2">
                    {feature.suffix}
                  </span>
                </div>
              </div>
              
              {/* Label */}
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-red-400 
                transition-colors duration-300">
                {feature.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto
                group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Subtle hover line */}
              <div className="w-0 group-hover:w-12 h-px bg-red-600 mx-auto mt-6 
                transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;