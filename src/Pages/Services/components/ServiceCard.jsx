import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const ServiceCard = ({ service, index, inView }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative h-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className={`${service.badgeBg} ${service.badgeText} px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow`}>
            {service.badge}
          </div>
        </motion.div>

        {/* Card */}
        <div
          className={`${service.bgColor} rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl h-full border ${service.borderColor} cursor-pointer`}
          onClick={toggleExpand}
        >
          <div className="p-4 md:p-6">
            <div className="flex items-start mb-3 md:mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 ${service.color === 'text-red-600' ? 'bg-red-50' : 'bg-gray-50'} rounded-lg flex items-center justify-center mr-3 md:mr-4`}
              >
                <service.icon className={`text-base md:text-xl ${service.color}`} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className={`text-xs md:text-sm font-semibold ${service.color} mb-1`}>
                  {service.stats}
                </div>
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              {service.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-gray-500 text-xs md:text-sm">
                {expanded ? 'Click to collapse' : 'Click to expand'}
              </span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-400 text-sm" />
              </motion.div>
            </div>
          </div>

          {/* Expanded Features List */}
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-4 md:p-6 border-t border-gray-200"
            >
              <div className="mb-3 md:mb-4">
                <h4 className="font-bold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                  <FaStar className={`${service.color} mr-2 text-sm`} />
                  Available Services
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between group/feature bg-white p-2 rounded border border-gray-100"
                    >
                      <div className="flex items-center max-w-[70%]">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`w-2 h-2 rounded-full mr-2 ${
                            feature.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                        ></motion.div>
                        <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors truncate">
                          {feature.name}
                        </span>
                      </div>
                      <Link
                        to={feature.link}
                        className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Details
                        <FaExternalLinkAlt className="text-xs" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* Subtle glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.05 }}
          className={`absolute inset-0 rounded-lg md:rounded-xl ${
            service.color === 'text-red-600' ? 'bg-red-600' : 'bg-gray-900'
          } blur-lg -z-10`}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;