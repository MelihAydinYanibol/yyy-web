// All of the site's text and data lives here. Edit this file to update the
// website: no need to touch the components.

export const club = {
  shortName: "YYYazılım",
  name: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü",
  university: "İstanbul Esenyurt Üniversitesi",
  founded: 2025,
  tagline: "Teknolojiyi sadece tüketen değil, ona yön veren bir nesil.",
  description:
    "Üniversite hayatımızın ilk yıllarında, teorik bilgileri pratiğe dökecek, birlikte hata yapıp birlikte öğrenecek bir topluluğun eksikliğini hissettik ve bu boşluğu doldurmak için bir araya geldik. Amacımız; yazılımın teknik gücünü, yapay zekanın sınırsız potansiyelini ve yaratıcılığın özgürlüğünü tek bir çatı altında toplamak.",
  email: "yapayzekaveyaraticilik@iesu.edu.tr",
  instagram: "https://instagram.com/iesuyyyazilim",
  linkedin:
    "https://www.linkedin.com/company/yaz%C4%B1l%C4%B1m-yapay-zeka-ve-yarat%C4%B1c%C4%B1l%C4%B1k-toplulu%C4%9Fu/",
  // TODO: replace with your membership form (Google Forms, Tally, etc.).
  joinUrl: "https://instagram.com/iesuyyyazilim",
  siteUrl: "https://example.com", // TODO: set to your real domain
};

export const pillars = [
  {
    title: "Yazılım",
    text: "Web, mobil ve oyun geliştirme atölyeleri; birlikte gerçek projeler üretiyoruz.",
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Yapay Zeka",
    text: "Makine öğrenmesinden üretken yapay zekaya, geleceğin teknolojilerini birlikte keşfediyoruz.",
    color: "from-fuchsia-400 to-pink-600",
  },
  {
    title: "Yaratıcılık",
    text: "Tasarım, fikir maratonları ve sosyal etkinliklerle hayal gücünü teknolojiyle buluşturuyoruz.",
    color: "from-amber-300 to-orange-500",
  },
];

export const stats = [
  { value: "400+", label: "Zirve katılımcısı" },
  { value: "5+", label: "Etkinlik" },
  { value: "11", label: "Kişilik yönetim ekibi" },
  { value: "2025", label: "Kuruluş yılı" },
];

// Add upcoming events here. When the list is empty, the site shows a
// "follow us on Instagram" message instead.
export const upcomingEvents: {
  title: string;
  date: string; // e.g. "12 Kasım 2026, 14:00"
  location: string;
  description: string;
  url?: string;
}[] = [];

// Newest first.
export const pastEvents = [
  {
    date: "Mayıs 2026",
    title: "UNIDES – YYYazılım Zirvesi '26",
    description:
      "Gençlik ve Spor Bakanlığı onaylı UNIDES kapsamında, sektörden 6 konuşmacıyla yapay zeka, yazılım ve teknoloji zirvesi.",
    participants: "400+",
    tags: ["Zirve", "Panel", "UNIDES"],
  },
  {
    date: "Mart 2026",
    title: "Pi Günü",
    description: "3/14 Pi Günü özelinde matematik ve eğlence dolu bir etkinlik.",
    participants: "100+",
    tags: ["Matematik"],
  },
  {
    date: "2025",
    title: "Cisco Etkinliği",
    description: "Cisco Türkiye iş birliğiyle eğitim semineri ve soru-cevap.",
    participants: "200+",
    tags: ["Cisco", "Networking"],
  },
  {
    date: "2025",
    title: "Tavuk Pilav Etkinliği",
    description: "Üniversite öğrencileri için eğlenceli ve eğitici bir buluşma.",
    participants: "100+",
    tags: ["Sosyal"],
  },
  {
    date: "2025",
    title: "Kulübün Kuruluşu",
    description: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü 12 kurucu üyeyle yola çıktı.",
    participants: "12",
    tags: ["Kuruluş"],
  },
];

export const team: {
  name: string;
  role: string;
  department: string;
  photo?: string;
  linkedin?: string;
  github?: string;
}[] = [
  { name: "Merve Bayezit", role: "Kulüp Başkanı", department: "Bilgisayar Mühendisliği", photo: "/img/team/merve.webp", linkedin: "https://www.linkedin.com/in/merve-bayezit/" },
  { name: "Sümeyye Yeğen", role: "Başkan Yardımcısı", department: "Bilgisayar Mühendisliği", photo: "/img/team/sumeyye.webp", linkedin: "https://www.linkedin.com/in/s%C3%BCmeyye-ye%C4%9Fen" },
  { name: "Muhammed Ege Atılgan", role: "Etkinlik Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/ege.webp", linkedin: "https://www.linkedin.com/in/ege-at%C4%B1lgan-808840314/", github: "https://github.com/egeatilgan5757" },
  { name: "Seba Defa", role: "Etkinlik Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/seba.webp", linkedin: "https://www.linkedin.com/in/sabadefa/" },
  { name: "Emirhan Ertaş", role: "Sayman", department: "Bilgisayar Mühendisliği", photo: "/img/team/emirhan.webp", linkedin: "https://linkedin.com/in/emirertas" },
  { name: "Aydın Melih Yanıbol", role: "Yazılım Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/melih.webp", github: "https://github.com/MelihAydinYanibol/" },
  { name: "SeyyedBenyamin Valaei", role: "Yapay Zeka Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/benyamin.webp", linkedin: "https://www.linkedin.com/in/seyyedbenyaminvalaei/", github: "https://github.com/seyyedbenyaminvalaei" },
  { name: "Umut Yıldız", role: "Yazılım Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/umut.webp", linkedin: "https://www.linkedin.com/in/umut-y%C4%B1ld%C4%B1z-670b79378" },
  { name: "İrem Kaya", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Yazılım Mühendisliği", photo: "/img/team/irem.webp", linkedin: "https://www.linkedin.com/in/irem-kaya-13324a394" },
  { name: "Başak Atlı", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Yazılım Mühendisliği" },
  { name: "Mehmet Karabulut", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/img/team/mehmet.webp", linkedin: "https://www.linkedin.com/in/mehmet-karabulut-26543633b" },
];

// Files in public/img/gallery as photoN-800.webp and photoN-1600.webp.
export const gallery = [
  { id: 4, alt: "Kulüp üyeleri Yazılım Yapay Zeka ve Yaratıcılık afişinin önünde" },
  { id: 5, alt: "Etkinlik sonrası toplu fotoğraf" },
  { id: 8, alt: "Kulüp çerçevesiyle fotoğraf çekinen katılımcılar" },
  { id: 10, alt: "Pi Günü etkinliğinde konuşmacı" },
  { id: 2, alt: "Tavuk pilav etkinliğinde ikram" },
  { id: 3, alt: "Düşünceni Paylaş panosu önünde misafirler" },
  { id: 6, alt: "Konferans salonunda açılış konuşması" },
  { id: 7, alt: "Sahnede plaket takdimi" },
  { id: 1, alt: "Sahnede kulüp ekibi" },
];
// Layout tip: the first photo is shown large, so 1 + a multiple of 4 photos fills the grid evenly.
