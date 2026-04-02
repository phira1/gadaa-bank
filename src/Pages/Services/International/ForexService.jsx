import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaExchangeAlt,
  FaEnvelope,
  FaUser,
  FaShieldAlt,
  FaSyncAlt,
  FaInfoCircle,
  FaDollarSign,
  FaReceipt,
  FaPlane,
  FaBriefcaseMedical,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaPhoneAlt
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const ForexService = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ratesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forex request submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const forexServices = [
    { icon: FaDollarSign, title: 'Purchase of FCY Cash Notes', description: 'Forex bureau of the Gadaa Bank buy FCY Cash Notes at the prevailing exchange rate of day.' },
    { icon: FaReceipt, title: 'Sales of FCY Cash Notes', description: 'Sell FCY Cash Notes for various expenses as per NBE directives and bank policies.' }
  ];

  const allowedPurposes = [
    { icon: FaPlane, title: 'Business Travel', description: 'Travel allowance for business purposes' },
    { icon: FaBriefcaseMedical, title: 'Medical Expenses', description: 'Healthcare and medical treatment costs' },
    { icon: FaGraduationCap, title: 'Educational Expenses', description: 'Tuition fees and educational costs' },
    { icon: FaUmbrellaBeach, title: 'Holiday Travel', description: 'Vacation and holiday travel expenses' },
    { icon: FaExchangeAlt, title: 'General Transfers', description: 'Other approved transfers as per directives' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <motion.div 
        className="bg-gradient-to-r from-black via-gray-900 to-black py-4 md:py-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Forex Service</span>
          </nav>
        </div>
        <motion.div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
      </motion.div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 md:pt-8">
        <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 text-sm md:text-base">
          <FaArrowLeft className="mr-2" /> Back to All Services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img src="/images/forex-service.jpg" alt="Forex Services" className="w-full h-full object-cover object-top md:object-center" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)'; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <FaExchangeAlt className="text-white text-xl md:text-2xl" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">Forex Service</h1>
              </div>
              <p className="text-lg md:text-2xl text-white/90 font-light">Purchase and Sales of Foreign Currency (FCY) Cash Notes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate={controls}>
          {/* Description */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <FaSyncAlt className="text-red-600 mr-2 animate-spin-slow" /> Foreign Currency Services
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">Forex bureau of the Gadaa Bank buys FCY Cash Notes at the prevailing exchange rate of day.</p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">Forex bureau of the Gadaa Bank also sells FCY Cash Notes for Business travel allowance, medical expenses, educational expenses, Holiday travel expenses, and General transfers as per updated NBE's Directives and the Bank's Policies and Procedures.</p>
            </div>
          </motion.div>

          {/* Forex Rate Request Form */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Forex <span className="text-red-600">Rate</span> Request</h2>
            <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white rounded-xl p-6 md:p-8 shadow-lg border border-red-100">
              {submitted ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <FaCheckCircle className="text-red-600 text-4xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-700">We'll send updated rates to <strong className="text-red-700">{formData.email}</strong></p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Enter your full name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-gradient-to-r from-red-600 to-black text-white font-bold rounded-lg hover:shadow-lg transition">Get Exchange Rates</button>
                </form>
              )}
              <div className="mt-4 text-center text-gray-600 text-sm flex items-center justify-center"><FaShieldAlt className="mr-2 text-red-600" /> Your information is secure and will only be used for rate updates</div>
            </div>
          </motion.div>

          {/* Our Forex Services */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Our <span className="text-red-600">Forex</span> Services</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {forexServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-2xl text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Allowed Purposes */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 md:p-8 shadow-lg border border-red-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Allowed <span className="text-red-600">Purposes</span> for FCY Sales</h2>
              <p className="text-gray-700 text-center text-sm md:text-base mb-6">Forex bureau sells FCY Cash Notes for the following purposes as per NBE directives:</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {allowedPurposes.map((purpose, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 shadow-sm border border-red-100 text-center hover:-translate-y-1 transition">
                    <purpose.icon className="text-red-600 text-xl mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{purpose.title}</h3>
                    <p className="text-gray-600 text-xs">{purpose.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-red-600 text-lg flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">All FCY transactions are conducted in compliance with National Bank of Ethiopia (NBE) directives and Gadaa Bank's internal policies and procedures. Proper documentation is required for all FCY purchases and sales.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simplified CTA - Contact Our Team */}
          <motion.div variants={itemVariants} className="text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
              <FaPhoneAlt className="text-sm" />
              Contact Our Forex Team
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom CSS for slow spin */}
      <style jsx>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: slowSpin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ForexService;