import type { Project } from './types';

// Sources : brief + post LinkedIn (juillet 2026). Le post cite React, Django, Docker ;
// le brief citait n8n, MiniLM et FastAPI : les deux listes sont réunies dans `stack`.

export const project: Project = {
  slug: 'e-press',
  order: 2,
  category: 'genai',
  year: '2026',
  title: { fr: 'E-Press', en: 'E-Press' },
  context: {
    fr: 'PFA de 4e année · EMSI Rabat, avec Innovatech et SMARTiLab (Honoris United Universities) · en binôme',
    en: '4th-year project · EMSI Rabat, with Innovatech and SMARTiLab (Honoris United Universities) · pair project',
  },
  problem: {
    fr: "Suivre l'actualité marocaine sur plusieurs canaux et en tirer un rapport fiable, sans envoyer les contenus à un service d'IA externe.",
    en: 'Track Moroccan news across several channels and produce a reliable report without sending content to an external AI service.',
  },
  did: {
    fr: 'Collecte et déduplication de 10 sources, agents LLM locaux pour la classification et le sentiment, chatbot RAG sur les articles.',
    en: 'Collection and de-duplication of 10 sources, local LLM agents for classification and sentiment, and a RAG chatbot over the articles.',
  },
  result: {
    fr: 'Classification juste à 82 %, sentiment à 76 % (30 articles annotés), sources pertinentes dans 85 % des requêtes RAG ; 5–15 s par article sur GPU.',
    en: '82% classification accuracy, 76% sentiment accuracy (30 annotated articles), relevant sources in 85% of RAG queries; 5–15 s per article on GPU.',
  },
  metrics: [
    { value: '82 %', label: { fr: 'de justesse en classification', en: 'classification accuracy' } },
    { value: '85 %', label: { fr: 'de requêtes RAG avec sources pertinentes', en: 'RAG queries with relevant sources' } },
    { value: '5–15 s', label: { fr: 'par article sur GPU (contre plusieurs minutes)', en: 'per article on GPU (vs several minutes)' } },
  ],
  stack: ['Python', 'Ollama', 'Flowise', 'ChromaDB', 'MiniLM', 'RAG', 'React', 'Django', 'FastAPI', 'n8n', 'Docker'],
  links: { post: 'https://www.linkedin.com/feed/update/urn:li:activity:7478861583771934720/' },
  // Photos du post LinkedIn (juillet 2026).
  images: [
    {
      file: "e-press-2.jpg",
      alt: { fr: "Séance de présentation des projets de fin d’année", en: "Final-year project presentation session" },
    },
    {
      file: "e-press-3.jpg",
      alt: { fr: "Présentation de la plateforme E-Press", en: "Presenting the E-Press platform" },
    },
    {
      file: "e-press-4.jpg",
      alt: { fr: "La salle pendant la séance de présentation", en: "The room during the presentation session" },
    },
    {
      file: "e-press-1.jpg",
      alt: { fr: "Page de garde du rapport de PFA : « Plateforme automatisée de veille presse & e-réputation au Maroc »", en: "Project report cover: “Automated press monitoring & e-reputation platform for Morocco”" },
    },
  ],
  details: {
    problem: {
      fr: "Les équipes ont besoin d'une veille quotidienne sur la presse et les réseaux sociaux marocains. Les contenus collectés étant sensibles, tout le traitement par IA devait rester local.",
      en: 'Teams need a daily watch over Moroccan press and social media. Because the collected content is sensitive, all AI processing had to stay local.',
    },
    data: {
      fr: ['10 sources marocaines : presse, YouTube, X et Facebook', 'Jeu d’évaluation de 30 articles annotés'],
      en: ['10 Moroccan sources: press, YouTube, X and Facebook', 'Evaluation set of 30 annotated articles'],
    },
    approach: {
      fr: [
        'Collecte automatisée, nettoyage et déduplication des articles',
        'Rapport généré 2 fois par jour',
        'Agents LLM locaux (Ollama qwen2.5, Flowise) pour la classification et l’analyse de sentiment',
        'Embeddings MiniLM stockés dans ChromaDB et chatbot RAG qui cite ses sources',
        "Passage de l'inférence CPU à l'inférence GPU",
        'Réalisé en binôme avec Sadik Dassaa, sous l’encadrement de Dr. Ing. Hasnââ Chaabi',
      ],
      en: [
        'Automated collection, cleaning and de-duplication of articles',
        'Report generated twice a day',
        'Local LLM agents (Ollama qwen2.5, Flowise) for classification and sentiment analysis',
        'MiniLM embeddings stored in ChromaDB and a RAG chatbot that cites its sources',
        'Moved inference from CPU to GPU',
        'Built with Sadik Dassaa, supervised by Dr. Ing. Hasnââ Chaabi',
      ],
    },
    results: {
      fr: [
        'Classification : 82 % de justesse ; sentiment : 76 % (sur 30 articles annotés)',
        'Chatbot RAG : sources pertinentes dans 85 % des requêtes',
        'Temps de traitement : de plusieurs minutes à 5–15 s par article',
      ],
      en: [
        'Classification: 82% accuracy; sentiment: 76% (on 30 annotated articles)',
        'RAG chatbot: relevant sources in 85% of queries',
        'Processing time: from several minutes down to 5–15 s per article',
      ],
    },
    improve: {
      fr: [
        "Élargir le jeu d'évaluation au-delà de 30 articles annotés pour des mesures plus fiables",
        "Améliorer l'analyse de sentiment (76 %) avec des exemples annotés de la presse marocaine",
      ],
      en: [
        "Extend the evaluation set beyond 30 annotated articles for more reliable measurements",
        "Improve sentiment analysis (76%) with annotated examples from Moroccan media",
      ],
    },
  },
};
