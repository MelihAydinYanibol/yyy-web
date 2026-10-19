// All of the site's text and data lives here. Edit this file to update the
// website: no need to touch the components.
//
// Text that appears on the page is written as { tr: "...", en: "..." }.
// The Turkish site is at "/" and the English site is at "/en".

export type Locale = "tr" | "en";
export type Text = Record<Locale, string>;

export const club = {
  shortName: "YYYazılım",
  name: { tr: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü", en: "Software, AI & Creativity Club" },
  university: { tr: "İstanbul Esenyurt Üniversitesi", en: "Istanbul Esenyurt University" },
  founded: 2025,
  tagline: {
    tr: "Teknolojiyi sadece tüketen değil, ona yön veren bir nesil.",
    en: "A generation that doesn't just consume technology, but shapes it.",
  },
  description: {
    tr: "Üniversite hayatımızın ilk yıllarında, teorik bilgileri pratiğe dökecek, birlikte hata yapıp birlikte öğrenecek bir topluluğun eksikliğini hissettik ve bu boşluğu doldurmak için bir araya geldik. Amacımız; yazılımın teknik gücünü, yapay zekanın sınırsız potansiyelini ve yaratıcılığın özgürlüğünü tek bir çatı altında toplamak.",
    en: "In our first years at university, we missed having a community where we could put theory into practice, make mistakes together and learn together, so we came together to build one. Our goal is to bring the technical power of software, the limitless potential of AI and the freedom of creativity under one roof.",
  },
  email: "yapayzekaveyaraticilik@iesu.edu.tr",
  instagram: "https://instagram.com/iesuyyyazilim",
  linkedin:
    "https://www.linkedin.com/company/yaz%C4%B1l%C4%B1m-yapay-zeka-ve-yarat%C4%B1c%C4%B1l%C4%B1k-toplulu%C4%9Fu/",
  // TODO: replace with your membership form (Google Forms, Tally, etc.).
  joinUrl: "https://instagram.com/iesuyyyazilim",
  siteUrl: "https://example.com", // TODO: set to your real domain
};

// Interface text (buttons, headings, labels).
export const ui = {
  tr: {
    nav: { about: "Hakkımızda", events: "Etkinlikler", gallery: "Galeri", team: "Ekip", contact: "İletişim" },
    join: "Kulübe Katıl",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    switchLabel: "English",
    switchShort: "EN",
    heroTitleLead: "Yazılım",
    heroTitleRest: ", Yapay Zeka ve Yaratıcılık Kulübü",
    statsLabel: "Rakamlarla kulüp",
    aboutEyebrow: "Hakkımızda",
    aboutTitle: `${club.founded}'ten beri kampüste teknoloji rüzgarı`,
    logoAlt: "YYYazılım logosu",
    eventsEyebrow: "Etkinlikler",
    eventsTitle: "Neler yapıyoruz?",
    eventsText: "Atölyeler, seminerler, zirveler ve sosyal buluşmalar. Etkinliklerimiz tüm öğrencilere açık.",
    upcoming: "Yaklaşan etkinlikler",
    noUpcoming: "Yeni etkinlikler çok yakında! Duyurular için bizi Instagram'da takip edin.",
    register: "Kayıt ol",
    past: "Geçmiş etkinlikler",
    participants: "katılımcı",
    galleryEyebrow: "Galeri",
    galleryTitle: "Kareler",
    galleryText: "Etkinliklerimizden anılar.",
    teamEyebrow: "Ekip",
    teamTitle: "Yönetim ekibimiz",
    teamText: "Kulübü ayakta tutan tutkulu öğrenciler.",
    ctaTitle: "Aramıza katılmaya hazır mısın?",
    ctaText: "Bölümün ya da seviyen fark etmez. Öğrenmeye ve üretmeye hevesli herkesi bekliyoruz.",
    writeUs: "Bize yazın",
    email: "E-posta",
  },
  en: {
    nav: { about: "About", events: "Events", gallery: "Gallery", team: "Team", contact: "Contact" },
    join: "Join the Club",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLabel: "Türkçe",
    switchShort: "TR",
    heroTitleLead: "Software",
    heroTitleRest: ", AI & Creativity Club",
    statsLabel: "The club in numbers",
    aboutEyebrow: "About us",
    aboutTitle: `Bringing tech to campus since ${club.founded}`,
    logoAlt: "YYYazılım logo",
    eventsEyebrow: "Events",
    eventsTitle: "What do we do?",
    eventsText: "Workshops, seminars, summits and social meetups. Our events are open to all students.",
    upcoming: "Upcoming events",
    noUpcoming: "New events are coming soon! Follow us on Instagram for announcements.",
    register: "Register",
    past: "Past events",
    participants: "participants",
    galleryEyebrow: "Gallery",
    galleryTitle: "Moments",
    galleryText: "Memories from our events.",
    teamEyebrow: "Team",
    teamTitle: "Our board",
    teamText: "The passionate students who keep the club running.",
    ctaTitle: "Ready to join us?",
    ctaText: "Your department or level doesn't matter. Everyone eager to learn and build is welcome.",
    writeUs: "Email us",
    email: "Email",
  },
};

export const pillars: { title: Text; text: Text; color: string }[] = [
  {
    title: { tr: "Yazılım", en: "Software" },
    text: {
      tr: "Web, mobil ve oyun geliştirme atölyeleri; birlikte gerçek projeler üretiyoruz.",
      en: "Web, mobile and game development workshops where we build real projects together.",
    },
    color: "from-sky-400 to-blue-600",
  },
  {
    title: { tr: "Yapay Zeka", en: "Artificial Intelligence" },
    text: {
      tr: "Makine öğrenmesinden üretken yapay zekaya, geleceğin teknolojilerini birlikte keşfediyoruz.",
      en: "From machine learning to generative AI, we explore the technologies of the future together.",
    },
    color: "from-fuchsia-400 to-pink-600",
  },
  {
    title: { tr: "Yaratıcılık", en: "Creativity" },
    text: {
      tr: "Tasarım, fikir maratonları ve sosyal etkinliklerle hayal gücünü teknolojiyle buluşturuyoruz.",
      en: "Design, ideathons and social events that bring imagination and technology together.",
    },
    color: "from-amber-300 to-orange-500",
  },
];

export const stats: { value: string; label: Text }[] = [
  { value: "400+", label: { tr: "Zirve katılımcısı", en: "Summit attendees" } },
  { value: "5+", label: { tr: "Etkinlik", en: "Events" } },
  { value: "11", label: { tr: "Kişilik yönetim ekibi", en: "Board members" } },
  { value: "2025", label: { tr: "Kuruluş yılı", en: "Founded" } },
];

// Add upcoming events here. When the list is empty, the site shows a
// "follow us on Instagram" message instead.
export const upcomingEvents: {
  title: Text;
  date: Text; // e.g. { tr: "12 Kasım 2026, 14:00", en: "12 November 2026, 2 PM" }
  location: Text;
  description: Text;
  url?: string;
}[] = [];

// Newest first.
export const pastEvents: { date: Text; title: Text; description: Text; participants: string; tags: Text[] }[] = [
  {
    date: { tr: "Mayıs 2026", en: "May 2026" },
    title: { tr: "UNIDES – YYYazılım Zirvesi '26", en: "UNIDES – YYYazılım Summit '26" },
    description: {
      tr: "Gençlik ve Spor Bakanlığı onaylı UNIDES kapsamında, sektörden 6 konuşmacıyla yapay zeka, yazılım ve teknoloji zirvesi.",
      en: "An AI, software and technology summit with 6 industry speakers, part of the UNIDES programme approved by the Ministry of Youth and Sports.",
    },
    participants: "400+",
    tags: [{ tr: "Zirve", en: "Summit" }, { tr: "Panel", en: "Panel" }, { tr: "UNIDES", en: "UNIDES" }],
  },
  {
    date: { tr: "Mart 2026", en: "March 2026" },
    title: { tr: "Pi Günü", en: "Pi Day" },
    description: {
      tr: "3/14 Pi Günü özelinde matematik ve eğlence dolu bir etkinlik.",
      en: "A math-and-fun event for Pi Day on 3/14.",
    },
    participants: "100+",
    tags: [{ tr: "Matematik", en: "Math" }],
  },
  {
    date: { tr: "2025", en: "2025" },
    title: { tr: "Cisco Etkinliği", en: "Cisco Event" },
    description: {
      tr: "Cisco Türkiye iş birliğiyle eğitim semineri ve soru-cevap.",
      en: "A training seminar and Q&A in partnership with Cisco Türkiye.",
    },
    participants: "200+",
    tags: [{ tr: "Cisco", en: "Cisco" }, { tr: "Networking", en: "Networking" }],
  },
  {
    date: { tr: "2025", en: "2025" },
    title: { tr: "Tavuk Pilav Etkinliği", en: "Chicken & Rice Meetup" },
    description: {
      tr: "Üniversite öğrencileri için eğlenceli ve eğitici bir buluşma.",
      en: "A fun and educational get-together for university students.",
    },
    participants: "100+",
    tags: [{ tr: "Sosyal", en: "Social" }],
  },
  {
    date: { tr: "2025", en: "2025" },
    title: { tr: "Kulübün Kuruluşu", en: "Club Founded" },
    description: {
      tr: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü 12 kurucu üyeyle yola çıktı.",
      en: "The Software, AI & Creativity Club started out with 12 founding members.",
    },
    participants: "12",
    tags: [{ tr: "Kuruluş", en: "Founding" }],
  },
];

const role = {
  president: { tr: "Kulüp Başkanı", en: "President" },
  vicePresident: { tr: "Başkan Yardımcısı", en: "Vice President" },
  events: { tr: "Etkinlik Koordinatörü", en: "Events Coordinator" },
  treasurer: { tr: "Sayman", en: "Treasurer" },
  software: { tr: "Yazılım Koordinatörü", en: "Software Coordinator" },
  ai: { tr: "Yapay Zeka Koordinatörü", en: "AI Coordinator" },
  social: { tr: "Sosyal Medya ve Tasarım Koordinatörü", en: "Social Media & Design Coordinator" },
};
const dept = {
  computer: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
  software: { tr: "Yazılım Mühendisliği", en: "Software Engineering" },
};

export const team: {
  name: string;
  role: Text;
  department: Text;
  photo?: string;
  linkedin?: string;
  github?: string;
}[] = [
  { name: "Merve Bayezit", role: role.president, department: dept.computer, photo: "/img/team/merve.webp", linkedin: "https://www.linkedin.com/in/merve-bayezit/" },
  { name: "Sümeyye Yeğen", role: role.vicePresident, department: dept.computer, photo: "/img/team/sumeyye.webp", linkedin: "https://www.linkedin.com/in/s%C3%BCmeyye-ye%C4%9Fen" },
  { name: "Muhammed Ege Atılgan", role: role.events, department: dept.computer, photo: "/img/team/ege.webp", linkedin: "https://www.linkedin.com/in/ege-at%C4%B1lgan-808840314/", github: "https://github.com/egeatilgan5757" },
  { name: "Seba Defa", role: role.events, department: dept.computer, photo: "/img/team/seba.webp", linkedin: "https://www.linkedin.com/in/sabadefa/" },
  { name: "Emirhan Ertaş", role: role.treasurer, department: dept.computer, photo: "/img/team/emirhan.webp", linkedin: "https://linkedin.com/in/emirertas" },
  { name: "Aydın Melih Yanıbol", role: role.software, department: dept.computer, photo: "/img/team/melih.webp", github: "https://github.com/MelihAydinYanibol/" },
  { name: "SeyyedBenyamin Valaei", role: role.ai, department: dept.computer, photo: "/img/team/benyamin.webp", linkedin: "https://www.linkedin.com/in/seyyedbenyaminvalaei/", github: "https://github.com/seyyedbenyaminvalaei" },
  { name: "Umut Yıldız", role: role.software, department: dept.computer, photo: "/img/team/umut.webp", linkedin: "https://www.linkedin.com/in/umut-y%C4%B1ld%C4%B1z-670b79378" },
  { name: "İrem Kaya", role: role.social, department: dept.software, photo: "/img/team/irem.webp", linkedin: "https://www.linkedin.com/in/irem-kaya-13324a394" },
  { name: "Başak Atlı", role: role.social, department: dept.software },
  { name: "Mehmet Karabulut", role: role.social, department: dept.computer, photo: "/img/team/mehmet.webp", linkedin: "https://www.linkedin.com/in/mehmet-karabulut-26543633b" },
];

// Files in public/img/gallery as photoN-800.webp and photoN-1600.webp.
// Layout tip: the first photo is shown large, so 1 + a multiple of 4 photos fills the grid evenly.
export const gallery: { id: number; alt: Text }[] = [
  { id: 4, alt: { tr: "Kulüp üyeleri Yazılım Yapay Zeka ve Yaratıcılık afişinin önünde", en: "Club members in front of the Software, AI & Creativity banner" } },
  { id: 5, alt: { tr: "Etkinlik sonrası toplu fotoğraf", en: "Group photo after an event" } },
  { id: 8, alt: { tr: "Kulüp çerçevesiyle fotoğraf çekinen katılımcılar", en: "Attendees posing with the club photo frame" } },
  { id: 10, alt: { tr: "Pi Günü etkinliğinde konuşmacı", en: "A speaker at the Pi Day event" } },
  { id: 2, alt: { tr: "Tavuk pilav etkinliğinde ikram", en: "Serving food at the chicken & rice meetup" } },
  { id: 3, alt: { tr: "Düşünceni Paylaş panosu önünde misafirler", en: "Guests in front of the Share Your Thoughts board" } },
  { id: 6, alt: { tr: "Konferans salonunda açılış konuşması", en: "Opening speech in the conference hall" } },
  { id: 7, alt: { tr: "Sahnede plaket takdimi", en: "Award presentation on stage" } },
  { id: 1, alt: { tr: "Sahnede kulüp ekibi", en: "The club team on stage" } },
];
