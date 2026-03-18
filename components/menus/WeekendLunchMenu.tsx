// ── Data ─────────────────────────────────────────────────────────────────────

interface LunchItem {
  name: string;
  description: string;
  price: string;
  dietary?: string;
}

// ── Sandwiches & Burgers ──────────────────────────────────────────────────────

const sandwichItems: LunchItem[] = [
  { name: "The BLT", price: "19", description: "Multigrain bread layered with mayo, lettuce, tomato, and smoky American bacon." },
  { name: "Beckett's Beef Burger*", dietary: "GF**", price: "18", description: "Brioche bun with arugula, sautéed onions, marinated tomato, and a pickle spear." },
  { name: "Chorizo Burger", price: "18", description: "Brioche bun with lettuce, tomato, and chipotle mayo." },
  { name: "Veggie Burger", price: "18", description: "Black bean patty on a brioche bun with chipotle mayo and arugula." },
  { name: "Prime Rib Steak Sandwich*", price: "23", description: "Ciabatta with shaved beef, arugula, Irish cheddar, and horseradish crème." },
  { name: "Crab Cake Sandwich", price: "21", description: "Brioche bun with jumbo lump crab cake, tarragon coleslaw, and tartar sauce." },
  { name: "Lamb Sandwich", price: "24", description: "Onion ciabatta with braised lamb shank, arugula, sautéed onions, and feta yogurt sauce." },
];

const sandwichExtras = ["Irish rashers", "American bacon", "Mushrooms"];
const sandwichCheeses = ["American", "Cashel Blue", "15 Fields Irish Cheddar", "Swiss", "Pepper Jack"];

// ── Traditional Plates ────────────────────────────────────────────────────────

const traditionalItems: LunchItem[] = [
  { name: "Bangers & Mash", price: "22", description: "Irish pork sausages with champ potatoes, sautéed onions, peas, and chicken gravy." },
  { name: "Crispy Fish & Chips", price: "21", description: "Beer-battered cod with mushy peas, tartar sauce, and pub fries misted with malt vinegar." },
];

// ── Salads ────────────────────────────────────────────────────────────────────

const saladItems: LunchItem[] = [
  { name: "Hearty Quinoa Salad", dietary: "GF V", price: "17", description: "Quinoa with red peppers, garbanzo beans, candied pecans, corn, and parsley in apple cider vinaigrette." },
  { name: "Cold Poached Shrimp Salad", dietary: "GF**", price: "19", description: "Mixed greens with avocado, cherry tomatoes, radish, and shrimp in tarragon vinaigrette." },
  { name: "Classic Caesar Salad", price: "16", description: "Baby gem lettuce with croutons, anchovies, and parmesan in creamy Caesar dressing." },
  { name: "Kirwan's House Salad", dietary: "V GF", price: "16", description: "Mesclun greens with cherry tomato, cucumber, red onion, and hard-boiled egg in balsamic vinaigrette." },
];

const saladAddOns = [
  { name: "Grilled Chicken", price: "10" },
  { name: "Steak*", price: "14" },
  { name: "Prawns", price: "15" },
  { name: "Salmon*", price: "13" },
];

// ── Brunch Classics ───────────────────────────────────────────────────────────

const brunchItems: LunchItem[] = [
  { name: "Full Irish Breakfast", dietary: "GF**", price: "22", description: "Two eggs any style with Irish sausage, Irish bacon, black pudding, white pudding, mushrooms, baked beans, and toast." },
  { name: "Corned Beef Hash & Eggs", dietary: "GF", price: "20", description: "Two eggs any style with sautéed corned beef, onions, potatoes, and gravy." },
  { name: "Classic Eggs Benedict", price: "18", description: "English muffin with Irish bacon, poached eggs, hollandaise, and a potato cake." },
  { name: "East Coast Crab Benedict", price: "23", description: "English muffin with crab meat and two eggs any style." },
  { name: "Bacon, Egg & Cheese", price: "17", description: "Scrambled eggs with Irish cheddar and American bacon on a brioche bun, served with a potato cake." },
  { name: "Chorizo Omelet", price: "18", description: "With onions and red peppers, served with a potato cake." },
  { name: "Veggie Omelet", price: "17", description: "Assorted vegetables served with home fries." },
  { name: "Mixed Berry Waffle", dietary: "V", price: "16", description: "Belgian waffle topped with fresh berries and whipped cream." },
  { name: "Cajun Shrimp & Grits", dietary: "GF", price: "19", description: "Stone-ground grits with Cajun seasoning and Irish cheddar, topped with shrimp." },
  { name: "Biscuits & Gravy", price: "18", description: "Buttermilk biscuit with spiced sausage gravy and two over-easy eggs." },
  { name: "Avocado Toast", price: "19", description: "Multigrain toast with smashed avocado, arugula, portobello mushrooms, and crumbled feta." },
  { name: "Yogurt & Granola", dietary: "V", price: "14", description: "Greek yogurt with berries, granola, and honey." },
  { name: "Lox & Bagel", price: "16", description: "Toasted bagel with caper cream cheese, pickled onion, cucumber, and smoked salmon." },
];

// ── Components ────────────────────────────────────────────────────────────────

function ItemRow({ item }: { item: LunchItem }) {
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

export default function WeekendLunchMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Lunch Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        <p className="text-sm md:text-base text-white/60 mt-3">Weekend</p>
        <p className="text-xs text-gold/70 mt-1">11am – 3pm</p>
      </div>

      {/* Main grid: Sandwiches, Traditional, Salads */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">

        {/* Sandwiches & Burgers */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">
              Sandwiches &amp; Burgers
            </h3>
            <div className="mt-1 h-px w-12 bg-gold/70" />
          </div>
          <div>
            {sandwichItems.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
          </div>
          {/* Extras */}
          <div className="pt-2">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70 font-semibold mb-2">
              Extras — $1.50 each
            </p>
            <p className="text-xs text-white/60">{sandwichExtras.join(" · ")}</p>
          </div>
          {/* Cheeses */}
          <div className="pt-1">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70 font-semibold mb-2">
              Cheeses — $1.50 each
            </p>
            <p className="text-xs text-white/60">{sandwichCheeses.join(" · ")}</p>
          </div>
        </div>

        {/* Traditional Plates */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">
              Traditional Plates
            </h3>
            <div className="mt-1 h-px w-12 bg-gold/70" />
          </div>
          <div>
            {traditionalItems.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Salads */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-serif text-gold tracking-wide uppercase">
              Salads
            </h3>
            <div className="mt-1 h-px w-12 bg-gold/70" />
          </div>
          <div>
            {saladItems.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
          </div>
          <div className="pt-2">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70 font-semibold mb-2">
              Add to Any Salad
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {saladAddOns.map((addon) => (
                <div key={addon.name} className="flex justify-between text-xs text-white/60">
                  <span>{addon.name}</span>
                  <span className="text-gold/80">${addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Brunch Classics */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-white/90 tracking-wide">
              Brunch Classics
            </h3>
          </div>
          <div className="flex-1 h-px bg-gold/20" />
        </div>
        <div className="grid gap-x-12 gap-y-0 md:grid-cols-2 max-w-5xl mx-auto">
          {brunchItems.map((item) => (
            <ItemRow key={item.name} item={item} />
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
