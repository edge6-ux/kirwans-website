import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import DinnerMenu from "@/components/menus/DinnerMenu";

export const metadata: Metadata = {
  title: "Weekday Dinner | Kirwan's Irish Pub & Restaurant",
  description: "Kirwan's weekday dinner menu — starters, salads, flatbreads, traditional Irish fare, mains, and sides.",
};

export default function WeekdayDinnerPage() {
  return (
    <>
      <Hero
        imageSrc="/images/steakwine.webp"
        label="Weekday Fare"
        title="Dinner Menu"
        subtitle="Fresh, seasonal, and deeply Irish."
        size="half"
        overlayOpacity={0.72}
      />
      <DinnerMenu />
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
