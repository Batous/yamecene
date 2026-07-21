export type Locale = 'fr' | 'en'

const copy = {
  fr: {
    home: 'Accueil', submit: 'Soumettre un projet', access: "Code d'acces", admin: 'Administration',
    verified: 'Projets verifies', support: 'Soutenir un projet', supportProject: 'Soutenir ce projet',
    accessCode: "Obtenir un code d'acces", headline: 'Chaque projet trouve un mecene.',
    intro: 'YaMecenes met en relation les porteurs de projets et les personnes qui souhaitent les soutenir. Créatrices et créateurs, chercheurs, artistes, entrepreneurs, associations, familles et communautés y trouvent une place.',
    projects: 'Projets a soutenir', view: 'Voir le projet', raised: 'collecte', goal: 'objectif', contributors: 'mecenes',
    trust: 'Chaque projet passe par une référence communautaire ou institutionnelle. Les codes d’accès, les jalons et la gouvernance renforcent la transparence.',
    language: 'EN', category: 'Categorie', secure: 'Des parcours de contribution flexibles',
  },
  en: {
    home: 'Home', submit: 'Submit a project', access: 'Access code', admin: 'Administration',
    verified: 'Verified projects', support: 'Support a project', supportProject: 'Support this project',
    accessCode: 'Get an access code', headline: 'Every project finds a patron.',
    intro: 'YaMecenes connects project owners with people who want to support them. Creators, researchers, artists, entrepreneurs, associations, families, and communities all have a place here.',
    projects: 'Projects to support', view: 'View project', raised: 'raised', goal: 'goal', contributors: 'patrons',
    trust: 'Every project is reviewed through a community or institutional reference. Access codes, milestones, and governance strengthen transparency.',
    language: 'FR', category: 'Category', secure: 'Flexible contribution paths',
  },
} as const

export function words(locale: Locale) { return copy[locale] }
