import type { Project } from './types';

// Source : app.py et captures du dépôt yassir-drissi/RAG_Chatbot.
export const project: Project = {
  slug: 'chatbot-rag-cv',
  order: 8,
  category: 'genai',
  year: '2026',
  title: { fr: 'Chatbot RAG sur CV', en: 'RAG chatbot for CVs' },
  context: { fr: 'Projet académique · filière 4IASDR', en: 'Academic project · 4IASDR track' },
  problem: {
    fr: 'Interroger un CV en langage naturel et obtenir des réponses fondées uniquement sur son contenu, sans hors-sujet.',
    en: 'Query a CV in natural language and get answers grounded only in its content, with no off-topic replies.',
  },
  did: {
    fr: 'Pipeline RAG complet : chargement PDF/DOCX, découpage, embeddings Gemini, index FAISS, recherche sémantique, prompt et filtre des questions hors périmètre.',
    en: 'Full RAG pipeline: PDF/DOCX loading, chunking, Gemini embeddings, FAISS index, semantic search, prompting and an out-of-scope question filter.',
  },
  result: {
    fr: 'Application Streamlit qui répond aux questions sur le CV chargé (ex. liste des projets) et refuse les questions hors sujet.',
    en: 'A Streamlit app that answers questions about the uploaded CV (e.g. listing its projects) and declines off-topic questions.',
  },
  stack: ['Python', 'Streamlit', 'LangChain', 'Gemini', 'FAISS', 'RAG'],
  links: { code: 'https://github.com/yassir-drissi/RAG_Chatbot' },
  images: [
    {
      src: '/images/projets/rag-cv-demo.webp',
      width: 1600,
      height: 774,
      alt: {
        fr: "Interface Streamlit du chatbot : le CV est chargé et l'assistant liste les projets qu'il contient",
        en: 'Streamlit interface of the chatbot: the CV is loaded and the assistant lists the projects it contains',
      },
    },
  ],
  details: {
    problem: {
      fr: "Un recruteur ou un candidat veut retrouver vite une information dans un CV. Un modèle de langage seul risque d'inventer : il faut l'obliger à s'appuyer sur le document et à refuser ce qui sort du sujet.",
      en: 'A recruiter or candidate wants to find information in a CV quickly. A language model on its own may make things up: it has to be forced to rely on the document and to decline anything off-topic.',
    },
    data: {
      fr: ["CV au format PDF ou DOCX, chargé par l'utilisateur"],
      en: ['CV in PDF or DOCX format, uploaded by the user'],
    },
    approach: {
      fr: [
        'Pipeline en 9 étapes : chargement, prétraitement, découpage, embedding, indexation FAISS, recherche sémantique, construction du prompt, génération (Gemini), sécurité métier',
        'Découpage en blocs de 500 caractères avec 80 de chevauchement ; 4 passages récupérés par question',
        "Modèles d'embedding et de chat Gemini, avec repli automatique sur d'autres versions en cas d'indisponibilité",
        'Filtre par mots-clés pour écarter les questions hors périmètre (météo, cuisine, actualité…)',
        "Messages d'erreur compréhensibles pour l'utilisateur (clé API invalide, quota…)",
      ],
      en: [
        '9-step pipeline: loading, preprocessing, chunking, embedding, FAISS indexing, semantic search, prompt building, generation (Gemini), domain safety',
        '500-character chunks with 80 overlap; 4 passages retrieved per question',
        'Gemini embedding and chat models, with automatic fallback to other versions when one is unavailable',
        'Keyword filter to reject out-of-scope questions (weather, cooking, news…)',
        'User-friendly error messages (invalid API key, quota…)',
      ],
    },
    results: {
      fr: ['Application fonctionnelle : le chatbot répond à partir du CV chargé, par exemple en listant les projets mentionnés'],
      en: ['Working application: the chatbot answers from the uploaded CV, for example by listing the projects it mentions'],
    },
    improve: {
      fr: [
        "Constituer un jeu de questions de test pour mesurer la justesse des réponses",
        "Remplacer le filtre par mots-clés par un contrôle de pertinence fondé sur la similarité avec le CV",
      ],
      en: [
        "Build a set of test questions to measure answer accuracy",
        "Replace the keyword filter with a relevance check based on similarity to the CV",
      ],
    },
  },
};
