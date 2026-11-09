"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Inbox,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  ExternalLink,
  LogOut,
  RefreshCw,
  Trash2,
  Edit3,
  X,
  Compass,
  Calendar,
  ShieldCheck,
  Save,
  MessageSquare,
  Eye,
  Check,
  Plus,
  MapPin
} from "lucide-react";

export interface AshramEvent {
  _id: string;
  title: string;
  subtitle?: string;
  category: string;
  startDate?: string;
  endDate?: string;
  dateDisplay?: string;
  time?: string;
  location?: string;
  description?: string;
  capacity?: string;
  status: "active" | "draft" | "past" | "cancelled";
  registrationOpen: boolean;
  featured?: boolean;
  createdAt?: string;
}

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  status: "new" | "in_review" | "contacted" | "enrolled" | "archived";
  adminNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

interface UserItem {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  createdAt?: string;
}

interface Stats {
  totalInquiries: number;
  newInquiries: number;
  enrolledCount: number;
  totalUsers: number;
  totalEvents?: number;
  activeEvents?: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();

  // Navigation & View States
  const [activeTab, setActiveTab] = useState<"inquiries" | "events" | "courses" | "users" | "settings">("inquiries");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Data States
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [events, setEvents] = useState<AshramEvent[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalInquiries: 0,
    newInquiries: 0,
    enrolledCount: 0,
    totalUsers: 0,
    totalEvents: 0,
    activeEvents: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Inquiry Modal / Detail States
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [modalNotes, setModalNotes] = useState("");
  const [modalStatus, setModalStatus] = useState<Inquiry["status"]>("new");
  const [isSavingModal, setIsSavingModal] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);

