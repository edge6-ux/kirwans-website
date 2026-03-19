"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const featuredDrinks = [
  { src: "/images/whiskey2.webp", alt: "Premium Irish whiskey selection"         },
  { src: "/images/espresso.jpg",  alt: "Irish espresso martini"                  },
  { src: "/images/otw.jpg",       alt: "On the Wharf signature cocktail"         },
  { src: "/images/bottles.jpg",   alt: "Curated spirits and bottle selection"    },
];

export default function FeaturedDrinksCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActive(index);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  return (
    <>
      {/* Mobile: full-width single-image carousel */}
      <div
        ref={trackRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {featuredDrinks.map((drink) => (
          <div
            key={drink.src}
            className="snap-center min-w-full h-[280px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl border border-[#C9A86A]/30 cursor-zoom-in"
            onClick={() => setLightbox(drink)}
          >
            <Image
              src={drink.src}
              alt={drink.alt}
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {featuredDrinks.map((_, i) => (
          <span
            key={i}
            className={`block rounded-full transition-all duration-300 ${
              i === active
                ? "w-4 h-1.5 bg-[#C9A86A]"
                : "w-1.5 h-1.5 bg-[#C9A86A]/30"
            }`}
          />
        ))}
      </div>

      {/* Desktop: row layout */}
      <div className="hidden md:flex gap-8">
        {featuredDrinks.map((drink) => (
          <div
            key={drink.src}
            className="flex-1 h-64 relative rounded-xl overflow-hidden shadow-xl border border-[#C9A86A]/30 hover:scale-[1.03] transition-all duration-300 ease-out cursor-zoom-in"
            onClick={() => setLightbox(drink)}
          >
            <Image
              src={drink.src}
              alt={drink.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full mx-4 max-h-[90vh] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-[#C9A86A]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-6 text-white/70 hover:text-[#C9A86A] text-3xl leading-none transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
