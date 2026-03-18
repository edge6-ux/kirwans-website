// ── Data ─────────────────────────────────────────────────────────────────────

interface LunchItem {
  name: string;
  description: string;
  price: string;
  dietary?: string;
}

interface LunchCategory {
  title: string;
  items: LunchItem[];
}

interface TraditionalGroup {
  subtitle: string;
  items: LunchItem[];
}

const lunchData: LunchCategory[] = [
  {
    title: "Starters & Snacks",
    items: [
      { name: "Raw Oysters on the Half Shell", dietary: "GF", price: "17 / 32", description: "Six or dozen. Served with mignonette, chimichurri, and classic cocktail sauce." },
      { name: "Soup of the Day", dietary: "GF**", price: "14", description: "Served with Irish brown bread and Kerrygold butter." },
      { name: "Chowder of the Day", price: "14", description: "Rich, creamy chowder served with Irish brown bread and Kerrygold butter." },
      { name: "Traditional Irish Coddle", price: "14", description: "Bacon, sausage, onions, kale, and rosemary simmered together, served with Irish brown bread and Kerrygold butter." },
      { name: "Southern Rolls", price: "16", description: "Crispy rolls filled with chicken, vegetables, black beans, cheese, and boom boom sauce." },
      { name: "Irish Baked Brie", dietary: "GF**", price: "16", description: "Warm brie drizzled with honey, served with crostini and fresh grapes." },
      { name: "Calamari", price: "18", description: "Lightly fried calamari with cherry peppers and boom boom sauce." },
      { name: "Hummus", dietary: "GF** VV", price: "14", description: "House-made hummus with pita points, carrots, and celery." },
      { name: "Spinach & Artichoke Dip", dietary: "GF** V", price: "18", description: "Creamy spinach-artichoke dip served with Old Bay chips." },
      { name: "Deviled Eggs", dietary: "GF", price: "14", description: "Topped with Irish rasher and chives." },
      { name: "Irish Sausage Rolls", price: "18", description: "Flaky pastry wrapped around Irish sausage, served with curry sauce and dijonnaise." },
      { name: "Mini Maryland Crab Cakes", price: "18", description: "Served with coleslaw and sweet chili sauce." },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Goat Cheese Salad", dietary: "GF** V", price: "16", description: "Mixed baby greens with roasted red peppers, pearled couscous, cherry tomatoes, candied walnuts, red onion, crumbled goat cheese, and goat cheese crisps." },
      { name: "Classic Caesar Salad", dietary: "GF**", price: "16", description: "Romaine lettuce tossed with garlic croutons and parmesan cheese." },
      { name: "Kirwan's House Salad", dietary: "GF V", price: "16", description: "Mixed greens with cherry tomatoes, cucumber, red onion, and hard-boiled egg." },
      { name: "Wedge Salad", dietary: "GF", price: "18", description: "Baby iceberg topped with crispy bacon lardons, hard-boiled egg, blue cheese, and pickled onions." },
      { name: "Chickpea & Corn Salad", dietary: "GF V", price: "16", description: "Boston Bibb lettuce with chickpeas, sweet corn, red onion, and shaved parmesan." },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Beckett's Beef Burger*", dietary: "GF**", price: "20", description: "Arugula, tomato, onion, mayo, and pickles." },
      { name: "Kirwan's Lamb Burger*", dietary: "GF**", price: "24", description: "Feta, tomato, cucumber, shallots, dill, mint, and parsley." },
      { name: "Dark Horse Chorizo Burger", dietary: "GF**", price: "18", description: "Lettuce, tomato, and chipotle mayo." },
      { name: "Crispy Chicken Sandwich", price: "18", description: "Pickled onions, lettuce, and ranch." },
      { name: "Black Bean Burger", dietary: "V", price: "18", description: "Lettuce, tomato, red onion, and chipotle mayo." },
      { name: "Irish Bacon Panini", dietary: "GF**", price: "20", description: "Irish rashers with lettuce, tomato, and mayo." },
      { name: "Corned Beef Sandwich", dietary: "GF**", price: "22", description: "Coleslaw, Thousand Island dressing, and a pickled spear." },
      { name: "Irish Steak Sandwich", dietary: "GF**", price: "24", description: "6oz Irish striploin on toasted panini with fried onions, arugula, and horseradish cream." },
      { name: "The BLT", dietary: "GF**", price: "20", description: "American bacon, lettuce, and tomato." },
      { name: "Lobster Roll*", dietary: "GF**", price: "26", description: "Lobster mixed with celery, onion, Dijon, and mayo." },
    ],
  },
];

