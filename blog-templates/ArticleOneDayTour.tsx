import React from 'react';

/**
 * Single Post Content: 意大利滨海波利尼亚诺｜Monumento a Domenico Modugno 周边一日深度游攻略
 */
export default function BlogPostOneDayTour() {
  const locale = 'it' as string; // 'en', 'zh', 'fr', 'it'
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const isItalian = locale === 'it';
  const isChinese = locale === 'zh'; // Default fallback

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200">
      {/* <Header /> */}

      {/* Hero Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#1e3a54]">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f40af5ff1f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Polignano a Mare Coastline"
            className="w-full h-full object-cover opacity-50 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a54] via-transparent to-transparent opacity-80" />
        </div>

        {/* Title Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 mt-12">
          <div className="mb-4">
            <span className="text-[#f0b429] uppercase tracking-widest text-sm font-semibold border border-[#f0b429] rounded-full px-4 py-1">
              {isEnglish ? 'Travel Guide' : isFrench ? 'Guide Touristique' : isItalian ? 'Guida Turistica' : '旅游指南 / Travel Guide'}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {isEnglish
              ? 'Polignano a Mare, Italy｜In-depth One-Day Tour Guide Around Monumento a Domenico Modugno'
              : isFrench
              ? 'Polignano a Mare, Italie｜Visite approfondie d’une journée autour du Monumento a Domenico Modugno'
              : isItalian
              ? 'Polignano a Mare｜Guida turistica approfondita di un giorno intorno al Monumento a Domenico Modugno'
              : '意大利滨海波利尼亚诺｜Monumento a Domenico Modugno 周边一日深度游攻略'}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Winter Grady
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {isEnglish ? 'April 2026' : isFrench ? 'Avril 2026' : isItalian ? 'Aprile 2026' : '2026 年 4 月'}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              8 min read
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Article Body */}
          <article className="lg:w-2/3 w-full">
            <div className="prose prose-lg dark:prose-invert prose-slate prose-a:text-[#f0b429] prose-headings:font-display prose-headings:text-[#1e3a54] dark:prose-headings:text-slate-100 max-w-none">
              
              <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
                {isEnglish
                  ? "On the Adriatic coast of Puglia in southern Italy lies a romantic town embraced by cliffs and turquoise sea — Polignano a Mare. It boasts crystal-clear waters like gemstones and scattered white stone houses, and is world-famous for the song Volare. At the heart of this music and romance stands the Monumento a Domenico Modugno. This statue is not only the spiritual landmark of the town but also the perfect starting point connecting beaches, bays, and the old town. Centered on this monument, we’ve designed a consistent, relaxed one-day tour for you to deeply experience the authentic charm of southern Italy, immersing you in the tenderness and passion of this cliffside town."
                  : isFrench
                  ? "Sur la côte adriatique des Pouilles, dans le sud de l’Italie, se cache une ville romantique nichée entre falaises et mer bleue : Polignano a Mare. Ici, l’eau scintille comme une gemme, les maisons blanches en pierre s’alignent harmonieusement, et la renommée mondiale du lieu doit beaucoup à la chanson Volare. C’est autour du Monumento a Domenico Modugno, emblème musical et romantique érigé sur le front de mer, que nous vous proposons un itinéraire d’une journée, centré sur ce monument, pour découvrir en profondeur la douceur et la passion de cette ville perchée sur les falaises."
                  : isItalian
                  ? "Sulla costa adriatica della Puglia, nel sud Italia, si nasconde un romantico borgo abbracciato da scogliere e mare cristallino: Polignano a Mare. Qui l’acqua trasparente brilla come una gemma, le case bianche in pietra si susseguono armoniosamente, e il paese è famoso in tutto il mondo grazie alla canzone Volare. Il cuore di questa musica e di questo romanticismo è il Monumento a Domenico Modugno, che svetta sulla costa. Questa statua non è solo il simbolo spirituale del borgo, ma anche il punto di partenza perfetto per collegare spiagge, calette e centro storico. In questa guida organizziamo un itinerario di un giorno, con lo stesso ritmo rilassato e un’esperienza autentica del sud Italia, per vivere appieno la dolcezza e la passione di questo borgo sulle scogliere."
                  : "在意大利南部普利亚大区的亚得里亚海岸，藏着一座被悬崖与碧海环抱的浪漫小镇 —— 滨海波利尼亚诺（Polignano a Mare）。这里不仅有澄澈如宝石的海水、错落有致的白色石屋，更因一首《Volare》闻名世界，而承载这份音乐与浪漫的核心，便是矗立在海岸线上的 Monumento a Domenico Modugno。这座雕像不仅是小镇的精神地标，更是串联起沙滩、海湾、老城的完美起点。本文以该纪念碑为核心，为你规划一条景点一致、节奏舒缓、深度体验南意风情的一日游攻略，带你沉浸式感受这座悬崖小镇的温柔与热烈。"}
              </p>

              <h2>{isEnglish ? 'I. Core Landmark: Monumento a Domenico Modugno' : isFrench ? 'I. Le monument emblématique : Monumento a Domenico Modugno' : isItalian ? 'I. Simbolo centrale: Monumento a Domenico Modugno, la melodia romantica del sud Italia' : '一、核心地标：Monumento a Domenico Modugno，聆听南意的浪漫旋律'}</h2>
              
              <h3>{isEnglish ? '1. The Story Behind the Statue' : isFrench ? '1. L’histoire derrière la statue' : isItalian ? '1. La storia dietro la statua' : '1. 雕像背后的故事'}</h3>
              <p>
                {isEnglish
                  ? "The Monumento a Domenico Modugno was built in memory of the legendary Italian singer and songwriter Domenico Modugno, the performer of the classic hit Volare, which swept the world and became an icon of Italian culture. Created by sculptor Hermes M. C. Grillo, the statue stands on the Lungomare Domenico Modugno waterfront promenade, facing the endless sea with arms outstretched, as if singing in the sea breeze. It perfectly captures the free and unrestrained soul in Modugno’s music and has become the town’s most recognizable landmark."
                  : isFrench
                  ? "Le Monumento a Domenico Modugno rend hommage au chanteur et auteur-compositeur légendaire italien, interprète de la chanson emblématique Volare (Nel blu, dipinto di blu), qui a conquis le monde entier et est devenue un symbole culturel italien. Réalisée par le sculpteur Hermes M. C. Grillo, la statue se dresse sur le Lungomare Domenico Modugno, face à la mer infinie, les bras ouverts comme si elle chantait au vent. Elle incarne parfaitement l’esprit libre et exubérant de la musique de Modugno et est devenue le lieu de prise de vue le plus reconnaissable de la ville."
                  : isItalian
                  ? "Il Monumento a Domenico Modugno è stato eretto in onore del leggendario cantante e autore italiano, interprete della celebre canzone Volare (Nel blu, dipinto di blu), che ha conquistato il mondo intero diventando uno dei simboli culturali italiani. Realizzato dallo scultore Hermes M. C. Grillo, il monumento sorge sul Lungomare Domenico Modugno, rivolto verso il mare infinito con le braccia aperte, come se cantasse al vento. Rappresenta perfettamente lo spirito libero ed esuberante della musica di Modugno, diventando il luogo più riconoscibile del borgo."
                  : "Monumento a Domenico Modugno 是为纪念意大利传奇歌手、词曲创作者多梅尼科・莫杜尼奧而建，他正是经典歌曲《Volare（飞翔）》的演唱者，这首歌曾风靡全球，成为意大利的文化符号之一。雕像由雕塑家 Hermes M. C. Grillo 创作，矗立在 Lungomare Domenico Modugno 海滨大道上，面向无垠大海，双臂舒展，仿佛正迎着海风歌唱，完美诠释了莫杜尼奧音乐中自由、奔放的灵魂，也成为小镇最具辨识度的打卡点。"}
              </p>
              
              <h3>{isEnglish ? '2. Highlights & Practical Info' : isFrench ? '2. Points forts et informations pratiques' : isItalian ? '2. Punti di interesse e informazioni pratiche' : '2. 游览亮点与实用信息'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Address:' : isFrench ? 'Adresse :' : isItalian ? 'Indirizzo:' : '地址：'}</strong> {isEnglish ? 'Lungomare Domenico Modugno, 70044 Polignano a Mare BA, Italy' : isFrench ? 'Lungomare Domenico Modugno, 70044 Polignano a Mare, Bari, Italie' : isItalian ? 'Lungomare Domenico Modugno, 70044 Polignano a Mare BA, Italia' : 'Lungomare Domenico Modugno, 70044 Polignano a Mare BA, 意大利'}</li>
                <li><strong>{isEnglish ? 'Opening hours:' : isFrench ? 'Horaires :' : isItalian ? 'Orari:' : '开放时间：'}</strong> {isEnglish ? 'Open 24/7, free admission' : isFrench ? 'ouvert 24h/24, toute l’année, entrée gratuite' : isItalian ? 'Aperto 24 ore su 24, tutto l’anno, ingresso gratuito' : '24 小时全年无休，无需门票'}</li>
                <li><strong>{isEnglish ? 'Best times to visit:' : isFrench ? 'Meilleurs moments pour visiter :' : isItalian ? 'Orari consigliati:' : '最佳游览时段：'}</strong> {isEnglish ? '9:00–10:00 (quiet with few people, ideal for unobstructed panoramic photos); 18:00–19:00 (sunset casts golden light over the statue and sea, full atmosphere)' : isFrench ? '9h00–10h00 : calme et peu fréquenté, idéal pour des photos sans foule ; 18h00–19h00 : soleil couchant sur la statue et la mer, ambiance exceptionnelle' : isItalian ? 'Mattina 09:00–10:00 (poco affollato, ideale per foto panoramiche senza gente); Sera 18:00–19:00 (tramonto su statua e mare, atmosfera indimenticabile)' : '清晨 9:00-10:00（人少静谧，适合拍无人全景照）；傍晚 18:00-19:00（夕阳洒在雕像与海面，氛围感拉满）'}</li>
                <li><strong>{isEnglish ? 'Photo tips:' : isFrench ? 'Astuces photos :' : isItalian ? 'Consigli per le foto:' : '打卡 Tips：'}</strong> {isEnglish ? 'Shoot the statue against the blue sea and cliffs; mimic its outstretched pose for stylish southern Italian shots. In the evening, local artists often perform Volare along the promenade — walking with the music creates an unforgettable atmosphere.' : isFrench ? 'Prendre la statue avec la mer et les falaises en arrière-plan, ou imiter sa pose les bras écartés. Le soir, des artistes locaux chantent souvent Volare sur le front de mer : une promenade accompagnée de musique crée une atmosphère inoubliable.' : isItalian ? 'Fotografare la statua con mare e scogliere sullo sfondo, o imitare la posa con braccia aperte. La sera, artisti locali suonano e cantano Volare sul lungomare: una passeggiata accompagnata dalla musica crea un’atmosfera unica.' : '以碧海、悬崖为背景拍摄雕像，或站在雕像旁模仿其舒展姿态，随手一拍都是南意风情大片；傍晚时分，海滨大道会有当地艺人弹唱《Volare》，伴着歌声漫步，氛围感直接拉满。'}</li>
              </ul>
              <p>
                {isEnglish
                  ? "This monument is more than a photo spot; it’s the cultural heart of the town. Each year, music festivals and tribute concerts are held here to honor Modugno’s legacy. If you visit during these events, you can fully experience the music culture and lively local life of southern Italy."
                  : isFrench
                  ? "Ce monument est aussi le cœur culturel de la ville. Chaque année ont lieu des festivals de musique et des spectacles commémoratifs en l’honneur de Modugno. Si vous visitez pendant ces événements, vous pourrez vivre pleinement la culture musicale et l’ambiance populaire du sud de l’Italie."
                  : isItalian
                  ? "Questo monumento non è solo un luogo fotografico, ma anche il cuore culturale del paese. Ogni anno si svolgono festival musicali e spettacoli commemorativi in onore di Modugno. Se visiti durante questi eventi, potrai vivere in prima persona la cultura musicale e la vita popolare del sud Italia."
                  : "这座纪念碑不仅是拍照胜地，更是小镇的文化中心。每年当地都会举办音乐节点、纪念演出等活动，致敬莫杜尼奧的音乐遗产，若恰逢活动期间到访，还能沉浸式体验意大利南部的音乐文化与市井烟火。"}
              </p>

              {/* --- AD MODULE INSERTED INTO CONTENT --- */}
              <div className="my-10 w-full flex flex-col items-center border-y border-slate-100 dark:border-slate-800 py-6">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</span>
                <div className="w-full max-w-[728px] h-[90px] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.trip.com/partners/ad/SB15306370?Allianceid=7974128&SID=300882170&trip_sub1=blog_mid"
                    style={{ width: '728px', height: '90px', border: 'none' }}
                    scrolling="no"
                    title="Trip.com Ad"
                  />
                </div>
              </div>
              {/* --------------------------------------- */}

              <h2>{isEnglish ? 'II. Coastal Walk: From San Vito Beach to Lama Monachile' : isFrench ? 'II. Balade sur le littoral : de la plage de San Vito à la crique Lama Monachile' : isItalian ? 'II. Passeggiata lungo la costa: dalla Spiaggia di San Vito alla cala di Lama Monachile' : '二、海岸线漫游：从圣维托沙滩到拉马莫纳基莱海湾'}</h2>
              <p>
                {isEnglish
                  ? "Starting from the monument, a leisurely 20–30 minute walk along the coastline links the town’s most stunning natural scenery."
                  : isFrench
                  ? "Partant du monument, une promenade le long du littoral permet de relier les sites naturels les plus exceptionnels de la ville, en seulement 20 à 30 minutes à pied, à un rythme tranquille et propice aux photos."
                  : isItalian
                  ? "Partendo dal monumento, una passeggiata lungo la costa permette di scoprire i paesaggi naturali più belli del borgo, in soli 20–30 minuti a piedi, con un ritmo tranquillo e perfetto per le foto."
                  : "以纪念碑为起点，沿着海岸线漫步，便能串联起小镇最精华的自然景观，全程步行仅需 20-30 分钟，节奏舒缓，适合边走边拍。"}
              </p>
              
              <h3>{isEnglish ? '1. First Stop: Spiaggia di San Vito' : isFrench ? '1. Première étape : Spiaggia di San Vito, sable fin et eau cristalline' : isItalian ? '1. Prima tappa: Spiaggia di San Vito, sabbia fine e acqua cristallina' : '1. 第一站：Spiaggia di San Vito，邂逅细腻白沙与澄澈海水'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Address:' : isFrench ? 'Adresse :' : isItalian ? 'Indirizzo:' : '地址：'}</strong> {isEnglish ? 'Via S. Vito, 70044 Polignano a Mare BA, Italy' : isFrench ? 'Via S. Vito, 70044 Polignano a Mare, Bari, Italie' : isItalian ? 'Via S. Vito, 70044 Polignano a Mare BA, Italia' : 'Via S. Vito, 70044 Polignano a Mare BA, 意大利'}</li>
                <li><strong>{isEnglish ? 'Highlights:' : isFrench ? 'Points forts :' : isItalian ? 'Punti di forza:' : '亮点：'}</strong> {isEnglish ? 'A popular public beach with soft pale-gold sand and transparent water. The shallow area is calm, perfect for swimming and sunbathing. Rest areas and showers are available nearby.' : isFrench ? 'Plage publique très prisée, avec du sable doré fin et une eau translucide. La zone peu profonde est calme, parfaite pour la baignade et le bain de soleil. Des espaces de repos et des douches sont disponibles à proximité.' : isItalian ? 'Spiaggia pubblica molto amata, con sabbia dorata fine e acqua limpidissima. La zona bassa è calma, adatta per nuotare e prendere il sole. Vicino ci sono aree relax e docce.' : '作为小镇人气颇高的公共沙滩，Spiaggia di San Vito 拥有细腻的浅金色沙质，海水清澈见底，浅滩区域平缓，适合游泳、日光浴。沙滩周边设有简易休息区、淋浴设施，逛累了可坐在沙滩椅上，吹着海风发呆，感受南意的慵懒惬意。'}</li>
                <li><strong>{isEnglish ? 'Tips:' : isFrench ? 'Conseils :' : isItalian ? 'Consigli:' : '实用建议：'}</strong> {isEnglish ? 'Arrive early in summer for a spot; wear non-slip water shoes to avoid cuts from rocks; free entry.' : isFrench ? 'En été, la plage est bondée ; arrivez tôt pour trouver une place. Le secteur rocheux nécessite des chaussures antidérapantes pour éviter les éraflures. Entrée gratuite.' : isItalian ? 'In estate la spiaggia è affollata, quindi arriva presto per trovare posto. La zona è rocciosa: usa scarpe antiscivolo per evitare graffi. Ingresso gratuito.' : '夏季游客较多，建议早到抢占位置；沙滩周边岩石较多，下水建议穿防滑涉水鞋，避免划伤；无需门票，可免费进入游玩。'}</li>
              </ul>
              
              <h3>{isEnglish ? '2. Second Stop: Lama Monachile' : isFrench ? '2. Deuxième étape : Lama Monachile, crique naturelle entourée de falaises' : isItalian ? '2. Seconda tappa: Lama Monachile, cala naturale incastonata tra le scogliere' : '2. 第二站：Lama Monachile，悬崖环抱的天然秘境海湾'}</h3>
              <p>
                {isEnglish
                  ? "Just a 5-minute walk from San Vito Beach, you’ll reach Lama Monachile (also known as “Monk’s Creek”), named after an ancient local legend and one of the most iconic hidden bays in southern Italy."
                  : isFrench
                  ? "À 5 minutes à pied de la plage de San Vito se trouve le site naturel le plus iconique de Polignano : Lama Monachile (la Petite Rivière des Moines), dont le nom vient d’une légende locale. C’est une crique secrète incontournable du sud de l’Italie."
                  : isItalian
                  ? "A 5 minuti a piedi dalla Spiaggia di San Vito si trova il paesaggio naturale più iconico del borgo: Lama Monachile, chiamata anche “Fiumara dei Monaci”, dal nome di un’antica leggenda locale. È una cala segreta imperdibile del sud Italia."
                  : "从圣维托沙滩步行 5 分钟，便抵达小镇最具标志性的自然景观 ——Lama Monachile（拉马莫纳基莱海湾），也被称作 “僧侣小溪”，名字源于当地古老传说，是南意不可错过的秘境海湾。"}
              </p>
              <ul>
                <li><strong>{isEnglish ? 'Features:' : isFrench ? 'Caractéristiques :' : isItalian ? 'Caratteristiche:' : '核心特色：'}</strong> {isEnglish ? 'Enclosed by steep limestone cliffs, it forms a natural shelter. White sand meets Tiffany-blue water, like a jewel dropped by God. The cliffside viewpoint offers breathtaking panoramic views. The clear water is ideal for snorkeling to see colorful fish and underwater rocks.' : isFrench ? 'La crique est protégée par des falaises calcaires abruptes qui forment un abri naturel. Sable blanc et eau turquoise s’y combinent comme une gemme perdue. Un point de vue sur les falaises offre une vue panoramique exceptionnelle. L’eau claire permet d’observer poissons et rochers sous l’eau : un paradis pour la plongée en apnée.' : isItalian ? 'La cala è racchiusa da ripide scogliere calcaree che formano un rifugio naturale. Sabbia bianca e acqua color tiffany si fondono come una gemma perduta. Sulle scogliere c’è un belvedere con vista panoramica mozzafiato. L’acqua trasparente permette di osservare pesci colorati e rocce sommerse: un paradiso per gli amanti dello snorkeling.' : '海湾被两侧陡峭的石灰岩悬崖环抱，形成天然避风港，白色沙滩搭配蒂芙尼蓝海水，宛如上帝遗落的宝石。悬崖上设有观景台，是俯瞰整个海湾的最佳位置，随手一拍就是壁纸级大片；海水清澈通透，浮潜能看到斑斓的小鱼与海底礁石，是潜水爱好者的小众天堂。'}</li>
                <li><strong>{isEnglish ? 'Practical info:' : isFrench ? 'Informations pratiques :' : isItalian ? 'Informazioni pratiche:' : '实用信息：'}</strong> {isEnglish ? 'Open 24/7, free; watch your step on narrow cliff paths; visit early morning or evening to avoid crowds.' : isFrench ? 'ouvert 24h/24, gratuit. Les sentiers sur les falaises sont étroits, soyez prudent lors des prises de vue. Privilégiez le matin ou le soir en haute saison pour éviter la foule.' : isItalian ? 'Aperto 24 ore su 24, ingresso gratuito. I sentieri sulle scogliere sono stretti: fai attenzione quando scatti foto. In estate è molto affollata, quindi visita al mattino presto o alla sera per goderti la cala in tranquillità.' : '24 小时免费开放；悬崖步道较窄，拍照时注意安全；夏季人流量大，建议错峰游览，清晨或傍晚能避开人群，独享海湾美景。'}</li>
              </ul>
              <p>
                {isEnglish
                  ? "Strolling along the coast, you’ll have the blue sea on one side and white stone houses on the other, with the fresh scent of salt in the air. Occasionally you’ll hear street musicians playing Volare near the monument, where singing and waves blend into Polignano a Mare’s most touching romance."
                  : isFrench
                  ? "La promenade littorale offre, sur votre gauche, la mer azur, et sur votre droite, les maisons blanches. Le vent marin porte une légère odeur de sel, et parfois, près du monument, on entend des artistes interpréter Volare : la voix se mêle aux vagues, créant la plus belle romance de Polignano a Mare."
                  : isItalian
                  ? "Camminando lungo la costa, a sinistra il mare azzurro, a destra le case bianche in pietra. Il vento marino porta un leggero odore di sale, e vicino al monumento si può sentire occasionalmente Volare cantata da artisti di strada: la voce si fonde con le onde, creando la più bella romantica di Polignano a Mare."
                  : "漫步在海岸线，左手是湛蓝大海，右手是纯白石屋，海风裹挟着淡淡的海盐气息，途经纪念碑时偶尔能听到街头艺人弹唱《Volare》，歌声与海浪声交织，这便是滨海波利尼亚诺最动人的浪漫。"}
              </p>

              <h2>{isEnglish ? 'III. Old Town Walk: Centro Storico di Polignano a Mare' : isFrench ? 'III. Balade dans la vieille ville : Centro Storico di Polignano a Mare, voyage dans le temps des pierres millénaires' : isItalian ? 'III. Passeggiata nel centro storico: Centro Storico di Polignano a Mare, un viaggio nel tempo tra case di pietra millenarie' : '三、老城漫步：Centro Storico di Polignano a Mare，穿越千年的石屋时光'}</h2>
              <p>
                {isEnglish
                  ? "After the coastal tour, a 10-minute walk leads you into the Centro Storico di Polignano a Mare, the soul of the town, preserving its original medieval character with surprises around every corner."
                  : isFrench
                  ? "Après la visite du littoral, 10 minutes à pied suffisent pour rejoindre le Centro Storico, l’âme de la ville, qui a conservé son aspect médiéval. Chaque ruelle recèle une surprise."
                  : isItalian
                  ? "Dopo la costa, 10 minuti a piedi bastano per raggiungere il Centro Storico di Polignano a Mare, l’anima del borgo, che conserva l’aspetto originale dal Medioevo. Ogni vicolo nasconde una sorpresa."
                  : "海岸线游览结束后，步行 10 分钟即可进入 Centro Storico di Polignano a Mare（滨海波利尼亚诺老城区），这里是小镇的灵魂所在，保留着中世纪以来的原始风貌，每一条小巷都藏着惊喜。"}
              </p>
              
              <h3>{isEnglish ? '1. Old Town Highlights' : isFrench ? '1. Points forts du centre historique' : isItalian ? '1. Punti di forza del centro storico' : '1. 老城核心亮点'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Architecture:' : isFrench ? 'Architecture :' : isItalian ? 'Architettura:' : '建筑风貌：'}</strong> {isEnglish ? 'Built entirely of limestone, white houses climb the hills in a picturesque maze. Cobblestone lanes wind through the town, dotted with bright bougainvillea and blue-and-white windows, giving a fairytale Mediterranean vibe.' : isFrench ? 'Construit en calcaire, le quartier ancien est composé de maisons blanches édifiées sur les pentes, aux ruelles sinueuses et pavées. On a l’impression de remonter le temps jusqu’au Moyen Âge. Des bougainvillées colorées ornent les murs, associées à des fenêtres bleues et blanches : une ambiance méditerranéenne digne d’un conte de fées.' : isItalian ? 'Costruito in pietra calcarea, il centro storico è formato da case bianche arroccate sulla collina, vicoli tortuosi e pavimenti in pietrisco. Camminare qui è come tornare indietro nel tempo al Medioevo. Muri decorati con bouganvillea vivaci, finestre e porte bianche e blu creano un’atmosfera mediterranea da favola.' : '老城区由石灰岩建造而成，白色石屋依山而建，错落有致，小巷蜿蜒曲折，铺满碎石路面，漫步其中仿佛穿越回中世纪。墙面点缀着鲜艳的三角梅，搭配蓝白相间的门窗，充满地中海童话感。'}</li>
                <li><strong>{isEnglish ? 'Historic atmosphere:' : isFrench ? 'Ambiance historique :' : isItalian ? 'Atmosfera storica:' : '历史氛围：'}</strong> {isEnglish ? 'With a thousand years of history, you’ll find ancient arches, stone balconies, and vintage street lamps. It’s quiet and authentic, free from over-commercialization, letting you enjoy the slow local life.' : isFrench ? 'Avec ses arches anciennes, balcons en pierre et réverbères vintage, la vieille ville échappe au tumulte commercial excessif. On y sent la vie tranquille des habitants, calme et apaisante.' : isItalian ? 'Con antichi archi, balconi in pietra e lampade vintage, il centro storico è lontano dal caos commerciale eccessivo. Si respira solo la vita tranquilla degli abitanti, silenziosa e rilassante.' : '作为拥有千年历史的老城，这里随处可见古老的拱门、石砌阳台、复古路灯，没有过度商业化的喧嚣，只有当地居民的慢生活，安静又治愈。'}</li>
                <li><strong>{isEnglish ? 'Must-do experiences:' : isFrench ? 'Expériences à ne pas manquer :' : isItalian ? 'Esperienze imperdibili:' : '必体验：'}</strong> {isEnglish ? 'Wander into local craft shops for Puglia souvenirs like ceramics and lemon products; sit at a sidewalk café in the square, enjoy an espresso, and soak up the relaxed southern Italian lifestyle.' : isFrench ? 'Flâner dans les ruelles, découvrir des boutiques d’artisans avec des céramiques et des produits au citron typiques des Pouilles. S’asseoir dans un café en terrasse sur la place, boire un espresso et observer le soleil sur les murs de pierre.' : isItalian ? 'Perdersi tra i vicoli, scoprire botteghe artigianali con ceramiche e prodotti al limone tipici della Puglia. Sedersi al bar all’aperto nella piazza, bere un caffè espresso e guardare il sole sulle mura di pietra.' : '穿梭在小巷中，偶遇当地手工小店，可购买陶瓷饰品、柠檬制品等普利亚特色伴手礼；坐在老城广场的露天咖啡馆，点一杯意式浓缩，看阳光洒在石墙上，感受南意的慵懒时光。'}</li>
              </ul>
              
              <h3>{isEnglish ? '2. Practical Guide' : isFrench ? '2. Guide pratique' : isItalian ? '2. Guida pratica alla visita' : '2. 游览实用指南'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Address:' : isFrench ? 'Adresse :' : isItalian ? 'Indirizzo:' : '地址：'}</strong> {isEnglish ? '70044 Polignano a Mare, Metropolitan City of Bari, Italy' : isFrench ? '70044 Polignano a Mare, Ville métropolitaine de Bari, Italie' : isItalian ? '70044 Polignano a Mare, Città metropolitana di Bari, Italia' : '70044 Polignano a Mare, Metropolitan City of Bari, 意大利'}</li>
                <li><strong>{isEnglish ? 'Opening hours:' : isFrench ? 'Horaires :' : isItalian ? 'Orari:' : '开放时间：'}</strong> {isEnglish ? 'Open 24/7, free' : isFrench ? 'ouvert 24h/24, gratuit' : isItalian ? 'Aperto 24 ore su 24, ingresso gratuito' : '24 小时免费开放，全天可逛'}</li>
                <li><strong>{isEnglish ? 'Best way to visit:' : isFrench ? 'Meilleure façon de visiter :' : isItalian ? 'Modo migliore di visitare:' : '最佳玩法：'}</strong> {isEnglish ? 'Allow 1.5–2 hours; no fixed route needed — just wander freely. Wear comfortable flat shoes as some lanes are sloped.' : isFrench ? 'prévoir 1h30–2h, sans itinéraire précis : les découvertes se font au détour des ruelles, avec parfois des terrasses avec vue sur la mer. Certaines ruelles sont en pente : privilégiez des chaussures plates et confortables.' : isItalian ? 'Prenota 1,5–2 ore, senza itinerario fisso: passeggia liberamente, e ad ogni angolo troverai terrazze con vista sul mare. Alcuni vicoli sono in salita: indossa scarpe comode e basse.' : '预留 1.5-2 小时，无需刻意规划路线，随性漫步即可，转角总能遇到绝美海景露台；部分小巷有坡度，建议穿舒适的平底鞋。'}</li>
              </ul>
              <p>
                {isEnglish
                  ? "The old town is free from tourist crowds, offering peaceful time steeped in history. Here you can truly understand the authentic life and historic charm of Polignano a Mare."
                  : isFrench
                  ? "La vieille ville, loin des foules touristiques, dégage une quiétude issue du temps passé. C’est ici que l’on comprend vraiment l’esprit et l’histoire de Polignano a Mare."
                  : isItalian
                  ? "Il centro storico è privo di folle turistiche, solo la tranquillità del tempo passato. Qui si capisce veramente l’anima e la storia di Polignano a Mare, la dolcezza di questo borgo sulle scogliere."
                  : "老城区没有拥挤的游客，只有时光沉淀的静谧，在这里，你能真正读懂滨海波利尼亚诺的烟火气与历史感，感受这座悬崖小镇的温柔底蕴。"}
              </p>

              <h2>{isEnglish ? 'IV. Complete One-Day Itinerary' : isFrench ? 'IV. Itinéraire complet d’une journée' : isItalian ? 'IV. Itinerario completo di un giorno' : '四、一日游完整路线规划（精准贴合原文景点）'}</h2>
              <p>
                {isEnglish
                  ? "A seamless, relaxed route with no rushing:"
                  : isFrench
                  ? "(respectant strictement les sites) :"
                  : isItalian
                  ? "(aderente esatto ai luoghi descritti)"
                  : "为方便出行，将上述景点串联为无缝衔接的一日游路线，节奏舒缓，无需赶路，深度体验每一处风景："}
              </p>
              <ul>
                <li><strong>09:00-10:00</strong> {isEnglish ? 'Arrive at Monumento a Domenico Modugno, visit the statue and learn its story' : isFrench ? 'Arrivée au Monumento a Domenico Modugno, visite du monument et découverte de l’histoire de Volare' : isItalian ? 'Arrivo al Monumento a Domenico Modugno, foto e storia di Volare' : '抵达 Monumento a Domenico Modugno，打卡雕像，聆听《Volare》背后的故事'}</li>
                <li><strong>10:10-11:30</strong> {isEnglish ? 'Walk to Spiaggia di San Vito, beach walk and sunbathing' : isFrench ? 'Direction Spiaggia di San Vito, promenade sur la plage et bain de soleil' : isItalian ? 'Passeggiata alla Spiaggia di San Vito, relax al mare' : '漫步至 Spiaggia di San Vito，沙滩漫步、日光浴，感受海边惬意'}</li>
                <li><strong>11:40-13:00</strong> {isEnglish ? 'Head to Lama Monachile, take photos at the cliff viewpoint' : isFrench ? 'Visite de Lama Monachile, photos depuis le point de vue sur les falaises' : isItalian ? 'Visita a Lama Monachile, foto dal belvedere sulle scogliere' : '前往 Lama Monachile，悬崖观景台拍照，欣赏天然海湾美景'}</li>
                <li><strong>13:00-14:30</strong> {isEnglish ? 'Lunch near the old town: fresh seafood, pizza, lemon desserts' : isFrench ? 'Déjeuner dans le quartier de la vieille ville : fruits de mer, pizza et desserts au citron du sud de l’Italie' : isItalian ? 'Pranzo nel centro storico: frutti di mare, pizza e dolci al limone del sud Italia' : '老城区周边午餐，品尝南意海鲜、披萨、柠檬甜点'}</li>
                <li><strong>14:40-16:30</strong> {isEnglish ? 'Explore Centro Storico di Polignano a Mare, wander lanes and experience local life' : isFrench ? 'Balade dans le Centro Storico, exploration des ruelles et ambiance locale' : isItalian ? 'Esplorazione del Centro Storico, vicoli, case in pietra e vita locale' : '漫游 Centro Storico di Polignano a Mare，逛小巷、拍石屋、体验市井生活'}</li>
                <li><strong>16:40-18:00</strong> {isEnglish ? 'Return to the waterfront promenade, walk and watch the sunset' : isFrench ? 'Retour sur le front de Modugno, promenade au coucher du soleil' : isItalian ? 'Ritorno al lungomare del monumento, passeggiata al tramonto' : '返回纪念碑海滨大道，傍晚散步，等待夕阳落日'}</li>
                <li><strong>{isEnglish ? 'After 18:00' : isFrench ? 'Après 18h00' : isItalian ? 'Dopo le 18:00' : '18:00 后'}</strong> {isEnglish ? 'Dinner in the old town, end the perfect day' : isFrench ? 'Dîner dans la vieille ville, fin d’une journée parfaite' : isItalian ? 'Cena nel centro storico, fine di una giornata perfetta' : '老城区晚餐，结束完美一日'}</li>
              </ul>

              <h2>{isEnglish ? 'V. Food, Transport & Accommodation Guide' : isFrench ? 'V. Guide complet : gastronomie, transports et hébergement' : isItalian ? 'V. Guida completa: gastronomia, trasporti e alloggio' : '五、美食、交通、住宿全攻略'}</h2>
              
              <h3>{isEnglish ? '1. Taste of Southern Italy: Must-Try Local Food' : isFrench ? '1. Saveurs du sud de l’Italie : spécialités à goûter' : isItalian ? '1. Sapori del sud Italia: specialità da provare' : '1. 舌尖上的南意：必尝特色美食'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Puglia seafood:' : isFrench ? 'Fruits de mer des Pouilles :' : isItalian ? 'Frutti di mare pugliesi:' : '普利亚海鲜：'}</strong> {isEnglish ? 'Fresh fish, prawns, clams, served simply to preserve flavor — try seafood pasta or grilled seafood platters' : isFrench ? 'poissons frais, crevettes, palourdes, préparés simplement pour conserver leur saveur. À tester : pâtes aux fruits de mer, plateau de fruits de mer grillés.' : isItalian ? 'Pesce fresco, gamberi, vongole, preparati semplicemente per mantenere il sapore originale. Consigliati: pasta ai frutti di mare, grigliata mista di pesce.' : '小镇临海，新鲜海鱼、大虾、蛤蜊等海鲜做法简单，保留原汁原味，推荐尝试海鲜意面、烤海鲜拼盘'}</li>
                <li><strong>{isEnglish ? 'Lemon desserts:' : isFrench ? 'Desserts au citron :' : isItalian ? 'Dolci al limone:' : '柠檬甜品：'}</strong> {isEnglish ? 'Puglia is famous for lemons; lemon tarts, limoncello, lemon slushies are refreshing' : isFrench ? 'tarte au citron, limoncello, granité au citron, acidulés et rafraîchissants.' : isItalian ? 'La Puglia è ricca di limoni: crostata al limone, limoncello, granita al limone, aciduli e rinfrescanti.' : '普利亚盛产柠檬，柠檬挞、柠檬酒、柠檬冰沙酸甜清爽，是解暑神器'}</li>
                <li><strong>{isEnglish ? 'Italian pizza:' : isFrench ? 'Pizza italienne :' : isItalian ? 'Pizza italiana:' : '意式披萨：'}</strong> {isEnglish ? 'Thin, crispy crust with fresh tomato and mozzarella' : isFrench ? 'pâte fine et croustillante, tomates fraîches, mozzarella.' : isItalian ? 'Base sottile e croccante, pomodoro fresco, mozzarella di bufala.' : '薄底脆边，搭配新鲜番茄、马苏里拉芝士，地道又美味'}</li>
                <li><strong>{isEnglish ? 'Panzerotto:' : isFrench ? 'Panzerotto :' : isItalian ? 'Panzerotto:' : 'Panzerotto：'}</strong> {isEnglish ? 'Puglia-style fried turnover filled with tomato, cheese, and olives, crispy and affordable' : isFrench ? 'spécialité des Pouilles, chaussons frits fourrés à la tomate, fromage et olives, croustillants et savoureux, très bon rapport qualité-prix.' : isItalian ? 'Specialità pugliese, fritto ripieno di pomodoro, formaggio e olive, croccante e gustoso, ottimo rapporto qualità-prezzo.' : '普利亚特色炸饺，内馅为番茄、奶酪、橄榄，外皮酥脆，一口爆浆，性价比超高'}</li>
              </ul>
              
              <h3>{isEnglish ? '2. How to Get There' : isFrench ? '2. Transports : accès facile' : isItalian ? '2. Indicazioni sui trasporti' : '2. 交通指南：轻松抵达小镇'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'From outside:' : isFrench ? 'Depuis l’extérieur :' : isItalian ? 'Trasporti esterni:' : '外部交通：'}</strong> {isEnglish ? 'From Bari, train takes ~30 minutes (≈ €3, frequent departures); self-driving along the coastal road offers stunning sea views' : isFrench ? 'Depuis Bari, le train prend 30 minutes, billet environ 3 €, fréquences élevées. Possibilité aussi de venir en voiture, sur une route côtière à paysages exceptionnels.' : isItalian ? 'Da Bari, treno in 30 minuti, biglietto circa 3 euro, frequenze elevate. Possibile anche arrivare in auto, sulla strada costiera con paesaggi spettacolari.' : '从巴里（Bari）出发，火车仅需 30 分钟，票价约 3 欧元，班次密集；也可选择自驾，沿滨海公路行驶，沿途海景绝美。'}</li>
                <li><strong>{isEnglish ? 'Inside the town:' : isFrench ? 'Dans la ville :' : isItalian ? 'Trasporti interni:' : '内部交通：'}</strong> {isEnglish ? 'The town is compact; all main spots are within walking distance' : isFrench ? 'Polignano est petite, tous les sites principaux sont accessibles à pied.' : isItalian ? 'Il borgo è piccolo, tutti i luoghi principali sono raggiungibili a piedi.' : '小镇面积不大，核心景点全程步行即可，无需乘坐交通工具，步行途中能随时偶遇惊喜风景。'}</li>
              </ul>
              
              <h3>{isEnglish ? '3. Accommodation Suggestions' : isFrench ? '3. Hébergement' : isItalian ? '3. Consigli per l’alloggio' : '3. 住宿建议'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Cliffside sea-view hotels:' : isFrench ? 'Hôtels avec vue sur la mer et les falaises :' : isItalian ? 'Hotel sul mare con vista sulle scogliere:' : '悬崖海景酒店：'}</strong> {isEnglish ? 'For a luxury stay, with direct sea views and terraces overlooking Lama Monachile' : isFrench ? 'pour un budget confortable, chambres avec vue directe sur la mer, certaines avec terrasse surplombant Lama Monachile.' : isItalian ? 'Per budget più alto, camere con vista diretta sul mare, alcune con terrazza su Lama Monachile.' : '预算充足可选择悬崖边的海景酒店，推窗即见碧海蓝天，部分酒店自带露台，可俯瞰 Lama Monachile 海湾'}</li>
                <li><strong>{isEnglish ? 'Old town bed-and-breakfasts:' : isFrench ? 'Chambres d’hôtes dans la vieille ville :' : isItalian ? 'Bed & breakfast nel centro storico:' : '老城民宿：'}</strong> {isEnglish ? 'Great value, authentic stone-house stays within walking distance of all attractions' : isFrench ? 'bon rapport qualité-prix, immersion dans la vie locale, prix modérés, à proximité de tous les sites.' : isItalian ? 'Miglior rapporto qualità-prezzo, alloggio in case di pietra, immersione nella vita locale, prezzi contenuti, vicinissimo a tutti i luoghi.' : '性价比之选，住在老城区石屋民宿，沉浸式感受当地生活，价格适中，步行可达所有景点'}</li>
                <li><strong>{isEnglish ? 'Price reference:' : isFrench ? 'Tarifs indicatifs :' : isItalian ? 'Prezzi indicativi:' : '参考价位：'}</strong> {isEnglish ? 'High-season double room ~€100/night; B&B ~€80/night, much lower than northern Italy' : isFrench ? 'en haute saison, chambre double environ 100 €/nuit ; chambre d’hôtes environ 80 €/nuit, bien moins chers que dans les grandes villes du nord de l’Italie.' : isItalian ? 'In alta stagione, camera doppia circa 100 euro a notte; B&B circa 80 euro a notte, molto meno costoso delle grandi città del nord Italia.' : '旺季双人标准间约 100 欧元 / 晚，民宿约 80 欧元 / 晚，价格远低于意大利北部热门城市。'}</li>
              </ul>

              <h2>{isEnglish ? 'VI. Travel Tips' : isFrench ? 'VI. Petits conseils pratiques' : isItalian ? 'VI. Piccoli consigli per la visita' : '六、游览小贴士'}</h2>
              <ul>
                <li>{isEnglish ? 'Wear comfortable, non-slip shoes — rocks and cliffs are common along the coast' : isFrench ? 'Le littoral et les plages sont rocheux : portez des chaussures confortables et antidérapantes.' : isItalian ? 'La costa e le spiagge sono rocciose: indossa scarpe comode e antiscivolo per evitare graffi.' : '小镇海岸线及沙滩岩石较多，务必穿舒适防滑的鞋子，避免划伤'}</li>
                <li>{isEnglish ? 'Protect yourself from strong summer sun: sunscreen, hat, sunglasses' : isFrench ? 'En été, soleil intense : protégez-vous avec crème solaire, chapeau et lunettes.' : isItalian ? 'In estate il sole è forte: proteggiti con crema solare, cappello e occhiali da sole.' : '夏季阳光强烈，记得做好防晒，携带防晒霜、太阳帽、太阳镜'}</li>
                <li>{isEnglish ? 'All sites are open 24/7; you can adjust your schedule freely' : isFrench ? 'Le monument, la crique et la vieille ville sont ouverts 24h/24 : organisez votre visite librement.' : isItalian ? 'Monumento, cala e centro storico sono aperti 24 ore su 24: organizza liberamente la tua visita.' : '纪念碑、海湾、老城均 24 小时开放，可灵活调整游览时间'}</li>
                <li>{isEnglish ? 'Respect local culture; avoid disturbing residents; tip street performers if you enjoy their shows' : isFrench ? 'Respectez la culture locale : ne dérangez pas les habitants lors des prises de vue ; pensez à donner un pourboire aux artistes de rue.' : isItalian ? 'Rispetta la cultura locale: non disturbare gli abitanti quando scatti foto; lascia una piccola mancia agli artisti di strada.' : '尊重当地文化，拍照时不打扰当地居民，街头表演可适当打赏'}</li>
                <li>{isEnglish ? 'Italian lunch: 12:30–14:30; dinner starts after 19:30' : isFrench ? 'Les restaurants italiens servent le déjeuner généralement 12h30–14h30 et le dîner à partir de 19h30.' : isItalian ? 'Nei ristoranti italiani il pranzo è solitamente 12:30–14:30, la cena inizia dopo le 19:30.' : '意大利餐厅午餐时间多为 12:30-14:30，晚餐 19:30 后开始，可合理安排用餐时间'}</li>
              </ul>

              <h2>{isEnglish ? 'Conclusion' : isFrench ? 'Conclusion' : isItalian ? 'Conclusione' : '结语'}</h2>
              <p>
                {isEnglish
                  ? "Polignano a Mare is a town blessed by sunshine and sea. Starting from the Monumento a Domenico Modugno, you can wander beaches, discover hidden bays, and lose yourself in the old town — every step reveals the romance of southern Italy. Free from the noise of big cities, you’ll only hear the whisper of waves, the quiet of stone houses, and the romance of music. It’s a place to slow down and savor every moment."
                  : isFrench
                  ? "Polignano a Mare est une ville chérie par le soleil et la mer. Partant du Monumento a Domenico Modugno, entre plages, criques et vieille ville, chaque pas révèle la romance et la douceur du sud de l’Italie. Loin du tumulte des grandes villes, ici règnent le murmure des vagues, la quiétude des pierres et la musique romantique. Un lieu où l’on prend le temps de vivre."
                  : isItalian
                  ? "Polignano a Mare è un borgo amato dal sole e dal mare. Partendo dal Monumento a Domenico Modugno, tra spiagge, calette e centro storico, ogni passo rivela la romantica dolcezza del sud Italia. Lontano dal caos delle grandi città, qui regnano il sussurro delle onde, la tranquillità delle case di pietra e la musica romantica. Un luogo dove rallentare e vivere il tempo con il cuore."
                  : "滨海波利尼亚诺，是一座被阳光与大海偏爱的小镇。以 Monumento a Domenico Modugno 为起点，漫步沙滩、探秘海湾、漫游老城，每一步都能遇见南意的浪漫与温柔。这里没有大城市的喧嚣，只有海浪的低语、石屋的静谧、音乐的浪漫，适合放慢脚步，用心感受时光的缓慢流淌。"}
              </p>
              <p>
                {isEnglish
                  ? "In spring 2026, come to this cliffside town. In Modugno’s songs, between blue skies and turquoise sea, experience a poetic journey through southern Italy. This monument-centered one-day guide covers all attractions, scenery, food, and culture, helping you enjoy Polignano a Mare effortlessly and create unforgettable memories."
                  : isFrench
                  ? "Au printemps 2026, venez découvrir cette ville perchée sur les falaises, au son de Modugno, entre ciel et mer, pour un voyage poétique typiquement méditerranéen. Cet itinéraire d’une journée, centré sur le monument, couvre tous les sites essentiels, alliant paysages, gastronomie et culture, pour un séjour inoubliable à Polignano a Mare."
                  : isItalian
                  ? "Nella primavera del 2026, visita questo borgo sulle scogliere, tra le canzoni di Modugno, tra cielo e mare, per un viaggio poetico nel sud Italia. Questa guida di un giorno, centrata sul monumento, copre tutti i luoghi descritti, combinando paesaggi, gastronomia e cultura, per farti vivere Polignano a Mare in modo indimenticabile."
                  : "2026 年的春天，不妨踏上这座悬崖小镇，在莫杜尼奧的歌声里，在碧海蓝天之间，邂逅一场属于南意的诗意旅程。这份以纪念碑为核心的一日攻略，精准覆盖原文所有景点，兼顾风景、美食、文化，带你轻松玩转滨海波利尼亚诺，留下难忘的旅行记忆。"}
              </p>
              <p className="text-sm italic text-slate-500 mt-8">
                {isEnglish
                  ? "This website contains affiliate links to Trip.com. Prices are identical to official channels with no extra cost to you. Your support helps us keep updating more useful travel guides."
                  : isFrench
                  ? "Certains liens de ce site sont des liens affiliés Trip.com. Les prix de réservation sont identiques à ceux officiels, sans frais supplémentaires pour vous. Votre soutien nous permet de continuer à publier des guides de voyage pratiques."
                  : isItalian
                  ? "Alcuni link di questo sito sono affiliati a Trip.com. I prezzi di prenotazione sono identici a quelli ufficiali, senza costi aggiuntivi per te. Il tuo sostegno ci permette di aggiornare costantemente guide di viaggio utili."
                  : "本站部分連結為 Trip.com 聯盟連結，點擊預訂的價格與官方完全一致，不會對您產生任何額外費用，您的支持將能讓我們持續更新更多實用的旅行攻略。"}
              </p>
            </div>

            {/* Post Footer (Tags & Share) */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                {['Travel', 'Polignano', 'Italy', 'Guide'].map(tag => (
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
                {isEnglish ? 'Back to blog' : isFrench ? 'Retour aux articles' : isItalian ? 'Torna agli articoli' : '返回部落格列表'}
              </a>
            </div>
          </article>

          {/* Right Column: Sidebar (Recommendations) */}
          <aside className="lg:w-1/3 w-full">
            <div className="sticky top-24 space-y-8">
              
              {/* Author Bio */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a54] text-white flex items-center justify-center font-bold text-xl">
                    W
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg leading-tight">Winter Grady</h4>
                    <p className="text-xs text-slate-500">{isEnglish ? 'Travel & Culture Editor' : isFrench ? 'Rédacteur de voyages et culture' : isItalian ? 'Redattore di Viaggi e Cultura' : 'Travel & Culture Editor'}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {isEnglish 
                    ? "A travel writer passionate about exploring the charm of southern Italy, dedicated to uncovering the history, culture, and hidden beauties of Apulia." 
                    : isFrench
                    ? "Écrivain de voyage passionné par l'exploration du charme du sud de l'Italie, spécialisé dans la découverte de l'histoire, de la culture et des beautés cachées des Pouilles."
                    : isItalian
                    ? "Scrittore di viaggi appassionato di esplorare il fascino del sud Italia, concentrato sulla scoperta della storia, della cultura e delle bellezze nascoste della Puglia."
                    : "熱愛探索南意風情的旅行作家，專注於發掘普利亞大區的歷史、文化與隱秘美景。"}
                </p>
              </div>

              {/* TRAVEL RECOMMENDATION MODULE */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="font-display text-xl font-semibold text-[#1e3a54] dark:text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#f0b429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {isEnglish ? 'Nearby Travel Recommendations' : isFrench ? 'Recommandations de voyage' : isItalian ? 'Raccomandazioni di viaggio' : '附近旅遊推薦'}
                </h3>
                <div className="space-y-5">
                  {/* Rec Item 1 */}
                  <a href="https://www.trip.com/t/MyfkYfsEEU2" target="_blank" rel="noopener noreferrer" className="group flex gap-4 items-center">
                    <img src="https://images.unsplash.com/photo-1516483638261-f40af5ff1f25?auto=format&fit=crop&w=150&q=80" alt="Cave Tour" className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-[#f0b429] transition-colors leading-tight mb-1">
                        {isEnglish ? 'Eco Boat Tour and Cave Exploration' : isFrench ? 'Excursion écologique en bateau et grottes' : isItalian ? 'Tour ecologico in barca ed esplorazione delle grotte' : '生態遊船與洞穴探索'}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isEnglish ? 'Explore stunning sea caves by boat and experience snorkeling in crystal-clear waters.' : isFrench ? 'Explorez d’incroyables grottes marines en bateau et faites de la plongée avec tuba.' : isItalian ? 'Esplora in barca le incredibili grotte marine e vivi lo snorkeling in acque cristalline.' : '乘船探索令人驚嘆的海蝕洞，體驗清澈海水中的浮潛。'}
                      </p>
                    </div>
                  </a>
                  
                  {/* Rec Item 2 */}
                  <a href="https://www.trip.com/t/xcWHkMbFEU2" target="_blank" rel="noopener noreferrer" className="group flex gap-4 items-center">
                    <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=150&q=80" alt="Museum" className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-[#f0b429] transition-colors leading-tight mb-1">
                        {isEnglish ? 'Local Museums and Art' : isFrench ? 'Musées locaux et art' : isItalian ? 'Musei e arte locali' : '當地博物館與藝術'}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isEnglish ? 'Discover the rich historical heritage and contemporary art exhibitions in the surrounding area.' : isFrench ? 'Découvrez le riche patrimoine historique et les expositions d’art contemporain.' : isItalian ? "Esplora il ricco patrimonio storico e le mostre d'arte contemporanea nei dintorni." : '探索周邊地區豐富的歷史遺產和當代藝術展覽。'}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
                  <a href="#" className="text-sm text-[#1e3a54] dark:text-[#f0b429] hover:underline font-medium">
                    {isEnglish ? 'See all activities →' : isFrench ? 'Voir toutes les activités →' : isItalian ? 'Vedi tutte le attività →' : '查看所有活動 →'}
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
