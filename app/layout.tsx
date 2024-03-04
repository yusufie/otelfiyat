import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otel Fiyat",
  description: "Otel odaları rezervasyonu ve fiyatları. Otel Fiyat, en uygun fiyatlarla otel odaları rezervasyonu yapmanızı sağlar. En iyi otel fiyatları için Otel Fiyat'ı ziyaret edin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
