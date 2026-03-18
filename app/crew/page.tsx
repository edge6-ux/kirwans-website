import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Crew | Kirwan's Irish Pub & Restaurant",
  description:
    "Meet the talented team behind Kirwan's — the bartenders, chefs, and managers who make every night unforgettable.",
};

const crew = [
  {
    name: "Fionnuala Brennan",
    role: "General Manager",
    bio: "Fionnuala has over 15 years of hospitality experience across Dublin, London, and New York. She oversees every aspect of the Kirwan's experience — and pours a mean Guinness.",
    imageSrc: "/images/team-manager.svg",
    hometown: "Kilkenny, Ireland",
  },
  {
    name: "Ciarán O'Sullivan",
    role: "Head Chef",
    bio: "Trained at Ballymaloe Cookery School and refined in the kitchens of London's best Irish restaurants, Ciarán brings modern technique to time-honoured recipes.",
    imageSrc: "/images/team-chef.svg",
    hometown: "Cork, Ireland",
  },
  {
    name: "Declan Murray",
    role: "Head Bartender",
    bio: "Declan's encyclopaedic knowledge of Irish whiskey and perfect Guinness technique have made him a legend on M Street. Ask him anything — he loves to talk.",
    imageSrc: "/images/team-bartender.svg",
    hometown: "Galway, Ireland",
  },
];

const hiring = [
  "Sous Chef",
  "Line Cook",
  "Floor Manager",
  "Bartender (Part-Time)",
  "Server",
];

export default function CrewPage() {
  return (
    <>
      <Hero
        imageSrc="/images/pub-interior.svg"
        label="The People"
        title="Our Crew"
        subtitle="Great pubs are made by great people. Meet the team that pours, cooks, and cares with everything they've got."
        size="half"
        overlayOpacity={0.72}
      />

      {/* Team */}
      <SectionWrapper bg="dark">
        <SectionHeading
          label="Meet the Team"
          title="The Faces of Kirwan's"
          subtitle="Three of Ireland's finest, transplanted to the heart of Washington D.C."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-5xl mx-auto">
          {crew.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </SectionWrapper>

      {/* Culture section */}
      <SectionWrapper bg="medium">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Work With Us"
            title="Join the Family"
            subtitle="We're always looking for passionate, hardworking people who love great food, great drink, and great craic."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {[
              {
                icon: "🍀",
                title: "Tip-share + Living Wage",
                desc: "We pay above industry standard and run a transparent tip-share system.",
              },
              {
                icon: "🧑‍🍳",
                title: "Staff Meals & Benefits",
                desc: "A daily staff meal from our kitchen, health benefits, and paid time off.",
              },
              {
                icon: "📚",
                title: "Training & Development",
                desc: "Whiskey certification, barista training, and leadership pathways for all staff.",
              },
              {
                icon: "🎶",
                title: "A Great Atmosphere",
                desc: "Voted one of D.C.'s best places to work in hospitality — two years running.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0B0B0C] border border-[#1C1C1E] p-6 hover:border-[#C9A86A]/30 hover:shadow-[0_4px_20px_rgba(201,168,106,0.08)] transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <h4
                  className="text-[#C9A86A] text-base mb-2"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {title}
                </h4>
                <p className="text-[#C7C7C7] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Open Roles */}
      <SectionWrapper bg="dark">
        <SectionHeading label="We're Hiring" title="Open Positions" />
        <div className="max-w-xl mx-auto">
          {hiring.map((role) => (
            <div
              key={role}
              className="flex items-center justify-between py-4 border-b border-[#C9A86A]/10 last:border-0 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                <span
                  className="text-[#F5F5F5] text-lg group-hover:text-[#C9A86A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {role}
                </span>
              </div>
              <Button href="/contact" variant="outline" size="sm">
                Apply
              </Button>
            </div>
          ))}
          <p className="text-[#C7C7C7] text-sm mt-8 text-center">
            Don&apos;t see your role? Send us your CV at{" "}
            <a href="mailto:jobs@kirwansdc.com" className="text-[#C9A86A] hover:underline">
              jobs@kirwansdc.com
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