const traditionalFareGroups: TraditionalGroup[] = [
  {
    subtitle: "Irish Pub Classics",
    items: [
      { name: "Traditional Irish Breakfast", price: "20", description: "Rashers, sausage, eggs, black & white pudding, baked beans, home fries, Irish brown bread, and Kerrygold butter." },
      { name: "Lamb Stew", price: "18", description: "Hearty Irish stew served with Irish brown bread and Kerrygold butter." },
      { name: "Fish & Chips", price: "24", description: "Beer-battered cod with fries, tartar sauce, and a malt vinegar spritz." },
      { name: "Bangers & Mash", price: "22", description: "Irish pork sausage with champ potatoes, peas, fried onions, and gravy." },
      { name: "Bacon & Cabbage", dietary: "GF**", price: "26", description: "Thick-cut Irish ham with mashed potatoes, kale, cabbage, and parsley sauce." },
    ],
  },
  {
    subtitle: "From the Kitchen",
    items: [
      { name: "Shepherd's Pie", price: "28", description: "Braised lamb with carrots, cipollini onions, and peas, topped with mashed potatoes and parmesan, served with a lamb lollipop." },
      { name: "Chicken Pot Pie", price: "26", description: "Carrots, celery, peas, cipollini onions, mashed potatoes, and gravy." },
      { name: "Homemade Meatloaf", price: "30", description: "Served with mashed potatoes, broccolini, and gravy." },
      { name: "Traditional Irish Spice Bag", price: "22", description: "Buttermilk chicken strips with fries, onions, peppers, red chilies, scallions, spice bag seasoning, and curry sauce." },
    ],
  },
  {
    subtitle: "Curries & Pasta",
    items: [
      { name: "Chicken Curry", price: "28", description: "Mild Irish curry with chicken, mixed vegetables, jasmine rice, and toasted focaccia." },
      { name: "Irish Chickpea Curry", dietary: "VV", price: "24", description: "Mild Irish curry with chickpeas, red onion, peppers, and toasted focaccia." },
      { name: "Marie's Pasta", price: "36", description: "Farfalle pasta in a creamy white wine and paprika sauce with chicken, bacon, shrimp, peppers, and toasted focaccia." },
    ],
  },
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

export default function WeekdayLunchMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Lunch Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        <p className="text-sm md:text-base text-white/60 mt-3">Weekday</p>
        <p className="text-xs text-gold/70 mt-2">11am – 3pm</p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {lunchData.map((category) => (
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
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-white/90 tracking-wide">
              Kirwan&apos;s Traditional Irish Fare
            </h3>
            <p className="text-xs text-white/50 mt-1 tracking-widest uppercase">
              Hearty Irish Cooking, Made from Scratch &nbsp;·&nbsp; (available all day)
            </p>
          </div>
          <div className="flex-1 h-px bg-gold/20" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {traditionalFareGroups.map((group) => (
            <div key={group.subtitle} className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
              <div className="mb-4">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/80 font-semibold">
                  {group.subtitle}
                </p>
                <div className="mt-1.5 h-px w-8 bg-gold/40" />
              </div>
              <div>
                {group.items.map((item) => (
                  <ItemRow key={item.name} item={item} />
                ))}
              </div>
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
