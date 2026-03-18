import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryImage } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Kirwan's Irish Pub & Restaurant",
  description: "A visual tour of Kirwan's — the food, the atmosphere, the pints, and the people.",
};

const foodImages: GalleryImage[] = [
  { src: "/images/steakwine.webp",  alt: "Steak dinner with wine pairing",                  caption: "Steak & Wine"    },
  { src: "/images/fishchips.webp",  alt: "Traditional fish and chips served at Kirwan's",   caption: "Fish & Chips"    },
  { src: "/images/crabcake.webp",   alt: "Crab cake with slaw and lime",                    caption: "Crab Cake"       },
  { src: "/images/lambchop.webp",   alt: "Lamb chop shepherd's pie with peas and carrots",  caption: "Lamb Chop"       },
  { src: "/images/waffle.webp",     alt: "Waffle with cream and sauce drizzle",             caption: "Waffle Dessert"  },
  { src: "/images/brownie.webp",    alt: "Warm chocolate brownie with caramel and ice cream", caption: "Chocolate Brownie" },
];

const drinkImages: GalleryImage[] = [
  { src: "/images/guinness.webp",   alt: "Fresh Guinness pour at Kirwan's bar",             caption: "The Perfect Pint" },
  { src: "/images/whiskey.webp",    alt: "Midleton Irish whiskey glass in sunlight",        caption: "Irish Whiskey"    },
  { src: "/images/cocktail.webp",   alt: "Signature cocktail at Kirwan's bar",               caption: "Cocktails"        },
];

const atmosphereImages: GalleryImage[] = [
  { src: "/images/kirwans-exterior.webp", alt: "Exterior of Kirwan's Pub & Restaurant",          caption: "Our Home"    },
  { src: "/images/people-eating.webp",    alt: "Guests enjoying food at Kirwan's outdoor seating", caption: "Good Company" },
  { src: "/images/mainbar1.webp",         alt: "Bar interior atmosphere",                          caption: "The Bar"     },
];

function CategoryHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-widest text-[#C9A86A]/70 mb-2">{label}</p>
      <h2
        className="text-2xl md:text-3xl text-white/90 tracking-wide"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {title}
      </h2>
      <div className="mt-3 h-px w-16 bg-[#C9A86A]/60" />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Hero
        imageSrc="/images/kirwans-exterior.webp"
        label="Photography"
        title="Life at Kirwan's"
        subtitle="Every corner tells a story. Every plate is a portrait. Every pint is a moment."
        size="half"
        overlayOpacity={0.65}
        cursiveTitleGold
      />

      {/* Food */}
      <SectionWrapper bg="dark">
        <CategoryHeading label="From the Kitchen" title="The Food" />
        <GalleryGrid images={foodImages} />
      </SectionWrapper>

      {/* Drinks */}
      <SectionWrapper bg="medium">
        <CategoryHeading label="Behind the Bar" title="The Drinks" />
        <GalleryGrid images={drinkImages} />
      </SectionWrapper>

      {/* Atmosphere */}
      <SectionWrapper bg="dark">
        <CategoryHeading label="The Space & People" title="The Atmosphere" />
        <GalleryGrid images={atmosphereImages} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="medium">
        <div className="text-center">
          <p
            className="text-[#C9A86A] text-2xl"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            ☘
          </p>
          <p className="text-[#C7C7C7] text-sm mt-4 mb-2 tracking-wide">
            Tag us on Instagram at{" "}
            <span className="text-[#C9A86A]">@kirwansdc</span>
          </p>
          <p className="text-[#C7C7C7] text-xs">
            Your best shots may appear in our gallery.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
