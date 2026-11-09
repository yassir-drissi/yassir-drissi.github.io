// Gestion des langues du portfolio.
// Français = langue par défaut, servie à la racine (/).
// Anglais = /en/. Les pages détail ont des segments traduits :
//   /projets/<slug>/          <->  /en/projects/<slug>/
//   /mentions-legales/        <->  /en/legal-notice/
import { ui } from '@data/portfolio/ui';
import type { Locale } from '@data/portfolio/types';

export type NovaLocale = Locale;

export function getNovaCopy(locale: NovaLocale = 'fr') {
  return ui[locale] ?? ui.fr;
}

function withBase(path: string): string {
  const configuredBase = process.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL;
  const base = configuredBase === '/' ? '' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}`;
  return `${base}${path}` || '/';
}

/** Correspondance des segments d'URL traduits (FR -> EN). */
const SEGMENTS: Array<[string, string]> = [
  ['projets', 'projects'],
  ['mentions-legales', 'legal-notice'],
];

/** Chemin d'accueil d'une langue. */
export function getNovaLocalePath(locale: NovaLocale): string {
  return withBase(locale === 'en' ? '/en/' : '/');
}

/**
 * Construit un chemin interne à partir d'un chemin "français" logique.
 * localizePath('/projets/hayati/', 'en') -> '/en/projects/hayati/'
 */
export function localizePath(frPath: string, locale: NovaLocale): string {
  const normalized = frPath.startsWith('/') ? frPath : `/${frPath}`;
  if (locale === 'fr') return withBase(normalized);
  const parts = normalized.split('/');
  const translated = parts.map((part) => SEGMENTS.find(([fr]) => fr === part)?.[1] ?? part);
  const joined = translated.join('/');
  return withBase(joined === '/' ? '/en/' : `/en${joined}`);
}

/** Traduit le chemin courant vers l'autre langue (sélecteur de langue). */
export function translatePath(pathname: string, target: NovaLocale): string {
  const base = (process.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  let path = base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  if (!path.endsWith('/')) path += '/';
  const isEn = path === '/en/' || path.startsWith('/en/');
  let frPath = path;
  if (isEn) {
    frPath = path.slice(3) || '/';
    if (!frPath.startsWith('/')) frPath = `/${frPath}`;
    frPath = frPath
      .split('/')
      .map((part) => SEGMENTS.find(([, en]) => en === part)?.[0] ?? part)
      .join('/');
  }
  return localizePath(frPath, target);
}

/**
 * Lien de navigation : les ancres (#projets) pointent vers l'accueil de la
 * langue, pour fonctionner aussi depuis les pages détail.
 */
export function getNovaNavigationPath(href: string, locale: NovaLocale): string {
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
  if (href.startsWith('#')) return `${getNovaLocalePath(locale)}${href}`;
  return localizePath(href, locale);
}
