// app.js - Gallery Website Logic

// 15 Traditional Kyrgyz Wallpaper Patterns Data
const wallpaperPatterns = [
  {
    id: "shyrdak-classic",
    name: "Klassik Shirdoq",
    region: "Narin",
    regionId: "path-naryn",
    desc: "Shirdoq — qirg'iz kigizchilik san'atining eng yorqin namunasidir. Uning naqshlari suv, ulug'vor tog'lar va o't-o'lanlarni ifodalaydi. Klassik jigarrang va oltin elementlar xonadonda milliy o'ziga xoslik va iliqlik muhitini yaratadi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%2325160c'/><path d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23e5c158' stroke-width='2'/><path d='M40 10 Q30 25 40 40 Q50 25 40 10 Z M40 70 Q30 55 40 40 Q50 55 40 70 Z M10 40 Q25 30 40 40 Q25 50 10 40 Z M70 40 Q55 30 40 40 Q55 50 70 40 Z' fill='none' stroke='%23cd7f32' stroke-width='1.5'/></svg>`
  },
  {
    id: "ala-kiyiz",
    name: "Ala-kiyiz To'lqinlari",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Ala-kiyiz — bosilgan kigizdan tayyorlanadigan gilam bo'lib, uning naqshlari erkinroq va organik oqimga ega. Ushbu naqsh tabiatdagi shamol va suv to'lqinlarining harakatini ifodalaydi va zamonaviy yashash xonalari uchun ajoyib dinamika beradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%232c1c11'/><path d='M0 50 Q 25 20, 50 50 T 100 50 M0 30 Q 25 0, 50 30 T 100 30 M0 70 Q 25 40, 50 70 T 100 70' fill='none' stroke='%23e5c158' stroke-width='1.5' stroke-dasharray='4, 4'/><path d='M25 50 C 25 35, 35 25, 50 25 C 65 25, 75 35, 75 50' fill='none' stroke='%23cd7f32' stroke-width='2'/></svg>`
  },
  {
    id: "kurak-mosaic",
    name: "Quroq Mozaikasi",
    region: "O'sh",
    regionId: "path-osh",
    desc: "Quroq — parchalar yig'indisidan iborat mozaik naqsh bo'lib, oila birligi, farovonlik va uydagi tinchlik-totuvlik ramzidir. Har bir uchburchak va kvadrat elementlar hayot yo'llarining birlashishini bildiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect width='60' height='60' fill='%231e120a'/><polygon points='0,0 30,0 0,30' fill='%23cd7f32' fill-opacity='0.4'/><polygon points='30,0 60,0 60,30' fill='%23e5c158' fill-opacity='0.2'/><polygon points='60,30 60,60 30,60' fill='%23cd7f32' fill-opacity='0.4'/><polygon points='30,60 0,60 0,30' fill='%23e5c158' fill-opacity='0.2'/><polygon points='30,10 50,30 30,50 10,30' fill='none' stroke='%23e5c158' stroke-width='1.5'/></svg>`
  },
  {
    id: "kochkor-muiz",
    name: "Qochqor-Muiz (Qo'chqor Shoxi)",
    region: "Talas",
    regionId: "path-talas",
    desc: "Qochqor-muiz qirg'iz naqshlarining eng qadimiy elementlaridan biridir. U qo'chqor shoxlarini ifodalab, kuch-qudrat, jasorat, boylik va mo'l-ko'lchilik ramzi hisoblanadi. Kabinet yoki ish xonalari uchun juda mos.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%2322150c'/><path d='M40 75 V45 C40 30, 20 20, 20 35 C20 45, 35 45, 35 35 M40 75 V45 C40 30, 60 20, 60 35 C60 45, 45 45, 45 35' fill='none' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/><path d='M40 5 V35 C40 50, 20 60, 20 45 C20 35, 35 35, 35 45 M40 5 V35 C40 50, 60 60, 60 45 C60 35, 45 35, 45 45' fill='none' stroke='%23cd7f32' stroke-width='2' stroke-linecap='round'/></svg>`
  },
  {
    id: "kyal-dream",
    name: "Kyal (Xiyol)",
    region: "Jalolobod",
    regionId: "path-jalal-abad",
    desc: "Xiyol — shashqa va o'simlik barglarining silliq, nafis chiziqlari bilan chizilgan naqshdir. U erkin hayot, ijodiy tafakkur va cheksiz tasavvurni anglatadi. Yotoqxonalarga mayinlik va xotirjamlik bag'ishlaydi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'><rect width='90' height='90' fill='%23190f07'/><path d='M0 45 C 15 15, 30 15, 45 45 C 60 75, 75 75, 90 45' fill='none' stroke='%23e5c158' stroke-width='1.5'/><path d='M45 45 C 45 25, 60 20, 65 35 C 70 50, 55 55, 45 45' fill='none' stroke='%23cd7f32' stroke-width='2'/><path d='M45 45 C 45 65, 30 70, 25 55 C 20 40, 35 35, 45 45' fill='none' stroke='%23f5ece3' stroke-width='1' stroke-opacity='0.5'/></svg>`
  },
  {
    id: "baka-fertility",
    name: "Baqa Naqshi",
    region: "Botken",
    regionId: "path-batken",
    desc: "Baqa (baqa) — qadimgi animistik qarashlarda suv, unumdorlik, oilaviy baxt va ayolning homiy ramzi bo'lgan. Smetrik joylashgan ushbu naqsh geometrik barqarorligi bilan interyerga tartib va muvozanat olib kiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'><rect width='70' height='70' fill='%232a1b10'/><path d='M35 15 L25 25 H45 Z M35 25 V45 M25 35 H45 M25 25 L15 35 L20 45 M45 25 L55 35 L50 45 M25 45 L15 55 M45 45 L55 55' fill='none' stroke='%23e5c158' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/><circle cx='35' cy='12' r='3' fill='%23cd7f32'/></svg>`
  },
  {
    id: "tumar-protection",
    name: "Tumar Tumor",
    region: "Chuy",
    regionId: "path-chuy",
    desc: "Tumar — tumor shaklidagi uchburchak naqsh bo'lib, uyingizni salbiy energiyalardan himoyalovchi tumor vazifasini o'taydi. Murakkab geometrik ramkaga solingan tumar naqshlari zamonaviy loft interyerlar uchun ajoyib tanlovdir.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect width='60' height='60' fill='%23201309'/><polygon points='30,5 55,30 30,55 5,30' fill='none' stroke='%23e5c158' stroke-width='2'/><polygon points='30,15 45,30 30,45 15,30' fill='%23cd7f32' fill-opacity='0.3'/><circle cx='30' cy='30' r='4' fill='%23f5ece3'/></svg>`
  },
  {
    id: "kerme-too",
    name: "Kerme-Too (Tog' Tizmasi)",
    region: "O'sh",
    regionId: "path-osh",
    desc: "Kerme-too naqshi Osmon-O'sh tizmasi va muqaddas Sulaymon tog'larining siluetlarini ifodalaydi. U bardoshlilik, yuksaklikka intilish va maqsad sari sabot ramzidir. Keng zallar uchun kenglik hissini oshiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='80' viewBox='0 0 100 80'><rect width='100' height='80' fill='%23190e06'/><path d='M0 40 L30 15 L60 45 L80 30 L100 50' fill='none' stroke='%23e5c158' stroke-width='2'/><path d='M0 60 L20 40 L50 70 L75 50 L100 75' fill='none' stroke='%23cd7f32' stroke-width='1.5'/><circle cx='50' cy='20' r='3' fill='%23f5ece3' opacity='0.7'/></svg>`
  },
  {
    id: "jyldyz-star",
    name: "Yulduz (Yulduzlar Turumi)",
    region: "Narin",
    regionId: "path-naryn",
    desc: "Yulduz — sivilizatsiyaning yorug'lik manbai, orzu va maqsadlar sari ko'rsatgich yulduzi hisoblanadi. Uning sakkiz burchakli simmetriyasi uyingiz shifti va yuqori zonalari bezagi uchun boy tarixiy ruh bag'ishlaydi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%2322150c'/><path d='M40 10 L48 32 H70 L52 45 L60 68 L40 54 L20 68 L28 45 L10 32 H32 Z' fill='none' stroke='%23e5c158' stroke-width='2'/><circle cx='40' cy='40' r='6' fill='%23cd7f32'/></svg>`
  },
  {
    id: "boralmush-swirl",
    name: "Boralmush (Bo'ron)",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Boralmush — tabiat qudrati va harakatini ifodalovchi quyun naqshidir. Doimiy aylanma harakat hayotning davomiyligi, davriylik va yangilanishni anglatadi. Dinamik interyer dizaynini xush ko'ruvchilar uchun mos keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%231d1108'/><path d='M40 40 C 40 20, 20 20, 20 40 C 20 60, 40 60, 40 40 C 40 60, 60 60, 60 40 C 60 20, 40 20, 40 40' fill='none' stroke='%23e5c158' stroke-width='2.5'/><path d='M40 40 C 30 30, 30 50, 40 40 C 50 30, 50 50, 40 40' fill='none' stroke='%23cd7f32' stroke-width='1.5'/></svg>`
  },
  {
    id: "altyn-oymo",
    name: "Altyn Oymo (Oltin O'ymo)",
    region: "Chuy",
    regionId: "path-chuy",
    desc: "Altyn oymo — an'anaviy zargarlik buyumlarining nozik o'yma naqshlaridan ilhomlangan. Oltin hoshiyali bu doiraviy naqsh farovonlik, boylik va mukammallik ramzi bo'lib, mehmonxonalarni dabdabali ko'rsatadi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2328190e'/><circle cx='50' cy='50' r='35' fill='none' stroke='%23e5c158' stroke-width='2'/><circle cx='50' cy='50' r='25' fill='none' stroke='%23cd7f32' stroke-dasharray='6,4'/><path d='M50 15 L50 85 M15 50 L85 50' stroke='%23e5c158' stroke-width='1'/><circle cx='50' cy='50' r='5' fill='%23f5ece3'/></svg>`
  },
  {
    id: "kosh-muiz",
    name: "Kosh-Muiz (Qo'sh Shox)",
    region: "Talas",
    regionId: "path-talas",
    desc: "Kosh-muiz — ikki qarama-qarshi joylashgan shox shakli bo'lib, hamkorlik, sherikchilik, oila va nikoh mustahkamligi timsolidir. Ushbu naqsh simmetriyasi uyingizga tartib, osoyishtalik va doimiy muvozanat olib keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%231f130b'/><path d='M10 40 C10 20, 30 20, 35 35 C38 45, 25 45, 25 40 M70 40 C70 20, 50 20, 45 35 C42 45, 55 45, 55 40' fill='none' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/><line x1='40' y1='10' x2='40' y2='70' stroke='%23cd7f32' stroke-width='1.5'/></svg>`
  },
  {
    id: "uluu-too",
    name: "Uluu-Too (Buyuk Tog'lar)",
    region: "Botken",
    regionId: "path-batken",
    desc: "Uluu-too — Tangri tog'larining ulug'vor cho'qqilarini ifodalovchi qatlamli geometrik uchburchaklardir. Bu naqsh bardoshlilik, yuksalish va tog'lardek mag'rur munosabatlarni tasvirlaydi. Keng interyerlar uchun mukammal mos keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='60' viewBox='0 0 80 60'><rect width='80' height='60' fill='%23190e06'/><polygon points='40,10 75,50 5,50' fill='none' stroke='%23e5c158' stroke-width='2'/><polygon points='40,25 60,50 20,50' fill='%23cd7f32' fill-opacity='0.25' stroke='%23cd7f32' stroke-width='1'/></svg>`
  },
  {
    id: "saimaluu-tash",
    name: "Saimaluu-Tash (Saymali Tosh)",
    region: "Jalolobod",
    regionId: "path-jalal-abad",
    desc: "Saymali-tosh — miloddan avvalgi asrlarda tog' toshlariga o'yilgan petrogliflar naqshidir. Ular ibtidoiy odamlar, tog' echkilari va quyosh shaklidan iborat. Uyingizga qadimiy sirlilik va chuqur tarixiy muhit olib kiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'><rect width='90' height='90' fill='%2323160d'/><circle cx='45' cy='45' r='12' fill='none' stroke='%23e5c158' stroke-width='2'/><path d='M45 25 V65 M25 45 H65' stroke='%23cd7f32' stroke-width='1.5'/><path d='M25 25 L35 35 M65 25 L55 35 M25 65 L35 55 M65 65 L55 55' stroke='%23f5ece3' stroke-width='1' stroke-opacity='0.5'/></svg>`
  },
  {
    id: "ak-keme",
    name: "Ak-Keme (Oq Kema)",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Oq kema — qadimgi ko'l va undagi to'lqinlar hamda mashhur Chingiz Aytmatov qissasidagi umid kemasining to'lqinli tasviridir. Bu naqsh yorug' kelajak, ezgu orzular va shaffoflik ramzidir.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='60' viewBox='0 0 100 60'><rect width='100' height='60' fill='%231a0f08'/><path d='M0 30 Q12 15, 25 30 T50 30 T75 30 T100 30' fill='none' stroke='%23f5ece3' stroke-width='2' stroke-opacity='0.8'/><path d='M0 45 Q12 30, 25 45 T50 45 T75 45 T100 45' fill='none' stroke='%23e5c158' stroke-width='1.5'/></svg>`
  }
];

// Region Descriptions for the Map
const regionData = {
  "path-naryn": {
    name: "Narin viloyati",
    subtitle: "Kigizchilik va Shirdoqlar markazi",
    desc: "Narin viloyati o'zining sovuq iqlimi va tog'li relyefi sababli qadimdan jun to'qish va kigizchilik o'chog'i bo'lgan. Bu yerda yaratilgan gilamlar va Shirdoq devor naqshlari eng bardoshli va geometrik jihatdan mukammal hisoblanadi.",
    highlightPatternId: "shyrdak-classic"
  },
  "path-issyk-kul": {
    name: "Issiq-Ko'l viloyati",
    subtitle: "Moviy ko'l va Ala-kiyiz beshigi",
    desc: "Issiq-Ko'l o'zining buyuk va shaffof ko'li bilan mashhur. Bu yerdagi hunarmandlar asosan 'Ala-kiyiz' usulida to'lqinli naqshlar yaratgan. Ularning dizaynlarida moviylik, to'lqin va tabiat harakati erkin aks etadi.",
    highlightPatternId: "ala-kiyiz"
  },
  "path-osh": {
    name: "O'sh viloyati",
    subtitle: "Qadimiy qadriyatlar va Quroq mozaikasi",
    desc: "O'sh — 3000 yillik tarixga ega qadimiy shahar va hunarmandchilik chorrahasidir. Bu yerda urug'larning birlashuvini ifodalovchi rang-barang 'Quroq' mozaikalari va muqaddas Kerme-too tog' naqshlari keng tarqalgan.",
    highlightPatternId: "kurak-mosaic"
  },
  "path-talas": {
    name: "Talas viloyati",
    subtitle: "Botirlar yurti va Qochqor-muiz shuxrati",
    desc: "Manas bobo yurti bo'lmish Talas viloyatida mardlik va jasorat ramzi bo'lgan 'Qochqor-muiz' (qo'chqor shoxi) naqshi eng ko'p bezaklarda ishlatiladi. Bu yerda kuch, boylik va jasorat ramzlari shakllangan.",
    highlightPatternId: "kochkor-muiz"
  },
  "path-jalal-abad": {
    name: "Jalolobod viloyati",
    subtitle: "Yong'oqzorlar va sirli Saymali-tosh",
    desc: "Jalolobod o'zining dunyodagi eng yirik yovvoyi yong'oqzorlari va Saymali-tosh petrogliflari bilan dunyoga mashhur. Mahalliy naqshlar ko'proq o'simlik dunyosi, Xiyol (barg bargi) va qadimgi tosh tasvirlarini qamrab oladi.",
    highlightPatternId: "kyal-dream"
  },
  "path-batken": {
    name: "Botken viloyati",
    subtitle: "Gullar vodiysi va qadimgi Baqa naqshi",
    desc: "Aygul guli maskani bo'lgan Botken viloyatining naqshlarida qadimiy ramziylik kuchli saqlangan. Bu yerda unumdorlik va tabiat uyg'unligi ramzi bo'lgan 'Baqa' naqshi hamda tog' tizmalari ('Uluu-too') keng tasvirlangan.",
    highlightPatternId: "baka-fertility"
  },
  "path-chuy": {
    name: "Chuy viloyati",
    subtitle: "Madaniyatlar tutashgan manzil va Tumor",
    desc: "Chuy viloyati shimoliy madaniy va savdo markazi bo'lib, bu yerda naqshlarning turli urug'larga xos elementlari uyg'unlashgan. Ayniqsa, uylarni himoya qiluvchi geometrik 'Tumor' himoya naqshlari keng qo'llangan.",
    highlightPatternId: "tumar-protection"
  }
};

// Global variables
let activePattern = wallpaperPatterns[0];
let currentScale = "100px";

// Elements Selection
const heroPatternFill = document.getElementById("heroPatternFill");
const heroPatternName = document.getElementById("heroPatternName");
const heroPatternRegion = document.getElementById("heroPatternRegion");

const galleryGrid = document.getElementById("galleryGrid");

const roomWall = document.getElementById("roomWall");
const visualizerRegion = document.getElementById("visualizerRegion");
const visualizerName = document.getElementById("visualizerName");
const visualizerDesc = document.getElementById("visualizerDesc");

const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const scaleBtns = document.querySelectorAll(".scale-controls .scale-btn");

const mapPaths = document.querySelectorAll(".region-path");
const mapRegionName = document.getElementById("mapRegionName");
const mapRegionDesc = document.getElementById("mapRegionDesc");
const mapHighlightCard = document.getElementById("mapHighlightCard");
const mapHighlightPreview = document.getElementById("mapHighlightPreview");
const mapHighlightName = document.getElementById("mapHighlightName");

// Mobile Menu Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Scroll Effects (Header Glassmorphism)
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  // Update active navigation link on scroll
  let scrollPosition = window.scrollY + 100;
  document.querySelectorAll("section").forEach(section => {
    if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Helper: Convert Raw SVG into a safe CSS data URI
function getSvgDataUrl(svgString) {
  const cleanSvg = svgString.trim();
  const base64 = btoa(unescape(encodeURIComponent(cleanSvg)));
  return `url("data:image/svg+xml;base64,${base64}")`;
}

// Set Active Wallpaper
function applyWallpaper(pattern) {
  activePattern = pattern;
  
  // 1. Update Room Visualizer
  const svgUrl = getSvgDataUrl(pattern.svgPattern);
  roomWall.style.backgroundImage = svgUrl;
  visualizerName.innerText = pattern.name;
  visualizerRegion.innerText = `${pattern.region} viloyati`;
  visualizerDesc.innerText = pattern.desc;
  
  // 2. Update Gallery Selection Highlighting
  document.querySelectorAll(".gallery-card").forEach(card => {
    card.classList.remove("active");
    if (card.dataset.id === pattern.id) {
      card.classList.add("active");
    }
  });
  
  // 3. Update Hero Showcase rotation background
  heroPatternFill.style.backgroundImage = svgUrl;
  heroPatternName.innerText = pattern.name;
  heroPatternRegion.innerText = `${pattern.region} viloyati`;
}

// Build 15 Wallpaper Cards in Grid
function buildGalleryGrid() {
  galleryGrid.innerHTML = "";
  
  wallpaperPatterns.forEach((pattern, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card glass-card animate-on-scroll";
    card.dataset.id = pattern.id;
    card.style.transitionDelay = `${(index % 4) * 0.1}s`; // Staggered loading animation
    
    const svgUrl = getSvgDataUrl(pattern.svgPattern);
    
    card.innerHTML = `
      <div class="pattern-preview-container">
        <div class="pattern-preview-fill" style="background-image: ${svgUrl};"></div>
      </div>
      <div class="pattern-card-info">
        <div class="pattern-meta">
          <span class="pattern-region">${pattern.region}</span>
          <span class="pattern-number">#${String(index + 1).padStart(2, '0')}</span>
        </div>
        <h4 class="pattern-title">${pattern.name}</h4>
        <p class="pattern-desc-short">${pattern.desc}</p>
      </div>
    `;
    
    card.addEventListener("click", () => {
      applyWallpaper(pattern);
      // Smooth scroll to visualizer after clicking a wallpaper card
      document.getElementById("visualizer").scrollIntoView({ behavior: "smooth" });
    });
    
    galleryGrid.appendChild(card);
  });
}

// Room Visualizer Controls
// 1. Zoom In/Out
let currentSizeVal = 100; // in px
zoomInBtn.addEventListener("click", () => {
  if (currentSizeVal < 240) {
    currentSizeVal += 20;
    roomWall.style.backgroundSize = `${currentSizeVal}px`;
    updateScaleButtonStates(currentSizeVal);
  }
});

zoomOutBtn.addEventListener("click", () => {
  if (currentSizeVal > 40) {
    currentSizeVal -= 20;
    roomWall.style.backgroundSize = `${currentSizeVal}px`;
    updateScaleButtonStates(currentSizeVal);
  }
});

// Helper to keep scale buttons active state in sync with zooming buttons
function updateScaleButtonStates(size) {
  scaleBtns.forEach(btn => {
    btn.classList.remove("active");
    const val = parseInt(btn.dataset.scale);
    if (Math.abs(val - size) < 15) {
      btn.classList.add("active");
    }
  });
}

// 2. Predefined Scale Buttons
scaleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    scaleBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    currentScale = btn.dataset.scale;
    currentSizeVal = parseInt(currentScale);
    roomWall.style.backgroundSize = currentScale;
  });
});

// Interactive Kyrgyzstan Map Integration
function handleMapInteraction() {
  mapPaths.forEach(path => {
    path.addEventListener("click", () => {
      const regionId = path.id;
      const data = regionData[regionId];
      
      if (!data) return;
      
      // 1. Highlight clicked path
      mapPaths.forEach(p => p.classList.remove("active"));
      path.classList.add("active");
      
      // 2. Update region details card
      mapRegionName.innerText = data.name;
      mapRegionDesc.innerText = data.desc;
      document.querySelector(".map-info-subtitle").innerText = data.subtitle;
      
      // 3. Update the highlight pattern card
      const pattern = wallpaperPatterns.find(p => p.id === data.highlightPatternId);
      if (pattern) {
        mapHighlightPreview.style.backgroundImage = getSvgDataUrl(pattern.svgPattern);
        mapHighlightName.innerText = pattern.name;
        mapHighlightCard.dataset.patternId = pattern.id;
      }
    });
  });
  
  // Highlight card click applies that pattern to visualizer
  mapHighlightCard.addEventListener("click", () => {
    const patternId = mapHighlightCard.dataset.patternId || "shyrdak-classic";
    const pattern = wallpaperPatterns.find(p => p.id === patternId);
    if (pattern) {
      applyWallpaper(pattern);
      document.getElementById("visualizer").scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Scroll Entrance Animations Observer
function initScrollObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        // Once visible, stop tracking
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Target both standard scroll items and newly created cards
  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
  
  // Let the gallery grid build, then observe cards
  setTimeout(() => {
    document.querySelectorAll(".gallery-card").forEach(el => observer.observe(el));
    document.querySelectorAll(".section-header").forEach(el => observer.observe(el));
  }, 100);
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  buildGalleryGrid();
  applyWallpaper(wallpaperPatterns[0]); // Apply default Shyrdak pattern
  handleMapInteraction();
  initScrollObserver();
  
  // Trigger map default click (Naryn)
  const defaultMapPath = document.getElementById("path-naryn");
  if (defaultMapPath) {
    defaultMapPath.dispatchEvent(new Event("click"));
  }
});
