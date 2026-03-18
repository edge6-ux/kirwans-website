// ── Data ─────────────────────────────────────────────────────────────────────

interface DinnerItem {
  name: string;
  description: string;
  price: string;
  dietary?: string;
}

interface DinnerGridCategory {
  title: string;
  items: DinnerItem[];
  addOns?: { name: string; price: string }[];
}

const dinnerGridCategories: DinnerGridCategory[] = [
  {
    title: "Starters",
    items: [
      { name: "Raw Oysters on the Half Shell", price: "17 / 32", description: "Served with apple mignonette and classic cocktail sauce." },
      { name: "Soup of the Day", price: "14", description: "Served with Irish brown bread and Kerrygold butter." },
      { name: "Chowder of the Day", price: "16", description: "Creamy house chowder served with Irish brown bread and Kerrygold butter." },
      { name: "Traditional Irish Coddle", price: "14", description: "Bacon, sausage, onions, kale, and rosemary simmered together, served with Irish brown bread and Kerrygold butter." },
      { name: "Southern Rolls", price: "16", description: "Crispy rolls filled with chicken, vegetables, black beans, cheese, and boom boom sauce." },
      { name: "Irish Baked Brie", dietary: "GF** V", price: "16", description: "Warm brie drizzled with honey, served with crostini and fresh grapes." },
      { name: "Calamari", price: "18", description: "Lightly fried calamari with cherry peppers and boom boom sauce." },
      { name: "Hummus", dietary: "GF** VV", price: "14", description: "House-made hummus with pita points, carrots, and celery." },
      { name: "Spinach & Artichoke Dip", dietary: "GF** V", price: "18", description: "Creamy spinach-artichoke dip served with Old Bay chips." },
      { name: "Smoked Salmon Deviled Eggs", dietary: "GF", price: "16", description: "Topped with smoked salmon, dill cream, and fried capers." },
      { name: "Irish Sausage Rolls", price: "18", description: "Flaky pastry wrapped around Irish sausage, served with curry sauce and dijonnaise." },
      { name: "Mini Maryland Crab Cakes", price: "18", description: "Served with coleslaw and sweet chili sauce." },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Kirwan's House Salad", dietary: "GF V", price: "16", description: "Mixed greens with cherry tomatoes, cucumber, red onion, radish, and hard-boiled egg, served with your choice of dressing." },
      { name: "Goat Cheese Salad", dietary: "GF", price: "18", description: "Whipped goat cheese with baby beets, orange segments, arugula, and candied walnuts, tossed in citrus dressing." },
      { name: "Classic Caesar Salad", dietary: "GF**", price: "16", description: "Romaine lettuce with garlic croutons and parmesan, tossed in Caesar dressing." },
      { name: "Roasted Chickpea Cobb", dietary: "GF", price: "18", description: "Baby iceberg with red cabbage, carrots, corn, roasted chickpeas, avocado, and cherry tomatoes, served with sesame dressing." },
      { name: "Spinach Salad", dietary: "GF V", price: "18", description: "Baby spinach and arugula with pomegranate seeds, red onion, and blue cheese crumbles, tossed in balsamic dressing." },
    ],
    addOns: [
      { name: "Grilled Chicken", price: "10" },
      { name: "Steak*", price: "14" },
      { name: "Prawns", price: "15" },
      { name: "Salmon*", price: "13" },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Beckett's Beef Burger*", dietary: "GF**", price: "22", description: "Arugula, tomato, bacon jam, chimichurri aioli, and a pickle spear." },
      { name: "Kirwan's Lamb Burger*", dietary: "GF**", price: "24", description: "Feta, tomato, tzatziki, and red onion." },
      { name: "Crispy Chicken Sandwich", price: "20", description: "Lettuce, tomato, red onion, and boom boom sauce." },
      { name: "Black Bean Burger", dietary: "V", price: "18", description: "Lettuce, tomato, red onion, and chipotle mayo." },
      { name: "Irish Steak Sandwich*", dietary: "GF**", price: "24", description: "6oz Irish sirloin on toasted panini with fried onions, arugula, and garlic butter." },
      { name: "Corned Beef Sandwich", dietary: "GF**", price: "22", description: "Coleslaw, Thousand Island dressing, and a pickle spear." },
      { name: "Lobster Roll*", dietary: "GF**", price: "26", description: "Lobster with celery and citrus aioli." },
    ],
  },
  {
    title: "Flatbreads",
    items: [
      { name: "Goat Cheese Flatbread", dietary: "V", price: "18", description: "Figs, goat cheese, red onion, arugula, and honey." },
      { name: "Mushroom & Garlic Flatbread", dietary: "V", price: "20", description: "Roasted garlic purée, mushrooms, arugula, and red onions." },
      { name: "Buffalo Chicken Flatbread", price: "22", description: "Chicken, buffalo sauce, blue cheese, and scallions." },
      { name: "Pepperoni Flatbread", price: "18", description: "Classic pepperoni." },
    ],
  },
];

