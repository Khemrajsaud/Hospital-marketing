require("dotenv/config");

const { PrismaClient } = require("../src/generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL),
});

async function main() {
  const doctors = await prisma.doctor.findMany({ select: { id: true, name: true }, take: 5, orderBy: { id: "asc" } });
  const specialties = await prisma.specialty.findMany({ select: { id: true, name: true }, take: 5, orderBy: { id: "asc" } });
  console.log(JSON.stringify({ doctors, specialties }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
