"use client";

import { useState } from "react";
import { club } from "@/content/site";

const links = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#etkinlikler", label: "Etkinlikler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#ekip", label: "Ekip" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
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
              href={club.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 font-semibold text-ink transition hover:bg-white/85"
            >
              Kulübe Katıl
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
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
              Kulübe Katıl
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
