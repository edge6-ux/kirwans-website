import { kidsItems } from "@/data/menus";

export default function KidsMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Kid&apos;s Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        <p className="text-sm text-gold/70 mt-3">$14 — Drink Included</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {kidsItems.map((item) => (
          <div key={item.name} className="py-3 border-b border-white/5 last:border-0">
            <h3 className="text-sm md:text-base font-semibold text-white/90">{item.name}</h3>
            <p className="mt-1 text-xs md:text-sm text-white/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
