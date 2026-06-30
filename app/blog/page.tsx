import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import blogData from '@/data/blog.json';
import ContactCTA from '@/components/sections/ContactCTA';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog — Heavy Equipment Rental Tips & Guides for Saudi Arabia',
  description:
    'Expert tips, pricing guides, and how-to articles for heavy equipment rental in Saudi Arabia. JCB, Bobcat, Excavator guides for contractors and project managers.',
  alternates: { canonical: 'https://www.tarekion.com/blog' },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div className="container-custom">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
            >
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Equipment Rental Blog
            </h1>
            <p className="text-xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }} dir="rtl">
              مدونة تأجير المعدات
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Expert guides, pricing insights, and practical advice for construction
              equipment rental in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Featured post */}
          {blogData[0] && (
            <Link href={`/blog/${blogData[0].slug}`} className="block mb-10 group">
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto bg-gray-100">
                  <Image
                    src={blogData[0].image}
                    alt={blogData[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold text-black"
                    style={{ backgroundColor: '#F5C518' }}
                  >
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-3">
                    {blogData[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-3 group-hover:text-yellow-600 transition-colors">
                    {blogData[0].title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4 font-medium" dir="rtl">
                    {blogData[0].titleAr}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {blogData[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {formatDate(blogData[0].date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {blogData[0].readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-5 text-sm font-bold" style={{ color: '#D4A800' }}>
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Other posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full card-lift">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-black"
                        style={{ backgroundColor: '#F5C518' }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-black text-gray-900 text-lg leading-snug mb-1 group-hover:text-yellow-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-400 mb-3 font-medium" dir="rtl">{post.titleAr}</p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-xs font-bold flex items-center gap-1" style={{ color: '#D4A800' }}>
                        Read <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Browse by Topic
            </h2>
            <div className="flex flex-wrap gap-2">
              {['JCB Rental', 'Bobcat', 'Excavator', 'Bulldozer', 'Pricing', 'Saudi Arabia', 'Tips', 'Construction'].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:border-yellow-400 hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
