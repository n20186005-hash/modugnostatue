const fs = require('fs');
const path = require('path');
const locales = ['en', 'it', 'fr', 'zh-Hant'];

const recommendationsTexts = {
  en: {
    title: "Discover More",
    attractionsTitle: "Nearby Attractions",
    toursTitle: "Recommended Tours & Activities",
    attractions: [
      { name: "Museum of the Treasure of San Gennaro", url: "https://www.trip.com/t/xcWHkMbFEU2" },
      { name: "Jago Museum", url: "https://www.trip.com/t/JQ84T0dFEU2" },
      { name: "Aquarium of Naples", url: "https://www.trip.com/t/KMsEPTeFEU2" },
      { name: "San Lorenzo Maggiore", url: "https://www.trip.com/t/DwQCUJfFEU2" }
    ],
    tours: [
      { name: "Polignano a Mare: Eco-Boat Tour with Snorkeling & Cave Exploration", url: "https://www.trip.com/t/MyfkYfsEEU2" },
      { name: "Polignano a Mare: Boat Tour with Aperitif", url: "https://www.trip.com/t/Su71LWvEEU2" },
      { name: "Polignano a Mare: Cave Boat Tour with Aperitif", url: "https://www.trip.com/t/4K0gR5xEEU2" },
      { name: "Polignano a Mare: Cave Boat Tour", url: "https://www.trip.com/t/ybtN13CFEU2" },
      { name: "Wooden Gozzo Boat Tour with Aperitif along Polignano Coast", url: "https://www.trip.com/t/HrlcDlyEEU2" },
      { name: "Polignano Coast & Caves Tour: Boat, Drinks, Swim, Music & Happy Hour", url: "https://www.trip.com/t/lQoBLj1FEU2" },
      { name: "Monopoli: Exclusive Shared Boat Tour", url: "https://www.trip.com/t/rbct9O4FEU2" },
      { name: "Polignano a Mare: Cruise with Prosecco", url: "https://www.trip.com/t/6hV3TK7FEU2" },
      { name: "From Bari: Boat Tour & Free Time in Polignano a Mare", url: "https://www.trip.com/t/m2FkQnFFEU2" },
      { name: "From Peschici: Round-trip Ferry to Tremiti Islands", url: "https://www.trip.com/t/U97GaWIFEU2" }
    ]
  },
  it: {
    title: "Scopri di Più",
    attractionsTitle: "Attrazioni Vicine",
    toursTitle: "Tour e Attività Consigliati",
    attractions: [
      { name: "Museo del Tesoro di San Gennaro", url: "https://www.trip.com/t/xcWHkMbFEU2" },
      { name: "Jago Museum", url: "https://www.trip.com/t/JQ84T0dFEU2" },
      { name: "Acquario di Napoli", url: "https://www.trip.com/t/KMsEPTeFEU2" },
      { name: "San Lorenzo Maggiore", url: "https://www.trip.com/t/DwQCUJfFEU2" }
    ],
    tours: [
      { name: "Polignano a Mare: Tour in Eco-Barca con Snorkeling ed Esplorazione Grotte", url: "https://www.trip.com/t/MyfkYfsEEU2" },
      { name: "Polignano a Mare: Tour in Barca con Aperitivo", url: "https://www.trip.com/t/Su71LWvEEU2" },
      { name: "Polignano a Mare: Tour delle Grotte in Barca con Aperitivo", url: "https://www.trip.com/t/4K0gR5xEEU2" },
      { name: "Polignano a Mare: Tour delle Grotte in Barca", url: "https://www.trip.com/t/ybtN13CFEU2" },
      { name: "Tour in Gozzo in Legno con Aperitivo lungo la Costa di Polignano", url: "https://www.trip.com/t/HrlcDlyEEU2" },
      { name: "Tour della Costa e delle Grotte di Polignano: Barca, Drink, Nuoto, Musica e Happy Hour", url: "https://www.trip.com/t/lQoBLj1FEU2" },
      { name: "Monopoli: Esclusivo Tour in Barca Condiviso", url: "https://www.trip.com/t/rbct9O4FEU2" },
      { name: "Polignano a Mare: Crociera con Prosecco", url: "https://www.trip.com/t/6hV3TK7FEU2" },
      { name: "Da Bari: Tour in Barca e Tempo Libero a Polignano a Mare", url: "https://www.trip.com/t/m2FkQnFFEU2" },
      { name: "Da Peschici: Traghetto A/R per le Isole Tremiti", url: "https://www.trip.com/t/U97GaWIFEU2" }
    ]
  },
  fr: {
    title: "Découvrir Plus",
    attractionsTitle: "Attractions à Proximité",
    toursTitle: "Visites et Activités Recommandées",
    attractions: [
      { name: "Musée du Trésor de San Gennaro", url: "https://www.trip.com/t/xcWHkMbFEU2" },
      { name: "Jago Museum", url: "https://www.trip.com/t/JQ84T0dFEU2" },
      { name: "Aquarium de Naples", url: "https://www.trip.com/t/KMsEPTeFEU2" },
      { name: "San Lorenzo Maggiore", url: "https://www.trip.com/t/DwQCUJfFEU2" }
    ],
    tours: [
      { name: "Polignano a Mare : Excursion en Éco-Bateau avec Snorkeling et Exploration de Grottes", url: "https://www.trip.com/t/MyfkYfsEEU2" },
      { name: "Polignano a Mare : Excursion en Bateau avec Apéritif", url: "https://www.trip.com/t/Su71LWvEEU2" },
      { name: "Polignano a Mare : Visite des Grottes en Bateau avec Apéritif", url: "https://www.trip.com/t/4K0gR5xEEU2" },
      { name: "Polignano a Mare : Visite des Grottes en Bateau", url: "https://www.trip.com/t/ybtN13CFEU2" },
      { name: "Excursion en Bateau Gozzo en Bois avec Apéritif le long de la Côte de Polignano", url: "https://www.trip.com/t/HrlcDlyEEU2" },
      { name: "Excursion sur la Côte et les Grottes de Polignano : Bateau, Boissons, Baignade, Musique et Happy Hour", url: "https://www.trip.com/t/lQoBLj1FEU2" },
      { name: "Monopoli : Excursion Exclusive en Bateau Partagé", url: "https://www.trip.com/t/rbct9O4FEU2" },
      { name: "Polignano a Mare : Croisière avec Prosecco", url: "https://www.trip.com/t/6hV3TK7FEU2" },
      { name: "De Bari : Excursion en Bateau et Temps Libre à Polignano a Mare", url: "https://www.trip.com/t/m2FkQnFFEU2" },
      { name: "De Peschici : Ferry Aller-Retour pour les Îles Tremiti", url: "https://www.trip.com/t/U97GaWIFEU2" }
    ]
  },
  'zh-Hant': {
    title: "探索更多",
    attractionsTitle: "周邊景點推薦",
    toursTitle: "周邊遊路線推薦",
    attractions: [
      { name: "聖熱內羅珍寶博物館", url: "https://www.trip.com/t/xcWHkMbFEU2" },
      { name: "Jago Museum", url: "https://www.trip.com/t/JQ84T0dFEU2" },
      { name: "Aquarium of Naples", url: "https://www.trip.com/t/KMsEPTeFEU2" },
      { name: "大聖老楞佐教堂", url: "https://www.trip.com/t/DwQCUJfFEU2" }
    ],
    tours: [
      { name: "濱海波利尼亞諾：生態遊船之旅連浮潛及洞穴探索", url: "https://www.trip.com/t/MyfkYfsEEU2" },
      { name: "濱海波利尼亞諾：遊船之旅連開胃酒", url: "https://www.trip.com/t/Su71LWvEEU2" },
      { name: "濱海波利尼亞諾：洞穴遊船之旅連開胃酒", url: "https://www.trip.com/t/4K0gR5xEEU2" },
      { name: "濱海波利尼亞諾：洞穴遊船之旅", url: "https://www.trip.com/t/ybtN13CFEU2" },
      { name: "木製戈佐船之旅，享用開胃酒前往波利尼亞諾美麗海岸", url: "https://www.trip.com/t/HrlcDlyEEU2" },
      { name: "波利尼亞諾海岸及洞穴之旅：乘船暢遊、暢飲、游泳、音樂與歡樂時光", url: "https://www.trip.com/t/lQoBLj1FEU2" },
      { name: "莫諾波利：專享共享船遊", url: "https://www.trip.com/t/rbct9O4FEU2" },
      { name: "濱海波利尼亞諾：郵輪之旅配普羅賽克氣泡酒", url: "https://www.trip.com/t/6hV3TK7FEU2" },
      { name: "從巴里出發：乘船遊覽及濱海波利尼亞諾自由活動時間", url: "https://www.trip.com/t/m2FkQnFFEU2" },
      { name: "佩斯基奇出發：特雷米蒂群島往返渡輪", url: "https://www.trip.com/t/U97GaWIFEU2" }
    ]
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `src/messages/${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.recommendations = recommendationsTexts[loc];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${loc}.json`);
  }
});