const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'it', 'zh-Hant'];

const updates = {
  'en': {
    rights: "© 2026 Polignano a Mare Independent Travel Research Association · All rights reserved. Last updated: March 2026",
    indepHeading: "Polignano a Mare Independent Travel Research Association",
    indepContent: "This website is the information platform of the Polignano a Mare Independent Travel Research Association. Information is sourced from public resources including Google Maps, local tourism boards, and Wikipedia. Images are from Unsplash. We are not affiliated with the Monumento a Domenico Modugno, the municipal government, or any other official institutions.",
    privacyInfo: "As the Polignano a Mare Independent Travel Research Association, we are committed to protecting your privacy in compliance with GDPR and Italian data protection regulations. We generally do not actively collect personally identifiable information from users. Through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records.",
    termsAccept: "By accessing and using this website, you agree to be bound by these terms of service."
  },
  'zh-Hant': {
    rights: "© 2026 Polignano a Mare 自助旅行研究協會 · 版權所有。最後更新：2026年3月",
    indepHeading: "Polignano a Mare 自助旅行研究協會",
    indepContent: "本網站是 Polignano a Mare 自助旅行研究協會資訊平台。資訊來源於包括 Google Maps、當地旅遊局和維基百科在內的公共資源。圖片來自 Unsplash。我們與 Monumento a Domenico Modugno、市政府或其他官方機構沒有任何關聯。",
    privacyInfo: "作為 Polignano a Mare 自助旅行研究協會，我們承諾遵守 GDPR 及義大利資料保護法規以保護您的隱私。我們通常不會主動收集使用者的個人識別資訊。透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，如瀏覽器類型、存取時間和頁面瀏覽記錄。",
    termsAccept: "透過存取和使用本網站，您同意受這些服務條款的約束。"
  },
  'fr': {
    rights: "© 2026 Association de Recherche sur le Voyage Indépendant de Polignano a Mare · Tous droits réservés. Dernière mise à jour : Mars 2026",
    indepHeading: "Association de Recherche sur le Voyage Indépendant de Polignano a Mare",
    indepContent: "Ce site Web est la plateforme d'information de l'Association de Recherche sur le Voyage Indépendant de Polignano a Mare. Les informations proviennent de ressources publiques, notamment Google Maps, les offices de tourisme locaux et Wikipédia. Les images proviennent d'Unsplash. Nous ne sommes pas affiliés au Monumento a Domenico Modugno, au gouvernement municipal ou à toute autre institution officielle.",
    privacyInfo: "En tant qu'Association de Recherche sur le Voyage Indépendant de Polignano a Mare, nous nous engageons à protéger votre vie privée conformément au RGPD et aux réglementations italiennes sur la protection des données. Nous ne collectons généralement pas activement d'informations personnellement identifiables. Grâce aux journaux de serveur et aux outils d'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les heures d'accès et les enregistrements de pages vues.",
    termsAccept: "En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions de service."
  },
  'it': {
    rights: "© 2026 Associazione per la Ricerca sul Viaggio Indipendente di Polignano a Mare · Tutti i diritti riservati. Ultimo aggiornamento: Marzo 2026",
    indepHeading: "Associazione per la Ricerca sul Viaggio Indipendente di Polignano a Mare",
    indepContent: "Questo sito web è la piattaforma informativa dell'Associazione per la Ricerca sul Viaggio Indipendente di Polignano a Mare. Le informazioni provengono da risorse pubbliche tra cui Google Maps, enti turistici locali e Wikipedia. Le immagini provengono da Unsplash. Non siamo affiliati al Monumento a Domenico Modugno, all'amministrazione comunale o ad altre istituzioni ufficiali.",
    privacyInfo: "In qualità di Associazione per la Ricerca sul Viaggio Indipendente di Polignano a Mare, ci impegniamo a proteggere la tua privacy in conformità con il GDPR e le normative italiane sulla protezione dei dati. Generalmente non raccogliamo attivamente informazioni di identificazione personale. Attraverso i log del server e gli strumenti di analisi, potremmo raccogliere informazioni non identificative come tipo di browser, tempi di accesso e record di visualizzazione delle pagine.",
    termsAccept: "Accedendo e utilizzando questo sito web, accetti di essere vincolato da questi termini di servizio."
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `src/messages/${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const u = updates[loc];

    if (data.footer) {
      data.footer.rights = u.rights;
    }

    if (data.privacy && data.privacy.sections) {
      if (data.privacy.sections[0]) {
        data.privacy.sections[0].heading = u.indepHeading;
        data.privacy.sections[0].content = u.indepContent;
      }
      if (data.privacy.sections[1]) {
        data.privacy.sections[1].content = u.privacyInfo;
      }
    }

    if (data.terms && data.terms.sections) {
      if (data.terms.sections[0]) {
        data.terms.sections[0].heading = u.indepHeading;
        data.terms.sections[0].content = u.indepContent;
      }
      if (data.terms.sections[1]) {
        data.terms.sections[1].content = u.termsAccept;
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${loc}.json`);
  }
});