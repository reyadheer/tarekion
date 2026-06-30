import Link from 'next/link';
import { Home, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="text-center px-6">
        <div
          className="text-8xl font-black mb-4"
          style={{ color: '#F5C518' }}
        >
          404
        </div>
        <h1 className="text-2xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-white/60 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black text-sm"
            style={{ backgroundColor: '#F5C518' }}
          >
            <Home size={18} />
            Go Home
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm border-2 border-white/20"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
