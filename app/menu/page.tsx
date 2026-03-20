import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Menu | Kirwan's Irish Pub & Restaurant",
  description: "Explore our menus — weekday and weekend fare, drinks, and desserts.",
};

const cards = [
  {
    label: "Mon – Fri",
    title: "Weekday Fare",
    description: "Lunch, dinner, and everything in between.",
    href: "/menu/weekday",
    image: "/images/gastropub-diningarea.webp",
  },
  {
    label: "Sat – Sun",
    title: "Weekend Fare",
    description: "Brunch, lunch, dinner, and Irish hospitality.",
    href: "/menu/weekend",
    image: "/images/gastropub-snug.webp",
  },
  {
    label: "The Bar",
    title: "Drinks",
    description: "Whiskeys, craft pints, cocktails, and wine.",
    href: "/menu/drinks",
    image: "/images/whiskey.webp",
  },
  {
    label: "Sweet Endings",
    title: "Dessert",
    description: "Classic Irish desserts and indulgent favourites.",
    href: "/menu/dessert",
    image: "/images/brownie.webp",
  },
];

export default function MenuHubPage() {
  return (
    <>
      <Hero
        imageSrc="/images/lambchop.webp"
        label="Our Kitchen"
        title="The Menu"
        subtitle="Fresh, seasonal, and deeply Irish."
        size="half"
        overlayOpacity={0.72}
        cursiveTitle
      />

      <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="section-label mb-3">Explore</p>
            <h2 className="text-2xl md:text-3xl font-serif text-white/90 tracking-wide">
              What are you in the mood for?
            </h2>
            <div className="mt-3 mx-auto h-px w-12 bg-gold/50" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-sm aspect-[16/9] md:aspect-[4/3] flex items-end"
              >
                {/* Background image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,6,8,0.92) 0%, rgba(5,6,8,0.45) 50%, rgba(5,6,8,0.15) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Gold border glow on hover */}
                <div
                  className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.4)" }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 w-full">
                  <p className="section-label mb-2 opacity-80">{card.label}</p>
                  <h3
                    className="text-3xl md:text-4xl font-normal leading-tight text-white/90 mb-2"
                    style={{
                      fontFamily: "var(--font-great-vibes, cursive)",
                      textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/55 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold/70 group-hover:text-gold transition-colors duration-200">
                    <span>View Menu</span>
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
