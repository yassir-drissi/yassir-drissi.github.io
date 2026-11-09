import type { Project } from './types';

// Sources : prompt + dépôt club-innov/Hayati-ETH2026 (équipe : Othmane Dhilou, Ahlam Khalil, Yassir Drissi).
// TODO : ta part précise dans l'équipe. En attendant : « Membre de l'équipe », sans tâche attribuée.
export const project: Project = {
  slug: 'hayati',
  order: 6,
  category: 'genai',
  year: '2026',
  title: { fr: 'Hayati', en: 'Hayati' },
  context: {
    fr: "Hackathon · EMSI Tech Hackathon 2026 (Club d'Innovation EMSI Rabat) · membre de l'équipe",
    en: 'Hackathon · EMSI Tech Hackathon 2026 (EMSI Rabat Innovation Club) · team member',
  },
  problem: {
    fr: 'Simplifier le quotidien : papiers administratifs, transport, budget et prix, avec un assistant qui répond en darija.',
    en: 'Make daily life simpler (paperwork, transport, budget and prices) with an assistant that answers in Darija.',
  },
  did: {
    fr: "Membre de l'équipe (projet porté par Othmane Dhilou, avec Ahlam Khalil) : application web avec chatbot IA en darija (API Gemini via Google AI Studio), suivi du budget et comparateur de prix.",
    en: 'Team member (project led by Othmane Dhilou, with Ahlam Khalil): web app with a Darija AI chatbot (Gemini API via Google AI Studio), budget tracking and price comparison.',
  },
  result: {
    fr: '4e place à l’EMSI Tech Hackathon 2026 ; application en ligne.',
    en: '4th place at the EMSI Tech Hackathon 2026; app deployed online.',
  },
  metrics: [{ value: '4e', label: { fr: "place à l'EMSI Tech Hackathon 2026", en: 'place at the EMSI Tech Hackathon 2026' } }],
  stack: ['Next.js', 'React', 'Tailwind CSS', 'Laravel', 'Gemini API'],
  links: {
    demo: 'https://hayati-frontend.vercel.app/',
    code: 'https://github.com/club-innov/Hayati-ETH2026',
  },
  images: [
    {
      src: '/images/projets/hayati-accueil.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil de Hayati : documents, transport, budget, services et comparateur de prix",
        en: 'Hayati home page: documents, transport, budget, services and price comparison',
      },
    },
    {
      src: '/images/projets/hayati-mobile.webp',
      width: 390,
      height: 844,
      alt: { fr: 'Hayati sur mobile', en: 'Hayati on mobile' },
    },
  ],
  details: {
    problem: {
      fr: "Au Maroc, beaucoup de démarches du quotidien (renouveler un document, trouver un trajet, suivre ses dépenses, comparer des prix) demandent de passer par plusieurs sources. Hayati les regroupe dans une seule application, avec un assistant accessible en darija.",
      en: 'In Morocco, many everyday tasks (renewing a document, finding a route, tracking spending, comparing prices) require going through several sources. Hayati brings them together in one app, with an assistant that speaks Darija.',
    },
    data: {
      fr: ['TODO : sources de données utilisées (prix, transports…)'],
      en: ['TODO: data sources used (prices, transport…)'],
    },
    approach: {
      fr: [
        'Front-end Next.js et Tailwind CSS, back-end Laravel',
        'Chatbot en darija et en français via l’API Gemini (Google AI Studio)',
        'Modules documents, transport, budget, services locaux et comparateur de prix',
        "Équipe : Othmane Dhilou (porteur du projet), Ahlam Khalil et moi, membre de l'équipe",
      ],
      en: [
        'Next.js and Tailwind CSS front end, Laravel back end',
        'Darija and French chatbot through the Gemini API (Google AI Studio)',
        'Documents, transport, budget, local services and price comparison modules',
        'Team: Othmane Dhilou (project lead), Ahlam Khalil and me, as a team member',
      ],
    },
    results: {
      fr: ['4e place à l’EMSI Tech Hackathon 2026', 'Application déployée et accessible en ligne'],
      en: ['4th place at the EMSI Tech Hackathon 2026', 'App deployed and available online'],
    },
    improve: {
      fr: [
        "Évaluer les réponses du chatbot en darija sur un jeu de questions de test",
        "Mettre à jour automatiquement les prix du comparateur plutôt que de les saisir",
      ],
      en: [
        "Evaluate the Darija chatbot’s answers on a set of test questions",
        "Update comparison prices automatically instead of entering them by hand",
      ],
    },
  },
};
