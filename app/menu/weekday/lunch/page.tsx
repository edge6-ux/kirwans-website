import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import WeekdayLunchMenu from "@/components/menus/WeekdayLunchMenu";

export const metadata: Metadata = {
  title: "Weekday Lunch | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekday lunch menu — starters, salads, sandwiches, and traditional Irish fare.",
};

export default function WeekdayLunchPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Weekday Fare"
        title="Lunch Menu"
        subtitle="Fresh, seasonal, and deeply Irish."
        size="half"
        overlayOpacity={0.72}
      />
      <WeekdayLunchMenu />
      <div className="bg-[#050608] pb-12 text-center">
        <Link
          href="/menu/weekday"
          className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors duration-200"
        >
          ← Back to Weekday Fare
        </Link>
      </div>
    </>
  );
}
