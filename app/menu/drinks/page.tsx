import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import DrinkMenu from "@/components/menus/DrinkMenu";

export const metadata: Metadata = {
  title: "Drinks Menu | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's drinks menu — Irish whiskeys, craft beer, cocktails, wine, and more.",
};

export default function DrinksMenuPage() {
  return (
    <>
      <Hero
        imageSrc="/images/whiskey.webp"
        label="The Bar"
        title="Drinks"
        cursiveTitle
        subtitle="Ireland's finest whiskeys, perfectly poured stouts, and crafted cocktails."
        size="half"
        overlayOpacity={0.72}
      />
      <DrinkMenu />
      <div className="bg-[#050608] pb-12 text-center">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-white/40 hover:text-[#C9A86A] transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
