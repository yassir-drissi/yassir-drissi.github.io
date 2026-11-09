// Convertit une capture d'écran en WebP optimisé pour le portfolio.
// Usage : node scripts/shot-to-webp.mjs <entrée.png> <sortie.webp> [largeur=1600] [crop=left,top,width,height]
import sharp from 'sharp';
const [, , input, output, width = '1600', crop] = process.argv;
let img = sharp(input);
if (crop) {
  const [left, top, w, h] = crop.split(',').map(Number);
  img = img.extract({ left, top, width: w, height: h });
}
const info = await img.resize({ width: Number(width), withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
console.log(output, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} Ko`);
