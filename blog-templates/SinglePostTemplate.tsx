import React from 'react';

/**
 * Single Post Template
 * Description: Detailed blog post page with a hero, markdown-like content area, mid-article ad, and travel recommendations.
 */
export default function SinglePostTemplate() {
  const isChinese = false; // Toggle language

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200">
      {/* <Header /> */}

      {/* Hero Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#1e3a54]">
          <img
            src="https://images.unsplash.com/photo-1555554162-88b9015c7b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Hero cover"
            className="w-full h-full object-cover opacity-50 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a54] via-transparent to-transparent opacity-80" />
        </div>

        {/* Title Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <div className="mb-4">
            <span className="text-[#f0b429] uppercase tracking-widest text-sm font-semibold border border-[#f0b429] rounded-full px-4 py-1">
              {isChinese ? '旅遊指南' : 'Travel Guide'}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {isChinese ? '波利尼亞諾濱海：多梅尼科·莫杜尼奧故鄉的隱秘明珠' : 'Polignano a Mare: The Hidden Gem of Domenico Modugno’s Hometown'}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Admin
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Oct 15, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              5 min read
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Article Body */}
          <article className="lg:w-2/3 w-full">
            {/* Prose Container for Markdown styling */}
            <div className="prose prose-lg dark:prose-invert prose-slate prose-a:text-[#f0b429] prose-headings:font-display prose-headings:text-[#1e3a54] dark:prose-headings:text-slate-100 max-w-none">
              
              <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
                {isChinese 
                  ? '這座坐落在石灰岩懸崖上的白色小鎮，不僅以其令人窒息的美景聞名，更是著名歌手多梅尼科·莫杜尼奧（Domenico Modugno）的出生地。'
                  : 'Perched atop limestone cliffs, this white-washed town is not only famous for its breathtaking views but also as the birthplace of the legendary singer Domenico Modugno.'}
              </p>

              <h2>{isChinese ? '抵達與第一印象' : 'Arrival and First Impressions'}</h2>
              <p>
                {isChinese 
                  ? '當你踏入小鎮的歷史中心，迷宮般的狹窄小巷將你引向一個個俯瞰亞得里亞海的露台。海風中似乎永遠飄蕩著那首熟悉的旋律《Volare》。'
                  : 'As you enter the historic center, a maze of narrow alleyways leads you to stunning terraces overlooking the Adriatic Sea. The sea breeze seems to forever carry the familiar melody of "Volare".'}
              </p>

              {/* --- AD MODULE INSERTED INTO CONTENT --- */}
              <div className="my-10 w-full flex flex-col items-center border-y border-slate-100 dark:border-slate-800 py-6">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</span>
                <div className="w-full max-w-[728px] h-[90px] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Real Ad iframe goes here. Example Trip.com Ad */}
                  <iframe
                    src="https://www.trip.com/partners/ad/SB15306370?Allianceid=7974128&SID=300882170&trip_sub1=blog_mid"
                    style={{ width: '728px', height: '90px', border: 'none' }}
                    scrolling="no"
                    title="Ad slot"
                  />
                </div>
              </div>
              {/* --------------------------------------- */}

              <h2>{isChinese ? '參觀紀念碑' : 'Visiting the Monument'}</h2>
              <p>
                {isChinese 
                  ? 'Monumento a Domenico Modugno 是一座高達3米的青銅雕像，張開雙臂面向小鎮。這不僅是對藝術家的致敬，更是擁抱世界的象徵。建議在日落時分前來，金色的陽光灑在雕像上，背後的懸崖和海浪構成了一幅絕美的畫卷。'
                  : 'The Monumento a Domenico Modugno is a 3-meter bronze statue standing with open arms facing the town. It is not just a tribute to the artist, but a symbol of embracing the world. We recommend visiting at sunset when the golden light hits the statue, creating a magnificent painting with the cliffs and waves in the background.'}
              </p>
              
              <blockquote>
                <p>
                  {isChinese 
                    ? '“Nel blu, dipinto di blu / Felice di stare lassù...”'
                    : '"Nel blu, dipinto di blu / Felice di stare lassù..."'}
                </p>
              </blockquote>

              <h3>{isChinese ? '實用提示' : 'Practical Tips'}</h3>
              <ul>
                <li>{isChinese ? '穿著舒適的步行鞋，因為老城區有很多鵝卵石路。' : 'Wear comfortable walking shoes for the cobblestone streets.'}</li>
                <li>{isChinese ? '雕像是免費開放的，24小時均可參觀。' : 'The statue is a free public monument, open 24 hours a day.'}</li>
                <li>{isChinese ? '附近有許多優秀的海鮮餐廳，別忘了品嚐當地的生章魚。' : 'There are many excellent seafood restaurants nearby. Don’t forget to try the local raw octopus.'}</li>
              </ul>
            </div>

            {/* Post Footer (Tags & Share) */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                {['Travel', 'Culture', 'Italy'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500 font-medium">Share:</span>
                <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:text-[#f0b429] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:text-[#f0b429] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center sm:text-left">
              <a href="/blog" className="inline-flex items-center gap-2 text-[#1e3a54] dark:text-slate-300 hover:text-[#f0b429] font-medium transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                {isChinese ? '返回部落格列表' : 'Back to Blog List'}
              </a>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-16 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-display text-2xl font-semibold mb-6">{isChinese ? '留言' : 'Comments'} (0)</h3>
              <p className="text-slate-500 italic text-sm">{isChinese ? '評論功能即將推出...' : 'Comments are temporarily disabled.'}</p>
            </div>
          </article>

          {/* Right Column: Sidebar (Recommendations) */}
          <aside className="lg:w-1/3 w-full">
            <div className="sticky top-24 space-y-8">
              
              {/* Author Bio (Optional) */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a54] text-white flex items-center justify-center font-bold text-xl">
                    M
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg leading-tight">Polignano Tourism</h4>
                    <p className="text-xs text-slate-500">Official Editorial Team</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {isChinese 
                    ? '為您帶來關於波利尼亞諾濱海和莫杜尼奧紀念碑的最新官方資訊、歷史故事與旅行指南。'
                    : 'Bringing you the latest official news, history, and travel guides for Polignano a Mare and the Modugno Monument.'}
                </p>
              </div>

              {/* TRAVEL RECOMMENDATION MODULE */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="font-display text-xl font-semibold text-[#1e3a54] dark:text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#f0b429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {isChinese ? '附近旅遊推薦' : 'Discover More Nearby'}
                </h3>
                <div className="space-y-5">
                  {/* Rec Item 1 */}
                  <a href="https://www.trip.com/t/MyfkYfsEEU2" target="_blank" rel="noopener noreferrer" className="group flex gap-4 items-center">
                    <img src="https://images.unsplash.com/photo-1516483638261-f40af5ff1f25?auto=format&fit=crop&w=150&q=80" alt="Cave Tour" className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-[#f0b429] transition-colors leading-tight mb-1">
                        {isChinese ? '生態遊船與洞穴探索' : 'Eco-Boat & Cave Tour'}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isChinese ? '乘船探索令人驚嘆的海蝕洞，體驗清澈海水中的浮潛。' : 'Explore stunning sea caves and snorkel in crystal clear waters.'}
                      </p>
                    </div>
                  </a>
                  
                  {/* Rec Item 2 */}
                  <a href="https://www.trip.com/t/xcWHkMbFEU2" target="_blank" rel="noopener noreferrer" className="group flex gap-4 items-center">
                    <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=150&q=80" alt="Museum" className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-[#f0b429] transition-colors leading-tight mb-1">
                        {isChinese ? '當地博物館與藝術' : 'Local Museums & Art'}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isChinese ? '探索周邊地區豐富的歷史遺產和當代藝術展覽。' : 'Discover rich historical heritage and contemporary art exhibits nearby.'}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
                  <a href="#" className="text-sm text-[#1e3a54] dark:text-[#f0b429] hover:underline font-medium">
                    {isChinese ? '查看所有活動 →' : 'View all activities →'}
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}