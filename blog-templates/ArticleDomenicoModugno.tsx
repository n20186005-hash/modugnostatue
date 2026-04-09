import React from 'react';

/**
 * Single Post Content: 海风与歌声的永恒回响 —— 多梅尼科・莫杜尼奥雕像全览
 */
export default function BlogPostDomenicoModugno() {
  const locale = 'en' as string; // 'en', 'it', 'fr', 'zh'
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
            src="https://images.unsplash.com/photo-1555554162-88b9015c7b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Polignano a Mare Monumento a Domenico Modugno"
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
              ? 'Sea Breeze and the Eternal Echo of Song — A Complete Guide to the Statue of Domenico Modugno'
              : isFrench
              ? 'Vent marin et écho éternel du chant – Vue complète de la Statue de Domenico Modugno'
              : isItalian 
              ? 'Vento del mare e eco eterno del canto – Visione completa della Statua di Domenico Modugno'
              : '海风与歌声的永恒回响 —— 多梅尼科・莫杜尼奥雕像全览'}
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
              10 min read
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
                  ? "On the Adriatic coast of Apulia in southern Italy, perched on a cliff, the whitewashed town of Polignano a Mare boasts blue skies and white stone alleys as its backdrop. It is the birthplace of a legend in Italian music history — Domenico Modugno. To honor this local artist who conquered the world with his voice, the town erected the Monumento a Domenico Modugno at the heart of its waterfront promenade. This bronze statue is not only a cultural landmark of the town but also a spiritual bond connecting music, homeland, and visitors, making it an unmissable soulful attraction for every traveler."
                  : isFrench
                  ? "Sur la côte adriatique des Pouilles, dans le sud de l’Italie, perché sur une falaise, le petit village blanc de Polignano a Mare offre un décor de ciel azur et de ruelles de pierre blanche. C’est ici qu’est né une légende de l’histoire musicale italienne : Domenico Modugno. Pour rendre hommage à cet artiste local qui a conquis le monde avec sa voix, la commune a érigé le Monumento a Domenico Modugno au cœur du front de mer. Cette statue en bronze n’est pas seulement un repère culturel du village, mais aussi un lien spirituel entre musique, terre natale et visiteurs, devenant un lieu incontournable pour quiconque s’y rend."
                  : isItalian
                  ? "Sulla costa adriatica della Puglia, nel sud Italia, sorge Polignano a Mare, una cittadina bianca arroccata su una scogliera. Con il mare azzurro e il cielo limpido come sfondo, e vicoli di pietra e case imbiancate come scenario, ha dato i natali a una leggenda della storia musicale italiana: Domenico Modugno. Per omaggiare questo artista locale che ha conquistato il mondo con la sua voce, la cittadina ha eretto il Monumento a Domenico Modugno nel cuore del lungomare. Questa statua in bronzo non è solo un punto di riferimento culturale del borgo, ma anche un legame spirituale che unisce musica, terra natia e visitatori, diventando una tappa imprescindibile per chiunque giunga in questo luogo."
                  : "在意大利南部普利亚大区的亚得里亚海岸，一座悬崖之上的白色小镇波利尼亚诺阿马雷（Polignano a Mare），以碧海蓝天为幕、白墙石巷为景，孕育了意大利音乐史上的传奇人物 —— 多梅尼科・莫杜尼奥（Domenico Modugno）。为致敬这位用歌声征服世界的本土艺术家，小镇在滨海步道核心位置矗立起 Monumento a Domenico Modugno（多梅尼科・莫杜尼奥纪念碑），这座青铜雕像不仅是小镇的文化地标，更是连接音乐、故土与游客的精神纽带，成为每一位到访者不可错过的灵魂景点。"}
              </p>

              <h2>{isEnglish ? 'I. The Birth of the Statue: A Timeless Tribute from His Homeland to a Legend' : isFrench ? 'I. Naissance de la statue : hommage éternel de la terre natale à une légende' : isItalian ? 'I. La nascita della statua: un omaggio eterno della terra natia alla leggenda' : '一、雕像诞生：故土对传奇的永恒致敬'}</h2>
              <p>
                {isEnglish
                  ? "Domenico Modugno was born on January 9, 1928, in Polignano a Mare. Surrounded by white limestone cliffs and crystal-clear waters like gemstones, the town gifted him endless creative inspiration. He was Italy’s first globally renowned singer-songwriter, excelling as a vocalist, composer, lyricist, and actor. Throughout his life, he wrote nearly 230 songs, appeared in over 40 films and TV productions, and even ventured into politics, crafting a legendary career in Italy’s artistic scene."
                  : isFrench
                  ? "Domenico Modugno est né le 9 janvier 1928 à Polignano a Mare. Ce village entouré de falaises de calcaire blanc et aux eaux cristallines comme des pierres précieuses lui a inspiré une création infinie. Premier chanteur-compositeur italien à connaître une renommée mondiale, il était à la fois interprète, compositeur, parolier et acteur. Au cours de sa vie, il a signé près de 230 chansons, joué dans plus de 40 films et s’est également engagé en politique, écrivant une histoire légendaire dans le paysage artistique italien."
                  : isItalian
                  ? "Domenico Modugno nacque a Polignano a Mare il 9 gennaio 1928. Questa cittadina circondata da scogliere di calcare bianco e acque cristalline come gemme gli regalò un’ispirazione infinita. Fu il primo cantautore italiano a ottenere fama mondiale, poliedrico interprete, compositore, paroliere e attore. Durante la sua vita creò quasi 230 brani, recitò in oltre 40 film e si dedicò anche alla politica, scrivendo una pagina leggendaria nel panorama artistico italiano con la sua identità poliedrica."
                  : "多梅尼科・莫杜尼奥 1928 年 1 月 9 日出生于波利尼亚诺阿马雷，这座被白色石灰岩悬崖环抱、海水澄澈如宝石的小镇，赋予了他无尽的创作灵感。他是意大利首位享誉全球的创作歌手，集演唱、作曲、作词、表演于一身，一生创作近 230 首歌曲，参演 40 余部影视作品，更跨界投身政坛，用多元身份书写了意大利艺术界的传奇篇章。"}
              </p>
              <p>
                {isEnglish
                  ? "In 1958, Modugno took the world by storm with Nel blu dipinto di blu, better known as Volare (“To Fly”). Light, romantic, and full of freedom, the song topped music charts worldwide and won two awards at the very first Grammy Awards: Record of the Year and Song of the Year. It became an iconic work that introduced Italian music to the globe and remains one of the most widely sung Italian classics today. The lyrics’ longing for blue skies and the sea are his most sincere tribute to his hometown Polignano a Mare. Images of sea breeze, cliffs, and turquoise waters have woven themselves into every note of the song."
                  : isFrench
                  ? "En 1958, Modugno éblouit le monde avec Nel blu dipinto di blu, plus connu sous le nom de Volare. Cette chanson légère, pleine de romantisme et de liberté a dominé les classements musicaux du monde entier, remportant deux Grammy Awards lors de la première cérémonie : Record of the Year et Song of the Year. Elle est devenue un symbole de la musique italienne à l’international et reste aujourd’hui l’une des chansons italiennes les plus connues au monde. Les paroles évoquant le ciel et la mer sont une déclaration d’amour sincère à son Polignano a Mare : les images de vent marin, de falaises et de mer azurée ont imprégné chaque note de la chanson."
                  : isItalian
                  ? "Nel 1958, Modugno stupì il mondo con Nel blu dipinto di blu, più conosciuto come Volare. Questo brano leggero, romantico e libero dominò le classifiche musicali di tutto il pianeta, vincendo due premi ai primi Grammy Awards: Record of the Year e Song of the Year. È diventato un’icona della musica italiana nel mondo e rimane oggi una delle canzoni italiane più conosciute e cantate a livello globale. I versi che evocano il cielo e il mare sono la più sincera dichiarazione d’amore alla sua Polignano a Mare: immagini di vento marino, scogliere e mare cristallino si sono insinuate in ogni nota della canzone."
                  : "1958 年，莫杜尼奥凭借《Nel blu dipinto di blu》（更广为人知的名字是《Volare》，意为 “飞翔”）惊艳世界。这首旋律轻快、充满浪漫与自由气息的歌曲，横扫全球音乐榜单，斩获首届格莱美奖 “年度制作” 与 “年度歌曲” 两项大奖，成为意大利音乐走向世界的标志性作品，至今仍是全球传唱度最高的意大利经典歌曲之一。歌词中对蓝天、大海的向往，正是他对故乡波利尼亚诺阿马雷最真挚的告白，海风、悬崖、碧海的意象，早已融入歌曲的每一个音符。"}
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

              <p>
                {isEnglish
                  ? "To commemorate the artist who put the town on the world map, the bronze statue created by Argentine sculptor Hermann Mejer was officially unveiled on May 31, 2009. Managed and maintained directly by the Municipality of Polignano a Mare, it is permanently open to the public as part of the town’s public cultural heritage. Standing approximately 3 meters tall, the statue faithfully captures Modugno’s iconic stage moment — arms outstretched, posture upright, as if immersed in performing Volare. Facing the sea and his homeland in an embracing gesture, it perfectly embodies the song’s spirit of “flying free” and reflects the deep admiration the town’s residents hold for this local legend."
                  : isFrench
                  ? "Pour honorer l’artiste qui a fait connaître le village dans le monde entier, la statue en bronze créée par le sculpteur argentin Hermann Mejer a été inaugurée officiellement le 31 mai 2009. Gérée et entretenue directement par la municipalité de Polignano a Mare, elle est ouverte au public en permanence en tant que patrimoine culturel public. Haute d’environ 3 mètres, la statue restitue fidèlement l’instant iconique de Modugno sur scène : bras écartés, silhouette dynamique, comme plongé dans l’interprétation de Volare. Face à la mer et à sa terre, dans une posture d’étreinte, elle incarne parfaitement l’esprit de « vol libre » de la chanson et exprime le profond respect des habitants pour cette légende locale."
                  : isItalian
                  ? "Per ricordare l’artista che ha messo la cittadina sulla mappa del mondo, il 31 maggio 2009 fu inaugurata ufficialmente la statua in bronzo creata dallo scultore argentino Hermann Mejer. Gestita e mantenuta direttamente dal Comune di Polignano a Mare, è aperta al pubblico permanentemente come patrimonio culturale pubblico. Alta circa 3 metri, la statua riproduce fedelmente l’immagine iconica di Modugno sul palco: braccia aperte, figura eretta, come se fosse immerso nell’interpretazione di Volare. Con un gesto di abbraccio rivolto al mare e alla sua terra, incarna perfettamente lo spirito di libertà e volo del brano, e racchiude l’infinito rispetto dei polignanesi per questa leggenda del luogo."
                  : "为铭记这位让小镇走向世界的艺术家，2009 年 5 月 31 日，由阿根廷雕塑家赫尔曼・迈耶（Hermann Mejer）创作的青铜雕像正式落成，由波利尼亚诺阿马雷市政府直接管理维护，作为小镇公共文化遗产永久对外开放。雕像高约 3 米，精准还原了莫杜尼奥在舞台上的经典瞬间 —— 双臂舒展、身姿昂扬，仿佛正沉浸在《Volare》的演唱中，以拥抱的姿态面向大海与故乡，完美诠释了歌曲中 “自由飞翔” 的内核，也寄托了小镇居民对这位本土传奇的无限敬意。"}
              </p>

              <h2>{isEnglish ? 'II. Key Highlights: More Than a Statue, a Fusion of Culture and Scenery' : isFrench ? 'II. Points forts : bien plus qu’une statue, une fusion entre culture et paysage' : isItalian ? 'II. Punti di forza: non solo una statua, ma un incontro tra cultura e paesaggio' : '二、核心亮点：不止是雕像，更是文化与风景的交融'}</h2>
              
              <h3>{isEnglish ? '1. Artistic Aesthetics: A Masterfully Carved Spiritual Symbol' : isFrench ? '1. Esthétique artistique : un symbole spirituel sculpté avec maestria' : isItalian ? '1. Estetica artistica: un simbolo spirituale scolpito con maestria' : '（一）艺术美学：匠心雕琢的精神符号'}</h3>
              <p>
                {isEnglish
                  ? "Cast in bronze, the statue retains a solid, imposing texture despite the passage of time, with highly expressive details. Sculptor Hermann Mejer rejected rigid, formal memorial styles and focused on the artist’s most soulful stage instant: upright posture, arms naturally spread to the sides, palms slightly raised, head tilted gently toward the sea, gaze filled with devotion to his homeland and passion for art. The folds of his clothing are carved with fluid dynamism, as if the sea breeze is gently blowing through his garments, blending seamlessly with the Adriatic Sea behind him."
                  : isFrench
                  ? "Réalisée en bronze, la statue de Modugno conserve une présence imposante malgré le temps, avec des détails pleins d’expression. Le sculpteur Hermann Mejer a abandonné les formes rigides des monuments commémoratifs pour capturer l’instant le plus vivant de l’artiste sur scène : silhouette droite, bras ouverts naturellement, paumes légèrement relevées, tête légèrement inclinée vers la mer, regard empreint d’attachement à sa terre et de passion pour l’art. Les plis des vêtements sont sculptés avec fluidité et dynamisme, comme si le vent marin caressait le tissu, se fondant parfaitement avec la mer Adriatique derrière elle."
                  : isItalian
                  ? "Realizzata in bronzo, la statua di Modugno conserva una consistenza imponente nonostante il passare del tempo, con dettagli carichi di espressività. Lo scultore Hermann Mejer abbandonò i canoni statici dei monumenti commemorativi per concentrarsi sull’istante più animo dell’artista sul palco: figura diritta, braccia aperte naturalmente ai lati, palmi leggermente rivolti verso l’alto, testa leggermente inclinata verso il mare, sguardo pieno di affetto per la terra natia e passione per l’arte. Le pieghe degli abiti sono scolpite con fluidità e dinamismo, come se il vento del mare accarezzasse i vestiti, fondendosi perfettamente con il mare Adriatico alle spalle."
                  : "莫杜尼奥雕像采用青铜铸造，历经岁月洗礼仍质感厚重，细节刻画极具感染力。雕塑家赫尔曼・迈耶摒弃了刻板的纪念式造型，聚焦艺术家最具灵魂的舞台瞬间：雕像身姿挺拔，双臂向两侧自然张开，手掌微扬，头部微微上扬望向海面，眼神中满是对故乡的眷恋与对艺术的热忱。衣物褶皱的雕刻流畅自然，动态感十足，仿佛海风正轻轻拂过衣摆，与身后的亚得里亚海融为一体。"}
              </p>
              <p>
                {isEnglish
                  ? "This “outstretched arms” pose was Modugno’s signature during his performance of Volare at the 1958 Sanremo Music Festival, carrying multiple meanings: a loving embrace of his hometown, boundless love for the world of music, and relentless pursuit of freedom and beauty. Anyone standing before the statue can feel the artist’s timeless spiritual power and understand the romance and sincerity behind Volare."
                  : isFrench
                  ? "Cette posture « bras écartés » est celle de Modugno lors de son interprétation de Volare au Festival de Sanremo 1958. Elle porte plusieurs significations : étreinte tendre à sa terre natale, amour infini pour le monde de la musique, recherche constante de liberté et de beauté. Quiconque se tient devant la statue ressent la force spirituelle de l’artiste à travers le temps et comprend le romantisme et la sincérité derrière Volare."
                  : isItalian
                  ? "Questa posa «braccia aperte» è il gesto iconico di Modugno durante l’interpretazione di Volare al Festival di Sanremo 1958, e racchiude molteplici significati: l’abbraccio affettuoso alla terra natia, l’amore illimitato per il mondo della musica, la ricerca tenace della libertà e della bellezza. Chiunque si trovi davanti alla statua può percepire la forza spirituale dell’artista che attraversa il tempo e capire il romanticismo e la sincerità dietro Volare."
                  : "这种 “张开双臂” 的造型，既是莫杜尼奥 1958 年圣雷莫音乐节上演唱《Volare》的经典姿态，更承载着多重寓意：对故乡的深情拥抱、对音乐世界的无限热爱、对自由与美好的执着追求。每一位站在雕像前的游客，都能透过这一姿态，感受到艺术家跨越时空的精神力量，读懂《Volare》背后的浪漫与赤诚。"}
              </p>

              <h3>{isEnglish ? '2. Location: A Stunning Viewpoint on the Cliffside Coast' : isFrench ? '2. Situation géographique : un point de vue exceptionnel sur la côte escarpée' : isItalian ? '2. Posizione: un terrazzo panoramico eccezionale sulla costa a picco sul mare' : '（二）地理位置：悬崖海岸的绝佳观景台'}</h3>
              <p>
                {isEnglish
                  ? "The statue sits on the Lungomare Domenico Modugno, 70044 Polignano a Mare (BA), at the town’s most breathtaking panoramic spot. Behind it lie medieval-style white stone houses; in front, the crystal-clear Adriatic Sea stretches out. To the left is the famous Lama Monachile Beach, and to the right, visitors overlook steep cliffs and natural sea caves. In the distance, sky and sea merge; nearby, waves gently lap against the rocks — the perfect place to watch sunsets, enjoy sea views, and take in the entire town."
                  : isFrench
                  ? "La statue se situe sur le Lungomare Domenico Modugno, 70044 Polignano a Mare (BA), à l’endroit offrant la vue la plus spectaculaire sur le village. Derrière elle, des maisons blanches de style médiéval ; devant elle, la mer Adriatique cristalline ; à gauche, la plage emblématique de Lama Monachile ; à droite, des falaises abruptes et des grottes marines naturelles. Au loin, ciel et mer ne font qu’un ; près d’ici, les vagues caressent les rochers : c’est le lieu idéal pour admirer le coucher de soleil, la mer et tout le village."
                  : isItalian
                  ? "La statua si trova sul Lungomare Domenico Modugno, 70044 Polignano a Mare (BA), nel punto con la vista più spettacolare sulla cittadina. Alle spalle le case bianche in stile medievale, di fronte il cristallino mare Adriatico, a sinistra la spiaggia iconica di Lama Monachile, a destra si dominano le scogliere a picco e le grotte marine naturali. In lontananza cielo e mare si fondono, vicino le onde accarezzano le rocce: è il luogo ideale per ammirare il tramonto, il paesaggio marino e l’intera cittadina."
                  : "雕像坐落于 Lungomare Domenico Modugno（多梅尼科・莫杜尼奥滨海步道），地址为 70044 Polignano a Mare BA，是小镇全景视野最震撼的核心位置。这里背靠中世纪风格的白色石屋，面朝澄澈碧蓝的亚得里亚海，左侧是网红打卡地拉玛莫纳基莱海滩（Lama Monachile），右侧可俯瞰悬崖峭壁与天然海蚀洞，远处海天一色，近处海浪轻拍礁石，是欣赏日落、海景与小镇全貌的不二之选。"}
              </p>
              <p>
                {isEnglish
                  ? "Unlike ordinary memorial statues, Modugno’s monument exists in perfect harmony with nature: by day, sunlight glints off the bronze, creating warm reflections that form a stunning picture of southern Italian charm alongside the blue sea and white walls; at sunset, the sky and sea turn golden-red, framing the statue in twilight glow, and the salty sea breeze seems to carry the melody of Volare; at night, waterfront lights illuminate the statue, giving it a gentle warmth that makes it the most touching cultural landmark in the town’s evening scenery."
                  : isFrench
                  ? "Contrairement aux monuments commémoratifs classiques, la statue de Modugno vit en symbiose avec la nature : le jour, le soleil brille sur le bronze et crée des reflets chauds, formant un tableau magnifique avec la mer azurée et les murs blancs des Pouilles ; le soir, le soleil rouge dore la mer, le profil de la statue est dessiné par la lumière crépusculaire, et le vent salé de la mer semble faire résonner Volare ; la nuit, les lumières du front de mer s’allument, la statue prend une douceur chaleureuse et devient le repère culturel le plus émouvant du village."
                  : isItalian
                  ? "A differenza di comuni monumenti commemorativi, la statua di Modugno vive in simbiosi con la natura: di giorno, il sole splende sul bronzo creando riflessi caldi, componendo un quadro stupendo con il mare azzurro e le mura bianche della Puglia; alla sera, il sole rosso infuoca il mare, la sagoma della statua è contornata dal crepuscolo, e il vento salmastro del mare sembra portare l’eco di Volare; di notte, le luci del lungomare si accendono, rendendo la statua più dolce nel bagliore caldo, diventando il punto culturale più suggestivo del paesaggio notturno della cittadina."
                  : "不同于普通纪念雕像，莫杜尼奥雕像与自然风景完美共生：白天，阳光洒在青铜雕像上，折射出温暖的光泽，与碧海白墙构成一幅绝美的南意风情画；傍晚，夕阳将海面染成金红色，雕像的轮廓被霞光勾勒，海风裹挟着咸湿的气息，仿佛能听见《Volare》的旋律在耳畔回响；夜晚，滨海步道的灯光亮起，雕像在暖光中更显温柔，成为小镇夜色中最动人的文化坐标。"}
              </p>

              <h3>{isEnglish ? '3. Free Admission: A 24/7 Cultural Feast' : isFrench ? '3. Entrée gratuite : un festin culturel ouvert 24h/24' : isItalian ? '3. Ingresso gratuito: una festa culturale aperta 24 ore su 24' : '（三）免费开放：24 小时不打烊的文化盛宴'}</h3>
              <p>
                {isEnglish
                  ? "As public cultural heritage, the statue is open year-round, 24 hours a day, completely free of charge. No tickets or reservations are required; visitors can come anytime to explore, take photos, or sit and reflect. This barrier-free access makes art accessible to all — morning strolling locals, afternoon tourists, and late-night travelers enjoying the sea breeze can all connect with this cultural legacy, truly realizing “art in everyday life.”"
                  : isFrench
                  ? "En tant que patrimoine culturel public du village, la statue de Domenico Modugno est ouverte toute l’année, 24h/24 et gratuitement, sans billet ni réservation. Les visiteurs peuvent venir à tout moment visiter, prendre des photos, s’asseoir et réfléchir. Ce accès sans barrières rend l’art accessible à tous : habitants qui se promènent le matin, touristes l’après-midi, voyageurs qui respirent le vent de la mer la nuit peuvent tous approcher ce patrimoine culturel, réalisant véritablement « l’art dans la vie quotidienne »."
                  : isItalian
                  ? "Essendo patrimonio culturale pubblico della cittadina, la statua di Domenico Modugno è aperta tutto l’anno, 24 ore su 24 e gratuitamente, senza biglietti o prenotazioni. I visitatori possono arrivare in qualsiasi momento per visitare, scattare foto, sostare e riflettere. Questa modalità di accesso senza barriere rende l’art accessibile a tutti: residenti che passeggiano al mattino, turisti che visitano nel pomeriggio, viaggiatori che respirano il mare di notte possono tutti avvicinarsi a questa eredità culturale, realizzando veramente l’«arte nella vita quotidiana»."
                  : "作为小镇公共文化遗产，莫杜尼奥雕像全年无休、24 小时免费开放，无需购票、无需预约，游客可随时前来参观、打卡、静坐沉思。这种零门槛的开放模式，让艺术不再高高在上，无论是清晨漫步的当地居民、午后打卡的游客，还是深夜感受海风的旅人，都能近距离触摸这份文化传承，真正实现 “艺术融入生活”。"}
              </p>
              <p>
                {isEnglish
                  ? "For photography lovers, it is a perfect shooting location: with the statue in the foreground, paired with cliffs, blue sea, and white houses, stunningly romantic shots of southern Italy can be taken without filters. Mimicking the statue’s outstretched arms for a photo creates a timeless connection with the legendary singer, capturing one’s own Italian travel memory."
                  : isFrench
                  ? "Pour les amateurs de photographie, c’est un lieu exceptionnel : avec la statue au premier plan, associée aux falaises, à la mer azurée et aux maisons blanches, il suffit d’un clic pour obtenir des clichés pleins du romantisme du sud de l’Italie, sans filtre. Imiter la posture bras écartés de la statue pour une photo permet de créer un lien imaginaire avec le chanteur légendaire et de figer son souvenir de voyage en Italie."
                  : isItalian
                  ? "Per gli amanti della fotografia, è un luogo perfetto per scatti: con la statua in primo piano, accostata a scogliere, mare azzurro e case bianche, basta un click per ottenere immagini piene del romanticismo del sud Italia, senza filtri. Riprodurre la posa a braccia aperte della statua per una foto significa creare un legame ideale con il cantante leggendario, fissando il proprio ricordo di viaggio in Italia."
                  : "对于摄影爱好者而言，这里更是出片圣地：以雕像为前景，搭配悬崖、碧海、白屋，无需滤镜就能拍出充满南意浪漫的大片；模仿雕像张开双臂的姿势合影，仿佛与传奇歌手隔空共鸣，定格属于自己的意大利旅行记忆。"}
              </p>

              <h3>{isEnglish ? '4. Cultural Core: The Spiritual Center of the Town’s Musical Heritage' : isFrench ? '4. Cœur culturel : centre spirituel de la tradition musicale du village' : isItalian ? '4. Cuore culturale: centro spirituale della tradizione musicale della cittadina' : '（四）文化核心：小镇音乐传承的精神中心'}</h3>
              <p>
                {isEnglish
                  ? "The statue is more than a memorial — it is the heart of cultural activities in Polignano a Mare, tasked with preserving local music and promoting artistic spirit. Each year, the town hosts various commemorative events and music festivals around the statue to honor Modugno’s musical legacy:"
                  : isFrench
                  ? "La statue de Modugno n’est pas seulement un édifice commémoratif, mais le cœur des activités culturelles de Polignano a Mare, avec pour mission de transmettre la musique locale et de promouvoir l’esprit artistique. Chaque année, la commune organise de nombreux événements commémoratifs et festivals musicaux autour de la statue pour honorer l’héritage musical de Modugno :"
                  : isItalian
                  ? "La statua di Modugno non è solo un edificio commemorativo, ma il cuore delle attività culturali di Polignano a Mare, con la missione di tramandare la musica locale e promuovere lo spirito artistico. Ogni anno, la cittadina organizza numerosi eventi commemorativi e festival musicali attorno alla statua per onorare l’eredità musicale di Modugno:"
                  : "莫杜尼奥雕像不仅是一座纪念建筑，更是波利尼亚诺阿马雷的文化活动核心，承载着传承本土音乐、弘扬艺术精神的重要使命。每年，小镇都会围绕雕像举办各类纪念活动与音乐庆典，致敬莫杜尼奥的音乐遗产："}
              </p>
              <ul>
                <li><strong>{isEnglish ? 'Volare Memorial Singing' : isFrench ? 'Événement commémoratif de Volare' : isItalian ? 'Evento commemorativo di Volare' : '《Volare》纪念演唱活动'}</strong>：{isEnglish ? "Every summer, local musicians and visitors gather in front of the statue to sing Volare together, their voices blending with the waves in the town’s most moving musical celebration;" : isFrench ? "chaque été, musiciens locaux et touristes se rassemblent devant la statue pour chanter Volare en chœur, les voix se mêlant aux vagues pour un des plus beaux spectacles musicaux du village ;" : isItalian ? "ogni estate, musicisti locali e turisti si riuniscono davanti alla statua per cantare insieme Volare, unendo le voci al rumore delle onde in una delle feste musicali più emozionanti della cittadina;" : "每年夏季，当地音乐人、游客齐聚雕像前，共同合唱《Volare》，歌声与海浪声交织，成为小镇最动人的音乐盛宴；"}</li>
                <li><strong>{isEnglish ? 'Modugno Festival Events' : isFrench ? 'Rendez-vous du Festival Modugno' : isItalian ? 'Appuntamenti del Festival Modugno' : '莫杜尼奥音乐节点'}</strong>：{isEnglish ? "Original music concerts, art exhibitions, and themed lectures featuring famous Italian singers and artists, drawing music lovers from around the world and enriching local cultural life;" : isFrench ? "concerts de musique originale, expositions artistiques, conférences thématiques avec des chanteurs et musiciens italiens renommés, attirant des amateurs de musique du monde entier et enrichissant la vie culturelle locale ;" : isItalian ? "concerti di musica originale, mostre artistiche, conferenze tematiche con la partecipazione di cantanti e musicisti italiani famosi, attirando appassionati di musica da tutto il mondo e arricchendo la vita culturale locale;" : "举办原创音乐演出、艺术展览、主题讲座等活动，邀请意大利知名歌手、音乐人参与，吸引全球音乐爱好者前来，丰富当地文化生活；"}</li>
                <li><strong>{isEnglish ? 'Youth Art Education' : isFrench ? 'Activités d’éducation artistique jeunesse' : isItalian ? 'Attività di educazione artistica giovanile' : '青少年艺术教育活动'}</strong>：{isEnglish ? "Using the statue as a medium, local youth learn about Modugno’s life and creative journey, nurturing the next generation of local artistic heritage." : isFrench ? "grâce à la statue, les jeunes découvrent le parcours de Modugno et son œuvre, formant la nouvelle génération de gardiens de l’art local." : isItalian ? "attraverso la statua, si raccontano ai giovani la storia di crescita e il percorso creativo di Modugno, formando la nuova generazione di custodi dell’arte locale." : "以雕像为载体，向当地青少年讲述莫杜尼奥的成长故事与创作历程，培养本土艺术传承力量。"}</li>
              </ul>
              <p>
                {isEnglish
                  ? "These events turn the statue from a static sculpture into a “living” cultural symbol, continuously conveying Modugno’s love for art and homeland, and making Polignano a Mare’s musical culture a unique identity that sets it apart from other coastal towns."
                  : isFrench
                  ? "Ces événements font de la statue bien plus qu’une sculpture statique : un symbole culturel « vivant », qui transmet constamment l’amour de Modugno pour l’art et sa terre natale, ancre la culture musicale de Polignano a Mare et en fait un village côtier unique."
                  : isItalian
                  ? "Questi eventi rendono la statua non un semplice sculture statico, ma un simbolo culturale «vivo», che trasmette costantemente l’amore di Modugno per l’arte e la sua terra natia, rendendo la cultura musicale di Polignano a Mare profondamente radicata e diventando il tratto distintivo che la differenzia da altre località costiere."
                  : "这些活动让雕像不再是静止的雕塑，而是 “活” 的文化符号，持续传递着莫杜尼奥对艺术的热爱、对故乡的深情，也让波利尼亚诺阿马雷的音乐文化深入人心，成为小镇区别于其他滨海小镇的独特标签。"}
              </p>

              <h2>{isEnglish ? 'III. Nearby Attractions: A One-Stop Experience of Southern Italian Cliffside Charm' : isFrench ? 'III. Environnement : découvrir l’esprit des falaises du sud de l’Italie en un seul parcours' : isItalian ? 'III. Esperienze vicine: scoprire in un unico percorso l’atmosfera del sud Italia a picco sul mare' : '三、周边联动：一站式解锁南意悬崖风情'}</h2>
              <p>
                {isEnglish
                  ? "After visiting the statue, travelers can easily explore nearby iconic spots and fully experience Polignano a Mare’s blend of history, nature, art, and cuisine:"
                  : isFrench
                  ? "Après avoir visité la statue de Modugno, les visiteurs peuvent explorer les sites incontournables voisins et vivre pleinement le charme de Polignano a Mare, entre histoire, nature, art et gastronomie :"
                  : isItalian
                  ? "Dopo aver visitato la statua di Modugno, i visitatori possono esplorare in modo integrato le attrazioni vicine e vivere appieno il fascino di Polignano a Mare, tra storia, natura, arte e gastronomia:"
                  : "参观莫杜尼奥雕像后，游客可一站式打卡周边经典景点，深度体验波利尼亚诺阿马雷的魅力，感受 “历史、自然、艺术、美食” 交融的南意风情："}
              </p>
              <ul>
                <li><strong>{isEnglish ? '1. Lama Monachile Beach' : isFrench ? '1. Plage de Lama Monachile' : isItalian ? '1. Spiaggia di Lama Monachile' : '（一）拉玛莫纳基莱海滩（Lama Monachile）'}</strong>：{isEnglish ? "Just steps from the statue, this is the town’s most iconic beach. Nestled between cliffs, the water displays stunning shades of blue and green, with clean, pebbly shores ideal for swimming, sunbathing, and photography. The cliff-top promenade faces the beach, and from below, visitors can admire both the statue and the cliffs, enjoying the romance of sea and land." : isFrench ? "À quelques pas seulement de la statue, c’est la plage la plus emblématique du village. Serrée entre deux falaises, l’eau arbore des nuances de bleu et vert exceptionnelles, la plage de galets est propre et transparente : lieu idéal pour nager, bronzer et prendre des photos. Depuis le front de mer sur la falaise, la statue domine la plage ; depuis le bas, on admire à la fois la statue et les falaises, vivant la romance entre mer et montagne." : isItalian ? "A pochi passi dalla statua, è la spiaggia più iconica della cittadina. Chiusa tra due scogliere, l’acqua sfoggia tonalità di blu e verde incredibili, la spiaggia di ciottoli è pulita e trasparente: luogo ideale per nuotare, prendere il sole e scattare foto. Dal lungomare sopra la scogliera, la statua si affaccia sulla spiaggia; dal basso, si ammirano insieme la statua e le scogliere, vivendo la romantica unione tra mare e monti." : "距离雕像仅几步之遥，是小镇最具标志性的海滩。这片海滩被悬崖夹峙，海水呈现出层次丰富的蓝绿色，鹅卵石沙滩干净澄澈，是游泳、晒太阳、拍照的绝佳去处。"}</li>
                <li><strong>{isEnglish ? '2. Historic Town Center' : isFrench ? '2. Centre historique du village' : isItalian ? '2. Centro storico della cittadina' : '（二）小镇历史中心'}</strong>：{isEnglish ? "A short walk from the waterfront, the center preserves medieval architecture: narrow stone alleys wind through whitewashed houses with blue window frames and flower decorations, alongside the ancient Arco Marchesale and medieval churches. Every corner exudes vintage charm, letting visitors step back in time to an old southern Italian town and savor slow, peaceful moments." : isFrench ? "Accessible à pied depuis le front de mer, il conserve l’architecture médiévale : ruelles étroites de pierre serpentent, maisons blanches aux fenêtres bleues ornées de fleurs, l’ancien Arco Marchesale et des églises médiévales s’alignent. Chaque coin dégage un charme rétro : se promener ici, c’est remonter le temps dans un ancien village du sud de l’Italie et profiter du calme du temps qui passe lentement." : isItalian ? "Raggiungibile a piedi dal lungomare, conserva l’architettura medievale: stretti vicoli in pietra si snodano, case bianche con finestre azzurre adornate di fiori, l’antico Arco Marchesale e chiese medievali si susseguono. Ogni angolo emana un fascino retrò: passeggiare qui significa tornare indietro nel tempo in un’antica cittadina del sud Italia, godendosi la calma del tempo che scorre lentamente." : "沿着滨海步道步行即可抵达，这里保留着中世纪的建筑风貌，狭窄的石板巷蜿蜒曲折，白墙蓝窗的房屋点缀着鲜花。"}</li>
                <li><strong>{isEnglish ? '3. Cliffside Cave Restaurants' : isFrench ? '3. Restaurants dans des grottes sur falaises' : isItalian ? '3. Ristoranti nelle grotte a picco sul mare' : '（三）悬崖洞穴餐厅'}</strong>：{isEnglish ? "Several restaurants are built inside natural sea caves near the statue. Here, visitors can taste typical Apulian cuisine — fresh seafood, pasta, olive-based dishes, and lemon desserts — while listening to waves and overlooking spectacular sea views, enjoying a feast for both palate and eyes. Reservations are recommended during peak season." : isFrench ? "Le village compte plusieurs restaurants installés dans des grottes marines naturelles, non loin de la statue. On y déguste les spécialités des Pouilles : fruits de mer frais, pâtes, produits à base d’olives et desserts au citron. Manger en écoutant les vagues et en admirant la mer est un plaisir pour les papilles et les yeux. En haute saison, réservation conseillée." : isItalian ? "La cittadina vanta numerosi ristoranti situati all’interno di grotte marine naturali, non lontano dalla statua. Qui si possono assaporare i piatti tipici della Puglia: frutti di mare freschi, pasta, prodotti a base di olive e dolci al limone. Mangiare ascoltando il rumore delle onde e ammirando il panorama marino è un piacere per il palato e per gli occhi. In alta stagione è consigliata la prenotazione per un’esperienza ottimale." : "小镇拥有多家建在天然海蚀洞中的悬崖餐厅，距离雕像不远。游客可在此品尝普利亚大区特色美食。"}</li>
                <li><strong>{isEnglish ? '4. Sea Cave Exploration' : isFrench ? '4. Exploration des grottes marines' : isItalian ? '4. Escursioni alle grotte marine' : '（四）海蚀洞探险'}</strong>：{isEnglish ? "The coast of Polignano a Mare is dotted with natural sea caves, accessible by boat or kayak. Inside, crystal-clear waters and sunlight filtering through rock crevices create magical light effects, offering a wonderful natural complement to the statue’s cultural scenery." : isFrench ? "La côte de Polignano a Mare est parsemée de nombreuses grottes marines naturelles, accessibles en bateau ou en kayak. Les eaux sont cristalline, la lumière filtre par les fissures des rochers et crée des effets lumineux fantastiques : une découverte naturelle qui complète parfaitement le paysage culturel de la statue." : isItalian ? "La costa di Polignano a Mare è costellata di numerose grotte marine naturali, visitabili in barca o in kayak. Le acque sono cristalline, la luce filtra dalle fenditure delle rocce creando effetti luminosi fantastici: un’ottima scoperta della natura che completa perfettamente il panorama culturale della statua." : "波利尼亚诺阿马雷海岸分布着众多天然海蚀洞，可乘坐小船或皮划艇前往探险。"}</li>
              </ul>

              <h2>{isEnglish ? 'IV. Travel Guide: Visiting the Statue Without Regrets' : isFrench ? 'IV. Guide de voyage : visiter la statue sans regret' : isItalian ? 'IV. Guida al viaggio: visitare la statua senza rimpianti' : '四、旅行指南：轻松打卡雕像，不留遗憾'}</h2>
              <h3>{isEnglish ? '1. Best Times to Visit' : isFrench ? '1. Meilleurs moments pour visiter' : isItalian ? '1. Momenti migliori per la visita' : '（一）最佳游览时间'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Sunset (evening)' : isFrench ? 'Coucher de soleil (soir)' : isItalian ? 'Tramonto (sera)' : '傍晚（日落时分）'}</strong>：{isEnglish ? "Highly recommended! The sky and sea glow in golden twilight, the statue merges with the ocean, creating an unbeatable atmosphere for photos and sightseeing;" : isFrench ? "recommandé ! Quand le soleil descend, la mer est dorée par le crépuscule, la statue se fond dans le paysage marin, l’ambiance est magique, idéal pour les photos et la contemplation ;" : isItalian ? "la scelta consigliata! Quando il sole scende, il mare è infuocato dal crepuscolo, la statua si fonde con il paesaggio marino, creando un’atmosfera magica, perfetta per foto e panorami;" : "推荐首选！夕阳西下时，海面霞光漫天，雕像与海景融为一体，氛围感拉满，拍照、观景效果最佳；"}</li>
                <li><strong>{isEnglish ? 'Early morning' : isFrench ? 'Matin tôt' : isItalian ? 'Mattino presto' : '清晨'}</strong>：{isEnglish ? "Fewer crowds, perfect for quiet contemplation and enjoying the town’s calm, fresh sea air;" : isFrench ? "peu de touristes, possibilité d’admirer la statue en paix, respirer le calme du village et l’air frais de la mer ;" : isItalian ? "pochi turisti, possibilità di ammirare la statua in tranquillità, respirando la calma della cittadina e l’aria fresca del mare;" : "游客较少，可安静欣赏雕像，感受小镇的宁静与海风的清新；"}</li>
                <li><strong>{isEnglish ? 'Summer and Winter' : isFrench ? 'Été et Hiver' : isItalian ? 'Estate e Inverno' : '夏季与冬季'}</strong>：{isEnglish ? "Summer: Warm weather ideal for joining musical events around the statue and fully immersing in local culture. Winter: Quiet and peaceful, allowing visitors to enjoy the cliffs and statue in solitude." : isFrench ? "Été : climat doux, idéal pour participer aux événements musicaux autour de la statue et vivre pleinement la culture locale. Hiver : peu de visiteurs, possibilité de profiter seul du calme entre falaises et statue." : isItalian ? "Estate: clima mite, ideale per partecipare agli eventi musicali intorno alla statua e vivere appieno la cultura locale. Inverno: pochi visitatori, possibilità di godersi in solitudine la quiete tra scogliere e statua." : "夏季气候温暖，适合参与雕像周边的音乐活动；冬季游客稀少，可独享悬崖与雕像的静谧之美。"}</li>
              </ul>

              <h3>{isEnglish ? '2. How to Get There' : isFrench ? '2. Comment y aller' : isItalian ? '2. Come arrivare' : '（二）交通方式'}</h3>
              <ul>
                <li><strong>{isEnglish ? 'Public transport' : isFrench ? 'Transport en commun' : isItalian ? 'Trasporto pubblico' : '公共交通'}</strong>：{isEnglish ? "From Bari, take a train to Polignano a Mare (approx. 30 minutes), then walk 10–15 minutes to the statue on the waterfront;" : isFrench ? "depuis Bari, prendre le train pour Polignano a Mare (environ 30 minutes), puis marcher 10–15 minutes jusqu’au front de mer où se trouve la statue ;" : isItalian ? "da Bari, prendere il treno per Polignano a Mare (circa 30 minuti), quindi camminare 10–15 minuti fino al lungomare dove sorge la statua;" : "从巴里（Bari）乘坐火车前往波利尼亚诺阿马雷，车程约 30 分钟，抵达后步行 10-15 分钟即可到达滨海步道的雕像位置；"}</li>
                <li><strong>{isEnglish ? 'By car' : isFrench ? 'Voiture' : isItalian ? 'Auto' : '自驾'}</strong>：{isEnglish ? "Navigate to “Lungomare Domenico Modugno, 70044 Polignano a Mare”. Public parking is available nearby, followed by a short walk;" : isFrench ? "naviguer vers « Lungomare Domenico Modugno, 70044 Polignano a Mare ». Des parkings publics sont disponibles aux alentours, puis continuer à pied ;" : isItalian ? "navigare verso «Lungomare Domenico Modugno, 70044 Polignano a Mare». Parcheggi pubblici sono disponibili nei dintorni, poi proseguire a piedi;" : "导航至 “Lungomare Domenico Modugno, 70044 Polignano a Mare”，小镇周边有公共停车场，停车后步行前往。"}</li>
                <li><strong>{isEnglish ? 'On foot' : isFrench ? 'À pied' : isItalian ? 'A piedi' : '步行'}</strong>：{isEnglish ? "If staying in the town center, walk directly to the statue while enjoying the charming alley views." : isFrench ? "si vous séjournez dans le centre du village, vous pouvez rejoindre la statue directement à pied, en admirant les ruelles." : isItalian ? "se alloggiate nel centro della cittadina, potete raggiungere direttamente la statua a piedi, ammirando i vicoli lungo il percorso." : "若入住小镇中心酒店，可步行直达雕像，沿途欣赏小巷风景。"}</li>
              </ul>

              <h3>{isEnglish ? '3. Practical Tips' : isFrench ? '3. Conseils pratiques' : isItalian ? '3. Consigli utili' : '（三）游览小贴士'}</h3>
              <ul>
                <li>{isEnglish ? "Free entry, 24-hour access; no ID or reservations needed;" : isFrench ? "Entrée gratuite, ouverte 24h/24, pas de documents ni réservation nécessaires ;" : isItalian ? "Ingresso gratuito, apertura 24 ore su 24, non sono necessari documenti o prenotazioni;" : "雕像免费开放，24 小时可参观，无需携带证件，无需预约；"}</li>
                <li>{isEnglish ? "The waterfront promenade is flat and accessible for seniors and children. Stay safe when taking photos and do not approach cliff edges;" : isFrench ? "Le front de mer est plat, accessible facilement aux personnes âgées et aux enfants ; faire attention à la sécurité lors des photos, ne pas s’approcher trop du bord des falaises ;" : isItalian ? "Il lungomare è pianeggiante, accessibile facilmente anche a anziani e bambini; fare attenzione alla sicurezza durante le foto, non avvicinarsi troppo al bordo delle scogliere;" : "滨海步道地势平缓，老人、儿童均可轻松游览，拍照时注意安全，不要靠近悬崖边缘；"}</li>
                <li>{isEnglish ? "Combine the statue with the historic center and Lama Monachile Beach, allowing 1–2 hours for a full experience;" : isFrench ? "Il est conseillé de combiner la visite avec le centre historique et la plage de Lama Monachile, prévoir 1–2 heures pour profiter pleinement du paysage et de la culture ;" : isItalian ? "È consigliabile abbinare la visita al centro storico e alla spiaggia di Lama Monachile, prevedendo 1–2 ore per vivere appieno paesaggio e cultura;" : "可搭配小镇历史中心、拉玛莫纳基莱海滩一同游览，建议预留 1-2 小时，深度感受风景与文化；"}</li>
                <li>{isEnglish ? "Strong sun in summer — bring sun protection. Winter sea breezes can be chilly — pack a jacket." : isFrench ? "En été, soleil intense : protéger son visage et sa peau. En hiver, vent marin fort : apporter un manteau." : isItalian ? "In estate, sole intenso: proteggersi adeguatamente. In inverno, vento marino forte: portare una giacca." : "夏季阳光强烈，建议做好防晒；冬季海风较大，可携带外套。"}</li>
              </ul>

              <h2>{isEnglish ? 'V. Spiritual Legacy: The Timeless Value Behind the Statue' : isFrench ? 'V. Transmission spirituelle : la valeur éternelle derrière la statue' : isItalian ? 'V. Trasmissione spirituale: il valore eterno dietro la statua' : '五、精神传承：雕像背后的永恒价值'}</h2>
              <p>
                {isEnglish
                  ? "The Monumento a Domenico Modugno has long transcended its role as a mere memorial. It is a connection between homeland and legend, a fusion of art and nature, and a bridge between culture and tourism."
                  : isFrench
                  ? "Le Monumento a Domenico Modugno a bien dépassé le sens d’une simple statue commémorative : c’est un lien entre terre natale et légende, une rencontre entre art et nature, une fusion entre culture et tourisme."
                  : isItalian
                  ? "Il Monumento a Domenico Modugno ha ormai superato il significato di una semplice statua commemorativa: è un legame tra terra natia e leggenda, un incontro tra arte e natura, una fusione tra cultura e turismo."
                  : "Monumento a Domenico Modugno 早已超越了一座纪念雕像的意义，它是故土与传奇的联结、艺术与自然的共生、文化与旅游的交融。"}
              </p>
              <p>
                {isEnglish
                  ? "For Polignano a Mare, it is a cultural calling card that made this cliffside town world-famous for music, becoming an unmissable tourist landmark in Apulia. For Italy, it symbolizes national musical culture, honoring Modugno’s extraordinary role in bringing Italian music to the world and passing on the artistic spirit of romance, freedom, and passion. For global visitors, it is a timeless musical encounter: standing before the statue, listening to the sea breeze, gazing at the vast blue sea, feeling the beauty of Volare, and understanding Italy’s romance and depth."
                  : isFrench
                  ? "Pour Polignano a Mare, c’est sa carte de visite culturelle, qui a fait connaître ce village de falaises dans le monde grâce à la musique, devenant un repère touristique incontournable des Pouilles. Pour l’Italie, c’est un symbole de sa culture musicale nationale, qui rappelle le rôle exceptionnel de Modugno dans la diffusion de la musique italienne dans le monde et transmet l’esprit artistique de romantisme, liberté et passion. Pour les visiteurs du monde entier, c’est une rencontre musicale à travers le temps : se tenir devant la statue, écouter le vent marin, admirer la mer infinie, ressentir la beauté transmise par Volare et comprendre le romantisme et la profondeur de l’Italie."
                  : isItalian
                  ? "Per Polignano a Mare, è il biglietto da visita culturale che ha reso famosa questa cittadina di scogliere nel mondo per la musica, diventando un punto di riferimento turistico imperdibile della Puglia. Per l’Italia, è un simbolo della cultura musicale nazionale, che ricorda il contributo straordinario di Modugno nel portare la musica italiana nel mondo e tramanda lo spirito artistico di romanticismo, libertà e passione. Per i visitatori di tutto il mondo, è un incontro musicale attraverso il tempo: stando davanti alla statua, ascoltando il vento del mare, ammirando l’immenso mare azzurro, si percepisce la bellezza trasmessa da Volare e si capisce il romanticismo e la profondità dell’Italia."
                  : "对于波利尼亚诺阿马雷而言，雕像是小镇的文化名片，让这座悬崖小镇因音乐而被世界熟知，成为普利亚大区不可错过的旅游地标；对于意大利而言，它是本土音乐文化的象征，铭记着莫杜尼奥将意大利音乐推向世界的卓越贡献，传承着浪漫、自由、热忱的艺术精神；对于全球游客而言，它是一场跨越时空的音乐邂逅，站在雕像前，听海风轻吟，看碧海辽阔，感受《Volare》传递的美好，读懂意大利的浪漫与深情。"}
              </p>
              <p>
                {isEnglish
                  ? "The sea breeze never fades, and the song never ends. This bronze statue standing on the Adriatic coast is like an eternal singer, welcoming all who love music, nature, and life with open arms. It witnesses the town’s changing times, carries an immortal musical legacy, and tells the world: True art is always rooted in its homeland, always transcends time, and always touches every heart that yearns for freedom and beauty."
                  : isFrench
                  ? "Le vent marin ne cesse pas, le chant ne s’éteint pas. Cette statue en bronze dressée sur la côte adriatique est comme un chanteur éternel qui, les bras ouverts, accueille tous ceux qui aiment la musique, la nature et la vie. Elle témoigne des changements du temps dans le village, transmet un héritage musical immortel et dit au monde que : l’art véritable est toujours enraciné dans sa terre natale, traverse toujours le temps et touche chaque cœur qui aspire à la liberté et à la beauté."
                  : isItalian
                  ? "Il vento del mare non si placa, il canto non si spegne. Questa statua in bronzo eretta sulla costa adriatica è come un cantante eterno che, con le braccia aperte, accoglie tutti coloro che amano la musica, la natura e la vita. Testimonia i cambiamenti del tempo nella cittadina, tramanda un’eredità musicale immortale e racconta al mondo che: la vera arte è sempre radicata nella terra natia, riesce sempre ad attraversare il tempo e a toccare ogni cuore che sogna libertà e bellezza."
                  : "海风不息，歌声不止。这座矗立在亚得里亚海岸的青铜雕像，如同一位永恒的歌者，以张开双臂的姿态，迎接每一位热爱音乐、热爱自然、热爱生活的人。它见证着小镇的岁月变迁，传承着不朽的音乐遗产，也向世界诉说着：真正的艺术，永远扎根于故土，永远能跨越时空，打动每一个向往自由与美好的心灵。"}
              </p>
              <p>
                {isEnglish
                  ? "Come to Polignano a Mare. Stand beside the Monumento a Domenico Modugno, let the sea breeze and song accompany you, and experience an eternal journey of music, homeland, and romance."
                  : isFrench
                  ? "Venez à Polignano a Mare, approchez-vous du Monumento a Domenico Modugno, laissez-vous accompagner par le vent marin et le chant, et vivez un voyage éternel entre musique, terre natale et romantisme."
                  : isItalian
                  ? "Venite a Polignano a Mare, avvicinatevi al Monumento a Domenico Modugno, lasciatevi accompagnare dal vento del mare e dal canto, e vivete un viaggio eterno tra musica, terra natia e romanticismo."
                  : "来波利尼亚诺阿马雷吧，走近 Monumento a Domenico Modugno，让海风与歌声相伴，邂逅一场关于音乐、故乡与浪漫的永恒之旅。"}
              </p>
            </div>

            {/* Post Footer (Tags & Share) */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                {['Travel', 'Culture', 'Italy', 'Music'].map(tag => (
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
