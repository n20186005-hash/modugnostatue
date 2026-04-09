import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const isItalian = locale === 'it';
  const isChinese = locale === 'zh-Hant'; // or 'zh'

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#1e3a54] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555554162-88b9015c7b5b')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {isEnglish ? 'Polignano Travel Journal' : isFrench ? 'Journal de Voyage de Polignano' : isItalian ? 'Diario di Viaggio di Polignano' : '波利尼亞諾旅遊日誌'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            {isEnglish 
              ? 'Discover the culture, food, and stories of Domenico Modugno in the pearl of Southern Italy.'
              : isFrench
              ? 'Découvrez la culture, la gastronomie et les histoires de Domenico Modugno dans la perle de l’Italie du Sud.'
              : isItalian
              ? 'Scopri la cultura, il cibo e le storie di Domenico Modugno nella perla del Sud Italia.'
              : '探索義大利南部明珠的文化、美食與多梅尼科·莫杜尼奧的故事。'}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1: One Day Tour */}
            <Link href={`/${locale}/blog/one-day-tour-guide`} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516483638261-f40af5ff1f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Polignano a Mare Coastline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1e3a54] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {isEnglish ? 'Guide' : isFrench ? 'Guide' : isItalian ? 'Guida' : '旅遊指南'}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-[#f0b429] transition-colors line-clamp-2">
                  {isEnglish ? 'Polignano a Mare, Italy｜In-depth One-Day Tour Guide' : isFrench ? 'Polignano a Mare, Italie｜Visite approfondie d’une journée' : isItalian ? 'Polignano a Mare｜Guida turistica approfondita di un giorno' : '義大利濱海波利尼亞諾｜一日深度遊攻略'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {isEnglish 
                    ? 'A consistent, relaxed one-day tour for you to deeply experience the authentic charm of southern Italy.' 
                    : isFrench
                    ? 'Un itinéraire d’une journée pour découvrir en profondeur la douceur et la passion de cette ville.'
                    : isItalian
                    ? 'Un itinerario di un giorno per vivere appieno la dolcezza e la passione di questo borgo sulle scogliere.'
                    : '為你規劃一條景點一致、節奏舒緩、深度體驗南意風情的一日遊攻略。'}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">April 2026</span>
                  <span className="flex items-center gap-1">Winter Grady • 8 min read</span>
                </div>
              </div>
            </Link>

            {/* Article 2: Domenico Modugno */}
            <Link href={`/${locale}/blog/monumento-a-domenico-modugno`} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1692345576261-12c8b0567fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Domenico Modugno Statue"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1e3a54] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {isEnglish ? 'Culture' : isFrench ? 'Culture' : isItalian ? 'Cultura' : '文化與歷史'}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-[#f0b429] transition-colors line-clamp-2">
                  {isEnglish ? 'The Story Behind Monumento a Domenico Modugno' : isFrench ? 'L\'histoire derrière le Monumento a Domenico Modugno' : isItalian ? 'La storia dietro al Monumento a Domenico Modugno' : '多梅尼科·莫杜尼奧雕像背後的故事'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {isEnglish 
                    ? 'Discover the inspiration behind the iconic statue of the "Volare" singer in Polignano a Mare.' 
                    : isFrench
                    ? 'Découvrez l\'inspiration derrière la statue emblématique du chanteur de "Volare" à Polignano a Mare.'
                    : isItalian
                    ? 'Scopri l\'ispirazione dietro l\'iconica statua del cantante di "Volare" a Polignano a Mare.'
                    : '探索波利尼亞諾標誌性的《Volare》歌手雕像背後的靈感故事。'}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">April 2026</span>
                  <span className="flex items-center gap-1">Winter Grady • 6 min read</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
