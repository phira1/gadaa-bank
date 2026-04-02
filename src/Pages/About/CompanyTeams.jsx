import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers } from 'react-icons/fa';

import { boardMembers, committees } from '../../data/boardData';
import HeroSection from './components/HeroSection';
import MemberCard from './components/MemberCard';
import StatsSection from './components/StatsSection';
import BoardSubcommittees from './components/BoardSubcommittees';

const CompanyTeams = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) setAnimated(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  const extractYears = (expString) => {
    const match = expString.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };
  const totalBoardExperience = boardMembers.reduce((sum, m) => sum + extractYears(m.experience), 0);

  const statsItems = [
    { value: boardMembers.length, label: 'Board Members' },
    { value: '4', label: 'Active Committees' },
    { value: `${totalBoardExperience}+`, label: 'Combined Years of Experience' }
  ];

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Board of Directors</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        <HeroSection
          icon={FaUsers}
          title={<span><span className="text-red-600">Board</span> of Directors</span>}
          description="Meet our esteemed Board of Directors who provide strategic guidance and oversight for Gadaa Bank"
          fadeInUp={fadeInUp}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {boardMembers.map(member => (
            <MemberCard key={member.id} member={member} type="board" />
          ))}
        </motion.div>

        <BoardSubcommittees committees={committees} fadeInUp={fadeInUp} />

        <StatsSection items={statsItems} className="mb-8" />
      </div>
    </div>
  );
};

export default CompanyTeams;