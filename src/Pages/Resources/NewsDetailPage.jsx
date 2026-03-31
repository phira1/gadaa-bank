// src/Pages/Resources/NewsDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEye, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { newsItems } from '../../data/newsData';

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const news = newsItems.find(item => item.id === parseInt(id));

  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/news" className="text-red-600 hover:underline">← Back to News</Link>
        </div>
      </div>
    );
  }

  const { title, date, image, fullContent, longDescription, views, galleryImages, author } = news;
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [image];
  const hasGallery = images.length > 1;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/news" className="text-white/80 hover:text-white">News</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold truncate">{title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-red-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <FaEye className="mr-2 text-red-500" />
              <span>{views} views</span>
            </div>
            {author && <span className="text-gray-400">| {author}</span>}
          </div>

          {/* Gallery */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden bg-gray-100">
              <img
                src={images[currentImageIndex]}
                alt={title}
                className="w-full h-96 object-cover"
              />
              {hasGallery && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-red-600 w-4' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {hasGallery && (
              <p className="text-xs text-gray-400 text-center mt-2">
                Image {currentImageIndex + 1} of {images.length}
              </p>
            )}
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg font-medium text-gray-900 mb-4">{fullContent}</p>
            {longDescription && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Details</h2>
                <p className="whitespace-pre-line">{longDescription}</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              For press inquiries, please contact{' '}
              <a href="mailto:press@gadaabank.com.et" className="text-red-600 hover:underline">
                press@gadaabank.com.et
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetailPage;