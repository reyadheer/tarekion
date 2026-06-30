import { MessageCircle, Phone, Mail } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER, EMAIL } from '@/lib/utils';

export default function ContactCTA() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a00 100%)' }}
      aria-label="Contact Tarekion"
    >
      {/* Yellow glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#F5C518' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">
        {/* Badge */}
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
          style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
        >
          Get a Free Quote Today
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl font-bold mb-2" style={{ color: '#F5C518' }}>
          هل أنت مستعد لبدء مشروعك؟
        </p>
        <p className="text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Contact us now and get the right heavy equipment delivered to your site.
          We respond within minutes — 24/7 across all of Saudi Arabia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-black text-base hover:opacity-90 active:scale-95 transition-all shadow-2xl"
            style={{ backgroundColor: '#F5C518' }}
            aria-label="WhatsApp Tarekion now"
          >
            <MessageCircle size={22} />
            WhatsApp Us Now
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-white text-base border-2 hover:bg-white/10 active:scale-95 transition-all"
            style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            aria-label="Call Tarekion"
          >
            <Phone size={22} />
            Call Now
          </a>
        </div>

        {/* Contact info strip */}
        <div
          className="inline-flex flex-wrap justify-center gap-6 px-8 py-4 rounded-2xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Phone size={15} className="text-yellow-400" />
            {PHONE_NUMBER}
          </a>
          <span className="text-white/20 hidden md:block">|</span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Mail size={15} className="text-yellow-400" />
            {EMAIL}
          </a>
          <span className="text-white/20 hidden md:block">|</span>
          <span className="flex items-center gap-2 text-sm text-white/70">
            <MessageCircle size={15} className="text-green-400" />
            WhatsApp: 24/7
          </span>
        </div>

        {/* Arabic text */}
        <p className="text-white/40 text-sm mt-6 font-medium" dir="rtl">
          تواصل معنا للحصول على عرض أسعار مجاني · نرد خلال دقائق
        </p>
      </div>
    </section>
  );
}
