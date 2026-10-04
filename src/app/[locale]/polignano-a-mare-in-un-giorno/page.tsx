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

  const url = 'https://www.modugnostatue.com/it/polignano-a-mare-in-un-giorno';

  return {
    title: 'Polignano a Mare in un giorno | Itinerario pratico 2026',
    description:
      'Come visitare Polignano a Mare in un giorno: Statua di Domenico Modugno, Lama Monachile, centro storico, pranzo vista mare, foto al tramonto e consigli pratici.',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Polignano a Mare in un giorno | Itinerario pratico 2026',
      description:
        'Un itinerario semplice e realistico per vedere Polignano a Mare in un giorno, partendo dalla Statua di Domenico Modugno e passando per il centro storico e Lama Monachile.',
      url,
      siteName: 'Modugno Statue',
      locale: 'it',
      type: 'article',
    },
  };
}

export default async function PolignanoInUnGiornoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'it') {
    notFound();
  }

  setRequestLocale(locale);

  const timeline = [
    {
      time: '09:00',
      title: 'Inizia dalla Statua di Domenico Modugno',
      text: 'Parti dal lungomare per vedere subito il luogo simbolo di Polignano a Mare. Qui trovi il panorama sul mare, lo spazio per le foto e un primo orientamento perfetto prima di entrare nel borgo.',
    },
    {
      time: '10:00',
      title: 'Passeggiata verso Lama Monachile',
      text: 'Raggiungi il belvedere e poi la celebre cala. Anche se non scendi in spiaggia, la vista dall\'alto resta una delle esperienze piu forti da fare in un giorno.',
    },
    {
      time: '12:30',
      title: 'Pranzo nel centro storico',
      text: 'Dedica la fascia centrale della giornata al centro storico: vicoli bianchi, terrazze sul mare, piccoli ristoranti e una pausa pranzo con cucina pugliese o pesce.',
    },
    {
      time: '15:00',
      title: 'Centro storico e punti panoramici',
      text: 'Nel pomeriggio continua a piedi tra archi, balconi e scorci. In poco spazio puoi coprire le tappe piu richieste senza aggiungere spostamenti complicati.',
    },
    {
      time: '18:00',
      title: 'Ritorno alla statua per il tramonto',
      text: 'Chiudi la giornata tornando alla Statua di Modugno. La luce serale e la posizione sul mare la rendono il punto migliore per le ultime foto del giorno.',
    },
  ];

  const essentials = [
    'Se arrivi in treno, la visita in un giorno funziona bene anche senza auto.',
    'Le distanze nel centro sono corte: scarpe comode sono piu utili di qualsiasi mezzo.',
    'Nei mesi piu affollati conviene vedere Lama Monachile al mattino.',
    'Per una giornata breve ma completa, evita deviazioni fuori tema e concentrati su lungomare, cala e centro storico.',
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-[#f0b429]">
            Itinerario giornaliero
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Polignano a Mare in un giorno
          </h1>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Se hai solo un giorno a disposizione, Polignano a Mare si visita molto bene con un
            percorso compatto. Il modo piu efficace e partire dalla Statua di Domenico Modugno,
            proseguire verso Lama Monachile e poi dedicare il resto della giornata al centro
            storico, ai belvedere e al tramonto sul lungomare.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 mb-10">
          <h2 className="font-display text-3xl font-semibold mb-6 text-slate-900 dark:text-white">
            Itinerario consigliato
          </h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.time} className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-24 text-[#f0b429] font-semibold">{item.time}</div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 mb-10">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Tappe essenziali da non saltare
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Statua di Modugno
              </h3>
              <p className="leading-7 text-slate-600 dark:text-slate-300">
                Punto di partenza ideale per chi visita Polignano a Mare in un giorno e vuole subito
                il panorama piu riconoscibile.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Lama Monachile
              </h3>
              <p className="leading-7 text-slate-600 dark:text-slate-300">
                La cala piu fotografata della cittadina, con vista dalle scogliere e accesso rapido
                dal centro.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Centro storico
              </h3>
              <p className="leading-7 text-slate-600 dark:text-slate-300">
                Il cuore piu vivo della visita, perfetto per pranzo, passeggiata lenta e scorci sul
                mare.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 mb-10">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Consigli pratici
          </h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            {essentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#f0b429]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
          <h2 className="font-display text-3xl font-semibold mb-5 text-slate-900 dark:text-white">
            Approfondimenti utili
          </h2>
          <p className="leading-7 text-slate-600 dark:text-slate-300 mb-4">
            Per partire dalle basi puoi aprire la pagina della{' '}
            <a href="/it" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              Statua di Domenico Modugno
            </a>
            . Se invece vuoi una panoramica piu ampia su tutte le tappe principali, trovi anche la
            guida su{' '}
            <a href="/it/cosa-vedere-polignano-a-mare" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              cosa vedere a Polignano a Mare
            </a>
            .
          </p>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Per una versione piu narrativa del percorso puoi continuare con la{' '}
            <a href="/it/blog/one-day-tour-guide" className="text-[#1e3a54] dark:text-[#f0b429] hover:underline">
              guida di un giorno
            </a>
            , utile se vuoi leggere il tour in modo piu editoriale.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
