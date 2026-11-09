import type { Project } from './types';

// Source : README et sorties du notebook du dépôt yassir-drissi/Analyse_Sentiments_Avis_Clients.
export const project: Project = {
  slug: 'analyse-sentiments-avis',
  order: 13,
  category: 'data-science',
  year: '2026',
  title: { fr: 'Analyse de sentiments d’avis clients', en: 'Customer review sentiment analysis' },
  context: { fr: 'Projet de Data Mining', en: 'Data mining project' },
  problem: {
    fr: 'Classer automatiquement des avis clients en positifs ou négatifs, et comparer des approches classiques à un modèle contextuel.',
    en: 'Automatically classify customer reviews as positive or negative, and compare classic approaches with a contextual model.',
  },
  did: {
    fr: 'Nettoyage NLP (lemmatisation, négations conservées), BoW et TF-IDF, régression logistique et Naive Bayes, puis DistilBERT.',
    en: 'NLP cleaning (lemmatisation, negations kept), BoW and TF-IDF, logistic regression and Naive Bayes, then DistilBERT.',
  },
  result: {
    fr: 'Régression logistique : 90 % de justesse mais 0,44 de rappel sur les avis négatifs ; DistilBERT : 0,90 de rappel sur ces mêmes avis.',
    en: 'Logistic regression: 90% accuracy but 0.44 recall on negative reviews; DistilBERT: 0.90 recall on those reviews.',
  },
  metrics: [
    { value: '90 %', label: { fr: 'de justesse (régression logistique)', en: 'accuracy (logistic regression)' } },
    { value: '0,90', label: { fr: 'de rappel sur les avis négatifs (DistilBERT)', en: 'recall on negative reviews (DistilBERT)' } },
  ],
  stack: ['Python', 'NLTK', 'scikit-learn', 'Transformers', 'DistilBERT', 'Seaborn'],
  links: { code: 'https://github.com/yassir-drissi/Analyse_Sentiments_Avis_Clients' },
  images: [
    {
      src: '/images/projets/sentiment-matrice.webp',
      width: 499,
      height: 375,
      alt: {
        fr: 'Matrice de confusion de la régression logistique sur 3 671 avis de test',
        en: 'Confusion matrix of the logistic regression on 3,671 test reviews',
      },
    },
    {
      src: '/images/projets/sentiment-nuage-negatif.webp',
      width: 790,
      height: 427,
      alt: { fr: 'Nuage de mots des avis négatifs', en: 'Word cloud of negative reviews' },
    },
  ],
  details: {
    problem: {
      fr: "Une entreprise reçoit trop d'avis pour les lire un à un. L'enjeu est de repérer les avis négatifs, minoritaires, que les modèles simples ont tendance à manquer.",
      en: 'A company receives too many reviews to read them one by one. The challenge is to catch negative reviews, which are a minority and tend to be missed by simple models.',
    },
    data: {
      fr: [
        'Amazon Fine Food Reviews (Kaggle), échantillon de 20 000 avis',
        'Note > 3 : positif ; note < 3 : négatif ; avis neutres retirés',
        '14 680 avis en entraînement, 3 671 en test',
      ],
      en: [
        'Amazon Fine Food Reviews (Kaggle), sample of 20,000 reviews',
        'Score > 3: positive; score < 3: negative; neutral reviews removed',
        '14,680 training reviews, 3,671 test reviews',
      ],
    },
    approach: {
      fr: [
        'Nettoyage : minuscules, suppression des caractères non alphabétiques, tokenisation, stopwords, lemmatisation',
        'Négations (not, no, never…) volontairement conservées pour ne pas inverser le sens',
        'Représentations BoW et TF-IDF limitées à 5 000 termes',
        'Régression logistique et Naive Bayes, puis DistilBERT (distilbert-base-uncased-finetuned-sst-2-english) sur 1 000 avis',
      ],
      en: [
        'Cleaning: lowercasing, removing non-alphabetic characters, tokenisation, stopwords, lemmatisation',
        'Negations (not, no, never…) deliberately kept so meaning is not inverted',
        'BoW and TF-IDF representations limited to 5,000 terms',
        'Logistic regression and Naive Bayes, then DistilBERT (distilbert-base-uncased-finetuned-sst-2-english) on 1,000 reviews',
      ],
    },
    results: {
      fr: [
        'Régression logistique : 90 % de justesse, rappel de 0,44 sur les avis négatifs',
        'Naive Bayes : 85 % de justesse, rappel de 0,15 sur les avis négatifs',
        'DistilBERT (1 000 avis) : 86 % de justesse, rappel de 0,90 sur les avis négatifs',
      ],
      en: [
        'Logistic regression: 90% accuracy, 0.44 recall on negative reviews',
        'Naive Bayes: 85% accuracy, 0.15 recall on negative reviews',
        'DistilBERT (1,000 reviews): 86% accuracy, 0.90 recall on negative reviews',
      ],
    },
    improve: {
      fr: [
        'Rééquilibrer les classes (pondération ou seuil) pour améliorer le rappel des modèles classiques sur les avis négatifs',
        'Évaluer DistilBERT sur le même jeu de test complet que les modèles classiques',
      ],
      en: [
        'Rebalance classes (weighting or threshold) to improve the classic models’ recall on negative reviews',
        'Evaluate DistilBERT on the same full test set as the classic models',
      ],
    },
  },
};
