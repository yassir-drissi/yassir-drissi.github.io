// Configuration centrale du site.
// SITE_URL : adresse publique (GitHub Pages, dépôt yassir-drissi.github.io).
export const SITE_URL = 'https://yassir-drissi.github.io';
export const ACTIVE_TEMPLATE = 'nova';

// Langue par défaut : français à la racine, anglais sous /en/.
export const SITE_LOCALE = 'fr';

// Pages incluses dans le build ([] = toutes) ; forceRemove = outils de dev du modèle.
export const BUILD_SCOPE = {
  pages: [],
  forceRemove: ['starwind-demo', 'layout-test', 'roofing', 'dev', 'qa'],
  images: true,
};
