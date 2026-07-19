import { db } from '../src/lib/db'
import type { AccessCode } from '../src/generated/prisma'

async function seed() {
  const admin = await db.user.upsert({
    where: { email: 'admin@yamecenes.org' },
    update: {},
    create: {
      email: 'admin@yamecenes.org',
      name: 'Administrateur YaMécènes',
      role: 'admin',
      city: 'Kinshasa',
      country: 'République démocratique du Congo',
    },
  })

  const porteur1 = await db.user.upsert({
    where: { email: 'grace.matete@example.cd' },
    update: {},
    create: {
      email: 'grace.matete@example.cd',
      name: 'Grâce Mbala',
      role: 'porteur',
      phone: '+243812345678',
      city: 'Kinshasa',
      country: 'République démocratique du Congo',
      mobileMoneyConfig: JSON.stringify({ operator: 'Airtel Money', number: '+243812345678' }),
    },
  })

  const porteur2 = await db.user.upsert({
    where: { email: 'pasteur.kivu@example.cd' },
    update: {},
    create: {
      email: 'pasteur.kivu@example.cd',
      name: 'Pasteur Daniel Kambale',
      role: 'porteur',
      phone: '+243997654321',
      city: 'Goma',
      country: 'République démocratique du Congo',
      mobileMoneyConfig: JSON.stringify({ operator: 'M-Pesa', number: '+243997654321' }),
    },
  })

  const porteur3 = await db.user.upsert({
    where: { email: 'maman.esther@example.cd' },
    update: {},
    create: {
      email: 'maman.esther@example.cd',
      name: 'Esther Tshibangu',
      role: 'porteur',
      phone: '+243899112233',
      city: 'Lubumbashi',
      country: 'République démocratique du Congo',
      mobileMoneyConfig: JSON.stringify({ operator: 'Orange Money', number: '+243899112233' }),
    },
  })

  const mecene1 = await db.user.upsert({
    where: { email: 'anne.diaspora@example.fr' },
    update: {},
    create: {
      email: 'anne.diaspora@example.fr',
      name: 'Anne Mukendi',
      role: 'mecene',
      city: 'Paris',
      country: 'France',
    },
  })

  const mecene2 = await db.user.upsert({
    where: { email: 'patrick.kin@example.cd' },
    update: {},
    create: {
      email: 'patrick.kin@example.cd',
      name: 'Patrick Ilunga',
      role: 'mecene',
      city: 'Kinshasa',
      country: 'République démocratique du Congo',
    },
  })

  const codes: AccessCode[] = []
  for (let i = 0; i < 10; i++) {
    const code = await db.accessCode.create({
      data: {
        type: i < 7 ? 'direct' : 'lot',
        issuedBy: i < 7 ? 'admin@yamecenes.org' : 'partenaire@eglise.cd',
        status: 'available',
      },
    })
    codes.push(code)
  }

  for (const [index, porteur] of [porteur1, porteur2, porteur3].entries()) {
    await db.accessCode.update({
      where: { id: codes[index].id },
      data: { status: 'used', usedBy: porteur.id, usedAt: new Date() },
    })
  }

  const cause1 = await db.cause.create({
    data: {
      slug: 'kits-scolaires-matete',
      title: 'Kits scolaires pour les enfants de Matete',
      summary: 'Une paroisse de Matete veut équiper 80 enfants vulnérables avec cahiers, uniformes et frais de rentrée.',
      description: 'À Matete, plusieurs familles de notre communauté chrétienne traversent une période difficile. Nous souhaitons fournir des kits scolaires complets à 80 enfants afin qu’ils commencent l’année avec dignité. Le budget couvre les cahiers, uniformes, sacs, chaussures et une contribution aux frais de rentrée. Le projet sera suivi par le comité social de la paroisse et deux parents référents.',
      type: 'Éducation',
      city: 'Kinshasa',
      country: 'République démocratique du Congo',
      reference: 'Paroisse locale de Matete, comité social',
      goalAmount: 2500000,
      currency: 'CDF',
      status: 'active',
      porteurId: porteur1.id,
      accessCode: codes[0].code,
      milestones: {
        create: [
          { label: '700 000 CDF - Achat cahiers et fournitures', target: 700000 },
          { label: '1 500 000 CDF - Uniformes et chaussures', target: 1500000 },
          { label: '2 500 000 CDF - Frais de rentrée et distribution', target: 2500000 },
        ],
      },
    },
  })

  const cause2 = await db.cause.create({
    data: {
      slug: 'clinique-eglise-goma',
      title: 'Équipement de base pour la clinique d’église à Goma',
      summary: 'La clinique communautaire manque de tensiomètres, lits d’observation et médicaments essentiels.',
      description: 'À Goma, une petite clinique portée par une église locale reçoit chaque semaine des familles déplacées et des personnes sans accès régulier aux soins. La collecte permettra d’acheter deux lits d’observation, des tensiomètres, un stock de médicaments essentiels et du matériel de pansement. Les achats seront validés par le responsable médical et le conseil de l’église.',
      type: 'Santé',
      city: 'Goma',
      country: 'République démocratique du Congo',
      reference: 'Conseil de l’église locale de Goma',
      goalAmount: 1200,
      currency: 'USD',
      status: 'active',
      porteurId: porteur2.id,
      accessCode: codes[1].code,
      milestones: {
        create: [
          { label: '350 USD - Matériel de consultation', target: 350 },
          { label: '800 USD - Lits d’observation', target: 800 },
          { label: '1 200 USD - Médicaments essentiels', target: 1200 },
        ],
      },
    },
  })

  const cause3 = await db.cause.create({
    data: {
      slug: 'soutien-veuves-orphelins-lubumbashi',
      title: 'Soutien aux veuves et orphelins de Lubumbashi',
      summary: 'Un groupe de mamans chrétiennes prépare une aide alimentaire et un accompagnement scolaire pour 35 foyers.',
      description: 'À Lubumbashi, notre groupe de mamans accompagne des veuves et des orphelins recommandés par plusieurs cellules de prière. La collecte financera des colis alimentaires, une aide scolaire d’urgence et un petit fonds de transport pour les visites de suivi. Chaque distribution sera documentée avec un rapport simple et des confirmations des référents locaux.',
      type: 'Famille',
      city: 'Lubumbashi',
      country: 'République démocratique du Congo',
      reference: 'Groupe des mamans chrétiennes, Lubumbashi',
      goalAmount: 850,
      currency: 'EUR',
      status: 'active',
      porteurId: porteur3.id,
      accessCode: codes[2].code,
      milestones: {
        create: [
          { label: '300 EUR - Premiers colis alimentaires', target: 300 },
          { label: '600 EUR - Aide scolaire d’urgence', target: 600 },
          { label: '850 EUR - Suivi des 35 foyers', target: 850 },
        ],
      },
    },
  })

  const don1 = await db.don.create({
    data: {
      causeId: cause1.id,
      meceneId: mecene1.id,
      amount: 50000,
      currency: 'CDF',
      commission: 2500,
      netPorteur: 47500,
      method: 'paypal',
      status: 'confirmed',
      displayName: 'Anne M.',
    },
  })

  const don2 = await db.don.create({
    data: {
      causeId: cause1.id,
      meceneId: mecene2.id,
      amount: 25000,
      currency: 'CDF',
      commission: 1250,
      netPorteur: 23750,
      method: 'mobile_money',
      status: 'confirmed',
      displayName: 'Patrick I.',
    },
  })

  const don3 = await db.don.create({
    data: {
      causeId: cause2.id,
      meceneId: mecene1.id,
      amount: 100,
      currency: 'USD',
      commission: 5,
      netPorteur: 95,
      method: 'paypal',
      status: 'confirmed',
      displayName: 'Une sœur de la diaspora',
    },
  })

  const don4 = await db.don.create({
    data: {
      causeId: cause3.id,
      meceneId: mecene2.id,
      amount: 75,
      currency: 'EUR',
      commission: 3.75,
      netPorteur: 71.25,
      method: 'mobile_money',
      status: 'confirmed',
      displayName: 'Patrick I.',
    },
  })

  await db.poem.create({
    data: {
      donId: don1.id,
      content: `Anne, ton geste devient cahier, cartable et chemin ouvert.
Dans la classe de Matete, une enfant écrira son nom avec espérance.
La communauté se souviendra que la générosité traverse les distances
Et rejoint ceux qui avancent avec foi.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don2.id,
      content: `Patrick, ton don est une main tendue à la porte de l’école.
Il ne fait pas de bruit, mais il relève un enfant.
Que cette semence porte du fruit
Dans la maison, la paroisse et la ville.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don3.id,
      content: `À celle qui donne sans chercher la lumière,
La reconnaissance monte comme une prière simple.
Un lit, un soin, un médicament,
Et une famille retrouve courage pour demain.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.poem.create({
    data: {
      donId: don4.id,
      content: `Patrick, dans le panier partagé,
Il y a plus que du riz et de l’huile.
Il y a une parole qui dit aux veuves et aux orphelins :
Vous n’êtes pas seuls.`,
      generated: true,
      validated: true,
      published: true,
    },
  })

  await db.ceinture.create({
    data: {
      meceneId: mecene1.id,
      level: 'jaune',
      note: 'Premier palier atteint avec des dons cumulés en plusieurs devises',
    },
  })

  await db.ceinture.create({
    data: {
      meceneId: mecene2.id,
      level: 'blanche',
      note: 'Premier don enregistré sur la plateforme',
    },
  })

  for (const [causeId, total] of [
    [cause1.id, 75000],
    [cause2.id, 100000],
    [cause3.id, 75000],
  ] as const) {
    await db.milestone.updateMany({
      where: { causeId, target: { lte: total } },
      data: { reached: true, reachedAt: new Date() },
    })
  }

  console.log('Seed completed successfully')
  console.log(`   Admin: ${admin.email}`)
  console.log(`   Porteurs: ${porteur1.name}, ${porteur2.name}, ${porteur3.name}`)
  console.log(`   Mécènes: ${mecene1.name}, ${mecene2.name}`)
  console.log(`   Access codes: ${codes.length} created`)
  console.log('   Causes: 3 active')
  console.log('   Dons: 4 confirmed')
  console.log('   Poems: 4 published')
}

seed()
  .catch(console.error)
  .finally(() => db.$disconnect())
