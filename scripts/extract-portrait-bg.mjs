import sharp from "sharp";

const input = "/Users/joep/Downloads/joeppeeters@happyhorizon.com (1).jpg";
const output = "public/joep-portrait.png";

const image = sharp(input).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const alpha = new Uint8Array(width * height);

function idx(x, y) {
  return y * width + x;
}

function rgb(pixel) {
  const offset = pixel * channels;
  return [data[offset], data[offset + 1], data[offset + 2]];
}

function inEllipse(x, y, cx, cy, rx, ry) {
  return ((x - cx) ** 2) / rx ** 2 + ((y - cy) ** 2) / ry ** 2 <= 1;
}

function inPolygon(x, y, points) {
  let inside = false;

  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
}

function isYellowBackdrop(r, g, b) {
  return r > 150 && g > 125 && b < 105;
}

function isNavyBackdrop(r, g, b) {
  return b > 30 && b > r * 1.22 && b > g * 1.12;
}

function isBackdrop(r, g, b) {
  return isYellowBackdrop(r, g, b) || isNavyBackdrop(r, g, b);
}

const torso = [
  [410, 430],
  [585, 430],
  [690, 570],
  [835, 680],
  [970, 1000],
  [85, 1000],
  [120, 800],
  [260, 650],
  [350, 545],
];

const leftArm = [
  [115, 720],
  [335, 585],
  [440, 1000],
  [90, 1000],
];

const rightArm = [
  [625, 555],
  [900, 705],
  [980, 1000],
  [610, 1000],
];

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const pixel = idx(x, y);
    const [r, g, b] = rgb(pixel);
    const backdrop = isBackdrop(r, g, b);
    const head =
      inEllipse(x, y, 505, 285, 170, 215) ||
      inEllipse(x, y, 502, 365, 130, 145) ||
      inEllipse(x, y, 365, 330, 28, 55) ||
      inEllipse(x, y, 642, 330, 28, 55);
    const body =
      inPolygon(x, y, torso) ||
      inPolygon(x, y, leftArm) ||
      inPolygon(x, y, rightArm) ||
      (x > 392 && x < 620 && y > 395 && y < 585);

    if ((head || body) && !backdrop) {
      alpha[pixel] = 255;
    }
  }
}

const { data: mask, info: maskInfo } = await sharp(alpha, { raw: { width, height, channels: 1 } })
  .blur(1.05)
  .raw()
  .toBuffer({ resolveWithObject: true });
const rgba = Buffer.from(data);

for (let pixel = 0; pixel < width * height; pixel += 1) {
  const value = mask[pixel * maskInfo.channels];
  rgba[pixel * channels + 3] = value < 50 ? 0 : value > 210 ? 255 : value;
}

await sharp(rgba, { raw: { width, height, channels } }).png().toFile(output);
