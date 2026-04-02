import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaChevronRight } from 'react-icons/fa';

const BoardSubcommittees = ({ committees, fadeInUp }) => {
  return (
    <motion.div
      className="mb-16"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-4">
          <span className="text-red-600">Board</span> Subcommittees
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Specialized committees that oversee critical aspects of bank governance
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {committees.map(committee => {
          const CommitteeIcon = committee.icon;
          return (
            <div
              key={committee.id}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-xl flex items-center justify-center mr-4">
                  <CommitteeIcon className="text-white text-2xl" />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full mr-3">
                      {committee.id}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{committee.name}</h3>
                  </div>
                  <p className="text-gray-600 mt-1">{committee.description}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center text-gray-800 mb-3">
                  <span className="font-bold">Chairperson:</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100">
                  <FaUserTie className="text-red-600 mr-3" />
                  <span className="font-semibold text-gray-900">{committee.chairperson}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-800 mb-3">
                  <span className="font-bold">Committee Members:</span>
                </div>
                <div className="space-y-2">
                  {committee.members.map((member, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <FaChevronRight className="text-red-500 mr-3" />
                      <span className="text-gray-700">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default BoardSubcommittees;