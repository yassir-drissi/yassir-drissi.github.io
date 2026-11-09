import type { Project } from './types';

// Source qui fait foi : README du dépôt othmanedhilou/asment-s-eye (8 modèles YOLO,
// validation sur webcam et vidéos rejouées). Chiffres conservés du brief : 10 000 images,
// rappel 92 % / 80 %, cycle 2–2,8 s → 0,18–0,27 s, 7 filtres, Telegram.
// Le post LinkedIn donne un autre nombre de modèles : seul le README fait foi.
export const project: Project = {
  slug: 'ciments-eye',
  order: 1,
  featured: true,
  category: 'vision',
  year: '2026',
  title: { fr: "Ciment's Eye", en: "Ciment's Eye" },
  context: {
    fr: 'Stage · Asment Temara (Groupe Ciments du Maroc)',
    en: 'Internship · Asment Temara (Ciments du Maroc Group)',
  },
  problem: {
    fr: 'Surveiller un site cimentier en continu (feu, fumée, EPI, chutes, véhicules) sur des serveurs sans GPU, sans noyer l’équipe sécurité sous les fausses alertes.',
    en: 'Monitor a cement plant continuously (fire, smoke, PPE, falls, vehicles) on GPU-less servers without flooding the safety team with false alarms.',
  },
  did: {
    fr: "8 modèles YOLOv8 entraînés, inférence en parallèle sur processeur avec OpenVINO, moteur de règles d'alerte à 7 filtres, alertes Telegram, API FastAPI et interface web.",
    en: '8 YOLOv8 models trained, parallel CPU inference with OpenVINO, a 7-filter alert rule engine, Telegram alerts, a FastAPI API and a web interface.',
  },
  result: {
    fr: 'Cycle de 2–2,8 s ramené à 0,18–0,27 s pour 6 modèles, sans GPU ; rappel de 92 % (feu) et 80 % (fumée). Validé sur webcam et vidéos rejouées, en attendant le branchement des caméras du site.',
    en: 'Cycle time cut from 2–2.8 s to 0.18–0.27 s for 6 models, with no GPU; 92% (fire) and 80% (smoke) recall. Validated on webcam and replayed videos, pending connection to the site cameras.',
  },
  metrics: [
    { value: '0,18–0,27 s', label: { fr: 'par cycle pour 6 modèles, contre 2–2,8 s', en: 'per cycle for 6 models, down from 2–2.8 s' } },
    { value: '92 %', label: { fr: 'de rappel sur le feu', en: 'recall on fire' } },
    { value: '80 %', label: { fr: 'de rappel sur la fumée', en: 'recall on smoke' } },
    { value: '10 000', label: { fr: 'images pour le modèle feu/fumée', en: 'images for the fire/smoke model' } },
  ],
  stack: ['YOLOv8', 'OpenVINO', 'OpenCV', 'Python', 'FastAPI', 'SQLite', 'Colab/Kaggle', 'Telegram'],
  links: {
    code: 'https://github.com/othmanedhilou/asment-s-eye',
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7508614261317832704/',
  },
  images: [
    {
      src: '/images/projets/ciments-eye-alertes.webp',
      width: 1600,
      height: 680,
      alt: {
        fr: "Historique des alertes de l'interface Ciment's Eye : arc électrique (critique), casque et gilet manquants (haute)",
        en: "Ciment's Eye alert history: arc flash (critical), missing helmet and vest (high)",
      },
      caption: {
        fr: "Démonstration sur les images d'essai du dépôt, exécutée sur processeur.",
        en: 'Demo on the repository test images, running on CPU.',
      },
    },
    {
      src: '/images/projets/ciments-eye-epi.webp',
      width: 1000,
      height: 732,
      alt: {
        fr: 'Détection des EPI sur un chantier : personnes et gilets de sécurité détectés',
        en: 'PPE detection on a construction site: people and safety vests detected',
      },
    },
    {
      src: '/images/projets/ciments-eye-arc.webp',
      width: 1280,
      height: 914,
      alt: { fr: "Détection d'un arc électrique pendant une soudure", en: 'Arc flash detected during welding' },
    },
    {
      src: '/images/projets/ciments-eye-analyse.webp',
      width: 1600,
      height: 740,
      alt: {
        fr: "Écran Analyse : alertes par heure, répartition par modèle et fiabilité",
        en: 'Analysis screen: alerts per hour, breakdown by model and reliability',
      },
    },
    {
      file: "ciments-eye-3.jpg",
      alt: { fr: "Écran Direct de Ciment's Eye : détections sur la webcam et alertes critiques en cours", en: "Ciment's Eye live screen: webcam detections and ongoing critical alerts" },
    },
    {
      file: "ciments-eye-2.jpg",
      alt: { fr: "Détection des EPI affichée sur l'écran d'une salle de réunion", en: "PPE detection shown on a meeting-room screen" },
    },
    {
      file: "ciments-eye-1.jpg",
      alt: { fr: "Le site industriel où s'est déroulé le stage", en: "The industrial site where the internship took place" },
    },
  ],
  details: {
    problem: {
      fr: "Un site cimentier présente des risques qui exigent une réaction immédiate : départ de feu, fumée, non-port des équipements de protection, chute d'une personne, véhicules dans des zones interdites. L'objectif était un système autonome capable d'analyser les flux caméras en continu, sur des serveurs sans carte graphique, et d'alerter les bonnes personnes sans multiplier les fausses alertes.",
      en: 'A cement plant carries risks that need an immediate response: fire, smoke, missing personal protective equipment, people falling, vehicles in restricted areas. The goal was an autonomous system that analyses camera feeds continuously on servers without a GPU and alerts the right people without generating a stream of false alarms.',
    },
    data: {
      fr: [
        'Modèle feu/fumée entraîné sur 10 000 images',
        'Entraînements réalisés sur Colab et Kaggle, puis conversion des modèles en OpenVINO',
        'Sources vidéo prises en charge : webcam, caméras IP (RTSP), fichiers vidéo rejoués et dossiers d’images',
        'Validation sur webcam et vidéos rejouées : les caméras IP du site ne sont pas encore branchées',
        'Les alertes marquées fausses par les opérateurs alimentent le jeu de réentraînement',
      ],
      en: [
        'Fire/smoke model trained on 10,000 images',
        'Training runs on Colab and Kaggle, then models converted to OpenVINO',
        'Supported video sources: webcam, IP cameras (RTSP), replayed video files and image folders',
        'Validated on webcam and replayed videos: the site IP cameras are not connected yet',
        'Alerts flagged as false by operators feed the retraining set',
      ],
    },
    approach: {
      fr: [
        '8 modèles YOLOv8 : feu/fumée, arc électrique, EPI, gants/lunettes et chute, déchirure de convoyeur, personnes/animaux, véhicules et contrôle de chargement (désactivé par défaut)',
        'Exécution des modèles en parallèle sur processeur avec OpenVINO, un thread par caméra',
        'Moteur de règles à 7 filtres (zones surveillées, classes, seuils, anti-répétition…) pour limiter les fausses alertes',
        'Suivi des objets : une seule alerte par personne au lieu d’une par image',
        'Alertes Telegram par niveau de sévérité (critique, haute, moyenne, technique), avec photo et clip vidéo',
        'API FastAPI, interface web, historique des alertes en SQLite et rapport PDF',
      ],
      en: [
        '8 YOLOv8 models: fire/smoke, arc flash, PPE, gloves/goggles and falls, conveyor-belt tears, people/animals, vehicles and load control (disabled by default)',
        'Models run in parallel on CPU with OpenVINO, one thread per camera',
        '7-filter rule engine (monitored zones, classes, thresholds, de-duplication…) to limit false alarms',
        'Object tracking: one alert per person instead of one per frame',
        'Severity-based Telegram alerts (critical, high, medium, technical) with a snapshot and video clip',
        'FastAPI API, web interface, alert history in SQLite and PDF report',
      ],
    },
    results: {
      fr: [
        'Temps de cycle ramené de 2–2,8 s à 0,18–0,27 s pour 6 modèles, sans GPU',
        'Modèle feu/fumée : rappel de 92 % sur le feu et de 80 % sur la fumée',
        '179 tests automatisés, exécutés à chaque envoi sur GitHub',
      ],
      en: [
        'Cycle time reduced from 2–2.8 s to 0.18–0.27 s for 6 models, with no GPU',
        'Fire/smoke model: 92% recall on fire and 80% on smoke',
        '179 automated tests, run on every push to GitHub',
      ],
    },
    improve: {
      fr: [
        'Brancher les caméras IP du site pour valider les modèles en conditions réelles, au-delà des vidéos rejouées',
        "Renforcer le rappel sur l'absence de casque et de masque (~54 %) avec des images du site",
        'Réentraîner le contrôle de chargement avec des images négatives pour pouvoir le réactiver',
        "Ajouter une authentification à l'interface, aujourd'hui réservée au réseau interne",
      ],
      en: [
        'Connect the site IP cameras to validate the models in real conditions, beyond replayed videos',
        'Improve recall on missing helmets and masks (~54%) with images from the site',
        'Retrain the load-control model with negative images so it can be re-enabled',
        'Add authentication to the interface, which is currently limited to the internal network',
      ],
    },
  },
};
