import type { L } from '../types';

export type ProjectCategory = 'vision' | 'genai' | 'data-science' | 'data-eng' | 'iot';

export const categoryLabels: Record<ProjectCategory, L> = {
  vision: { fr: 'IA & Vision', en: 'AI & Vision' },
  genai: { fr: 'GenAI', en: 'GenAI' },
  'data-science': { fr: 'Data Science', en: 'Data Science' },
  'data-eng': { fr: 'Data Engineering', en: 'Data Engineering' },
  iot: { fr: 'IoT / Full-stack', en: 'IoT / Full-stack' },
};

/** Filtres affichés au-dessus de la grille de projets. */
export const projectFilters: Array<{ id: 'all' | ProjectCategory; label: L }> = [
  { id: 'all', label: { fr: 'Tous', en: 'All' } },
  { id: 'vision', label: categoryLabels.vision },
  { id: 'genai', label: categoryLabels.genai },
  { id: 'data-science', label: categoryLabels['data-science'] },
  { id: 'data-eng', label: categoryLabels['data-eng'] },
];

export type ProjectImage = {
  /** Image déjà optimisée dans public/, ex. '/images/projets/hayati-accueil.webp' (avec width/height). */
  src?: string;
  /** OU photo dans src/assets/images/projects/, convertie en WebP au build (astro:assets). */
  file?: string;
  width?: number;
  height?: number;
  /** Cadrage de la vignette recadrée (object-position), ex. 'center 35%'. */
  position?: string;
  alt: L;
  caption?: L;
};

export type Project = {
  /** Identifiant d'URL : /projets/<slug>/ */
  slug: string;
  /** Ordre d'affichage dans la grille (plus petit = en premier). */
  order: number;
  /** Brouillon : projet masqué du site (ni carte, ni page détail) tant que le problème ou les résultats manquent. */
  draft?: boolean;
  /** Projet phare : affiché en grand format en haut de page. */
  featured?: boolean;
  category: ProjectCategory;
  year: string;
  title: L;
  /** Stage, mission freelance, projet d'équipe, école, hackathon… */
  context: L;
  /** Carte : problème, ce que j'ai fait, résultat. */
  problem: L;
  did: L;
  result: L;
  /** Chiffres clés mis en avant (projets phares et page détail). */
  metrics?: Array<{ value: string; label: L }>;
  stack: string[];
  /** Pas de `code` = « Code privé / projet d'équipe » affiché à la place du bouton GitHub. */
  links?: {
    code?: string;
    demo?: string;
    /** Post LinkedIn qui présente le projet. */
    post?: string;
  };
  /** Captures d'écran : la première sert de vignette sur la carte. */
  images?: ProjectImage[];
  /** Page détail : Problème → Données → Approche → Résultats → Ce que j'améliorerais. */
  details: {
    problem: L;
    data: L<string[]>;
    approach: L<string[]>;
    results: L<string[]>;
    improve: L<string[]>;
  };
};
