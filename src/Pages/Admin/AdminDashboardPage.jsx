import React, { useEffect, useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaEdit, FaEnvelopeOpenText, FaNewspaper, FaPlus, FaRecycle, FaRegFileAlt, FaRegHandPaper, FaSave, FaShieldAlt, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { boardService, complaintService, contactService, newsService, partnerService, reportService, vacancyService, uploadService } from '../../services';

const normalizeList = (response) => {
  const payload = response?.data ?? response ?? {};
  const items = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
  const total = payload.total ?? items.length;

  return { items, total, payload };
};

const formatDate = (value) => {
  if (!value) {
    return 'N/A';
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
};

const statusBadgeClass = (status) => {
  switch (status) {
    case 'resolved':
    case 'read':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'in_progress':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'closed':
      return 'bg-slate-100 text-slate-700 border-slate-200';
    default:
      return 'bg-red-50 text-red-700 border-red-200';
  }
};

const emptyNewsForm = {
  id: null,
  title: '',
  excerpt: '',
  content: '',
  image_path: '',
  category: 'News',
  is_featured: false,
  is_published: true,
  published_at: '',
};

const emptyVacancyForm = {
  id: null,
  position: '',
  type: 'management',
  qualification: '',
  experience: '',
  locationsText: '',
  status: 'active',
  deadline: '',
  sort_order: 0,
  apply_url: '',
};

const AdminDashboardPage = () => {
  const { user } = useOutletContext() || {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [counts, setCounts] = useState({
    news: 0,
    vacancies: 0,
    reports: 0,
    partners: 0,
    complaints: 0,
    pendingComplaints: 0,
    contacts: 0,
    unreadContacts: 0,
    board: 0,
  });
  const [newsItems, setNewsItems] = useState([]);
  const [vacancyItems, setVacancyItems] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [complaintStatuses, setComplaintStatuses] = useState({});
  const [newsForm, setNewsForm] = useState(emptyNewsForm);
  const [vacancyForm, setVacancyForm] = useState(emptyVacancyForm);
  const [activeEditor, setActiveEditor] = useState(null);
  const [savingEditor, setSavingEditor] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const summaryCards = useMemo(() => ([
    { label: 'News articles', value: counts.news, icon: FaNewspaper, tone: 'text-red-600' },
    { label: 'Vacancies', value: counts.vacancies, icon: FaRegFileAlt, tone: 'text-slate-700' },
    { label: 'Partners', value: counts.partners, icon: FaRegHandPaper, tone: 'text-amber-600' },
    { label: 'Reports', value: counts.reports, icon: FaRecycle, tone: 'text-emerald-600' },
    { label: 'Pending complaints', value: counts.pendingComplaints, icon: FaShieldAlt, tone: 'text-red-600' },
    { label: 'Unread messages', value: counts.unreadContacts, icon: FaEnvelopeOpenText, tone: 'text-sky-600' },
  ]), [counts]);

  const loadDashboard = async () => {
    setRefreshing(true);
    setError('');

    try {
      const [newsResponse, vacancyResponse, reportResponse, partnerResponse, complaintResponse, pendingComplaintResponse, contactResponse, unreadContactResponse, boardResponse] = await Promise.all([
        newsService.getAll(),
        vacancyService.getAll({ per_page: 5 }),
        reportService.getAll({ per_page: 1 }),
        partnerService.getAll({ per_page: 1 }),
        complaintService.getAll({ per_page: 5 }),
        complaintService.getAll({ status: 'pending', per_page: 1 }),
        contactService.getAll({ per_page: 5 }),
        contactService.getAll({ unread: true, per_page: 1 }),
        boardService.getAll({ per_page: 1 }),
      ]);

      const newsData = normalizeList(newsResponse);
      const vacancyData = normalizeList(vacancyResponse);
      const reportData = normalizeList(reportResponse);
      const partnerData = normalizeList(partnerResponse);
      const complaintData = normalizeList(complaintResponse);
      const contactData = normalizeList(contactResponse);
      const boardData = normalizeList(boardResponse);
      const pendingComplaintData = normalizeList(pendingComplaintResponse);
      const unreadContactData = normalizeList(unreadContactResponse);

      setCounts({
        news: newsData.total,
        vacancies: vacancyData.total,
        reports: reportData.total,
        partners: partnerData.total,
        complaints: complaintData.total,
        pendingComplaints: pendingComplaintData.total,
        contacts: contactData.total,
        unreadContacts: unreadContactData.total,
        board: boardData.total,
      });

      setNewsItems(newsData.items);
      setVacancyItems(vacancyData.items);
      setComplaints(complaintData.items);
      setComplaintStatuses(Object.fromEntries(complaintData.items.map((item) => [item.id, item.status || 'pending'])));
      setContacts(contactData.items);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load the admin dashboard.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const removeNews = async (id) => {
    if (!window.confirm('Delete this news item?')) {
      return;
    }

    await newsService.remove(id);
    await loadDashboard();
  };

  const openNewsEditor = (item = null) => {
    setActiveEditor('news');
    setError('');
    setNewsForm(item ? {
      id: item.id,
      title: item.title || '',
      excerpt: item.excerpt || '',
      content: item.content || '',
      image_path: item.image_path || '',
      category: item.category || 'News',
      is_featured: Boolean(item.is_featured),
      is_published: item.is_published !== false,
      published_at: item.published_at ? String(item.published_at).slice(0, 16) : '',
    } : emptyNewsForm);
  };

  const openVacancyEditor = (item = null) => {
    setActiveEditor('vacancy');
    setError('');
    setVacancyForm(item ? {
      id: item.id,
      position: item.position || item.title || '',
      type: item.type || 'management',
      qualification: item.qualification || '',
      experience: item.experience || '',
      locationsText: Array.isArray(item.locations) ? item.locations.join(', ') : '',
      status: item.status || 'active',
      deadline: item.deadline ? String(item.deadline).slice(0, 10) : '',
      sort_order: item.sort_order || 0,
      apply_url: item.apply_url || '',
    } : emptyVacancyForm);
  };

  const closeEditor = () => {
    setActiveEditor(null);
    setSavingEditor(false);
    setUploading(false);
    setUploadError('');
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError('');

    try {
      const result = await uploadService.uploadFile(file);
      setNewsForm((current) => ({ ...current, image_path: result.url }));
    } catch (uploadErr) {
      setUploadError(uploadErr.message);
    } finally {
      setUploading(false);
      event.target.value = ''; // Reset file input
    }
  };

  const handleSaveNews = async (event) => {
    event.preventDefault();
    setSavingEditor(true);
    setError('');

    const payload = {
      title: newsForm.title.trim(),
      excerpt: newsForm.excerpt.trim(),
      content: newsForm.content,
      image_path: newsForm.image_path.trim(),
      category: newsForm.category.trim(),
      is_featured: Boolean(newsForm.is_featured),
      is_published: Boolean(newsForm.is_published),
      published_at: newsForm.published_at || null,
    };

    try {
      if (newsForm.id) {
        await newsService.update(newsForm.id, payload);
      } else {
        await newsService.create(payload);
      }
      closeEditor();
      await loadDashboard();
    } catch (saveError) {
      setError(saveError.message || 'Failed to save news item.');
    } finally {
      setSavingEditor(false);
    }
  };

  const handleSaveVacancy = async (event) => {
    event.preventDefault();
    setSavingEditor(true);
    setError('');

    const locations = vacancyForm.locationsText
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      position: vacancyForm.position.trim(),
      type: vacancyForm.type.trim(),
      qualification: vacancyForm.qualification,
      experience: vacancyForm.experience,
      locations,
      status: vacancyForm.status,
      deadline: vacancyForm.deadline || null,
      sort_order: Number(vacancyForm.sort_order) || 0,
      apply_url: vacancyForm.apply_url.trim() || null,
    };

    try {
      if (vacancyForm.id) {
        await vacancyService.update(vacancyForm.id, payload);
      } else {
        await vacancyService.create(payload);
      }
      closeEditor();
      await loadDashboard();
    } catch (saveError) {
      setError(saveError.message || 'Failed to save vacancy.');
    } finally {
      setSavingEditor(false);
    }
  };

  const removeVacancy = async (id) => {
    if (!window.confirm('Delete this vacancy?')) {
      return;
    }

    await vacancyService.remove(id);
    await loadDashboard();
  };

  const saveComplaintStatus = async (id) => {
    await complaintService.update(id, { status: complaintStatuses[id] });
    await loadDashboard();
  };

  const markContactRead = async (id) => {
    await contactService.markRead(id);
    await loadDashboard();
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          Loading admin dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section id="overview" className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 text-white p-8 shadow-xl shadow-slate-200/60">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60 mb-3">Overview</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Welcome back, {user?.name || 'administrator'}</h1>
            <p className="max-w-2xl text-white/75 leading-relaxed">
              Monitor content, handle customer messages, and keep the public site synchronized from one secure dashboard.
            </p>
          </div>

          <button
            type="button"
            onClick={loadDashboard}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors disabled:opacity-60"
            disabled={refreshing}
          >
            <FaRecycle className={refreshing ? 'animate-spin' : ''} />
            {refreshing ? 'Refreshing...' : 'Refresh data'}
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/admin/content" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors">
            <FaEdit />
            Edit site content
          </Link>
        </div>
      </section>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-2">{card.label}</p>
                  <p className={`text-3xl font-bold ${card.tone}`}>{card.value}</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl text-slate-700">
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section id="content" className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Latest news</h2>
              <p className="text-sm text-slate-500">Create, edit, publish, or remove public articles.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{counts.news} total</span>
              <button
                type="button"
                onClick={() => openNewsEditor()}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                <FaPlus />
                Add news
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {newsItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{formatDate(item.published_at)} · {item.category || 'News'}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${item.is_published ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>
                    {item.is_published ? 'Published' : 'Draft'}
                  </span>
                  <button
                    type="button"
                    onClick={() => openNewsEditor(item)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => removeNews(item.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {newsItems.length === 0 && <p className="text-sm text-slate-500">No news items found.</p>}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Vacancies</h2>
              <p className="text-sm text-slate-500">Create, edit, publish, or remove job postings.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{counts.vacancies} total</span>
              <button
                type="button"
                onClick={() => openVacancyEditor()}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                <FaPlus />
                Add vacancy
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {vacancyItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.department || 'Vacancy'} · Deadline {formatDate(item.deadline)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${item.is_active ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    type="button"
                    onClick={() => openVacancyEditor(item)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => removeVacancy(item.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {vacancyItems.length === 0 && <p className="text-sm text-slate-500">No vacancies found.</p>}
          </div>
        </div>
      </section>

      <section id="inbox" className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Complaints</h2>
              <p className="text-sm text-slate-500">Review and move customer complaints through the workflow.</p>
            </div>
            <span className="text-sm text-slate-500">{counts.pendingComplaints} pending</span>
          </div>

          <div className="space-y-3">
            {complaints.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900">{item.subject}</h3>
                    <p className="text-sm text-slate-500">{item.name} · {item.email}</p>
                    <p className="text-sm text-slate-500 mt-1">Reference {item.reference_number || item.id}</p>
                    <p className="mt-3 text-sm text-slate-700 line-clamp-3">{item.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 lg:min-w-[180px]">
                    <select
                      value={complaintStatuses[item.id] || item.status || 'pending'}
                      onChange={(event) => setComplaintStatuses((current) => ({ ...current, [item.id]: event.target.value }))}
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => saveComplaintStatus(item.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                    >
                      <FaCheckCircle />
                      Save
                    </button>
                    <span className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusBadgeClass(item.status || 'pending')}`}>
                      {item.status || 'pending'}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {complaints.length === 0 && <p className="text-sm text-slate-500">No complaints available.</p>}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Contact messages</h2>
              <p className="text-sm text-slate-500">Customer inquiries and follow-up messages.</p>
            </div>
            <span className="text-sm text-slate-500">{counts.unreadContacts} unread</span>
          </div>

          <div className="space-y-3">
            {contacts.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.subject}</h3>
                    <p className="text-sm text-slate-500">{item.name} · {item.email}</p>
                    <p className="mt-3 text-sm text-slate-700 line-clamp-3">{item.message}</p>
                    <p className="mt-2 text-xs text-slate-400">Received {formatDate(item.created_at)}</p>
                  </div>
                  <div className="flex flex-col gap-2 lg:min-w-[140px]">
                    <span className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold ${item.is_read ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-200 bg-red-50 text-red-700'}`}>
                      {item.is_read ? 'Read' : 'Unread'}
                    </span>
                    {!item.is_read && (
                      <button
                        type="button"
                        onClick={() => markContactRead(item.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                      >
                        <FaClock />
                        Mark read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {contacts.length === 0 && <p className="text-sm text-slate-500">No contact messages available.</p>}
          </div>
        </div>
      </section>

      {activeEditor && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 capitalize">{activeEditor} editor</h3>
                <p className="text-sm text-slate-500">Manage records directly from the admin console.</p>
              </div>
              <button
                type="button"
                onClick={closeEditor}
                className="rounded-full border border-slate-300 p-2 text-slate-600 hover:border-red-600 hover:text-red-600 transition-colors"
                aria-label="Close editor"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              {activeEditor === 'news' && (
                <form onSubmit={handleSaveNews} className="grid gap-4 md:grid-cols-2">
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Title</span>
                    <input value={newsForm.title} onChange={(event) => setNewsForm((current) => ({ ...current, title: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" required />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
                    <input value={newsForm.category} onChange={(event) => setNewsForm((current) => ({ ...current, category: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Publish date</span>
                    <input type="datetime-local" value={newsForm.published_at} onChange={(event) => setNewsForm((current) => ({ ...current, published_at: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Excerpt</span>
                    <textarea value={newsForm.excerpt} onChange={(event) => setNewsForm((current) => ({ ...current, excerpt: event.target.value }))} rows={3} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Content</span>
                    <textarea value={newsForm.content} onChange={(event) => setNewsForm((current) => ({ ...current, content: event.target.value }))} rows={8} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Image</span>
                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm disabled:bg-slate-100 disabled:text-slate-500 cursor-pointer"
                      />
                      <button
                        type="button"
                        onClick={() => setNewsForm((current) => ({ ...current, image_path: '' }))}
                        className="px-4 py-3 rounded-2xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition disabled:opacity-50"
                        disabled={!newsForm.image_path || uploading}
                      >
                        Clear
                      </button>
                    </div>
                    {uploading && <p className="mt-2 text-sm text-amber-600">Uploading...</p>}
                    {uploadError && <p className="mt-2 text-sm text-red-600">{uploadError}</p>}
                    {newsForm.image_path && (
                      <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <p className="text-sm text-slate-600 mb-2">Image URL:</p>
                        <a href={newsForm.image_path} target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 hover:underline truncate block">
                          {newsForm.image_path}
                        </a>
                      </div>
                    )}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={newsForm.is_featured} onChange={(event) => setNewsForm((current) => ({ ...current, is_featured: event.target.checked }))} />
                    <span className="text-sm font-medium text-slate-700">Featured</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={newsForm.is_published} onChange={(event) => setNewsForm((current) => ({ ...current, is_published: event.target.checked }))} />
                    <span className="text-sm font-medium text-slate-700">Published</span>
                  </label>
                  <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                    <button type="submit" disabled={savingEditor} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-60">
                      <FaSave />
                      {savingEditor ? 'Saving...' : 'Save news'}
                    </button>
                    <button type="button" onClick={closeEditor} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {activeEditor === 'vacancy' && (
                <form onSubmit={handleSaveVacancy} className="grid gap-4 md:grid-cols-2">
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Position</span>
                    <input value={vacancyForm.position} onChange={(event) => setVacancyForm((current) => ({ ...current, position: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" required />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Type</span>
                    <input value={vacancyForm.type} onChange={(event) => setVacancyForm((current) => ({ ...current, type: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" required />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Status</span>
                    <select value={vacancyForm.status} onChange={(event) => setVacancyForm((current) => ({ ...current, status: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100">
                      <option value="active">Active</option>
                      <option value="closed">Closed</option>
                    </select>
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Qualification</span>
                    <textarea value={vacancyForm.qualification} onChange={(event) => setVacancyForm((current) => ({ ...current, qualification: event.target.value }))} rows={4} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" required />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Experience</span>
                    <textarea value={vacancyForm.experience} onChange={(event) => setVacancyForm((current) => ({ ...current, experience: event.target.value }))} rows={4} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" required />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Locations</span>
                    <input value={vacancyForm.locationsText} onChange={(event) => setVacancyForm((current) => ({ ...current, locationsText: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" placeholder="Head Office, Addis Ababa" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Deadline</span>
                    <input type="date" value={vacancyForm.deadline} onChange={(event) => setVacancyForm((current) => ({ ...current, deadline: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-medium text-slate-700">Sort order</span>
                    <input type="number" value={vacancyForm.sort_order} onChange={(event) => setVacancyForm((current) => ({ ...current, sort_order: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100" />
                  </label>
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Apply link</span>
                    <input
                      type="url"
                      value={vacancyForm.apply_url}
                      onChange={(event) => setVacancyForm((current) => ({ ...current, apply_url: event.target.value }))}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                      placeholder="https://forms.example.com/apply"
                    />
                    <p className="mt-2 text-xs text-slate-500">Leave blank to use the default vacancy announcement link on the public page.</p>
                  </label>
                  <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                    <button type="submit" disabled={savingEditor} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-60">
                      <FaSave />
                      {savingEditor ? 'Saving...' : 'Save vacancy'}
                    </button>
                    <button type="button" onClick={closeEditor} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboardPage;