import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {
      first_name: "Admin",
      last_name: "CebMed",
      password: "$2b$10$ZXg7KkGTQKIoQWf5SVMh3uM3jxJ8QWJ6WmE04fNkR4iP0MHZ6L4T2",
      is_active: true,
    },
    create: {
      first_name: "Admin",
      last_name: "CebMed",
      date_of_birth: new Date("1990-01-01"),
      email: "admin@example.com",
      password: "$2b$10$ZXg7KkGTQKIoQWf5SVMh3uM3jxJ8QWJ6WmE04fNkR4iP0MHZ6L4T2",
      is_active: true,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed error:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
