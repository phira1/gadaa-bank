import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaEye, 
  FaBullseye, 
  FaHandshake, 
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaGlobe,
  FaHandHoldingHeart,
  FaHeart,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';

const CompanyHistory = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  const coreValues = [
    {
      letter: 'G',
      title: 'GROWTH MINDSET',
      icon: FaChartLine,
      items: ['Innovative', 'Hard Worker', 'Higher Achievement'],
      color: 'bg-gradient-to-br from-red-600 to-red-800'
    },
    {
      letter: 'A',
      title: 'APPROACHABLE',
      icon: FaHandshake,
      items: ['Friendly Partner', 'Easy of doing'],
      color: 'bg-gradient-to-br from-gray-800 to-black'
    },
    {
      letter: 'D',
      title: 'DIVERSITY',
      icon: FaUsers,
      items: ['Inclusive', 'Respectful', 'Participatory'],
      color: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
      letter: 'A',
      title: 'ACCOUNTABILITY',
      icon: FaShieldAlt,
      items: ['Professionalism', 'Reliable', 'Transparent'],
      color: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    {
      letter: 'A',
      title: 'ACCESSIBILITY',
      icon: FaGlobe,
      items: ['Reachable', 'Digitized', 'Affordable'],
      color: 'bg-gradient-to-br from-red-600 to-red-900'
    }
  ];

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav>
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-red-600 hover:text-red-700 font-medium">Home</Link></li>
              <li className="text-gray-400">›</li>
              <li className="text-gray-600 font-medium">Company Overview</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 overflow-hidden bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl ${
            animated ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Company Overview</h1>
            <p className="text-xl text-gray-700 mb-8">
              Pioneering Financial Inclusion and Empowerment Across Ethiopia
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Establishment Section with Image */}
        <div className={`flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto mb-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '200ms' } : {}}>
          {/* Image Column */}
          <div className="lg:w-2/5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Gadaa Bank Building Image */}
              <img 
                src="/images/gadaa-building.jpg" 
                alt="Gadaa Bank Headquarters Building" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border-4 border-red-600/20 rounded-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">Gadaa Bank Headquarters</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Establishment & Foundation</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-red-600">Gadaa Bank</span> was established to contribute towards economic empowerment and holistic transformation of the low & medium-income section of the population in the country.
              </p>
              <p>
                The founding members made an intensive reflection on the livelihoods of large majority of Ethiopian farmers, pastoralists, young college graduates with entrepreneurial skills and women who do not have access to financial services in general and in particular to loan types that suits their contexts.
              </p>
              <p>
                This has made the establishment of the bank with more than <span className="font-bold text-gray-900">28,000 shareholders</span>. Founding shareholders deserve appreciation in the establishment of Gadaa Bank.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">
                  The founding shareholders meeting has been conducted in August 2021. In this meeting, eleven board of directors composed of appropriate professionals has been elected to lead the bank. The board of directors has also appointed CEO to lead the bank.
                </p>
                <p className="mt-4">
                  Accordingly, Gadaa Bank has earned its license on <span className="font-bold text-red-600">26th April 2022</span> to join the Ethiopian banking business.
                </p>
              </div>
              <p>
                The bank has been established with more than <span className="font-bold text-gray-900">ETB 1.167 billion</span> subscribed capital. The shareholders are mainly youth residing both in the country and overseas.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '400ms' } : {}}>
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <FaEye className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6">
              <p className="text-gray-800 text-lg font-medium italic leading-relaxed">
                "To Inspire and Enable Your Dream."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                We envision a future where every Ethiopian has access to financial tools that transform aspirations into reality.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <FaBullseye className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                "We are committed to deliver superior and customer-centric full-fledged banking services to our community in a friendly environment by deploying competent employees and art-of-technology whilst optimizing shareholders' value."
              </p>
            </div>
          </div>
        </div>

        {/* New Generation's Bank Section */}
        <div className={`text-center mb-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '600ms' } : {}}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              New Generation's Bank!
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Redefining banking for the digital age while staying rooted in our community values
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                title: 'Youth Empowerment', 
                desc: '90%+ shareholders are young Ethiopians', 
                icon: FaRocket,
                color: 'bg-gradient-to-br from-red-600 to-red-800' 
              },
              { 
                title: 'Digital First', 
                desc: 'Cutting-edge banking technology', 
                icon: FaLightbulb,
                color: 'bg-gradient-to-br from-gray-800 to-black' 
              },
              { 
                title: 'Community Focus', 
                desc: 'Serving previously unbanked areas', 
                icon: FaHeart,
                color: 'bg-gradient-to-br from-red-700 to-red-900' 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} rounded-xl p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <item.icon className="text-3xl mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Locator Section */}
        <div className={`bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-xl mb-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '800ms' } : {}}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How can we help you?
          </h3>
          <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
            Contact us at Gadaa Bank Branch nearest to you or submit a business inquiry online.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
              <FaPhone />
              Contact Us
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 transition duration-300 flex items-center justify-center gap-3">
              <FaHandHoldingHeart />
              Submit Inquiry
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: FaMapMarkerAlt, title: 'ATM Locator', desc: 'Find nearest ATM', color: 'bg-red-100' },
              { icon: FaMapMarkerAlt, title: 'Branch Locator', desc: 'Locate our branches', color: 'bg-gray-100' },
              { icon: FaUsers, title: 'Agent Locator', desc: 'Find banking agents', color: 'bg-red-100' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`${item.color} p-3 rounded-lg mr-4`}>
                    <item.icon className="text-red-600 text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Core Values */}
        <div className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '1000ms' } : {}}>
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: FaFacebook, color: 'bg-gray-800 hover:bg-black', label: 'Facebook' },
                { icon: FaTwitter, color: 'bg-gray-800 hover:bg-black', label: 'Twitter' },
                { icon: FaYoutube, color: 'bg-red-600 hover:bg-red-700', label: 'YouTube' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} text-white p-4 rounded-xl transition duration-300 transform hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
            <p className="text-gray-600">
              Follow us for latest updates, financial tips, and community initiatives.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className={`${value.color} rounded-lg p-3 text-white text-center transform hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-2xl font-bold">{value.letter}</div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition duration-300"
                >
                  <div className="flex items-center mb-2">
                    <value.icon className={`text-xl mr-3 ${
                      value.color.includes('red') ? 'text-red-600' : 'text-gray-700'
                    }`} />
                    <h4 className="font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {value.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '1200ms' } : {}}>
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Looking for a First-Class Banking Service?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Gadaa Bank with their financial journey
            </p>
            <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl">
              Join Us Today
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;