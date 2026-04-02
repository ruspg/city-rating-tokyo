import { StationRatings, TransitMinutes, RentAvg } from '@/lib/types';

interface DemoData {
  ratings: StationRatings;
  transit_minutes: TransitMinutes;
  rent_avg: RentAvg;
  description?: {
    atmosphere: string;
    landmarks: string;
    food: string;
    nightlife: string;
  };
}

// Station data from AI research - 50 stations
export const DEMO_RATINGS: Record<string, DemoData> = {
  // === Original 20 stations ===
  shinjuku: {
    ratings: { food: 9, nightlife: 10, transport: 10, rent: 3, safety: 6, green: 5, gym_sports: 8, vibe: 8, crowd: 2 },
    transit_minutes: { shibuya: 5, shinjuku: 0, tokyo: 15, ikebukuro: 8, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 135000, '2ldk': 250000, source: 'estimate', updated: '2026-04' },
  },
  shibuya: {
    ratings: { food: 9, nightlife: 9, transport: 10, rent: 3, safety: 7, green: 6, gym_sports: 8, vibe: 9, crowd: 2 },
    transit_minutes: { shibuya: 0, shinjuku: 5, tokyo: 25, ikebukuro: 20, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 140000, '2ldk': 260000, source: 'estimate', updated: '2026-04' },
  },
  ikebukuro: {
    ratings: { food: 8, nightlife: 8, transport: 9, rent: 4, safety: 6, green: 4, gym_sports: 7, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 20, shinjuku: 8, tokyo: 20, ikebukuro: 0, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 110000, '2ldk': 200000, source: 'estimate', updated: '2026-04' },
  },
  tokyo: {
    ratings: { food: 7, nightlife: 5, transport: 10, rent: 2, safety: 9, green: 5, gym_sports: 6, vibe: 6, crowd: 3 },
    transit_minutes: { shibuya: 25, shinjuku: 15, tokyo: 0, ikebukuro: 20, shinagawa: 10 },
    rent_avg: { '1k_1ldk': 155000, '2ldk': 300000, source: 'estimate', updated: '2026-04' },
  },
  ueno: {
    ratings: { food: 8, nightlife: 6, transport: 8, rent: 5, safety: 7, green: 9, gym_sports: 5, vibe: 8, crowd: 4 },
    transit_minutes: { shibuya: 30, shinjuku: 25, tokyo: 8, ikebukuro: 18, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 185000, source: 'estimate', updated: '2026-04' },
  },
  akihabara: {
    ratings: { food: 7, nightlife: 7, transport: 8, rent: 4, safety: 7, green: 3, gym_sports: 5, vibe: 9, crowd: 3 },
    transit_minutes: { shibuya: 28, shinjuku: 20, tokyo: 5, ikebukuro: 22, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 120000, '2ldk': 210000, source: 'estimate', updated: '2026-04' },
  },
  shinagawa: {
    ratings: { food: 6, nightlife: 5, transport: 9, rent: 3, safety: 8, green: 5, gym_sports: 6, vibe: 5, crowd: 5 },
    transit_minutes: { shibuya: 15, shinjuku: 18, tokyo: 10, ikebukuro: 25, shinagawa: 0 },
    rent_avg: { '1k_1ldk': 145000, '2ldk': 270000, source: 'estimate', updated: '2026-04' },
  },
  nakano: {
    ratings: { food: 8, nightlife: 7, transport: 7, rent: 6, safety: 8, green: 6, gym_sports: 7, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 15, shinjuku: 5, tokyo: 20, ikebukuro: 15, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 160000, source: 'estimate', updated: '2026-04' },
  },
  kichijoji: {
    ratings: { food: 9, nightlife: 7, transport: 6, rent: 5, safety: 9, green: 10, gym_sports: 8, vibe: 10, crowd: 5 },
    transit_minutes: { shibuya: 20, shinjuku: 15, tokyo: 30, ikebukuro: 25, shinagawa: 35 },
    rent_avg: { '1k_1ldk': 100000, '2ldk': 170000, source: 'estimate', updated: '2026-04' },
  },
  shimokitazawa: {
    ratings: { food: 9, nightlife: 8, transport: 7, rent: 5, safety: 8, green: 6, gym_sports: 6, vibe: 10, crowd: 5 },
    transit_minutes: { shibuya: 5, shinjuku: 10, tokyo: 25, ikebukuro: 20, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 175000, source: 'estimate', updated: '2026-04' },
  },
  ebisu: {
    ratings: { food: 9, nightlife: 8, transport: 8, rent: 3, safety: 8, green: 6, gym_sports: 7, vibe: 9, crowd: 5 },
    transit_minutes: { shibuya: 3, shinjuku: 8, tokyo: 22, ikebukuro: 18, shinagawa: 12 },
    rent_avg: { '1k_1ldk': 145000, '2ldk': 270000, source: 'estimate', updated: '2026-04' },
  },
  meguro: {
    ratings: { food: 8, nightlife: 6, transport: 7, rent: 4, safety: 9, green: 7, gym_sports: 7, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 5, shinjuku: 12, tokyo: 25, ikebukuro: 20, shinagawa: 10 },
    rent_avg: { '1k_1ldk': 125000, '2ldk': 220000, source: 'estimate', updated: '2026-04' },
  },
  koenji: {
    ratings: { food: 8, nightlife: 8, transport: 6, rent: 6, safety: 8, green: 5, gym_sports: 6, vibe: 9, crowd: 6 },
    transit_minutes: { shibuya: 18, shinjuku: 8, tokyo: 22, ikebukuro: 18, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 145000, source: 'estimate', updated: '2026-04' },
  },
  sangenjaya: {
    ratings: { food: 8, nightlife: 7, transport: 6, rent: 5, safety: 8, green: 5, gym_sports: 6, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 5, shinjuku: 15, tokyo: 30, ikebukuro: 25, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 100000, '2ldk': 170000, source: 'estimate', updated: '2026-04' },
  },
  nakameguro: {
    ratings: { food: 9, nightlife: 7, transport: 7, rent: 4, safety: 9, green: 8, gym_sports: 7, vibe: 9, crowd: 5 },
    transit_minutes: { shibuya: 4, shinjuku: 12, tokyo: 25, ikebukuro: 22, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 135000, '2ldk': 240000, source: 'estimate', updated: '2026-04' },
  },
  asakusa: {
    ratings: { food: 9, nightlife: 6, transport: 6, rent: 6, safety: 7, green: 5, gym_sports: 4, vibe: 9, crowd: 3 },
    transit_minutes: { shibuya: 30, shinjuku: 28, tokyo: 15, ikebukuro: 25, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 155000, source: 'estimate', updated: '2026-04' },
  },
  roppongi: {
    ratings: { food: 8, nightlife: 10, transport: 7, rent: 2, safety: 5, green: 5, gym_sports: 8, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 10, shinjuku: 15, tokyo: 18, ikebukuro: 25, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 165000, '2ldk': 320000, source: 'estimate', updated: '2026-04' },
  },
  ginza: {
    ratings: { food: 10, nightlife: 8, transport: 9, rent: 2, safety: 9, green: 4, gym_sports: 7, vibe: 8, crowd: 3 },
    transit_minutes: { shibuya: 15, shinjuku: 18, tokyo: 5, ikebukuro: 22, shinagawa: 12 },
    rent_avg: { '1k_1ldk': 170000, '2ldk': 350000, source: 'estimate', updated: '2026-04' },
  },
  jiyugaoka: {
    ratings: { food: 8, nightlife: 5, transport: 6, rent: 4, safety: 9, green: 7, gym_sports: 7, vibe: 9, crowd: 6 },
    transit_minutes: { shibuya: 10, shinjuku: 20, tokyo: 30, ikebukuro: 28, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 200000, source: 'estimate', updated: '2026-04' },
  },
  nippori: {
    ratings: { food: 6, nightlife: 3, transport: 8, rent: 7, safety: 8, green: 6, gym_sports: 5, vibe: 7, crowd: 7 },
    transit_minutes: { shibuya: 32, shinjuku: 27, tokyo: 18, ikebukuro: 15, shinagawa: 35 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 140000, source: 'estimate', updated: '2026-04' },
  },
  // === Batch 1: Yamanote extended ===
  harajuku: {
    ratings: { food: 8, nightlife: 5, transport: 9, rent: 2, safety: 8, green: 9, gym_sports: 7, vibe: 9, crowd: 1 },
    transit_minutes: { shibuya: 2, shinjuku: 5, tokyo: 25, ikebukuro: 20, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 155000, '2ldk': 240000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Харадзюку — это вечный карнавал: уличная мода, косплей, визг подростков на Такэсита-дори и полная тишина в глубине района.", landmarks: "Такэсита-дори, парк Ёёги, святилище Мэйдзи, бутики Омотэсандо.", food: "Крепы с клубникой — местная классика. Отличные кафе и бистро в переулках Урахара.", nightlife: "Ночная жизнь скромная — район не про клубы. Несколько баров на Омотэсандо." },
  },
  yoyogi: {
    ratings: { food: 7, nightlife: 5, transport: 9, rent: 4, safety: 9, green: 10, gym_sports: 8, vibe: 7, crowd: 5 },
    transit_minutes: { shibuya: 5, shinjuku: 3, tokyo: 20, ikebukuro: 15, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 130000, '2ldk': 200000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Ёёги — тихий и немного недооценённый сосед Синдзюку, с расслабленной атмосферой.", landmarks: "Парк Ёёги (54 га), Олимпийский стадион, Ёёги-Кёгидзё.", food: "Много этнической кухни — эфиопские и индийские заведения. До Синдзюку одна остановка.", nightlife: "Не ночной район — камерные бары с живой музыкой до полуночи." },
  },
  takadanobaba: {
    ratings: { food: 8, nightlife: 7, transport: 9, rent: 6, safety: 7, green: 4, gym_sports: 6, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 18, shinjuku: 7, tokyo: 25, ikebukuro: 10, shinagawa: 30 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 165000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Студенческий район с характером: Университет Васэда, дешёвая еда, энергичная атмосфера.", landmarks: "Университет Васэда, музей Астробоя, улица Бабадори.", food: "Рай дешёвой еды: рамэн, гёдза, корейская и вьетнамская кухня за 500-900 иен.", nightlife: "Студенческая ночная жизнь: дешёвые изакая, хайбол по 300 иен, караоке до утра." },
  },
  sugamo: {
    ratings: { food: 7, nightlife: 2, transport: 8, rent: 7, safety: 10, green: 6, gym_sports: 5, vibe: 6, crowd: 5 },
    transit_minutes: { shibuya: 25, shinjuku: 20, tokyo: 25, ikebukuro: 8, shinagawa: 40 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 150000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "«Харадзюку для бабушек»: торговая улица Дзидзо-дори, сладости, красное бельё на удачу.", landmarks: "Храм Кога-нэй-дзи, торговая улица Дзидзо-дори (800м).", food: "Традиционные сладости — данго, сэмбэй, моти. Большие порции, разумные цены.", nightlife: "Ночной жизни нет — район засыпает около 20:00." },
  },
  'nishi-nippori': {
    ratings: { food: 6, nightlife: 3, transport: 8, rent: 8, safety: 8, green: 6, gym_sports: 5, vibe: 6, crowd: 7 },
    transit_minutes: { shibuya: 30, shinjuku: 25, tokyo: 20, ikebukuro: 15, shinagawa: 40 },
    rent_avg: { '1k_1ldk': 85000, '2ldk': 135000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Тихий жилой район на Яманотэ с отличным транспортом и доступной арендой.", landmarks: "Кладбище Янака, торговая улица Янака Гиндза.", food: "Добротные рамэн и соба, домашние кофейни в старых деревянных домах в Янаке.", nightlife: "Минимальная — несколько номия для работяг." },
  },
  gotanda: {
    ratings: { food: 8, nightlife: 7, transport: 8, rent: 6, safety: 7, green: 4, gym_sports: 7, vibe: 7, crowd: 4 },
    transit_minutes: { shibuya: 8, shinjuku: 20, tokyo: 25, ikebukuro: 35, shinagawa: 7 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 180000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Деловой и живой район: днём офисы, вечером оживлённые бары и корейские рестораны.", landmarks: "Набережная реки Мэгуро, корейский квартал.", food: "Корейская кухня — главная фишка: самгёпсаль, пулькоги, холодная лапша.", nightlife: "Живая ночь: корейские барбекю до 3 утра, изакая для офисных после 19:00." },
  },
  // === Batch 2: Yamanote continued ===
  komagome: {
    ratings: { food: 7, nightlife: 4, transport: 7, rent: 7, safety: 8, green: 9, gym_sports: 6, vibe: 7, crowd: 8 },
    transit_minutes: { shibuya: 28, shinjuku: 22, tokyo: 30, ikebukuro: 8, shinagawa: 38 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 155000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Тихий район с садом Рикугиэн — одним из красивейших в Токио.", landmarks: "Сад Рикугиэн (эпоха Эдо), святилище Фудзимэ Инари.", food: "Семейные ресторанчики: якитори, суши, рамэн. Без претензий, по-японски.", nightlife: "Несколько изакая до 23:00 — и всё." },
  },
  tabata: {
    ratings: { food: 5, nightlife: 3, transport: 7, rent: 8, safety: 8, green: 7, gym_sports: 5, vibe: 6, crowd: 9 },
    transit_minutes: { shibuya: 32, shinjuku: 25, tokyo: 28, ikebukuro: 12, shinagawa: 35 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 140000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Малоизвестный тихий район Яманотэ — дёшево и без туристов.", landmarks: "Бывший квартал художников, мемориальный центр Табата Бункамура.", food: "Скромный выбор: несколько изакая и рамэн-кафе у станции.", nightlife: "Философия «лечь пораньше» — несколько баров, и всё." },
  },
  otsuka: {
    ratings: { food: 7, nightlife: 6, transport: 8, rent: 7, safety: 7, green: 5, gym_sports: 6, vibe: 7, crowd: 7 },
    transit_minutes: { shibuya: 25, shinjuku: 15, tokyo: 28, ikebukuro: 5, shinagawa: 33 },
    rent_avg: { '1k_1ldk': 98000, '2ldk': 160000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Живой район с трамваем Тодэн Аракава и атмосферой старого Токио.", landmarks: "Трамвай Тодэн Аракава, храм Дайэн-дзи.", food: "Корейская кухня, изакая, якитори под навесами вдоль трамвайных рельсов.", nightlife: "Умеренная: бары до 1-2 ночи, ночные изакая вдоль трамвайной улицы." },
  },
  mejiro: {
    ratings: { food: 6, nightlife: 3, transport: 6, rent: 5, safety: 9, green: 8, gym_sports: 6, vibe: 8, crowd: 9 },
    transit_minutes: { shibuya: 20, shinjuku: 12, tokyo: 32, ikebukuro: 5, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 185000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Элегантный тихий район: Университет Гакусюин, широкие зелёные улицы.", landmarks: "Кампус Гакусюин, аллея сакуры вдоль канала.", food: "Качественные итальянские и французские рестораны для местных.", nightlife: "Мэдзиро засыпает рано — несколько вино-баров, и всё." },
  },
  osaki: {
    ratings: { food: 7, nightlife: 5, transport: 9, rent: 5, safety: 8, green: 5, gym_sports: 8, vibe: 6, crowd: 6 },
    transit_minutes: { shibuya: 12, shinjuku: 18, tokyo: 22, ikebukuro: 28, shinagawa: 5 },
    rent_avg: { '1k_1ldk': 120000, '2ldk': 195000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Корпоративный урбанистический район: Sony, Canon, высотные офисы.", landmarks: "ThinkPark, Gate City Osaki.", food: "Бизнес-ланчи в торговых комплексах. Готанда рядом для разнообразия.", nightlife: "Корпоративные бары. После 22:00 улицы пустеют." },
  },
  hamamatsucho: {
    ratings: { food: 6, nightlife: 4, transport: 10, rent: 4, safety: 7, green: 6, gym_sports: 5, vibe: 5, crowd: 5 },
    transit_minutes: { shibuya: 20, shinjuku: 25, tokyo: 10, ikebukuro: 35, shinagawa: 10 },
    rent_avg: { '1k_1ldk': 130000, '2ldk': 210000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Деловой район залива: офисы, монорельс на Ханэда, паромы.", landmarks: "Токийская башня (10 мин), сад Хамарикю, паромный терминал Такэсиба.", food: "Бизнес-ланчи. Вечером и в выходные выбор сужается.", nightlife: "Практически нет — строго деловой район." },
  },
  // === Batch 3: Metro stations ===
  omotesando: {
    ratings: { food: 9, nightlife: 7, transport: 9, rent: 2, safety: 9, green: 7, gym_sports: 8, vibe: 9, crowd: 3 },
    transit_minutes: { shibuya: 6, shinjuku: 14, tokyo: 22, ikebukuro: 22, shinagawa: 22 },
    rent_avg: { '1k_1ldk': 165000, '2ldk': 280000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Токийский ответ Парижу: бульвар с кедрами, бутики, архитектура Тадао Андо.", landmarks: "Бульвар Омотэсандо, святилище Мэйдзи, парк Ёёги.", food: "Безупречная сцена: мишленовские адреса, Blue Bottle, % Arabica.", nightlife: "Сдержанная но качественная: hidden bars, лаунжи, натуральные вина." },
  },
  'azabu-juban': {
    ratings: { food: 9, nightlife: 7, transport: 7, rent: 1, safety: 10, green: 5, gym_sports: 7, vibe: 8, crowd: 5 },
    transit_minutes: { shibuya: 14, shinjuku: 22, tokyo: 24, ikebukuro: 30, shinagawa: 16 },
    rent_avg: { '1k_1ldk': 175000, '2ldk': 310000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Один из самых дорогих и уютных районов: послы, банкиры, старые токийские семьи.", landmarks: "Летний фестиваль Норё Дайкай, Токийская башня, храм Дзэнпукудзи.", food: "Гастрономический квартал: суши, фугу, ливанская кухня, легендарные пекарни.", nightlife: "Тихие коктейльные бары, вино-бары, джазовые клубы." },
  },
  'kiyosumi-shirakawa': {
    ratings: { food: 8, nightlife: 5, transport: 7, rent: 6, safety: 9, green: 8, gym_sports: 6, vibe: 9, crowd: 7 },
    transit_minutes: { shibuya: 24, shinjuku: 32, tokyo: 14, ikebukuro: 36, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 175000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Столица третьей волны кофе — богемный оазис на восточном берегу Сумиды.", landmarks: "Сад Киёсуми, Музей современного искусства Токио (MOT).", food: "Blue Bottle, Allpress, Arise Coffee. Фермерские рынки и органика.", nightlife: "Рано засыпает. Несколько крафтовых баров у реки." },
  },
  'monzen-nakacho': {
    ratings: { food: 8, nightlife: 8, transport: 7, rent: 6, safety: 8, green: 6, gym_sports: 6, vibe: 8, crowd: 5 },
    transit_minutes: { shibuya: 26, shinjuku: 34, tokyo: 16, ikebukuro: 38, shinagawa: 26 },
    rent_avg: { '1k_1ldk': 98000, '2ldk': 165000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Один из самых «токийских» районов: сётамати, фестивали, изакая.", landmarks: "Святилище Томиока Хатиман-гу, храм Фукагава Фудо-до.", food: "Угорь, стоячие суши-бары, фукагава-мэси. Изакая на каждом шагу.", nightlife: "Неожиданно живая: изакая и яки-тон-бары работают до рассвета." },
  },
  iidabashi: {
    ratings: { food: 7, nightlife: 6, transport: 10, rent: 5, safety: 9, green: 7, gym_sports: 7, vibe: 7, crowd: 4 },
    transit_minutes: { shibuya: 18, shinjuku: 12, tokyo: 18, ikebukuro: 14, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 195000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Транспортный узел с романтичной набережной канала Канда.", landmarks: "Сады Коисикава Коракуэн, набережная Канда-гава для ханами.", food: "Надёжные рестораны для офисных, хорошие независимые кофейни.", nightlife: "Бары для офисных и студентов — без сюрпризов." },
  },
  jimbocho: {
    ratings: { food: 7, nightlife: 5, transport: 8, rent: 6, safety: 9, green: 5, gym_sports: 6, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 20, shinjuku: 14, tokyo: 16, ikebukuro: 18, shinagawa: 30 },
    rent_avg: { '1k_1ldk': 108000, '2ldk': 182000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Мировая столица подержанных книг — 200+ букинистических магазинов.", landmarks: "Книжный квартал, университеты Мэйдзи и Нихон.", food: "Столица японского карри! Кисса-тэн (старые кафе) сохранились лучше всего.", nightlife: "Бары для завсегдатаев, джазовые клубы старой закваски." },
  },
  // === Batch 4: Popular living areas ===
  'futako-tamagawa': {
    ratings: { food: 8, nightlife: 5, transport: 8, rent: 3, safety: 9, green: 9, gym_sports: 8, vibe: 8, crowd: 5 },
    transit_minutes: { shibuya: 16, shinjuku: 28, tokyo: 45, ikebukuro: 40, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 130000, '2ldk': 210000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Район для жизни у реки: набережные, Tamagawa Rise, молодые семьи с колясками.", landmarks: "Берег реки Тамагава, торговый комплекс Tamagawa Rise.", food: "Итальянские рестораны, specialty-кофе. Ориентировано на платёжеспособную аудиторию.", nightlife: "Практически нет — район засыпает рано." },
  },
  denenchofu: {
    ratings: { food: 6, nightlife: 2, transport: 7, rent: 1, safety: 10, green: 9, gym_sports: 5, vibe: 7, crowd: 9 },
    transit_minutes: { shibuya: 20, shinjuku: 35, tokyo: 40, ikebukuro: 45, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 160000, '2ldk': 280000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Токийский Беверли-Хиллз: широкие улицы, особняки, закрытая респектабельность.", landmarks: "Станция 1923 года, центральный круг с аллеями.", food: "Минималистично: добротные рестораны для местных. За разнообразием — в Дзиюгаоку.", nightlife: "Нет совсем — и это принципиальная позиция района." },
  },
  ogikubo: {
    ratings: { food: 8, nightlife: 6, transport: 8, rent: 6, safety: 8, green: 6, gym_sports: 6, vibe: 8, crowd: 5 },
    transit_minutes: { shibuya: 28, shinjuku: 12, tokyo: 30, ikebukuro: 20, shinagawa: 38 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 155000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Живой богемный район: антиквариат, художники, рамэн.", landmarks: "Антикварный квартал, храм Дзэнриндзи.", food: "Отличные рамэн, крепкие изакая, curry-сцена.", nightlife: "Тихая но живая: барная улочка, джазовые бары." },
  },
  asagaya: {
    ratings: { food: 7, nightlife: 7, transport: 7, rent: 7, safety: 8, green: 6, gym_sports: 5, vibe: 9, crowd: 6 },
    transit_minutes: { shibuya: 32, shinjuku: 15, tokyo: 35, ikebukuro: 22, shinagawa: 42 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 140000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Аутентичный живой район: джаз, инди-музыка, независимые книжные.", landmarks: "Аркада Pearl Center, фестиваль Танабата.", food: "Авторские заведения: маленькие рамэн-бары, кафе с самообжаренным кофе.", nightlife: "Джазовые и рок-клубы, бары с характером — весело и без показухи." },
  },
  kinshicho: {
    ratings: { food: 8, nightlife: 8, transport: 9, rent: 8, safety: 6, green: 4, gym_sports: 6, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 35, shinjuku: 30, tokyo: 12, ikebukuro: 35, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 82000, '2ldk': 130000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Восточный Токио без прикрас: шумный, плотный, живой shitamachi.", landmarks: "Зал Сумида, река Сумида, парк Кибо с видом на Sky Tree.", food: "Лучшее соотношение цена/качество: изакая, якинику, рынок Кинситё.", nightlife: "Бурная и без снобизма: изакая, бары, живая музыка до утра." },
  },
  toyosu: {
    ratings: { food: 7, nightlife: 4, transport: 7, rent: 5, safety: 9, green: 5, gym_sports: 7, vibe: 6, crowd: 6 },
    transit_minutes: { shibuya: 35, shinjuku: 45, tokyo: 18, ikebukuro: 50, shinagawa: 22 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 185000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Новый район на заливе: кондоминиумы, широкие тротуары, молодые семьи.", landmarks: "Рыбный рынок Тоёсу, LaLaport, Teamlab Planets.", food: "Морепродукты у рынка на высшем уровне. Остальное — сетевые рестораны.", nightlife: "Район засыпает с торговыми центрами. Для вечера — в Гиндзу." },
  },
  // === Batch 5: Key business/transit stations ===
  yurakucho: {
    ratings: { food: 9, nightlife: 8, transport: 9, rent: 2, safety: 9, green: 4, gym_sports: 5, vibe: 8, crowd: 3 },
    transit_minutes: { shibuya: 18, shinjuku: 22, tokyo: 4, ikebukuro: 30, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 160000, '2ldk': 280000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Деловой центр с душой старого Токио: под арками JR кипит жизнь.", landmarks: "Якитория под путепроводом, Tokyo International Forum, парк Хибия.", food: "Гастрономический рай: тесные якитория, изакая и рамэн-лавки под арками.", nightlife: "Арки вечером — цепочка забитых баров. Атмосфера послевоенных сацэмасэ." },
  },
  kanda: {
    ratings: { food: 8, nightlife: 6, transport: 9, rent: 4, safety: 8, green: 3, gym_sports: 5, vibe: 7, crowd: 4 },
    transit_minutes: { shibuya: 22, shinjuku: 18, tokyo: 5, ikebukuro: 22, shinagawa: 24 },
    rent_avg: { '1k_1ldk': 130000, '2ldk': 220000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Рабочий Токио: книжные, электроника, бюджетные закусочные.", landmarks: "Святилище Канда Мёдзин, квартал Дзимботё, близость Акихабары.", food: "Легендарные соба-рестораны с историей 100+ лет. Якитори и тонкацу.", nightlife: "Скромная: изакая для завсегдатаев, пара джаз-баров." },
  },
  okachimachi: {
    ratings: { food: 8, nightlife: 5, transport: 8, rent: 5, safety: 7, green: 4, gym_sports: 6, vibe: 7, crowd: 4 },
    transit_minutes: { shibuya: 28, shinjuku: 30, tokyo: 10, ikebukuro: 25, shinagawa: 32 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 195000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Шумный рыночный район между Акихабарой и Уэно.", landmarks: "Рынок Амэ-ёко, Уэно парк (5 мин), ювелирный квартал.", food: "Амэ-ёко — лучшая уличная еда: морепродукты, якитори, экзотические фрукты.", nightlife: "Скромная: изакая в переулках. После полуночи тихо." },
  },
  shimbashi: {
    ratings: { food: 8, nightlife: 9, transport: 10, rent: 3, safety: 8, green: 4, gym_sports: 5, vibe: 8, crowd: 3 },
    transit_minutes: { shibuya: 20, shinjuku: 26, tokyo: 8, ikebukuro: 36, shinagawa: 12 },
    rent_avg: { '1k_1ldk': 155000, '2ldk': 270000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Столица японских сарариманов: сотни изакая, вечерний гул до последнего поезда.", landmarks: "Паровоз SL Plaza, монорельс Юрикамомэ на Одайбу.", food: "Лучший район для изакая-хоппинга: под арками всё — от якитори до морепродуктов.", nightlife: "Театр корпоративной культуры: тосты, красные лица, номикай до полуночи и дольше." },
  },
  tamachi: {
    ratings: { food: 6, nightlife: 4, transport: 8, rent: 5, safety: 9, green: 5, gym_sports: 6, vibe: 6, crowd: 7 },
    transit_minutes: { shibuya: 22, shinjuku: 30, tokyo: 14, ikebukuro: 42, shinagawa: 6 },
    rent_avg: { '1k_1ldk': 130000, '2ldk': 215000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Тихий функциональный район: джентрификация, новые жилые комплексы.", landmarks: "Токийский технологический институт, набережная Сибаура, Токийская башня.", food: "Стабильный набор: сетевые рестораны, итальянские кафе, суши-конвейеры.", nightlife: "Не ночной район: несколько баров у станции, и всё." },
  },
  otemachi: {
    ratings: { food: 8, nightlife: 5, transport: 10, rent: 1, safety: 10, green: 5, gym_sports: 6, vibe: 6, crowd: 4 },
    transit_minutes: { shibuya: 20, shinjuku: 20, tokyo: 3, ikebukuro: 18, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 200000, '2ldk': 380000, source: 'estimate', updated: '2026-04' },
    description: { atmosphere: "Финансовое сердце Японии: банки, корпорации, Манхэттен по-токийски.", landmarks: "Связан с Токийской станцией, Императорский дворец рядом.", food: "Подземные рестораны: от бюджетных рамэн до кайсэки за 15000+.", nightlife: "Нет — после 20:00 район-призрак." },
  },
};
