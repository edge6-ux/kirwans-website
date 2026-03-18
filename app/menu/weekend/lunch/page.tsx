import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Weekend Lunch | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekend lunch menu — starters, salads, sandwiches, and traditional Irish fare.",
};

function WeekendLunchMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Lunch Menu
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-2">Weekend</p>
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-1">Sat–Sun · 10:00am – 3:00pm</p> */}
      </div>
      <p className="mt-16 text-center text-white/30 text-sm tracking-wide">
        Menu coming soon.
      </p>
    </section>
  );
}

export default function WeekendLunchPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Weekend Fare"
        title="Lunch Menu"
        subtitle="Saturday and Sunday — Irish hospitality at its best."
        size="half"
        overlayOpacity={0.72}
      />
      <WeekendLunchMenu />
      <div className="bg-[#050608] pb-12 text-center">
        <Link
          href="/menu/weekend"
          className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors duration-200"
        >
          ← Back to Weekend Fare
        </Link>
      </div>
    </>
  );
}
