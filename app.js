// app.js - Gallery Website Logic

// 15 Traditional Kyrgyz Wallpaper Patterns Data
const wallpaperPatterns = [
  {
    id: "shyrdak-classic",
    name: "Klassik Shirdoq",
    region: "Narin",
    regionId: "path-naryn",
    desc: "Shirdoq — qirg'iz kigizchilik san'atining eng yorqin namunasidir. Uning naqshlari suv, ulug'vor tog'lar va o't-o'lanlarni ifodalaydi. Klassik jigarrang va oltin elementlar xonadonda milliy o'ziga xoslik va iliqlik muhitini yaratadi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23190e06'/><path d='M60 5 L115 60 L60 115 L5 60 Z' fill='%233a1e12' stroke='%23e5c158' stroke-width='3' stroke-linejoin='round'/><path d='M60 25 C50 25 40 35 40 45 C40 52 48 55 52 50 C55 45 50 38 45 40 C43 41 43 45 45 45' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M60 25 C70 25 80 35 80 45 C80 52 72 55 68 50 C65 45 70 38 75 40 C77 41 77 45 75 45' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M60 95 C50 95 40 85 40 75 C40 68 48 65 52 70 C55 75 50 82 45 80 C43 79 43 75 45 75' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M60 95 C70 95 80 85 80 75 C80 68 72 65 68 70 C65 75 70 82 75 80 C77 79 77 75 75 75' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M0 60 C15 55 25 45 25 35 C25 25 15 20 10 25 M0 60 C15 65 25 75 25 85 C25 95 15 100 10 95' fill='none' stroke='%23e5c158' stroke-width='2'/><path d='M120 60 C105 55 95 45 95 35 C95 25 105 20 110 25 M120 60 C105 65 95 75 95 85 C95 95 105 100 110 95' fill='none' stroke='%23e5c158' stroke-width='2'/></svg>`
  },
  {
    id: "ala-kiyiz",
    name: "Ala-kiyiz To'lqinlari",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Ala-kiyiz — bosilgan kigizdan tayyorlanadigan gilam bo'lib, uning naqshlari erkinroq va organik oqimga ega. Ushbu naqsh tabiatdagi shamol va suv to'lqinlarining harakatini ifodalaydi va zamonaviy yashash xonalari uchun ajoyib dinamika beradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%2322150c'/><path d='M-20 40 Q 20 10, 60 40 T 140 40 T 220 40 L220 180 L-20 180 Z' fill='%232c1c11'/><path d='M-20 100 Q 20 70, 60 100 T 140 100 T 220 100 L220 180 L-20 180 Z' fill='%23362215'/><path d='M0 60 Q 40 20, 80 60 T 160 60' fill='none' stroke='%23e5c158' stroke-width='2' stroke-opacity='0.6'/><path d='M0 120 Q 40 80, 80 120 T 160 120' fill='none' stroke='%23cd7f32' stroke-width='2' stroke-opacity='0.4'/><path d='M40 60 C30 50, 20 60, 30 70 C40 80, 50 60, 40 50 M120 120 C110 110, 100 120, 110 130 C120 140, 130 120, 120 110' fill='none' stroke='%23e5c158' stroke-width='1.5'/></svg>`
  },
  {
    id: "kurak-mosaic",
    name: "Quroq Mozaikasi",
    region: "O'sh",
    regionId: "path-osh",
    desc: "Quroq — parchalar yig'indisidan iborat mozaik naqsh bo'lib, oila birligi, farovonlik va uydagi tinchlik-totuvlik ramzidir. Har bir uchburchak va kvadrat elementlar hayot yo'llarining birlashishini bildiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23190e06'/><polygon points='0,0 50,50 0,100' fill='%232a180e'/><polygon points='100,0 50,50 100,100' fill='%232a180e'/><polygon points='0,0 50,50 100,0' fill='%23362013'/><polygon points='0,100 50,50 100,100' fill='%23362013'/><polygon points='50,20 80,50 50,80 20,50' fill='%23cd7f32' fill-opacity='0.25' stroke='%23e5c158' stroke-width='1'/><polygon points='50,30 70,50 50,70 30,50' fill='%23e5c158' fill-opacity='0.3'/><path d='M0 0 L100 100 M100 0 L0 100 M50 20 L50 80 M20 50 L80 50' stroke='%23f5ece3' stroke-width='1.5' stroke-dasharray='3, 4' stroke-opacity='0.35'/></svg>`
  },
  {
    id: "kochkor-muiz",
    name: "Qochqor-Muiz (Qo'chqor Shoxi)",
    region: "Talas",
    regionId: "path-talas",
    desc: "Qochqor-muiz qirg'iz naqshlarining eng qadimiy elementlaridan biridir. U qo'chqor shoxlarini ifodalab, kuch-qudrat, jasorat, boylik va mo'l-ko'lchilik ramzi hisoblanadi. Kabinet yoki ish xonalari uchun juda mos.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%2322150c'/><path d='M0 60 H120 M60 0 V120' stroke='%23321f12' stroke-width='1'/><g transform='translate(60,60)'><path d='M0 0 Q -30 -10 -40 -35 C -50 -60 -20 -70 -10 -55 C 0 -40 -20 -35 -25 -45' fill='none' stroke='%23e5c158' stroke-width='3.5' stroke-linecap='round'/><path d='M0 0 Q 30 -10 40 -35 C 50 -60 20 -70 10 -55 C 0 -40 20 -35 25 -45' fill='none' stroke='%23e5c158' stroke-width='3.5' stroke-linecap='round'/><path d='M0 0 Q -30 10 -40 35 C -50 60 -20 70 -10 55 C 0 40 -20 35 -25 45' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M0 0 Q 30 10 40 35 C 50 60 20 70 10 55 C 0 40 20 35 25 45' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/></g><circle cx='60' cy='60' r='6' fill='%23f5ece3'/></svg>`
  },
  {
    id: "kyal-dream",
    name: "Kyal (Xiyol)",
    region: "Jalolobod",
    regionId: "path-jalal-abad",
    desc: "Xiyol — shashqa va o'simlik barglarining silliq, nafis chiziqlari bilan chizilgan naqshdir. U erkin hayot, ijodiy tafakkur va cheksiz tasavvurni anglatadi. Yotoqxonalarga mayinlik va xotirjamlik bag'ishlaydi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><rect width='140' height='140' fill='%23190f07'/><path d='M0 70 Q 35 35, 70 70 T 140 70' fill='none' stroke='%233d2619' stroke-width='2'/><path d='M0 70 C 20 40, 50 40, 70 70' fill='none' stroke='%23e5c158' stroke-width='2.5' stroke-linecap='round'/><path d='M35 52 C45 40, 55 45, 50 60 C40 65, 30 60, 35 52 Z' fill='%23cd7f32' fill-opacity='0.4' stroke='%23e5c158' stroke-width='1.5'/><path d='M105 88 C115 76, 125 81, 120 96 C110 101, 100 96, 105 88 Z' fill='%23cd7f32' fill-opacity='0.4' stroke='%23e5c158' stroke-width='1.5'/><path d='M70 70 C 70 90, 85 100, 95 95 C 105 90, 95 75, 85 85' fill='none' stroke='%23cd7f32' stroke-width='2'/><path d='M70 70 C 70 50, 55 40, 45 45 C 35 50, 45 65, 55 55' fill='none' stroke='%23f5ece3' stroke-width='1.5' stroke-opacity='0.6'/></svg>`
  },
  {
    id: "baka-fertility",
    name: "Baqa Naqshi",
    region: "Botken",
    regionId: "path-batken",
    desc: "Baqa (baqa) — qadimgi animistik qarashlarda suv, unumdorlik, oilaviy baxt va ayolning homiy ramzi bo'lgan. Smetrik joylashgan ushbu naqsh geometrik barqarorligi bilan interyerga tartib va muvozanat olib kiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2324180e'/><g transform='translate(50,50)'><path d='M0 -30 L-12 -15 H12 Z' fill='%23e5c158'/><path d='M0 -15 V20' stroke='%23e5c158' stroke-width='3'/><path d='M-12 -5 H12 M-12 -5 C -25 -5, -30 -15, -25 -25 M12 -5 C 25 -5, 30 -15, 25 -25' fill='none' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/><path d='M-12 15 H12 M-12 15 C -25 15, -30 25, -20 35 M12 15 C 25 15, 30 25, 20 35' fill='none' stroke='%23cd7f32' stroke-width='3.5' stroke-linecap='round'/><circle cx='-6' cy='-33' r='2' fill='%23f5ece3'/><circle cx='6' cy='-33' r='2' fill='%23f5ece3'/><polygon points='-40,0 -35,-5 -30,0 -35,5' fill='none' stroke='%23cd7f32' stroke-width='1'/><polygon points='40,0 45,-5 50,0 45,5' fill='none' stroke='%23cd7f32' stroke-width='1'/></g></svg>`
  },
  {
    id: "tumar-protection",
    name: "Tumar Tumor",
    region: "Chuy",
    regionId: "path-chuy",
    desc: "Tumar — tumor shaklidagi uchburchak naqsh bo'lib, uyingizni salbiy energiyalardan himoyalovchi tumor vazifasini o'taydi. Murakkab geometrik ramkaga solingan tumar naqshlari zamonaviy loft interyerlar uchun ajoyib tanlovdir.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23190e06'/><path d='M60 0 L120 60 L60 120 L0 60 Z' fill='none' stroke='%23321f12' stroke-width='1.5'/><g transform='translate(60,60)'><polygon points='0,-45 -40,15 40,15' fill='%23362013' stroke='%23e5c158' stroke-width='2.5'/><polygon points='0,-30 -25,10 25,10' fill='%23cd7f32' fill-opacity='0.3' stroke='%23cd7f32' stroke-width='1.5'/><circle cx='0' cy='-5' r='4' fill='%23f5ece3'/><path d='M-10 25 H10 L0 35 Z' fill='%23e5c158'/></g><polygon points='0,0 10,0 0,10' fill='%23cd7f32'/><polygon points='120,0 110,0 120,10' fill='%23cd7f32'/><polygon points='0,120 10,120 0,110' fill='%23cd7f32'/><polygon points='120,120 110,120 120,110' fill='%23cd7f32'/></svg>`
  },
  {
    id: "kerme-too",
    name: "Kerme-Too (Tog' Tizmasi)",
    region: "O'sh",
    regionId: "path-osh",
    desc: "Kerme-too naqshi Osmon-O'sh tizmasi va muqaddas Sulaymon tog'larining siluetlarini ifodalaydi. U bardoshlilik, yuksaklikka intilish va maqsad sari sabot ramzidir. Keng zallar uchun kenglik hissini oshiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%23120b06'/><path d='M0 80 L35 45 L70 85 L115 35 L150 75 L180 50 L180 120 L0 120 Z' fill='%2322150c' stroke='%233c271a' stroke-width='1.5'/><path d='M0 100 L45 65 L90 105 L130 55 L180 100 L180 120 L0 120 Z' fill='%232e1d12' stroke='%23cd7f32' stroke-width='1.5' stroke-opacity='0.8'/><path d='M0 115 L25 90 L60 120 L105 85 L145 115 L180 90 L180 120 L0 120 Z' fill='none' stroke='%23e5c158' stroke-width='2' stroke-linecap='round'/><circle cx='30' cy='25' r='1.5' fill='%23f5ece3' opacity='0.7'/><circle cx='90' cy='20' r='2' fill='%23e5c158' opacity='0.9'/><circle cx='140' cy='30' r='1' fill='%23f5ece3' opacity='0.5'/></svg>`
  },
  {
    id: "jyldyz-star",
    name: "Yulduz (Yulduzlar Turumi)",
    region: "Narin",
    regionId: "path-naryn",
    desc: "Yulduz — sivilizatsiyaning yorug'lik manbai, orzu va maqsadlar sari ko'rsatgich yulduzi hisoblanadi. Uning sakkiz burchakli simmetriyasi uyingiz shifti va yuqori zonalari bezagi uchun boy tarixiy ruh bag'ishlaydi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231d120a'/><path d='M50 0 V100 M0 50 H100 M0 0 L100 100 M100 0 L0 100' stroke='%232c1b10' stroke-width='1'/><g transform='translate(50,50)'><path d='M0 -40 L10 -15 L35 -25 L20 0 L45 10 L15 15 L25 40 L0 25 L-25 40 L-15 15 L-45 10 L-20 0 L-35 -25 L-10 -15 Z' fill='%232a180e' stroke='%23e5c158' stroke-width='2' stroke-linejoin='round'/><circle cx='0' cy='0' r='10' fill='none' stroke='%23cd7f32' stroke-width='1.5'/><polygon points='0,-8 6,0 0,8 -6,0' fill='%23f5ece3'/></g></svg>`
  },
  {
    id: "boralmush-swirl",
    name: "Boralmush (Bo'ron)",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Boralmush — tabiat qudrati va harakatini ifodalovchi quyun naqshidir. Doimiy aylanma harakat hayotning davomiyligi, davriylik va yangilanishni anglatadi. Dinamik interyer dizaynini xush ko'ruvchilar uchun mos keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23190e06'/><g transform='translate(60,60)'><circle cx='0' cy='0' r='12' fill='none' stroke='%23cd7f32' stroke-width='2.5'/><path d='M0 -12 C-15 -12, -25 -25, -20 -40 C-15 -55, 5 -45, 0 -30' fill='none' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/><path d='M0 12 C15 12, 25 25, 20 40 C15 55, -5 45, 0 30' fill='none' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/><path d='M-12 0 C-12 15, -25 25, -40 20 C-55 15, -45 -5, -30 0' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><path d='M12 0 C12 -15, 25 -25, 40 -20 C55 -15, 45 5, 30 0' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/><circle cx='0' cy='0' r='4' fill='%23f5ece3'/></g></svg>`
  },
  {
    id: "altyn-oymo",
    name: "Altyn Oymo (Oltin O'ymo)",
    region: "Chuy",
    regionId: "path-chuy",
    desc: "Altyn oymo — an'anaviy zargarlik buyumlarining nozik o'yma naqshlaridan ilhomlangan. Oltin hoshiyali bu doiraviy naqsh farovonlik, boylik va mukammallik ramzi bo'lib, mehmonxonalarni dabdabali ko'rsatadi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><rect width='140' height='140' fill='%2322150c'/><circle cx='70' cy='70' r='55' fill='none' stroke='%23e5c158' stroke-width='3'/><circle cx='70' cy='70' r='45' fill='none' stroke='%23cd7f32' stroke-width='1.5' stroke-dasharray='5, 4'/><g transform='translate(70,70)'><path d='M0 -35 C -15 -35, -20 -15, 0 -15 C 20 -15, 15 -35, 0 -35 Z' fill='%233a2315' stroke='%23e5c158' stroke-width='1.5'/><path d='M0 35 C -15 35, -20 15, 0 15 C 20 15, 15 35, 0 35 Z' fill='%233a2315' stroke='%23e5c158' stroke-width='1.5'/><path d='M-35 0 C -35 -15, -15 -20, -15 0 C -15 20, -35 15, -35 0 Z' fill='%233a2315' stroke='%23cd7f32' stroke-width='1.5'/><path d='M35 0 C 35 -15, 15 -20, 15 0 C 15 20, 35 15, 35 0 Z' fill='%233a2315' stroke='%23cd7f32' stroke-width='1.5'/><circle cx='0' cy='0' r='5' fill='%23f5ece3'/></g><circle cx='0' cy='70' r='55' fill='none' stroke='%23e5c158' stroke-width='0.75' opacity='0.3'/><circle cx='140' cy='70' r='55' fill='none' stroke='%23e5c158' stroke-width='0.75' opacity='0.3'/></svg>`
  },
  {
    id: "kosh-muiz",
    name: "Kosh-Muiz (Qo'sh Shox)",
    region: "Talas",
    regionId: "path-talas",
    desc: "Kosh-muiz — ikki qarama-qarshi joylashgan shox shakli bo'lib, hamkorlik, sherikchilik, oila va nikoh mustahkamligi timsolidir. Ushbu naqsh simmetriyasi uyingizga tartib, osoyishtalik va doimiy muvozanat olib keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23190f07'/><rect x='0' y='0' width='60' height='60' fill='%2322150c'/><rect x='60' y='60' width='60' height='60' fill='%2322150c'/><g transform='translate(30,30)'><path d='M-15 0 C-15 -15, -5 -20, 0 -5 C3 10, -10 10, -10 0 M15 0 C15 -15, 5 -20, 0 -5 C-3 10, 10 10, 10 0' fill='none' stroke='%23e5c158' stroke-width='2.5' stroke-linecap='round'/></g><g transform='translate(90,30)'><path d='M-15 0 C-15 -15, -5 -20, 0 -5 C3 10, -10 10, -10 0 M15 0 C15 -15, 5 -20, 0 -5 C-3 10, 10 10, 10 0' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/></g><g transform='translate(30,90)'><path d='M-15 0 C-15 -15, -5 -20, 0 -5 C3 10, -10 10, -10 0 M15 0 C15 -15, 5 -20, 0 -5 C-3 10, 10 10, 10 0' fill='none' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/></g><g transform='translate(90,90)'><path d='M-15 0 C-15 -15, -5 -20, 0 -5 C3 10, -10 10, -10 0 M15 0 C15 -15, 5 -20, 0 -5 C-3 10, 10 10, 10 0' fill='none' stroke='%23e5c158' stroke-width='2.5' stroke-linecap='round'/></g></svg>`
  },
  {
    id: "uluu-too",
    name: "Uluu-Too (Buyuk Tog'lar)",
    region: "Botken",
    regionId: "path-batken",
    desc: "Uluu-too — Tangri tog'larining ulug'vor cho'qqilarini ifodalovchi qatlamli geometrik uchburchaklardir. Bu naqsh bardoshlilik, yuksalish va tog'lardek mag'rur munosabatlarni tasvirlaydi. Keng interyerlar uchun mukammal mos keladi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='100' viewBox='0 0 140 100'><rect width='140' height='100' fill='%231a0e05'/><polygon points='70,10 135,90 5,90' fill='%2328170d' stroke='%23cd7f32' stroke-width='2'/><polygon points='70,30 115,85 25,85' fill='%23362013' stroke='%23e5c158' stroke-width='2'/><polygon points='70,50 95,80 45,80' fill='%231a0e05' stroke='%23f5ece3' stroke-width='1.5' stroke-opacity='0.7'/><path d='M0 90 L10 80 L20 90 M120 90 L130 80 L140 90' stroke='%23e5c158' stroke-width='1.5'/></svg>`
  },
  {
    id: "saimaluu-tash",
    name: "Saimaluu-Tash (Saymali Tosh)",
    region: "Jalolobod",
    regionId: "path-jalal-abad",
    desc: "Saymali-tosh — miloddan avvalgi asrlarda tog' toshlariga o'yilgan petrogliflar naqshidir. Ular ibtidoiy odamlar, tog' echkilari va quyosh shaklidan iborat. Uyingizga qadimiy sirlilik va chuqur tarixiy muhit olib kiradi.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%231e130a'/><path d='M0 20 C40 10, 120 30, 160 10 L160 160 L0 160 Z' fill='%2325170d'/><path d='M0 80 C60 90, 90 70, 160 90 L160 160 L0 160 Z' fill='%232a1a0f'/><g transform='translate(40,40) scale(0.7)'><path d='M20 10 Q -10 -15, -15 -35 M20 10 Q -5 -5, -8 -25' fill='none' stroke='%23e5c158' stroke-width='3.5' stroke-linecap='round'/><path d='M20 10 L5 25 H-30 L-35 45 M-30 25 L-25 45 M5 25 L10 45' fill='none' stroke='%23e5c158' stroke-width='4' stroke-linecap='round'/><path d='M20 10 L25 18 M20 10 L28 6' stroke='%23e5c158' stroke-width='3' stroke-linecap='round'/></g><g transform='translate(120,110) scale(0.6)'><circle cx='0' cy='0' r='15' fill='none' stroke='%23cd7f32' stroke-width='3'/><path d='M0 -15 V-25 M0 15 V25 M-15 0 H-25 M15 0 H25 M-10 -10 L-18 -18 M10 10 L18 18 M-10 10 L-18 18 M10 -10 L18 -18' stroke='%23cd7f32' stroke-width='2.5' stroke-linecap='round'/></g><path d='M0 0 L15 15 M160 0 L145 15 M0 160 L20 140' stroke='%23321f12' stroke-width='1.5' opacity='0.5'/></svg>`
  },
  {
    id: "ak-keme",
    name: "Ak-Keme (Oq Kema)",
    region: "Issiq-Ko'l",
    regionId: "path-issyk-kul",
    desc: "Oq kema — qadimgi ko'l va undagi to'lqinlar hamda mashhur Chingiz Aytmatov qissasidagi umid kemasining to'lqinli tasviridir. Bu naqsh yorug' kelajak, ezgu orzular va shaffoflik ramzidir.",
    svgPattern: `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' fill='%23190f08'/><path d='M0 40 Q20 25, 40 40 T80 40 T120 40 T160 40' fill='none' stroke='%23cd7f32' stroke-width='2'/><path d='M0 60 Q20 45, 40 60 T80 60 T120 60 T160 60' fill='none' stroke='%23e5c158' stroke-width='2.5'/><path d='M0 80 Q20 65, 40 80 T80 80 T120 80 T160 80' fill='none' stroke='%23f5ece3' stroke-width='1.5' stroke-opacity='0.4'/><g transform='translate(30, 15) scale(0.8)'><polygon points='15,0 30,25 0,25' fill='%23f5ece3' fill-opacity='0.9'/><path d='M0 27 H30 L25 33 H5 Z' fill='%23e5c158'/></g><g transform='translate(110, 15) scale(0.8)'><polygon points='15,0 30,25 0,25' fill='%23f5ece3' fill-opacity='0.9'/><path d='M0 27 H30 L25 33 H5 Z' fill='%23cd7f32'/></g></svg>`
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

// Theme Toggle Logic
const themeToggleBtn = document.getElementById("themeToggle");
const sunIcon = themeToggleBtn.querySelector(".sun-icon");
const moonIcon = themeToggleBtn.querySelector(".moon-icon");

// Initialize theme icon display state (Light Theme is default)
sunIcon.style.display = "none";
moonIcon.style.display = "block";

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
  
  // Toggle icons
  if (currentTheme === "light") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
  
  // Re-build grid and re-apply active wallpaper dynamically
  buildGalleryGrid();
  applyWallpaper(activePattern);
  
  // Update map highlight preview
  const mapHighlightPreview = document.getElementById("mapHighlightPreview");
  if (mapHighlightPreview && mapHighlightCard.dataset.patternId) {
    const pattern = wallpaperPatterns.find(p => p.id === mapHighlightCard.dataset.patternId);
    if (pattern) {
      mapHighlightPreview.style.backgroundImage = getSvgDataUrl(pattern.svgPattern);
    }
  }
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

// Global Theme State
let currentTheme = "light";

// Helper: Adapt SVG color system dynamically for Light/Cream Theme
function adaptSvgForTheme(svgString, theme) {
  if (theme === 'light') {
    let result = svgString
      .replace(/fill='%23190e06'/g, "fill='%23faf7f2'")
      .replace(/fill='%2322150c'/g, "fill='%23faf7f2'")
      .replace(/fill='%2324180e'/g, "fill='%23faf7f2'")
      .replace(/fill='%231e130a'/g, "fill='%23faf7f2'")
      .replace(/fill='%231a0e05'/g, "fill='%23faf7f2'")
      .replace(/fill='%23190f08'/g, "fill='%23faf7f2'")
      .replace(/fill='%2325160c'/g, "fill='%23faf7f2'")
      .replace(/fill='%232c1c11'/g, "fill='%23faf7f2'")
      .replace(/fill='%231e120a'/g, "fill='%23faf7f2'")
      .replace(/fill='%23190f07'/g, "fill='%23faf7f2'")
      .replace(/fill='%232a1b10'/g, "fill='%23faf7f2'")
      .replace(/fill='%23201309'/g, "fill='%23faf7f2'")
      .replace(/fill='%23120b06'/g, "fill='%23faf7f2'")
      .replace(/fill='%231d120a'/g, "fill='%23faf7f2'")
      .replace(/fill='%2328190e'/g, "fill='%23faf7f2'")
      .replace(/fill='%231f130b'/g, "fill='%23faf7f2'")
      .replace(/fill='%2323160d'/g, "fill='%23faf7f2'")
      .replace(/fill='%232c1b10'/g, "fill='%23faf7f2'")
      .replace(/fill='%233a1e12'/g, "fill='%23f5efeb'")
      .replace(/fill='%2328170d'/g, "fill='%23f5efeb'")
      .replace(/fill='%23362013'/g, "fill='%23ebdccb'")
      .replace(/fill='%233a2315'/g, "fill='%23ebdccb'")
      .replace(/fill='%231a0e08'/g, "fill='%23faf7f2'")
      .replace(/fill='%2325170d'/g, "fill='%23faf7f2'")
      .replace(/fill='%232a1a0f'/g, "fill='%23faf7f2'")
      .replace(/fill='%232e1d12'/g, "fill='%23ebdccb'")
      .replace(/fill='%232d1d13'/g, "fill='%23faf7f2'")
      .replace(/fill='%233c271a'/g, "fill='%23faf7f2'")
      .replace(/fill='%232d1c10'/g, "fill='%23faf7f2'")
      .replace(/fill='%232a180e'/g, "fill='%23f5efeb'");

    result = result.replace(/stroke='%23f5ece3'/g, "stroke='%2327160c'")
                   .replace(/fill='%23f5ece3'/g, "fill='%2327160c'");
    return result;
  }
  return svgString;
}

// Helper: Convert Raw SVG into a safe CSS data URI (Base64 encoded)
function getSvgDataUrl(svgString) {
  const cleanSvg = svgString.trim();
  const themedSvg = adaptSvgForTheme(cleanSvg, currentTheme);
  const base64 = btoa(unescape(encodeURIComponent(themedSvg)));
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
