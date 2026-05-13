import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSyncAlt, FaSave, FaPlay } from 'react-icons/fa';
import { siteContentService } from '../../services';
import SiteContentManager from './components/SiteContentManager';

const AdminContentPage = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [siteContent, setSiteContent] = useState({});
  const [videoUrl, setVideoUrl] = useState('');
  const [savingVideo, setSavingVideo] = useState(false);

  const loadSiteContent = async () => {
    setRefreshing(true);
    setError('');

    try {
      const response = await siteContentService.getAll();
      setSiteContent(response?.data ?? response ?? {});
    } catch (loadError) {
      setError(loadError.message || 'Failed to load shared site settings.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadSiteContent();
  }, []);

  useEffect(() => {
    if (siteContent.security_awareness_video?.video_url) {
      setVideoUrl(siteContent.security_awareness_video.video_url);
    }
  }, [siteContent]);

  const saveSiteContent = async (key, payload) => {
    setError('');

    try {
      await siteContentService.update(key, payload);
      await loadSiteContent();
    } catch (saveError) {
      setError(saveError.message || `Failed to save ${key}.`);
    }
  };

  const saveSecurityVideoUrl = async (event) => {
    event.preventDefault();
    setSavingVideo(true);
    setError('');

    try {
      await siteContentService.update('security_awareness_video', {
        video_url: videoUrl,
      });
      await loadSiteContent();
    } catch (saveError) {
      setError(saveError.message || 'Failed to save security awareness video URL.');
    } finally {
      setSavingVideo(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          Loading content settings...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 text-white p-8 shadow-xl shadow-slate-200/60">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60 mb-3">Content settings</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Manage shared site content</h1>
            <p className="max-w-2xl text-white/75 leading-relaxed">
              Keep the public website aligned by editing navigation, social links, search data, service categories, and pricing tables here.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin/product-comparison"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
            >
              Manage comparison page
            </Link>
            <button
              type="button"
              onClick={loadSiteContent}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors disabled:opacity-60"
              disabled={refreshing}
            >
              <FaSyncAlt className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh settings'}
            </button>
          </div>
        </div>
      </section>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <FaPlay className="text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Security Awareness Video</h2>
            </div>
            <p className="text-sm text-slate-500">Manage the YouTube video URL displayed on the Security Awareness page. Support full YouTube URLs, short URLs, or video IDs.</p>
          </div>
        </div>

        <form onSubmit={saveSecurityVideoUrl} className="mt-4">
          <label className="block mb-4">
            <span className="text-sm font-medium text-slate-700 mb-2 block">YouTube Video URL</span>
            <input
              type="text"
              value={videoUrl}
              onChange={(event) => setVideoUrl(event.target.value)}
              placeholder="https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID or VIDEO_ID"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
            <p className="mt-2 text-xs text-slate-500">Examples: https://www.youtube.com/watch?v=dQw4w9WgXcQ or https://youtu.be/dQw4w9WgXcQ or dQw4w9WgXcQ</p>
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={savingVideo}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors disabled:opacity-60"
            >
              <FaSave />
              {savingVideo ? 'Saving...' : 'Save video URL'}
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <SiteContentManager siteContent={siteContent} onSave={saveSiteContent} />
    </div>
  );
};

export default AdminContentPage;