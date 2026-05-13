import React, { useState, useEffect } from 'react';
import LocatorTable from '../../components/LocatorTable';
import { branchService } from '../../services';

const AgentLocator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    branchService.getAgents()
      .then((rows) => {
        const normalized = rows.map((b) => ({
          id: b.id,
          city: b.region || b.name,
          address: b.address || b.name,
          mapLink: b.latitude && b.longitude
            ? `https://maps.google.com/?q=${b.latitude},${b.longitude}`
            : '#',
          phone: b.phone,
        }));
        setData(normalized);
      })
      .catch(() => setError('Failed to load agent locations.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error) return <div className="text-center py-16 text-red-600">{error}</div>;

  return <LocatorTable title="Agent Locator" data={data} />;
};

export default AgentLocator;