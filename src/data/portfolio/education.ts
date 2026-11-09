// Formation et certifications (section Parcours).
import { isTodo, type L } from './types';

export type Education = {
  degree: L;
  school: string;
  period: L;
  start: string;
  details?: L;
};

export const education: Education[] = [
  {
    degree: {
      fr: 'Cycle ingénieur en informatique, option IA & Data Science',
      en: 'Engineering degree in Computer Science, AI & Data Science track',
    },
    school: 'EMSI Rabat',
    period: { fr: 'oct. 2024 – juin 2027', en: 'Oct 2024 – Jun 2027' },
    start: '2024-10',
    details: {
      fr: "Double diplôme avec l'Université Côte d'Azur (UCA).",
      en: "Double degree with Université Côte d'Azur (UCA), France.",
    },
  },
  {
    degree: { fr: 'Classe préparatoire intégrée', en: 'Integrated preparatory classes' },
    school: 'EHEIM Oujda',
    period: { fr: '2022 – 2024', en: '2022 – 2024' },
    start: '2022-09',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  /** true = obtenue ; false = en cours. */
  obtained: boolean;
  /** Lien de vérification (Credly, Coursera…). */
  url?: string;
  /** Post LinkedIn qui annonce la certification. */
  post?: string;
};

/** Certifications : le bandeau des chiffres clés compte les obtenues et les en cours. */
const allCertifications: Certification[] = [
  {
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    year: '2026',
    obtained: true,
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7500933476590800897/',
  },
  { name: 'Agentic AI Foundations Associate', issuer: 'Oracle', year: '2026', obtained: true },
  { name: 'Natural Language Processing Specialization', issuer: 'DeepLearning.AI', year: '2026', obtained: true },
  { name: 'Data Engineering', issuer: 'IBM', year: '2025', obtained: true },
  { name: 'Becoming a Machine Learning Engineer', issuer: 'AWS', obtained: false },
  // Masquée tant que l'intitulé exact n'est pas renseigné (voir le filtre ci-dessous).
  { name: 'TODO : intitulé exact de la certification', issuer: 'Databricks', obtained: false },
];

/** Certifications affichées : celles dont l'intitulé est encore un TODO restent masquées. */
export const certifications = allCertifications.filter((c) => !isTodo(c.name));

/** Formations complémentaires (cours en ligne), hors décompte des certifications. */
export const complementaryTraining: Array<{ name: string; issuer: string; year: string; post?: string }> = [
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM · Coursera',
    year: '2025',
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7391031445454008320/',
  },
];
