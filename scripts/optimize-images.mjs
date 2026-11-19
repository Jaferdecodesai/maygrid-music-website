/**
 * Builds responsive AVIF and WebP variants from the collected Instagram stills.
 * Source archive is not committed. Point ASSET_ROOT at the extracted tar
 * (best12/ and a hero frame, or the hero mp4).
 */
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetRoot = process.env.ASSET_ROOT ?? "/tmp/maygrid-src";
const heroVideo =
  process.env.HERO_VIDEO ??
  "/home/ubuntu/.cursor/projects/workspace/uploads/hero-loop_7c0d.mp4";
const outDir = path.join(root, "public", "media");
const posterJpg = path.join("/tmp", "maygrid-hero-poster.jpg");

const jobs = [
  ["electric", "best12/01_hero-primary_electric-guitarist-bw.jpg"],
  ["student", "best12/02_hero-alt_student-orange-cap-acoustic.jpg"],
  ["ensemble", "best12/03_gallery_annual-day-ensemble-green-guitars.jpg"],
  ["portrait", "best12/04_about_performer-sunglasses-bw.jpg"],
  ["curtain", "best12/05_about_solo-guitarist-blue-curtain.jpg"],
  ["jam", "best12/06_lessons_group-jam-room.jpg"],
  ["duo", "best12/07_lessons_students-duo-jam.jpg"],
  ["wide", "best12/08_lessons_group-jam-wide.jpg"],
  ["certificates", "best12/09_gallery_certificates-on-stage.jpg"],
  ["red", "best12/10_gallery_red-stage-gig.jpg"],
  ["vocal", "best12/11_gallery_vocalist-bw.jpg"],
  ["vocal2", "best12/12_gallery_vocalist-glasses-bw.jpg"],
];

function widthsFor(width) {
  const steps = [480, 768, 1080, 1440].filter((w) => w <= width - 24);
  if (!steps.includes(width)) steps.push(width);
  return steps;
}

async function render(input, width) {
  return sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true });
}

async function emit(id, input) {
  const meta = await sharp(input).rotate().metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const widths = widthsFor(width);
  await mkdir(outDir, { recursive: true });
  for (const w of widths) {
    const base = path.join(outDir, `${id}-${w}`);
    await (await render(input, w)).avif({ quality: 48, effort: 4 }).toFile(`${base}.avif`);
    await (await render(input, w)).webp({ quality: 72 }).toFile(`${base}.webp`);
  }
  return { width, height, widths };
}

function extractPoster() {
  const result = spawnSync(
    "ffmpeg",
    ["-y", "-ss", "2", "-i", heroVideo, "-frames:v", "1", posterJpg],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    throw new Error("ffmpeg could not extract a hero poster frame");
  }
}

async function ogImage(electricPath) {
  const photo = await sharp(electricPath)
    .rotate()
    .resize({ width: 520, height: 630, fit: "cover", position: "centre" })
    .toBuffer();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="630" fill="#0c0d0f"/>
    <rect x="72" y="88" width="56" height="8" fill="#E05020"/>
    <text x="72" y="210" fill="#F3EEE6" font-family="Inter, Liberation Sans, Noto Sans, sans-serif" font-size="92" font-weight="700" letter-spacing="-3">MAYGRID</text>
    <text x="72" y="278" fill="#F0A010" font-family="Liberation Serif, Georgia, serif" font-size="40" font-style="italic">Music beyond Grid</text>
    <text x="72" y="390" fill="#F3EEE6" font-family="Inter, Liberation Sans, Noto Sans, sans-serif" font-size="28">Guitar and vocal training in Dubai</text>
    <text x="72" y="446" fill="#B7AFA4" font-family="Inter, Liberation Sans, Noto Sans, sans-serif" font-size="24">Sundays · AED 250 a month · Free trial</text>
    <text x="72" y="548" fill="#F3EEE6" font-family="Inter, Liberation Sans, Noto Sans, sans-serif" font-size="22">Near Sharaf DG Metro</text>
  </svg>`;

  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#0c0d0f" },
  })
    .composite([
      { input: photo, left: 680, top: 0 },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(root, "public", "og.jpg"));
}

async function appleIcon() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="180" fill="#0c0d0f"/>
    <g transform="translate(28,36) scale(1.35)">
      <rect x="35" y="16" width="18" height="39" fill="#F3EEE6"/>
      <polygon points="67,16 83,16 75,28" fill="#E05020"/>
      <rect x="92" y="16" width="19" height="11" fill="#F0A010"/>
      <circle cx="100.5" cy="47.5" r="13.5" fill="#E05020"/>
      <path d="M66 64 V49 A8 8 0 0 1 82 49 V64 Z" fill="#F3EEE6"/>
      <rect x="37" y="66" width="12" height="8" fill="#E05020"/>
      <circle cx="43" cy="84" r="5.5" fill="#F0A010"/>
      <path fill="#F0A010" fill-rule="evenodd" d="M59 72 H91 V91 H59 Z M69.5 82 a6.2 6.2 0 0 1 12.4 0 V91 H69.5 Z"/>
      <polygon points="111,68 111,88 98,78" fill="#F3EEE6"/>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(root, "src", "app", "apple-icon.png"));
}

async function main() {
  await mkdir(path.join(root, "public", "video"), { recursive: true });
  await mkdir(path.join(root, "src", "app"), { recursive: true });
  await copyFile(heroVideo, path.join(root, "public", "video", "hero-loop.mp4"));
  extractPoster();

  const manifest = {};
  for (const [id, rel] of jobs) {
    const input = path.join(assetRoot, rel);
    manifest[id] = await emit(id, input);
    console.log(id, manifest[id].width, manifest[id].widths.join(","));
  }
  manifest.poster = await emit("poster", posterJpg);
  console.log("poster", manifest.poster.width, manifest.poster.widths.join(","));

  await writeFile(
    path.join(root, "src", "lib", "media-manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
  await ogImage(path.join(assetRoot, jobs[0][1]));
  await appleIcon();
  console.log("wrote manifest, og.jpg, apple-icon.png, hero video");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
