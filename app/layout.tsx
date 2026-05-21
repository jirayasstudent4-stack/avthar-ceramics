import "./globals.css";

export const metadata = {
  title: "AVTHAR Ceramics",

  description:
    "Luxury ceramic surfaces for modern architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}