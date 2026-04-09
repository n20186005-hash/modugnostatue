import React from 'react';

/**
 * Homepage Blog Section Template
 * Description: A responsive grid layout for the latest 3 blog posts, Mediterranean style.
 */
export default function BlogSection() {
  const posts = [
    {
      id: 1,
      titleEn: 'Discovering the Magic of Polignano a Mare',
      titleZh: '探索波利尼亞諾濱海的魅力',
      excerptEn: 'A complete guide to exploring the hidden coves and white-washed streets of Domenico Modugno’s hometown.',
      excerptZh: '探索多梅尼科·莫杜尼奧故鄉的隱秘海灣與白色街道的完整指南。',
      categoryEn: 'Travel Guide',
      categoryZh: '旅遊指南',
      date: 'Oct 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555554162-88b9015c7b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      titleEn: 'The Story Behind "Volare"',
      titleZh: '《Volare》背後的故事',
      excerptEn: 'How Domenico Modugno’s legendary song captured the world and forever changed Italian music history.',
      excerptZh: '多梅尼科·莫杜尼奧的傳奇歌曲如何風靡全球並永遠改變了義大利音樂史。',
      categoryEn: 'Culture & Music',
      categoryZh: '文化與音樂',
      date: 'Sep 28, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      titleEn: 'Best Sunset Spots Near the Statue',
      titleZh: '雕像附近最佳日落觀賞點',
      excerptEn: 'From the Lama Monachile bridge to the waterfront, find the perfect spot to watch the sun go down.',
      excerptZh: '從 Lama Monachile 橋到海濱長廊，尋找觀賞日落的完美地點。',
      categoryEn: 'Local Tips',
      categoryZh: '當地推薦',
      date: 'Sep 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Simulating active locale (can be passed via props or context in production)
  const isChinese = false; 

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            {isChinese ? '最新文章' : 'Blog / Latest Articles'}
          </h2>
          <div className="w-12 h-1 bg-[#f0b429] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={isChinese ? post.titleZh : post.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1e3a54] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {isChinese ? post.categoryZh : post.categoryEn}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-[#f0b429] transition-colors line-clamp-2">
                  {isChinese ? post.titleZh : post.titleEn}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {isChinese ? post.excerptZh : post.excerptEn}
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
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a href="/blog" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#1e3a54] dark:border-[#f0b429] text-[#1e3a54] dark:text-[#f0b429] hover:bg-[#1e3a54] hover:text-white dark:hover:bg-[#f0b429] dark:hover:text-slate-900 rounded-full font-medium transition-colors">
            {isChinese ? '查看所有文章' : 'View All Blog Posts'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
