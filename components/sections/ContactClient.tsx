'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER, EMAIL } from '@/lib/utils';

const equipmentOptions = [
  'JCB Backhoe Loader', 'Bobcat Skid Steer', 'Excavator', 'Bulldozer',
  'Wheel Loader', 'Motor Grader', 'Vibratory Compactor', 'Lowbed Trailer', 'Other',
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    equipment: '',
    duration: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = `Hello Tarekion! 👋

*New Rental Inquiry*

*Name:* ${form.name}
*Phone:* ${form.phone}
*Company:* ${form.company || 'Not specified'}
*Equipment Needed:* ${form.equipment}
*Rental Duration:* ${form.duration || 'Not specified'}
*Project Location:* ${form.location || 'Not specified'}
*Additional Details:* ${form.message || 'None'}

Please provide availability and pricing.`;

    window.open(getWhatsAppLink(msg), '_blank');
  };

  const isValid = form.name && form.phone && form.equipment;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-xl font-black text-gray-900 mb-1">Get in Touch</h2>
          <p className="text-sm text-gray-500">
            We respond to all WhatsApp messages within minutes.
          </p>
        </div>

        {/* Primary — WhatsApp */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl text-white transition-all hover:opacity-90 group"
          style={{ backgroundColor: '#25D366' }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div>
            <p className="font-black text-base">WhatsApp (Recommended)</p>
            <p className="text-white/80 text-sm">Fastest response — available 24/7</p>
            <p className="text-white/60 text-xs mt-0.5" dir="rtl">الأسرع — متاح على مدار الساعة</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 text-gray-800 hover:border-yellow-400 transition-all group"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
            style={{ backgroundColor: '#F5C51815' }}
          >
            <Phone size={22} style={{ color: '#D4A800' }} />
          </div>
          <div>
            <p className="font-black text-base">{PHONE_NUMBER}</p>
            <p className="text-gray-500 text-sm">Call us directly</p>
            <p className="text-gray-400 text-xs mt-0.5">Sun–Thu: 7am–6pm</p>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 text-gray-800 hover:border-yellow-400 transition-all group"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
            style={{ backgroundColor: '#F5C51815' }}
          >
            <Mail size={22} style={{ color: '#D4A800' }} />
          </div>
          <div>
            <p className="font-black text-base">{EMAIL}</p>
            <p className="text-gray-500 text-sm">Email response within 24 hours</p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#F5C51815' }}
          >
            <MapPin size={22} style={{ color: '#D4A800' }} />
          </div>
          <div>
            <p className="font-bold text-gray-900">Location</p>
            <p className="text-sm text-gray-600 mt-0.5">Riyadh, Saudi Arabia</p>
            <p className="text-xs text-gray-400 mt-0.5" dir="rtl">الرياض، المملكة العربية السعودية</p>
            <p className="text-xs text-gray-500 mt-1">
              Delivery across all KSA regions
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#F5C51815' }}
          >
            <Clock size={22} style={{ color: '#D4A800' }} />
          </div>
          <div>
            <p className="font-bold text-gray-900">Business Hours</p>
            <div className="text-sm text-gray-600 mt-1 space-y-0.5">
              <p>Sun – Thu: 7:00 AM – 6:00 PM</p>
              <p>Fri – Sat: By appointment</p>
              <p className="text-green-600 font-semibold">WhatsApp: 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <h2 className="text-xl font-black text-gray-900 mb-1">Request a Quote</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill in the details below and we&apos;ll open WhatsApp with your inquiry pre-filled.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="name">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Mohammed Al-Ahmad"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="phone">
                  Phone / WhatsApp *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+966 5X XXX XXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="company">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company or project name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="equipment">
                Equipment Needed *
              </label>
              <select
                id="equipment"
                name="equipment"
                value={form.equipment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors bg-white"
                required
              >
                <option value="">Select equipment type...</option>
                {equipmentOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="duration">
                  Rental Duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors bg-white"
                >
                  <option value="">Select duration...</option>
                  <option>1 day</option>
                  <option>2–3 days</option>
                  <option>1 week</option>
                  <option>2–4 weeks</option>
                  <option>1–3 months</option>
                  <option>Longer term</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="location">
                  Site Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City / Area"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="message">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your project, specific requirements, or any questions..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-black text-base transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#F5C518' }}
              aria-label="Send inquiry via WhatsApp"
            >
              <Send size={18} />
              Send via WhatsApp
            </button>

            <p className="text-xs text-gray-400 text-center">
              This will open WhatsApp with your inquiry pre-filled. No data is stored on our servers.
            </p>
            <p className="text-xs text-gray-400 text-center" dir="rtl">
              سيتم فتح واتساب مع رسالة جاهزة. لا يتم تخزين أي بيانات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
