import type { Project } from './types';

// Projets sans dépôt public (affichés avec « Code privé / projet d'équipe »).
// Un projet avec `draft: true` est masqué du site : il lui manque encore le problème ou les résultats.
// Compléter les TODO restants, puis retirer `draft` pour publier.

const todoImprove = { fr: ['TODO : ce que tu améliorerais'], en: ['TODO: what you would improve'] };

// Alzheimer : sources = Alzhaimer_CNN_ProjetControle.pdf (rapport du module Deep Learning, S8, 2025-2026)
// et Detection_Alzehaimer_and_Classification_Deep_Learning.pptx (figures).
// Les résultats affichés sont ceux mesurés dans le notebook (matrice de confusion, rapport de classification,
// log d'entraînement). La conclusion du rapport et la diapositive de résultats annoncent 96,47 % d'exactitude :
// ces chiffres ne correspondent à aucune sortie du notebook, ils ne sont donc pas repris ici.
export const alzheimer: Project = {
  slug: 'detection-alzheimer-irm',
  order: 10,
  category: 'vision',
  year: '2025-2026',
  title: { fr: "Détection d'Alzheimer sur IRM", en: "Alzheimer's detection on MRI" },
  context: {
    fr: 'Contrôle du module Deep Learning (S8) · EMSI Rabat · encadré par Pr. Said Benlakhdar',
    en: 'Deep Learning course assessment (S8) · EMSI Rabat · supervised by Pr. Said Benlakhdar',
  },
  problem: {
    fr: 'Classer des IRM cérébrales selon le stade de la maladie d’Alzheimer, avec un modèle dont on peut visualiser les zones de décision.',
    en: 'Classify brain MRI scans by Alzheimer’s disease stage, with a model whose decision regions can be visualised.',
  },
  did: {
    fr: 'CNN conçu de zéro, pondération des classes et cartes Grad-CAM pour visualiser les zones utilisées par le modèle.',
    en: 'CNN designed from scratch, class weighting and Grad-CAM maps to show which regions the model relies on.',
  },
  result: {
    fr: '56 % d’exactitude sur 1 280 IRM de test (4 stades, hasard = 25 %) : une première base de référence. La classe rare « démence modérée » n’est jamais détectée.',
    en: '56% accuracy on 1,280 test MRI scans (4 stages, chance = 25%): a first baseline. The rare “moderate dementia” class is never detected.',
  },
  metrics: [
    { value: '56 %', label: { fr: 'd’exactitude sur 1 280 IRM de test (hasard : 25 %)', en: 'accuracy on 1,280 test scans (chance: 25%)' } },
    { value: '6 400', label: { fr: 'IRM réparties en 4 stades', en: 'MRI scans across 4 stages' } },
    { value: '1,3 M', label: { fr: 'de paramètres, CNN conçu de zéro', en: 'parameters, CNN built from scratch' } },
  ],
  stack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Grad-CAM', 'scikit-learn', 'OpenCV'],
  links: {},
  images: [
    {
      src: '/images/projets/alzheimer-echantillons.webp',
      width: 1600,
      height: 650,
      alt: {
        fr: "Exemples d'IRM cérébrales augmentées du jeu d'entraînement, avec leur stade",
        en: 'Examples of augmented brain MRI scans from the training set, with their stage',
      },
    },
    {
      src: '/images/projets/alzheimer-architecture.webp',
      width: 2000,
      height: 724,
      alt: {
        fr: 'Architecture du CNN : 4 blocs convolutifs (32, 64, 128 puis 256 filtres), pooling global moyen et couche de sortie à 4 classes',
        en: 'CNN architecture: 4 convolutional blocks (32, 64, 128 then 256 filters), global average pooling and a 4-class output layer',
      },
    },
    {
      src: '/images/projets/alzheimer-courbes.webp',
      width: 1724,
      height: 617,
      alt: {
        fr: "Courbes d'apprentissage sur 50 époques : exactitude et perte, entraînement et validation",
        en: 'Learning curves over 50 epochs: accuracy and loss, training and validation',
      },
    },
    {
      src: '/images/projets/alzheimer-matrice.webp',
      width: 648,
      height: 512,
      alt: {
        fr: 'Matrice de confusion sur le jeu de test : la classe « démence modérée » n’est jamais prédite',
        en: 'Confusion matrix on the test set: the “moderate dementia” class is never predicted',
      },
    },
  ],
  details: {
    problem: {
      fr: "Plus de 55 millions de personnes vivent avec une démence dans le monde (OMS). L'analyse manuelle des IRM est longue et varie d'un radiologue à l'autre. Le projet cherche à classer automatiquement les IRM en 4 stades (non dément, démence très légère, légère, modérée), en gardant le modèle interprétable grâce à Grad-CAM.",
      en: 'More than 55 million people live with dementia worldwide (WHO). Reading MRI scans by hand is slow and varies between radiologists. The project aims to classify scans automatically into 4 stages (non-demented, very mild, mild, moderate dementia), keeping the model interpretable with Grad-CAM.',
    },
    data: {
      fr: [
        'Jeu Alzheimer MRI (Falah/Alzheimer_MRI sur Hugging Face) : 5 120 images d’entraînement et 1 280 de test, soit 6 400 IRM',
        'Fort déséquilibre à l’entraînement : 2 566 non déments (50,1 %), 1 781 très légers (34,8 %), 724 légers (14,1 %) et 49 modérés (1,0 %)',
        'Images de 176×176 pixels ; 4 098 images d’entraînement et 1 022 de validation après découpage',
      ],
      en: [
        'Alzheimer MRI dataset (Falah/Alzheimer_MRI on Hugging Face): 5,120 training and 1,280 test images, i.e. 6,400 scans',
        'Strong class imbalance in training: 2,566 non-demented (50.1%), 1,781 very mild (34.8%), 724 mild (14.1%) and 49 moderate (1.0%)',
        '176×176 pixel images; 4,098 training and 1,022 validation images after splitting',
      ],
    },
    approach: {
      fr: [
        'CNN conçu de zéro avec TensorFlow : 4 blocs convolutifs (32, 64, 128, 256 filtres) avec normalisation par lots et dropout, pooling global moyen, couche dense de 512 neurones, soit 1 311 780 paramètres',
        'Augmentation des images (rotation, retournement, zoom, luminosité)',
        'Pondération des classes pour compenser le déséquilibre (jusqu’à 25,6 pour la classe modérée)',
        'Entraînement sur 50 époques avec Adam, arrêt anticipé, réduction du taux d’apprentissage et sauvegarde du meilleur modèle',
        'Grad-CAM pour visualiser les régions qui influencent chaque prédiction',
      ],
      en: [
        'CNN built from scratch with TensorFlow: 4 convolutional blocks (32, 64, 128, 256 filters) with batch normalisation and dropout, global average pooling, a 512-unit dense layer, for 1,311,780 parameters',
        'Image augmentation (rotation, flipping, zoom, brightness)',
        'Class weighting to offset the imbalance (up to 25.6 for the moderate class)',
        'Training over 50 epochs with Adam, early stopping, learning-rate reduction and best-model checkpointing',
        'Grad-CAM to visualise the regions driving each prediction',
      ],
    },
    results: {
      fr: [
        'Exactitude de 56 % sur les 1 280 IRM de test (F1 pondéré 0,54, F1 macro 0,34), contre 25 % pour un tirage au hasard',
        'Meilleure exactitude de validation : 59,5 % à l’époque 49',
        'Non déments : 69 % bien reconnus (438 sur 634). Les confusions viennent surtout des stades voisins : 130 démences légères prédites très légères, 189 non déments prédits très légers',
        'Démence modérée : aucune des 15 IRM de test détectée, avec seulement 49 exemples à l’entraînement',
        'Courbes de validation instables : le modèle reste une base de référence, insuffisante pour un usage clinique',
      ],
      en: [
        '56% accuracy on the 1,280 test scans (weighted F1 0.54, macro F1 0.34), versus 25% for random guessing',
        'Best validation accuracy: 59.5% at epoch 49',
        'Non-demented: 69% correctly recognised (438 of 634). Most confusion is between neighbouring stages: 130 mild cases predicted very mild, 189 non-demented predicted very mild',
        'Moderate dementia: none of the 15 test scans detected, with only 49 training examples',
        'Unstable validation curves: the model stays a baseline, not sufficient for clinical use',
      ],
    },
    improve: {
      fr: [
        'Partir d’un modèle pré-entraîné (EfficientNet ou ResNet) plutôt que d’un CNN conçu de zéro',
        'Mieux traiter la classe rare : poids de classe plafonné autour de 10 et suréchantillonnage, car un poids de 25,6 rend l’entraînement instable',
        "Entraîner sur GPU pour explorer plus d'hyperparamètres, et valider sur un jeu externe en séparant les images par patient pour éviter les fuites entre entraînement et test",
      ],
      en: [
        'Start from a pre-trained model (EfficientNet or ResNet) instead of a CNN built from scratch',
        'Handle the rare class better: cap the class weight around 10 and oversample, since a weight of 25.6 makes training unstable',
        'Train on a GPU to explore more hyperparameters, and validate on an external dataset, splitting images by patient to avoid leakage between training and test',
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
        // Source : tableau « Sources de données » du README du dépôt crimewatch.
        'Sources ouvertes : Chicago Data Portal, LA Open Data (LAPD NIBRS), NYC Open Data (NYPD), UK Police API (Londres centre) et Open-Meteo pour la météo',
      ],
      en: [
        'Crime data from Chicago, Los Angeles, New York and London',
        'Warehouse (09/10 to 31/10/2026): 50,078 crimes in New York, 13,519 in Chicago, 12,089 in Los Angeles, 3,777 in London',
        '~500 m areas; cross-referenced with weather',
        'Open sources: Chicago Data Portal, LA Open Data (LAPD NIBRS), NYC Open Data (NYPD), UK Police API (central London) and Open-Meteo for weather',
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
        'Dashboard running on all 4 cities, with data reloaded from the warehouse',
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

// RaceFlow : sources = README.md, docs/ETAPE_7_ML.md, docs/ETAPE_8_AIRFLOW.md, RaceFlow_Compte_Rendu.pdf
// et l'historique git du dépôt F1-Project (mes commits : étapes 7 et 8, les 07 et 08/11/2026).
export const raceflow: Project = {
  slug: 'raceflow',
  order: 12,
  category: 'data-eng',
  year: '2026',
  title: { fr: 'RaceFlow (F1)', en: 'RaceFlow (F1)' },
  context: { fr: "Projet d'équipe à trois · EMSI Rabat", en: 'Three-person team project · EMSI Rabat' },
  problem: {
    fr: "Peut-on prédire le vainqueur d'un Grand Prix de Formule 1 avant le départ ? Le projet construit le pipeline de données complet qui permet de répondre, de l'API jusqu'au modèle.",
    en: 'Can the winner of a Formula 1 Grand Prix be predicted before the start? The project builds the full data pipeline needed to answer, from the API to the model.',
  },
  did: {
    fr: 'Ma part : étapes 7 et 8, avec le modèle XGBoost suivi dans MLflow, la validation walk-forward, les features de qualification, puis l’orchestration Airflow et la CI.',
    en: 'My part: steps 7 and 8, covering the XGBoost model tracked in MLflow, walk-forward validation, qualifying features, then Airflow orchestration and CI.',
  },
  result: {
    fr: '54,9 % de vainqueurs prédits sur 173 courses, contre 52,0 % pour la référence « pole position » ; écart non significatif (IC 95 % [−2,9 ; +8,7]).',
    en: '54.9% of winners predicted over 173 races, vs 52.0% for the “pole position” baseline; the gap is not significant (95% CI [−2.9; +8.7]).',
  },
  metrics: [
    { value: '54,9 %', label: { fr: 'de vainqueurs prédits (contre 52,0 % pour la référence « pole position »)', en: 'of winners predicted (vs 52.0% for the “pole position” baseline)' } },
    { value: '173', label: { fr: 'courses en validation walk-forward', en: 'races in walk-forward validation' } },
  ],
  stack: ['Kafka', 'Spark', 'Airflow', 'XGBoost', 'MLflow', 'Streamlit', 'Prometheus', 'Grafana', 'Docker', 'GitHub Actions'],
  links: {},
  details: {
    problem: {
      fr: "La Formule 1 publie des données propres et historisées, et la question est simple à poser : qui va gagner dimanche ? RaceFlow collecte les résultats et les qualifications, les fait passer par un pipeline streaming puis batch, et compare un modèle à la référence la plus simple : « le poleman gagne ».",
      en: 'Formula 1 publishes clean, historical data, and the question is easy to state: who wins on Sunday? RaceFlow collects results and qualifying data, runs them through a streaming then batch pipeline, and compares a model with the simplest baseline: “the pole-sitter wins”.',
    },
    data: {
      fr: [
        'API Jolpica (remplaçante d’Ergast) : résultats et qualifications des saisons 2015 à 2025',
        '4 698 lignes pilote-course après dédoublonnage, 4 684 lignes de qualifications',
        'Data Lake Parquet en trois couches : Bronze, Silver, Gold',
      ],
      en: [
        'Jolpica API (Ergast’s successor): results and qualifying for the 2015 to 2025 seasons',
        '4,698 driver-race rows after deduplication, 4,684 qualifying rows',
        'Parquet data lake in three layers: Bronze, Silver, Gold',
      ],
    },
    approach: {
      fr: [
        'Producers Python vers Kafka, traitement Spark, features calculées uniquement sur les courses précédentes (pas de fuite de données)',
        'Ma part, étape 7 : XGBoost peu profond suivi dans MLflow, validation walk-forward par saison et intervalle de confiance bootstrap sur l’écart avec la pole',
        'Ma part, étape 7b : ajout des temps de qualification (écarts en Q1 et Q3, écart entre grille et qualification)',
        'Ma part, étape 8 : 5 DAGs Airflow chaînés par Datasets, MLflow dans Docker et CI GitHub Actions',
        'Reste de l’équipe : ingestion et Data Lake (étapes 1 à 6), dashboard Streamlit, prédiction du prochain GP et monitoring Grafana (étapes 9 à 11)',
      ],
      en: [
        'Python producers to Kafka, Spark processing, features computed only from previous races (no data leakage)',
        'My part, step 7: shallow XGBoost tracked in MLflow, season-by-season walk-forward validation and a bootstrap confidence interval on the gap to pole',
        'My part, step 7b: added qualifying times (Q1 and Q3 gaps, grid vs qualifying position)',
        'My part, step 8: 5 Airflow DAGs chained with Datasets, MLflow in Docker and GitHub Actions CI',
        'Rest of the team: ingestion and data lake (steps 1 to 6), Streamlit dashboard, next-GP prediction and Grafana monitoring (steps 9 to 11)',
      ],
    },
    results: {
      fr: [
        'Validation walk-forward 2018-2025 : 54,9 % de vainqueurs prédits sur 173 courses, contre 52,0 % pour la référence « pole position »',
        'Écart non significatif : l’intervalle de confiance à 95 % est de [−2,9 ; +8,7] points et contient 0',
        'Les temps de qualification apportent l’essentiel du gain ; la position de départ explique déjà la majorité des victoires',
      ],
      en: [
        'Walk-forward validation 2018–2025: 54.9% of winners predicted over 173 races, vs 52.0% for the “pole position” baseline',
        'The gap is not significant: the 95% confidence interval is [−2.9; +8.7] points and contains 0',
        'Qualifying times bring most of the gain; starting position already explains most wins',
      ],
    },
    improve: {
      fr: [
        'Dépasser la pole de façon significative demande plus de données ou de meilleures features : 173 courses ne suffisent pas à départager le modèle et la référence',
        'Ajouter la météo et les pneus via l’API OpenF1 : la stratégie de course et les arrêts aux stands ne sont pas dans les données',
      ],
      en: [
        'Beating pole position significantly takes more data or better features: 173 races are not enough to separate the model from the baseline',
        'Add weather and tyre data through the OpenF1 API: race strategy and pit stops are not in the data',
      ],
    },
  },
};

export const meteo: Project = {
  slug: 'pipeline-meteo-maroc',
  order: 9,
  category: 'data-eng',
  year: '2026',
  title: { fr: 'Pipeline Météo Maroc', en: 'Morocco weather pipeline' },
  context: { fr: 'Projet EMSI · mai 2026', en: 'EMSI project · May 2026' },
  problem: {
    fr: 'Comparer chaque jour la météo de 4 villes marocaines (Marrakech, Tanger, Dakhla, Essaouira) et désigner celle où les conditions sont les meilleures.',
    en: 'Compare the weather of 4 Moroccan cities every day (Marrakech, Tangier, Dakhla, Essaouira) and name the one with the best conditions.',
  },
  did: {
    fr: 'Architecture Medallion, orchestration avec Airflow et dashboard HTML (Chart.js).',
    en: 'Medallion architecture, Airflow orchestration and an HTML dashboard (Chart.js).',
  },
  result: {
    fr: 'Pipeline quotidien en 4 tâches Airflow, de l’API au classement des villes. Dernier passage du 18/05/2026 : Tanger en tête avec 95,28/100.',
    en: 'Daily pipeline of 4 Airflow tasks, from the API to the city ranking. Latest run on 18/05/2026: Tangier first with 95.28/100.',
  },
  stack: ['Python', 'pandas', 'Airflow', 'Medallion', 'OpenWeather API', 'Chart.js'],
  links: {},
  details: {
    // Sources : config.py, ingestion.py, transform_gold.py, generate_dashboard.py, weather_dag.py et data/gold/ranking.csv (projet_meteo.zip).
    problem: {
      fr: "Projet du module « Architecture des Données » : construire un pipeline complet autour de la météo de 4 villes marocaines. Chaque jour, les mesures sont récupérées, nettoyées, puis résumées par un score météo sur 100 qui sert à classer les villes.",
      en: 'Project for the “Data Architecture” course: build a complete pipeline around the weather of 4 Moroccan cities. Every day, measurements are fetched, cleaned, then summarised by a weather score out of 100 used to rank the cities.',
    },
    data: {
      fr: [
        'API OpenWeather (météo actuelle) pour Marrakech, Tanger, Dakhla et Essaouira',
        'JSON bruts stockés par ville et par date ; 24 mesures nettoyées dans la couche Silver',
      ],
      en: [
        'OpenWeather API (current weather) for Marrakech, Tangier, Dakhla and Essaouira',
        'Raw JSON stored by city and date; 24 cleaned measurements in the Silver layer',
      ],
    },
    approach: {
      fr: [
        'Architecture Medallion : Bronze (JSON bruts), Silver (données typées et nettoyées), Gold (score et classement)',
        'Score météo sur 100 : température 40 %, humidité 20 %, vent 20 %, état du ciel 20 %',
        'DAG Airflow quotidien à 6 h : ingestion, Silver, Gold, puis tests de qualité sur les trois couches',
        'Dashboard HTML (Chart.js) généré à partir de la couche Gold',
      ],
      en: [
        'Medallion architecture: Bronze (raw JSON), Silver (typed, cleaned data), Gold (score and ranking)',
        'Weather score out of 100: temperature 40%, humidity 20%, wind 20%, sky conditions 20%',
        'Daily Airflow DAG at 6 am: ingestion, Silver, Gold, then quality tests on all three layers',
        'HTML dashboard (Chart.js) generated from the Gold layer',
      ],
    },
    results: {
      fr: [
        'Pipeline exécuté de bout en bout par Airflow, de l’appel API au classement',
        'Classement du 18/05/2026 : Tanger 95,28 · Dakhla 89,56 · Essaouira 83,54 · Marrakech 82,72 (sur 100)',
      ],
      en: [
        'Pipeline run end to end by Airflow, from the API call to the ranking',
        'Ranking on 18/05/2026: Tangier 95.28 · Dakhla 89.56 · Essaouira 83.54 · Marrakech 82.72 (out of 100)',
      ],
    },
    improve: {
      fr: [
        "Classer les villes sur la moyenne de plusieurs jours plutôt que sur la dernière mesure",
      ],
      en: [
        "Rank the cities on a multi-day average rather than on the latest measurement",
      ],
    },
  },
};

// Mon Annonce : source = « Rapport PFA Gestion des Annonces.pdf » (PFA de 3e année, 2024-2025).
// Masqué : le rapport ne donne aucun résultat chiffré, et il ne décrit pas de modèle de classification
// (les « catégories » y sont une table de la base). À préciser avant publication.
export const monAnnonce: Project = {
  slug: 'mon-annonce',
  draft: true,
  order: 15,
  category: 'genai',
  year: '2025',
  title: { fr: 'Mon Annonce', en: 'Mon Annonce' },
  context: {
    fr: 'Projet de fin d’année (PFA) · 3e année EMSI, 2024-2025 · en binôme',
    en: 'End-of-year project (PFA) · 3rd year at EMSI, 2024–2025 · in a pair',
  },
  problem: {
    fr: 'Publier, gérer et retrouver des annonces en ligne sur une seule plateforme, avec un assistant qui aide le vendeur à rédiger et améliorer son annonce.',
    en: 'Publish, manage and find online listings on a single platform, with an assistant that helps sellers write and improve their listing.',
  },
  did: {
    fr: 'Agent conversationnel et classification des annonces.',
    en: 'Conversational agent and listing classification.',
  },
  result: { fr: 'TODO : résultat', en: 'TODO: result' },
  stack: ['React', 'Django', 'MySQL', 'Node.js', 'OpenRouter (DeepSeek)'],
  links: {},
  details: {
    problem: {
      fr: "Les plateformes d'annonces généralistes manquent souvent de filtres pertinents, de modération et d'aide à la rédaction. Le projet propose une plateforme dédiée : création et gestion d'annonces, recherche filtrée, messagerie entre acheteurs et vendeurs, et assistant IA pour les conseils commerciaux.",
      en: 'General-purpose listing platforms often lack relevant filters, moderation and writing help. The project offers a dedicated platform: listing creation and management, filtered search, buyer-seller messaging, and an AI assistant for sales advice.',
    },
    data: {
      fr: ['Annonces, images et messages saisis par les utilisateurs, stockés dans une base MySQL'],
      en: ['Listings, images and messages entered by users, stored in a MySQL database'],
    },
    approach: {
      fr: [
        'Interface web React et API Django',
        'Assistant IA : microservice Node.js qui interroge DeepSeek via OpenRouter et conserve l’historique de la conversation',
        'Classification des annonces',
      ],
      en: [
        'React web interface and Django API',
        'AI assistant: Node.js microservice that queries DeepSeek through OpenRouter and keeps the conversation history',
        'Listing classification',
      ],
    },
    results: { fr: ['TODO : résultats'], en: ['TODO: results'] },
    improve: todoImprove,
  },
};
