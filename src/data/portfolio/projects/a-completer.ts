import type { Project } from './types';

// Projets sans dépôt public (affichés avec « Code privé / projet d'équipe ») : le texte vient du prompt.
// Compléter les TODO (contexte, résultats chiffrés, liens) quand l'information est disponible.

const todoImprove = { fr: ['TODO : ce que tu améliorerais'], en: ['TODO: what you would improve'] };

export const alzheimer: Project = {
  slug: 'detection-alzheimer-irm',
  order: 10,
  category: 'vision',
  year: 'TODO',
  title: { fr: "Détection d'Alzheimer sur IRM", en: "Alzheimer's detection on MRI" },
  context: { fr: 'TODO : contexte (école, projet personnel…)', en: 'TODO: context (school, personal project…)' },
  problem: {
    fr: 'Classer des IRM cérébrales selon le stade de la maladie d’Alzheimer.',
    en: 'Classify brain MRI scans by Alzheimer’s disease stage.',
  },
  did: {
    fr: 'CNN conçu de zéro, pondération des classes et cartes Grad-CAM pour visualiser les zones utilisées par le modèle.',
    en: 'CNN designed from scratch, class weighting and Grad-CAM maps to show which regions the model relies on.',
  },
  result: { fr: 'TODO : résultat chiffré (justesse, F1 par stade…)', en: 'TODO: quantified result (accuracy, per-stage F1…)' },
  stack: ['TensorFlow', 'CNN', 'Grad-CAM', 'Python'],
  links: {},
  details: {
    problem: {
      fr: 'Le diagnostic précoce d’Alzheimer aide la prise en charge. Le projet cherche à distinguer 4 stades de la maladie à partir d’IRM, en gardant le modèle interprétable.',
      en: 'Early diagnosis of Alzheimer’s helps patient care. The project aims to tell apart 4 disease stages from MRI scans while keeping the model interpretable.',
    },
    data: { fr: ['6 400 IRM réparties en 4 stades'], en: ['6,400 MRI scans across 4 stages'] },
    approach: {
      fr: ['CNN conçu de zéro avec TensorFlow', 'Pondération des classes pour compenser leur déséquilibre', 'Grad-CAM pour visualiser les régions qui influencent la prédiction'],
      en: ['CNN built from scratch with TensorFlow', 'Class weighting to offset class imbalance', 'Grad-CAM to visualise the regions driving each prediction'],
    },
    results: { fr: ['TODO : résultats chiffrés'], en: ['TODO: quantified results'] },
    improve: {
      fr: [
        "Valider le modèle sur un jeu externe, en séparant les images par patient pour éviter les fuites entre entraînement et test",
      ],
      en: [
        "Validate the model on an external dataset, splitting images by patient to avoid leakage between training and test",
      ],
    },
  },
};

