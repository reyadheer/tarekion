import { Clock, Truck, HardHat, DollarSign, Wrench, ShieldCheck, Phone, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    titleAr: 'دعم على مدار الساعة',
    description: 'Our team is available around the clock for emergencies, breakdowns, and urgent equipment requests across all of Saudi Arabia.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    titleAr: 'توصيل سريع',
    description: 'We deliver equipment directly to your construction site anywhere in KSA — fast, reliable, and on schedule.',
  },
  {
    icon: HardHat,
    title: 'Experienced Operators',
    titleAr: 'مشغلون ذوو خبرة',
    description: 'All our operators are certified, experienced, and trained in safety procedures to keep your project running smoothly.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    titleAr: 'أسعار تنافسية',
    description: 'Transparent, affordable rental rates with no hidden fees. Daily, weekly, and monthly packages available.',
  },
  {
    icon: Wrench,
    title: 'Well-Maintained Fleet',
    titleAr: 'أسطول في حالة ممتازة',
    description: 'Every machine undergoes rigorous inspection and maintenance before each rental to ensure peak performance on site.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    titleAr: 'مرخص ومؤمن عليه',
    description: 'Fully licensed equipment rental with comprehensive insurance coverage for your peace of mind on every project.',
  },
  {
    icon: Phone,
    title: 'Dedicated Account Manager',
    titleAr: 'مدير حساب مخصص',
    description: 'A dedicated contact who knows your project needs and ensures the right equipment is available when you need it.',
  },
  {
    icon: Award,
    title: '15+ Years of Trust',
    titleAr: 'أكثر من 15 سنة من الثقة',
    description: 'Tarekion has been serving Saudi Arabia\'s construction industry for over 15 years with a proven track record.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0a0a0a' }}
      aria-label="Why Choose Tarekion"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Why Tarekion"
          title="Built for Construction Professionals"
          titleAr="مبني لمحترفي البناء"
          subtitle="We understand what contractors, factories, and government projects need — reliable equipment, experienced support, and zero downtime."
          center
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:border-yellow-400/40"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#F5C51820' }}
                >
                  <Icon size={22} style={{ color: '#F5C518' }} />
                </div>
                <h3 className="font-bold text-white text-base mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500 font-medium mb-3" dir="rtl">
                  {feature.titleAr}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
