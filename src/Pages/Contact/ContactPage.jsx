import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import components
import ContactHero from './components/ContactHero';
import ContactHeader from './components/ContactHeader';
import ContactInfoCards from './components/ContactInfoCards';
import ContactForm from './components/ContactForm';
import ContactMap from './components/ContactMap';
import DepartmentsList from './components/DepartmentsList';
import WorkingHours from './components/WorkingHours';
import SocialMedia from './components/SocialMedia';
import ContactCTA from './components/ContactCTA';

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const departmentsRef = useRef(null);
  const hoursRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const contactCardsControls = useAnimation();
  const formControls = useAnimation();
  const mapControls = useAnimation();
  const departmentsControls = useAnimation();
  const hoursControls = useAnimation();
  const socialControls = useAnimation();
  const ctaControls = useAnimation();

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const contactCardsInView = useInView(contactCardsRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });
  const departmentsInView = useInView(departmentsRef, { once: true, amount: 0.2 });
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.2 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  // Trigger animations
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (contactCardsInView) contactCardsControls.start('visible');
  }, [contactCardsInView, contactCardsControls]);

  useEffect(() => {
    if (formInView) formControls.start('visible');
  }, [formInView, formControls]);

  useEffect(() => {
    if (mapInView) mapControls.start('visible');
  }, [mapInView, mapControls]);

  useEffect(() => {
    if (departmentsInView) departmentsControls.start('visible');
  }, [departmentsInView, departmentsControls]);

  useEffect(() => {
    if (hoursInView) hoursControls.start('visible');
  }, [hoursInView, hoursControls]);

  useEffect(() => {
    if (socialInView) socialControls.start('visible');
  }, [socialInView, socialControls]);

  useEffect(() => {
    if (ctaInView) ctaControls.start('visible');
  }, [ctaInView, ctaControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ContactHero />

      <div className="container mx-auto px-3 md:px-4">
        <ContactHeader
          refProp={headerRef}
          controls={headerControls}
          fadeInUp={fadeInUp}
        />

        <ContactInfoCards
          refProp={contactCardsRef}
          controls={contactCardsControls}
          staggerChildren={staggerChildren}
          scaleIn={scaleIn}
        />

        {/* Main Content with Form and Map */}
        <div className="mb-8 md:mb-12">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <ContactForm
              refProp={formRef}
              controls={formControls}
              slideInLeft={slideInLeft}
              isMobile={isMobile}
            />

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <ContactMap
                refProp={mapRef}
                controls={mapControls}
                slideInRight={slideInRight}
              />
              <DepartmentsList
                refProp={departmentsRef}
                controls={departmentsControls}
                fadeInUp={fadeInUp}
              />
            </div>
          </div>
        </div>

        {/* Working Hours & Social Media */}
        <div className="mb-8 md:mb-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <WorkingHours
              refProp={hoursRef}
              controls={hoursControls}
              slideInLeft={slideInLeft}
              fadeInUp={fadeInUp}
            />
            <SocialMedia
              refProp={socialRef}
              controls={socialControls}
              slideInRight={slideInRight}
              scaleIn={scaleIn}
              fadeInUp={fadeInUp}
            />
          </div>
        </div>

        <ContactCTA
          refProp={ctaRef}
          controls={ctaControls}
          fadeInUp={fadeInUp}
        />
      </div>
    </div>
  );
};

export default ContactPage;