import { db } from '../src/lib/db'
import { Prisma } from '../src/generated/prisma'

const owners = [
  { email: 'collectif.limete@example.org', name: 'Collectif numérique de Limete', city: 'Kinshasa', country: 'République démocratique du Congo' },
  { email: 'mobilite.goma@example.org', name: 'Réseau Santé Mobile Goma', city: 'Goma', country: 'République démocratique du Congo' },
  { email: 'cooperative.lubumbashi@example.org', name: 'Coopérative Tujenge', city: 'Lubumbashi', country: 'République démocratique du Congo' },
  { email: 'agri.saintlouis@example.org', name: 'Coopérative Ndar Durable', city: 'Saint-Louis', country: 'Sénégal' },
  { email: 'sante.bafoussam@example.org', name: 'Réseau Santé des Hauts-Plateaux', city: 'Bafoussam', country: 'Cameroun' },
  { email: 'atelier.lille@example.org', name: 'Atelier Matières Communes', city: 'Lille', country: 'France' },
  { email: 'formation.porto@example.org', name: 'Compétences Ouvertes Porto', city: 'Porto', country: 'Portugal' },
  { email: 'research.pune@example.org', name: 'Laboratoire Eau Locale', city: 'Pune', country: 'Inde' },
  { email: 'mobilidade.recife@example.org', name: 'Rede Clínica Móvel Recife', city: 'Recife', country: 'Brésil' },
  { email: 'learning.amman@example.org', name: 'Atelier Apprendre Amman', city: 'Amman', country: 'Jordanie' },
] as const

