import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getWhatsAppEquipmentLink } from '@/lib/utils';

const categories = [
  {
    name: 'JCB',
    nameAr: 'جي سي بي',
    description: 'Versatile backhoe loaders for excavation, loading, and site preparation.',
    descriptionAr: 'جهاز متعدد الاستخدامات للحفر والتحميل',
    image: '/images/equipment/jcb.svg',
    keyword: 'جي سي بي للإيجار',
  },
  {
    name: 'Bobcat',
    nameAr: 'بوبكات',
    description: 'Compact skid-steer loaders perfect for tight spaces and precision work.',
    descriptionAr: 'بوبكات للعمل في المساحات الضيقة',
    image: '/images/equipment/bobcat.svg',
    keyword: 'بوبكات للإيجار',
  },
  {
    name: 'Excavator',
    nameAr: 'حفار',
    description: 'Powerful hydraulic excavators for large-scale digging and earthmoving.',
    descriptionAr: 'حفار هيدروليكي للحفر وتحريك التربة',
    image: '/images/equipment/excavator.svg',
    keyword: 'حفار للإيجار',
  },
  {
    name: 'Bulldozer',
    nameAr: 'بلدوزر',
    description: 'Heavy-duty bulldozers for land clearing, grading, and rough terrain.',
    descriptionAr: 'بلدوزر للتسوية وتحريك الأراضي الوعرة',
    image: '/images/equipment/bulldozer.svg',
    keyword: 'بلدوزر للإيجار',
  },
  {
    name: 'Wheel Loader',
    nameAr: 'شيول',
    description: 'Efficient wheel loaders for material handling and bulk loading tasks.',
    descriptionAr: 'شيول لنقل المواد والتحميل',
    image: '/images/equipment/wheel-loader.svg',
    keyword: 'شيول للإيجار',
  },
  {
    name: 'Lowbed Trailer',
    nameAr: 'لوبيد',
    description: 'Heavy-duty trailers for safe transport of oversized equipment and loads.',
    descriptionAr: 'مقطورة لنقل المعدات الثقيلة',
    image: '/images/equipment/lowbed.svg',
    keyword: 'معدات للإيجار',
  },
];

export default function EquipmentCategories() {
  return (
    <section className="section-padding bg-gray-50" aria-label="Equipment Categories">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Equipment for Every Project"
            titleAr="معدات لكل مشروع"
            subtitle="From compact Bobcats to heavy excavators — we have the right machine for your construction project."
            className="mb-0"
          />
          <Link
            href="/equipment"
            className="flex items-center gap-2 text-sm font-bold whitespace-nowrap px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 transition-all"
          >
            View All Equipment
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-lift group"
              aria-label={`${cat.name} rental - ${cat.keyword}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100 h-52">
                <Image
                  src={cat.image}
                  alt={`${cat.name} for rent in Saudi Arabia - ${cat.keyword}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span
                    className="px-3 py-1 rounded-lg text-sm font-black text-black"
                    style={{ backgroundColor: '#F5C518' }}
                  >
                    {cat.name}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-black text-gray-900 text-lg mb-0.5">{cat.name}</h3>
                <p className="text-sm text-gray-400 font-medium mb-3" dir="rtl">{cat.nameAr}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-1">{cat.description}</p>
                <p className="text-xs text-gray-400 mb-5" dir="rtl">{cat.descriptionAr}</p>

                <a
                  href={getWhatsAppEquipmentLink(cat.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-black hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#F5C518' }}
                  aria-label={`Rent ${cat.name} via WhatsApp`}
                >
                  <MessageCircle size={16} />
                  Rent Now · استأجر الآن
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Arabic SEO keywords - visually hidden but semantic */}
        <div className="sr-only" aria-hidden="true">
          <p>تأجير معدات ثقيلة في السعودية - بوبكات للإيجار - جي سي بي للإيجار - حفار للإيجار - شيول للإيجار - بلدوزر للإيجار - معدات بناء</p>
        </div>
      </div>
    </section>
  );
}
