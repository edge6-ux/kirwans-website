import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FeaturedDishesCarousel from "@/components/FeaturedDishesCarousel";
import FeaturedDrinksCarousel from "@/components/FeaturedDrinksCarousel";

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

        {/* ── Featured Drinks Row ── */}
        <section className="bg-[#0B0B0C] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Heading */}
            <p className="section-label text-center mb-3">From Our Bar</p>
            <h2
              className="text-5xl md:text-6xl text-center mb-3"
              style={{
                fontFamily: "var(--font-great-vibes, cursive)",
                color: "rgba(255,255,255,0.85)",
                WebkitTextStroke: "0.5px #C9A86A",
                textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
              }}
            >
              Signature Drinks
            </h2>
            <span className="block w-16 h-[3px] bg-[#0F5F3F] mx-auto mb-10" />

            <FeaturedDrinksCarousel />

            {/* CTA */}
            <div className="text-center mt-10">
              <Button href="/menu/drinks" variant="outline" size="lg">
                View Drinks Menu
              </Button>
            </div>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="bg-[#0B0B0C] py-16 md:py-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Our Story</p>
            <h2
              className="text-5xl md:text-6xl mb-3"
              style={{
                fontFamily: "var(--font-great-vibes, cursive)",
                color: "rgba(255,255,255,0.85)",
                WebkitTextStroke: "0.5px #C9A86A",
                textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
              }}
            >
              About Us
            </h2>
            <span className="block w-16 h-[3px] bg-[#0F5F3F] mx-auto mb-10" />
            <div className="space-y-5 text-[#C7C7C7] text-base md:text-lg leading-relaxed text-left">
              <p>
                Our intention in opening Kirwan&apos;s was to celebrate our homeland by making your
                experience as authentically Irish as possible. To do this, we contracted eight
                carpenters from Ireland who flew over with huge containers bearing all of our interior
                furnishings and materials. Every bar, tile, table, chair, panel and photograph you see
                is from Ireland.
              </p>
              <p>
                About those photographs on our walls — each one was selected and brought over by owner
                Mark Kirwan&apos;s dad from The Photography Institute in Ireland. The historical subjects
                of horses and GAA sportsmen are particular interests of Mark&apos;s. He takes pride in
                his heritage and enthusiastically shares it with everyone who walks through the doors of
                Kirwan&apos;s.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/about" variant="outline" size="lg">
                Learn More
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
