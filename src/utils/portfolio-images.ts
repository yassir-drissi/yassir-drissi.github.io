// Résout les images du portfolio :
// - `src` : fichier déjà optimisé dans public/ (servi tel quel, width/height fournis) ;
// - `file` : photo dans src/assets/images/{projects,events}/, convertie en WebP par astro:assets.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

type Files = Record<string, { default: ImageMetadata }>;

const projectFiles = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/projects/*.{jpg,jpeg,png,webp}', { eager: true });
const eventFiles = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/events/*.{jpg,jpeg,png,webp}', { eager: true });

export type ImageInput = { src?: string; file?: string; width?: number; height?: number };
export type ResolvedImage = { src: string; full: string; width: number; height: number };

async function resolve(image: ImageInput, files: Files, folder: string, displayWidth: number): Promise<ResolvedImage | null> {
  if (image.src) {
    return { src: image.src, full: image.src, width: image.width ?? 1600, height: image.height ?? 900 };
  }
  if (!image.file) return null;
  const name = image.file.toLowerCase();
  const key = Object.keys(files).find((path) => path.toLowerCase().endsWith(`/${name}`));
  if (!key) {
    console.warn(`[images] introuvable dans src/assets/images/${folder}/ : ${image.file}`);
    return null;
  }
  const meta = files[key].default;
  const [display, full] = await Promise.all([
    getImage({ src: meta, format: 'webp', width: Math.min(meta.width, displayWidth), quality: 80 }),
    getImage({ src: meta, format: 'webp', width: Math.min(meta.width, 1600), quality: 82 }),
  ]);
  return {
    src: display.src,
    full: full.src,
    width: Number(display.attributes.width ?? meta.width),
    height: Number(display.attributes.height ?? meta.height),
  };
}

export const resolveProjectImage = (image: ImageInput, displayWidth = 1200) => resolve(image, projectFiles, 'projects', displayWidth);
export const resolveEventImage = (image: ImageInput, displayWidth = 720) => resolve(image, eventFiles, 'events', displayWidth);
