"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Ambient background */}
      <div className="login-bg">
        <div className="login-orb login-orb-1" />
        <div className="login-orb login-orb-2" />
        <div className="login-orb login-orb-3" />
      </div>

      {/* Card */}
      <main className="login-card" role="main">
        {/* Logo / emblem */}
        <div className="login-logo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/two-removebg-preview.svg"
            alt="Shridhyan Ashram Emblem"
            className="login-logo"
          />
        </div>

        <div className="login-divider" />

        <h1 className="login-title">श्री ध्यान आश्रम</h1>
        <p className="login-subtitle">Shridhyan Ashram</p>
        <p className="login-desc">Sign in to continue your spiritual journey</p>

        <div className="login-divider" />

        <button
          id="google-signin-btn"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="login-google-btn"
          aria-label="Sign in with Google"
        >
          {isLoading ? (
            <span className="login-spinner" aria-hidden="true" />
          ) : (
            <GoogleIcon />
          )}
          <span>{isLoading ? "Signing in…" : "Continue with Google"}</span>
        </button>

        <p className="login-privacy">
          By signing in, you agree to our{" "}
          <Link href="/privacy" className="login-link">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="login-back">
          <Link href="/" className="login-link" id="back-home-link">
            ← Back to Home
          </Link>
        </div>
      </main>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #061910;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Ambient orbs */
        .login-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .login-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          animation: orb-drift 12s ease-in-out infinite alternate;
        }
        .login-orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #c9a84c, transparent 70%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }
        .login-orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #3a7d3f, transparent 70%);
          bottom: -80px;
          right: -80px;
          animation-delay: 4s;
        }
        .login-orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #8B5E3C, transparent 70%);
          top: 50%;
          left: 60%;
          animation-delay: 8s;
        }
        @keyframes orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.08); }
        }

        /* Card */
        .login-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          background: rgba(10, 30, 20, 0.75);
          border: 1px solid rgba(201, 168, 76, 0.25);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(201, 168, 76, 0.08),
            0 24px 64px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(201, 168, 76, 0.06);
          animation: card-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Logo */
        .login-logo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .login-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(201, 168, 76, 0.4));
          animation: logo-glow 3s ease-in-out infinite alternate;
        }
        @keyframes logo-glow {
          from { filter: drop-shadow(0 0 8px rgba(201, 168, 76, 0.3)); }
          to   { filter: drop-shadow(0 0 20px rgba(201, 168, 76, 0.6)); }
        }

        /* Divider */
        .login-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent);
          margin: 1.25rem 0;
        }

        /* Text */
        .login-title {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #c9a84c;
          margin: 0 0 0.25rem;
          letter-spacing: 0.02em;
        }
        .login-subtitle {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 0.5rem;
          letter-spacing: 0.08em;
        }
        .login-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
        }

        /* Google button */
        .login-google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.85rem 1.5rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: 12px;
          color: #f0e6c8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
        }
        .login-google-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201, 168, 76, 0.12), transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .login-google-btn:hover:not(:disabled)::before { opacity: 1; }
        .login-google-btn:hover:not(:disabled) {
          border-color: rgba(201, 168, 76, 0.6);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(201, 168, 76, 0.15);
        }
        .login-google-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .login-google-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        /* Spinner */
        .login-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(201, 168, 76, 0.3);
          border-top-color: #c9a84c;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Footer text */
        .login-privacy {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.35);
          margin: 1rem 0 0;
        }
        .login-back {
          margin-top: 1.25rem;
        }
        .login-link {
          color: rgba(201, 168, 76, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .login-link:hover { color: #c9a84c; }
      `}</style>
    </div>
  );
}

/** Google "G" coloured SVG icon */
function GoogleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}
