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

      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover animate-ken-burns"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(11,11,12,${overlayOpacity}) 0%, rgba(11,11,12,0.88) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Top fade into header */}
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, #0B0B0C 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Content — soft variant: anchored to bottom */}
      {headlineVariant === "soft" ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 animate-fade-in-up">

          {/* Logo */}
          <Image
            src="/images/logo.webp"
            alt="Kirwan's logo"
            width={120}
            height={120}
            className="mb-6 object-contain rounded-full -mt-16 md:-mt-24"
            style={{ boxShadow: "0 0 0 1px #C9A86A, 0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)" }}
          />

          {/* Three-line typographic lockup */}
          <div className="flex flex-col items-center gap-1 text-center">
            {/* Eyebrow */}
            <p className="text-base md:text-xl tracking-[0.3em] uppercase text-white/50 font-bold">
              Kirwan&apos;s on the Wharf
            </p>

            {/* Main line */}
            <h1
              className="text-5xl md:text-8xl font-normal mt-4 md:mt-8"
              style={{
                fontFamily: "var(--font-great-vibes, cursive)",
                color: "rgba(255,255,255,0.85)",
                WebkitTextStroke: "0.5px #C9A86A",
                textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
              }}
            >
              A Taste of Ireland
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-2xl text-white/65 mt-3">
              On the Waterfront
            </p>
          </div>

          {/* Buttons */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12">
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
        /* Content — gold variant: centered */
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
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #0B0B0C 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      {size === "full" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-[#C9A86A] text-[0.6rem] tracking-widest uppercase">Scroll</span>
          <span className="block w-[1px] h-8 bg-[#C9A86A]/50 animate-[bounce_2s_infinite]" />
        </div>
      )}
    </div>
  );
}
