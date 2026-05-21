import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "super_secret_key";

export function createDealerToken(
  dealerId: string
) {
  return jwt.sign(
    { dealerId },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

export function verifyDealerToken(
  token: string
) {
  try {
    return jwt.verify(
      token,
      JWT_SECRET
    );
  } catch {
    return null;
  }
}