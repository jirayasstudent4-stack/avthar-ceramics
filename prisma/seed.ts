import prisma from "@/lib/db";

import bcrypt from "bcryptjs";

import { UserRole } from "@prisma/client";

async function main() {
  const hashedPassword =
    await bcrypt.hash(
      "admin123",
      10
    );

  const admin =
    await prisma.user.create({
      data: {
        name: "Admin",

        email:
          "admin@avthar.com",

        password:
          hashedPassword,

        role:
          UserRole.ADMIN,
      },
    });

  console.log(
    "Admin created:",
    admin
  );
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });