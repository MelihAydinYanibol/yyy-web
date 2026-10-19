import Navbar from "./components/Navbar";
import {
  ArrowIcon,
  CalendarIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  UsersIcon,
} from "./components/Icons";
import { club, gallery, pastEvents, pillars, stats, team, upcomingEvents } from "@/content/site";

const photo = (id: number, w: 800 | 1600) => `/img/gallery/photo${id}-${w}.webp`;
const srcSet = (id: number) => `${photo(id, 800)} 800w, ${photo(id, 1600)} 1600w`;

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-white/65">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        {/* Hero height leaves room for the stats bar on the first screen; the photo just fills it. */}
        <section className="relative isolate flex h-[calc(100svh-9rem)] min-h-[30rem] max-h-[44rem] items-center overflow-hidden pt-16">
          <img
            src={photo(4, 1600)}
            srcSet={srcSet(4)}
            sizes="100vw"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink to-transparent" />
          <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <img src="/img/logos/iesu.webp" alt="" width={16} height={20} className="h-5 w-auto" />
              {club.university}
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-brand">Yazılım</span>, Yapay Zeka ve Yaratıcılık Kulübü
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">{club.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={club.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-white/85"
              >
                Kulübe Katıl
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#etkinlikler"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Etkinlikler
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Rakamlarla kulüp" className="border-y border-white/10 bg-panel">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-black sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="hakkimizda" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Hakkımızda" title={`${club.founded}'ten beri kampüste teknoloji rüzgarı`} />
              <p className="-mt-4 leading-relaxed text-white/70">{club.description}</p>
            </div>
            <img
              src="/img/logos/yyy.webp"
              alt={`${club.shortName} logosu`}
              width={256}
              height={256}
              loading="lazy"
              className="mx-auto h-56 w-56 sm:h-64 sm:w-64"
            />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-panel p-6">
                <div className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r ${p.color}`} />
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section id="etkinlikler" className="border-t border-white/10 bg-panel">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Etkinlikler"
              title="Neler yapıyoruz?"
              text="Atölyeler, seminerler, zirveler ve sosyal buluşmalar. Etkinliklerimiz tüm öğrencilere açık."
            />

            <h3 className="mb-4 text-lg font-semibold">Yaklaşan etkinlikler</h3>
            {upcomingEvents.length > 0 ? (
              <div className="mb-16 grid gap-4 md:grid-cols-2">
                {upcomingEvents.map((e) => (
                  <article key={e.title} className="rounded-2xl border border-pink-400/30 bg-ink p-6">
                    <h4 className="text-xl font-bold">{e.title}</h4>
                    <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
                      <CalendarIcon className="h-4 w-4" /> {e.date}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-white/70">
                      <PinIcon className="h-4 w-4" /> {e.location}
                    </p>
                    <p className="mt-3 text-sm text-white/65">{e.description}</p>
                    {e.url && (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pink-400 hover:text-pink-300"
                      >
                        Kayıt ol <ArrowIcon className="h-4 w-4" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="mb-16 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-white/20 p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-white/70">
                  Yeni etkinlikler çok yakında! Duyurular için bizi Instagram&apos;da takip edin.
                </p>
                <a
                  href={club.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                >
                  <InstagramIcon className="h-4 w-4" /> @iesuyyyazilim
                </a>
              </div>
            )}

            <h3 className="mb-6 text-lg font-semibold">Geçmiş etkinlikler</h3>
            <ol className="relative space-y-8 border-l border-white/15 pl-6 sm:pl-8">
              {pastEvents.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-sky-400 ring-4 ring-panel sm:-left-[39px]" />
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/55">
                    <span>{e.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <UsersIcon className="h-3.5 w-3.5" /> {e.participants} katılımcı
                    </span>
                  </div>
                  <h4 className="mt-1 text-lg font-bold">{e.title}</h4>
                  <p className="mt-1 max-w-2xl text-white/65">{e.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/60 ring-1 ring-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="galeri" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <SectionHeading eyebrow="Galeri" title="Kareler" text="Etkinliklerimizden anılar." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g, i) => (
              <a
                key={g.id}
                href={photo(g.id, 1600)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group overflow-hidden rounded-xl bg-panel ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={photo(g.id, 800)}
                  srcSet={srcSet(g.id)}
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="ekip" className="border-t border-white/10 bg-panel">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <SectionHeading eyebrow="Ekip" title="Yönetim ekibimiz" text="Kulübü ayakta tutan tutkulu öğrenciler." />
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((m) => (
                <li key={m.name} className="rounded-2xl border border-white/10 bg-ink p-5 text-center">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      width={96}
                      height={96}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-amber-400 to-sky-500 text-2xl font-bold">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <h3 className="mt-4 font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm text-pink-400">{m.role}</p>
                  <p className="mt-0.5 text-xs text-white/50">{m.department}</p>
                  {(m.linkedin || m.github) && (
                    <div className="mt-3 flex justify-center gap-2">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} LinkedIn`}
                          className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </a>
                      )}
                      {m.github && (
                        <a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} GitHub`}
                          className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Join / contact */}
        <section id="iletisim" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-fuchsia-700 to-sky-700 p-8 sm:p-14">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Aramıza katılmaya hazır mısın?</h2>
            <p className="mt-4 max-w-xl text-white/85">
              Bölümün ya da seviyen fark etmez. Öğrenmeye ve üretmeye hevesli herkesi bekliyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={club.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-white/85"
              >
                Kulübe Katıl <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${club.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" /> Bize yazın
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/logos/yyy.webp" alt="" width={32} height={32} loading="lazy" className="h-8 w-8" />
            <img src="/img/logos/iesu.webp" alt="İstanbul Esenyurt Üniversitesi" width={26} height={32} loading="lazy" className="h-8 w-auto" />
            <p>
              © {new Date().getFullYear()} {club.name}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <a href={`mailto:${club.email}`} aria-label="E-posta" className="rounded-lg p-2 transition hover:bg-white/10 hover:text-white">
              <MailIcon className="h-5 w-5" />
            </a>
            <a href={club.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-lg p-2 transition hover:bg-white/10 hover:text-white">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={club.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 transition hover:bg-white/10 hover:text-white">
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
