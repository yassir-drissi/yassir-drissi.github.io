// Configuration centrale du site.
// SITE_URL : adresse publique. Par défaut GitHub Pages ; le workflow Vercel la remplace
// par le domaine personnalisé via la variable d'environnement SITE_URL.
export const SITE_URL = (process.env.SITE_URL || 'https://yassir-drissi.github.io').replace(/\/+$/, '');
export const ACTIVE_TEMPLATE = 'nova';

// Langue par défaut : français à la racine, anglais sous /en/.
export const SITE_LOCALE = 'fr';

// Pages incluses dans le build ([] = toutes) ; forceRemove = outils de dev du modèle.
export const BUILD_SCOPE = {
  pages: [],
  forceRemove: ['starwind-demo', 'layout-test', 'roofing', 'dev', 'qa'],
  images: true,
};
