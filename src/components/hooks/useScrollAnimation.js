import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    const checkScroll = () => {
      const elements = document.querySelectorAll(
        '.section-title, .section-subtitle, .looking-item, .tab-btn, ' +
        '.difference-item, .contact-item, .service-image, .service-info, ' +
        '.service-features li, .about-text, .stat-item, .read-more'
      );

      const triggerBottom = window.innerHeight * 0.85;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom && !element.classList.contains('animated')) {
          element.classList.add('animated');
          element.classList.add('animate-fadeInUp');
        }
      });
    };

    // Initial check
    checkScroll();

    // Add scroll listener
    window.addEventListener('scroll', checkScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return animatedElements;
};

export default useScrollAnimation;