// Profil : identité, liens, CV et formulaire de contact.
import type { L } from './types';

export const profile = {
  name: 'Yassir Drissi',
  initials: 'YD',

  title: {
    fr: 'Étudiant ingénieur IA & Data Science',
    en: 'AI & Data Science engineering student',
  } satisfies L,

  roles: 'AI Engineer · Data Scientist · Data Engineer',

  location: {
    fr: 'Rabat, Maroc · mobile dans toutes les villes',
    en: 'Rabat, Morocco · open to relocating anywhere in Morocco',
  } satisfies L,

  /** Disponibilité affichée dans le hero et la section contact. */
  availability: {
    fr: 'PFE de 6 mois · à partir de février 2027',
    en: '6-month final-year internship · from February 2027',
  } satisfies L,

  email: 'drissiyassir10@gmail.com',

  links: {
    github: 'https://github.com/yassir-drissi',
    linkedin: 'https://www.linkedin.com/in/yassir-drissi/',
    /** Podcast EngiTalks, épisode 1. */
    spotify: 'https://open.spotify.com/episode/2vKsr4sR0FMeeSof39Xh5j',
  },

  /** Photo : déposer le fichier dans public/images/yassir.webp (carré 800x800, recadré depuis photo_profil_linkedin.jpg). */
  photo: '/images/yassir.webp',
  photoAlt: {
    fr: 'Portrait de Yassir Drissi',
    en: 'Portrait of Yassir Drissi',
  } satisfies L,

  /** CV : fichiers dans public/cv/. Le bon fichier est proposé selon la langue. */
  cv: {
    fr: '/cv/CV_DRISSI_YASSIR.pdf',
    en: '/cv/RESUME_DRISSI_YASSIR.pdf',
  } satisfies L,

  /**
   * Formulaire de contact (Web3Forms, sans backend).
   * La clé est publique par conception : elle n'autorise que l'envoi vers l'adresse liée au compte Web3Forms.
   * Vide = le formulaire est remplacé par un lien mailto.
   */
  web3formsAccessKey: 'f0000ca1-39d5-45bd-86de-8f72a6960f30',

  languages: [
    { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'langue maternelle', en: 'native' } },
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'avancé', en: 'advanced' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'intermédiaire', en: 'intermediate' } },
  ] satisfies Array<{ name: L; level: L }>,
};
