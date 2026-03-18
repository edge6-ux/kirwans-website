import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import WeekdayLunchMenu from "@/components/menus/WeekdayLunchMenu";
import DinnerMenu from "@/components/menus/DinnerMenu";
import DessertMenu from "@/components/menus/DessertMenu";
import KidsMenu from "@/components/menus/KidsMenu";
import MenuSectionDivider from "@/components/menus/MenuSectionDivider";

export const metadata: Metadata = {
  title: "Weekday Fare | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekday menus — lunch, dinner, dessert, and drinks, Monday through Friday.",
};

export default function WeekdayFullMenuPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Weekday Fare"
        title="Monday – Friday"
        subtitle="Lunch · Dinner · Dessert · Drinks"
        size="half"
        overlayOpacity={0.72}
        cursiveTitle
      />

      <WeekdayLunchMenu />
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
