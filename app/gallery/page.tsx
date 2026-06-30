import { Metadata } from 'next';
import Image from 'next/image';
import { Play } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Project Gallery — Construction Sites & Equipment Photos',
  description:
    'Browse Tarekion\'s project gallery featuring real construction sites, heavy equipment in action, and completed projects across Saudi Arabia. تأجير معدات ثقيلة.',
  alternates: { canonical: 'https://www.tarekion.com/gallery' },
};

const galleryItems = [
  { type: 'image', src: '/images/gallery/construction-1.svg', alt: 'JCB excavating foundation for residential project in Riyadh', label: 'Riyadh Residential' },
  { type: 'image', src: '/images/gallery/construction-2.svg', alt: 'Bobcat loader working in tight space on factory site', label: 'Factory Expansion' },
  { type: 'video', src: '/images/gallery/construction-3.svg', alt: 'Excavator on government infrastructure project', label: 'Infrastructure Project' },
  { type: 'image', src: '/images/gallery/construction-4.svg', alt: 'Bulldozer clearing large land area in Saudi Arabia', label: 'Land Clearing' },
  { type: 'image', src: '/images/gallery/construction-5.svg', alt: 'Wheel loader moving materials on construction site', label: 'Material Handling' },
  { type: 'image', src: '/images/gallery/construction-6.svg', alt: 'Lowbed trailer transporting heavy excavator', label: 'Equipment Transport' },
  { type: 'image', src: '/images/equipment/excavator.svg', alt: 'CAT excavator on large-scale earthmoving project', label: 'Earthmoving Project' },
  { type: 'image', src: '/images/equipment/bulldozer.svg', alt: 'Bulldozer grading terrain for new development', label: 'Grading Work' },
  { type: 'video', src: '/images/equipment/jcb.svg', alt: 'JCB backhoe loader at work on construction site', label: 'JCB in Action' },
  { type: 'image', src: '/images/equipment/bobcat.svg', alt: 'Bobcat skid steer in demolition project', label: 'Demolition Work' },
  { type: 'image', src: '/images/equipment/wheel-loader.svg', alt: 'Wheel loader filling truck with aggregate material', label: 'Aggregate Loading' },
  { type: 'image', src: '/images/equipment/lowbed.svg', alt: 'Lowbed trailer ready for equipment transport across KSA', label: 'Lowbed Transport' },
];

export default function GalleryPage() {
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
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Project Gallery
            </h1>
            <p className="text-xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }} dir="rtl">
              معرض المشاريع والصور
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Real construction projects powered by Tarekion equipment across Saudi Arabia —
              from residential builds to major government infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-gray-50" aria-label="Photo gallery">
        <div className="container-custom">
          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '15+', label: 'Years in KSA' },
              { num: '50+', label: 'Equipment Units' },
            ].map((s) => (
              <div
                key={s.num}
                className="text-center py-5 rounded-2xl"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <div className="text-2xl md:text-3xl font-black" style={{ color: '#F5C518' }}>
                  {s.num}
                </div>
                <div className="text-xs text-white/60 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="masonry-grid">
            {galleryItems.map((item, i) => (
              <div key={i} className="masonry-item group relative rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={i % 3 === 0 ? 500 : 350}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all"
                    >
                      <Play size={20} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-white/90">{item.label}</span>
                </div>

                {item.type === 'video' && (
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold text-black"
                      style={{ backgroundColor: '#F5C518' }}
                    >
                      VIDEO
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-gray-600 text-sm mb-5">
              Want your project featured here? Work with Tarekion and experience the difference.
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base hover:opacity-90 transition-all"
              style={{ backgroundColor: '#F5C518' }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
