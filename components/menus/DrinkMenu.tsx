import { wineSection, signatureCocktailsSection, warmersSection, irishWhiskeySection, scotchSection, draughtSection, cansSection, bottlesSection, happyHourSection, type DrinkSection, type DrinkSubGroup } from "@/data/drinks";

// ── Components ────────────────────────────────────────────────────────────────

function DrinkRow({ name, price, note }: { name: string; price: string; note?: string }) {
  return (
    <div className="py-3 border-b border-white/5 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <span className="text-sm md:text-base font-semibold text-white/90">{name}</span>
          {note && (
            <span className="block text-xs text-white/45 mt-0.5 italic">{note}</span>
          )}
        </div>
        <span className="shrink-0 text-sm md:text-base text-[#C9A86A]">${price}</span>
      </div>
    </div>
  );
}

function SubGroup({ group }: { group: DrinkSubGroup }) {
  return (
    <div>
      {group.title && (
        <div className="mb-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-[#C9A86A]/70 font-semibold">
            {group.title}
          </h4>
          <div className="mt-1 h-px w-8 bg-[#C9A86A]/40" />
        </div>
      )}
      <div>
        {group.items.map((item) => (
          <DrinkRow key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function Section({ section }: { section: DrinkSection }) {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-[#C9A86A]/20" />
        <div className="text-center">
          <h3
            className="text-3xl md:text-4xl whitespace-nowrap"
            style={{
              fontFamily: "var(--font-great-vibes, cursive)",
              color: "rgba(255,255,255,0.85)",
              WebkitTextStroke: "0.5px #C9A86A",
              textShadow: "0 0 30px rgba(201,168,106,0.35)",
            }}
          >
            {section.title}
          </h3>
          {section.subtitle && (
            <p className="text-xs uppercase tracking-widest text-[#C9A86A]/60 mt-1">
              {section.subtitle}
            </p>
          )}
        </div>
        <div className="flex-1 h-px bg-[#C9A86A]/20" />
      </div>

      {/* Sub-groups grid */}
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {section.groups.map((group) => (
          <SubGroup key={group.title} group={group} />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function DrinkMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <Section section={happyHourSection} />
      <Section section={draughtSection} />
      <Section section={cansSection} />
      <Section section={bottlesSection} />
      <Section section={wineSection} />
      <Section section={signatureCocktailsSection} />
      <Section section={warmersSection} />
      <Section section={irishWhiskeySection} />
      <Section section={scotchSection} />
    </section>
  );
}
