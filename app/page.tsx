import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import EquipmentCategories from '@/components/sections/EquipmentCategories';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import MapSection from '@/components/sections/MapSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Tarekion | Heavy Equipment Rental in Saudi Arabia — JCB, Bobcat, Excavator',
  description:
    'Tarekion Establishment — #1 heavy equipment rental in Saudi Arabia. JCB, Bobcat, Excavator, Bulldozer, Wheel Loader. Fast delivery, experienced operators, 24/7 support. تأجير معدات ثقيلة.',
  alternates: { canonical: 'https://www.tarekion.com' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EquipmentCategories />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <MapSection />
      <ContactCTA />
    </>
  );
}
