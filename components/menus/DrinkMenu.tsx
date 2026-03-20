import {
  wineSection,
  signatureCocktailsSection,
  warmersSection,
  irishWhiskeySection,
  scotchSection,
  draughtSection,
  cansSection,
  bottlesSection,
  happyHourSection,
  bournonRyeSection,
  canadianJapaneseSection,
  whiskeyFlightsSection,
  type DrinkSection,
  type DrinkSubGroup,
} from "@/data/drinks";

// ── Components ────────────────────────────────────────────────────────────────

function DrinkRow({ name, price, note }: { name: string; price?: string; note?: string }) {
  return (
    <div className="py-3 border-b border-white/5 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <span className="text-sm md:text-base font-semibold text-white/90">{name}</span>
          {note && (
            <span className="block text-xs text-white/50 mt-0.5 italic">{note}</span>
          )}
        </div>
        {price && <span className="shrink-0 text-sm md:text-base text-gold">${price}</span>}
      </div>
    </div>
  );
}

function SubGroup({ group }: { group: DrinkSubGroup }) {
  return (
    <div>
      {group.title && (
        <div className="mb-3">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold/70 font-semibold">
              {group.title}
            </h4>
            {group.price && (
              <span className="shrink-0 text-sm text-gold">${group.price}</span>
            )}
          </div>
          <div className="mt-1 h-px w-8 bg-gold/40" />
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

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-1 h-px bg-gold/20" />
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase whitespace-nowrap">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-gold/60 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex-1 h-px bg-gold/20" />
    </div>
  );
}

function groupGridClass(count: number): string {
  if (count === 1) return "max-w-2xl mx-auto";
  if (count === 2) return "grid gap-10 md:grid-cols-2 max-w-4xl mx-auto";
  return "grid gap-10 md:grid-cols-2 xl:grid-cols-3";
}

function Section({ section }: { section: DrinkSection }) {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className={groupGridClass(section.groups.length)}>
        {section.groups.map((group) => (
          <SubGroup key={group.title} group={group} />
        ))}
      </div>
    </div>
  );
}

function FlightCard({ group }: { group: DrinkSubGroup }) {
  return (
    <div className="border border-white/10 rounded p-5 bg-white/[0.02]">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h4 className="text-sm md:text-base font-serif text-gold tracking-wide">{group.title}</h4>
        {group.price && (
          <span className="shrink-0 text-sm md:text-base text-gold">${group.price}</span>
        )}
      </div>
      <div className="h-px bg-gold/30 mb-3" />
      <ul className="space-y-2">
        {group.items.map((item) => (
          <li key={item.name} className="text-sm text-white/70">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

function FlightsSection({ section }: { section: DrinkSection }) {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <SectionHeader title={section.title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.groups.map((group) => (
          <FlightCard key={group.title} group={group} />
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
      <Section section={bournonRyeSection} />
      <Section section={canadianJapaneseSection} />
      <FlightsSection section={whiskeyFlightsSection} />
    </section>
  );
}
