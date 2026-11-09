// Événements, conférences et engagements (carrousel « Événements & engagement »).
// Uniquement ce que tu as vécu : dates et liens relevés sur tes posts LinkedIn.
// Le carrousel est trié du plus récent au plus ancien (champ sortDate).
//
// Photos : déposer les fichiers dans src/assets/images/events/ (sans le préfixe « li- »),
// puis les lister dans `images` : la première sert de couverture, les suivantes forment
// la petite galerie (lightbox). Astro les convertit en WebP au build (astro:assets).
// Aucune photo de personnalité en couverture.
import type { L } from './types';

export type EventImage = {
  /** Nom du fichier dans src/assets/images/events/, ex. 'gitex-africa-2026-1.jpg' */
  file: string;
  alt: L;
  /** Cadrage de la couverture recadrée en 16:9 (object-position), ex. 'center 35%'. */
  position?: string;
  /** true = image entière sans recadrage (visuels promotionnels avec du texte). */
  contain?: boolean;
};

export type EventLink = {
  url: string;
  label: L;
  icon: string;
};

export type PortfolioEvent = {
  id: string;
  title: L;
  date: L;
  /** AAAA-MM ou AAAA-MM-JJ pour le tri. Vide = en fin de carrousel. */
  sortDate?: string;
  place?: L;
  role: L;
  /** Icône Phosphor du visuel provisoire (quand il n'y a pas de photo). */
  icon: string;
  /** Mise en avant : rôle actif (organisation, animation) ou prix. */
  badge?: { label: L; icon: string };
  takeaway: L;
  links?: EventLink[];
  /** Lecteur intégré (Spotify), chargé en différé. */
  embed?: { src: string; title: L; height: number };
  images?: EventImage[];
  /** Crédit photo, quand les photos viennent du post de quelqu'un d'autre. */
  credit?: L;
  draft?: boolean;
};

const seePost = { fr: 'Voir le post', en: 'See the post' };
const linkedin = (url: string): EventLink => ({ url, label: seePost, icon: 'linkedin-logo' });

export const ENGITALKS_EPISODE_URL = 'https://open.spotify.com/episode/2vKsr4sR0FMeeSof39Xh5j';

