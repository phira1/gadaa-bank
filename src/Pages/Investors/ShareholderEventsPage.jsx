import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { reportService } from '../../services';

const ShareholderEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    reportService.getAll({ type: 'shareholder_event' })
      .then((response) => {
        if (!isMounted) return;
        const payload = response?.data ?? response ?? [];
        const items = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
        setEvents(items);
      })
      .catch((loadError) => {
        if (!isMounted) return;
        setError(loadError.message || 'Failed to load shareholder events.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedEvents = [...events].sort((a, b) => {
    const aDate = a.event_date || a.year || a.created_at || '';
    const bDate = b.event_date || b.year || b.created_at || '';
    return new Date(bDate) - new Date(aDate);
  });

  const getStatusBadge = (event) => {
    const sourceDate = event.event_date || event.year;
    if (!sourceDate) {
      return null;
    }

    const eventDate = new Date(sourceDate);
    if (Number.isNaN(eventDate.getTime())) {
      return null;
    }

    return eventDate >= new Date()
      ? <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">Upcoming</span>
      : <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Past</span>;
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

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {sortedEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2 text-red-500" />
                    {new Date(event.event_date || event.year || event.created_at).toLocaleDateString('en-ET', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  {getStatusBadge(event)}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.location && (
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    {event.location}
                  </div>
                )}
                {event.video_url && (
                  <a
                    href={event.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 font-medium hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Watch Recording
                  </a>
                )}
                {!event.video_url && event.file_url && (
                  <a
                    href={event.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 font-medium hover:underline"
                  >
                    View Details
                    <FaArrowLeft className="ml-2 rotate-180" />
                  </a>
                )}
              </div>
              </div>
            ))}

            {sortedEvents.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                No shareholder events available at the moment.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareholderEventsPage;