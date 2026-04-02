// src/components/LatestNews.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import NewsCard from './NewsCard';
import { newsItems } from '../data/newsData';

const LatestNews = () => {
  const [animated, setAnimated] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) setAnimated(true);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  const handleViewMore = () => setVisibleItems((prev) => prev + 3);

  const displayedNews = newsItems.slice(0, visibleItems);
  const hasMore = visibleItems < newsItems.length;

  return (
    <section id="latest-news" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`section-title mb-4 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
            Latest News
          </h2>
          <p
            className={`section-subtitle max-w-2xl mx-auto ${
              animated ? 'animate-fadeInUp animate-delay-100' : 'opacity-0'
            }`}
          >
            Stay updated with the latest developments, announcements, and achievements from Gadaa Bank
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayedNews.map((news, index) => (
            <NewsCard key={news.id} news={news} animated={animated} delay={index * 100} />
          ))}
        </div>

        {hasMore && (
          <div
            className={`text-center ${animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
            style={animated ? { animationDelay: '500ms' } : {}}
          >
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-3 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              View More News
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;