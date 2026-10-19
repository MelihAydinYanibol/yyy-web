# yyy-web

Website of the **Yazılım, Yapay Zeka ve Yaratıcılık Kulübü** (YYYazılım) at İstanbul Esenyurt Üniversitesi.

Built with Next.js 16, React 19 and Tailwind CSS 4, exported as a fully static site (plain HTML/CSS/JS in `out/`) so it can be hosted for free.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # writes the static site to out/
```

## Editing content

Text, events, team members and gallery photos are all in **`content/site.ts`**. You usually don't need to touch any component.

The site comes in two languages: Turkish at `/` and English at `/en`, with a TR/EN switch in the navbar. Every visible text is written as `{ tr: "...", en: "..." }`, and buttons and headings live in the `ui` object, so add both languages whenever you change something.

- **New event:** add it to `upcomingEvents`. After it happens, move it to the top of `pastEvents`.
- **Join form:** set `club.joinUrl` to your Google Forms / Tally link. It currently points to Instagram.
- **Domain:** set `club.siteUrl` to your real domain so link previews (Open Graph) work.

### Adding photos

Keep the site fast by adding images as WebP, not raw camera JPG/PNG files.

- **Gallery:** add `public/img/gallery/photoN-800.webp` and `photoN-1600.webp` (800px and 1600px wide), then add `{ id: N, alt: "..." }` to `gallery`.
- **Team:** a square 320×320 WebP in `public/img/team/`.

One way to convert, using ImageMagick:

```bash
magick input.jpg -resize 1600x -quality 72 public/img/gallery/photo11-1600.webp
magick input.jpg -resize 800x  -quality 72 public/img/gallery/photo11-800.webp
magick face.png  -resize 320x320^ -gravity center -extent 320x320 -quality 78 public/img/team/name.webp
```

## Deploying for free

### Vercel (easiest)
1. Go to [vercel.com/new](https://vercel.com/new) and import this GitHub repo. It detects Next.js, so leave the defaults.
2. Every push to `main` deploys automatically, and pull requests get preview links.
3. To use your domain: open the project, go to **Settings → Domains**, add your domain, then add the DNS records Vercel shows at your domain registrar.

### Cloudflare Pages (alternative)
1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repo.
2. Build command: `npm run build`. Output directory: `out`.
3. Add your domain under **Custom domains**.
 
Both are free with HTTPS included.
