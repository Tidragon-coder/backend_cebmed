import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.user.findFirst();
  console.log("✅ Connected");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
