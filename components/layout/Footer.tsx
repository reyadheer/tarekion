import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER, EMAIL } from '@/lib/utils';

const equipmentLinks = [
  { label: 'JCB Rental', href: '/equipment', ar: 'جي سي بي للإيجار' },
  { label: 'Bobcat Rental', href: '/equipment', ar: 'بوبكات للإيجار' },
  { label: 'Excavator Rental', href: '/equipment', ar: 'حفار للإيجار' },
  { label: 'Bulldozer Rental', href: '/equipment', ar: 'بلدوزر للإيجار' },
  { label: 'Wheel Loader Rental', href: '/equipment', ar: 'شيول للإيجار' },
  { label: 'Lowbed Trailer', href: '/equipment', ar: 'لوبيد للإيجار' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg font-black text-base"
                style={{ backgroundColor: '#F5C518', color: '#0a0a0a' }}
              >
                T
              </div>
              <div>
                <div className="font-black text-white text-lg tracking-tight leading-none">
                  TAREKION
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase font-medium">
                  Establishment
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Saudi Arabia&apos;s trusted heavy equipment rental company. Serving construction companies,
              contractors, and government projects with premium machinery.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed" dir="rtl">
              مؤسسة تركيون للإيجار المعدات الثقيلة في المملكة العربية السعودية
            </p>

            {/* Social / Contact quick */}
            <div className="flex gap-3 mt-5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-600 text-white hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Equipment for Rent
            </h3>
            <ul className="space-y-2.5">
              {equipmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors flex items-start justify-between gap-2"
                  >
                    <span>{item.label}</span>
                    <span className="text-gray-600 text-xs" dir="rtl">{item.ar}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mt-8 mb-5">
              Service Areas
            </h3>
            <ul className="space-y-1.5">
              {['Riyadh', 'Jeddah', 'Dammam', 'Khobar', 'Mecca', 'All KSA'].map((city) => (
                <li key={city} className="text-sm text-gray-400">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Riyadh, Saudi Arabia</p>
                  <p className="text-sm text-gray-500" dir="rtl">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Sun – Thu: 7am – 6pm</p>
                  <p className="text-sm text-gray-400">Fri – Sat: By appointment</p>
                  <p className="text-sm text-green-400 font-medium mt-1">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 py-3 rounded-xl text-sm font-bold text-black hover:opacity-90 transition-all"
              style={{ backgroundColor: '#F5C518' }}
            >
              <MessageCircle size={18} />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Tarekion Establishment. All rights reserved. | تركيون للمعدات الثقيلة
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-gray-600">Heavy Equipment Rental · Saudi Arabia · تأجير معدات ثقيلة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
