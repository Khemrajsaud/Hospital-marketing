require("dotenv/config");

const { PrismaClient } = require("../src/generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL),
});

async function main() {
  const names = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics"];

  for (const name of names) {
    await prisma.specialty.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  const all = await prisma.specialty.findMany({
    select: { id: true, name: true },
    orderBy: { id: "asc" },
  });

  console.log(JSON.stringify(all, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
