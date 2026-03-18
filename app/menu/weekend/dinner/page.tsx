import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Weekend Dinner | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekend dinner menu — starters, mains, traditional Irish fare, and more.",
};

function WeekendDinnerMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Dinner Menu
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-2">Weekend</p>
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-1">Sat–Sun · 5:00pm – close</p> */}
      </div>
      <p className="mt-16 text-center text-white/30 text-sm tracking-wide">
        Menu coming soon.
      </p>
    </section>
  );
}

export default function WeekendDinnerPage() {
  return (
    <>
      <Hero
        imageSrc="/images/steakwine.webp"
        label="Weekend Fare"
        title="Dinner Menu"
        subtitle="Saturday and Sunday — Irish hospitality at its best."
        size="half"
        overlayOpacity={0.72}
      />
      <WeekendDinnerMenu />
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
