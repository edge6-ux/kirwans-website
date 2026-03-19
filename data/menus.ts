// ── Shared Types ──────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

// ── Dinner Menu ───────────────────────────────────────────────────────────────

export interface DinnerGridCategory {
  title: string;
  items: MenuItem[];
  addOns?: PriceItem[];
}

export interface TraditionalGroup {
  subtitle: string;
  items: MenuItem[];
}

export const dinnerGridCategories: DinnerGridCategory[] = [
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

export const dinnerLandItems: MenuItem[] = [
  { name: "Duroc Pork Chop", price: "36", description: "Served with Dubliner mac n' cheese, roasted cauliflower, and whiskey glaze." },
  { name: "Homemade BBQ Meatloaf", price: "30", description: "Champ mash, green peas, and gravy." },
  { name: "Guinness Braised Short Rib", dietary: "GF**", price: "36", description: "Mashed potatoes, mushrooms, fried onions, and Guinness au jus." },
  { name: "Beef Wellington*", price: "46", description: "8oz tenderloin with Dijon mustard, mushroom pâté, prosciutto, colcannon mash, grilled broccolini, and red wine demi-glace." },
];

export const dinnerSteaks: PriceItem[] = [
  { name: "8oz Filet Mignon", price: "38" },
  { name: "10oz Sirloin Steak", price: "36" },
  { name: "12oz Rib Eye", price: "40" },
];

export const dinnerSeaItems: MenuItem[] = [
  { name: "Pan-Seared Salmon*", dietary: "GF", price: "32", description: "Cilantro rice and Veracruz sauce." },
  { name: "Pan-Seared Rainbow Trout", dietary: "GF", price: "28", description: "Mashed potatoes, roasted rainbow carrots, and white wine sauce." },
  { name: "Marie's Pasta", price: "36", description: "Farfalle pasta in creamy white wine sauce with chicken, bacon, shrimp, peppers, and garlic toast." },
  { name: "Grilled Branzino", dietary: "GF", price: "38", description: "Coconut rice pilaf, grilled broccolini, and white wine caper sauce." },
  { name: "P.E.I. Mussels", dietary: "GF**", price: "26", description: "Coconut curry sauce with cherry tomatoes, fried leeks, garlic toast, and pub fries." },
];

export const dinnerVegetarian: MenuItem[] = [
  { name: "Irish Chickpea Curry", dietary: "VV", price: "26", description: "Mild Irish curry with chickpeas, red onions, peppers, and garlic toast." },
  { name: "Cauliflower Steak", dietary: "VV", price: "24", description: "Served with wild rice and chimichurri." },
  { name: "Mushroom Risotto", dietary: "V VV*", price: "26", description: "Wild mushrooms in a creamy coconut-milk risotto." },
];

export const dinnerSides: PriceItem[] = [
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

// ── Dessert Menu ──────────────────────────────────────────────────────────────

export const dessertItems: MenuItem[] = [
  {
    name: "Chocolate Brownie",
    dietary: "GF V",
    price: "14",
    description: "Warm chocolate brownie topped with caramel sauce, candied walnuts, and vanilla ice cream.",
  },
  {
    name: "Guinness Tiramisu",
    dietary: "V",
    price: "14",
    description: "Layers of mascarpone cream infused with Guinness and finished with cocoa powder.",
  },
  {
    name: "Bread Pudding",
    dietary: "V",
    price: "14",
    description: "Classic bread pudding with Baileys, raisins, caramel sauce, and vanilla ice cream.",
  },
  {
    name: "Mini Lemon Tarts",
    dietary: "V",
    price: "14",
    description: "Bright lemon tarts with orange glaze, caramel drizzle, and toasted meringue.",
  },
  {
    name: "Homemade Profiteroles",
    dietary: "V",
    price: "14",
    description: "Light pastry filled with cream, served with chocolate sauce and fresh berries.",
  },
];

// ── Kids Menu ─────────────────────────────────────────────────────────────────

export interface KidsItem {
  name: string;
  description: string;
}

export const kidsItems: KidsItem[] = [
  { name: "Chicken Tenders & Fries",         description: "Classic crispy tenders served with golden fries."                       },
  { name: "Mini Fish N' Chips",              description: "Kid-sized portion of our signature beer-battered cod with fries."       },
  { name: "Mac N' Cheese",                   description: "Creamy, kid-friendly macaroni and cheese."                              },
  { name: "Bowtie Pasta",                    description: "Served with marinara sauce or butter."                                  },
  { name: "Grilled Cheese w/ Irish Cheddar", description: "Toasted sandwich with rich Irish cheddar."                             },
  { name: "Cheese Flatbread",                description: "Warm flatbread topped with melted cheese."                             },
];

// ── Weekday Lunch Menu ────────────────────────────────────────────────────────

export interface LunchCategory {
  title: string;
  items: MenuItem[];
}

export const weekdayLunchData: LunchCategory[] = [
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

export const weekdayTraditionalFare: TraditionalGroup[] = [
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

// ── Weekend Lunch Menu ────────────────────────────────────────────────────────

export const weekendSandwichItems: MenuItem[] = [
  { name: "The BLT", price: "19", description: "Multigrain bread layered with mayo, lettuce, tomato, and smoky American bacon." },
  { name: "Beckett's Beef Burger*", dietary: "GF**", price: "18", description: "Brioche bun with arugula, sautéed onions, marinated tomato, and a pickle spear." },
  { name: "Chorizo Burger", price: "18", description: "Brioche bun with lettuce, tomato, and chipotle mayo." },
  { name: "Veggie Burger", price: "18", description: "Black bean patty on a brioche bun with chipotle mayo and arugula." },
  { name: "Prime Rib Steak Sandwich*", price: "23", description: "Ciabatta with shaved beef, arugula, Irish cheddar, and horseradish crème." },
  { name: "Crab Cake Sandwich", price: "21", description: "Brioche bun with jumbo lump crab cake, tarragon coleslaw, and tartar sauce." },
  { name: "Lamb Sandwich", price: "24", description: "Onion ciabatta with braised lamb shank, arugula, sautéed onions, and feta yogurt sauce." },
];

export const weekendSandwichExtras: string[] = ["Irish rashers", "American bacon", "Mushrooms"];
export const weekendSandwichCheeses: string[] = ["American", "Cashel Blue", "15 Fields Irish Cheddar", "Swiss", "Pepper Jack"];

export const weekendTraditionalItems: MenuItem[] = [
  { name: "Bangers & Mash", price: "22", description: "Irish pork sausages with champ potatoes, sautéed onions, peas, and chicken gravy." },
  { name: "Crispy Fish & Chips", price: "21", description: "Beer-battered cod with mushy peas, tartar sauce, and pub fries misted with malt vinegar." },
];

export const weekendSaladItems: MenuItem[] = [
  { name: "Hearty Quinoa Salad", dietary: "GF V", price: "17", description: "Quinoa with red peppers, garbanzo beans, candied pecans, corn, and parsley in apple cider vinaigrette." },
  { name: "Cold Poached Shrimp Salad", dietary: "GF**", price: "19", description: "Mixed greens with avocado, cherry tomatoes, radish, and shrimp in tarragon vinaigrette." },
  { name: "Classic Caesar Salad", price: "16", description: "Baby gem lettuce with croutons, anchovies, and parmesan in creamy Caesar dressing." },
  { name: "Kirwan's House Salad", dietary: "V GF", price: "16", description: "Mesclun greens with cherry tomato, cucumber, red onion, and hard-boiled egg in balsamic vinaigrette." },
];

export const weekendSaladAddOns: PriceItem[] = [
  { name: "Grilled Chicken", price: "10" },
  { name: "Steak*", price: "14" },
  { name: "Prawns", price: "15" },
  { name: "Salmon*", price: "13" },
];

export const weekendBrunchItems: MenuItem[] = [
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
