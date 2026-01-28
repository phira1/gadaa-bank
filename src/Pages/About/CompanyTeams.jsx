import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaSearch,
  FaFilter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
  FaChevronDown,
  FaUserCheck,
  FaShieldAlt,
  FaChartLine,
  FaFileContract,
  FaHandshake
} from 'react-icons/fa';

const CompanyTeams = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Board of Directors Data
  const boardMembers = [
    {
      id: 1,
      name: 'Dr. Hassan Hussen',
      position: 'Chair Person',
      qualifications: 'EdD MBA GENERAL MANAGEMENT',
      experience: '33 years of work experience',
      committee: 'Credit Committee Member',
      photo: 'hassan-hussen.jpg',
      linkedin: '#',
      email: 'chairman@gadaabank.com'
    },
    {
      id: 2,
      name: 'Mr. Hailu Ifa Gonda',
      position: 'V/Chair Person',
      qualifications: 'BA DEGREE ACCOUNTING MA IN ORGANIZATIONAL LEADERSHIP',
      experience: '37 years of work experience',
      committee: 'Nomination and Remuneration Committee Member',
      photo: 'hailu-ifa-gonda.jpg',
      linkedin: '#',
      email: 'vchairman@gadaabank.com'
    },
    {
      id: 3,
      name: 'Ambassador Mulu Solomon Bezuneh',
      position: 'Member',
      qualifications: 'M.A in Development Studies',
      experience: 'More than 25 years of experience',
      committee: 'Nomination and Remuneration Committee Chairperson',
      photo: 'mulu-solomon-bezuneh.jpg',
      linkedin: '#',
      email: 'm.bezuneh@gadaabank.com'
    },
    {
      id: 4,
      name: 'Dr. Degefe Duressa',
      position: 'Member',
      qualifications: 'PhD IN DEVELOPMENT FINANCE, MA ACCOUNTING INFORMATION',
      experience: '41 years of work experience',
      committee: 'Audit Committee Chairperson',
      photo: 'degefe-duressa.jpg',
      linkedin: '#',
      email: 'd.duressa@gadaabank.com'
    },
    {
      id: 5,
      name: 'Mr. Wasihun Amenu',
      position: 'Member',
      qualifications: 'MA IN COOPERATIVE MANAGEMENT',
      experience: '23 years of work experience',
      committee: 'Nomination and Remuneration Committee Member, Credit Committee Member',
      photo: 'wasihun-amenhu.jpg',
      linkedin: '#',
      email: 'w.amenhu@gadaabank.com'
    },
    {
      id: 6,
      name: 'Mr. Hamdeno Mideso',
      position: 'Member',
      qualifications: 'MBA SPECIALIZED IN PROJECT MANAGEMENT',
      experience: '12 years of work experience',
      committee: 'Nomination and Remuneration Committee Member, Risk Management and Compliance Committee Member',
      photo: 'hamdeno-mideso.jpg',
      linkedin: '#',
      email: 'h.mideso@gadaabank.com'
    },
    {
      id: 7,
      name: 'Dr. Kassim Kuffa Jarra',
      position: 'Member',
      qualifications: 'PhD in Law',
      experience: 'More than 15 years of experience',
      committee: 'Risk Management and Compliance Committee Member, Audit Committee Member',
      photo: 'kassim-kuffa-jarra.jpg',
      linkedin: '#',
      email: 'k.jarra@gadaabank.com'
    },
    {
      id: 8,
      name: 'Mrs. Semira Abdela',
      position: 'Member',
      qualifications: 'BA IN MARKETING MANAGEMENT',
      experience: '13 years of work experience',
      committee: 'Audit Committee Member',
      photo: 'semira-abdela.jpg',
      linkedin: '#',
      email: 's.abdela@gadaabank.com'
    },
    {
      id: 9,
      name: 'Obbo Tilahun Tadesse Tuji',
      position: 'Member',
      qualifications: 'M.A in Business Leadership (MBL)',
      experience: 'More than 30 years of experience',
      committee: 'Credit Committee Chairperson',
      photo: 'tilahun-tadesse-tuji.jpg',
      linkedin: '#',
      email: 't.tuji@gadaabank.com'
    },
    {
      id: 10,
      name: 'Eng. Ashenafi Daba Abdi',
      position: 'Member',
      qualifications: 'MSc in Civil Engineering',
      experience: 'More than 14 years of experience',
      committee: 'Credit Committee Member',
      photo: 'ashenafi-daba-abdi.jpg',
      linkedin: '#',
      email: 'a.abdi@gadaabank.com'
    },
    {
      id: 11,
      name: 'Dr. Gutu Tesso',
      position: 'Member',
      qualifications: 'PhD in Economics',
      experience: '25 years of work experience',
      committee: 'Risk Management and Compliance Committee Chairperson',
      photo: 'gutu-tesso.jpg',
      linkedin: '#',
      email: 'g.tesso@gadaabank.com'
    }
  ];

  // Board Subcommittees Data
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

  // Filter members based on search and category
  const filteredMembers = boardMembers.filter(member => {
    const matchesSearch = searchTerm === '' || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'all') return matchesSearch;
    if (activeCategory === 'chair') return matchesSearch && member.position.toLowerCase().includes('chair');
    if (activeCategory === 'committee-chairs') return matchesSearch && member.committee.toLowerCase().includes('chairperson');
    
    return matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Members', count: boardMembers.length },
    { id: 'chair', name: 'Chair & Vice Chair', count: 2 },
    { id: 'committee-chairs', name: 'Committee Chairs', count: 4 }
  ];

  // Get photo URL with fallback
  const getPhotoUrl = (filename) => {
    // In production, this would be from your assets folder
    // For now, using a placeholder service with red/black theme
    return `https://ui-avatars.com/api/?name=${filename.split('.')[0]}&background=dc2626&color=fff&bold=true&size=400`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
        <Link 
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
            <FaUsers className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Board</span> of Directors
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet our esteemed Board of Directors who provide strategic guidance and oversight for Gadaa Bank
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search board members by name, position, or qualification..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FaFilter className="text-red-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMembers.map(member => {
            const Icon = FaUserTie;
            return (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Photo Section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-50 to-gray-100">
                  <img 
                    src={getPhotoUrl(member.photo)}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name.split(' ')[0]}&background=dc2626&color=fff&bold=true&size=400`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-black text-white text-sm font-bold rounded-full">
                      {member.position.includes('Chair') ? 'Leadership' : 'Board Member'}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-red-600 font-semibold mb-2">{member.position}</p>
                    </div>
                    <Icon className="text-gray-300 text-2xl" />
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-1">
                      <span className="font-medium">Qualifications:</span>
                    </div>
                    <p className="text-gray-700 text-sm">{member.qualifications}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-center text-gray-600 mb-1">
                      <FaBuilding className="text-red-500 mr-2" />
                      <span className="font-medium">Experience:</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{member.experience}</p>
                  </div>

                  {/* Committee Assignment */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100">
                    <div className="flex items-center text-gray-800 mb-1">
                      <FaHandshake className="text-red-600 mr-2" />
                      <span className="font-bold">Committee Assignment:</span>
                    </div>
                    <p className="text-gray-700 text-sm">{member.committee}</p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaEnvelope className="text-xl" />
                    </button>
                    <button className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaLinkedin className="text-xl" />
                    </button>
                    <button className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaPhone className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Subcommittees Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              <span className="text-red-600">Board</span> Subcommittees
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized committees that oversee critical aspects of bank governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {committees.map(committee => {
              const CommitteeIcon = committee.icon;
              return (
                <div 
                  key={committee.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-xl flex items-center justify-center mr-4">
                      <CommitteeIcon className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full mr-3">
                          {committee.id}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{committee.name}</h3>
                      </div>
                      <p className="text-gray-600 mt-1">{committee.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center text-gray-800 mb-3">
                      <span className="font-bold">Chairperson:</span>
                    </div>
                    <div className="flex items-center p-3 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100">
                      <FaUserTie className="text-red-600 mr-3" />
                      <span className="font-semibold text-gray-900">{committee.chairperson}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center text-gray-800 mb-3">
                      <span className="font-bold">Committee Members:</span>
                    </div>
                    <div className="space-y-2">
                      {committee.members.map((member, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <FaChevronRight className="text-red-500 mr-3" />
                          <span className="text-gray-700">{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Experience Section */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">{boardMembers.length}</div>
              <div className="text-lg font-medium">Board Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">4</div>
              <div className="text-lg font-medium">Active Committees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">300+</div>
              <div className="text-lg font-medium">Combined Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Contact for Board Matters */}
        <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-xl border border-red-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Board Secretary's Office</h3>
              <p className="text-gray-700">
                For official board communications and governance matters
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:scale-105 transition-all duration-300">
                Contact Board Secretary
              </button>
              <button className="px-6 py-3 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300">
                View Governance Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTeams;