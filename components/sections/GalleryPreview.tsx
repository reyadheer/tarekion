import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const galleryImages = [
  { src: '/images/gallery/construction-1.svg', alt: 'JCB working on construction site in Saudi Arabia', span: 'large' },
  { src: '/images/gallery/construction-2.svg', alt: 'Excavator digging foundation in Riyadh', span: 'small' },
  { src: '/images/gallery/construction-3.svg', alt: 'Bobcat loader on project site', span: 'small' },
  { src: '/images/gallery/construction-4.svg', alt: 'Heavy equipment fleet ready for rental', span: 'medium' },
  { src: '/images/gallery/construction-5.svg', alt: 'Bulldozer clearing land in Saudi Arabia', span: 'medium' },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white" aria-label="Project Gallery Preview">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionHeader
            eyebrow="Our Work"
            title="Real Projects, Real Results"
            titleAr="مشاريع حقيقية ونتائج ملموسة"
            className="mb-0"
          />
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-sm font-bold whitespace-nowrap px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 transition-all"
          >
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large image */}
          <div className="col-span-2 md:col-span-1 row-span-2 relative rounded-2xl overflow-hidden bg-gray-100 h-64 md:h-full min-h-[280px]">
            <Image
              src="/images/gallery/construction-1.svg"
              alt="JCB working on large construction project in Saudi Arabia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Featured</span>
              <p className="text-sm font-bold mt-0.5">Government Infrastructure Project</p>
            </div>
          </div>

          {/* Smaller images */}
          {[
            { src: '/images/gallery/construction-2.svg', alt: 'Excavator on site in Riyadh' },
            { src: '/images/gallery/construction-3.svg', alt: 'Bobcat loader compact operations' },
            { src: '/images/gallery/construction-4.svg', alt: 'Fleet of heavy equipment' },
            { src: '/images/gallery/construction-5.svg', alt: 'Construction site aerial view' },
          ].map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-100 h-36 md:h-44">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
