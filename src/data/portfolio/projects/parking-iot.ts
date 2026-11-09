import type { Project } from './types';

// Sources : README et captures du dépôt yassir-drissi/Parking_Projet.
export const project: Project = {
  slug: 'parking-iot',
  order: 14,
  category: 'iot',
  year: '2026',
  title: { fr: 'Smart Parking IoT', en: 'Smart Parking IoT' },
  context: { fr: 'Projet IoT · Smart City', en: 'IoT project · Smart City' },
  problem: {
    fr: "Connaître en temps réel l'occupation des places d'un parking et piloter automatiquement la barrière d'entrée.",
    en: 'Know parking-space occupancy in real time and control the entrance barrier automatically.',
  },
  did: {
    fr: 'Firmware ESP32 (capteurs ultrasoniques, servo de barrière), MQTT via HiveMQ, backend Node.js avec MongoDB et Redis sous Docker, dashboard temps réel.',
    en: 'ESP32 firmware (ultrasonic sensors, barrier servo), MQTT through HiveMQ, Node.js backend with MongoDB and Redis in Docker, real-time dashboard.',
  },
  result: {
    fr: 'Chaîne complète simulée sur Wokwi : détection des places, ouverture de la barrière et tableau de bord mis à jour en direct.',
    en: 'Full chain simulated on Wokwi: space detection, barrier opening and a live-updating dashboard.',
  },
  stack: ['ESP32', 'Arduino C++', 'MQTT', 'HiveMQ', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Chart.js', 'OpenRouter'],
  links: { code: 'https://github.com/yassir-drissi/Parking_Projet' },
  images: [
    {
      src: '/images/projets/parking-dashboard.webp',
      width: 1600,
      height: 778,
      alt: {
        fr: 'Tableau de bord temps réel : places libres et occupées, état de la barrière, historique',
        en: 'Real-time dashboard: free and occupied spaces, barrier state, history',
      },
    },
    {
      src: '/images/projets/parking-wokwi.webp',
      width: 1600,
      height: 767,
      alt: {
        fr: 'Montage Wokwi : ESP32, trois capteurs HC-SR04 et servomoteur de barrière',
        en: 'Wokwi circuit: ESP32, three HC-SR04 sensors and barrier servo',
      },
    },
  ],
  details: {
    problem: {
      fr: "Dans un parking, savoir quelles places sont libres évite de tourner inutilement. L'objectif était une chaîne IoT de bout en bout : du capteur sur la place jusqu'au tableau de bord.",
      en: 'In a car park, knowing which spaces are free saves drivers from circling. The goal was an end-to-end IoT chain, from the sensor on the space to the dashboard.',
    },
    data: {
      fr: ['Mesures de distance des capteurs ultrasoniques HC-SR04, publiées sur le topic MQTT parking/update'],
      en: ['Distance readings from HC-SR04 ultrasonic sensors, published on the MQTT topic parking/update'],
    },
    approach: {
      fr: [
        'ESP32 simulé sur Wokwi : 2 capteurs pour les places, 1 capteur et un servo SG90 pour la barrière',
        'Publication MQTT via le broker public HiveMQ',
        'Backend Node.js sous Docker Compose : MongoDB pour l’historique des événements, Redis pour l’état courant',
        'Dashboard web temps réel avec Chart.js',
      ],
      en: [
        'ESP32 simulated on Wokwi: 2 sensors for the spaces, 1 sensor and an SG90 servo for the barrier',
        'MQTT publishing through the public HiveMQ broker',
        'Node.js backend with Docker Compose: MongoDB for the event history, Redis for the current state',
        'Real-time web dashboard with Chart.js',
      ],
    },
    results: {
      fr: ['Chaîne fonctionnelle de bout en bout en simulation : occupation des places et état de la barrière affichés en direct'],
      en: ['End-to-end chain working in simulation: space occupancy and barrier state displayed live'],
    },
    improve: {
      fr: ['Passer du broker public à un broker sécurisé (authentification, TLS)', 'Tester le montage sur des capteurs physiques, au-delà de la simulation Wokwi'],
      en: ['Move from the public broker to a secured one (authentication, TLS)', 'Test the setup on physical sensors, beyond the Wokwi simulation'],
    },
  },
};
