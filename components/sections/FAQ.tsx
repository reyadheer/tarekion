'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    q: 'What types of heavy equipment do you rent?',
    qAr: 'ما أنواع المعدات الثقيلة التي تؤجرونها؟',
    a: 'We rent JCB backhoe loaders, Bobcat skid-steer loaders, hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory compactors, and lowbed trailers. We service all types of construction, factory, and government projects across Saudi Arabia.',
    aAr: 'نؤجر جي سي بي، بوبكات، حفارات، بلدوزرات، شيول، ممهدات، مضغوطات، ولوبيد لجميع أنواع المشاريع في المملكة العربية السعودية.',
  },
  {
    q: 'What are your rental rates?',
    qAr: 'ما هي أسعار التأجير لديكم؟',
    a: 'Our rental rates vary depending on the equipment type, duration, and project requirements. We offer competitive daily, weekly, and monthly rates. Contact us via WhatsApp or phone for a custom quote — we respond within minutes.',
    aAr: 'تختلف أسعارنا حسب نوع المعدة والمدة ومتطلبات المشروع. تواصل معنا عبر الواتساب للحصول على عرض سعر.',
  },
  {
    q: 'Do you provide operators with the equipment?',
    qAr: 'هل توفرون مشغلين مع المعدات؟',
    a: 'Yes, we can provide certified, experienced operators for all our equipment. Our operators are trained in safety procedures and are familiar with Saudi construction site requirements. You can also rent equipment only if you have your own licensed operators.',
    aAr: 'نعم، نوفر مشغلين معتمدين وذوي خبرة لجميع معداتنا، مدربين على معايير السلامة في مواقع البناء السعودية.',
  },
  {
    q: 'How quickly can you deliver equipment to my site?',
    qAr: 'كم تستغرق عملية توصيل المعدات لموقعي؟',
    a: 'We aim to deliver within 24 hours for most locations in Saudi Arabia. For urgent requests in Riyadh and major cities, we can often deliver the same day. Contact us immediately and we\'ll arrange the fastest possible delivery.',
    aAr: 'نهدف للتوصيل خلال 24 ساعة لمعظم مواقع المملكة. للطلبات العاجلة في الرياض، نستطيع التوصيل في نفس اليوم في كثير من الأحيان.',
  },
  {
    q: 'Do you serve all regions of Saudi Arabia?',
    qAr: 'هل تخدمون جميع مناطق المملكة العربية السعودية؟',
    a: 'Yes, Tarekion serves all regions of Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, Tabuk, Abha, and all other cities. We coordinate logistics to reach any project location efficiently.',
    aAr: 'نعم، تخدم تركيون جميع مناطق المملكة: الرياض، جدة، الدمام، الخبر، مكة المكرمة، المدينة المنورة، وجميع المدن الأخرى.',
  },
  {
    q: 'Is the equipment insured?',
    qAr: 'هل المعدات مؤمن عليها؟',
    a: 'Yes, all our equipment is fully insured. We also offer additional comprehensive coverage options for your projects. Our team will explain the insurance details and coverage when you contact us for a rental.',
    aAr: 'نعم، جميع معداتنا مؤمن عليها بالكامل. نوفر أيضاً خيارات تغطية شاملة إضافية لمشاريعكم.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white" aria-label="Frequently Asked Questions">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            titleAr="الأسئلة الشائعة"
            subtitle="Get quick answers about our heavy equipment rental services in Saudi Arabia."
            center
          />

          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <div>
                    <span className="font-bold text-gray-900 text-sm md:text-base block" itemProp="name">
                      {faq.q}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5 block" dir="rtl">
                      {faq.qAr}
                    </span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all"
                    style={{
                      backgroundColor: openIndex === i ? '#F5C518' : '#f3f4f6',
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={16} className="text-black" />
                    ) : (
                      <Plus size={16} className="text-gray-600" />
                    )}
                  </div>
                </button>

                {openIndex === i && (
                  <div
                    className="px-5 pb-5 border-t border-gray-100"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-sm text-gray-600 leading-relaxed mt-4" itemProp="text">
                      {faq.a}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed mt-3" dir="rtl">
                      {faq.aAr}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Still have questions?{' '}
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
              style={{ color: '#D4A800' }}
            >
              Chat with us on WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
