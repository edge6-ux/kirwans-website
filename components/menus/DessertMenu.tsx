import { dessertItems } from "@/data/menus";

export default function DessertMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Dessert Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-3">Available nightly</p> */}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {dessertItems.map((item) => (
          <div key={item.name} className="py-3 border-b border-white/5 last:border-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-white/90">
                {item.name}
                {item.dietary && (
                  <span className="ml-2 text-[0.7rem] uppercase tracking-wide text-white/50">
                    {item.dietary}
                  </span>
                )}
              </h3>
              <span className="shrink-0 text-sm md:text-base text-gold">${item.price}</span>
            </div>
            <p className="mt-1 text-xs md:text-sm text-white/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[0.7rem] md:text-xs text-white/50 mt-10 text-center leading-relaxed">
        GF = Gluten Free · GF** = Gluten Free with small adjustment · V = Vegetarian · VV = Vegan
      </p>
    </section>
  );
}
