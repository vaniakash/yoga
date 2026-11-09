"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  KeyRound
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("shridhyan108@gmail.com");
  const [password, setPassword] = useState("Aku79020");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Authentication failed");
        setIsLoading(false);
        return;
      }

      // Successful login
      router.push("/admin");
      router.refresh();
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#030e08] via-[#061910] to-[#04140b] relative overflow-hidden font-sans">
      {/* Sacred Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-b from-amber-500/15 via-orange-500/10 to-transparent blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="bg-[#071f14]/85 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/80">
          
          {/* Emblem & Branding */}
          <div className="text-center mb-7">
            <div className="w-16 h-16 mx-auto mb-3.5 p-2 rounded-2xl bg-black/40 border border-amber-400/40 shadow-[0_0_25px_rgba(212,175,55,0.25)] flex items-center justify-center">
              <img
                src="/images/two-removebg-preview.svg"
                alt="Shridhyan Emblem"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>प्रशासनिक प्रवेश • Admin Portal</span>
            </div>

            <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
              श्रीध्यान आश्रम
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              Authorized Management & Seeker Inquiries Control
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5 animate-shake">
              <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400/70">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="shridhyan108@gmail.com"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-amber-400/30 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all font-mono text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-200/80 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400/70">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-11 py-3 bg-black/40 border border-amber-400/30 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all font-mono text-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-amber-300 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick credentials hint */}
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-[11px] text-amber-200/90 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono">
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                <span>shridhyan108@gmail.com</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  setEmail("shridhyan108@gmail.com");
                  setPassword("Aku79020");
                }}
                className="text-[10px] uppercase font-bold text-amber-400 hover:text-amber-200 underline"
              >
                Auto-fill
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-stone-950/30 border-t-stone-950 rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Back Links */}
          <div className="mt-7 pt-5 border-t border-white/10 text-center">
            <Link
              href="/"
              className="text-xs text-stone-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              <span>← Back to Public Website</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

