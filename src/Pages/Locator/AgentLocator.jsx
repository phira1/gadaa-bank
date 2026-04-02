// src/Pages/Locator/AgentLocator.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AgentLocator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agent Locator</h1>
        <p className="text-xl text-gray-600">Coming Soon</p>
        <p className="text-gray-500 mt-2">We are working to bring you the nearest agent locations.</p>
      </div>
    </motion.div>
  );
};

export default AgentLocator;