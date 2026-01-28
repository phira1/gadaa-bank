import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    branches: 0,
    shareholders: 0,
    capital: 0
  });

  const aboutRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetValues = {
    branches: 100,
    shareholders: 32,
    capital: 1.43
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            const duration = 2000; // 2 seconds
            const steps = 60;
            const interval = duration / steps;

            let currentBranches = 0;
            let currentShareholders = 0;
            let currentCapital = 0;

            const timer = setInterval(() => {
              currentBranches += targetValues.branches / steps;
              currentShareholders += targetValues.shareholders / steps;
              currentCapital += targetValues.capital / steps;

              if (currentBranches >= targetValues.branches) currentBranches = targetValues.branches;
              if (currentShareholders >= targetValues.shareholders) currentShareholders = targetValues.shareholders;
              if (currentCapital >= targetValues.capital) currentCapital = targetValues.capital;

              setCounters({
                branches: Math.floor(currentBranches),
                shareholders: Math.floor(currentShareholders),
                capital: parseFloat(currentCapital.toFixed(2))
              });

              if (currentBranches >= targetValues.branches && 
                  currentShareholders >= targetValues.shareholders && 
                  currentCapital >= targetValues.capital) {
                clearInterval(timer);
              }
            }, interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="py-16 bg-white" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 animate-fadeInUp">About Gadaa Bank</h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp">
          With decades of financial expertise, Gadaa Bank is committed to providing innovative banking 
          solutions that empower individuals and businesses to achieve their financial goals. Our 
          customer-centric approach ensures personalized service for every client.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mt-12">
          {/* Branch Locations */}
          <div className="text-center animate-fadeInUp">
            <h3 className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
              {counters.branches}<span className="text-5xl font-bold text-red-600 ml-1">+</span>
            </h3>
            <p className="text-gray-700 font-semibold text-lg">Branch Locations</p>
          </div>

          {/* Shareholders */}
          <div className="text-center animate-fadeInUp animate-delay-200">
            <div className="flex items-baseline justify-center">
              <h3 className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
                {counters.shareholders}
              </h3>
              <span className="text-3xl font-bold text-red-600 ml-1">k+</span>
            </div>
            <p className="text-gray-700 font-semibold text-lg">Share Holders</p>
          </div>

          {/* Subscribed Capital */}
          <div className="text-center animate-fadeInUp animate-delay-400">
            <div className="flex items-baseline justify-center">
              <h3 className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
                {counters.capital.toFixed(2)}
              </h3>
              <span className="text-3xl font-bold text-red-600 ml-1">B</span>
            </div>
            <p className="text-gray-700 font-semibold text-lg">Subscribed Capital</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;