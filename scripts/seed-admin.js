const { PrismaClient } = require("../src/generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const bcrypt = require("bcryptjs");

const databaseUrl = process.env.DATABASE_URL || "mysql://root:root%4012@localhost:3306/hospital_marketing";
const adapter = new PrismaMariaDb(databaseUrl);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
 
    const hashedPassword = await bcrypt.hash("Admin12345", 10);

    await prisma.user.deleteMany({
      where: { email: "admin@hospital.com" },
    });

    const admin = await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@hospital.com",
        password: hashedPassword,
        role: "SUPERADMIN",
      },
    });

    console.log("Admin user created successfully!");
    console.log(`  Email: ${admin.email}`);
    console.log(`  Password: Admin12345`);
    console.log(`  Role: ${admin.role}`);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
