import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BlogSection() {
  const locale = useLocale();
  const t = useTranslations('blog'); // Assuming we might want to add translations to messages later, or we can hardcode for now based on locale

  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const isItalian = locale === 'it';
  const isChinese = locale === 'zh' || locale === 'zh-Hant';

  const posts = [
    {
      id: 'one-day-tour-guide',
      title: isEnglish 
        ? 'Polignano a Mare, Italy｜In-depth One-Day Tour Guide' 
        : isFrench 
        ? 'Polignano a Mare, Italie｜Visite approfondie d’une journée' 
        : isItalian 
        ? 'Polignano a Mare｜Guida turistica approfondita di un giorno' 
        : '義大利濱海波利尼亞諾｜一日深度遊攻略',
      excerpt: isEnglish 
        ? 'A consistent, relaxed one-day tour for you to deeply experience the authentic charm of southern Italy.' 
        : isFrench 
        ? 'Un itinéraire d’une journée pour découvrir en profondeur la douceur et la passion de cette ville.' 
        : isItalian 
        ? 'Un itinerario di un giorno per vivere appieno la dolcezza e la passione di questo borgo sulle scogliere.' 
        : '為你規劃一條景點一致、節奏舒緩、深度體驗南意風情的一日遊攻略。',
      category: isEnglish ? 'Travel Guide' : isFrench ? 'Guide' : isItalian ? 'Guida' : '旅遊指南',
      date: isEnglish ? 'April 2026' : isFrench ? 'Avril 2026' : isItalian ? 'Aprile 2026' : '2026 年 4 月',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1516483638261-f40af5ff1f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'monumento-a-domenico-modugno',
      title: isEnglish 
        ? 'The Story Behind Monumento a Domenico Modugno' 
        : isFrench 
        ? 'L\'histoire derrière le Monumento a Domenico Modugno' 
        : isItalian 
        ? 'La storia dietro al Monumento a Domenico Modugno' 
        : '多梅尼科·莫杜尼奧雕像背後的故事',
      excerpt: isEnglish 
        ? 'Discover the inspiration behind the iconic statue of the "Volare" singer in Polignano a Mare.' 
        : isFrench 
        ? 'Découvrez l\'inspiration derrière la statue emblématique du chanteur de "Volare" à Polignano a Mare.' 
        : isItalian 
        ? 'Scopri l\'ispirazione dietro l\'iconica statua del cantante di "Volare" a Polignano a Mare.' 
        : '探索波利尼亞諾標誌性的《Volare》歌手雕像背後的靈感故事。',
      category: isEnglish ? 'Culture' : isFrench ? 'Culture' : isItalian ? 'Cultura' : '文化與歷史',
      date: isEnglish ? 'April 2026' : isFrench ? 'Avril 2026' : isItalian ? 'Aprile 2026' : '2026 年 4 月',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1692345576261-12c8b0567fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {isEnglish ? 'Blog / Latest Articles' : isFrench ? 'Blog / Derniers articles' : isItalian ? 'Blog / Ultimi articoli' : '最新文章 / Blog'}
          </h2>
          <div className="w-12 h-1 bg-[#f0b429] mx-auto rounded-full" style={{ background: 'var(--accent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {posts.map((post) => (
            <Link href={`/${locale}/blog/${post.id}`} key={post.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1e3a54] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-[#f0b429] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#1e3a54] dark:border-[#f0b429] text-[#1e3a54] dark:text-[#f0b429] hover:bg-[#1e3a54] hover:text-white dark:hover:bg-[#f0b429] dark:hover:text-slate-900 rounded-full font-medium transition-colors">
            {isEnglish ? 'View All Blog Posts' : isFrench ? 'Voir tous les articles' : isItalian ? 'Vedi tutti gli articoli' : '查看所有文章'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