  // Event Modal States
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<AshramEvent | null>(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    subtitle: "",
    category: "साधना शिविर",
    dateDisplay: "",
    startDate: "",
    endDate: "",
    time: "प्रातः ०६:०० – सायं ०७:३०",
    location: "श्रीध्यान आश्रम, उत्तरकाशी, उत्तराखण्ड",
    description: "",
    capacity: "25 साधक",
    status: "active" as AshramEvent["status"],
    registrationOpen: true,
  });
  const [isSavingEvent, setIsSavingEvent] = useState(false);
  const [eventSaveSuccess, setEventSaveSuccess] = useState(false);

  // Authenticate & Load Data
  const loadData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 1. Verify session
      const authRes = await fetch("/api/admin/auth/me");
      const authData = await authRes.json();

      if (!authData.authenticated) {
        router.push("/admin/login");
        return;
      }

      // 2. Fetch stats
      const statsRes = await fetch("/api/admin/stats");
      const statsData = await statsRes.json();
      if (statsData.success) {
        setStats(statsData.stats);
      }

      // 3. Fetch inquiries
      const inqRes = await fetch("/api/inquiries");
      const inqData = await inqRes.json();
      if (inqData.success) {
        setInquiries(inqData.inquiries);
      }

      // 4. Fetch users
      const usersRes = await fetch("/api/admin/users");
      const usersData = await usersRes.json();
      if (usersData.success) {
        setUsers(usersData.users);
      }

      // 5. Fetch events (admin: all=true)
      const eventsRes = await fetch("/api/events?all=true");
      const eventsData = await eventsRes.json();
      if (eventsData.success && Array.isArray(eventsData.events)) {
        setEvents(eventsData.events);
      }
    } catch (err) {
      console.error("[Dashboard Load Error]:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Open detail modal for Inquiry
  const handleOpenModal = (inq: Inquiry) => {
    setSelectedInquiry(inq);
    setModalStatus(inq.status);
    setModalNotes(inq.adminNotes || "");
    setSaveSuccessMessage(false);
  };

  // Close Inquiry Modal
  const handleCloseModal = () => {
    setSelectedInquiry(null);
    setSaveSuccessMessage(false);
  };

  // Save Modal changes for Inquiry
  const handleSaveModal = async () => {
    if (!selectedInquiry) return;
    setIsSavingModal(true);

    try {
      const res = await fetch(`/api/inquiries/${selectedInquiry._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: modalStatus,
          adminNotes: modalNotes,
        }),
      });

      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === selectedInquiry._id
              ? { ...item, status: modalStatus, adminNotes: modalNotes }
              : item
          )
        );
        setSelectedInquiry((prev) =>
          prev ? { ...prev, status: modalStatus, adminNotes: modalNotes } : null
        );

        setSaveSuccessMessage(true);
        setTimeout(() => setSaveSuccessMessage(false), 2500);

        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingModal(false);
    }
  };

  // Quick Status Change directly from row
  const handleQuickStatus = async (id: string, newStatus: Inquiry["status"]) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: newStatus } : item
          )
        );
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this inquiry?")) {
      return;
    }

    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setInquiries((prev) => prev.filter((item) => item._id !== id));
        if (selectedInquiry?._id === id) {
          handleCloseModal();
        }
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // =========================================================================
  // EVENT MANAGEMENT HANDLERS
  // =========================================================================

  const handleOpenEventModal = (ev?: AshramEvent) => {
    if (ev) {
      setEditingEvent(ev);
      setEventForm({
        title: ev.title,
        subtitle: ev.subtitle || "",
        category: ev.category || "साधना शिविर",
        dateDisplay: ev.dateDisplay || "",
        startDate: ev.startDate || "",
        endDate: ev.endDate || "",
        time: ev.time || "प्रातः ०६:०० – सायं ०७:३०",
        location: ev.location || "श्रीध्यान आश्रम, उत्तरकाशी, उत्तराखण्ड",
        description: ev.description || "",
        capacity: ev.capacity || "25 साधक",
        status: ev.status || "active",
        registrationOpen: ev.registrationOpen !== false,
      });
    } else {
      setEditingEvent(null);
      setEventForm({
        title: "",
        subtitle: "",
        category: "साधना शिविर",
        dateDisplay: "",
        startDate: "",
        endDate: "",
        time: "प्रातः ०६:०० – सायं ०७:३०",
        location: "श्रीध्यान आश्रम, उत्तरकाशी, उत्तराखण्ड",
        description: "",
        capacity: "25 साधक",
        status: "active",
        registrationOpen: true,
      });
    }
    setEventSaveSuccess(false);
    setEventModalOpen(true);
  };

  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title.trim()) return;
    setIsSavingEvent(true);

    try {
      const url = editingEvent ? `/api/events/${editingEvent._id}` : "/api/events";
      const method = editingEvent ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventForm),
      });

      if (res.ok) {
        setEventSaveSuccess(true);
        // Refresh events
        const eventsRes = await fetch("/api/events?all=true");
        const eventsData = await eventsRes.json();
        if (eventsData.success && Array.isArray(eventsData.events)) {
          setEvents(eventsData.events);
        }
        // Refresh stats
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);

        setTimeout(() => {
          setEventModalOpen(false);
          setEventSaveSuccess(false);
        }, 1000);
      }
    } catch (err) {
      console.error("Save event error:", err);
    } finally {
      setIsSavingEvent(false);
    }
  };

  const handleToggleEventStatus = async (ev: AshramEvent) => {
    const newStatus = ev.status === "active" ? "draft" : "active";
    try {
      const res = await fetch(`/api/events/${ev._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setEvents((prev) =>
          prev.map((item) =>
            item._id === ev._id ? { ...item, status: newStatus } : item
          )
        );
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event? It will be removed from the public website.")) {
      return;
    }

    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setEvents((prev) => prev.filter((item) => item._id !== id));
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Export Inquiries to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) return;

    const headers = ["Date", "Name", "Email", "Phone", "Course", "Status", "Message", "Admin Notes"];
    const rows = inquiries.map((inq) => [
      new Date(inq.createdAt).toLocaleString("en-IN"),
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.email}"`,
      `"${inq.phone}"`,
      `"${inq.course.replace(/"/g, '""')}"`,
      inq.status,
      `"${(inq.message || "").replace(/"/g, '""')}"`,
      `"${(inq.adminNotes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shridhyan_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      inq.name.toLowerCase().includes(q) ||
      inq.email.toLowerCase().includes(q) ||
      inq.phone.toLowerCase().includes(q) ||
      inq.course.toLowerCase().includes(q) ||
      (inq.message && inq.message.toLowerCase().includes(q));

    return matchesStatus && matchesSearch;
  });

  // Status badge styling helper
  const renderStatusBadge = (status: Inquiry["status"]) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            New
          </span>
        );
      case "contacted":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-400/30">
            <Clock className="w-3 h-3" />
            Contacted
          </span>
        );
      case "enrolled":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
            <CheckCircle2 className="w-3 h-3" />
            Enrolled
          </span>
        );
      case "in_review":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-400/30">
            <Clock className="w-3 h-3" />
            In Review
          </span>
        );
      case "archived":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-500/15 text-stone-400 border border-stone-500/30">
            Archived
          </span>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#04120b] text-[#fcfbf7]">
        <div className="w-12 h-12 border-3 border-amber-400/30 border-t-amber-400 rounded-full animate-spin mb-4" />
        <p className="font-serif text-amber-200 tracking-wider text-sm">
          श्रीध्यान आश्रम प्रशासनिक केंद्र लोड हो रहा है...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d07] via-[#05170e] to-[#04120b] text-[#fcfbf7] font-sans pb-16">
      
      {/* ========================================================================= */}
      {/* TOP NAVBAR */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#061910]/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Ashram Name */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-amber-400/40 p-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center">
              <img
                src="/images/two-removebg-preview.svg"
                alt="Shridhyan Emblem"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                  SHRIDHYAN
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/15 border border-amber-400/40 text-amber-300 uppercase tracking-widest">
                  ADMIN
                </span>
              </div>
              <p className="text-[11px] text-amber-200/60 font-sans">
                प्रशासनिक नियंत्रण केंद्र • Uttarkashi
              </p>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* View Live Website Button */}
            <Link
              href="/"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-300 px-3 py-1.5 rounded-lg border border-white/10 hover:border-amber-400/40 bg-white/5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>वेबसाइट देखें</span>
            </Link>

            {/* Refresh Button */}
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="p-2 rounded-lg border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 transition-colors cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>

            {/* Admin User Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-amber-400/30 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-amber-200/90 text-xs truncate max-w-[160px]">
                shridhyan108@gmail.com
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-500/30 hover:border-red-500/60 text-red-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>

        {/* Navigation Tabs Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 flex gap-1 sm:gap-4 overflow-x-auto no-scrollbar">
          {/* Tab 1: Inquiries */}
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === "inquiries"
                ? "border-amber-400 text-amber-300 bg-amber-400/5"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>आवेदन व पूछताछ (Inquiries)</span>
            {stats.newInquiries > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-stone-950">
                {stats.newInquiries}
              </span>
            )}
          </button>

          {/* Tab 2: Upcoming Events (NEW!) */}
          <button
            onClick={() => setActiveTab("events")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === "events"
                ? "border-amber-400 text-amber-300 bg-amber-400/5"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>आगामी कार्यक्रम (Events)</span>
            <span className="text-[11px] text-stone-400">({events.length})</span>
          </button>

          {/* Tab 3: Courses */}
          <button
            onClick={() => setActiveTab("courses")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === "courses"
                ? "border-amber-400 text-amber-300 bg-amber-400/5"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>पाठ्यक्रम व बैच (Courses)</span>
          </button>

          {/* Tab 4: Users */}
          <button
            onClick={() => setActiveTab("users")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === "users"
                ? "border-amber-400 text-amber-300 bg-amber-400/5"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>पंजीकृत साधक (Users)</span>
            <span className="text-[11px] text-stone-400">({stats.totalUsers})</span>
          </button>

          {/* Tab 5: Settings */}
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === "settings"
                ? "border-amber-400 text-amber-300 bg-amber-400/5"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>आश्रम व्यवस्था (Settings)</span>
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* 1. STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          
          {/* Card 1: Total Inquiries */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#071f14]/80 border border-amber-400/25 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between text-stone-400 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-200/70">
                कुल आवेदन (Total)
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center">
                <Inbox className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {stats.totalInquiries}
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              All time inquiries & contact forms
            </p>
          </div>

          {/* Card 2: New / Action Required */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#071f14]/80 border border-amber-500/40 shadow-lg backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between text-stone-400 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                नए आवेदन (New)
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
              {stats.newInquiries}
            </div>
            <p className="text-[11px] text-amber-200/70 mt-1">
              Awaiting response from Ashram
            </p>
          </div>

          {/* Card 3: Events Status */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#071f14]/80 border border-amber-400/25 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between text-stone-400 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-200/70">
                सक्रिय कार्यक्रम (Active Events)
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {events.filter((e) => e.status === "active").length}
              <span className="text-xs text-stone-400 font-normal ml-1">/ {events.length} total</span>
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              Live on website /upcoming
            </p>
          </div>

          {/* Card 4: Registered Users */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#071f14]/80 border border-amber-400/25 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between text-stone-400 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-200/70">
                पंजीकृत साधक (Seekers)
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {stats.totalUsers}
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              Registered via Google OAuth in DB
            </p>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* TAB 1: INQUIRIES & APPLICATIONS MANAGEMENT */}
        {/* ===================================================================== */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            
            {/* Action Bar: Filters, Search, CSV Export */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#061910]/70 border border-white/10 backdrop-blur-sm">
              
              {/* Status Filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: "all", label: "All" },
                  { id: "new", label: "New" },
                  { id: "contacted", label: "Contacted" },
                  { id: "enrolled", label: "Enrolled" },
                  { id: "archived", label: "Archived" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setStatusFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      statusFilter === tab.id
                        ? "bg-amber-500 text-stone-950 shadow-md font-bold"
                        : "bg-white/5 text-stone-300 hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Bar & Export */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 md:w-64">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, email, course..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <button
                  onClick={handleExportCSV}
                  disabled={inquiries.length === 0}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-semibold transition-colors disabled:opacity-40 cursor-pointer"
                  title="Export all inquiries to CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>
              </div>

            </div>

            {/* Inquiries List Table */}
            <div className="rounded-2xl bg-[#061910]/70 border border-white/10 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-black/40 text-stone-400 font-mono uppercase tracking-wider text-[11px] border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Applicant</th>
                      <th className="py-3.5 px-4">Course / Topic</th>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Notes</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-stone-500">
                          <Inbox className="w-8 h-8 text-stone-600 mx-auto mb-2" />
                          <p className="text-sm">No inquiries match the current filter.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <tr
                          key={inq._id}
                          className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
                          onClick={() => handleOpenModal(inq)}
                        >
                          {/* Status */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            {renderStatusBadge(inq.status)}
                          </td>

                          {/* Applicant */}
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-white text-sm">
                              {inq.name}
                            </div>
                            <div className="flex items-center gap-3 text-stone-400 text-xs mt-0.5">
                              <span className="font-mono text-[11px]">{inq.email}</span>
                              {inq.phone && (
                                <>
                                  <span>•</span>
                                  <span className="font-mono text-[11px]">{inq.phone}</span>
                                </>
                              )}
                            </div>
                          </td>

                          {/* Course */}
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-200 text-xs font-medium inline-block max-w-[220px] truncate">
                              {inq.course}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="py-3.5 px-4 whitespace-nowrap text-stone-400 font-mono text-[11px]">
                            {new Date(inq.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>

                          {/* Notes */}
                          <td className="py-3.5 px-4 max-w-[200px]">
                            {inq.adminNotes ? (
                              <p className="text-stone-300 text-xs truncate italic">
                                “{inq.adminNotes}”
                              </p>
                            ) : (
                              <span className="text-stone-600">—</span>
                            )}
                          </td>

                          {/* Actions */}
                          <td
                            className="py-3.5 px-4 text-right whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-end gap-2">
                              {/* Quick status dropdown */}
                              <select
                                value={inq.status}
                                onChange={(e) =>
                                  handleQuickStatus(inq._id, e.target.value as Inquiry["status"])
                                }
                                className="bg-black/50 border border-white/15 rounded-lg px-2 py-1 text-[11px] text-stone-300 focus:outline-none focus:border-amber-400 cursor-pointer"
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="enrolled">Enrolled</option>
                                <option value="in_review">In Review</option>
                                <option value="archived">Archived</option>
                              </select>

                              <button
                                onClick={() => handleOpenModal(inq)}
                                className="p-1.5 rounded-lg text-stone-400 hover:text-amber-300 hover:bg-white/5 cursor-pointer"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleDeleteInquiry(inq._id)}
                                className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer"
                                title="Delete Inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: UPCOMING EVENTS MANAGEMENT (NEW!) */}
        {/* ========================================================================= */}
        {activeTab === "events" && (
          <div className="space-y-6">
            
            {/* Header with Add Event Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#061910]/70 border border-white/10 backdrop-blur-sm">
              <div>
                <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>आश्रम कार्यक्रम प्रबंधन (Upcoming Events)</span>
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Control all public retreats and workshops on /upcoming and /events
                </p>
              </div>

              <button
                onClick={() => handleOpenEventModal()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ नया कार्यक्रम जोड़ें (Add Event)</span>
              </button>
            </div>

            {/* Events Content */}
            {events.length === 0 ? (
              // Empty State in Admin
              <div className="p-12 rounded-3xl bg-[#061910]/60 border border-white/10 text-center max-w-2xl mx-auto shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  वर्तमान में कोई कार्यक्रम नहीं है
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  जब तक आप यहाँ कोई कार्यक्रम नहीं जोड़ते, तब तक वेबसाइट के <strong className="text-amber-300">/upcoming</strong> और <strong className="text-amber-300">/events</strong> पृष्ठ पर साधकों को <em>“वर्तमान में कोई आगामी कार्यक्रम निर्धारित नहीं है”</em> का शांत संदेश दिखाई देगा।
                </p>
                <button
                  onClick={() => handleOpenEventModal()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>पहला कार्यक्रम जोड़ें (Create First Event)</span>
                </button>
              </div>
            ) : (
              // Events List Grid
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((ev) => (
                  <div
                    key={ev._id}
                    className="p-6 rounded-2xl bg-[#061910]/80 border border-amber-400/25 hover:border-amber-400/50 shadow-lg flex flex-col justify-between transition-all"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                          {ev.category}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleEventStatus(ev)}
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                              ev.status === "active"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                : "bg-stone-500/20 text-stone-400 border-stone-500/40"
                            }`}
                            title="Click to toggle Active/Draft"
                          >
                            {ev.status === "active" ? "● Active (Live)" : "○ Draft (Hidden)"}
                          </button>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-lg font-serif font-bold text-white mb-1">
                        {ev.title}
                      </h3>
                      {ev.subtitle && (
                        <p className="text-xs text-amber-300/80 mb-3 font-medium">
                          {ev.subtitle}
                        </p>
                      )}

                      {/* Info Pills */}
                      <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-stone-300 mb-4 font-mono">
                        {ev.dateDisplay && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span>{ev.dateDisplay}</span>
                          </div>
                        )}
                        {ev.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>{ev.time}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span className="truncate">{ev.location}</span>
                        </div>
                        {ev.capacity && (
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-amber-400" />
                            <span>{ev.capacity}</span>
                          </div>
                        )}
                      </div>

                      {/* Description preview */}
                      {ev.description && (
                        <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed font-sans mb-4">
                          {ev.description}
                        </p>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] text-stone-500">
                        {ev.registrationOpen ? "पंजीकरण खुला" : "पंजीकरण बंद"}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEventModal(ev)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-200 text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(ev._id)}
                          className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Delete Event"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: COURSES & CAPACITY MANAGEMENT */}
        {/* ===================================================================== */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">
                  पाठ्यक्रम एवं आगामी बैच क्षमता (Course Batches)
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Manage seats, cohort schedules, and applicant allocation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Course 1 */}
              <div className="p-6 rounded-2xl bg-[#061910]/80 border border-amber-400/30 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>वैदिक अध्ययन</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    7-Day Vedic Bio Healing
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    Based on Atharvaveda (Kanda 4, Sukta 13) mantra sadhana and vital breath energetics.
                  </p>

                  <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <div className="flex justify-between text-stone-300">
                      <span>Cohort Size:</span>
                      <strong className="text-amber-300">Strict 25 Seats Limit</strong>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold">Active Enrollment</span>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Next Batch:</span>
                      <span className="text-stone-200">15th of Every Month</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Total Inquiries:</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">
                    {inquiries.filter((i) => i.course.includes("Vedic Bio")).length}
                  </span>
                </div>
              </div>

              {/* Course 2 */}
              <div className="p-6 rounded-2xl bg-[#061910]/80 border border-amber-400/30 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold mb-3">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>ध्यान साधना</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    Meditation Teacher Training
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    In-depth meditation methodologies, yogic discipline, and instructor certification.
                  </p>

                  <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <div className="flex justify-between text-stone-300">
                      <span>Duration:</span>
                      <strong className="text-amber-300">21-Day Intensive</strong>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Format:</span>
                      <span className="text-stone-200">Ashram Residential</span>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Application:</span>
                      <span className="text-purple-300 font-semibold">Interview Required</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Total Inquiries:</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">
                    {inquiries.filter((i) => i.course.includes("Meditation")).length}
                  </span>
                </div>
              </div>

              {/* Course 3 */}
              <div className="p-6 rounded-2xl bg-[#061910]/80 border border-amber-400/30 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>शाक्त परंपरा</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    Shri Vidya Sadhana
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    Traditional Shakta philosophy, mantra upasana, and Sri Chakra contemplation.
                  </p>

                  <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <div className="flex justify-between text-stone-300">
                      <span>Guidance:</span>
                      <strong className="text-amber-300">Direct Guru Sanctorum</strong>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Eligibility:</span>
                      <span className="text-stone-200">Sincere Seekers</span>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Initiation:</span>
                      <span className="text-amber-400 font-semibold">Himalayan Retreat</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Total Inquiries:</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">
                    {inquiries.filter((i) => i.course.includes("Shri Vidya")).length}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: REGISTERED USERS */}
        {/* ===================================================================== */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">
                  पंजीकृत साधक सूची (Registered Seekers)
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Users authenticated with Google OAuth saved in MongoDB database
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#061910]/70 border border-white/10 overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-black/40 text-stone-400 font-mono uppercase tracking-wider text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">User</th>
                    <th className="py-3.5 px-4">Email</th>
                    <th className="py-3.5 px-4">Role</th>
                    <th className="py-3.5 px-4">MongoDB ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-3.5 px-4 flex items-center gap-3">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-amber-400/40"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                        )}
                        <span className="font-semibold text-white text-sm">{user.name}</span>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-stone-300">
                        {user.email}
                      </td>

                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          user.email === "shridhyan108@gmail.com"
                            ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                            : "bg-white/5 text-stone-300 border border-white/10"
                        }`}>
                          {user.email === "shridhyan108@gmail.com" ? "Super Admin" : "Seeker"}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-[11px] text-stone-500">
                        {user._id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 5: ASHRAM SETTINGS & SYSTEM INFO */}
        {/* ===================================================================== */}
        {activeTab === "settings" && (
          <div className="max-w-3xl space-y-6">
            
            {/* Admin Credentials Card */}
            <div className="p-6 rounded-2xl bg-[#061910]/80 border border-amber-400/30 shadow-lg">
              <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>व्यवस्थापक खाता विवरण (Admin Profile)</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-stone-400">Admin Email:</span>
                  <span className="font-mono text-amber-300 font-semibold">
                    shridhyan108@gmail.com
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-stone-400">Authorization Level:</span>
                  <span className="text-emerald-400 font-semibold">Full Administrator Access</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-stone-400">Database Engine:</span>
                  <span className="text-stone-200">MongoDB Atlas (Cluster0 • shridhyan_ashram)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-400">Ashram Location:</span>
                  <span className="text-stone-200">30.821991° N, 78.609482° E • Uttarkashi, Uttarakhand</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-[#061910]/80 border border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white text-sm">प्रस्थान (Sign Out)</h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  Safely end this administrative session
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/60 border border-red-500/40 text-red-200 text-xs font-bold transition-colors cursor-pointer"
              >
                Sign Out from Admin
              </button>
            </div>

          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* INQUIRY DETAIL & EDIT MODAL */}
      {/* ========================================================================= */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-amber-300 uppercase tracking-widest block mb-1">
                  Inquiry Details #{selectedInquiry._id.slice(-6)}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-5 space-y-5">
              
              {/* Contact Bar with Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=Shridhyan Ashram Inquiry Response`}
                  className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-amber-400/50 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-stone-400 block">Click to Email:</span>
                    <span className="text-xs font-mono text-amber-200 group-hover:text-amber-100 truncate block">
                      {selectedInquiry.email}
                    </span>
                  </div>
                </a>

                {selectedInquiry.phone ? (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-amber-400/50 flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-stone-400 block">Click to Call:</span>
                      <span className="text-xs font-mono text-emerald-200 group-hover:text-emerald-100 truncate block">
                        {selectedInquiry.phone}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center gap-3 text-stone-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs">No phone provided</span>
                  </div>
                )}
              </div>

              {/* Course & Date Info */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 block mb-1">Selected Course:</span>
                  <span className="font-semibold text-amber-300">
                    {selectedInquiry.course}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Received Date:</span>
                  <span className="font-mono text-stone-200">
                    {new Date(selectedInquiry.createdAt).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Message from Seeker */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Seeker Message:</span>
                </label>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-stone-200 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap font-sans">
                  {selectedInquiry.message || "No specific message provided."}
                </div>
              </div>

              {/* Status Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                  Change Status:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {(["new", "in_review", "contacted", "enrolled", "archived"] as const).map(
                    (st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setModalStatus(st)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold capitalize border transition-all cursor-pointer ${
                          modalStatus === st
                            ? "bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md"
                            : "bg-black/30 text-stone-400 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {st.replace("_", " ")}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Internal Admin Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Internal Admin Notes:</span>
                </label>
                <textarea
                  rows={3}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Add private ashram notes (e.g. called on Monday, confirmed arrival for Dec cohort...)"
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Success Notification */}
              {saveSuccessMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Changes saved successfully to database!</span>
                </div>
              )}

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleDeleteInquiry(selectedInquiry._id)}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 self-start sm:self-center cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Inquiry</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-white/15 text-stone-300 hover:bg-white/5 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveModal}
                  disabled={isSavingModal}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isSavingModal ? "Saving..." : "Save Changes"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EVENT CREATE / EDIT MODAL */}
      {/* ========================================================================= */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-amber-300 uppercase tracking-widest block mb-1">
                  {editingEvent ? "Edit Event" : "Create New Event"}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {editingEvent ? "कार्यक्रम संपादित करें" : "नया आगामी कार्यक्रम जोड़ें"}
                </h3>
              </div>
              <button
                onClick={() => setEventModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Event Form */}
            <form onSubmit={handleSaveEvent} className="py-5 space-y-4">
              
              {/* Event Title */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                  Event Title (कार्यक्रम का नाम) *
                </label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="e.g. हिमालयी मौन एवं ध्यान साधना शिविर"
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 font-serif"
                />
              </div>

              {/* Subtitle & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Subtitle (उपशीर्षक)
                  </label>
                  <input
                    type="text"
                    value={eventForm.subtitle}
                    onChange={(e) => setEventForm({ ...eventForm, subtitle: e.target.value })}
                    placeholder="e.g. 7-दिवसीय आवासीय साधना"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Category (श्रेणी)
                  </label>
                  <select
                    value={eventForm.category}
                    onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="साधना शिविर">साधना शिविर (Retreat)</option>
                    <option value="वैदिक कार्यशाला">वैदिक कार्यशाला (Workshop)</option>
                    <option value="मौन साधना">मौन साधना (Silence)</option>
                    <option value="विशेष सत्संग">विशेष सत्संग (Satsang)</option>
                    <option value="दीक्षा अनुष्ठान">दीक्षा अनुष्ठान (Initiation)</option>
                  </select>
                </div>
              </div>

              {/* Date Display & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Dates Display Text (तिथियाँ)
                  </label>
                  <input
                    type="text"
                    value={eventForm.dateDisplay}
                    onChange={(e) => setEventForm({ ...eventForm, dateDisplay: e.target.value })}
                    placeholder="e.g. 15 – 21 दिसंबर 2026"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Daily Schedule Time (समय)
                  </label>
                  <input
                    type="text"
                    value={eventForm.time}
                    onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                    placeholder="e.g. प्रातः ०६:०० – सायं ०७:३०"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Location & Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Venue / Location (स्थान)
                  </label>
                  <input
                    type="text"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    placeholder="श्रीध्यान आश्रम, उत्तरकाशी"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                    Capacity (साधक संख्या)
                  </label>
                  <input
                    type="text"
                    value={eventForm.capacity}
                    onChange={(e) => setEventForm({ ...eventForm, capacity: e.target.value })}
                    placeholder="e.g. 25 साधक (सीमित सीटें)"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Status & Registration Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3.5 rounded-xl bg-black/30 border border-white/10 items-center">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1">
                    Publication Status:
                  </label>
                  <select
                    value={eventForm.status}
                    onChange={(e) =>
                      setEventForm({
                        ...eventForm,
                        status: e.target.value as AshramEvent["status"],
                      })
                    }
                    className="w-full p-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="active">Active (सार्वजनिक वेबसाइट पर दिखेगा)</option>
                    <option value="draft">Draft (ड्राफ्ट - अभी छिपाएं)</option>
                    <option value="past">Past (संपन्न)</option>
                    <option value="cancelled">Cancelled (स्थगित)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-2 sm:pt-4">
                  <input
                    type="checkbox"
                    id="registrationOpen"
                    checked={eventForm.registrationOpen}
                    onChange={(e) =>
                      setEventForm({ ...eventForm, registrationOpen: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 focus:outline-none cursor-pointer"
                  />
                  <label htmlFor="registrationOpen" className="text-xs text-stone-200 font-semibold cursor-pointer">
                    Registration Open (पंजीकरण खुला है)
                  </label>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                  Detailed Description (विवरण व नियम)
                </label>
                <textarea
                  rows={4}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  placeholder="कार्यक्रम की साधना पद्धति, पात्रता एवं अन्य नियम..."
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 resize-none font-sans"
                />
              </div>

              {/* Success Alert */}
              {eventSaveSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>कार्यक्रम सफलतापूर्वक सहेजा गया! (Event saved successfully!)</span>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/15 text-stone-300 hover:bg-white/5 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSavingEvent}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isSavingEvent ? "Saving..." : editingEvent ? "Update Event" : "Publish Event"}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
