import { Metadata } from 'next';
import ContactClient from '@/components/sections/ContactClient';
import MapSection from '@/components/sections/MapSection';

export const metadata: Metadata = {
  title: 'Contact Tarekion — Heavy Equipment Rental Inquiry Saudi Arabia',
  description:
    'Contact Tarekion for heavy equipment rental inquiries in Saudi Arabia. WhatsApp, phone, or email. Fast response, 24/7 support. تواصل معنا لتأجير المعدات الثقيلة.',
  alternates: { canonical: 'https://www.tarekion.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div className="container-custom">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
            >
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Contact Us
            </h1>
            <p className="text-xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }} dir="rtl">
              تواصل معنا
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Ready to rent heavy equipment? Send us a message on WhatsApp for the fastest
              response — or call us directly. We serve all regions of Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ContactClient />
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </>
  );
}
