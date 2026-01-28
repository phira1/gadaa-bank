import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Difference = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  const differences = [
    {
      number: '01',
      title: 'MORE THAN 90% OF OUR SHAREHOLDERS ARE YOUTH',
      description: 'The shareholders are mainly youth residing both in the country and overseas, bringing fresh perspectives and innovation to our operations.'
    },
    {
      number: '02',
      title: 'FIRST BANK TO IMPLEMENT COMMUNITY BANKING',
      description: 'We serve customers where branch networks are not available, bringing banking services directly to underserved communities across the nation.'
    },
    {
      number: '03',
      title: 'SPECIAL FOCUS ON HUMAN CAPITAL',
      description: 'When you work at Gadaa Bank, you become part of a high-performance team dedicated to excellence and continuous professional development.'
    },
    {
      number: '04',
      title: 'USING ADVANCED DIGITAL BANKING TECHNOLOGY',
      description: 'A modern and user-friendly interface for day-to-day banking operations, ensuring seamless digital experiences for all our customers.'
    }
  ];

  return (
    <section id="difference" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title mb-4 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>What Makes Us Different?</h2>
        <p className={`section-subtitle ${animated ? 'animate-fadeInUp animate-delay-100' : 'opacity-0'}`}>
          Discover the unique qualities that set Gadaa Bank apart in the financial industry
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {differences.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={animated ? { animationDelay: `${index * 150 + 200}ms` } : {}}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-red-100">
                {item.number}
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-red-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 pr-12">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center ${animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
             style={animated ? { animationDelay: '800ms' } : {}}>
          <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 group">
            Read More
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Difference;