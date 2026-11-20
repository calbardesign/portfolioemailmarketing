import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: 'ignore',
  image: {
    // e-mails são longos; libera imagens grandes
    service: { entrypoint: 'astro/assets/services/sharp', config: { limitInputPixels: false } },
  },
});
