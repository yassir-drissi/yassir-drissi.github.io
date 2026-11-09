import type { Project } from './types';

export const project: Project = {
  slug: 'scoring-credit',
  order: 3,
  featured: true,
  category: 'data-science',
  year: 'TODO',
  title: { fr: 'Scoring de crédit', en: 'Credit scoring' },
  context: {
    fr: "Mission freelance · avec deux étudiants de l'INSEA",
    en: 'Freelance project · with two INSEA students',
  },
  problem: {
    fr: "Décider d'accorder un crédit à partir du dossier du demandeur, avec un modèle explicable et un seuil de décision justifié économiquement.",
    en: 'Decide whether to grant a loan from the applicant’s file, with an explainable model and an economically justified decision threshold.',
  },
  did: {
    fr: "Comparaison de 7 modèles en équipe. Ma part : l'application de décision, avec une API FastAPI et une interface Next.js sous Docker.",
    en: 'Compared 7 models as a team. My part: the decision application, a FastAPI API and a Next.js interface running in Docker.',
  },
  result: {
    fr: 'AUC 0,76 (Gini 0,52) contre 0,75 pour une régression logistique bien préparée ; seuil fixé par une matrice de coûts.',
    en: 'AUC 0.76 (Gini 0.52) versus 0.75 for a well-prepared logistic regression; threshold set with a cost matrix.',
  },
  metrics: [
    { value: '0,76', label: { fr: "d'AUC (Gini 0,52)", en: 'AUC (Gini 0.52)' } },
    { value: '307 511', label: { fr: 'demandes de crédit (Home Credit)', en: 'loan applications (Home Credit)' } },
    { value: '7', label: { fr: 'modèles comparés', en: 'models compared' } },
  ],
  stack: ['Python', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'FastAPI', 'Next.js', 'Docker'],
  links: {},
  // Pas de compte de test : schéma d'architecture à la place des captures de l'application.
  images: [
    {
      src: '/images/projets/scoring-architecture.svg',
      width: 1600,
      height: 900,
      alt: {
        fr: "Architecture de l'application de décision : interface Next.js, API FastAPI, modèle CatBoost et explications SHAP, le tout sous Docker",
        en: 'Decision application architecture: Next.js interface, FastAPI API, CatBoost model and SHAP explanations, all running in Docker',
      },
    },
  ],
  details: {
    problem: {
      fr: "Un organisme de crédit doit accepter ou refuser des demandes en limitant les défauts de paiement, sans écarter inutilement de bons dossiers. Le modèle doit être explicable aux équipes métier, et le seuil de décision doit refléter le coût réel d'une erreur.",
      en: 'A lender has to accept or reject applications while limiting defaults, without turning away good applicants for no reason. The model must be explainable to business teams, and the decision threshold must reflect the real cost of an error.',
    },
    data: {
      fr: ['307 511 demandes de crédit du jeu de données Home Credit'],
      en: ['307,511 loan applications from the Home Credit dataset'],
    },
    approach: {
      fr: [
        '7 modèles comparés, de la régression logistique à CatBoost',
        "Seuil de décision fixé à partir d'une matrice de coûts",
        'Explicabilité par SHAP et par les odds ratios de la régression logistique',
        'Vérification de la calibration des probabilités (score de Brier)',
        "Ma part : l'application de décision, avec une API FastAPI et une interface Next.js, conteneurisées avec Docker",
        "Dans l'application : modèle CatBoost, probabilité de défaut, décision et facteurs SHAP ; espaces agent et administrateur avec historique des demandes",
      ],
      en: [
        '7 models compared, from logistic regression to CatBoost',
        'Decision threshold set from a cost matrix',
        'Explainability with SHAP and logistic-regression odds ratios',
        'Probability calibration checked with the Brier score',
        'My part: the decision application, a FastAPI API and a Next.js interface, containerised with Docker',
        'In the app: CatBoost model, default probability, decision and SHAP factors; agent and administrator areas with request history',
      ],
    },
    results: {
      fr: ['AUC de 0,76 (Gini 0,52) pour le meilleur modèle, contre 0,75 pour une régression logistique bien préparée'],
      en: ['AUC of 0.76 (Gini 0.52) for the best model, versus 0.75 for a well-prepared logistic regression'],
    },
    improve: {
      fr: [
        "Suivre la dérive des données et la calibration du modèle une fois l'application en service",
        "Proposer un compte de démonstration avec des dossiers fictifs pour tester l’application sans données réelles",
      ],
      en: [
        "Monitor data drift and model calibration once the application is in use",
        "Offer a demo account with fictitious applications so the app can be tried without real data",
      ],
    },
  },
};
