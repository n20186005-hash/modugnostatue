const fs = require('fs');
const path = require('path');
const locales = ['en', 'it', 'fr', 'zh-Hant'];

const officialTexts = {
  en: {
    officialManagement: {
      title: "Official Management",
      text: "The Monumento a Domenico Modugno is directly managed and maintained by the Comune di Polignano a Mare. As a public cultural heritage of Polignano a Mare, this monument is a permanent tribute to the famous local artist Domenico Modugno, and serves as an important public art landmark for tourism."
    },
    intro: {
      description: "Located on the waterfront of Polignano a Mare, this bronze monument honors Domenico Modugno — the legendary Italian singer-songwriter who captivated the world with 'Volare' (Nel blu dipinto di blu). Visitors are welcome to visit this public monument and experience the deep emotional connection between Domenico Modugno and his hometown.",
      alsoKnownAs: {
        title: "Also Known As",
        items: [
          "Monumento a Domenico Modugno",
          "Modugno Statue",
          "The Volare Statue",
          "Iconic waterfront sculpture of Polignano a Mare"
        ]
      }
    },
    reviews: {
      declaration: "Visitor feedback can be viewed via Google Maps (external link).",
      moreReviews: "View locations on Google Maps"
    },
    gallery: {
      viewAll: "View locations on Google Maps"
    },
    mapSection: {
      openMaps: "View on Google Maps"
    },
    hero: {
      openMaps: "View Location"
    },
    privacy: [
      {
        heading: "Official Platform",
        content: "This website is the official information platform of the Comune di Polignano a Mare."
      },
      {
        heading: "Information Collection",
        content: "As a public service platform, we are committed to protecting your privacy in compliance with GDPR and Italian data protection regulations. We generally do not actively collect personally identifiable information from users. Through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records."
      },
      {
        heading: "Use of Cookies",
        content: "To provide a better user experience and understand how the site is used, we may use cookies. These cookies are used to remember user preferences and analyze site traffic. You can adjust cookie settings in your browser."
      },
      {
        heading: "Third-Party Services Disclosure",
        content: "This site integrates third-party services (e.g., Google Maps for geographical data). These external services operate under their own privacy policies."
      }
    ],
    terms: [
      {
        heading: "Official Platform",
        content: "This website is the official information platform of the Comune di Polignano a Mare."
      },
      {
        heading: "Acceptance of Terms",
        content: "By accessing and using this website, you agree to be bound by these terms of service, which govern this public service platform."
      },
      {
        heading: "Use of Content",
        content: "The information provided on this website is official public information. While we strive to maintain accurate and up-to-date information, users should refer to official municipal notices for the most current updates."
      },
      {
        heading: "External Links Disclosure",
        content: "This site contains links to external services like Google Maps. We are not responsible for the content or privacy practices of these external platforms."
      }
    ]
  },
  it: {
    officialManagement: {
      title: "Gestione Ufficiale",
      text: "Il Monumento a Domenico Modugno è gestito e curato direttamente dal Comune di Polignano a Mare. Quale patrimonio culturale pubblico di Polignano a Mare, questo monumento rappresenta un omaggio permanente al celebre artista locale Domenico Modugno, costituendo un importante punto di riferimento dell'arte pubblica per il turismo."
    },
    intro: {
      description: "Situato sul lungomare di Polignano a Mare, questo monumento in bronzo rende omaggio a Domenico Modugno — il leggendario cantautore italiano che ha incantato il mondo con 'Volare' (Nel blu dipinto di blu). I visitatori sono invitati a visitare questo monumento pubblico e a percepire il profondo legame emotivo tra Domenico Modugno e la sua città natale.",
      alsoKnownAs: {
        title: "Conosciuto Anche Come",
        items: [
          "Monumento a Domenico Modugno",
          "Modugno Statue",
          "The Volare Statue",
          "Scultura iconica del lungomare di Polignano a Mare"
        ]
      }
    },
    reviews: {
      declaration: "I feedback dei visitatori possono essere visualizzati tramite Google Maps (link esterno).",
      moreReviews: "Vedi posizione su Google Maps"
    },
    gallery: {
      viewAll: "Vedi posizione su Google Maps"
    },
    mapSection: {
      openMaps: "Vedi su Google Maps"
    },
    hero: {
      openMaps: "Vedi Posizione"
    },
    privacy: [
      {
        heading: "Piattaforma Ufficiale",
        content: "Questo sito web è la piattaforma informativa ufficiale del Comune di Polignano a Mare."
      },
      {
        heading: "Raccolta delle Informazioni",
        content: "Come piattaforma di servizio pubblico, ci impegniamo a proteggere la tua privacy in conformità con il GDPR e le normative italiane sulla protezione dei dati. Generalmente non raccogliamo attivamente informazioni di identificazione personale. Attraverso i log del server e gli strumenti di analisi, potremmo raccogliere informazioni non identificative come tipo di browser, tempi di accesso e record di visualizzazione delle pagine."
      },
      {
        heading: "Uso dei Cookie",
        content: "Per fornire una migliore esperienza utente e comprendere come viene utilizzato il sito, potremmo utilizzare i cookie. Questi cookie vengono utilizzati per ricordare le preferenze dell'utente e analizzare il traffico del sito. Puoi regolare le impostazioni dei cookie nel tuo browser."
      },
      {
        heading: "Informativa sui Servizi di Terze Parti",
        content: "Questo sito integra servizi di terze parti (es. Google Maps per dati geografici). Questi servizi esterni operano secondo le proprie politiche sulla privacy."
      }
    ],
    terms: [
      {
        heading: "Piattaforma Ufficiale",
        content: "Questo sito web è la piattaforma informativa ufficiale del Comune di Polignano a Mare."
      },
      {
        heading: "Accettazione dei Termini",
        content: "Accedendo e utilizzando questo sito web, accetti di essere vincolato da questi termini di servizio, che regolano questa piattaforma di servizio pubblico."
      },
      {
        heading: "Uso dei Contenuti",
        content: "Le informazioni fornite su questo sito web sono informazioni pubbliche ufficiali. Sebbene ci sforziamo di mantenere informazioni accurate e aggiornate, gli utenti dovrebbero fare riferimento agli avvisi municipali ufficiali per gli aggiornamenti più recenti."
      },
      {
        heading: "Informativa sui Link Esterni",
        content: "Questo sito contiene link a servizi esterni come Google Maps. Non siamo responsabili per i contenuti o le pratiche sulla privacy di queste piattaforme esterne."
      }
    ]
  },
  fr: {
    officialManagement: {
      title: "Gestion Officielle",
      text: "Le Monumento a Domenico Modugno est directement géré et entretenu par la Comune di Polignano a Mare. En tant que patrimoine culturel public de Polignano a Mare, ce monument est un hommage permanent au célèbre artiste local Domenico Modugno et constitue un repère important de l'art public pour le tourisme."
    },
    intro: {
      description: "Situé sur le front de mer de Polignano a Mare, ce monument en bronze rend hommage à Domenico Modugno — le légendaire auteur-compositeur-interprète italien qui a conquis le monde avec 'Volare' (Nel blu dipinto di blu). Les visiteurs sont invités à découvrir ce monument public et à ressentir le lien émotionnel profond entre Domenico Modugno et sa ville natale.",
      alsoKnownAs: {
        title: "Également Connu Sous Le Nom De",
        items: [
          "Monumento a Domenico Modugno",
          "Modugno Statue",
          "The Volare Statue",
          "Sculpture emblématique du front de mer de Polignano a Mare"
        ]
      }
    },
    reviews: {
      declaration: "Les retours des visiteurs peuvent être consultés via Google Maps (lien externe).",
      moreReviews: "Voir l'emplacement sur Google Maps"
    },
    gallery: {
      viewAll: "Voir l'emplacement sur Google Maps"
    },
    mapSection: {
      openMaps: "Voir sur Google Maps"
    },
    hero: {
      openMaps: "Voir l'Emplacement"
    },
    privacy: [
      {
        heading: "Plateforme Officielle",
        content: "Ce site web est la plateforme d'information officielle de la Comune di Polignano a Mare."
      },
      {
        heading: "Collecte d'Informations",
        content: "En tant que plateforme de service public, nous nous engageons à protéger votre vie privée conformément au RGPD et aux réglementations italiennes sur la protection des données. Nous ne collectons généralement pas activement d'informations personnellement identifiables. Grâce aux journaux de serveur et aux outils d'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les heures d'accès et les enregistrements de pages vues."
      },
      {
        heading: "Utilisation des Cookies",
        content: "Pour offrir une meilleure expérience utilisateur et comprendre comment le site est utilisé, nous pouvons utiliser des cookies. Ces cookies sont utilisés pour mémoriser les préférences des utilisateurs et analyser le trafic du site. Vous pouvez ajuster les paramètres des cookies dans votre navigateur."
      },
      {
        heading: "Divulgation des Services Tiers",
        content: "Ce site intègre des services tiers (par ex. Google Maps pour les données géographiques). Ces services externes fonctionnent selon leurs propres politiques de confidentialité."
      }
    ],
    terms: [
      {
        heading: "Plateforme Officielle",
        content: "Ce site web est la plateforme d'information officielle de la Comune di Polignano a Mare."
      },
      {
        heading: "Acceptation des Conditions",
        content: "En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions de service, qui régissent cette plateforme de service public."
      },
      {
        heading: "Utilisation du Contenu",
        content: "Les informations fournies sur ce site web sont des informations publiques officielles. Bien que nous nous efforcions de maintenir des informations exactes et à jour, les utilisateurs doivent se référer aux avis municipaux officiels pour les mises à jour les plus récentes."
      },
      {
        heading: "Divulgation des Liens Externes",
        content: "Ce site contient des liens vers des services externes comme Google Maps. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces plateformes externes."
      }
    ]
  },
  'zh-Hant': {
    officialManagement: {
      title: "官方管理資訊",
      text: "Monumento a Domenico Modugno 由 Polignano a Mare 市鎮政府（Comune di Polignano a Mare）直接管理和維護。作為 Polignano a Mare 的公共文化遺產，該紀念碑是獻給本地著名藝術家 Domenico Modugno 的永久致敬，也是當地重要的旅遊公共藝術地標。"
    },
    intro: {
      description: "這座青銅紀念碑矗立在波利尼亞諾濱海（Polignano a Mare）的海濱長廊上，向義大利傳奇歌手多梅尼科·莫杜尼奧致敬——他以一曲《Volare》（在藍天中翱翔）風靡全球。歡迎遊客前來參觀這座公共紀念碑，感受 Domenico Modugno 與家鄉的深厚情感。",
      alsoKnownAs: {
        title: "也稱為（Also Known As）",
        items: [
          "Monumento a Domenico Modugno",
          "Modugno Statue",
          "The Volare Statue",
          "Polignano a Mare 海濱標誌性雕塑"
        ]
      }
    },
    reviews: {
      declaration: "位置與評論資訊可透過 Google Maps 查看（外部連結）。",
      moreReviews: "在 Google Maps 查看位置"
    },
    gallery: {
      viewAll: "在 Google Maps 查看位置"
    },
    mapSection: {
      openMaps: "在 Google Maps 中查看"
    },
    hero: {
      openMaps: "查看位置"
    },
    privacy: [
      {
        heading: "官方資訊平台",
        content: "本網站是 Polignano a Mare 市鎮政府的官方資訊平台。"
      },
      {
        heading: "資訊收集",
        content: "作為公共服務平台，我們承諾遵守 GDPR 及義大利資料保護法規以保護您的隱私。我們通常不會主動收集使用者的個人識別資訊。透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，如瀏覽器類型、存取時間和頁面瀏覽記錄。"
      },
      {
        heading: "Cookie 的使用",
        content: "為了提供更好的使用者體驗並了解網站的使用情況，我們可能會使用 Cookie。這些 Cookie 用於記住使用者偏好和分析網站流量。您可以在瀏覽器中調整 Cookie 設定。"
      },
      {
        heading: "第三方服務披露",
        content: "本網站整合了第三方服務（如 Google Maps 用於地理資料）。這些外部服務根據其自身的隱私權政策運作。"
      }
    ],
    terms: [
      {
        heading: "官方資訊平台",
        content: "本網站是 Polignano a Mare 市鎮政府的官方資訊平台。"
      },
      {
        heading: "接受條款",
        content: "透過存取和使用本網站，您同意受這些服務條款的約束，這些條款規範了本公共服務平台。"
      },
      {
        heading: "內容使用",
        content: "本網站提供的資訊為官方公共資訊。雖然我們努力維持準確和最新的資訊，但使用者應參考官方市政公告以獲取最新更新。"
      },
      {
        heading: "外部連結免責聲明",
        content: "本網站包含指向 Google Maps 等外部服務的連結。我們不對這些外部平台的內容或隱私做法負責。"
      }
    ]
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `src/messages/${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const t = officialTexts[loc];

    // 1. 强化官方管理信息
    data.officialManagement = t.officialManagement;

    // 2. 替换 Keywords 为 Also Known As 并调整 intro 语气
    if (data.intro) {
      data.intro.description = t.intro.description;
      delete data.intro.keywords;
      data.intro.alsoKnownAs = t.intro.alsoKnownAs;
    }

    // 3. 弱化 Google Maps 和调整语气
    if (data.reviews) {
      data.reviews.declaration = t.reviews.declaration;
      data.reviews.moreReviews = t.reviews.moreReviews;
    }
    if (data.gallery) {
      data.gallery.viewAll = t.gallery.viewAll;
    }
    if (data.mapSection) {
      data.mapSection.openMaps = t.mapSection.openMaps;
    }
    if (data.hero) {
      data.hero.openMaps = t.hero.openMaps;
      delete data.hero.tags; // 彻底删除 tags SEO 痕迹
    }

    // 4. 精炼法律页面
    if (data.privacy) {
      data.privacy.sections = t.privacy;
    }
    if (data.terms) {
      data.terms.sections = t.terms;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${loc}.json`);
  }
});