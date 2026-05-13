import React from 'react';
import { FaUserTie, FaBuilding, FaHandshake, FaEnvelope, FaLinkedin, FaPhone, FaInfoCircle } from 'react-icons/fa';
import { getAssetUrl } from '../../../utils/assetUrl';

const MemberCard = ({ member, type = 'board' }) => {
  const getImagePath = () => {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${member.name?.split(' ').join('+') || 'User'}&background=dc2626&color=fff&bold=true&size=400`;
    
    if (!member.image_path && !member.photo) {
      return defaultAvatar;
    }
    
    // Fallback for static mock images if remaining
    if (member.photo) {
        const folder = type === 'board' ? 'board' : 'management';
        return `/images/${folder}/${member.photo}`;
    }
    
    // For backend loaded API images
    if (member.image_path) {
        if (member.image_path.startsWith('http')) {
             return member.image_path;
        }
      return getAssetUrl(member.image_path); 
    }
    
    return defaultAvatar;
  };

  const Icon = FaUserTie;

  // Adapt static mock vs dynamic backend model
  const position = member.title || member.role || member.position || 'Member';
  const bio = member.bio || member.qualifications || 'Information not available.';
  const experience = member.department || member.experience || 'Experience details not provided.';
  const badgeLabel = type === 'board'
    ? 'Board Member'
    : type === 'committee'
      ? 'Sharia Committee'
      : 'Management';
  const experienceLabel = type === 'management'
    ? 'Department:'
    : type === 'committee'
      ? 'Role:'
      : 'Experience:';

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Image container with fixed aspect ratio (4:3) */}
      <div
        className="relative w-full bg-gradient-to-br from-red-50 to-gray-100"
        style={{ aspectRatio: '4 / 3' }}
      >
        <img
          src={getImagePath()}
          alt={member.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            const formattedName = member.name?.split(' ').join('+') || 'User';
            e.target.src = `https://ui-avatars.com/api/?name=${formattedName}&background=dc2626&color=fff&bold=true&size=400`;
          }}
        />
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-black text-white text-sm font-bold rounded-full">
            {badgeLabel}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-red-600 font-semibold mb-2">{position}</p>
          </div>
          <Icon className="text-gray-300 text-2xl" />
        </div>

        <div className="mb-4">
          <div className="flex items-center text-gray-600 mb-2">
            <FaInfoCircle className="text-red-500 mr-2" />
            <span className="font-medium">Bio / Qualifications:</span>
          </div>
          <p className="text-gray-700 text-sm whitespace-pre-wrap">{bio}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center text-gray-600 mb-1">
            <FaBuilding className="text-red-500 mr-2" />
            <span className="font-medium">{experienceLabel}</span>
          </div>
          <p className="text-gray-700 font-semibold text-sm">{experience}</p>
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

        {/* Contact connections */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {member.email ? (
             <a href={`mailto:${member.email}`} className="text-red-600 hover:text-red-700 transition-colors duration-300">
               <FaEnvelope className="text-xl" />
             </a>
          ) : <span className="text-gray-300"><FaEnvelope className="text-xl" /></span>}
          
          {member.linkedin ? (
             <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors duration-300">
               <FaLinkedin className="text-xl" />
             </a>
          ) : <span className="text-gray-300"><FaLinkedin className="text-xl" /></span>}
          
          <button className="text-gray-300 cursor-not-allowed">
            <FaPhone className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;