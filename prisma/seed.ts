import { prisma } from '../lib/prisma'; 
import { decode } from 'iconv-lite';

const LIMITE = 200;

async function main() {
  console.log('⏳ Récupération des médicaments...');

  const res = await fetch('https://base-donnees-publique.medicaments.gouv.fr/download/file/CIS_bdpm.txt');
  const buffer = await res.arrayBuffer();
  const text = decode(Buffer.from(buffer), 'ISO-8859-1');

  const lignes = text.split('\n').filter(Boolean).slice(0, LIMITE);

  let count = 0;

  for (const ligne of lignes) {
    const col = ligne.split('\t');
    const [cisCode, name, pharmaceuticalForm, administrationRoutes, , , marketingStatus, , holder] = col;

    await prisma.medication.upsert({
      where: { cisCode },
      update: {},
      create: {
        cisCode,
        name,
        pharmaceuticalForm: pharmaceuticalForm || null,
        administrationRoutes: administrationRoutes || null,
        marketingStatus: marketingStatus || null,
        holder: holder?.trim() || null,
      }
    });

    count++;
    if (count % 50 === 0) console.log(`➡️ ${count}/${lignes.length} importés...`);
  }

  console.log(`✅ Import terminé — ${count} médicaments importés`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());