export const events: PortfolioEvent[] = [
  {
    id: 'engitalks-ep01',
    title: {
      fr: 'Podcast EngiTalks · Épisode 1 : « Cybersécurité avec Rachid BAARBI »',
      en: 'EngiTalks podcast · Episode 1: “Cybersecurity with Rachid BAARBI”',
    },
    date: { fr: '30 mai 2026', en: '30 May 2026' },
    sortDate: '2026-05-30',
    place: { fr: 'Career Center EMSI Rabat · Spotify', en: 'EMSI Rabat Career Center · Spotify' },
    role: { fr: 'Animateur', en: 'Host' },
    icon: 'microphone',
    badge: { label: { fr: 'Animation', en: 'Hosting' }, icon: 'microphone' },
    takeaway: {
      fr: "Podcast lancé dans le cadre de mon rôle d'Ambassadeur du Career Center EMSI Rabat. 46 minutes d'échange sur l'importance de la cybersécurité, la veille, le networking et la protection des données.",
      en: 'A podcast I launched as an EMSI Rabat Career Center Ambassador. 46 minutes on why cybersecurity matters, technology watch, networking and data protection.',
    },
    embed: {
      src: 'https://open.spotify.com/embed/episode/2vKsr4sR0FMeeSof39Xh5j',
      title: { fr: 'Lecteur Spotify : EngiTalks, épisode 1', en: 'Spotify player: EngiTalks, episode 1' },
      height: 152,
    },
    links: [
      { url: ENGITALKS_EPISODE_URL, label: { fr: 'Écouter sur Spotify', en: 'Listen on Spotify' }, icon: 'spotify-logo' },
      linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7466451403037634560/'),
    ],
    images: [
      { file: "engitalks-ep01-2.jpg", alt: { fr: "Enregistrement de l'épisode 1 d'EngiTalks avec Rachid BAARBI, au Career Center EMSI Rabat", en: "Recording EngiTalks episode 1 with Rachid BAARBI at the EMSI Rabat Career Center" }, position: "center 62%" },
      { file: "engitalks-ep01-1.jpg", alt: { fr: "L'épisode 1 d'EngiTalks sur Spotify", en: "EngiTalks episode 1 on Spotify" } },
    ],
  },
  {
    id: 'orange-digital-center',
    title: { fr: "Visite d'entreprise · Orange Digital Center", en: 'Company visit · Orange Digital Center' },
    date: { fr: 'mai 2026', en: 'May 2026' },
    sortDate: '2026-05',
    place: { fr: 'Rabat', en: 'Rabat' },
    role: { fr: 'Participant', en: 'Participant' },
    icon: 'buildings',
    takeaway: {
      fr: "Visite organisée par le Career Center EMSI Rabat : découverte d'un écosystème dédié au digital, à l'entrepreneuriat et aux nouvelles technologies, et échanges avec des professionnels.",
      en: 'A visit organised by the EMSI Rabat Career Center: an ecosystem dedicated to digital, entrepreneurship and new technologies, and conversations with professionals.',
    },
    credit: { fr: 'Photo : Career Center EMSI', en: 'Photo: EMSI Career Center' },
    images: [
      { file: "orange-digital-center-1.jpg", alt: { fr: "Les étudiants de l'EMSI devant l'Orange Digital Center, à Rabat", en: "EMSI students in front of the Orange Digital Center, Rabat" }, position: "center 46%" },
      { file: "orange-digital-center-4.jpg", alt: { fr: "Présentation des espaces de l'Orange Digital Center", en: "Tour of the Orange Digital Center spaces" } },
      { file: "orange-digital-center-2.jpg", alt: { fr: "Échanges avec les étudiants dans l'espace d'accueil", en: "Discussion with students in the lounge area" } },
      { file: "orange-digital-center-3.jpg", alt: { fr: "L'espace d'accueil de l'Orange Digital Center", en: "The Orange Digital Center lounge area" } },
    ],
  },
  {
    id: 'hackathon-eth26',
    title: { fr: 'EMSI Tech Hackathon 2026 (ETH26)', en: 'EMSI Tech Hackathon 2026 (ETH26)' },
    date: { fr: 'avril 2026', en: 'April 2026' },
    sortDate: '2026-04',
    place: { fr: "Club d'Innovation EMSI Rabat", en: 'EMSI Rabat Innovation Club' },
    role: { fr: "Membre de l'équipe Hayati", en: 'Hayati team member' },
    icon: 'trophy',
    badge: { label: { fr: 'Prix · 4e place', en: 'Award · 4th place' }, icon: 'trophy' },
    takeaway: {
      fr: "Hayati, une application web avec un assistant en darija pour les démarches du quotidien, a terminé 4e. Équipe : Othmane Dhilou (porteur du projet), Ahlam Khalil et moi. Jury : Mme Hasnââ Chaabi et M. Imad Azzouzi.",
      en: 'Hayati, a web app with a Darija-speaking assistant for everyday tasks, finished 4th. Team: Othmane Dhilou (project lead), Ahlam Khalil and me. Jury: Ms Hasnââ Chaabi and Mr Imad Azzouzi.',
    },
    links: [
      { url: 'https://hayati-frontend.vercel.app/', label: { fr: 'Voir la démo', en: 'See the demo' }, icon: 'arrow-square-out' },
    ],
    credit: { fr: 'Photo : Othmane Dhilou', en: 'Photo: Othmane Dhilou' },
    images: [
      { file: "hackathon-eth26-2.jpg", alt: { fr: "L'équipe Hayati (Ahlam Khalil, Othmane Dhilou et Yassir Drissi) à l'EMSI Tech Hackathon 2026", en: "The Hayati team (Ahlam Khalil, Othmane Dhilou and Yassir Drissi) at the EMSI Tech Hackathon 2026" }, position: "center 45%" },
      { file: "hackathon-eth26-3.jpg", alt: { fr: "Les badges de l'équipe et l'application Hayati à l'écran", en: "Team badges with the Hayati app on screen" } },
      { file: "hackathon-eth26-4.jpg", alt: { fr: "L'équipe Hayati au travail pendant le hackathon", en: "The Hayati team at work during the hackathon" } },
      { file: "hackathon-eth26-1.jpg", alt: { fr: "Présentation sur scène pendant l'EMSI Tech Hackathon 2026", en: "On-stage presentation during the EMSI Tech Hackathon 2026" } },
    ],
  },
  {
    id: 'gitex-africa-2026',
    title: { fr: 'GITEX Africa 2026', en: 'GITEX Africa 2026' },
    date: { fr: '7–9 avril 2026', en: '7–9 April 2026' },
    sortDate: '2026-04-07',
    place: { fr: 'Marrakech', en: 'Marrakech' },
    role: { fr: 'Visiteur', en: 'Visitor' },
    icon: 'globe-hemisphere-east',
    takeaway: {
      fr: "Démonstrations et conférences sur l'IA et la data science, et échanges avec des experts.",
      en: 'AI and data science demos and talks, and conversations with experts.',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7450501606342778880/')],
    images: [
      { file: "gitex-africa-2026-2.jpg", alt: { fr: "Tableau de bord de cybersécurité sur un stand du GITEX Africa 2026", en: "Cybersecurity dashboard on a GITEX Africa 2026 stand" }, position: "center 65%" },
      { file: "gitex-africa-2026-3.jpg", alt: { fr: "Yassir Drissi au GITEX Africa 2026", en: "Yassir Drissi at GITEX Africa 2026" } },
      { file: "gitex-africa-2026-4.jpg", alt: { fr: "Robot humanoïde exposé au GITEX Africa 2026", en: "Humanoid robot on display at GITEX Africa 2026" } },
      { file: "gitex-africa-2026-1.jpg", alt: { fr: "Allées et stands du GITEX Africa 2026", en: "Aisles and stands at GITEX Africa 2026" } },
    ],
  },
  {
    id: 'agentic-ai-conference',
    title: { fr: 'Agentic AI Conference · Data Science Dojo', en: 'Agentic AI Conference · Data Science Dojo' },
    date: { fr: '6–10 avril 2026', en: '6–10 April 2026' },
    sortDate: '2026-04-06',
    place: { fr: 'En ligne', en: 'Online' },
    role: { fr: 'Participant', en: 'Participant' },
    icon: 'robot',
    takeaway: {
      fr: "Gouvernance et sécurité des agents autonomes, dette technique des déploiements agentiques ; ateliers sur l'extraction documentaire agentique, RLHF/GRPO et les sandboxes sécurisées pour agents.",
      en: 'Governance and security of autonomous agents, technical debt in agentic deployments; workshops on agentic document extraction, RLHF/GRPO and secure sandboxes for agents.',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7443026365660045312/')],
    // Visuel promotionnel (lisible et propre). Le n° 1 était une bannière de profil : écarté.
    images: [
      { file: "agentic-ai-conference-2.jpg", alt: { fr: "Visuel de l'Agentic AI Conference : tutoriels, panels et ateliers, du 6 au 10 avril 2026, en ligne", en: "Agentic AI Conference visual: tutorials, panels and workshops, 6–10 April 2026, online" }, contain: true },
    ],
  },
  {
    id: 'spring-school-um6p',
    title: { fr: 'Spring School « AI For Impact »', en: 'Spring School “AI For Impact”' },
    date: { fr: '23–25 mars 2026', en: '23–25 March 2026' },
    sortDate: '2026-03-23',
    place: { fr: 'UM6P, Ben Guerir', en: 'UM6P, Ben Guerir' },
    role: { fr: 'Participant', en: 'Participant' },
    icon: 'graduation-cap',
    takeaway: {
      fr: "Organisée par l'UM6P, EMINES, OCP et l'EMSI. Sessions marquantes : « From Algorithms to Clinics » (Pr Nikos Paragios, IA en santé) et le débat Yann LeCun / Eric Xing « Generative AI vs World Models » (JEPA).",
      en: 'Organised by UM6P, EMINES, OCP and EMSI. Highlights: “From Algorithms to Clinics” (Prof. Nikos Paragios, AI in healthcare) and the Yann LeCun / Eric Xing debate “Generative AI vs World Models” (JEPA).',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7442932521937428480/')],
    images: [
      { file: "spring-school-um6p-1.jpg", alt: { fr: "La scène de la Spring School « AI For Impact » à l’UM6P", en: "The Spring School “AI For Impact” stage at UM6P" }, position: "center 42%" },
      { file: "spring-school-um6p-2.jpg", alt: { fr: "Yassir Drissi à l’UM6P, Ben Guerir", en: "Yassir Drissi at UM6P, Ben Guerir" } },
      { file: "spring-school-um6p-4.jpg", alt: { fr: "Avec deux participants de la Spring School", en: "With two fellow Spring School participants" } },
      { file: "spring-school-um6p-3.jpg", alt: { fr: "Présentation de résultats en imagerie médicale pendant la Spring School", en: "Medical imaging results presented during the Spring School" } },
    ],
  },
  {
    id: 'seminaire-smartilab',
    title: {
      fr: "Séminaire SMARTiLab : « De la culture de sécurité à l'éthique de l'intelligence artificielle »",
      en: 'SMARTiLab seminar: “From security culture to the ethics of artificial intelligence”',
    },
    date: { fr: 'janvier 2026', en: 'January 2026' },
    sortDate: '2026-01',
    place: { fr: 'EMSI Rabat (Agdal 2)', en: 'EMSI Rabat (Agdal 2)' },
    role: { fr: 'Participant', en: 'Participant' },
    icon: 'shield-check',
    takeaway: {
      fr: "Cybersécurité, protection des données, responsabilité et gouvernance de l'IA.",
      en: 'Cybersecurity, data protection, accountability and AI governance.',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7422784469608181760/')],
    // seminaire-smartilab-2 : doublon de la 1 (même photo de groupe), écarté.
    images: [
      { file: "seminaire-smartilab-1.jpg", alt: { fr: "Photo de groupe au séminaire SMARTiLab, EMSI Rabat", en: "Group photo at the SMARTiLab seminar, EMSI Rabat" } },
      { file: "seminaire-smartilab-4.jpg", alt: { fr: "Devant le panneau du séminaire scientifique SMARTiLab", en: "In front of the SMARTiLab scientific seminar banner" } },
      { file: "seminaire-smartilab-3.jpg", alt: { fr: "Yassir Drissi au séminaire SMARTiLab", en: "Yassir Drissi at the SMARTiLab seminar" } },
    ],
  },
  {
    id: 'emecexpo-2025',
    title: { fr: 'EMECEXPO & African Startup Expo', en: 'EMECEXPO & African Startup Expo' },
    date: { fr: '19–21 novembre 2025', en: '19–21 November 2025' },
    sortDate: '2025-11-19',
    place: { fr: 'OFEC, Casablanca', en: 'OFEC, Casablanca' },
    role: { fr: 'Visiteur', en: 'Visitor' },
    icon: 'storefront',
    takeaway: {
      fr: 'Salon international : commerce digital, fintech, IA & Big Data et startups africaines.',
      en: 'International trade show: digital commerce, fintech, AI & Big Data and African startups.',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7383819630127247360/')],
    // Visuel promotionnel (lisible et propre). Le n° 1 était une bannière de profil : écarté.
    images: [
      { file: "emecexpo-2025-2.jpg", alt: { fr: "Visuel « I'm attending » d'EMECEXPO & African Startup Expo, 19–21 novembre 2025, Casablanca", en: "“I’m attending” visual for EMECEXPO & African Startup Expo, 19–21 November 2025, Casablanca" }, contain: true },
    ],
  },
  {
    id: 'forum-emsi',
    title: { fr: 'Forum EMSI Entreprises', en: 'EMSI Companies Forum' },
    date: { fr: 'novembre 2025', en: 'November 2025' },
    sortDate: '2025-11',
    place: { fr: 'EMSI Rabat', en: 'EMSI Rabat' },
    role: {
      fr: "Responsable de zone · comité d'organisation (Career Center EMSI)",
      en: 'Zone lead · organising committee (EMSI Career Center)',
    },
    icon: 'calendar-check',
    badge: { label: { fr: 'Organisation', en: 'Organisation' }, icon: 'calendar-check' },
    takeaway: {
      fr: "Coordination de la présence d'entreprises, dont Sofrecom, Groupe LabelVie et Bottu, et de la logistique d'un événement d'envergure.",
      en: 'Coordinated the presence of companies including Sofrecom, LabelVie Group and Bottu, and the logistics of a large-scale event.',
    },
    links: [linkedin('https://www.linkedin.com/feed/update/urn:li:activity:7397380086255222785/')],
    images: [
      { file: "forum-emsi-1.jpg", alt: { fr: "Le mur des entreprises partenaires du 11e Forum EMSI Entreprises", en: "The partner companies wall at the 11th EMSI Companies Forum" }, position: "center 50%" },
      { file: "forum-emsi-2.jpg", alt: { fr: "Les stands du Forum EMSI Entreprises", en: "Company stands at the EMSI Companies Forum" } },
      { file: "forum-emsi-4.jpg", alt: { fr: "Conférence pendant le Forum EMSI Entreprises", en: "Talk during the EMSI Companies Forum" } },
      { file: "forum-emsi-3.jpg", alt: { fr: "Yassir Drissi, badge au cou, pendant le forum", en: "Yassir Drissi, badge on, during the forum" } },
    ],
  },

];

/** Recommandations LinkedIn réelles (nom, poste, texte). Vide = section masquée. */
export const recommendations: Array<{ author: string; role: L; text: L; url?: string }> = [];
