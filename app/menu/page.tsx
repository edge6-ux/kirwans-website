import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { MenuHubCard, type MenuCardData } from "@/components/MenuHubCard";

export const metadata: Metadata = {
  title: "Menu | Kirwan's Irish Pub & Restaurant",
  description: "Explore our menus — weekday and weekend fare, drinks, and desserts.",
};

const cards: MenuCardData[] = [
  {
    title: "Weekday Fare",
    description: "Monday through Friday — lunch, dinner, and everything in between.",
    href: "/menu/weekday",
    // hours: "Mon–Fri · 11:30am – close",
  },
  {
    title: "Weekend Fare",
    description: "Saturday and Sunday — brunch, lunch, dinner, and Irish hospitality.",
    href: "/menu/weekend",
    // hours: "Sat–Sun · 10:00am – close",
  },
];

export default function MenuHubPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Our Kitchen"
        title="The Menu"
        subtitle="Fresh, seasonal, and deeply Irish. Choose your day below."
        size="half"
        overlayOpacity={0.72}
        cursiveTitle
      />

      <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-white/90 tracking-wide">
              When are you dining?
            </h2>
            <div className="mt-3 mx-auto h-px w-12 bg-gold/50" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <MenuHubCard key={card.href} card={card} large />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
