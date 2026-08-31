import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // La raiz del proyecto es esta carpeta. Sin esto, Turbopack sube buscando
  // lockfiles y encuentra el del directorio de usuario.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },

  images: {
    // El briefing pide WebP o AVIF. Next sirve lo que acepte cada navegador.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
