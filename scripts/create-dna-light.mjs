import sharp from "sharp";

const input = "public/dna-dark.png";
const output = "public/dna-light.png";

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const out = Buffer.alloc(width * height * 4);

for (let pixel = 0; pixel < width * height; pixel += 1) {
  const offset = pixel * channels;
  const r = data[offset];
  const g = data[offset + 1];
  const b = data[offset + 2];
  const brightness = Math.max(r, g, b);
  const warmth = Math.max(0, r - b);
  const blue = Math.max(0, b - r);
  const signal = Math.max(brightness - 72, warmth * 0.95, blue * 0.72);
  const alpha =
    brightness < 68 && warmth < 28 && blue < 34 ? 0 : Math.max(0, Math.min(135, signal * 1.05));
  const outOffset = pixel * 4;

  out[outOffset] = Math.min(255, Math.round(r * 1.16 + 18));
  out[outOffset + 1] = Math.min(255, Math.round(g * 1.12 + 12));
  out[outOffset + 2] = Math.min(255, Math.round(b * 1.18 + 18));
  out[outOffset + 3] = alpha;
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .blur(0.3)
  .png()
  .toFile(output);
