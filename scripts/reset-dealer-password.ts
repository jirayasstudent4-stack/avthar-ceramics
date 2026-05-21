import prisma from "@/lib/db";

import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword =
    await bcrypt.hash(
      "123456",
      10
    );

  const dealer =
    await prisma.dealer.update({
      where: {
        email:
          "dealer@avthar.com",
      },

      data: {
        password:
          hashedPassword,
      },
    });

  console.log(
    "Password updated"
  );

  console.log(dealer);
}

main();