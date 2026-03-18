"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const featuredDishes = [
  { src: "/images/lambchop.webp",  alt: "Braised Irish lamb chop shepherd's pie"      },
  { src: "/images/steakwine.webp", alt: "Kirwan's signature ribeye with wine pairing" },
  { src: "/images/fishchips.webp", alt: "Traditional fish and chips"                  },
  { src: "/images/crabcake.webp",  alt: "Crab cake starter with slaw and lime"        },
];

export default function FeaturedDishesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  return (
    <>
      {/* Mobile: full-width single-image carousel */}
      <div
        ref={trackRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {featuredDishes.map((dish) => (
          <div
            key={dish.src}
            className="snap-center min-w-full h-[280px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl border border-[#C9A86A]/30"
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {featuredDishes.map((_, i) => (
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

      {/* Desktop: original row layout */}
      <div className="hidden md:flex gap-8">
        {featuredDishes.map((dish) => (
          <div
            key={dish.src}
            className="flex-1 h-64 relative rounded-xl overflow-hidden shadow-xl border border-[#C9A86A]/30 hover:scale-[1.03] transition-all duration-300 ease-out"
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </>
  );
}
