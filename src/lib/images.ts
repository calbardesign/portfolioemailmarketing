import type { ImageMetadata } from 'astro';

// Carrega todas as imagens de e-mail de src/assets/emails/<slug>/<arquivo>
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/emails/*/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export function emailImage(slug: string, file: string): ImageMetadata {
  const key = `/src/assets/emails/${slug}/${file}`;
  const mod = files[key];
  if (!mod) {
    throw new Error(
      `Image not found: ${key}. Check the file name in src/data/brands.ts.`,
    );
  }
  return mod.default;
}
