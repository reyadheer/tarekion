import { Metadata } from 'next';
import { Shield, Target, Eye, Award, Users, Truck } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'About Tarekion — Heavy Equipment Rental Company in Saudi Arabia',
  description:
    'Tarekion Establishment is a trusted heavy equipment rental company with 15+ years serving construction companies, contractors, and government projects across Saudi Arabia.',
  alternates: { canonical: 'https://www.tarekion.com/about' },
};

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    titleAr: 'السلامة أولاً',
    description: 'Every machine is inspected, maintained, and certified before deployment. Our operators follow strict safety protocols on every site.',
  },
  {
    icon: Award,
    title: 'Quality Equipment',
    titleAr: 'معدات عالية الجودة',
    description: 'We maintain a fleet of leading brands — CAT, JCB, Bobcat — kept in peak condition through rigorous maintenance programs.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    titleAr: 'فريق متخصص',
    description: 'Our operators and support team bring decades of combined experience in construction equipment across Saudi Arabia.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    titleAr: 'توصيل موثوق',
    description: 'We respect your schedule. Equipment arrives on time, every time, so your project stays on track.',
  },
];

const milestones = [
  { year: '2008', event: 'Tarekion Establishment founded in Riyadh with a fleet of 5 machines.' },
  { year: '2012', event: 'Expanded operations to Jeddah and Eastern Province.' },
  { year: '2016', event: 'Fleet grew to 30+ units; secured first major government contracts.' },
  { year: '2020', event: 'Achieved ISO safety certification; launched 24/7 support service.' },
  { year: '2024', event: 'Over 50 equipment units, 500+ completed projects, all regions of KSA.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
            >
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              About Tarekion
            </h1>
            <p className="text-xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }} dir="rtl">
              عن مؤسسة تركيون
            </p>
            <p className="text-base text-white/60 leading-relaxed max-w-2xl">
              For over 15 years, Tarekion Establishment has been the trusted partner for
              construction companies, contractors, factories, and government projects
              across the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Saudi Arabia's Trusted Equipment Partner"
                titleAr="شريكك الموثوق في المعدات بالسعودية"
              />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Tarekion Establishment was founded with a single mission: to give Saudi Arabia&apos;s
                  construction industry access to premium, reliable heavy equipment without the
                  burden of ownership.
                </p>
                <p>
                  From our headquarters in Riyadh, we serve construction companies, civil
                  contractors, factories, and government project managers with a modern fleet
                  that includes JCB backhoe loaders, Bobcat skid steers, CAT excavators,
                  bulldozers, wheel loaders, motor graders, and heavy transport trailers.
                </p>
                <p>
                  What sets Tarekion apart is not just our machines — it&apos;s our people. Every
                  operator is certified and trained, every support call is answered, and every
                  delivery is on time. We understand that in construction, downtime costs money.
                  That&apos;s why we treat every rental as if it were our own project on the line.
                </p>
                <p className="font-medium text-gray-700" dir="rtl">
                  تأسست مؤسسة تركيون برؤية واضحة: تزويد قطاع البناء في المملكة بمعدات ثقيلة
                  موثوقة وعالية الجودة بأسعار تنافسية وخدمة لا تُضاهى.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { n: '15+', l: 'Years Experience' },
                  { n: '500+', l: 'Projects Done' },
                  { n: '50+', l: 'Equipment Units' },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="text-center p-4 rounded-2xl"
                    style={{ backgroundColor: '#F5C51810', border: '1px solid #F5C51825' }}
                  >
                    <div className="text-2xl font-black" style={{ color: '#D4A800' }}>{s.n}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-6">Our Journey</h2>
              <div className="relative">
                <div
                  className="absolute left-5 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: '#F5C51830' }}
                />
                <div className="space-y-6">
                  {milestones.map((m) => (
                    <div key={m.year} className="flex gap-5 relative">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative z-10 text-xs font-black text-black"
                        style={{ backgroundColor: '#F5C518' }}
                      >
                        {m.year.slice(2)}
                      </div>
                      <div className="pt-1.5 pb-4">
                        <span className="text-xs font-bold text-yellow-600">{m.year}</span>
                        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-3xl"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#F5C51820' }}
              >
                <Target size={24} style={{ color: '#F5C518' }} />
              </div>
              <h2 className="text-2xl font-black text-white mb-3">Our Mission</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                To be the most reliable, responsive, and trusted heavy equipment rental
                company in Saudi Arabia — delivering the right machine to the right place
                at the right time, every time.
              </p>
              <p className="text-white/40 text-sm leading-relaxed" dir="rtl">
                أن نكون أكثر شركة موثوقة وسريعة الاستجابة لتأجير المعدات الثقيلة
                في المملكة العربية السعودية.
              </p>
            </div>

            <div
              className="p-8 rounded-3xl"
              style={{ backgroundColor: '#F5C518' }}
            >
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-black" />
              </div>
              <h2 className="text-2xl font-black text-black mb-3">Our Vision</h2>
              <p className="text-black/70 text-sm leading-relaxed mb-4">
                To power Saudi Arabia&apos;s construction boom — from Vision 2030 mega-projects
                to small contractors — with world-class equipment, unmatched service,
                and a commitment to safety that never wavers.
              </p>
              <p className="text-black/50 text-sm leading-relaxed" dir="rtl">
                دعم طفرة البناء في المملكة ومشاريع رؤية 2030 بمعدات عالمية
                المستوى وخدمة لا مثيل لها.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#F5C51815' }}
                  >
                    <Icon size={20} style={{ color: '#D4A800' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-0.5">{v.title}</h3>
                  <p className="text-xs text-gray-400 mb-3 font-medium" dir="rtl">{v.titleAr}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
