import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaUserTie,
  FaFileInvoice,
  FaCashRegister,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFilePdf,
  FaTelegram,
  FaExternalLinkAlt,
  FaDownload,
  FaRegClock,
  FaCertificate
} from 'react-icons/fa';

const VacancyPage = () => {
  const [filter, setFilter] = useState('all');

  const vacancies = [
    {
      id: 1,
      position: 'Branch Manager',
      qualification: 'MA/MBA/MSc or BA/BSc degree in Economics/Management/Accounting/Business Administration or related field',
      experience: '6 years of relevant banking experience',
      locations: ['Arba Minch Branch', 'Batu Branch'],
      type: 'management'
    },
    {
      id: 2,
      position: 'Branch Accountant',
      qualification: 'BA/BSc degree in Economics/Management/Accounting/Business Administration or related field',
      experience: '2 years of relevant banking experience',
      locations: ['Arba Minch Branch'],
      type: 'accounting'
    },
    {
      id: 3,
      position: 'Senior Cashier',
      qualification: 'BA/BSc degree in Economics/Management/Accounting/Business Administration or related field',
      experience: '2 years of relevant banking experience',
      locations: ['Arba Minch Branch', 'Yabello Branch'],
      type: 'operations'
    },
    {
      id: 4,
      position: 'Junior Banker',
      qualification: 'BA/BSc degree in Economics/Management/Accounting/Business Administration or related field',
      experience: '1 year of relevant banking experience',
      locations: ['Arba Minch Branch', 'Bule Hora Branch', 'Ginnir Branch'],
      type: 'entry'
    }
  ];

  const filterTypes = [
    { id: 'all', label: 'All Positions', count: 4 },
    { id: 'management', label: 'Management', count: 1 },
    { id: 'accounting', label: 'Accounting', count: 1 },
    { id: 'operations', label: 'Operations', count: 1 },
    { id: 'entry', label: 'Entry Level', count: 1 }
  ];

  const filteredVacancies = filter === 'all' 
    ? vacancies 
    : vacancies.filter(vacancy => vacancy.type === filter);

  const getPositionIcon = (type) => {
    switch(type) {
      case 'management': return FaUserTie;
      case 'accounting': return FaFileInvoice;
      case 'operations': return FaCashRegister;
      case 'entry': return FaUserGraduate;
      default: return FaUserTie;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Vacancies</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/resources"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Resources
        </Link>

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
            <FaUserTie className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Career</span> Opportunities
          </h1>
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 inline-block mb-4">
            <p className="text-lg font-bold text-gray-900">
              External Vacancy Announcement No. 009/25/26
            </p>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Gadaa Bank S.C would like to invite qualified and competent applicants for the following positions.
          </p>
        </div>

        {/* Announcement Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-red-600 text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Application Period</h3>
                <p className="text-gray-700">December 29, 2025 to January 03, 2026</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-red-600 text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Employment Type</h3>
                <p className="text-gray-700">Permanent Position</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaRegClock className="text-red-600 text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Salary & Benefits</h3>
                <p className="text-gray-700">As per the bank's scale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilter(type.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  filter === type.id 
                    ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label} 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  filter === type.id ? 'bg-white/20' : 'bg-red-100 text-red-600'
                }`}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Vacancies Table */}
        <div className="mb-12">
          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-6 px-8 text-left text-lg font-bold">S/No.</th>
                  <th className="py-6 px-8 text-left text-lg font-bold">Job Position</th>
                  <th className="py-6 px-8 text-left text-lg font-bold">Minimum Qualification & Experience</th>
                  <th className="py-6 px-8 text-left text-lg font-bold">Work Place/Town</th>
                </tr>
              </thead>
              <tbody>
                {filteredVacancies.map((vacancy, index) => {
                  const Icon = getPositionIcon(vacancy.type);
                  return (
                    <tr 
                      key={vacancy.id}
                      className="border-b border-gray-100 hover:bg-red-50 transition-all duration-300 group"
                    >
                      <td className="py-8 px-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center text-xl font-bold text-gray-900">
                          {index + 1}
                        </div>
                      </td>
                      
                      <td className="py-8 px-8">
                        <div className="flex items-start">
                          <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-red-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                              {vacancy.position}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                                {vacancy.type.charAt(0).toUpperCase() + vacancy.type.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="py-8 px-8">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{vacancy.qualification}</span>
                          </div>
                          <div className="flex items-start">
                            <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{vacancy.experience}</span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="py-8 px-8">
                        <div className="space-y-3">
                          {vacancy.locations.map((location, idx) => (
                            <div key={idx} className="flex items-center">
                              <FaMapMarkerAlt className="text-red-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{location}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Important <span className="text-red-300">Notes</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Interested applicants who only fulfill the set requirements are invited to apply via our website https://www.gadaabank.com.et/</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Scanned application, CV, along with complete set of credential documents shall be attached via our website</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Failure to send mandatory document/s will make applicant ineligible</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>The Bank has full right to cancel or take any other alternative</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Only short listed applicants will be communicated for exam and/or interview</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>All documents should be scanned in pdf or docx formats only</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Document size should be less than 2.5 MB</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Single applicant should send only one time</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure that all register process has been completed successfully</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <FaTelegram className="text-blue-400 text-2xl mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">Detailed Information</h3>
                    <p className="text-white/80">Available on Gadaa Bank S.C telegram with 31,190+ subscribers</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.gadaabank.com.et/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaExternalLinkAlt />
                    Apply Here
                  </a>
                  <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaDownload />
                    Download Announcement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Guide */}
        <div className="mb-10">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to <span className="text-red-600">Apply</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Check Requirements', description: 'Verify you meet all qualifications' },
                { step: '2', title: 'Prepare Documents', description: 'Scan CV, certificates, application' },
                { step: '3', title: 'Visit Website', description: 'Go to gadaabank.com.et' },
                { step: '4', title: 'Submit Application', description: 'Upload all required documents' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-bold mb-4">Join Gadaa Bank Team</h2>
          <p className="text-xl text-white/90 mb-8">
            Build your career with Ethiopia's leading financial institution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.gadaabank.com.et/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaFilePdf />
              Submit Your Application
            </a>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Contact HR Department
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyPage;