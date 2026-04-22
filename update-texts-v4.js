const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'it', 'zh-Hant'];

const updates = {
  'en': {
    officialResourcesTitle: "Related Resources & Information",
  },
  'zh-Hant': {
    officialResourcesTitle: "相關資源與更多資訊",
  },
  'fr': {
    officialResourcesTitle: "Ressources Connexes et Informations",
  },
  'it': {
    officialResourcesTitle: "Risorse Correlate e Informazioni",
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `src/messages/${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const u = updates[loc];

    if (data.footer) {
      data.footer.officialResourcesTitle = u.officialResourcesTitle;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated footer resources title in ${loc}.json`);
  }
});