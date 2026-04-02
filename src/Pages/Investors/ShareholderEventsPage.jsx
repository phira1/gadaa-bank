import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { shareholderEvents } from '../../data/investorData';

const ShareholderEventsPage = () => {
  const sortedEvents = [...shareholderEvents].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">Upcoming</span>;
      case 'past':
        return <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Past</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Shareholder Events</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shareholder Events</h1>
          <p className="text-gray-600">Stay informed about upcoming and past shareholder meetings and events.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {sortedEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2 text-red-500" />
                    {new Date(event.date).toLocaleDateString('en-ET', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  {getStatusBadge(event.status)}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  {event.location}
                </div>
                {event.videoLink && (
                  <a
                    href={event.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 font-medium hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Watch Recording
                  </a>
                )}
                {!event.videoLink && event.link && (
                  <Link
                    to={event.link}
                    className="inline-flex items-center text-red-600 font-medium hover:underline"
                  >
                    View Details
                    <FaArrowLeft className="ml-2 rotate-180" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareholderEventsPage;