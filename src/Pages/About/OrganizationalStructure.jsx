import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers,
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine,
  FaUserTie,
  FaLaptop,
  FaMobileAlt,
  FaUserFriends,
  FaMoneyBillWave,
  FaChartPie,
  FaBuilding,
  FaUserCircle,
  FaMapMarkerAlt,
  FaHeadset,
  FaLock,
  FaNetworkWired,
  FaBullhorn,
  FaClipboardCheck,
  FaAssistiveListeningSystems,
  FaSitemap,
  FaArrowRight,
  FaChevronRight,
  FaChevronDown
} from 'react-icons/fa';

const OrganizationalStructure = () => {
  const [animated, setAnimated] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    'board': true,
    'internal-audit': true,
    'sharia': true,
    'ethics': true,
    'management': true,
    'operations': true,
    'technology': true,
    'support': true
  });
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

  const toggleSection = (sectionId, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const organizationalData = [
    {
      id: 'board',
      title: 'Board of Directors',
      icon: FaUsers,
      color: 'from-red-700 to-red-900',
      positions: ['Board Chairman', 'Board Members', 'CEO Secretary']
    },
    {
      id: 'internal-audit',
      title: 'Chief Internal Audit',
      icon: FaShieldAlt,
      color: 'from-gray-800 to-black',
      subDepartments: [
        {
          id: 'sharia',
          title: 'Sharia Compliance Committee',
          icon: FaBalanceScale,
          color: 'from-red-600 to-red-800',
          subDepartments: [
            {
              id: 'ethics',
              title: 'Ethics and Anti-Corruption',
              icon: FaShieldAlt,
              color: 'from-gray-700 to-gray-900',
              positions: [
                'Director Legal',
                'Executive Director- Strategy and Research',
                'Chief Customer Experience Officer',
                'Chief IT Officer',
                'Executive Director Digital Banking',
                'Chief Resource Management Officer'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'management',
      title: 'Management Team',
      icon: FaUserTie,
      color: 'from-red-600 to-red-800',
      positions: [
        'Director Human Capital Management',
        'Director Finance Management',
        'Director Share Capital Management',
        'Director Corporate and Institutional Banking',
        'Director Personal and SME Banking'
      ]
    },
    {
      id: 'operations',
      title: 'Operations & Banking',
      icon: FaBuilding,
      color: 'from-gray-800 to-black',
      positions: [
        'District Director',
        'Deputy Director Community Banking',
        'Manager Customer Experience and Compliance Handling Division'
      ]
    },
    {
      id: 'technology',
      title: 'Technology Division',
      icon: FaLaptop,
      color: 'from-red-700 to-red-900',
      positions: [
        'Director IS Security',
        'Director IT Infrastructure and Project Management',
        'Director IT',
        'Director Strategic Planning'
      ]
    },
    {
      id: 'support',
      title: 'Support Functions',
      icon: FaUserFriends,
      color: 'from-gray-700 to-gray-900',
      positions: [
        'Director Public Relations',
        'Director Risk and Compliance Management',
        'Assistant to CEO'
      ]
    }
  ];

  const renderDepartment = (dept, level = 0) => {
    const isExpanded = expandedSections[dept.id] || level < 2;
    
    return (
      <div 
        key={dept.id}
        className={`mb-4 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
        style={animated ? { animationDelay: `${level * 100 + 200}ms` } : {}}
      >
        {/* Department Card */}
        <div 
          className={`bg-gradient-to-br ${dept.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
            level > 0 ? 'ml-4 md:ml-8' : ''
          }`}
          onClick={(e) => dept.subDepartments && toggleSection(dept.id, e)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                <dept.icon className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{dept.title}</h3>
                {dept.positions && (
                  <p className="text-white/80 text-sm mt-1">
                    {dept.positions.length} position{dept.positions.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>
            
            {dept.subDepartments && (
              <button 
                className="text-white/80 hover:text-white transition-colors p-1"
                onClick={(e) => toggleSection(dept.id, e)}
              >
                {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </button>
            )}
          </div>
          
          {/* Positions List */}
          {dept.positions && isExpanded && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <ul className="space-y-2">
                {dept.positions.map((position, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-white/90 hover:text-white transition-colors pl-4 py-1"
                  >
                    <FaArrowRight className="text-xs mr-3 opacity-70" />
                    {position}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Sub-departments */}
        {dept.subDepartments && isExpanded && (
          <div className="mt-2 pl-4 md:pl-8 border-l-2 border-gray-300 ml-6">
            {dept.subDepartments.map(subDept => renderDepartment(subDept, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav>
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-red-600 hover:text-red-700 font-medium">Home</Link></li>
              <li className="text-gray-400">›</li>
              <li><Link to="/about" className="text-red-600 hover:text-red-700 font-medium">About Us</Link></li>
              <li className="text-gray-400">›</li>
              <li className="text-gray-600 font-medium">Organizational Structure</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 overflow-hidden bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center ${
            animated ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <FaSitemap className="text-red-600 text-3xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Organizational Structure</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transparent hierarchy showcasing our leadership, departments, and operational framework
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Organizational Chart Image */}
        <div className={`max-w-5xl mx-auto mb-12 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '100ms' } : {}}>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Organizational Chart
            </h2>
            <div className="relative rounded-xl overflow-hidden border-2 border-gray-300">
              {/* Actual Organizational Chart Image */}
              <img 
                src="/images/organizational-chart.png" 
                alt="Gadaa Bank Organizational Structure Chart"
                className="w-full h-auto object-contain bg-gray-50"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1536' height='864' viewBox='0 0 1536 864'%3E%3Crect width='1536' height='864' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' fill='%239ca3af'%3EGadaa Bank Organizational Chart%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  Gadaa Bank Organizational Structure Chart
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Click sections below to expand/collapse department details
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className={`max-w-4xl mx-auto mb-12 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '200ms' } : {}}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Organizational Framework</h2>
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                Gadaa Bank's organizational structure is designed to ensure <span className="font-semibold text-red-600">transparency, efficiency, and accountability</span> at all levels. Our hierarchical framework clearly defines roles, responsibilities, and reporting lines.
              </p>
              <p>
                The structure is built on principles of <span className="font-semibold">good governance, compliance, and customer-centric operations</span>, enabling us to deliver exceptional banking services while maintaining regulatory standards.
              </p>
              <div className="bg-red-50 p-6 rounded-xl mt-6">
                <p className="text-gray-800 font-medium">
                  <span className="text-red-600 font-bold">Tip:</span> Click on any department card to expand and view detailed positions and sub-departments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Department Structure */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Department Hierarchy
          </h2>
          
          {/* Top Level - Board of Directors */}
          <div className="text-center mb-12">
            <div className={`inline-block ${
              animated ? 'animate-fadeInUp' : 'opacity-0'
            }`} style={animated ? { animationDelay: '300ms' } : {}}>
              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-white shadow-2xl cursor-pointer"
                   onClick={(e) => toggleSection('board', e)}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full mr-4">
                    <FaUsers className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Board of Directors</h3>
                    <p className="text-white/80">Governing Body & Strategic Leadership</p>
                  </div>
                  <button className="ml-4 text-white/80 hover:text-white p-2">
                    {expandedSections['board'] ? <FaChevronDown /> : <FaChevronRight />}
                  </button>
                </div>
                
                {expandedSections['board'] && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['Board Chairman', 'Board Members', 'CEO Secretary'].map((position, index) => (
                        <div 
                          key={index}
                          className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <p className="font-medium">{position}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Connector Line */}
            <div className={`h-8 w-1 bg-gradient-to-b from-red-600 to-gray-300 mx-auto ${
              animated ? 'animate-fadeInUp' : 'opacity-0'
            }`} style={animated ? { animationDelay: '400ms' } : {}}></div>
          </div>

          {/* Main Departments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationalData.slice(1).map((dept, index) => (
              <div 
                key={dept.id}
                className={`${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={animated ? { animationDelay: `${index * 150 + 500}ms` } : {}}
              >
                {renderDepartment(dept)}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`max-w-4xl mx-auto mt-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '1000ms' } : {}}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Structure Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {[
                    'Clear reporting lines and accountability',
                    'Integrated compliance framework',
                    'Customer-centric department structure',
                    'Technology-driven operations',
                    'Community banking focus',
                    'Risk management integration'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-4">Governance Principles</h4>
                <ul className="space-y-3">
                  {[
                    'Board oversight on all major decisions',
                    'Independent audit functions',
                    'Sharia compliance monitoring',
                    'Ethics and anti-corruption measures',
                    'Regular performance reviews',
                    'Stakeholder engagement protocols'
                  ].map((principle, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation CTA */}
        <div className={`text-center mt-16 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '1200ms' } : {}}>
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Explore Our Leadership</h3>
            <p className="mb-6 opacity-90">
              Learn more about our Board of Directors and Management Team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about/company-teams#board"
                className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition duration-300"
              >
                Board of Directors
              </Link>
              <Link 
                to="/about/company-teams#management"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition duration-300"
              >
                Management Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;