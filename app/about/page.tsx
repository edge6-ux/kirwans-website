import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Kirwan's Irish Pub & Restaurant",
  description:
    "Learn the story behind Kirwan's — a family-owned Irish pub rooted in County Galway tradition, brought to life in Washington D.C.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Intro: About Us ── */}
      <section className="bg-[#050608] py-20 px-4 md:px-8 lg:px-16 text-center">
        <h1
          className="text-5xl md:text-6xl"
          style={{
            fontFamily: "var(--font-great-vibes, cursive)",
            color: "rgba(255,255,255,0.85)",
            WebkitTextStroke: "0.5px #C9A86A",
            textShadow: "0 0 40px rgba(201,168,106,0.45), 0 0 80px rgba(201,168,106,0.2)",
          }}
        >
          About Us
        </h1>
        <div className="mt-3 mb-8 h-px w-16 bg-[#C9A86A]/70 mx-auto" />
        <div className="space-y-6 text-[#C7C7C7] text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left">
          <div>
            <h2
              className="text-[#C9A86A] text-lg md:text-xl font-semibold mb-3 text-center"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              An Authentic Irish Experience
            </h2>
            <p>
              Our intention in opening Kirwan&apos;s was to celebrate our homeland by making your
              experience as authentically Irish as possible. To do this, we contracted eight
              carpenters from Ireland who flew over with huge containers bearing all of our interior
              furnishings and materials. Every bar, tile, table, chair, panel and photograph you see
              is from Ireland.
            </p>
          </div>
          <p>
            About those photographs on our walls — each one was selected and brought over by owner
            Mark Kirwan&apos;s dad from The Photography Institute in Ireland. The historical subjects
            of horses and GAA sportsmen are particular interests of Mark&apos;s. He takes pride in
            his heritage and enthusiastically shares it with everyone who walks through the doors of
            Kirwan&apos;s.
          </p>
        </div>
      </section>

      {/* ── Section 1: Main Bar & Whiskey Bar ── */}
      <section className="bg-[#050608] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="space-y-6">
            <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-[#C9A86A]/15">
              <Image
                src="/images/mainbar1.webp"
                alt="Kirwan's main bar overlooking the Washington Channel"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-[#C9A86A]/15">
              <Image
                src="/images/mainbar.webp"
                alt="Whiskey bar interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-start mt-4 md:mt-0">
            <h2
              className="text-3xl md:text-4xl text-white/90 tracking-wide"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Main Bar &amp; Whiskey Bar
            </h2>
            <div className="mt-3 mb-8 h-px w-16 bg-[#C9A86A]/70" />

            <div className="space-y-6 text-[#C7C7C7] text-base leading-relaxed">
              <div>
                <h3
                  className="text-[#C9A86A] text-sm tracking-widest uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Main Bar
                </h3>
                <p>
                  Step inside Kirwan&apos;s and you&apos;re welcomed by our signature main bar — a warm,
                  lively gathering place overlooking the Washington Channel. The atmosphere is social
                  and inviting, with rich wood, soft lighting, and a timeless charm that sets the
                  tone for your visit.
                </p>
              </div>

              <div>
                <h3
                  className="text-[#C9A86A] text-sm tracking-widest uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Whiskey Bar
                </h3>
                <p>
                  Just beyond the main bar, you&apos;ll find our intimate Whiskey Bar — a refined
                  hideaway for those who appreciate craftsmanship and quiet luxury. Here, shelves are
                  lined with exceptional whiskeys from Ireland and beyond, curated for sipping,
                  savoring, and discovering something new.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ── Section 2: Gastropub: Dining Area & Snug ── */}
      <section className="bg-[#050608] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Subsection: Dining Area — text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl text-white/90 tracking-wide"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Gastropub: Dining Area &amp; Snug
              </h2>
              <div className="mt-3 mb-6 h-px w-16 bg-[#C9A86A]/70" />
              <h3
                className="text-[#C9A86A] text-sm tracking-widest uppercase font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Dining Area
              </h3>
              <p className="text-[#C7C7C7] text-base leading-relaxed">
                Located on the mezzanine, our gastropub offers a warm and classic dining experience.
                Whether you choose a table or a seat at the bar, the space evokes the charm of a
                traditional rural Irish pub — a place where good food, good company, and good
                conversation naturally come together.
              </p>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-[#C9A86A]/15">
              <Image
                src="/images/gastropub-diningarea.webp"
                alt="Kirwan's gastropub dining area on the mezzanine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Subsection: The Snug — text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center md:order-1 order-2">
              <h3
                className="text-3xl md:text-4xl text-white/90 tracking-wide"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                The Snug
              </h3>
              <div className="mt-3 mb-6 h-px w-16 bg-[#C9A86A]/70" />
              <p className="text-[#C7C7C7] text-base leading-relaxed">
                Tucked within the gastropub is our old-fashioned &ldquo;snug,&rdquo; a cozy, enclosed room
                inspired by historic Irish pubs. Traditionally, snugs offered privacy for those who
                preferred not to be seen drinking — women, clergy, policemen, and the occasional
                clandestine couple. Today, it remains a beloved retreat, offering intimacy,
                character, and a touch of nostalgia.
              </p>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-[#C9A86A]/15 md:order-2 order-1">
              <Image
                src="/images/gastropub-snug.webp"
                alt="The snug at Kirwan's — an intimate enclosed room"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
