import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { club } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${club.shortName} – ${club.name}`;
const description = `${club.university} ${club.name}. ${club.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(club.siteUrl),
  title,
  description,
  keywords: ["YYYazılım", "yazılım kulübü", "yapay zeka", "İstanbul Esenyurt Üniversitesi", "IESU", "öğrenci kulübü"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      {/* Browser extensions often inject attributes into <body> before React loads. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
