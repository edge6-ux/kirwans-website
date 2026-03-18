import Link from "next/link";

export interface MenuCardData {
  title: string;
  description: string;
  href: string;
  hours?: string; // e.g. "Mon–Fri · 11:30am – 3:00pm" — add when ready
}

export function MenuHubCard({ card, large = false }: { card: MenuCardData; large?: boolean }) {
  return (
    <Link
      href={card.href}
      className="group relative flex flex-col justify-between bg-[#0d0d0f] border border-white/5 rounded-sm hover:border-gold/40 transition-colors duration-300"
      style={{ padding: large ? "2.25rem" : "1.75rem" }}
    >
      {/* Top gold accent line — expands on hover */}
      <div className="absolute top-0 left-7 w-8 h-px bg-gold/50 group-hover:w-16 transition-all duration-300" />

      <div>
        <h2
          className={`font-serif text-white/90 tracking-wide group-hover:text-gold transition-colors duration-300 ${
            large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {card.title}
        </h2>

        {/* Hours slot — renders only when populated */}
        {card.hours ? (
          <p className="mt-2 text-[0.7rem] uppercase tracking-widest text-gold/60">
            {card.hours}
          </p>
        ) : (
          // Reserve vertical space so layout doesn't shift when hours are added
          <div className="mt-2 h-4" />
        )}

        <p className="mt-3 text-sm text-white/50 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* View arrow */}
      <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-white/30 group-hover:text-gold transition-colors duration-300">
        <span>View Menu</span>
        <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </div>
    </Link>
  );
}
