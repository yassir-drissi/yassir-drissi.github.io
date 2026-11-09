// Mentions légales (page /mentions-legales/ et /en/legal-notice/).
import type { L } from './types';
import { profile } from './profile';

export const legalSections: Array<{ title: L; body: L }> = [
  {
    title: { fr: 'Éditeur du site', en: 'Site publisher' },
    body: {
      fr: `Ce site est le portfolio personnel de ${profile.name}, étudiant ingénieur, Rabat (Maroc). Contact : ${profile.email}.`,
      en: `This website is the personal portfolio of ${profile.name}, engineering student, Rabat (Morocco). Contact: ${profile.email}.`,
    },
  },
  {
    title: { fr: 'Hébergement', en: 'Hosting' },
    body: {
      fr: 'GitHub Pages, service de GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.',
      en: 'GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.',
    },
  },
  {
    title: { fr: 'Données personnelles', en: 'Personal data' },
    body: {
      fr: "Le site n'utilise ni cookie ni outil de mesure d'audience. Les messages envoyés via le formulaire de contact transitent par le service Web3Forms et ne sont utilisés que pour vous répondre. Vous pouvez demander leur suppression par e-mail.",
      en: 'This website uses no cookies and no analytics. Messages sent through the contact form go through the Web3Forms service and are only used to reply to you. You can ask for their deletion by email.',
    },
  },
  {
    title: { fr: 'Crédits', en: 'Credits' },
    body: {
      fr: "Modèle Nova conçu par WebScale (webscale.pl) et distribué par ThemeWagon, utilisé conformément à sa licence. Icônes Phosphor. Les captures d'écran illustrent des projets réalisés par l'auteur ; les images de test visibles dans certaines captures proviennent des dépôts des projets concernés.",
      en: 'Nova template designed by WebScale (webscale.pl) and distributed by ThemeWagon, used under its license. Phosphor icons. Screenshots show projects built by the author; test images visible in some screenshots come from the repositories of the projects concerned.',
    },
  },
];
