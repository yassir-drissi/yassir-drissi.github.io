import type { Project } from './types';

export const project: Project = {
  slug: 'risque-longevite',
  order: 4,
  category: 'data-science',
  year: '2026',
  title: { fr: 'Modélisation du risque de longévité', en: 'Longevity risk modelling' },
  context: { fr: 'Mission freelance', en: 'Freelance project' },
  problem: {
    fr: "Mesurer l'effet de l'allongement de l'espérance de vie sur les provisions d'un portefeuille de rentes viagères.",
    en: 'Measure how rising life expectancy affects the reserves of a life-annuity portfolio.',
  },
  did: {
    fr: 'Comparaison de 6 modèles de mortalité sur les données HMD Canada 1950–2019, puis projection jusqu’en 2060.',
    en: 'Compared 6 mortality models on HMD Canada data (1950–2019), then projected to 2060.',
  },
  result: {
    fr: 'Lee-Carter retenu (13 % d’erreur hors échantillon contre 26–28 %) ; provisions +5 % en 2030 et +14 % en 2060, soit ~621 M DH d’écart.',
    en: 'Lee-Carter selected (13% out-of-sample error vs 26–28%); reserves +5% in 2030 and +14% in 2060, a gap of about MAD 621M.',
  },
  metrics: [
    { value: '13 %', label: { fr: "d'erreur hors échantillon (Lee-Carter)", en: 'out-of-sample error (Lee-Carter)' } },
    { value: '+14 %', label: { fr: 'de provisions en 2060 vs table statique', en: 'reserves in 2060 vs static table' } },
    { value: '~621 M DH', label: { fr: "d'écart de provisions", en: 'reserve gap' } },
  ],
  stack: ['Lee-Carter', 'CBD', 'APC', 'Random Forest', 'XGBoost'],
  links: {},
  details: {
    problem: {
      fr: "Un assureur qui verse des rentes viagères s'expose au risque que ses assurés vivent plus longtemps que prévu. Une table de mortalité statique sous-estime ce risque : il fallait quantifier l'écart de provisions sur un portefeuille concret.",
      en: 'An insurer paying life annuities is exposed to policyholders living longer than expected. A static mortality table underestimates that risk: the task was to quantify the reserve gap on a concrete portfolio.',
    },
    data: {
      fr: ['Human Mortality Database (HMD), Canada, 1950–2019', 'Portefeuille de 5 000 rentes viagères'],
      en: ['Human Mortality Database (HMD), Canada, 1950–2019', 'Portfolio of 5,000 life annuities'],
    },
    approach: {
      fr: [
        '6 modèles comparés : Lee-Carter, CBD, APC, Random Forest, XGBoost…',
        'Évaluation hors échantillon',
        'Projection de la mortalité jusqu’en 2060 et calcul des provisions par rapport à une table statique',
      ],
      en: [
        '6 models compared: Lee-Carter, CBD, APC, Random Forest, XGBoost…',
        'Out-of-sample evaluation',
        'Mortality projected to 2060 and reserves computed against a static table',
      ],
    },
    results: {
      fr: [
        "Lee-Carter retenu : 13 % d'erreur hors échantillon, contre 26–28 % pour Random Forest et XGBoost",
        'Provisions supérieures de 5 % en 2030 à 14 % en 2060 par rapport à une table statique',
        "Soit environ 621 M DH d'écart sur 5 000 rentes viagères",
      ],
      en: [
        'Lee-Carter selected: 13% out-of-sample error, versus 26–28% for Random Forest and XGBoost',
        'Reserves 5% higher in 2030 and 14% higher in 2060 than with a static table',
        'A gap of about MAD 621M on 5,000 life annuities',
      ],
    },
    improve: {
      fr: [
        "Quantifier l'incertitude des projections (intervalles de confiance) plutôt qu'un seul scénario central",
        "Tester la sensibilité des provisions à la population de référence, au-delà des données canadiennes",
      ],
      en: [
        "Quantify projection uncertainty (confidence intervals) rather than a single central scenario",
        "Test how sensitive the reserves are to the reference population, beyond Canadian data",
      ],
    },
  },
};
