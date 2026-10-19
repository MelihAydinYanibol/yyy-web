"use client";

import { useState } from "react";
import { club, ui, type Locale } from "@/content/site";

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = ui[locale];
  const home = locale === "en" ? "/en" : "/";
  const otherLocaleHref = locale === "en" ? "/" : "/en";
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#events", label: t.nav.events },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href={home} className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
          <img src="/img/logos/yyy.webp" alt="" width={36} height={36} className="h-9 w-9" />
          <span>{club.shortName}</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={otherLocaleHref}
              hrefLang={locale === "en" ? "tr" : "en"}
              aria-label={t.switchLabel}
              className="rounded-md border border-white/20 px-2 py-1 text-xs font-semibold transition hover:bg-white/10 hover:text-white"
            >
              {t.switchShort}
            </a>
          </li>
          <li>
            <a
              href={club.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 font-semibold text-ink transition hover:bg-white/85"
            >
              {t.join}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={otherLocaleHref}
            hrefLang={locale === "en" ? "tr" : "en"}
            aria-label={t.switchLabel}
            className="rounded-md border border-white/20 px-2 py-1 text-xs font-semibold"
          >
            {t.switchShort}
          </a>
          <button
            type="button"
            className="-mr-2 p-2"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-2 text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={club.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-white px-4 py-2 text-center font-semibold text-ink"
            >
              {t.join}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
