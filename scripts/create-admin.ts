import prisma from "../lib/db";
import { hashPassword } from "../lib/hash";

async function main() {
  const password = await hashPassword("admin123");

  const admin = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "admin@avthar.com",
      password,
      role: "ADMIN",
    },
  });

  console.log(admin);
}

main();