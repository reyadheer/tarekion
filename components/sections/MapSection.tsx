import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/utils';

export default function MapSection() {
  return (
    <section className="section-padding bg-white" aria-label="Location and Map">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#D4A800' }}
            >
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
              Serving All of{' '}
              <span style={{ color: '#D4A800' }}>Saudi Arabia</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Based in Riyadh with operations across KSA — we deliver heavy equipment to construction
              sites in all major cities and remote project locations.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#F5C51815' }}
                >
                  <MapPin size={20} style={{ color: '#D4A800' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Headquarters</p>
                  <p className="text-sm text-gray-600 mt-0.5">Riyadh, Saudi Arabia</p>
                  <p className="text-xs text-gray-400 mt-0.5" dir="rtl">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#F5C51815' }}
                >
                  <Phone size={20} style={{ color: '#D4A800' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Phone</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-sm text-gray-600 hover:text-yellow-600 transition-colors mt-0.5 block"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#F5C51815' }}
                >
                  <Clock size={20} style={{ color: '#D4A800' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Business Hours</p>
                  <p className="text-sm text-gray-600 mt-0.5">Sun – Thu: 7:00 AM – 6:00 PM</p>
                  <p className="text-sm text-gray-600">Fri – Sat: By appointment</p>
                  <p className="text-xs font-semibold text-green-600 mt-1">
                    24/7 Emergency Line Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#F5C51815' }}
                >
                  <Navigation size={20} style={{ color: '#D4A800' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Service Coverage</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Riyadh · Jeddah · Dammam · Khobar · Mecca · Medina · Tabuk · All KSA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[420px] bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRiyadh%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tarekion Establishment location in Riyadh, Saudi Arabia"
              aria-label="Map showing Tarekion location in Riyadh"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: '#F5C518' }}
              />
              <span className="text-xs font-bold text-gray-900">Tarekion · Riyadh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
