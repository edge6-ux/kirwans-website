import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import WeekendLunchMenu from "@/components/menus/WeekendLunchMenu";
import DinnerMenu from "@/components/menus/DinnerMenu";
import DessertMenu from "@/components/menus/DessertMenu";
import KidsMenu from "@/components/menus/KidsMenu";
import MenuSectionDivider from "@/components/menus/MenuSectionDivider";

export const metadata: Metadata = {
  title: "Weekend Fare | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekend menus — lunch, dinner, dessert, and drinks, Saturday and Sunday.",
};

export default function WeekendFullMenuPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Weekend Fare"
        title="Saturday & Sunday"
        subtitle="Lunch · Dinner · Dessert · Drinks"
        size="half"
        overlayOpacity={0.72}
        cursiveTitle
        cursiveTitleSize="clamp(2rem, 5vw, 4.5rem)"
      />

      <WeekendLunchMenu />
      <MenuSectionDivider />
      <DinnerMenu />
      <MenuSectionDivider />
      <KidsMenu />
      <MenuSectionDivider />
      <DessertMenu />

      <div className="bg-[#050608] pb-14 text-center">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-white/30 hover:text-gold transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
