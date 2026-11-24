import type { Project } from './types';

// Sources : dépôt prediction-prix-immobilier (README, docs/EXPLICATIONS.md, compte rendu LaTeX, notebooks)
// et captures de l'application. Résultats = ceux affichés dans l'application (page « Modèle »).
export const project: Project = {
  slug: 'estimation-prix-immobilier',
  order: 6.5,
  category: 'data-science',
  year: '2025-2026',
  title: { fr: 'Estimation de prix immobilier', en: 'Real-estate price estimation' },
  context: {
    fr: "Module Développement d'Applications Intelligentes · EMSI Rabat",
    en: 'Intelligent Application Development course · EMSI Rabat',
  },
  problem: {
    fr: "Estimer le prix médian des logements d'un quartier californien à partir de ses caractéristiques, dans une application complète avec comptes utilisateurs et historique.",
    en: 'Estimate the median home price of a California neighbourhood from its characteristics, in a full application with user accounts and history.',
  },
  did: {
    fr: "Comparaison de 6 modèles, puis application de bout en bout : modèle XGBoost, API FastAPI avec authentification JWT, base PostgreSQL et interface React.",
    en: 'Compared 6 models, then built the full application: XGBoost model, FastAPI API with JWT authentication, PostgreSQL database and React interface.',
  },
  result: {
    fr: "R² de 0,862 sur le jeu de test (0,585 pour la régression linéaire en validation) ; erreur moyenne de 28 396 $, affichée sous forme de fourchette avec chaque estimation.",
    en: 'R² of 0.862 on the test set (0.585 for linear regression on validation); mean error of $28,396, shown as a range with each estimate.',
  },
  metrics: [
    { value: '0,862', label: { fr: 'de R² sur le jeu de test', en: 'R² on the test set' } },
    { value: '28 396 $', label: { fr: 'd’erreur moyenne (MAE)', en: 'mean absolute error (MAE)' } },
    { value: '20 640', label: { fr: 'quartiers (California Housing)', en: 'neighbourhoods (California Housing)' } },
  ],
  stack: ['Python', 'scikit-learn', 'XGBoost', 'FastAPI', 'PostgreSQL', 'JWT', 'React', 'Vite', 'Tailwind CSS', 'pytest'],
  links: { code: 'https://github.com/yassir-drissi/prediction-prix-immobilier' },
  images: [
    {
      src: '/images/projets/immo-estimation.webp',
      width: 1918,
      height: 949,
      alt: {
        fr: "Page « Estimer un prix » : formulaire des 8 caractéristiques du quartier, prix médian estimé et fourchette indicative",
        en: '“Estimate a price” page: form with the 8 neighbourhood characteristics, estimated median price and indicative range',
      },
    },
    {
      src: '/images/projets/immo-tableau-de-bord.webp',
      width: 1918,
      height: 952,
      alt: {
        fr: "Tableau de bord : nombre d'estimations, prix moyen estimé, performance du modèle (R² 0,862, MAE 28 396 $) et dernières estimations",
        en: 'Dashboard: number of estimates, average estimated price, model performance (R² 0.862, MAE $28,396) and latest estimates',
      },
    },
  ],
  details: {
    problem: {
      fr: "Le prix d'un logement dépend de nombreux facteurs liés à son quartier. Le but : un modèle capable d'estimer le prix médian d'un quartier californien, accessible via une application où chaque utilisateur retrouve ses estimations.",
      en: 'A home price depends on many neighbourhood factors. The goal: a model that estimates the median price of a California neighbourhood, available through an application where each user finds their own estimates.',
    },
    data: {
      fr: [
        'Jeu de données California Housing : 20 640 quartiers (recensement de 1990), une ligne = un quartier et non une maison isolée',
        '8 caractéristiques : revenu médian, âge des maisons, pièces, chambres, population, occupants, latitude et longitude',
        'Prix plafonnés à 500 000 $ dans les données',
        'Découpage 70 % / 15 % / 15 % (entraînement, validation, test)',
      ],
      en: [
        'California Housing dataset: 20,640 neighbourhoods (1990 census), one row = one neighbourhood, not a single house',
        '8 features: median income, house age, rooms, bedrooms, population, occupancy, latitude and longitude',
        'Prices capped at $500,000 in the data',
        '70% / 15% / 15% split (training, validation, test)',
      ],
    },
    approach: {
      fr: [
        '6 modèles comparés, de la régression linéaire (sous-apprentissage) à XGBoost, en suivant l’écart entre entraînement et validation pour repérer le surapprentissage',
        'XGBoost retenu avec arrêt anticipé : 1 255 arbres utilisés sur 2 000 possibles',
        'API FastAPI : validation des entrées avec Pydantic, authentification par jeton JWT et mots de passe hachés avec bcrypt',
        'PostgreSQL : comptes et historique des estimations, requêtes SQL paramétrées',
        'Interface React : tableau de bord, formulaire d’estimation avec exemples (Los Angeles, San Francisco, Fresno), historique et page de performance du modèle',
        '26 tests pytest sur l’API, exécutés sur une base de test séparée',
      ],
      en: [
        '6 models compared, from linear regression (underfitting) to XGBoost, tracking the train/validation gap to spot overfitting',
        'XGBoost kept with early stopping: 1,255 trees used out of 2,000 allowed',
        'FastAPI API: input validation with Pydantic, JWT token authentication and bcrypt-hashed passwords',
        'PostgreSQL: accounts and estimate history, parameterised SQL queries',
        'React interface: dashboard, estimation form with examples (Los Angeles, San Francisco, Fresno), history and a model performance page',
        '26 pytest tests on the API, run against a separate test database',
      ],
    },
    results: {
      fr: [
        'R² de 0,862 sur le jeu de test, contre 0,585 pour la régression linéaire en validation',
        'Erreur moyenne (MAE) de 28 396 $ et RMSE de 42 784 $',
        'Chaque estimation s’affiche avec une fourchette indicative égale à la prédiction ± la MAE',
      ],
      en: [
        'R² of 0.862 on the test set, versus 0.585 for linear regression on validation',
        'Mean absolute error (MAE) of $28,396 and RMSE of $42,784',
        'Each estimate is shown with an indicative range equal to the prediction ± the MAE',
      ],
    },
    improve: {
      fr: [
        'Remplacer les données de 1990 par des données récentes pour des prix plus réalistes',
        "Suivre les performances du modèle dans le temps (dérive des données) une fois l'application en service",
        "Déployer l'application en ligne avec une démo accessible",
      ],
      en: [
        'Replace the 1990 data with recent data for more realistic prices',
        'Monitor model performance over time (data drift) once the application is in use',
        'Deploy the application online with a public demo',
      ],
    },
  },
};
