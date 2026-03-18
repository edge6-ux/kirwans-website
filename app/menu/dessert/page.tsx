import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Dessert Menu | Kirwan's Irish Pub & Restaurant",
  description: "Sweet endings at Kirwan's — classic Irish desserts and indulgent favourites.",
};

function DessertMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Dessert Menu
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-2">Sweet endings</p>
        {/* hours slot — populate when ready */}
        {/* <p className="text-xs text-gold/70 mt-1">Available nightly</p> */}
      </div>
      <p className="mt-16 text-center text-white/30 text-sm tracking-wide">
        Menu coming soon.
      </p>
    </section>
  );
}

export default function DessertMenuPage() {
  return (
    <>
      <Hero
        imageSrc="/images/waffle.webp"
        label="Our Kitchen"
        title="Dessert Menu"
        subtitle="The perfect sweet ending to your evening."
        size="half"
        overlayOpacity={0.72}
      />
      <DessertMenu />
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