const projects = [
  {
    slug: 'classes-numeriques-limete',
    title: 'Classes numériques et maintenance locale à Limete',
    summary: 'Former des jeunes à l’usage, à la réparation et à l’administration d’équipements numériques partagés.',
    description: 'Le projet crée deux espaces d’apprentissage numérique accessibles aux élèves et aux adultes en reconversion. Les participants suivent des modules pratiques, puis une équipe locale assure la maintenance et accompagne les nouveaux utilisateurs.',
    type: 'Education', projectFamily: 'development', city: 'Kinshasa', country: 'République démocratique du Congo',
    impactStatement: 'Former 180 participants en douze mois et certifier 20 jeunes capables d’assurer la maintenance des deux espaces.',
    autonomyPlan: 'Les ateliers avancés, la maintenance de proximité et les adhésions institutionnelles financeront le renouvellement du matériel et les formateurs.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'mixed', currency: 'CDF', goalAmount: 18000000,
    directPaymentDetails: { type: 'mobile_money', value: 'Compte de démonstration du collectif' }, ownerEmail: 'collectif.limete@example.org',
  },
  {
    slug: 'ambulance-communautaire-goma',
    title: 'Mobilité médicale communautaire à Goma',
    summary: 'Mettre en service une ambulance communautaire et former une équipe de coordination des transferts médicaux urgents.',
    description: 'Le dispositif organise les appels, les premiers gestes et les transferts vers les structures de soins partenaires. Il répond à une rupture immédiate de mobilité médicale tout en construisant un service partagé et traçable.',
    type: 'Sante', projectFamily: 'emergency', city: 'Goma', country: 'République démocratique du Congo',
    impactStatement: 'Réduire de 40 % le délai moyen de transfert et assurer au moins 60 transports médicaux sécurisés pendant les six premiers mois.',
    autonomyPlan: 'Après la phase d’urgence, les centres partenaires contribueront aux frais d’exploitation selon un barème solidaire et publieront un suivi mensuel.',
    evidenceStatus: 'pending', evidenceNotes: 'Besoin documenté par trois centres de santé partenaires et registre local des transferts non assurés.', evidenceUrls: [],
    paymentMode: 'aggregator', currency: 'USD', goalAmount: 32000, directPaymentDetails: Prisma.DbNull, ownerEmail: 'mobilite.goma@example.org',
  },
  {
    slug: 'poulailler-cooperatif-lubumbashi',
    title: 'Poulailler coopératif pour des cheffes de foyer à Lubumbashi',
    summary: 'Développer une production avicole locale créatrice de revenus durables pour trente cheffes de foyer.',
    description: 'La coopérative met en commun un élevage, un espace de transformation et un circuit de vente local. Chaque membre reçoit une formation en gestion, biosécurité et commercialisation avant de prendre part aux rotations de production.',
    type: 'Famille', projectFamily: 'development', city: 'Lubumbashi', country: 'République démocratique du Congo',
    impactStatement: 'Créer trente sources de revenus réguliers et produire 1 500 œufs par semaine après neuf mois d’activité.',
    autonomyPlan: 'La vente d’œufs, de volailles et de compost alimente un fonds de roulement collectif destiné aux intrants et aux prochains cycles.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'direct', currency: 'CDF', goalAmount: 24000000,
    directPaymentDetails: { type: 'bank_transfer', value: 'Compte coopératif de démonstration' }, ownerEmail: 'cooperative.lubumbashi@example.org',
  },
  {
    slug: 'irrigation-solaire-saint-louis',
    title: 'Irrigation solaire pour une coopérative maraîchère',
    summary: 'Sécuriser la production de légumes et réduire les coûts d’irrigation de petites exploitations à Saint-Louis.',
    description: 'La coopérative installe un pompage solaire mutualisé, organise la rotation des parcelles et forme ses membres à la maintenance préventive et au suivi de la consommation d’eau.',
    type: 'Entrepreneuriat', projectFamily: 'development', city: 'Saint-Louis', country: 'Sénégal',
    impactStatement: 'Augmenter de 35 % le volume commercialisable et réduire de moitié les dépenses énergétiques de quarante exploitations en un an.',
    autonomyPlan: 'Une retenue sur chaque vente finance la maintenance, le remplacement des pièces et l’extension progressive du réseau.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'mixed', currency: 'XOF', goalAmount: 18500000,
    directPaymentDetails: { type: 'mobile_money', value: 'Compte coopératif de démonstration' }, ownerEmail: 'agri.saintlouis@example.org',
  },
  {
    slug: 'agents-sante-bafoussam',
    title: 'Réseau durable d’agents de santé de proximité',
    summary: 'Former des agents communautaires pour le dépistage précoce, l’orientation et le suivi des maladies chroniques.',
    description: 'Des agents formés réalisent des permanences de proximité, utilisent un protocole commun et orientent les personnes à risque vers des centres partenaires. Le projet finance la formation, la supervision et un outil de suivi partagé.',
    type: 'Sante', projectFamily: 'development', city: 'Bafoussam', country: 'Cameroun',
    impactStatement: 'Former 45 agents et assurer 4 000 dépistages documentés avec un taux d’orientation suivie supérieur à 70 % en douze mois.',
    autonomyPlan: 'Les centres de santé partenaires financeront la supervision grâce à des conventions annuelles et à des forfaits de prévention accessibles.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'aggregator', currency: 'XAF', goalAmount: 22000000,
    directPaymentDetails: Prisma.DbNull, ownerEmail: 'sante.bafoussam@example.org',
  },
  {
    slug: 'atelier-textile-circulaire-lille',
    title: 'Atelier textile circulaire et insertion professionnelle',
    summary: 'Transformer des textiles inutilisés en produits durables tout en formant des personnes éloignées de l’emploi.',
    description: 'L’atelier collecte, trie et transforme des textiles locaux en accessoires et éléments d’aménagement. Le parcours associe savoir-faire artisanal, design, gestion de commande et accompagnement vers l’emploi.',
    type: 'Art & Creation', projectFamily: 'development', city: 'Lille', country: 'France',
    impactStatement: 'Former 36 personnes, détourner 8 tonnes de textiles du rebut et atteindre 300 ventes au cours de la première année.',
    autonomyPlan: 'Les ventes, les commandes d’entreprises et les ateliers payants couvriront progressivement les salaires, le loyer et les matières complémentaires.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'direct', currency: 'EUR', goalAmount: 48000,
    directPaymentDetails: { type: 'bank_transfer', value: 'Compte associatif de démonstration' }, ownerEmail: 'atelier.lille@example.org',
  },
  {
    slug: 'formation-renovation-porto',
    title: 'Formation professionnelle à la rénovation énergétique',
    summary: 'Préparer des adultes en reconversion aux métiers de l’isolation, du diagnostic et de la rénovation sobre en énergie.',
    description: 'Le parcours combine apprentissage en atelier, chantiers-écoles et accompagnement vers les entreprises locales. Les modules privilégient des techniques reproductibles et des matériaux disponibles dans la région.',
    type: 'Education', projectFamily: 'development', city: 'Porto', country: 'Portugal',
    impactStatement: 'Former 60 personnes et obtenir au moins 42 insertions professionnelles ou créations d’activité dans les dix-huit mois.',
    autonomyPlan: 'Les prestations des chantiers-écoles et les formations commandées par des entreprises financeront les cohortes suivantes.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'mixed', currency: 'EUR', goalAmount: 65000,
    directPaymentDetails: { type: 'bank_transfer', value: 'Compte de formation de démonstration' }, ownerEmail: 'formation.porto@example.org',
  },
  {
    slug: 'filtres-eau-pune',
    title: 'Recherche appliquée sur des filtres à eau réparables',
    summary: 'Tester et documenter un filtre domestique fabriqué avec des composants locaux et facilement remplaçables.',
    description: 'Une équipe pluridisciplinaire compare plusieurs matériaux, mesure la qualité de l’eau et publie un protocole ouvert de fabrication et de maintenance avec des artisans partenaires.',
    type: 'Recherche & Innovation', projectFamily: 'development', city: 'Pune', country: 'Inde',
    impactStatement: 'Valider trois prototypes sur 200 foyers pilotes et publier des résultats reproductibles sur la qualité, le coût et la durée de vie.',
    autonomyPlan: 'Des ateliers locaux fabriqueront les filtres sous licence ouverte et financeront le contrôle qualité par une marge intégrée au prix de vente.',
    evidenceStatus: 'not_required', evidenceNotes: null, evidenceUrls: [], paymentMode: 'aggregator', currency: 'USD', goalAmount: 42000,
    directPaymentDetails: Prisma.DbNull, ownerEmail: 'research.pune@example.org',
  },
  {
    slug: 'clinique-mobile-recife',
    title: 'Continuité des soins par clinique mobile à Recife',
    summary: 'Rétablir rapidement les tournées médicales dans des quartiers isolés après des inondations majeures.',
    description: 'Une unité mobile assure les consultations prioritaires, le renouvellement des traitements et l’orientation vers les structures disponibles. Les tournées sont coordonnées avec les équipes municipales et les associations de quartier.',
    type: 'Sante', projectFamily: 'emergency', city: 'Recife', country: 'Brésil',
    impactStatement: 'Assurer 1 200 consultations et rétablir le suivi thérapeutique de 300 patients chroniques pendant les quatre premiers mois.',
    autonomyPlan: 'À la fin de la réponse immédiate, l’unité intégrera un calendrier partagé financé par les centres partenaires et des prestations de prévention.',
    evidenceStatus: 'pending', evidenceNotes: 'Cartographie des quartiers isolés et besoins consolidés par les équipes locales de santé après les inondations.', evidenceUrls: [],
    paymentMode: 'mixed', currency: 'USD', goalAmount: 55000,
    directPaymentDetails: { type: 'bank_transfer', value: 'Compte opérationnel de démonstration' }, ownerEmail: 'mobilidade.recife@example.org',
  },
  {
    slug: 'education-mobile-amman',
    title: 'Classes mobiles pour adolescents temporairement déscolarisés',
    summary: 'Déployer des espaces d’apprentissage temporaires avec suivi pédagogique et retour organisé vers les établissements.',
    description: 'Des équipes éducatives mobiles proposent des séances structurées, évaluent les acquis et coordonnent la réintégration scolaire. Le dispositif cible une interruption récente et documentée de l’accès aux cours.',
    type: 'Communaute & Solidarite', projectFamily: 'emergency', city: 'Amman', country: 'Jordanie',
    impactStatement: 'Maintenir un parcours éducatif pour 240 adolescents et réintégrer au moins 75 % d’entre eux dans un établissement sous six mois.',
    autonomyPlan: 'Les ressources pédagogiques seront transférées aux écoles partenaires et les médiateurs formés rejoindront leurs équipes de soutien permanentes.',
    evidenceStatus: 'pending', evidenceNotes: 'Listes anonymisées des adolescents concernés et attestations de capacité fournies par les établissements partenaires.', evidenceUrls: [],
    paymentMode: 'aggregator', currency: 'USD', goalAmount: 38000,
    directPaymentDetails: Prisma.DbNull, ownerEmail: 'learning.amman@example.org',
  },
]

async function seed() {
  const ownerIds = new Map<string, string>()

  for (const owner of owners) {
    const user = await db.user.upsert({
      where: { email: owner.email },
      update: { name: owner.name, city: owner.city, country: owner.country, role: 'porteur' },
      create: { ...owner, role: 'porteur' },
    })
    ownerIds.set(owner.email, user.id)
  }

  for (const project of projects) {
    const { ownerEmail, ...data } = project
    const porteurId = ownerIds.get(ownerEmail)
    if (!porteurId) throw new Error(`Missing owner for ${project.slug}`)

    await db.cause.upsert({
      where: { slug: project.slug },
      update: { ...data, porteurId, status: 'active' },
      create: { ...data, porteurId, status: 'active' },
    })
  }

  console.log(`Seed completed: ${projects.length} international demonstration projects`)
}

seed()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => db.$disconnect())