// CrimeWatch : faits relevés dans le dashboard qui tourne en local (Docker) le 09/11/2026.
export const crimewatch: Project = {
  slug: 'crimewatch',
  order: 11,
  category: 'data-eng',
  year: '2026',
  title: { fr: 'CrimeWatch', en: 'CrimeWatch' },
  context: { fr: "Projet d'équipe", en: 'Team project' },
  problem: {
    fr: 'Suivre la criminalité urbaine en quasi temps réel dans 4 villes (Chicago, Los Angeles, New York, Londres), repérer les zones à risque et anticiper le type de crime.',
    en: 'Track urban crime in near real time across 4 cities (Chicago, Los Angeles, New York, London), spot high-risk areas and anticipate crime types.',
  },
  did: {
    fr: 'Ma part : phase 3, avec la modélisation dbt/Snowflake, le dashboard Streamlit et la CI.',
    en: 'My part: phase 3, covering dbt/Snowflake modelling, the Streamlit dashboard and CI.',
  },
  result: {
    fr: 'Dashboard en service : carte des zones, alertes de hotspots en direct, prédictions et comparaison des villes. Modèle XGBoost : top-3 de 0,62 contre 0,58 pour la référence.',
    en: 'Working dashboard: area map, live hotspot alerts, predictions and city comparison. XGBoost model: top-3 accuracy of 0.62 vs 0.58 for the baseline.',
  },
  metrics: [
    { value: '4', label: { fr: 'villes suivies', en: 'cities tracked' } },
    { value: '0,62', label: { fr: 'top-3 du modèle XGBoost (contre 0,58)', en: 'XGBoost top-3 accuracy (vs 0.58)' } },
  ],
  stack: ['Kafka', 'Spark Streaming', 'Airflow', 'dbt', 'Snowflake', 'Streamlit', 'XGBoost', 'DBSCAN', 'Docker'],
  links: {},
  images: [
    {
      src: '/images/projets/crimewatch-carte.webp',
      width: 1600,
      height: 900,
      alt: { fr: 'Dashboard CrimeWatch : carte des zones les plus touchées à Chicago', en: 'CrimeWatch dashboard: map of the most affected areas in Chicago' },
    },
    {
      src: '/images/projets/crimewatch-alertes.webp',
      width: 1600,
      height: 900,
      alt: { fr: 'Onglet Alertes live : hotspots détectés par DBSCAN', en: 'Live alerts tab: hotspots detected by DBSCAN' },
    },
    {
      src: '/images/projets/crimewatch-analyses.webp',
      width: 1600,
      height: 900,
      alt: { fr: 'Onglet Analyses : comparaison des 4 villes, évolution et profil horaire', en: 'Analysis tab: comparison of the 4 cities, trend and hourly profile' },
    },
  ],
  details: {
    problem: {
      fr: "Les données de criminalité ouvertes des grandes villes sont publiées en continu mais restent difficiles à exploiter. CrimeWatch les rassemble dans un entrepôt commun pour suivre les zones touchées, détecter les regroupements anormaux et estimer le type de crime le plus probable par zone et par heure.",
      en: 'Open crime data from large cities is published continuously but remains hard to use. CrimeWatch brings it into a shared warehouse to follow affected areas, detect abnormal clusters and estimate the most likely crime type per area and hour.',
    },
    data: {
      fr: [
        'Données de criminalité de Chicago, Los Angeles, New York et Londres',
        "Entrepôt (période du 09/10 au 31/10/2026) : 50 078 crimes à New York, 13 519 à Chicago, 12 089 à Los Angeles, 3 777 à Londres",
        'Zones de ~500 m ; croisement avec la météo',
        'TODO : sources exactes des données',
      ],
      en: [
        'Crime data from Chicago, Los Angeles, New York and London',
        'Warehouse (09/10 to 31/10/2026): 50,078 crimes in New York, 13,519 in Chicago, 12,089 in Los Angeles, 3,777 in London',
        '~500 m areas; cross-referenced with weather',
        'TODO: exact data sources',
      ],
    },
    approach: {
      fr: [
        'Ingestion via un producteur Kafka et traitement Spark Streaming, orchestration Airflow (Docker)',
        'Détection de hotspots par DBSCAN sur des fenêtres de 30 min, publiés dans le topic Kafka crimes.alerts',
        'Prédiction de la catégorie de crime par zone et par heure avec XGBoost (phase 2)',
        'Ma part (phase 3) : modélisation dbt sur Snowflake, dashboard Streamlit (carte, alertes, prédictions, analyses) et CI',
      ],
      en: [
        'Ingestion through a Kafka producer and Spark Streaming processing, orchestrated with Airflow (Docker)',
        'Hotspot detection with DBSCAN over 30-minute windows, published to the Kafka topic crimes.alerts',
        'Crime-category prediction per area and hour with XGBoost (phase 2)',
        'My part (phase 3): dbt modelling on Snowflake, Streamlit dashboard (map, alerts, predictions, analysis) and CI',
      ],
    },
    results: {
      fr: [
        'Modèle XGBoost : la bonne catégorie figure dans son top-3 environ 6 fois sur 10 (0,62 contre 0,58 pour « les 3 catégories habituelles de la zone »)',
        'Dashboard opérationnel sur les 4 villes, avec rechargement des données depuis l’entrepôt',
      ],
      en: [
        'XGBoost model: the right category is in its top-3 about 6 times out of 10 (0.62 vs 0.58 for “the area’s 3 usual categories”)',
        'Dashboard opérationnel sur les 4 villes, avec rechargement des données depuis l’entrepôt',
      ],
    },
    improve: {
      fr: [
        "Ajouter des tests dbt (unicité, valeurs manquantes, fraîcheur) exécutés dans la CI",
        "Creuser l'écart avec la référence (0,62 contre 0,58) avec des variables de contexte supplémentaires",
      ],
      en: [
        "Add dbt tests (uniqueness, missing values, freshness) run in CI",
        "Widen the gap with the baseline (0.62 vs 0.58) with additional context features",
      ],
    },
  },
};

