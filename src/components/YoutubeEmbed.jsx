import React from 'react';

/**
 * Reusable YouTube Embed Component
 * Accepts YouTube URLs in multiple formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - VIDEO_ID (just the ID)
 */
const YoutubeEmbed = ({ url, title = "Video", className = "w-full aspect-video" }) => {
  // Extract video ID from URL
  const extractVideoId = (youtubeUrl) => {
    if (!youtubeUrl) return null;

    // If it's just the video ID
    if (youtubeUrl.length === 11 && !youtubeUrl.includes('/')) {
      return youtubeUrl;
    }

    // URL formats: https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID
    const urlPatterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of urlPatterns) {
      const match = youtubeUrl.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  };

  const videoId = extractVideoId(url);

  if (!videoId) {
    return (
      <div className={`${className} bg-gray-200 rounded-lg flex items-center justify-center`}>
        <p className="text-gray-600 text-center p-4">Invalid YouTube URL or Video ID</p>
      </div>
    );
  }

  return (
    <div className={`${className} rounded-lg overflow-hidden shadow-lg`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
