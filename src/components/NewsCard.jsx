// src/components/NewsCard.jsx
import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, animated = false, delay = 0 }) => {
  const { id, date, title, description, image, link, views } = news;

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
        animated ? 'animate-fadeInUp opacity-100' : 'opacity-0'
      }`}
      style={animated ? { animationDelay: `${delay}ms` } : {}}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={`/images/news/${image}`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">News</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaCalendarAlt className="mr-2 text-red-500" />
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            to={link}
            className="inline-flex items-center text-red-600 font-medium text-sm group/link"
          >
            Read More
            <FaArrowRight className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>

          <div className="flex items-center text-gray-400 text-xs">
            <FaEye className="mr-1" />
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;