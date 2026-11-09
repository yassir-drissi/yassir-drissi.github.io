// Bandeau des organisations, chiffres clés, expertise et FAQ.
import type { L } from './types';
import { experiences } from './experience';
import { certifications } from './education';

/** Organisations affichées sous le hero (texte stylé, pas de logos officiels). */
export const organizations: string[] = [
  'Asment Temara · Ciments du Maroc',
  'SMARTiLab EMSI',
  'Innovatech',
  'iCatchAgency',
  'Groupe Al Omrane',
  'EMSI',
  "Université Côte d'Azur",
];

const obtainedCerts = certifications.filter((c) => c.obtained).length;
const ongoingCerts = certifications.length - obtainedCerts;

/** Chiffres clés. Les deux premiers sont calculés à partir des données. */
export const stats: Array<{ value: string; label: L }> = [
  {
    value: String(experiences.length),
    label: { fr: 'expériences professionnelles', en: 'professional experiences' },
  },
  {
    value: '10+',
    label: { fr: 'projets IA & Data', en: 'AI & data projects' },
  },
  {
    value: String(obtainedCerts),
    label: {
      fr: `certifications obtenues${ongoingCerts ? ` · ${ongoingCerts} en cours` : ''}`,
      en: `certifications earned${ongoingCerts ? ` · ${ongoingCerts} in progress` : ''}`,
    },
  },
  {
    value: '4e',
    label: { fr: 'place · EMSI Tech Hackathon 2026', en: 'place · EMSI Tech Hackathon 2026' },
  },
];

export type ExpertiseArea = {
  icon: string;
  title: L;
  description: L;
  tools: string[];
};

/** Domaines d'expertise (icônes : https://phosphoricons.com). */
export const expertise: ExpertiseArea[] = [
  {
    icon: 'eye',
    title: { fr: 'Computer Vision & Deep Learning', en: 'Computer Vision & Deep Learning' },
    description: {
      fr: "Détection d'objets en temps réel, entraînement de modèles sur données métier et optimisation de l'inférence sur processeur.",
      en: 'Real-time object detection, model training on domain data and CPU inference optimisation.',
    },
    tools: ['YOLOv8', 'OpenCV', 'OpenVINO', 'CNN', 'Grad-CAM', 'TensorFlow'],
  },
  {
    icon: 'chats-circle',
    title: { fr: 'IA générative, LLM & agents', en: 'Generative AI, LLMs & agents' },
    description: {
      fr: 'Chatbots RAG, agents LLM exécutés en local et garde-fous de prompts pour des usages sensibles.',
      en: 'RAG chatbots, locally hosted LLM agents and prompt guardrails for sensitive use cases.',
    },
    tools: ['RAG', 'Embeddings', 'ChromaDB', 'Ollama', 'Flowise', 'LangChain', 'LangGraph', 'MCP'],
  },
  {
    icon: 'chart-line-up',
    title: { fr: 'Data Science & modélisation du risque', en: 'Data Science & risk modelling' },
    description: {
      fr: 'Scoring, calibration et explicabilité des modèles ; modèles de mortalité et séries temporelles.',
      en: 'Scoring, calibration and model explainability; mortality models and time series.',
    },
    tools: ['scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'Calibration', 'Lee-Carter', 'Time series'],
  },
  {
    icon: 'database',
    title: { fr: 'Data Engineering & déploiement', en: 'Data Engineering & deployment' },
    description: {
      fr: 'Pipelines batch et streaming, modélisation analytique et mise en service des modèles.',
      en: 'Batch and streaming pipelines, analytics modelling and model serving.',
    },
    tools: ['SQL', 'Airflow', 'Spark', 'Databricks', 'dbt', 'Snowflake', 'Kafka', 'Docker', 'FastAPI', 'AWS'],
  },
];

export const faq: Array<{ q: L; a: L }> = [
  {
    q: { fr: 'Quand êtes-vous disponible ?', en: 'When are you available?' },
    a: {
      fr: 'À partir de février 2027, pour un stage de fin d’études (PFE) de 6 mois.',
      en: 'From February 2027, for a 6-month final-year internship.',
    },
  },
  {
    q: { fr: 'Quels postes visez-vous ?', en: 'Which roles are you looking for?' },
    a: {
      fr: 'AI Engineer, Data Scientist ou Data Engineer.',
      en: 'AI Engineer, Data Scientist or Data Engineer.',
    },
  },
  {
    q: { fr: 'Êtes-vous mobile ?', en: 'Are you willing to relocate?' },
    a: {
      fr: 'Oui, je suis ouvert à toutes les villes du Maroc.',
      en: 'Yes, I am open to any city in Morocco.',
    },
  },
  {
    q: { fr: 'Dans quelles langues travaillez-vous ?', en: 'Which languages do you work in?' },
    a: {
      fr: 'Français, anglais et arabe.',
      en: 'French, English and Arabic.',
    },
  },
  {
    q: { fr: 'Où voir votre code ?', en: 'Where can I see your code?' },
    a: {
      fr: 'Sur GitHub : github.com/yassir-drissi. Certains projets de stage ou de mission ne sont pas publics ; chaque page projet indique où trouver le code quand il est disponible.',
      en: 'On GitHub: github.com/yassir-drissi. Some internship and client projects are not public; each project page links to the code when it is available.',
    },
  },
];
