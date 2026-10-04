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

  if (locale !== 'it') {
    return {};
  }

  const url = 'https://www.modugnostatue.com/it/cosa-vedere-polignano-a-mare';

  return {
    title: 'Cosa vedere a Polignano a Mare | Guida pratica 2026',
    description:
      'Cosa vedere a Polignano a Mare in un giorno: Statua di Domenico Modugno, Lama Monachile, centro storico, spiagge, punti panoramici, gite in barca e consigli pratici.',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Cosa vedere a Polignano a Mare | Guida pratica 2026',
      description:
        'Una guida chiara ai luoghi da vedere a Polignano a Mare, con itinerario a piedi, consigli foto, spiagge e tappe vicino alla Statua di Domenico Modugno.',
      url,
      siteName: 'Modugno Statue',
      locale: 'it',
      type: 'article',
    },
  };
}

export default async function CosaVederePolignanoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'it') {
    notFound();
  }

  setRequestLocale(locale);

  const highlights = [
    {
      title: 'Statua di Domenico Modugno',
      text: 'Il simbolo più riconoscibile del lungomare. È gratuita, aperta sempre e perfetta per iniziare la visita con vista sul mare e sul centro di Polignano.',
    },
    {
      title: 'Lama Monachile',
      text: 'La cala più fotografata della città, stretta tra le scogliere. Al mattino presto è ideale per foto più pulite e per godersi il panorama senza folla.',
    },
    {
      title: 'Centro Storico di Polignano a Mare',
      text: 'Vicoli bianchi, terrazze sul mare, archi in pietra e piccoli locali. È la parte più piacevole da esplorare con calma nel pomeriggio o prima di cena.',
    },
    {
      title: 'Belvedere e lungomare',
      text: 'Tra balconi panoramici e passeggiata sul mare, qui si concentrano molti dei migliori punti foto di Polignano a Mare.',
    },
    {
      title: 'Abbazia di San Vito',
      text: 'Una tappa molto scenografica poco fuori dal centro, utile se hai più tempo o se arrivi in auto e vuoi vedere anche un lato più tranquillo della costa.',
    },
  ];

  const itinerary = [
    '09:00 - Statua di Domenico Modugno e passeggiata sul Lungomare Domenico Modugno',
    '10:00 - Belvedere su Lama Monachile e foto sulla cala',
    '11:00 - Discesa verso Lama Monachile oppure relax nei dintorni',
    '12:30 - Pranzo nel centro storico con cucina pugliese e piatti di mare',
    '14:00 - Passeggiata tra vicoli, terrazze panoramiche e botteghe',
    '16:30 - Gelato o pausa caffè con vista mare',
    '18:00 - Ritorno alla statua per tramonto e foto dorate',
  ];

  const tips = [
    'Se visiti in estate, vai presto a Lama Monachile per evitare l\'affollamento.',
    'Per le foto migliori, il tramonto resta il momento più forte alla statua di Modugno.',
    'Il centro si gira bene a piedi; scarpe comode aiutano sulle strade in pietra.',
    'Se cerchi un itinerario breve ma completo, concentrati su statua, centro storico e Lama Monachile.',
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-[#f0b429]">
            Guida destinazione
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Cosa vedere a Polignano a Mare
          </h1>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8">
            Se stai cercando cosa vedere a Polignano a Mare, la combinazione piu efficace e
            semplice parte dalla Statua di Domenico Modugno e continua tra Lama Monachile,
            centro storico, lungomare e punti panoramici. Questa guida e pensata per chi vuole
            visitare il borgo con un itinerario chiaro, senza disperdere il tempo su tappe poco
            coerenti con il cuore della destinazione.
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
            Itinerario consigliato in un giorno
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
            Consigli pratici
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
            Da dove iniziare
          </h2>
          <p className="leading-7 text-slate-600 dark:text-slate-300 mb-4">
            Il punto di partenza migliore resta la{' '}
            <a href="/it" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              Statua di Domenico Modugno
            </a>
            . Da qui puoi raggiungere facilmente il lungomare, i belvedere e il centro storico,
            mantenendo un percorso compatto e molto coerente con l'intento di visita di Polignano
            a Mare.
          </p>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Se vuoi un itinerario gia ordinato per fasce orarie, trovi anche la pagina{' '}
            <a href="/it/polignano-a-mare-in-un-giorno" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              Polignano a Mare in un giorno
            </a>
            . Per una lettura piu narrativa, puoi continuare con la{' '}
            <a href="/it/blog/one-day-tour-guide" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              guida di un giorno
            </a>{' '}
            o con l'articolo dedicato alla{' '}
            <a href="/it/blog/monumento-a-domenico-modugno" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              storia del monumento
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
