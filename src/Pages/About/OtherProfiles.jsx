import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

import { shariaCommitteeService } from '../../services';
import HeroSection from './components/HeroSection';
import MemberCard from './components/MemberCard';
import StatsSection from './components/StatsSection';

const OtherProfiles = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  useEffect(() => {
    const fetchCommitteeMembers = async () => {
      try {
        const response = await shariaCommitteeService.getAll();
        setCommitteeMembers(response?.data?.data || response?.data || (Array.isArray(response) ? response : []));
      } catch (error) {
        console.error('Failed to fetch sharia committee members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitteeMembers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  const extractYears = (bio) => {
    if (!bio) {
      return 0;
    }

    const match = String(bio).match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const totalYears = committeeMembers.reduce((sum, member) => sum + extractYears(member.bio), 0);

  const statsItems = [
    { value: committeeMembers.length, label: 'Committee Members' },
    { value: committeeMembers.some((member) => /chair/i.test(member.role || '')) ? '1+' : '0', label: 'Chairperson Roles' },
   
  ];

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Sharia Advisory Committee</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        <HeroSection
          icon={FaBalanceScale}
          title={<span><span className="text-red-600">Sharia</span> Advisory Committee</span>}
          description="Meet the committee members who provide Sharia governance, oversight, and guidance for the bank's interest-free banking products."
          fadeInUp={fadeInUp}
        />

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600" />
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {committeeMembers.map((member) => (
              <MemberCard key={member.id} member={member} type="committee" />
            ))}
          </motion.div>
        )}

        <StatsSection items={statsItems} />
      </div>
    </div>
  );
};

export default OtherProfiles;