import {
  dinnerGridCategories,
  dinnerLandItems,
  dinnerSteaks,
  dinnerSeaItems,
  dinnerVegetarian,
  dinnerSides,
  type MenuItem,
} from "@/data/menus";

// ── Components ────────────────────────────────────────────────────────────────

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-3 border-b border-white/5 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-sm md:text-base font-semibold text-white/90">
          {item.name}
          {item.dietary && (
            <span className="ml-2 text-[0.7rem] uppercase tracking-wide text-white/50">
              {item.dietary}
            </span>
          )}
        </h4>
        <span className="shrink-0 text-sm md:text-base text-gold">${item.price}</span>
      </div>
      <p className="mt-1 text-xs md:text-sm text-white/70 leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function DinnerMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Dinner Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-3">5:00pm – close</p> */}
      </div>

      {/* Grid: Starters / Salads / Sandwiches / Flatbreads */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {dinnerGridCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">
                {category.title}
              </h3>
              <div className="mt-1 h-px w-12 bg-gold/70" />
            </div>
            <div className="mt-4 space-y-4">
              {category.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-sm md:text-base font-semibold text-white/90">
                      {item.name}
                      {item.dietary && (
                        <span className="ml-2 text-[0.7rem] uppercase tracking-wide text-white/50">
                          {item.dietary}
                        </span>
                      )}
                    </h4>
                    <span className="shrink-0 text-sm md:text-base text-gold">${item.price}</span>
                  </div>
                  <p className="mt-1 text-xs md:text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            {category.addOns && (
              <div className="pt-2">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70 font-semibold mb-2">
                  Add to Any Salad
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {category.addOns.map((addon) => (
                    <div key={addon.name} className="flex justify-between text-xs text-white/60">
                      <span>{addon.name}</span>
                      <span className="text-gold/80">${addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mains */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <p className="text-xs text-white/50 tracking-widest uppercase whitespace-nowrap">Mains</p>
          <div className="flex-1 h-px bg-gold/20" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">From the Land</h3>
            <div className="h-px w-12 bg-gold/70 mb-4" />
            <div>
              {dinnerLandItems.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </div>
            <div className="pt-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70 font-semibold mb-2">
                Steak Selection
              </p>
              <div className="h-px w-8 bg-gold/40 mb-3" />
              {dinnerSteaks.map((steak) => (
                <div key={steak.name} className="flex justify-between items-baseline py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm font-semibold text-white/90">{steak.name}</span>
                  <span className="text-sm text-gold">${steak.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">From the Sea</h3>
            <div className="h-px w-12 bg-gold/70 mb-4" />
            <div>
              {dinnerSeaItems.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">Vegetarian</h3>
            <div className="h-px w-12 bg-gold/70 mb-4" />
            <div>
              {dinnerVegetarian.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sides */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <h3 className="text-xl md:text-2xl font-serif text-white/90 tracking-wide whitespace-nowrap">Sides</h3>
          <div className="flex-1 h-px bg-gold/20" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 max-w-4xl mx-auto">
          {dinnerSides.map((side) => (
            <div key={side.name} className="flex justify-between items-baseline border-b border-white/5 pb-2">
              <span className="text-xs md:text-sm text-white/80">{side.name}</span>
              <span className="text-xs md:text-sm text-gold ml-3 shrink-0">${side.price}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[0.7rem] md:text-xs text-white/50 mt-10 text-center leading-relaxed max-w-2xl mx-auto">
        *All meats are cooked to required minimum temperatures. Consuming raw or undercooked food may increase the risk of foodborne illness.
        <br />
        GF = Gluten Free · GF** = Gluten Free with small adjustment · V = Vegetarian · VV = Vegan
      </p>
    </section>
  );
}
