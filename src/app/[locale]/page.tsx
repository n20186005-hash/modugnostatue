import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import InfoSection from '@/components/InfoSection';
import Gallery from '@/components/Gallery';
import BlogSection from '@/components/BlogSection';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Recommendations from '@/components/Recommendations';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <InfoSection />
        <Gallery />
        <BlogSection />
        <Recommendations />
        <Reviews />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
