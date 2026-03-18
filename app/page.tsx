import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FeaturedDishesCarousel from "@/components/FeaturedDishesCarousel";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero
        imageSrc="/images/hero2.webp"
        title="A Taste of Ireland on the Wharf"
        ctaText="Explore the Menu"
        ctaHref="/menu"
        secondaryCtaText="About"
        secondaryCtaHref="/about"
        size="full"
        overlayOpacity={0.5}
        headlineVariant="soft"
      />

      {/* ── Slide-up wrapper: overlaps hero by 100px ── */}
      <div className="mt-[-100px] relative z-10">

        {/* Top fade: transparent → #0B0B0C */}
        <div
          className="h-[100px] bg-gradient-to-t from-[#0B0B0C] to-transparent"
          aria-hidden="true"
        />

        {/* ── Featured Dishes Row ── */}
        <section className="bg-[#0B0B0C] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Heading */}
            <p className="section-label text-center mb-3">From Our Kitchen</p>
            <h2
              className="text-5xl md:text-6xl text-center mb-3"
              style={{
                fontFamily: "var(--font-great-vibes, cursive)",
                color: "rgba(255,255,255,0.85)",
                WebkitTextStroke: "0.5px #C9A86A",
                textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
              }}
            >
              Featured Dishes
            </h2>
            <span className="block w-16 h-[3px] bg-[#0F5F3F] mx-auto mb-10" />

            <FeaturedDishesCarousel />

            {/* CTA */}
            <div className="text-center mt-10">
              <Button href="/menu" variant="outline" size="lg">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <SectionWrapper bg="medium">
          <div className="text-center">
            <p className="section-label mb-3">Come Visit</p>
            <span className="brass-divider" />
            <h2
              className="text-[#F5F5F5] text-4xl md:text-5xl mt-4 mb-4"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Find Us on the Wharf
            </h2>
            <p className="text-[#C7C7C7] mb-8">
              749 Wharf Street SW, Washington D.C. · Open daily from 11am
            </p>
            <Button href="/contact" size="lg">
              Get Directions & Hours
            </Button>
          </div>
        </SectionWrapper>

      </div>
    </>
  );
}
