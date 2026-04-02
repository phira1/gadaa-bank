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
  FaTelegram,
  FaExternalLinkAlt,
  FaRegClock,
  FaCertificate,
  FaGavel
} from 'react-icons/fa';
import { announcementInfo, vacancyItems } from '../../data/vacancyData';

const VacancyPage = () => {
  const [filter, setFilter] = useState('all');

  const activeVacancies = vacancyItems.filter(v => v.status === 'active');

  const getFilterTypes = () => {
    const typesMap = new Map();
    typesMap.set('all', { label: 'All Positions', count: activeVacancies.length });
    activeVacancies.forEach(vacancy => {
      if (typesMap.has(vacancy.type)) {
        typesMap.get(vacancy.type).count++;
      } else {
        let label = vacancy.type.charAt(0).toUpperCase() + vacancy.type.slice(1);
        if (vacancy.type === 'management') label = 'Management';
        else if (vacancy.type === 'accounting') label = 'Accounting';
        else if (vacancy.type === 'operations') label = 'Operations';
        else if (vacancy.type === 'entry') label = 'Entry Level';
        else if (vacancy.type === 'legal') label = 'Legal';
        typesMap.set(vacancy.type, { label, count: 1 });
      }
    });
    return Array.from(typesMap.entries()).map(([id, { label, count }]) => ({ id, label, count }));
  };

  const filterTypes = getFilterTypes();
  const filteredVacancies = filter === 'all' 
    ? activeVacancies 
    : activeVacancies.filter(vacancy => vacancy.type === filter);

  const getPositionIcon = (type) => {
    switch(type) {
      case 'management': return FaUserTie;
      case 'accounting': return FaFileInvoice;
      case 'operations': return FaCashRegister;
      case 'entry': return FaUserGraduate;
      case 'legal': return FaGavel;
      default: return FaUserTie;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3 md:py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Vacancies</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Back Button */}
        <Link 
          to="/resources"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 group text-sm md:text-base"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Resources
        </Link>

        {/* Main Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg">
            <FaUserTie className="text-white text-2xl md:text-4xl" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 md:mb-4">
            <span className="text-red-600">Career</span> Opportunities
          </h1>
          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-3 md:p-4 inline-block mb-3 md:mb-4">
            <p className="text-sm md:text-lg font-bold text-gray-900">
              {announcementInfo.number}
            </p>
          </div>
          <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto px-2">
            Gadaa Bank S.C would like to invite qualified and competent applicants for the following positions.
          </p>
        </div>

        {/* Announcement Banner */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaCalendarAlt className="text-red-600 text-xl md:text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Application Period</h3>
                <p className="text-gray-700 text-xs md:text-sm">{announcementInfo.applicationPeriod}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaCertificate className="text-red-600 text-xl md:text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Employment Type</h3>
                <p className="text-gray-700 text-xs md:text-sm">{announcementInfo.employmentType}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaRegClock className="text-red-600 text-xl md:text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Salary & Benefits</h3>
                <p className="text-gray-700 text-xs md:text-sm">{announcementInfo.salaryScale}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {filterTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilter(type.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all duration-300 ${
                  filter === type.id 
                    ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label} 
                <span className={`ml-1 md:ml-2 px-1 py-0.5 md:px-2 md:py-1 rounded-full text-xs ${
                  filter === type.id ? 'bg-white/20' : 'bg-red-100 text-red-600'
                }`}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Vacancies Table - Horizontal scroll on small screens */}
        <div className="mb-8 md:mb-12 overflow-x-auto shadow-lg rounded-xl md:rounded-3xl border border-gray-200">
          <table className="min-w-[800px] md:min-w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                <th className="py-3 md:py-6 px-3 md:px-8 text-left text-sm md:text-lg font-bold">S/No.</th>
                <th className="py-3 md:py-6 px-3 md:px-8 text-left text-sm md:text-lg font-bold">Job Position</th>
                <th className="py-3 md:py-6 px-3 md:px-8 text-left text-sm md:text-lg font-bold">Min. Qualification & Experience</th>
                <th className="py-3 md:py-6 px-3 md:px-8 text-left text-sm md:text-lg font-bold">Work Place</th>
              </tr>
            </thead>
            <tbody>
              {filteredVacancies.map((vacancy, index) => {
                const Icon = getPositionIcon(vacancy.type);
                return (
                  <tr key={vacancy.id} className="border-b border-gray-100 hover:bg-red-50 transition-all duration-300 group">
                    <td className="py-4 md:py-8 px-3 md:px-8">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center text-sm md:text-xl font-bold text-gray-900">
                        {index + 1}
                      </div>
                    </td>
                    
                    <td className="py-4 md:py-8 px-3 md:px-8">
                      <div className="flex items-start">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-red-100 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-red-600 text-sm md:text-xl" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors">
                            {vacancy.position}
                          </h3>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            <span className="px-2 py-0.5 md:px-3 md:py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                              {vacancy.type.charAt(0).toUpperCase() + vacancy.type.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 md:py-8 px-3 md:px-8">
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start">
                          <FaCheckCircle className="text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                          <span className="text-gray-700 text-xs md:text-sm">{vacancy.qualification}</span>
                        </div>
                        <div className="flex items-start">
                          <FaCheckCircle className="text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                          <span className="text-gray-700 text-xs md:text-sm">{vacancy.experience}</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 md:py-8 px-3 md:px-8">
                      <div className="space-y-2 md:space-y-3">
                        {vacancy.locations.map((location, idx) => (
                          <div key={idx} className="flex items-center">
                            <FaMapMarkerAlt className="text-red-500 mr-2 md:mr-3 flex-shrink-0 text-xs md:text-base" />
                            <span className="text-gray-700 text-xs md:text-sm">{location}</span>
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

        {/* Important Notes */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl">
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
              Important <span className="text-red-300">Notes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <ul className="space-y-3 md:space-y-4">
                  {announcementInfo.importantNotes.slice(0, Math.ceil(announcementInfo.importantNotes.length / 2)).map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-300 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                      <span className="text-xs md:text-sm">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3 md:space-y-4">
                  {announcementInfo.importantNotes.slice(Math.ceil(announcementInfo.importantNotes.length / 2)).map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-300 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                      <span className="text-xs md:text-sm">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <FaTelegram className="text-blue-400 text-xl md:text-2xl mr-3 md:mr-4" />
                  <div>
                    <h3 className="font-bold text-sm md:text-lg">Detailed Information</h3>
                    <p className="text-white/80 text-xs md:text-sm">{announcementInfo.telegramInfo}</p>
                  </div>
                </div>
                
                <a 
                  href={announcementInfo.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 md:px-8 md:py-3 bg-white text-red-600 font-bold rounded-lg md:rounded-xl hover:bg-gray-100 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                >
                  <FaExternalLinkAlt />
                  Apply Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyPage;