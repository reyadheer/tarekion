import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, MessageCircle, Tag } from 'lucide-react';
import blogData from '@/data/blog.json';
import ContactCTA from '@/components/sections/ContactCTA';
import { formatDate, getWhatsAppLink } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.tarekion.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const blogContent: Record<string, string[]> = {
  'jcb-rental-guide-saudi-arabia': [
    'A JCB backhoe loader is one of the most versatile pieces of heavy equipment you can rent for a construction project in Saudi Arabia. Whether you are digging foundations, loading materials, or grading a site, a JCB can handle it all.',
    'In Saudi Arabia, JCB 3CX and 4CX models are the most popular. The 3CX is ideal for medium-scale work — residential buildings, utility installation, and landscaping. The 4CX offers more power for larger commercial and government projects.',
    'When renting a JCB in Saudi Arabia, you have two main options: rent with an operator (recommended for most projects) or rent only the machine if you have a certified operator on your team. At Tarekion, we provide both options with transparent pricing.',
    'Key factors that affect JCB rental cost in Saudi Arabia include the model and size, rental duration (daily, weekly, or monthly rates), whether an operator is included, delivery distance from Riyadh or other hubs, and project type and site conditions.',
    'For most small to medium projects, the daily rental rate for a JCB 3CX in Saudi Arabia ranges from SAR 1,200 to SAR 2,000 per day with an operator. Monthly rates offer significant savings for longer projects.',
    'Before renting, always inspect the machine, confirm insurance coverage, review the operator\'s certification, and clarify who is responsible for fuel. At Tarekion, we handle all of this transparently — no hidden costs.',
    'To get the best JCB rental deal in Saudi Arabia: contact at least 2-3 suppliers, negotiate weekly or monthly rates, book in advance for peak construction seasons (spring and fall), and choose a company with 24/7 support like Tarekion.',
  ],
  'bobcat-rental-price-saudi-arabia': [
    'The Bobcat skid-steer loader is one of the most in-demand compact equipment pieces in Saudi Arabia, especially for landscaping, demolition, factory floor work, and tight construction sites where a full-size excavator cannot operate.',
    'Bobcat rental prices in Saudi Arabia vary based on the model, rental duration, and whether an operator is included. Here is what you can expect in the current market.',
    'For daily rates, a standard Bobcat S450 or S510 typically rents for SAR 800–1,200 per day without an operator. The more powerful S650 or S770 ranges from SAR 1,000–1,600 per day. With an experienced operator, add SAR 400–600 per day.',
    'Weekly and monthly rates offer considerably better value. A weekly Bobcat rental with operator can range from SAR 5,000–8,000 depending on the model. Monthly contracts can bring the effective daily cost down by 30–40%.',
    'Factors that affect the final Bobcat rental price include: site location (delivery distance), attachment requirements such as auger or sweeper, working hours per day, and any overtime rates for emergency or weekend work.',
    'At Tarekion, we offer the most competitive Bobcat rental prices in Saudi Arabia with no hidden fees. Our machines are fully maintained, and our operators are certified with experience in all types of terrain and project conditions.',
    'To calculate the right budget for your Bobcat rental, estimate your total working days, add 10% buffer for unexpected needs, factor in delivery cost, and contact Tarekion for a detailed quote tailored to your project.',
  ],
  'heavy-equipment-rental-tips-contractors': [
    'Renting heavy equipment is a significant investment for any construction project. Making the right decisions can save you thousands of riyals and prevent costly delays. Here are the most important tips every contractor in Saudi Arabia should know.',
    'Tip 1: Plan your equipment needs before you call. Know the specific task, site dimensions, soil type, and duration. The more specific you are, the better the rental company can match you with the right machine and avoid over- or under-specifying.',
    'Tip 2: Always inspect the equipment before signing the rental agreement. Check hydraulic lines, tires or tracks, operator cabin, and any attachments. Document existing damage with photos and make sure it is noted on the contract.',
    'Tip 3: Verify operator certification and experience. If you are renting with an operator, ask for their documentation. At Tarekion, all our operators are certified and have project-specific experience in Saudi conditions.',
    'Tip 4: Understand what is and is not covered by insurance. Most reputable rental companies cover the machine against mechanical failure, but you may be responsible for operator error or site damage. Clarify this upfront.',
    'Tip 5: Negotiate for weekly or monthly rates. If your project is longer than 4 days, a weekly rate almost always works out cheaper than daily billing. Monthly rates offer the best value for extended projects.',
    'Tip 6: Choose a supplier with 24/7 support. Equipment breakdowns do not wait for business hours. A rental company without after-hours support can cost you an entire lost workday. Tarekion offers round-the-clock emergency response.',
    'Tip 7: Confirm delivery logistics. Make sure the rental company can access your site, knows the correct contact person on arrival, and has a clear timeline. A missed delivery window can cascade into project delays.',
    'Tip 8: Read the fuel policy. Most equipment in Saudi Arabia is rented empty-to-empty or full-to-full. Know your obligations before the machine arrives to avoid surprise charges at return.',
    'Following these tips will help you get more value from every equipment rental, avoid disputes, and keep your construction project on time and on budget. At Tarekion, we are here to make the process simple and transparent.',
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = blogContent[slug] || [post.content];
  const related = blogData.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Tarekion Establishment' },
    publisher: {
      '@type': 'Organization',
      name: 'Tarekion Establishment',
      url: 'https://www.tarekion.com',
    },
    image: `https://www.tarekion.com${post.image}`,
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-10 relative"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      >
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5C51820', color: '#F5C518' }}
            >
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-base font-bold mb-5" style={{ color: 'rgba(255,255,255,0.4)' }} dir="rtl">
              {post.titleAr}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Featured image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 h-72 md:h-96 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Article body */}
            <div className="prose max-w-none">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-base mb-5">
                  {para}
                </p>
              ))}
            </div>

            {/* Arabic summary */}
            <div
              className="mt-8 p-6 rounded-2xl"
              style={{ backgroundColor: '#F5C51810', border: '1px solid #F5C51830' }}
              dir="rtl"
            >
              <h3 className="font-bold text-gray-900 mb-2 text-sm">ملخص بالعربي</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{post.excerptAr}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-600"
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-10 p-7 rounded-2xl text-center"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <h3 className="text-white font-black text-xl mb-2">
                Ready to Rent Heavy Equipment?
              </h3>
              <p className="text-white/60 text-sm mb-5">
                Contact Tarekion now for fast availability, pricing, and same-day delivery options across Saudi Arabia.
              </p>
              <a
                href={getWhatsAppLink(`Hello Tarekion! I read your article "${post.title}" and want to inquire about equipment rental.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black text-sm"
                style={{ backgroundColor: '#F5C518' }}
              >
                <MessageCircle size={18} />
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-black text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-lift">
                    <div className="relative h-40 bg-gray-100">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-bold text-yellow-600">{rp.category}</span>
                      <h3 className="font-bold text-gray-900 text-sm mt-1 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
