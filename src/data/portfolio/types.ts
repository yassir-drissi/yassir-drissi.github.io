// Types partagés par tous les fichiers de contenu du portfolio.
// Chaque texte visible existe en deux langues : { fr: '...', en: '...' }.
// Un texte qui commence par "TODO" est affiché comme une étiquette orange
// sur le site : c'est volontaire, pour repérer les informations manquantes.

export type Locale = 'fr' | 'en';

export const LOCALES: Locale[] = ['fr', 'en'];
export const DEFAULT_LOCALE: Locale = 'fr';

/** Texte bilingue. */
export type L<T = string> = { fr: T; en: T };

/** Retourne la version d'un texte bilingue dans la langue demandée. */
export function tr<T>(value: L<T>, locale: Locale): T {
  return value[locale];
}

export function isTodo(text: string | undefined | null): boolean {
  return typeof text === 'string' && text.trim().startsWith('TODO');
}
