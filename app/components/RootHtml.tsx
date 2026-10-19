// Shared pieces of the two root layouts: app/(tr)/layout.tsx serves "/" and
// app/(en)/en/layout.tsx serves "/en", each with its own <html lang>.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { club, type Locale } from "@/content/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export function buildMetadata(locale: Locale): Metadata {
  const title = `${club.shortName} – ${club.name[locale]}`;
  const description = `${club.university[locale]} ${club.name[locale]}. ${club.tagline[locale]}`;
  return {
    metadataBase: new URL(club.siteUrl),
    title,
    description,
    keywords: ["YYYazılım", "yazılım kulübü", "software club", "yapay zeka", "AI", "İstanbul Esenyurt Üniversitesi", "IESU"],
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: { tr: "/", en: "/en" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "tr_TR",
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
  };
}

export function RootHtml({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${inter.variable} antialiased`}>
      {/* Browser extensions often inject attributes into <body> before React loads. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