const dinnerLandItems: DinnerItem[] = [
  { name: "Duroc Pork Chop", price: "36", description: "Served with Dubliner mac n' cheese, roasted cauliflower, and whiskey glaze." },
  { name: "Homemade BBQ Meatloaf", price: "30", description: "Champ mash, green peas, and gravy." },
  { name: "Guinness Braised Short Rib", dietary: "GF**", price: "36", description: "Mashed potatoes, mushrooms, fried onions, and Guinness au jus." },
  { name: "Beef Wellington*", price: "46", description: "8oz tenderloin with Dijon mustard, mushroom pâté, prosciutto, colcannon mash, grilled broccolini, and red wine demi-glace." },
];

const dinnerSteaks: { name: string; price: string }[] = [
  { name: "8oz Filet Mignon", price: "38" },
  { name: "10oz Sirloin Steak", price: "36" },
  { name: "12oz Rib Eye", price: "40" },
];

const dinnerSeaItems: DinnerItem[] = [
  { name: "Pan-Seared Salmon*", dietary: "GF", price: "32", description: "Cilantro rice and Veracruz sauce." },
  { name: "Pan-Seared Rainbow Trout", dietary: "GF", price: "28", description: "Mashed potatoes, roasted rainbow carrots, and white wine sauce." },
  { name: "Marie's Pasta", price: "36", description: "Farfalle pasta in creamy white wine sauce with chicken, bacon, shrimp, peppers, and garlic toast." },
  { name: "Grilled Branzino", dietary: "GF", price: "38", description: "Coconut rice pilaf, grilled broccolini, and white wine caper sauce." },
  { name: "P.E.I. Mussels", dietary: "GF**", price: "26", description: "Coconut curry sauce with cherry tomatoes, fried leeks, garlic toast, and pub fries." },
];

const dinnerVegetarian: DinnerItem[] = [
  { name: "Irish Chickpea Curry", dietary: "VV", price: "26", description: "Mild Irish curry with chickpeas, red onions, peppers, and garlic toast." },
  { name: "Cauliflower Steak", dietary: "VV", price: "24", description: "Served with wild rice and chimichurri." },
  { name: "Mushroom Risotto", dietary: "V VV*", price: "26", description: "Wild mushrooms in a creamy coconut-milk risotto." },
];

const dinnerSides: { name: string; price: string }[] = [
  { name: "Mashed Potatoes", price: "8" },
  { name: "Champ Mashed Potatoes", price: "9" },
  { name: "Colcannon Mashed Potatoes", price: "10" },
  { name: "Jasmine Rice", price: "8" },
  { name: "Wild Rice", price: "8" },
  { name: "Parmesan Truffle Fries", price: "10" },
  { name: "Grilled Broccolini", price: "9" },
  { name: "Roasted Rainbow Carrots", price: "9" },
  { name: "Pub Fries", price: "8" },
  { name: "Sweet Potato Fries", price: "8" },
  { name: "Roasted Brussels & Bacon", price: "10" },
  { name: "Mac n' Cheese", price: "12" },
  { name: "Side Salad", price: "8" },
  { name: "Carrots & Celery", price: "8" },
  { name: "Irish Brown Bread", price: "5" },
  { name: "Pita Bread", price: "4" },
];

// ── Components ────────────────────────────────────────────────────────────────

function ItemRow({ item }: { item: DinnerItem }) {
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
