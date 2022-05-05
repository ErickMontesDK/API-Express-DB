const { PrismaClient } = require('@prisma/client');
const prisma2 = new PrismaClient();

(async function main() {
  try {
    const commander = await prisma2.commander.upsert({
      where: { name: 'commander' },
      update: {},
      create: {
        name: 'commander',
				lang: 'spanish',
				missionCommander: 'Carlos',
        enrollments:3,
      },
    });

    const commander1 = await prisma2.commander.upsert({
      where: { name: 'commander1' },
      update: {},
      create: {
        name: 'commander1',
				lang: 'english',
				missionCommander: 'Fer',
        enrollments:2,
      },
    });

    const commander2 = await prisma2.commander.upsert({
      where: { name: 'commander2' },
      update: {},
      create: {
        name: 'commander2',
				lang: 'spanish',
				missionCommander: 'Rob',
        enrollments:3,
      },
    });

    console.log('Create 3 commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma2.$disconnect();
  }
})();