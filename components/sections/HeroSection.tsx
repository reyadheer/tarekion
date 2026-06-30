'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone, ChevronDown, Shield, Clock, Star } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/lib/utils';

const stats = [
  { number: '500+', label: 'Projects Completed', labelAr: 'مشروع منجز' },
  { number: '15+', label: 'Years Experience', labelAr: 'سنة خبرة' },
  { number: '50+', label: 'Equipment Fleet', labelAr: 'وحدة معدات' },
  { number: '24/7', label: 'Support Available', labelAr: 'دعم متواصل' },
];

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Star, text: 'Top Rated in KSA' },
  { icon: Clock, text: '24/7 Support' },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #2a1a00 100%)',
      }}
      aria-label="Hero: Heavy Equipment Rental in Saudi Arabia"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C518' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Yellow accent glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 -translate-y-1/2"
        style={{ backgroundColor: '#F5C518' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold text-white/80"
                style={{ borderColor: 'rgba(245,197,24,0.3)', backgroundColor: 'rgba(245,197,24,0.08)' }}
              >
                <Icon size={12} style={{ color: '#F5C518' }} />
                {text}
              </span>
            ))}
          </div>

          {/* Main headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Heavy Equipment{' '}
            <span
              className="block"
              style={{ color: '#F5C518' }}
            >
              Rental in Saudi Arabia
            </span>
          </h1>

          {/* Arabic headline */}
          <p
            className={`text-xl md:text-2xl font-bold text-white/60 mb-6 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            dir="rtl"
          >
            تأجير معدات ثقيلة في المملكة العربية السعودية
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Tarekion provides premium JCB, Bobcat, Excavators, Bulldozers, and Wheel Loaders
            for construction, factories, and government projects — with experienced operators
            and 24/7 support across all of KSA.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl font-black text-base text-black hover:opacity-90 active:scale-95 transition-all shadow-xl"
              style={{ backgroundColor: '#F5C518' }}
              aria-label="Contact Tarekion on WhatsApp for heavy equipment rental"
            >
              <MessageCircle size={20} />
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl font-black text-base text-white border-2 hover:bg-white/10 active:scale-95 transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              aria-label="Call Tarekion now"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-5 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.number}
                className="text-center md:text-left py-4 px-4 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="text-3xl md:text-4xl font-black leading-none mb-1"
                  style={{ color: '#F5C518' }}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                <div className="text-xs text-white/30 mt-0.5 font-medium" dir="rtl">{stat.labelAr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}
