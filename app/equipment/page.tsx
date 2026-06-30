import { Metadata } from 'next';
import EquipmentCard from '@/components/ui/EquipmentCard';
import equipmentData from '@/data/equipment.json';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Heavy Equipment for Rent — JCB, Bobcat, Excavator, Bulldozer',
  description:
    'Browse our full fleet of heavy equipment for rent in Saudi Arabia. JCB backhoe loaders, Bobcat skid steers, excavators, bulldozers, wheel loaders, and lowbed trailers. تأجير معدات ثقيلة.',
  alternates: { canonical: 'https://www.tarekion.com/equipment' },
  openGraph: {
    title: 'Equipment Fleet | Tarekion Heavy Equipment Rental Saudi Arabia',
    description: 'Full fleet of heavy equipment for rent in Saudi Arabia — JCB, Bobcat, Excavator, Bulldozer, Wheel Loader.',
  },
};

const categories = ['All', 'JCB', 'Bobcat', 'Excavator', 'Bulldozer', 'Wheel Loader', 'Lowbed Trailer', 'Grader', 'Compactor'];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
            >
              Our Fleet
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Heavy Equipment{' '}
              <span style={{ color: '#F5C518' }}>for Rent</span>
            </h1>
            <p className="text-xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }} dir="rtl">
              معدات ثقيلة للإيجار في المملكة العربية السعودية
            </p>
            <p className="text-base text-white/60 leading-relaxed max-w-2xl">
              Browse our complete fleet of well-maintained heavy equipment. Each machine comes
              with the option of experienced operators and nationwide delivery across KSA.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="section-padding bg-gray-50" aria-label="Equipment listing">
        <div className="container-custom">
          {/* Filter bar (static for SSR/SEO, could be enhanced with client JS) */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Equipment categories">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className="px-4 py-2 rounded-xl text-sm font-bold border-2 cursor-pointer transition-all"
                style={cat === 'All'
                  ? { backgroundColor: '#F5C518', borderColor: '#F5C518', color: '#0a0a0a' }
                  : { backgroundColor: 'white', borderColor: '#e5e7eb', color: '#374151' }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {equipmentData.map((equipment) => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>

          {/* Empty state note */}
          <div
            className="mt-12 p-6 rounded-2xl text-center"
            style={{ backgroundColor: '#F5C51810', border: '1px solid #F5C51830' }}
          >
            <p className="font-bold text-gray-900 mb-1">
              Don&apos;t see the equipment you need?
            </p>
            <p className="text-sm text-gray-600 mb-4">
              We have a larger fleet and can source specialized equipment. Contact us with your requirements.
            </p>
            <p className="text-sm font-medium text-gray-500 mb-4" dir="rtl">
              هل تحتاج معدة غير موجودة في القائمة؟ تواصل معنا وسنوفرها لك.
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-black"
              style={{ backgroundColor: '#F5C518' }}
            >
              Ask About Custom Equipment
            </a>
          </div>

          {/* SEO keywords block */}
          <div className="sr-only">
            <p>
              تأجير معدات ثقيلة في السعودية — بوبكات للإيجار — جي سي بي للإيجار —
              حفار للإيجار — شيول للإيجار — بلدوزر للإيجار — معدات بناء —
              تأجير رافعات — مقطورة لوبيد للإيجار
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
