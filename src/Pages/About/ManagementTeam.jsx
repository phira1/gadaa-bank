import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaSearch,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const ManagementTeam = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Helper to generate filename from name (lowercase, hyphenated)
  const getPhotoName = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg';
  };

  // Helper to generate email from name (custom mapping for known roles)
  const getEmail = (name) => {
    // Map specific roles to official emails
    if (name === 'Mr. Wolde Bulto') return 'ceo@gadaabank.com';
    if (name === 'Mr. Fati Haji') return 'cito@gadaabank.com';
    if (name === 'Mr. Eshetu Dheresa') return 'cceo@gadaabank.com';
    if (name === 'Mr. Abduljebar Kedir') return 'abduljebar.kedir@gadaabank.com';
    if (name === 'Mr. Legesse Jada') return 'legesse.jada@gadaabank.com';
    if (name === 'Mr. Dereje Mengistu') return 'dereje.mengistu@gadaabank.com';
    if (name === 'Mr. Ifa Abdissa') return 'ifa.abdissa@gadaabank.com';
    if (name === 'Mr. Fedesa Woreti Gelalcha') return 'fedesa.gelalcha@gadaabank.com';
    if (name === 'Mr. Robera Wokgari') return 'robera.wokgari@gadaabank.com';
    if (name === 'Mr. Gudeta Gelana') return 'gudeta.gelana@gadaabank.com';
    if (name === 'Mrs. Tenaye Aklilu') return 'tenaye.aklilu@gadaabank.com';
    if (name === 'Mr. Ulfata Regasa') return 'ulfata.regasa@gadaabank.com';
    if (name === 'Mr. Djorji Tone Djirata') return 'djorji.djirata@gadaabank.com';
    if (name === 'Mr. Milki Tonkolu') return 'milki.tonkolu@gadaabank.com';
    if (name === 'Mr. Fetene Alemu') return 'fetene.alemu@gadaabank.com';
    if (name === 'Mr. Debebe Feyisa') return 'debebe.feyisa@gadaabank.com';
    if (name === 'Mr. Yirgalem Teshome') return 'yirgalem.teshome@gadaabank.com';
    if (name === 'Mr. Muleta Debel') return 'muleta.debel@gadaabank.com';
    if (name === 'Mrs. Sebasegel Seyoum') return 'sebasegel.seyoum@gadaabank.com';
    if (name === 'Mr. Fikadu Urgesa') return 'fikadu.urgesa@gadaabank.com';
    // Fallback
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '.') + '@gadaabank.com';
  };

  // Helper to get LinkedIn placeholder
  const getLinkedIn = (name) => {
    return '#'; // placeholder
  };

  const managementTeam = [
    {
      id: 1,
      name: 'Mr. Wolde Bulto',
      position: 'Chief Executive Officer /CEO/',
      qualifications: 'International Economics (EMBA) from Addis Ababa University, Masters of Science in Economics from Addis Ababa University, BA degree in Economics from Addis Ababa University',
      experience: '25 Years of Working Experience',
      photo: getPhotoName('Mr. Wolde Bulto'),
      linkedin: getLinkedIn('Mr. Wolde Bulto'),
      email: getEmail('Mr. Wolde Bulto')
    },
    {
      id: 2,
      name: 'Mr. Fati Haji',
      position: 'Chief Information Technology Officer /CITO/',
      qualifications: 'MA in Business Management from Lead Star College, BSc Statistics from Addis Ababa University',
      experience: '33 Years of Working Experience',
      photo: getPhotoName('Mr. Fati Haji'),
      linkedin: getLinkedIn('Mr. Fati Haji'),
      email: getEmail('Mr. Fati Haji')
    },
    {
      id: 3,
      name: 'Mr. Eshetu Dheresa',
      position: 'Chief Customer Experience Officer /CCEO/',
      qualifications: 'MA in Business Administration from Lead Star University College, BA in Accounting from Addis Ababa University',
      experience: '18 Years of Working Experience',
      photo: getPhotoName('Mr. Eshetu Dheresa'),
      linkedin: getLinkedIn('Mr. Eshetu Dheresa'),
      email: getEmail('Mr. Eshetu Dheresa')
    },
    {
      id: 4,
      name: 'Mr. Abduljebar Kedir',
      position: 'Executive Director Interest Free Banking Department',
      qualifications: 'MBA in Business Administration from Rift Valley University, BA in Management from Haramaya University',
      experience: '13 Years of Working Experience',
      photo: getPhotoName('Mr. Abduljebar Kedir'),
      linkedin: getLinkedIn('Mr. Abduljebar Kedir'),
      email: getEmail('Mr. Abduljebar Kedir')
    },
    {
      id: 5,
      name: 'Mr. Legesse Jada',
      position: 'Chief Internal Audit Department',
      qualifications: 'MA in Business Administration from Lead Star University College, BA in Accounting from Addis Ababa University',
      experience: '27 Years of Working Experience',
      photo: getPhotoName('Mr. Legesse Jada'),
      linkedin: getLinkedIn('Mr. Legesse Jada'),
      email: getEmail('Mr. Legesse Jada')
    },
    {
      id: 6,
      name: 'Mr. Dereje Mengistu',
      position: 'Chief Risk and Compliance Department',
      qualifications: 'MA in Human Resource Management from Addis Ababa University, BA in Management and Public Administration from Addis Ababa University',
      experience: '25 Years of Working Experience',
      photo: getPhotoName('Mr. Dereje Mengistu'),
      linkedin: getLinkedIn('Mr. Dereje Mengistu'),
      email: getEmail('Mr. Dereje Mengistu')
    },
    {
      id: 7,
      name: 'Mr. Ifa Abdissa',
      position: 'Executive Director – Digital Banking Department',
      qualifications: 'MSc in Computer Science from American College of Technology, MA in Business Administration from Lead Star University College, BA in Management from Bahir Dar University',
      experience: '14 Years of Working Experience',
      photo: getPhotoName('Mr. Ifa Abdissa'),
      linkedin: getLinkedIn('Mr. Ifa Abdissa'),
      email: getEmail('Mr. Ifa Abdissa')
    },
    {
      id: 8,
      name: 'Mr. Fedesa Woreti Gelalcha',
      position: 'Director- Information System Security Department',
      qualifications: 'MSc in Computer Science from American College of Technology, BSc in Management Information System from Unity University',
      experience: '15 Years of Working Experience',
      photo: getPhotoName('Mr. Fedesa Woreti Gelalcha'),
      linkedin: getLinkedIn('Mr. Fedesa Woreti Gelalcha'),
      email: getEmail('Mr. Fedesa Woreti Gelalcha')
    },
    {
      id: 9,
      name: 'Mr. Robera Wokgari',
      position: 'Director – Credit Department',
      qualifications: 'MA in Business Leadership from Addis Ababa University, BA degree in Business Management from Dilla University',
      experience: '13 Years of Working Experience',
      photo: getPhotoName('Mr. Robera Wokgari'),
      linkedin: getLinkedIn('Mr. Robera Wokgari'),
      email: getEmail('Mr. Robera Wokgari')
    },
    {
      id: 10,
      name: 'Mr. Gudeta Gelana',
      position: 'Director – Personal and SME Banking Department',
      qualifications: 'BA degree in Economics from Haramaya University',
      experience: '13 Years of Working Experience',
      photo: getPhotoName('Mr. Gudeta Gelana'),
      linkedin: getLinkedIn('Mr. Gudeta Gelana'),
      email: getEmail('Mr. Gudeta Gelana')
    },
    {
      id: 11,
      name: 'Mrs. Tenaye Aklilu',
      position: 'Director – Finance Management Department',
      qualifications: 'MA in Business Management from St. Mary’s University, BA in Accounting from Addis Ababa University',
      experience: '26 Years of Working Experience',
      photo: getPhotoName('Mrs. Tenaye Aklilu'),
      linkedin: getLinkedIn('Mrs. Tenaye Aklilu'),
      email: getEmail('Mrs. Tenaye Aklilu')
    },
    {
      id: 12,
      name: 'Mr. Ulfata Regasa',
      position: 'Director – Human Capital Management Department',
      qualifications: 'MBA in Management from Ambo University, BA in Public Administration and Development Management from Dire Dawa University',
      experience: '14 Years of Working Experience',
      photo: getPhotoName('Mr. Ulfata Regasa'),
      linkedin: getLinkedIn('Mr. Ulfata Regasa'),
      email: getEmail('Mr. Ulfata Regasa')
    },
    {
      id: 13,
      name: 'Mr. Djorji Tone Djirata',
      position: 'Director, IT Infrastructure and Project Management',
      qualifications: 'MSc in Computer Science from HiLCoE School of Computer Science and Technology, BSc in Computer Science from Wollega University',
      experience: '10 Years of Working Experience',
      photo: getPhotoName('Mr. Djorji Tone Djirata'),
      linkedin: getLinkedIn('Mr. Djorji Tone Djirata'),
      email: getEmail('Mr. Djorji Tone Djirata')
    },
    {
      id: 14,
      name: 'Mr. Milki Tonkolu',
      position: 'Director – International Banking Department',
      qualifications: 'BA degree in Banking and Insurance from Mekelle University',
      experience: '17 Years of Working Experience',
      photo: getPhotoName('Mr. Milki Tonkolu'),
      linkedin: getLinkedIn('Mr. Milki Tonkolu'),
      email: getEmail('Mr. Milki Tonkolu')
    },
    {
      id: 15,
      name: 'Mr. Fetene Alemu',
      position: 'Director – Promotion and Public Relations Department',
      qualifications: 'MA in TVET Leadership and Management from Federal Technical and Vocational Education Training Institute, BA in Economics from Bahir Dar University, Diploma in Educational Planning Management from Addis Ababa University',
      experience: '24 Years of Working Experience',
      photo: getPhotoName('Mr. Fetene Alemu'),
      linkedin: getLinkedIn('Mr. Fetene Alemu'),
      email: getEmail('Mr. Fetene Alemu')
    },
    {
      id: 16,
      name: 'Mr. Debebe Feyisa',
      position: 'Executive Director – Strategy and Research Department',
      qualifications: 'MSc in Development Economics from Ethiopian Civil Service University, BSc degree in Agricultural Economics from Haramaya University',
      experience: '11 Years of Working Experience',
      photo: getPhotoName('Mr. Debebe Feyisa'),
      linkedin: getLinkedIn('Mr. Debebe Feyisa'),
      email: getEmail('Mr. Debebe Feyisa')
    },
    {
      id: 17,
      name: 'Mr. Yirgalem Teshome',
      position: 'Director – Information Technology Department',
      qualifications: 'BSc in Software Engineering from Microlink Information Technology College, MSc in Computer Science from University of Trento',
      experience: '13 Years of Working Experience',
      photo: getPhotoName('Mr. Yirgalem Teshome'),
      linkedin: getLinkedIn('Mr. Yirgalem Teshome'),
      email: getEmail('Mr. Yirgalem Teshome')
    },
    {
      id: 18,
      name: 'Mr. Muleta Debel',
      position: 'Director- Legal Service Department',
      qualifications: 'LLM in Commercial and Investment Law from Oromia State University, LLB in Law from Mekelle University',
      experience: '16 Years of Working Experience',
      photo: getPhotoName('Mr. Muleta Debel'),
      linkedin: getLinkedIn('Mr. Muleta Debel'),
      email: getEmail('Mr. Muleta Debel')
    },
    {
      id: 19,
      name: 'Mrs. Sebasegel Seyoum',
      position: 'Director Corporate and Institutional Banking',
      qualifications: 'Executive Master of Business Administration from Addis Ababa University, MA in Cooperatives Development and Leadership from Hawassa University, BA in Management from Africa Beza University College',
      experience: '15 Years of Working Experience',
      photo: getPhotoName('Mrs. Sebasegel Seyoum'),
      linkedin: getLinkedIn('Mrs. Sebasegel Seyoum'),
      email: getEmail('Mrs. Sebasegel Seyoum')
    },
    {
      id: 20,
      name: 'Mr. Fikadu Urgesa',
      position: 'Director Procurement and Facility Management Department',
      qualifications: 'MBA in Business Administration from Rift Valley University, BA in Procurement and Supply Management and Diploma in Marketing Management from AAU School of Commerce',
      experience: '13 Years of Working Experience',
      photo: getPhotoName('Mr. Fikadu Urgesa'),
      linkedin: getLinkedIn('Mr. Fikadu Urgesa'),
      email: getEmail('Mr. Fikadu Urgesa')
    }
  ];

  // Helper: get photo URL using name (fallback to UI Avatars if image not found)
  const getPhotoUrl = (photoFileName, name) => {
    // In production, you would use: `/images/management/${photoFileName}`
    // For now, use UI Avatars with the name
    const formattedName = name.split(' ').join('+');
    return `https://ui-avatars.com/api/?name=${formattedName}&background=dc2626&color=fff&bold=true&size=400`;
  };

  // Helper to extract years from experience string
  const extractYears = (expString) => {
    const match = expString.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Calculate total combined years of experience
  const totalYears = managementTeam.reduce((sum, member) => sum + extractYears(member.experience), 0);
  const totalMembers = managementTeam.length;

  // Filter management based on search
  const filteredManagement = managementTeam.filter(member => {
    return searchTerm === '' || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Management Team</span>
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
            <span className="text-red-600">Executive</span> Management
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated leadership team driving Gadaa Bank's operations, innovation, and customer excellence
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative flex-1 max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name, position, or qualification..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Management Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredManagement.map(member => {
            const Icon = FaUserTie;
            return (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-50 to-gray-100">
                  <img 
                    src={getPhotoUrl(member.photo, member.name)}
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
                      Management
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-red-600 font-semibold mb-2">{member.position}</p>
                    </div>
                    <Icon className="text-gray-300 text-2xl" />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-1">
                      <span className="font-medium">Qualifications:</span>
                    </div>
                    <p className="text-gray-700 text-sm">{member.qualifications}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center text-gray-600 mb-1">
                      <FaBuilding className="text-red-500 mr-2" />
                      <span className="font-medium">Experience:</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{member.experience}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a href={`mailto:${member.email}`} className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaEnvelope className="text-xl" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <button className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <FaPhone className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">{totalMembers}</div>
              <div className="text-lg font-medium">Management Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">{totalYears}+</div>
              <div className="text-lg font-medium">Combined Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">20</div>
              <div className="text-lg font-medium">Total Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;