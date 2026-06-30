'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/lib/utils';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp + Phone — desktop */}
      <div
        className={`fixed right-5 bottom-8 z-50 hidden md:flex flex-col gap-3 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {!dismissed && (
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mb-1 max-w-[220px]">
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
            <p className="text-xs text-gray-600 font-medium leading-snug">
              Need heavy equipment? <br />
              <span className="text-yellow-500 font-bold">Chat with us now!</span>
            </p>
          </div>
        )}

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center bg-green-500 text-white shadow-xl hover:bg-green-400 hover:scale-105 transition-all whatsapp-pulse"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="w-14 h-14 rounded-full flex items-center justify-center text-black shadow-xl hover:opacity-90 hover:scale-105 transition-all"
          style={{ backgroundColor: '#F5C518' }}
          aria-label="Call us now"
          title="Call Now"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Sticky bottom bar — mobile */}
      <div className="mobile-cta-bar md:hidden safe-area-bottom">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-900 text-white text-sm font-bold"
          aria-label="Call now"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-black text-sm font-bold"
          style={{ backgroundColor: '#F5C518' }}
          aria-label="WhatsApp us"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* Spacer so content isn't hidden behind mobile bar */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  );
}
