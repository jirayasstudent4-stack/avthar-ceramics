const requiredEnvs = [
  "DATABASE_URL",

  "JWT_SECRET",

  "CLOUDINARY_CLOUD_NAME",

  "CLOUDINARY_API_KEY",

  "CLOUDINARY_API_SECRET",
];

requiredEnvs.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(
      `Missing env: ${env}`
    );
  }
});