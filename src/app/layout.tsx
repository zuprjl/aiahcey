import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIAHCEY — A Fan Digital Archive",
  description:
    "A fan-curated archive documenting the dynamic between BINI's Aiah and Stacey — from debut to Coachella and everything in between.",
  keywords: ["Aiah", "Stacey", "Aiahcey", "BINI", "fan archive", "P-pop"],
  openGraph: {
    title: "AIAHCEY — A Fan Digital Archive",
    description:
      "Blue meets Pink. Calm meets Chaos. Main Rapper meets Main Rapper.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
