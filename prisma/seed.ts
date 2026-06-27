import { db } from '../src/lib/db'

async function seed() {
  // Create admin user
  const admin = await db.user.upsert({
    where: { email: 'admin@yamecenes.com' },
    update: {},
    create: {
      email: 'admin@yamecenes.com',
      name: 'Administrateur YaMécènes',
      role: 'admin',
      city: 'Dakar',
      country: 'Sénégal',
    },
  })

  // Create sample porteurs
  const porteur1 = await db.user.upsert({
    where: { email: 'amara@exemple.sn' },
    update: {},
    create: {
      email: 'amara@exemple.sn',
      name: 'Amara Diallo',
      role: 'porteur',
      phone: '+221771234567',
      city: 'Dakar',
      country: 'Sénégal',
      mobileMoneyConfig: JSON.stringify({ operator: 'Orange Money', number: '+221771234567' }),
    },
  })

  const porteur2 = await db.user.upsert({
    where: { email: 'fatou@exemple.sn' },
    update: {},
    create: {
      email: 'fatou@exemple.sn',
      name: 'Fatou Ndiaye',
      role: 'porteur',
      phone: '+221789876543',
      city: 'Saint-Louis',
      country: 'Sénégal',
      mobileMoneyConfig: JSON.stringify({ operator: 'Wave', number: '+221789876543' }),
    },
  })

  const porteur3 = await db.user.upsert({
    where: { email: 'ibrahima@exemple.sn' },
    update: {},
    create: {
      email: 'ibrahima@exemple.sn',
      name: 'Ibrahima Fall',
      role: 'porteur',
      phone: '+221761112233',
      city: 'Thiès',
      country: 'Sénégal',
      mobileMoneyConfig: JSON.stringify({ operator: 'Free Money', number: '+221761112233' }),
    },
  })

  // Create sample mécènes
  const mecene1 = await db.user.upsert({
    where: { email: 'marie@exemple.fr' },
    update: {},
    create: {
      email: 'marie@exemple.fr',
      name: 'Marie Dupont',
      role: 'mecene',
      city: 'Paris',
      country: 'France',
    },
  })

  const mecene2 = await db.user.upsert({
    where: { email: 'jean@exemple.sn' },
    update: {},
    create: {
      email: 'jean@exemple.sn',
      name: 'Jean-Pierre Sarr',
      role: 'mecene',
      city: 'Dakar',
      country: 'Sénégal',
    },
  })

  // Create access codes
  const codes = []
  for (let i = 0; i < 10; i++) {
    const code = await db.accessCode.create({
      data: {
        type: i < 7 ? 'direct' : 'lot',
        issuedBy: i < 7 ? 'admin@yamecenes.com' : 'partenaire@eglise.sn',
        status: 'available',
      },
    })
    codes.push(code)
  }

  // Use first code for porteur1's cause
  await db.accessCode.update({
    where: { id: codes[0].id },
    data: { status: 'used', usedBy: porteur1.id, usedAt: new Date() },
  })

  await db.accessCode.update({
    where: { id: codes[1].id },
    data: { status: 'used', usedBy: porteur2.id, usedAt: new Date() },
  })

  await db.accessCode.update({
    where: { id: codes[2].id },
    data: { status: 'used', usedBy: porteur3.id, usedAt: new Date() },
  })

  // Create causes
  const cause1 = await db.cause.create({
    data: {
      slug: 'ecole-coranique-medina',
      title: 'École coranique de Médina — Toiture urgente',
      summary: 'La toiture de notre école coranique s\'est effondrée lors des dernières pluies. 120 enfants n\'ont plus de salle de cours.',
      description: 'Notre école coranique de Médina, à Dakar, accueille 120 enfants âgés de 4 à 15 ans. Depuis les fortes pluies de septembre, la toiture de la salle principale s\'est effondrée. Les cours se font actuellement en plein air, ce qui est insupportable pendant la saison des pluies. Nous avons besoin de 2 500 000 FCFA pour refaire la toiture en matériaux durables et acheter 60 tables-bancs. Le projet sera suivi par un comité de parents d\'élèves et un maître d\'œuvre local vérifié.',
      type: 'éducation',
      city: 'Dakar',
      country: 'Sénégal',
      reference: 'Imam Abdoulaye Niang, Mosquée de Médina',
      goalAmount: 2500000,
      status: 'active',
      porteurId: porteur1.id,
      accessCode: codes[0].code,
      milestones: {
        create: [
          { label: 'Premier 500 000 FCFA — Achat matériaux de base', target: 500000 },
          { label: '1 000 000 FCFA — Début des travaux de toiture', target: 1000000 },
          { label: '2 000 000 FCFA — Livraison des tables-bancs', target: 2000000 },
          { label: '2 500 000 FCFA — Achèvement complet', target: 2500000 },
        ],
      },
    },
  })

  const cause2 = await db.cause.create({
    data: {
      slug: 'artisanat-femmes-saint-louis',
      title: 'Coopérative de femmes artisans — Saint-Louis',
      summary: '15 femmes de Saint-Louis veulent lancer une coopérative de tissage et de bijoux artisanaux pour subvenir aux besoins de leurs familles.',
      description: 'Dans le quartier de Guet Ndar à Saint-Louis, 15 femmes talentueuses pratiquent le tissage traditionnel et la création de bijoux à partir de matériaux recyclés. Elles souhaitent formaliser leur activité en coopérative, acheter 5 métiers à tisser professionnels, des matières premières en gros, et louer un atelier partagé. Le budget de 1 800 000 FCFA couvrira l\'équipement, le premier approvisionnement et 3 mois de loyer. La coopérative sera enregistrée légalement et un plan comptable sera mis en place.',
      type: 'entrepreneuriat',
      city: 'Saint-Louis',
      country: 'Sénégal',
      reference: 'Association Femmes du Nord, Mme Aïssa Diop',
      goalAmount: 1800000,
      status: 'active',
      porteurId: porteur2.id,
      accessCode: codes[1].code,
      milestones: {
        create: [
          { label: '600 000 FCFA — Achat des métiers à tisser', target: 600000 },
          { label: '1 200 000 FCFA — Matières premières + atelier', target: 1200000 },
          { label: '1 800 000 FCFA — Lancement officiel de la coopérative', target: 1800000 },
        ],
      },
    },
  })

  const cause3 = await db.cause.create({
    data: {
      slug: 'puit-village-thies',
      title: 'Forage d\'un puit au village de Ndioum',
      summary: 'Le village de Ndioum près de Thiès n\'a pas accès à l\'eau potable. 300 personnes marchent 3 km chaque jour pour s\'approvisionner.',
      description: 'Le village de Ndioum, situé à 30 km de Thiès, compte environ 300 habitants qui n\'ont pas accès à l\'eau potable. Les femmes et les enfants marchent 3 kilomètres chaque jour pour atteindre le puit le plus proche, dont l\'eau n\'est pas toujours potable. Nous avons contacté une entreprise de forage locale qui a réalisé une étude hydrogéologique positive. Le forage coûte 3 500 000 FCFA et inclut l\'installation d\'une pompe solaire et d\'un réservoir de 5 000 litres. Un comité villageois sera formé pour la maintenance.',
      type: 'eau & santé',
      city: 'Thiès',
      country: 'Sénégal',
      reference: 'Chef de village Mamadou Sy, Conseil rural de Ndioum',
      goalAmount: 3500000,
      status: 'active',
      porteurId: porteur3.id,
      accessCode: codes[2].code,
      milestones: {
        create: [
          { label: '1 000 000 FCFA — Étude & démarrage forage', target: 1000000 },
          { label: '2 500 000 FCFA — Installation pompe solaire', target: 2500000 },
          { label: '3 500 000 FCFA — Réservoir + formation comité', target: 3500000 },
        ],
      },
    },
  })

  // Create some donations
  const don1 = await db.don.create({
    data: {
      causeId: cause1.id,
      meceneId: mecene1.id,
      amount: 50000,
      commission: 2500,
      netPorteur: 47500,
      method: 'paypal',
      status: 'confirmed',
      displayName: 'Marie D.',
    },
  })

  const don2 = await db.don.create({
    data: {
      causeId: cause1.id,
      meceneId: mecene2.id,
      amount: 25000,
      commission: 1250,
      netPorteur: 23750,
      method: 'mobile_money',
      status: 'confirmed',
      displayName: 'Jean-Pierre S.',
    },
  })

  const don3 = await db.don.create({
    data: {
      causeId: cause2.id,
      meceneId: mecene1.id,
      amount: 100000,
      commission: 5000,
      netPorteur: 95000,
      method: 'paypal',
      status: 'confirmed',
      displayName: 'Un ami anonyme',
    },
  })

  const don4 = await db.don.create({
    data: {
      causeId: cause3.id,
      meceneId: mecene2.id,
      amount: 75000,
      commission: 3750,
      netPorteur: 71250,
      method: 'mobile_money',
      status: 'confirmed',
      displayName: 'Jean-Pierre S.',
    },
  })

  // Create poems for confirmed donations
  await db.poem.create({
    data: {
      donId: don1.id,
      content: `Quand la main qui donne rencontre la main qui construit,
Un pont d\'or s\'élève au-dessus des rivières.
Marie, ton geste est une graine plantée dans la terre de Médina,
Où cent vingt enfants retrouveront l\'abri de leurs rêves.

Le griot dit : celui qui arrose la racine de l\'arbre
Ne voit pas toujours le fruit, mais il sait
Que son nom sera murmuré par les feuilles
Quand le vent de l\'école passera sur la colline.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don2.id,
      content: `Jean-Pierre, fils du terroir,
Ton don est comme la première pluie d\'hivernage —
Elle ne fait pas naître la récolte,
Mais elle promet au sol qu\'il ne sera pas oublié.

Les enfants de Médina chanteront,
Même sans connaître ton visage,
Car dans chaque planche de leur nouvelle toiture,
Il y a un morceau de ta générosité.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don3.id,
      content: `À celle qui a choisi de ne pas signer,
Le griot garde un nom secret dans sa mémoire :
« Celle dont les mains tissent des horizons »
Car dans les métiers de Guet Ndar,
Ce sont ses fils qui travailleront.

Quinze femmes, un atelier, un avenir —
Et au centre, un fil d\'or qui relie
La rive de la générosité à celle de la dignité.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don4.id,
      content: `Quand l\'eau jaillit du désert,
C\'est qu\'un homme a cru avant la source.
Jean-Pierre, ton don creuse le sol de Ndioum
Où dormiront trois cent âmes assoiffées de dignité.

Le puit n\'est pas un trou dans la terre,
C\'est un trou dans le silence de l\'indifférence.
Et chaque goutte qui en sortira
Portera en elle l\'écho de ton nom.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  // Create ceintures for mécènes
  await db.ceinture.create({
    data: {
      meceneId: mecene1.id,
      level: 'jaune',
      note: 'Premier palier atteint : 150 000 FCFA de dons cumulés',
    },
  })

  await db.ceinture.create({
    data: {
      meceneId: mecene2.id,
      level: 'blanche',
      note: 'Premier don enregistré sur la plateforme',
    },
  })

  // Update milestones reached based on donations
  const cause1Total = 50000 + 25000 // 75000
  await db.milestone.updateMany({
    where: { causeId: cause1.id, target: { lte: cause1Total } },
    data: { reached: true, reachedAt: new Date() },
  })

  const cause2Total = 100000
  await db.milestone.updateMany({
    where: { causeId: cause2.id, target: { lte: cause2Total } },
    data: { reached: true, reachedAt: new Date() },
  })

  const cause3Total = 75000
  await db.milestone.updateMany({
    where: { causeId: cause3.id, target: { lte: cause3Total } },
    data: { reached: true, reachedAt: new Date() },
  })

  console.log('✅ Seed completed successfully')
  console.log(`   Admin: ${admin.email}`)
  console.log(`   Porteurs: ${porteur1.name}, ${porteur2.name}, ${porteur3.name}`)
  console.log(`   Mécènes: ${mecene1.name}, ${mecene2.name}`)
  console.log(`   Access codes: ${codes.length} created`)
  console.log(`   Causes: 3 active`)
  console.log(`   Dons: 4 confirmed`)
  console.log(`   Poems: 4 published`)
}

seed()
  .catch(console.error)
  .finally(() => db.$disconnect())
