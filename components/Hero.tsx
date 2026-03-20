import Image from "next/image";
import Button from "./Button";

interface HeroProps {
  imageSrc: string;
  label?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  size?: "full" | "half";
  overlayOpacity?: number;
  /** "gold" = bold brass headline (default). "soft" = light white headline. */
  headlineVariant?: "gold" | "soft";
  /** Render the title in the Great Vibes cursive font at white/85 */
  cursiveTitle?: boolean;
  /** Render the title in the Great Vibes cursive font keeping the gold color */
  cursiveTitleGold?: boolean;
  /** Override the font-size clamp when cursiveTitle is true */
  cursiveTitleSize?: string;
}

export default function Hero({
  imageSrc,
  label,
  title,
  subtitle,
  ctaText,
  ctaHref = "/menu",
  secondaryCtaText,
  secondaryCtaHref = "/about",
  size = "full",
  overlayOpacity = 0.6,
  headlineVariant = "gold",
  cursiveTitle = false,
  cursiveTitleGold = false,
  cursiveTitleSize = "clamp(2.8rem, 7vw, 6.5rem)",
}: HeroProps) {
  const heightClass = size === "full" ? "h-screen" : "min-h-[60vh]";

  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>

      {/* Background image with Ken Burns */}
      <div
        className="absolute inset-0 bg-center bg-cover animate-ken-burns"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(11,11,12,${overlayOpacity}) 0%, rgba(11,11,12,0.92) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Vignette — darkens edges, focuses center */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 40%, rgba(11,11,12,0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top fade into header */}
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, #0B0B0C 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* ── Soft variant: homepage hero ── */}
      {headlineVariant === "soft" ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">

          {/* Logo */}
          <div className="hero-enter [animation-delay:0s] mb-7 -mt-16 md:-mt-24">
            <Image
              src="/images/logo.webp"
              alt="Kirwan's logo"
              width={120}
              height={120}
              className="object-contain rounded-full"
              style={{
                boxShadow: "0 0 0 1px #C9A86A, 0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
              }}
            />
          </div>

          {/* Eyebrow with decorative flanking lines */}
          <div className="hero-enter [animation-delay:0.3s] flex items-center gap-4 mb-5">
            <span className="block h-[1px] w-12 md:w-20 bg-[#C9A86A]/50" />
            <p className="text-[0.65rem] md:text-[0.7rem] tracking-[0.35em] uppercase text-[#C9A86A]/80 font-semibold whitespace-nowrap">
              Kirwan&apos;s on the Wharf
            </p>
            <span className="block h-[1px] w-12 md:w-20 bg-[#C9A86A]/50" />
          </div>

          {/* Four-leaf clover ornament */}
          <div className="hero-enter [animation-delay:0.45s] mb-5" aria-hidden="true">
            <svg width="60" height="64" viewBox="-2 -2 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top leaf */}
              <path d="M30 26 C23 23,16 13,20 6 C22 1,28 0,30 5 C32 0,38 1,40 6 C44 13,37 23,30 26 Z"
                stroke="#C9A86A" strokeWidth="1.3" fill="rgba(201,168,106,0.12)" />
              {/* Right leaf */}
              <path d="M30 26 C33 19,43 12,50 16 C55 18,56 24,51 26 C56 28,55 34,50 36 C43 40,33 33,30 26 Z"
                stroke="#C9A86A" strokeWidth="1.3" fill="rgba(201,168,106,0.12)" />
              {/* Bottom leaf */}
              <path d="M30 26 C37 29,44 39,40 46 C38 51,32 52,30 47 C28 52,22 51,20 46 C16 39,23 29,30 26 Z"
                stroke="#C9A86A" strokeWidth="1.3" fill="rgba(201,168,106,0.12)" />
              {/* Left leaf */}
              <path d="M30 26 C27 33,17 40,10 36 C5 34,4 28,9 26 C4 24,5 18,10 16 C17 12,27 19,30 26 Z"
                stroke="#C9A86A" strokeWidth="1.3" fill="rgba(201,168,106,0.12)" />
              {/* Center */}
              <circle cx="30" cy="26" r="2.5" fill="#C9A86A" opacity="0.85" />
              {/* Stem */}
              <path d="M30 42 Q26 53,28 62" stroke="#C9A86A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>

          {/* Main cursive title */}
          <h1
            className="hero-enter [animation-delay:0.65s] text-center font-normal leading-none mb-4"
            style={{
              fontFamily: "var(--font-great-vibes, cursive)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              color: "rgba(255,255,255,0.88)",
              WebkitTextStroke: "0.5px #C9A86A",
              textShadow: "0 0 60px rgba(201,168,106,0.5), 0 0 120px rgba(201,168,106,0.2)",
            }}
          >
            A Taste of Ireland
          </h1>

          {/* Subline */}
          <p className="hero-enter [animation-delay:0.9s] text-base md:text-xl tracking-[0.2em] uppercase text-white/45 font-light mb-10">
            On the Waterfront
          </p>

          {/* Buttons */}
          {(ctaText || secondaryCtaText) && (
            <div className="hero-enter [animation-delay:1.15s] flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctaText && (
                <Button href={ctaHref} size="lg">{ctaText}</Button>
              )}
              {secondaryCtaText && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">{secondaryCtaText}</Button>
              )}
            </div>
          )}
        </div>
      ) : (
        /* ── Gold variant: interior pages ── */
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          {label && (
            <p className="section-label mb-4">{label}</p>
          )}

          {/* Gold ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-[1px] w-16 bg-[#C9A86A]/50" />
            <span className="text-[#C9A86A] text-lg">☘</span>
            <span className="block h-[1px] w-16 bg-[#C9A86A]/50" />
          </div>

          <h1
            className="leading-tight mb-6"
            style={cursiveTitle ? {
              fontFamily: "var(--font-great-vibes, cursive)",
              fontSize: cursiveTitleSize,
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              WebkitTextStroke: "0.5px #C9A86A",
              textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
            } : cursiveTitleGold ? {
              fontFamily: "var(--font-great-vibes, cursive)",
              fontSize: cursiveTitleSize,
              fontWeight: 400,
              color: "#C9A86A",
              textShadow: "0 4px 40px rgba(201,168,106,0.25), 0 2px 12px rgba(0,0,0,0.6)",
            } : {
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              fontWeight: 700,
              color: "#C9A86A",
              textShadow: "0 4px 40px rgba(201,168,106,0.25), 0 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-inter, system-ui, sans-serif)",
                color: "rgba(245,245,245,0.80)",
              }}
            >
              {subtitle}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctaText && (
                <Button href={ctaHref} size="lg">{ctaText}</Button>
              )}
              {secondaryCtaText && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">{secondaryCtaText}</Button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, #0B0B0C 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      {size === "full" && (
        <div className="hero-enter [animation-delay:1.4s] absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A86A]/60">Scroll</span>
          <svg
            className="animate-chevron text-[#C9A86A]"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3 6L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
