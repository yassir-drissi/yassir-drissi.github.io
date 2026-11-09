// Expériences professionnelles (section Parcours), de la plus récente à la plus ancienne.
// `project` relie l'expérience à une page projet (slug de src/data/portfolio/projects/).
import type { L } from './types';

export type Experience = {
  role: L;
  company: string;
  location: L;
  period: L;
  /** Date de début au format AAAA-MM, utilisée pour trier la frise. */
  start: string;
  summary: L;
  highlights: L<string[]>;
  stack: string[];
  project?: string;
};

export const experiences: Experience[] = [
  {
    role: { fr: 'Stagiaire ingénieur IA', en: 'AI Engineering Intern' },
    company: 'Asment Temara (Groupe Ciments du Maroc)',
    location: { fr: 'Aïn Atiq', en: 'Ain Atiq, Morocco' },
    period: { fr: 'juil. – sept. 2026', en: 'Jul – Sep 2026' },
    start: '2026-07',
    summary: {
      fr: "Projet Ciment's Eye : système autonome de vidéosurveillance intelligente pour un site cimentier.",
      en: "Ciment's Eye: an autonomous intelligent video-surveillance system for a cement plant.",
    },
    highlights: {
      fr: [
        '8 modèles YOLOv8 : feu/fumée, arc électrique, EPI, chute, convoyeur, personnes et véhicules',
        'Modèle feu/fumée entraîné sur 10 000 images : rappel de 92 % (feu) et 80 % (fumée) ; système validé sur webcam et vidéos rejouées',
        'Inférence sans GPU avec OpenVINO et modèles en parallèle : cycle de 2–2,8 s ramené à 0,18–0,27 s pour 6 modèles',
        'Moteur de règles à 7 filtres (zones, seuils, anti-répétition…) pour limiter les fausses alertes',
        'Alertes Telegram par niveau de sévérité, API FastAPI et interface web',
      ],
      en: [
        '8 YOLOv8 models: fire/smoke, arc flash, PPE, falls, conveyor, people and vehicles',
        'Fire/smoke model trained on 10,000 images: 92% recall (fire) and 80% (smoke); system validated on webcam and replayed videos',
        'GPU-free inference with OpenVINO and parallel models: cycle time cut from 2–2.8 s to 0.18–0.27 s for 6 models',
        '7-filter rule engine (zones, thresholds, de-duplication…) to limit false alarms',
        'Severity-based Telegram alerts, FastAPI API and web interface',
      ],
    },
    stack: ['YOLOv8', 'OpenVINO', 'OpenCV', 'Python', 'FastAPI', 'SQLite', 'Colab/Kaggle', 'Telegram'],
    project: 'ciments-eye',
  },
  {
    role: { fr: 'Stagiaire IA & NLP (temps partiel)', en: 'AI & NLP Intern (part-time)' },
    company: 'SMARTiLab (EMSI) & Innovatech',
    location: { fr: 'Rabat / Casablanca', en: 'Rabat / Casablanca' },
    period: { fr: 'janv. – juin 2026', en: 'Jan – Jun 2026' },
    start: '2026-01',
    summary: {
      fr: 'Projet E-Press, mon PFA de 4e année (en binôme avec Sadik Dassaa, encadré par Dr. Ing. Hasnââ Chaabi) : plateforme de veille presse sur 10 sources marocaines, avec une IA 100 % locale pour la confidentialité.',
      en: 'E-Press, my 4th-year project (with Sadik Dassaa, supervised by Dr. Ing. Hasnââ Chaabi): a media-monitoring platform covering 10 Moroccan sources, with fully local AI for confidentiality.',
    },
    highlights: {
      fr: [
        'Collecte presse, YouTube, X et Facebook ; nettoyage, déduplication et rapport généré 2 fois par jour',
        'Agents LLM (Ollama qwen2.5, Flowise) : classification à 82 % de justesse et sentiment à 76 % sur 30 articles annotés',
        'Chatbot RAG (embeddings MiniLM + ChromaDB) : sources pertinentes dans 85 % des requêtes',
        "Passage à l'inférence GPU : de plusieurs minutes à 5–15 s par article",
      ],
      en: [
        'Collection from press, YouTube, X and Facebook; cleaning, de-duplication and a report generated twice a day',
        'LLM agents (Ollama qwen2.5, Flowise): 82% classification accuracy and 76% sentiment accuracy on 30 annotated articles',
        'RAG chatbot (MiniLM embeddings + ChromaDB): relevant sources in 85% of queries',
        'Moved to GPU inference: from several minutes to 5–15 s per article',
      ],
    },
    stack: ['Python', 'Ollama', 'Flowise', 'ChromaDB', 'RAG', 'React', 'Django', 'FastAPI', 'n8n', 'Docker'],
    project: 'e-press',
  },
  {
    role: { fr: 'Stagiaire développeur IA', en: 'AI Developer Intern' },
    company: 'iCatchAgency',
    location: { fr: 'Rabat', en: 'Rabat' },
    period: { fr: 'août – sept. 2025', en: 'Aug – Sep 2025' },
    start: '2025-08',
    summary: {
      fr: 'Application médicale : prise de rendez-vous, téléconsultation et ordonnances.',
      en: 'Medical application: appointment booking, teleconsultation and prescriptions.',
    },
    highlights: {
      fr: [
        "Intégration d'un assistant patient via l'API DeepSeek",
        "Garde-fous : interdiction de prescrire, protection contre l'injection de prompt",
      ],
      en: [
        'Integrated a patient assistant through the DeepSeek API',
        'Guardrails: no prescribing, protection against prompt injection',
      ],
    },
    stack: ['DeepSeek API'],
  },
  {
    role: { fr: 'Stagiaire', en: 'Intern' },
    company: 'Groupe Al Omrane',
    location: { fr: 'Oujda', en: 'Oujda' },
    period: { fr: 'juil. – août 2024', en: 'Jul – Aug 2024' },
    start: '2024-07',
    summary: {
      fr: 'Formulaire de tickets intégré dans GLPI, conforme ITIL.',
      en: 'Ticketing form integrated into GLPI, ITIL-compliant.',
    },
    highlights: { fr: [], en: [] },
    stack: ['PHP', 'MySQL', 'GLPI'],
  },
];
