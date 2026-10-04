import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const url = 'https://www.modugnostatue.com/en/things-to-do-in-polignano-a-mare';

  return {
    title: 'Things to Do in Polignano a Mare | Travel Guide 2026',
    description:
      'Best things to do in Polignano a Mare, Italy: Domenico Modugno Statue, Lama Monachile, old town, viewpoints, boat tours and an easy one-day itinerary.',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Things to Do in Polignano a Mare | Travel Guide 2026',
      description:
        'A practical guide to what to see in Polignano a Mare, built around the Domenico Modugno Statue, sea views, old town walks and coastal highlights.',
      url,
      siteName: 'Modugno Statue',
      locale: 'en',
      type: 'article',
    },
  };
}

export default async function ThingsToDoPolignanoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  setRequestLocale(locale);

  const highlights = [
    {
      title: 'Domenico Modugno Statue',
      text: 'The landmark stop on the waterfront and the best starting point for a first visit. It is free to visit and ties together the sea promenade, viewpoints and the story of Volare.',
    },
    {
      title: 'Lama Monachile',
      text: 'The most iconic cove in town, framed by limestone cliffs and a small beach. It is one of the strongest photo spots in Polignano a Mare.',
    },
    {
      title: 'Polignano Old Town',
      text: 'White stone streets, sea terraces, small shops and relaxed cafes make the historic center one of the most enjoyable places to explore on foot.',
    },
    {
      title: 'Viewpoints and Coastal Walks',
      text: 'Short walks between the statue, balconies and cliff edges give you the clearest sense of why Polignano a Mare ranks so highly for scenic coastal travel.',
    },
  ];

  const itinerary = [
    '09:00 - Start at the Domenico Modugno Statue',
    '10:00 - Walk to the Lama Monachile viewpoint',
    '11:00 - Explore the cove area and waterfront',
    '12:30 - Lunch in the old town',
    '14:00 - Slow walk through the historic center',
    '16:30 - Coffee, gelato and extra photo stops',
    '18:00 - Return to the statue for sunset',
  ];

  const tips = [
    'Early morning is best for lighter crowds and clearer photos.',
    'Sunset usually gives the strongest light at the statue and along the waterfront.',
    'Most highlights are walkable, so comfortable shoes are enough for a one-day visit.',
    'If you only have a few hours, focus on the statue, Lama Monachile and the old town.',
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-[#f0b429]">
            Destination guide
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Things to Do in Polignano a Mare
          </h1>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8">
            If you are looking for the best things to do in Polignano a Mare, the strongest plan
            starts around the Domenico Modugno Statue and expands into Lama Monachile, the old
            town, sea viewpoints and short coastal walks. This page is designed to match clear
            travel intent with a simple route that keeps the visit focused on what makes the town
            memorable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-14">
          {highlights.map((item) => (
            <section
              key={item.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6"
            >
              <h2 className="font-display text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                {item.title}
              </h2>
              <p className="leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 mb-10">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Easy one-day itinerary
          </h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            {itinerary.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#f0b429]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 mb-10">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Practical tips
          </h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#f0b429]" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Where to begin
          </h2>
          <p className="leading-7 text-slate-600 dark:text-slate-300 mb-4">
            The best place to start is the{' '}
            <a href="/en" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              Domenico Modugno Statue homepage
            </a>
            , where you can quickly confirm location details, review data and the core visit
            basics.
          </p>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            For a longer read, continue to the{' '}
            <a href="/en/blog/one-day-tour-guide" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              one-day guide
            </a>{' '}
            or the article on the{' '}
            <a href="/en/blog/monumento-a-domenico-modugno" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              story behind the monument
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
