import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Drinks Menu | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's drinks menu — Irish whiskeys, craft beer, cocktails, wine, and more.",
};

function DrinksMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2
          className="text-5xl md:text-6xl text-[#C9A86A]"
          style={{ fontFamily: "var(--font-great-vibes, cursive)" }}
        >
          Drinks
        </h2>
        {/* hours slot — populate when ready */}
        {/* <p className="text-xs text-gold/70 mt-1">Available during all service hours</p> */}
      </div>
      <p className="mt-16 text-center text-white/30 text-sm tracking-wide">
        Menu coming soon.
      </p>
    </section>
  );
}

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
      <DrinksMenu />
      <div className="bg-[#050608] pb-12 text-center">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
