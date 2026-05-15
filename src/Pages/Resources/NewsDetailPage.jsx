// src/Pages/Resources/NewsDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEye, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { newsService } from '../../services/newsService';
import { getAssetUrl } from '../../utils/assetUrl';
import { sanitizeHtml } from '../../utils/sanitizeHtml';
import usePageMeta from '../../components/hooks/usePageMeta';

const VIEW_INCREMENT_TTL_MS = 30 * 1000;

const getViewCacheKey = (newsId) => `news_view_incremented_${newsId}`;

const shouldIncrementView = (newsId) => {
  if (typeof sessionStorage === 'undefined') {
    return true;
  }

  const key = getViewCacheKey(newsId);
  const lastSeenRaw = sessionStorage.getItem(key);
  const lastSeen = Number(lastSeenRaw || 0);
  const now = Date.now();

  if (lastSeen && now - lastSeen < VIEW_INCREMENT_TTL_MS) {
    return false;
  }

  sessionStorage.setItem(key, String(now));
  return true;
};

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  usePageMeta({
    title: news?.title || 'News Details',
    description: news?.excerpt || 'Read the latest Gadaa Bank news update.',
    canonicalPath: `/resources/news/${id}`,
  })

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const res = await newsService.getById(id);
        const newsPayload = res?.data || res;
        setNews(newsPayload);

        // Explicitly call increment endpoint so views are counted reliably
        if (shouldIncrementView(id)) {
          try {
            const inc = await newsService.incrementViews(id);
            if (inc?.data?.views !== undefined) {
              setNews((current) => ({ ...current, views: inc.data.views }));
            } else if (inc?.views !== undefined) {
              setNews((current) => ({ ...current, views: inc.views }));
            }
          } catch (incErr) {
            // non-fatal; counting failed
            // console.debug('Failed to increment views', incErr);
          }
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/resources/news" className="text-red-600 hover:underline">← Back to News</Link>
        </div>
      </div>
    );
  }

  const title = news.title;
  const date = news.published_at ? new Date(news.published_at).toLocaleDateString() : (news.date || '');
  const image = news.image_path ? (news.image_path.startsWith('http') ? news.image_path : getAssetUrl(news.image_path)) : (news.image ? `/images/news/${news.image}` : null);
  const fullContent = news.content || news.fullContent || news.excerpt;
  const longDescription = news.longDescription || '';
  const views = news.views || 0;
  // If the backend has a JSON array or similar for gallery, handle it here.
  const galleryImages = news.galleryImages || null;
  const author = news.author;

  const abstractFallbackImage = `https://ui-avatars.com/api/?name=News&background=dc2626&color=fff&bold=true&size=800`;
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [image || abstractFallbackImage];
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
            <Link to="/resources/news" className="text-white/80 hover:text-white">News</Link>
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
            <div className="text-lg font-medium text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(fullContent) }}></div>
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