import prisma from "@/lib/db";

import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword =
    await bcrypt.hash(
      "123456",
      10
    );

  await prisma.dealer.create({
    data: {
      ownerName:
        "Admin Dealer",

      businessName:
        "AVTHAR Ceramics",

      email:
        "dealer@avthar.com",

      password:
        hashedPassword,

      phone:
        "9876543210",

      creditLimit:
        1000000,

      availableCredit:
        480000,
    },
  });

  console.log(
    "Dealer created"
  );
}

main();