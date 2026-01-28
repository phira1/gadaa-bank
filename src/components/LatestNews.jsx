// components/LatestNews.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaCalendarAlt, FaEye } from 'react-icons/fa';

const LatestNews = () => {
  const [animated, setAnimated] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
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

  const newsItems = [
    {
      id: 1,
      date: '5 December',
      title: '22ኛው ዓለም አቀፍ የፀረ-ሙስና ቀን',
      description: 'Gadaa Bank celebrates International Anti-Corruption Day with various awareness programs and initiatives.',
      image: 'news-anti-corruption.png',
      link: '#',
      fullContent: 'Gadaa Bank joined the world in commemorating the 22nd International Anti-Corruption Day. The bank organized various events and workshops to promote transparency and ethical practices in the financial sector.'
    },
    {
      id: 2,
      date: '11 November',
      title: 'Waamicha Yaa\'ii Waliigalaa Idilee 4ffaa Abbootii Aksiyoonaa የገዳ ባንክ አ.ማ የባለአክሲዮኖች 4ኛ መደበኛ ጠቅላላ ጉባዔ ጥሪ',
      description: 'Announcement for the 4th Regular General Assembly of Gadaa Bank Shareholders.',
      image: 'news-general-assembly.png',
      link: '#',
      fullContent: 'Gadaa Bank S.C. announces the 4th Regular General Assembly of shareholders. The meeting will discuss annual reports, financial statements, and strategic directions for the coming year.'
    },
    {
      id: 3,
      date: '24 June',
      title: 'Gadaa Bank S.C. Officially Listed on the Ethiopian Securities Exchange ገዳ ባንክ አ.ማ በኢትዮጵያ ሰነደ-ሙዓለ ንዋዮች ገበያ ላይ ተመዘገበ',
      description: 'Historic milestone as Gadaa Bank becomes listed on the Ethiopian Securities Exchange.',
      image: 'news-stock-exchange.png',
      link: '#',
      fullContent: 'In a historic moment for Ethiopian banking, Gadaa Bank S.C. has been officially listed on the Ethiopian Securities Exchange. This marks a significant step in the bank\'s growth and commitment to transparency.'
    },
    {
      id: 4,
      date: '21 December',
      title: 'የገዳ ባንክ ባለአሲዮኖች ዓመታዊ 3ኛ መደበኛ እና 3ኛ አስችኳይ ጠቅላላ ጉባኤ',
      description: 'Annual 3rd Regular and 3rd Extraordinary General Assembly of Gadaa Bank Shareholders.',
      image: 'news-digital-platform.png',
      link: '#',
      fullContent: 'Gadaa Bank successfully conducted its 3rd Annual Regular and 3rd Extraordinary General Assembly. Key resolutions were passed regarding the bank\'s expansion and service improvement plans.'
    },
    {
      id: 5,
      date: '15 October',
      title: 'BOARD OF DIRECTORS ELECTION RESULT',
      description: '',
      image: 'news-annual-meeting.png',
      link: '#',
      fullContent: 'Gadaa Bank has launched a state-of-the-art digital banking platform featuring enhanced security, user-friendly interface, and more services accessible from mobile devices.'
    },
    {
      id: 6,
      date: '8 September',
      title: 'Community Banking Initiative Reaches 100 Locations',
      description: 'Gadaa Bank\'s community banking program expands to serve more remote areas.',
      image: 'news-community-banking.png',
      link: '#',
      fullContent: 'The bank\'s pioneering Community Banking Initiative has now reached 100 locations across Ethiopia, bringing banking services to previously underserved communities.'
    }
  ];

  const handleViewMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <section id="latest-news" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`section-title mb-4 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
            Latest News
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto ${animated ? 'animate-fadeInUp animate-delay-100' : 'opacity-0'}`}>
            Stay updated with the latest developments, announcements, and achievements from Gadaa Bank
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {newsItems.slice(0, visibleItems).map((item, index) => (
            <div 
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={animated ? { animationDelay: `${index * 100}ms` } : {}}
            >
              {/* News Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={`/images/news/${item.image}`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    News
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2 text-red-500" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={item.link}
                    className="inline-flex items-center text-red-600 font-medium text-sm group/link"
                  >
                    Read More
                    <FaArrowRight className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <div className="flex items-center text-gray-400 text-xs">
                    <FaEye className="mr-1" />
                    <span>1.2k views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Only show if there are more items to load */}
        {visibleItems < newsItems.length && (
          <div className={`text-center ${animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
               style={animated ? { animationDelay: '500ms' } : {}}>
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