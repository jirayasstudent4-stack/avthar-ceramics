const bcrypt = require("bcryptjs");

async function run() {
  const hash =
    await bcrypt.hash(
      "dealer123",
      10
    );

  console.log(hash);
}

run();