import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    name: 'Mohammed Al-Rashidi',
    nameAr: 'محمد الرشيدي',
    company: 'Al-Rashidi Construction Co.',
    companyAr: 'شركة الرشيدي للمقاولات',
    rating: 5,
    review:
      "Tarekion delivered the JCB to our Riyadh site within hours of our request. The operator was professional, the machine was in perfect condition, and their pricing was the best we found. We now use them for all our equipment needs.",
    reviewAr: 'تركيون وفّر الجي سي بي في موقعنا بالرياض خلال ساعات. المشغل كان محترفاً والمعدة في حالة ممتازة.',
    date: 'February 2024',
  },
  {
    name: 'Abdullah Al-Ghamdi',
    nameAr: 'عبدالله الغامدي',
    company: 'Saudi Infrastructure Projects',
    companyAr: 'مشاريع البنية التحتية السعودية',
    rating: 5,
    review:
      "We rented three Bobcats and two excavators for a large government project in Dammam. Tarekion handled the logistics perfectly — on-time delivery, well-maintained equipment, and excellent 24/7 support.",
    reviewAr: 'استأجرنا ثلاثة بوبكات وحفارين لمشروع حكومي كبير. تركيون تعاملت مع اللوجستيات بشكل مثالي.',
    date: 'March 2024',
  },
  {
    name: 'Faisal Al-Otaibi',
    nameAr: 'فيصل العتيبي',
    company: 'Vision Construction Group',
    companyAr: 'مجموعة رؤية للإنشاءات',
    rating: 5,
    review:
      "The bulldozer was exactly what we needed for our land clearing project. The operator knew the terrain, finished ahead of schedule, and the overall experience with Tarekion was outstanding. Highly recommended.",
    reviewAr: 'البلدوزر كان مثالياً لمشروع تسوية الأراضي. المشغل أنهى العمل قبل الموعد المحدد.',
    date: 'January 2024',
  },
  {
    name: 'Omar Al-Zahrani',
    nameAr: 'عمر الزهراني',
    company: 'Jeddah Factory Development',
    companyAr: 'تطوير مصانع جدة',
    rating: 5,
    review:
      "We needed a wheel loader urgently for our factory expansion in Jeddah. Tarekion responded within 30 minutes and had the equipment on site the same day. That kind of service is rare in this industry.",
    reviewAr: 'احتجنا شيولاً بشكل عاجل. تركيون استجاب خلال 30 دقيقة وأحضر المعدة في نفس اليوم.',
    date: 'April 2024',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50" aria-label="Customer Testimonials">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Client Reviews"
          title="Trusted by Saudi Contractors"
          titleAr="يثق بنا المقاولون السعوديون"
          subtitle="Hundreds of construction companies, factories, and government projects across Saudi Arabia rely on Tarekion for their equipment needs."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div
                className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center opacity-20"
                style={{ backgroundColor: '#F5C518' }}
              >
                <Quote size={18} className="text-black" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#F5C518" stroke="none" />
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-3">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed" dir="rtl">
                &ldquo;{t.reviewAr}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 font-medium" dir="rtl">{t.nameAr}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">{t.date}</span>
                    <div
                      className="text-xs font-bold mt-1"
                      style={{ color: '#D4A800' }}
                    >
                      Verified Client
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F5C518" stroke="none" />
              ))}
            </div>
            <div className="text-left">
              <span className="font-black text-gray-900 text-lg">4.9</span>
              <span className="text-gray-500 text-sm ml-1">/ 5.0 · 150+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
