"use client";

import React, { useState } from 'react';

export function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 shadow-lg animate-in slide-in-from-bottom-5 mb-2">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container text-primary rounded-lg transition-colors border border-transparent hover:border-primary/30"
          >
            <span className="material-symbols-outlined text-[24px]">contact_mail</span>
            <span className="font-medium text-body-sm text-on-surface">Contact Ashram</span>
          </a>

          <a
            href="mailto:shridhyan.com@gmail.com"
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container text-primary rounded-lg transition-colors border border-transparent hover:border-primary/30"
          >
            <span className="material-symbols-outlined text-[24px]">mail</span>
            <span className="font-medium text-body-sm text-on-surface">Email Us</span>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary hover:bg-primary/90 text-on-primary rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-50 border-2 border-primary-container"
        aria-label="Contact Us"
      >
        <span className="material-symbols-outlined text-[28px]">
          {isOpen ? 'close' : 'forum'}
        </span>
      </button>
    </div>
  );
}
