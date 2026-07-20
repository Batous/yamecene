export type Locale = 'fr' | 'en'

const copy = {
  fr: {
    home: 'Accueil', submit: 'Soumettre un projet', access: "Code d'acces", admin: 'Administration',
    verified: 'Projets verifies', support: 'Soutenir un projet', supportProject: 'Soutenir ce projet',
    accessCode: "Obtenir un code d'acces", headline: 'Chaque projet trouve un mecene.',
    intro: 'YaMecenes connecte les createurs et les porteurs de projets avec des donateurs engages. Votre generosite soutient des familles, des createurs, des chercheurs, des ecoles et des communautes en RDC et dans la diaspora congolaise.',
    projects: 'Projets a soutenir', view: 'Voir le projet', raised: 'collecte', goal: 'objectif', contributors: 'mecenes',
    trust: 'Chaque projet est verifie avec une reference communautaire ou institutionnelle. Les codes d acces garantissent la qualite et la transparence. Une commission de 5% finance le fonctionnement de la plateforme.',
    language: 'EN', category: 'Categorie', secure: 'Paiements adaptes a la RDC et a la diaspora',
  },
  en: {
    home: 'Home', submit: 'Submit a project', access: 'Access code', admin: 'Administration',
    verified: 'Verified projects', support: 'Support a project', supportProject: 'Support this project',
    accessCode: 'Get an access code', headline: 'Every project finds a patron.',
    intro: 'YaMecenes connects creators and project-bearers with committed donors. Your generosity supports families, creators, researchers, schools, and communities in the DRC and the Congolese diaspora.',
    projects: 'Projects to support', view: 'View project', raised: 'raised', goal: 'goal', contributors: 'patrons',
    trust: 'Every project is verified through a community or institutional reference. Access codes ensure quality and transparency. A 5% fee funds the platform operations.',
    language: 'FR', category: 'Category', secure: 'Payments built for the DRC and diaspora',
  },
} as const

export function words(locale: Locale) { return copy[locale] }
