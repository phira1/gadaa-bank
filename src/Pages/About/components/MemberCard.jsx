import React from 'react';
import { FaUserTie, FaBuilding, FaHandshake, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const MemberCard = ({ member, type = 'board' }) => {
  const getPhotoUrl = (name) => {
    const formattedName = name.split(' ').join('+');
    return `https://ui-avatars.com/api/?name=${formattedName}&background=dc2626&color=fff&bold=true&size=400`;
  };

  const Icon = FaUserTie;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-50 to-gray-100">
        <img 
          src={getPhotoUrl(member.name)}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-black text-white text-sm font-bold rounded-full">
            {type === 'board' ? 'Board Member' : 'Management'}
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
        {type === 'board' && member.committee && (
          <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100">
            <div className="flex items-center text-gray-800 mb-1">
              <FaHandshake className="text-red-600 mr-2" />
              <span className="font-bold">Committee Assignment:</span>
            </div>
            <p className="text-gray-700 text-sm">{member.committee}</p>
          </div>
        )}
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
};

export default MemberCard;