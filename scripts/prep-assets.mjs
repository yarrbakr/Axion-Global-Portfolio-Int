// One-off brand-asset generator.  Run with:  npm run prep-assets
//
// Produces optimized, deploy-ready derivatives from the source logo and team
// photos (which live outside the repo).  Safe to re-run — it overwrites.
//
// The source logo is a 2816x1536 banner containing the fingerprint "A+G"
// monogram AND the "AXION GLOBAL" wordmark on deep navy.  We crop just the
// monogram and lift it onto a transparent background (using its own luminance
// as an alpha mask) so the white mark sits cleanly on any navy surface.

import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = {
  logo: "D:/PERSONAL/Claude-Projects/AXION-GLOBAL/logo.png",
  ceo: "D:/BUSINESSES/AXION-GLOBAL/documents/Pictures/CEO.jpeg",
  coo: "D:/BUSINESSES/AXION-GLOBAL/documents/Pictures/COO.png",
};

const NAVY = "#0A1730";

// Square crop around the monogram on the 2816x1536 banner.
// Tune these if the mark looks off-centre or clips, then re-run.
const CROP = { left: 930, top: 110, side: 900 };

mkdirSync("public/team", { recursive: true });

async function run() {
  // 1) Keep the full banner for reference / OG source.
  await sharp(SRC.logo).toFile("public/logo.png");

  // 2) Transparent white monogram. Use the crop's luminance as the alpha
  //    channel so navy -> transparent and the white fingerprint stays opaque.
  const S = 512;
  const region = sharp(SRC.logo)
    .extract({ left: CROP.left, top: CROP.top, width: CROP.side, height: CROP.side })
    .resize(S, S);

  const alpha = await region
    .clone()
    .greyscale()
    .normalise()
    .linear(1.5, -45) // steepen so the navy background drops fully to 0 alpha
    .extractChannel(0)
    .raw()
    .toBuffer(); // S * S single-channel mask

  const whiteRGB = await sharp({
    create: { width: S, height: S, channels: 3, background: "#ffffff" },
  })
    .raw()
    .toBuffer();

  const markPng = await sharp(whiteRGB, { raw: { width: S, height: S, channels: 3 } })
    .joinChannel(alpha, { raw: { width: S, height: S, channels: 1 } })
    .png()
    .toBuffer();

  await sharp(markPng).toFile("public/logo-mark.png");

  // 3) App icons: white monogram centred on a navy square.
  async function icon(size, out) {
    const inner = Math.round(size * 0.74);
    const mark = await sharp(markPng).resize(inner, inner).toBuffer();
    await sharp({
      create: { width: size, height: size, channels: 4, background: NAVY },
    })
      .composite([{ input: mark, gravity: "centre" }])
      .png()
      .toFile(out);
  }
  await icon(256, "app/icon.png");
  await icon(180, "app/apple-icon.png");

  // 4) Team photos — auto-orient; downscale the heavy COO PNG.
  await sharp(SRC.ceo).rotate().toFile("public/team/aliyan.jpeg");
  await sharp(SRC.coo)
    .rotate()
    .resize({ width: 900, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile("public/team/abubakar.png");

  console.log("Generated:");
  console.log("  public/logo.png, public/logo-mark.png");
  console.log("  app/icon.png, app/apple-icon.png");
  console.log("  public/team/aliyan.jpeg, public/team/abubakar.png");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
