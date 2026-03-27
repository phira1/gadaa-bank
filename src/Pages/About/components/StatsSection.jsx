import React from 'react';

const StatsSection = ({ items, className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white ${className}`}>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-5xl font-black mb-2">{item.value}</div>
            <div className="text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;