export const raceflow: Project = {
  slug: 'raceflow',
  order: 12,
  category: 'data-eng',
  year: 'TODO',
  title: { fr: 'RaceFlow (F1)', en: 'RaceFlow (F1)' },
  context: { fr: "Projet d'équipe", en: 'Team project' },
  problem: { fr: 'TODO : problème traité', en: 'TODO: problem addressed' },
  did: { fr: 'TODO : ta part', en: 'TODO: your part' },
  result: { fr: 'TODO : résultat', en: 'TODO: result' },
  stack: [],
  links: {},
  details: {
    problem: { fr: 'TODO : problème traité et contexte', en: 'TODO: problem and context' },
    data: { fr: ['TODO : sources de données'], en: ['TODO: data sources'] },
    approach: { fr: ['TODO : approche et ta part'], en: ['TODO: approach and your part'] },
    results: { fr: ['TODO : résultats'], en: ['TODO: results'] },
    improve: todoImprove,
  },
};

export const meteo: Project = {
  slug: 'pipeline-meteo-maroc',
  order: 9,
  category: 'data-eng',
  year: '2026',
  title: { fr: 'Pipeline Météo Maroc', en: 'Morocco weather pipeline' },
  context: { fr: 'Projet EMSI · mai 2026', en: 'EMSI project · May 2026' },
  problem: { fr: 'TODO : problème traité', en: 'TODO: problem addressed' },
  did: {
    fr: 'Architecture Medallion, orchestration avec Airflow et dashboard Power BI.',
    en: 'Medallion architecture, Airflow orchestration and a Power BI dashboard.',
  },
  result: { fr: 'TODO : résultat', en: 'TODO: result' },
  stack: ['Airflow', 'Medallion', 'Power BI'],
  links: {},
  details: {
    problem: { fr: 'TODO : problème traité', en: 'TODO: problem addressed' },
    data: { fr: ['TODO : sources de données météo'], en: ['TODO: weather data sources'] },
    approach: {
      fr: ['Architecture Medallion (couches Bronze, Silver, Gold)', 'Orchestration avec Airflow', 'Dashboard Power BI'],
      en: ['Medallion architecture (Bronze, Silver, Gold layers)', 'Orchestration with Airflow', 'Power BI dashboard'],
    },
    results: { fr: ['TODO : résultats'], en: ['TODO: results'] },
    improve: {
      fr: [
        "Ajouter des contrôles de qualité des données entre les couches Bronze, Silver et Gold",
      ],
      en: [
        "Add data-quality checks between the Bronze, Silver and Gold layers",
      ],
    },
  },
};

export const monAnnonce: Project = {
  slug: 'mon-annonce',
  order: 15,
  category: 'genai',
  year: '2025',
  title: { fr: 'Mon Annonce', en: 'Mon Annonce' },
  context: { fr: 'TODO : contexte', en: 'TODO: context' },
  problem: { fr: 'TODO : problème traité', en: 'TODO: problem addressed' },
  did: {
    fr: 'Agent conversationnel et classification des annonces.',
    en: 'Conversational agent and listing classification.',
  },
  result: { fr: 'TODO : résultat', en: 'TODO: result' },
  stack: [],
  links: {},
  details: {
    problem: { fr: 'TODO : problème traité', en: 'TODO: problem addressed' },
    data: { fr: ['TODO : données'], en: ['TODO: data'] },
    approach: {
      fr: ['Agent conversationnel', 'Classification des annonces', 'TODO : technologies'],
      en: ['Conversational agent', 'Listing classification', 'TODO: technologies'],
    },
    results: { fr: ['TODO : résultats'], en: ['TODO: results'] },
    improve: todoImprove,
  },
};
