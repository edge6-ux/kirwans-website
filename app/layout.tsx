import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kirwan's | Irish Pub & Restaurant | Washington D.C.",
  description:
    "Experience authentic Irish hospitality at Kirwan's — an upscale pub & restaurant in the heart of Washington D.C. Fine Irish fare, premium whiskeys, and craft pints.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="antialiased" style={{ backgroundColor: "#0B0B0C", color: "#F5F5F5" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
