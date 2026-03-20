import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FeaturedDishesCarousel from "@/components/FeaturedDishesCarousel";
import FeaturedDrinksCarousel from "@/components/FeaturedDrinksCarousel";
import Reveal from "@/components/Reveal";

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

      {/* ── Slide-up wrapper ── */}
      <div className="mt-[-100px] relative z-10">

        {/* Top fade */}
        <div className="h-[100px] bg-gradient-to-t from-[#0B0B0C] to-transparent" aria-hidden="true" />

        {/* ── Featured Dishes ── */}
        <section className="bg-[#0B0B0C] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
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
            </Reveal>
            <Reveal delay={1}><FeaturedDishesCarousel /></Reveal>
            <Reveal delay={2}>
              <div className="text-center mt-10">
                <Button href="/menu" variant="outline" size="lg">View Full Menu</Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Atmosphere Strip ── */}
        <Reveal>
          <div className="relative h-[55vh] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover animate-ken-burns"
              style={{ backgroundImage: "url(/images/mainbar.webp)" }}
              aria-hidden="true"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-[#0B0B0C]/60" aria-hidden="true" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(11,11,12,0.85) 100%)" }}
              aria-hidden="true"
            />
            {/* Quote */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-[1px] w-12 md:w-24 bg-[#C9A86A]/50" />
                <span className="text-[#C9A86A] text-xl">☘</span>
                <span className="block h-[1px] w-12 md:w-24 bg-[#C9A86A]/50" />
              </div>
              <blockquote
                className="text-2xl md:text-4xl lg:text-5xl font-normal text-white/85 max-w-3xl leading-snug"
                style={{
                  fontFamily: "var(--font-great-vibes, cursive)",
                  textShadow: "0 0 40px rgba(0,0,0,0.8)",
                }}
              >
                Every bar, tile, and photograph brought straight from Ireland.
              </blockquote>
              <p className="mt-5 text-[0.65rem] tracking-[0.3em] uppercase text-[#C9A86A]/70">
                Mark Kirwan — Founder
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Featured Drinks ── */}
        <section className="bg-[#0B0B0C] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
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
            </Reveal>
            <Reveal delay={1}><FeaturedDrinksCarousel /></Reveal>
            <Reveal delay={2}>
              <div className="text-center mt-10">
                <Button href="/menu/drinks" variant="outline" size="lg">View Drinks Menu</Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── About Section — two-column ── */}
        <section className="bg-[#0D0C0B] py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Image */}
            <Reveal>
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/kirwans-exterior.webp"
                  alt="Kirwan's on the Wharf exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold border accent */}
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.25)" }}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Text */}
            <div>
              <Reveal>
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
                <span className="block w-16 h-[3px] bg-[#0F5F3F] mb-8" />
              </Reveal>
              <Reveal delay={1}>
                <div className="space-y-5 text-[#C7C7C7] text-base md:text-lg leading-relaxed">
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
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-10">
                  <Button href="/about" variant="outline" size="lg">Learn More</Button>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ── CTA Banner ── */}
        <Reveal>
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
              <Button href="/contact" size="lg">Get Directions & Hours</Button>
            </div>
          </SectionWrapper>
        </Reveal>

      </div>
    </>
  );
}
