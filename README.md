# MayGrid Music

Marketing site for MayGrid Music, guitar and vocal training for adults in Dubai. One page, static export, dark and photographic.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is written to `out/`. Preview it with:

```bash
npm run preview
```

Then open [http://localhost:4173](http://localhost:4173).

`npm run images` rebuilds the AVIF and WebP set, `public/og.jpg`, and `src/app/apple-icon.png`. It expects the extracted asset archive in `ASSET_ROOT` (default `/tmp/maygrid-src`, with a `best12/` folder) and the hero clip in `HERO_VIDEO`. The committed `public/media` files are enough for a normal build.

## Deploy

The live site is [maygridmusic.com](https://maygridmusic.com) on Hostinger shared hosting. Hostinger’s Git deploy only pulls files. It does not install or build.

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`. It runs `npm ci && npm run build` with `NEXT_PUBLIC_SITE_URL=https://maygridmusic.com`, then force-pushes the contents of `out/` to the root of an orphan branch named `deploy` (`peaceiris/actions-gh-pages`, `publish_branch: deploy`, `force_orphan: true`).

In hPanel, connect the Git repository and set the deployment branch to **`deploy`**, not `main`. The export has no `basePath` and images are unoptimized, so the files work at the domain root. `public/.htaccess` is copied into `out/` and gives clean trailing-slash URLs, a custom 404, a long cache for `/_next/static`, and an HTTPS redirect.

There is no app server. Booking is a WhatsApp link.

## Design tokens

Colour, type, spacing, radius, shadow, and motion live in [`src/styles/tokens.css`](src/styles/tokens.css) as `--mg-*` custom properties. [`src/app/globals.css`](src/app/globals.css) maps them into Tailwind (`bg-ink`, `text-amber`, `font-display`, and the rest). An admin panel should import `tokens.css` rather than copy values.

## Content boundaries

Copy on the site is limited to facts supplied for this build: the public Instagram of [@maygridmusic](https://www.instagram.com/maygridmusic/) and [@jaabi_baapu](https://www.instagram.com/jaabi_baapu/), plus the offer, audience, and location given with the project.

- **Offer:** AED 250 per month, 4 classes, every Sunday. Free live trial on Sunday, with a guitar provided for each participant.
- **Audience:** adults, ages 18–40.
- **Place:** a studio near Sharaf DG Metro station, Dubai. No street address is published.
- **Styles:** Western, Bollywood, and South Indian covers. Performances have included Malayalam folk rock, rock gigs, and Hindi film songs.
- **Quotes:** only the two captions stored in `src/lib/site.ts`, plus MayGrid’s own “Strangers when we started…” line. Do not invent testimonials.
- **People:** do not caption a photograph as Jaabi. Which performer he is has not been confirmed.
- **Not stated, so not on the site:** lesson length, one-to-one versus group as the paid format, a syllabus, kids’ classes, or an email address.

The price and Sunday schedule were not in the Instagram captions. They come from the brief for this project.

WhatsApp: [+971 54 540 9151](https://wa.me/971545409151) with a prefilled trial message. The bio also has a short link (`wa.me/message/SLXGUTATRRW7K1`); this site uses the numbered link so the message can be prefilled.
