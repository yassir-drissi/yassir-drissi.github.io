import type { Project } from './types';

// Sources : README et HANDOFF.md du dépôt yassir-drissi/skywatch-maroc.
// Équipe : Yassir Drissi (semaine 1, ingestion OpenSky -> Kafka), Mohamed Benheddane
// (fin de semaine 1 et semaine 2, Spark Scala) et un troisième contributeur.
export const project: Project = {
  slug: 'skywatch-maroc',
  order: 7,
  category: 'data-eng',
  year: '2026',
  title: { fr: 'SkyWatch Maroc', en: 'SkyWatch Maroc' },
  context: { fr: "Projet d'équipe · en cours", en: 'Team project · in progress' },
  problem: {
    fr: 'Suivre en temps réel les avions au-dessus du Maroc et détecter les situations anormales (attentes en circuit, remises de gaz), croisées avec la météo.',
    en: 'Track aircraft over Morocco in real time and detect abnormal situations (holding patterns, go-arounds), cross-referenced with weather.',
  },
  did: {
    fr: "Ma part : l'ingestion des positions OpenSky vers Kafka (semaine 1). L'équipe a ajouté la météo, le streaming Spark en Scala et la CI.",
    en: 'My part: ingesting OpenSky positions into Kafka (week 1). The team added weather, Spark streaming in Scala and CI.',
  },
  result: {
    fr: 'Semaines 1 et 2 sur 6 terminées : flux Kafka, couche Bronze, trafic par aéroport et alertes temps réel ; 55 tests Python et 39 tests Scala.',
    en: 'Weeks 1 and 2 of 6 done: Kafka streams, Bronze layer, per-airport traffic and real-time alerts; 55 Python and 39 Scala tests.',
  },
  stack: ['Python', 'Kafka', 'Spark Structured Streaming', 'Scala', 'Docker', 'GitHub Actions'],
  links: { code: 'https://github.com/yassir-drissi/skywatch-maroc' },
  images: [
    {
      src: '/images/projets/skywatch-topics.webp',
      width: 1600,
      height: 330,
      alt: {
        fr: 'Kafka UI : topics flights.raw, weather.raw et flights.alerts',
        en: 'Kafka UI: flights.raw, weather.raw and flights.alerts topics',
      },
    },
    {
      src: '/images/projets/skywatch-alertes.webp',
      width: 1600,
      height: 420,
      alt: {
        fr: 'Alertes HOLDING et GO_AROUND produites par Spark à partir des scripts de démonstration',
        en: 'HOLDING and GO_AROUND alerts produced by Spark from the demo scripts',
      },
    },
  ],
  details: {
    problem: {
      fr: "Les données ADS-B publiques permettent de suivre les avions en direct. Le projet construit une plateforme de données temps réel qui repère les attentes en circuit, les remises de gaz et la congestion des aéroports marocains, puis les croise avec la météo.",
      en: 'Public ADS-B data makes it possible to follow aircraft live. The project builds a real-time data platform that spots holding patterns, go-arounds and congestion at Moroccan airports, and cross-references them with weather.',
    },
    data: {
      fr: [
        'OpenSky Network : positions des avions toutes les 45 s',
        'Open-Meteo : météo des aéroports toutes les heures',
        'Limite connue : près des aéroports, seules les approches de Tanger sont visibles à basse altitude',
      ],
      en: [
        'OpenSky Network: aircraft positions every 45 s',
        'Open-Meteo: airport weather every hour',
        'Known limit: near airports, only Tangier approaches are visible at low altitude',
      ],
    },
    approach: {
      fr: [
        'Ma part (semaine 1) : producteur Python qui interroge OpenSky et publie les positions dans le topic Kafka flights.raw',
        'Producteur météo vers weather.raw ; Docker Compose avec Kafka et Kafka UI',
        'Job Spark Structured Streaming en Scala : archive Bronze en Parquet, trafic par aéroport sur 5 min, alertes HOLDING et GO_AROUND',
        'CI GitHub Actions : ruff, pytest, sbt test',
      ],
      en: [
        'My part (week 1): Python producer that polls OpenSky and publishes positions to the Kafka topic flights.raw',
        'Weather producer to weather.raw; Docker Compose with Kafka and Kafka UI',
        'Spark Structured Streaming job in Scala: Bronze archive in Parquet, 5-minute traffic per airport, HOLDING and GO_AROUND alerts',
        'GitHub Actions CI: ruff, pytest, sbt test',
      ],
    },
    results: {
      fr: [
        'Semaines 1 et 2 terminées et testées avec de vraies données',
        '55 tests Python (pytest) et 39 tests Scala (ScalaTest)',
      ],
      en: [
        'Weeks 1 and 2 completed and tested with real data',
        '55 Python tests (pytest) and 39 Scala tests (ScalaTest)',
      ],
    },
    improve: {
      fr: [
        'Prévu : couches Silver et Gold sur Databricks (Delta Lake), orchestration Airflow, Snowflake + dbt, dashboard Streamlit',
        "Trouver une source de positions à basse altitude pour Casablanca, Rabat et Fès",
      ],
      en: [
        'Planned: Silver and Gold layers on Databricks (Delta Lake), Airflow orchestration, Snowflake + dbt, Streamlit dashboard',
        'Find a low-altitude position source for Casablanca, Rabat and Fez',
      ],
    },
  },
};
