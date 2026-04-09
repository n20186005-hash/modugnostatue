import React from 'react';

/**
 * Blog Index / Archive Page Template
 * Description: A responsive grid layout with a hero header, search/filter (placeholder), and pagination.
 */
export default function BlogIndexPage() {
  const isChinese = false; // Toggle language

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* 
        NOTE: Header component (Navigation + Language Switcher) goes here 
        <Header /> 
      */}

      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-[#1e3a54] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555554162-88b9015c7b5b')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {isChinese ? '波利尼亞諾旅遊日誌' : 'Polignano Travel Journal'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            {isChinese 
              ? '探索義大利南部明珠的文化、美食與多梅尼科·莫杜尼奧的故事。' 
              : 'Discover the culture, food, and stories of Domenico Modugno in the pearl of Southern Italy.'}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Search and Filter Bar */}
          <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              {['All', 'Travel', 'Culture', 'Tips'].map(cat => (
                <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#f0b429] text-slate-600 dark:text-slate-300 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder={isChinese ? '搜尋文章...' : 'Search articles...'} 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f0b429]"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* Blog Grid (Reuse card structure from Homepage Section) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${i}`} 
                    alt="Blog thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1e3a54] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {isChinese ? '分類' : 'Category'}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-[#f0b429] transition-colors line-clamp-2">
                    {isChinese ? '義大利南部的絕美海岸線探索指南' : 'Exploring the Stunning Coastline of Southern Italy'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {isChinese 
                      ? '從波利尼亞諾濱海到周邊的隱秘洞穴，這是一份適合所有旅行者的詳細行程規劃。' 
                      : 'From Polignano a Mare to hidden caves, a detailed itinerary for every traveler looking to experience the magic.'}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">Oct 12, 2026</span>
                    <span className="flex items-center gap-1">Admin • 5 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-500">&larr;</button>
            <button className="w-10 h-10 rounded-full bg-[#1e3a54] text-white flex items-center justify-center font-medium shadow-sm">1</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 font-medium">2</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 font-medium">3</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-500">&rarr;</button>
          </div>
        </div>
      </main>

      {/* 
        NOTE: Footer component goes here 
        <Footer /> 
      */}
    </div>
  );
}