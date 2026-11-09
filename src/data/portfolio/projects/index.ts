// Liste de tous les projets. Pour ajouter un projet : créer un fichier sur le
// modèle de hayati.ts, puis l'importer ci-dessous.
import type { Project } from './types';
import { project as cimentsEye } from './ciments-eye';
import { project as ePress } from './e-press';
import { project as scoringCredit } from './scoring-credit';
import { project as risqueLongevite } from './risque-longevite';
import { project as mlopsFraude } from './mlops-fraude';
import { project as hayati } from './hayati';
import { project as skywatch } from './skywatch-maroc';
import { project as ragCv } from './rag-cv';
import { project as sentiment } from './sentiment-avis';
import { project as parking } from './parking-iot';
import { alzheimer, crimewatch, raceflow, meteo, monAnnonce } from './a-completer';

export * from './types';

/** Tous les projets, brouillons compris. */
export const allProjects: Project[] = [
  cimentsEye,
  ePress,
  scoringCredit,
  risqueLongevite,
  mlopsFraude,
  hayati,
  skywatch,
  ragCv,
  meteo,
  alzheimer,
  crimewatch,
  raceflow,
  sentiment,
  parking,
  monAnnonce,
].sort((a, b) => a.order - b.order);

/** Projets publiés : les brouillons (`draft: true`) n'apparaissent nulle part sur le site. */
export const projects: Project[] = allProjects.filter((p) => !p.draft);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
