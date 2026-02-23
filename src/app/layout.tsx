import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Em desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
