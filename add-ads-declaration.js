const fs = require('fs');
const path = require('path');
const locales = ['en', 'it', 'fr', 'zh-Hant'];

const adsDeclarations = {
  en: {
    privacy: {
      heading: "Advertising and Affiliate Links",
      content: "This website displays advertisements and affiliate links provided by third parties, such as Trip.com. Clicking on these links may result in these third parties collecting data about your interaction. We do not have control over the privacy practices of these advertisers."
    },
    terms: {
      heading: "Advertising and Third-Party Content",
      content: "This website contains advertisements and links to third-party services (e.g., Trip.com). We are not responsible for the content, accuracy, or products offered by these third-party advertisers. Any interaction with these advertisements is strictly between you and the third party."
    },
    cookieSettings: {
      description: "Manage your cookie preferences. Strictly necessary cookies are required for the website to function. This site may also use cookies related to third-party services like Google Maps and advertising partners (e.g., Trip.com)."
    }
  },
  it: {
    privacy: {
      heading: "Pubblicità e Link di Affiliazione",
      content: "Questo sito web mostra annunci pubblicitari e link di affiliazione forniti da terze parti, come Trip.com. Facendo clic su questi link, tali terze parti potrebbero raccogliere dati sulla tua interazione. Non abbiamo alcun controllo sulle pratiche sulla privacy di questi inserzionisti."
    },
    terms: {
      heading: "Pubblicità e Contenuti di Terze Parti",
      content: "Questo sito web contiene annunci pubblicitari e link a servizi di terze parti (es. Trip.com). Non siamo responsabili per i contenuti, l'accuratezza o i prodotti offerti da questi inserzionisti di terze parti. Qualsiasi interazione con questi annunci è strettamente tra te e la terza parte."
    },
    cookieSettings: {
      description: "Gestisci le tue preferenze sui cookie. I cookie strettamente necessari sono richiesti per il funzionamento del sito web. Questo sito potrebbe utilizzare anche cookie relativi a servizi di terze parti come Google Maps e partner pubblicitari (es. Trip.com)."
    }
  },
  fr: {
    privacy: {
      heading: "Publicité et Liens d'Affiliation",
      content: "Ce site web affiche des publicités et des liens d'affiliation fournis par des tiers, tels que Trip.com. En cliquant sur ces liens, ces tiers peuvent collecter des données sur votre interaction. Nous n'avons aucun contrôle sur les pratiques de confidentialité de ces annonceurs."
    },
    terms: {
      heading: "Publicité et Contenu Tiers",
      content: "Ce site web contient des publicités et des liens vers des services tiers (par ex., Trip.com). Nous ne sommes pas responsables du contenu, de l'exactitude ou des produits proposés par ces annonceurs tiers. Toute interaction avec ces publicités se fait strictement entre vous et le tiers."
    },
    cookieSettings: {
      description: "Gérez vos préférences en matière de cookies. Les cookies strictement nécessaires sont requis pour le fonctionnement du site. Ce site peut également utiliser des cookies liés à des services tiers comme Google Maps et des partenaires publicitaires (par ex., Trip.com)."
    }
  },
  'zh-Hant': {
    privacy: {
      heading: "廣告與聯盟連結",
      content: "本網站顯示由第三方（如 Trip.com 攜程）提供的廣告和聯盟連結。點擊這些連結可能會導致這些第三方收集有關您互動的數據。我們無法控制這些廣告商的隱私權作法。"
    },
    terms: {
      heading: "廣告與第三方內容",
      content: "本網站包含廣告和指向第三方服務（如 Trip.com 攜程）的連結。我們對這些第三方廣告商提供的內容、準確性或產品概不負責。您與這些廣告的任何互動均嚴格限於您與第三方之間。"
    },
    cookieSettings: {
      description: "管理您的 Cookie 偏好。網站運作需要絕對必要的 Cookie。本網站也可能使用與 Google Maps 和廣告合作夥伴（如 Trip.com 攜程）等第三方服務相關的 Cookie。"
    }
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `src/messages/${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const t = adsDeclarations[loc];

    // Privacy Policy
    if (data.privacy && data.privacy.sections) {
      // Check if advertising section already exists
      const hasAdSection = data.privacy.sections.some(s => s.heading === t.privacy.heading);
      if (!hasAdSection) {
        data.privacy.sections.push(t.privacy);
      }
    }

    // Terms of Service
    if (data.terms && data.terms.sections) {
      // Check if advertising section already exists
      const hasAdSection = data.terms.sections.some(s => s.heading === t.terms.heading);
      if (!hasAdSection) {
        data.terms.sections.push(t.terms);
      }
    }

    // Cookie Settings
    if (data.cookieSettings) {
      data.cookieSettings.description = t.cookieSettings.description;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${loc}.json with ads declarations.`);
  }
});