'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', labelAr: 'الرئيسية' },
  { href: '/equipment', label: 'Equipment', labelAr: 'المعدات' },
  { href: '/gallery', label: 'Gallery', labelAr: 'معرض الصور' },
  { href: '/about', label: 'About', labelAr: 'من نحن' },
  { href: '/blog', label: 'Blog', labelAr: 'المدونة' },
  { href: '/contact', label: 'Contact', labelAr: 'تواصل معنا' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Tarekion Heavy Equipment Rental">
            <div
              className="w-9 h-9 flex items-center justify-center rounded-lg font-black text-base"
              style={{ backgroundColor: '#F5C518', color: '#0a0a0a' }}
            >
              T
            </div>
            <div>
              <div
                className={`font-black text-lg tracking-tight leading-none transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                TAREKION
              </div>
              <div
                className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? 'text-gray-400' : 'text-white/60'
                }`}
              >
                Heavy Equipment
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
              aria-label="Call Tarekion"
            >
              <Phone size={15} />
              {PHONE_NUMBER}
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-black hover:opacity-90 active:scale-95 transition-all"
              style={{ backgroundColor: '#F5C518' }}
              aria-label="Chat with us on WhatsApp"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-custom py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-3 border-b border-gray-50 text-gray-800 font-medium hover:text-yellow-500 transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-gray-400 text-sm font-medium" dir="rtl">
                {link.labelAr}
              </span>
            </Link>
          ))}
          <div className="flex gap-3 mt-5 pb-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl text-sm font-bold text-gray-800 hover:border-gray-400 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 rounded-xl text-sm font-bold text-black"
              style={{ backgroundColor: '#F5C518' }}
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
