import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaUserCheck, FaShieldAlt, FaChartLine, FaFileContract } from 'react-icons/fa';

import { boardService } from '../../services/boardService';
import HeroSection from './components/HeroSection';
import MemberCard from './components/MemberCard';
import StatsSection from './components/StatsSection';
import BoardSubcommittees from './components/BoardSubcommittees';

const committees = [
  {
    id: 1,
    name: 'Nomination and Remuneration Committee',
    chairperson: 'Ambassador Mulu Solomon Buzuneh',
    members: [
      'Obbo Hailu Ifa Gonda',
      'Obbo Hamdino Midesso Woya',
      'Obbo Wasihun Amenu Tiyiti'
    ],
    icon: FaUserCheck,
    description: 'Oversees board nominations and compensation policies'
  },
  {
    id: 2,
    name: 'Risk Management and Compliance Committee',
    chairperson: 'Dr. Gutu Tesso Boka',
    members: [
      'Dr. Kassim Kuffa Jarra',
      'Obbo Hamdino Midesso Woya'
    ],
    icon: FaShieldAlt,
    description: 'Monitors risk management and regulatory compliance'
  },
  {
    id: 3,
    name: 'Audit Committee',
    chairperson: 'Dr. Degefe Duressa Obo',
    members: [
      'Adde Semira Abdella Mohammed',
      'Dr. Kasim Kufa Jarra'
    ],
    icon: FaChartLine,
    description: 'Supervises internal and external audit processes'
  },
  {
    id: 4,
    name: 'Credit Committee',
    chairperson: 'Obbo Tilahun Tadesse Tuji',
    members: [
      'Dr. Hassan Hussein Kedir',
      'Obbo Wasihun Amenu Tiyiti',
      'Eng. Ashenafi Daba Abdi'
    ],
    icon: FaFileContract,
    description: 'Reviews and approves major credit facilities'
  }
];

const CompanyTeams = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const res = await boardService.getAll();
        setBoardMembers(res.data?.data || res.data || (Array.isArray(res) ? res : []));
      } catch (err) {
        console.error('Failed to fetch board members:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBoardMembers();
  }, []);

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
    if (!expString) return 0;
    const match = String(expString).match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };
  const totalBoardExperience = boardMembers.reduce((sum, m) => sum + extractYears(m.experience || m.bio), 0);

  const statsItems = [
    { value: boardMembers.length, label: 'Board Members' },
    { value: committees.length.toString(), label: 'Active Committees' },
    { value: `${totalBoardExperience > 0 ? totalBoardExperience + '+' : 'Agile'}`, label: 'Combined Years of Experience' }
  ];

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
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

        {loading ? (
           <div className="flex justify-center items-center h-48">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
           </div>
        ) : (
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
        )}

        <BoardSubcommittees committees={committees} fadeInUp={fadeInUp} />

        <StatsSection items={statsItems} className="mb-8" />
      </div>
    </div>
  );
};

export default CompanyTeams;