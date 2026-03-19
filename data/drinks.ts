// ── Shared Types ──────────────────────────────────────────────────────────────

export interface DrinkItem {
  name: string;
  price: string;
  note?: string; // origin, description, or blend info
}

export interface DrinkSubGroup {
  title: string;
  items: DrinkItem[];
}

export interface DrinkSection {
  id: string;
  title: string;
  subtitle?: string;
  groups: DrinkSubGroup[];
}

// ── Scotch ────────────────────────────────────────────────────────────────────

export const scotchSection: DrinkSection = {
  id: "scotch",
  title: "Scotch",
  groups: [
    {
      title: "Speyside",
      items: [
        { name: "Aberlour 12yr",                price: "16" },
        { name: "Aberlour 18yr",                price: "70" },
        { name: "Aberlour A'bunadh",            price: "24" },
        { name: "Balvenie 12yr Double Cask",    price: "16" },
        { name: "Balvenie 14yr Caribbean Cask", price: "22" },
        { name: "Balvenie 16yr French Oak",     price: "65" },
        { name: "Balvenie 21yr Port",           price: "75" },
        { name: "Benriach 10yr",                price: "12" },
        { name: "Benriach 12yr",                price: "16" },
        { name: "Benriach Smoky 10yr",          price: "14" },
        { name: "Benriach Smoky 12yr",          price: "16" },
        { name: "Benromach Organic",            price: "14" },
        { name: "Glendronach 12yr",             price: "14" },
        { name: "Glendronach 15yr",             price: "20" },
        { name: "Glenfiddich 12yr",             price: "14" },
        { name: "Glenfiddich 14yr",             price: "16" },
        { name: "Glenfiddich 15yr",             price: "18" },
        { name: "Glenfiddich 18yr",             price: "26" },
        { name: "Glenfiddich 19yr",             price: "40" },
        { name: "Glenfiddich 21yr",             price: "60" },
        { name: "Glenfiddich Fire & Cane",      price: "16" },
        { name: "Glenfiddich IPA",              price: "16" },
        { name: "Glenfiddich Project XXX",      price: "16" },
        { name: "Glenlivet 12yr",               price: "14" },
        { name: "Glenlivet 15yr",               price: "20" },
        { name: "Glenlivet 18yr",               price: "30" },
        { name: "Glenlivet Caribbean Reserve",  price: "16" },
        { name: "Glenrothes Sherry",            price: "12" },
        { name: "Macallan 12yr Double Cask",    price: "16" },
        { name: "Macallan 12yr Sherry Cask",    price: "20" },
        { name: "Macallan 15yr",                price: "40" },
        { name: "Macallan 18yr",                price: "90" },
        { name: "Speyburn 10yr",                price: "12" },
        { name: "Speyburn Bradan Orach",        price: "12" },
      ],
    },
    {
      title: "Lowland",
      items: [
        { name: "Auchentoshan 12yr", price: "14" },
        { name: "Glenkinchie 12yr",  price: "16" },
      ],
    },
    {
      title: "Highland",
      items: [
        { name: "Dalmore 12yr",            price: "16" },
        { name: "Dalmore 15yr",            price: "26" },
        { name: "Dalmore 18yr",            price: "90" },
        { name: "Dalmore Cigar Malt",      price: "40" },
        { name: "Deanston 12yr",           price: "12" },
        { name: "Deanston 14yr",           price: "20" },
        { name: "Glenglassaugh",           price: "18" },
        { name: "Glenmorangie",            price: "14" },
        { name: "Highland Park 12yr",      price: "14" },
        { name: "Highland Park 15yr Fire", price: "60" },
        { name: "Highland Park 18yr",      price: "45" },
        { name: "Highland Park Dark Origins", price: "20" },
        { name: "Highland Park Magnus",    price: "16" },
        { name: "Highland Park Valkyrie",  price: "16" },
        { name: "Loch Lomond 12yr",        price: "12" },
        { name: "Oban 14yr",               price: "20" },
        { name: "Old Pulteney 12yr",       price: "12" },
        { name: "Old Pulteney Navigator",  price: "12" },
        { name: "Talisker 10yr",           price: "16" },
        { name: "Talisker 18yr",           price: "45" },
        { name: "Tomatin 12yr",            price: "14" },
      ],
    },
    {
      title: "Islay",
      items: [
        { name: "Ardbeg Wee Beastie 5yr",      price: "14" },
        { name: "Ardbeg 10yr",                 price: "16" },
        { name: "Bruichladdich Barley",        price: "18" },
        { name: "Bruichladdich Classic Laddie", price: "14" },
        { name: "Bunnahabhain 12yr",           price: "16" },
        { name: "Caol Ila 12yr",               price: "18" },
        { name: "Isle of Jura 10yr",           price: "12" },
        { name: "Lagavulin 16yr",              price: "18" },
        { name: "Laphroaig 10yr",              price: "14" },
      ],
    },
    {
      title: "Campbeltown",
      items: [
        { name: "Glen Scotia Double Cask", price: "12" },
      ],
    },
    {
      title: "Blended",
      items: [
        { name: "Chivas Regal",            price: "12" },
        { name: "Dewar's White Label",     price: "10" },
        { name: "Johnnie Walker Black",    price: "12" },
        { name: "Johnnie Walker Blue",     price: "60" },
        { name: "Johnnie Walker Green",    price: "16" },
        { name: "Johnnie Walker High Rye", price: "12" },
        { name: "Johnnie Walker Red",      price: "10" },
        { name: "Monkey Shoulder",         price: "10" },
      ],
    },
  ],
};

// ── Irish Whiskey ─────────────────────────────────────────────────────────────

export const irishWhiskeySection: DrinkSection = {
  id: "irish-whiskey",
  title: "Irish Whiskey",
  groups: [
    {
      title: "Old Bushmills Distillery — Co. Antrim",
      items: [
        { name: "Bushmills Original",  price: "10" },
        { name: "Bushmills Blackbush", price: "12" },
        { name: "Bushmills Redbush",   price: "12" },
        { name: "Bushmills 10yr",      price: "12" },
        { name: "Bushmills 12yr",      price: "14" },
        { name: "Bushmills 16yr",      price: "30" },
        { name: "Bushmills 21yr",      price: "70" },
        { name: "The Sexton",          price: "14" },
      ],
    },
    {
      title: "Cooley Distillery — Co. Louth",
      items: [
        { name: "Quiet Man 8yr",           price: "12" },
        { name: "Quiet Man Traditional",   price: "12" },
        { name: "Connemara Single Malt",   price: "12" },
        { name: "Connemara 12yr",          price: "15" },
        { name: "Tyrconnell 10yr Sherry Cask", price: "15" },
        { name: "Tyrconnell Single Malt",  price: "12" },
      ],
    },
    {
      title: "Dublin Liberties Distillery — Co. Dublin",
      items: [
        { name: "The Dubliner Bourbon Cask", price: "12" },
      ],
    },
    {
      title: "Flying Tumbler Distillery — Co. Carlow",
      items: [
        { name: "Flying Tumbler \"The Bird\"", price: "12" },
      ],
    },
    {
      title: "Glendalough Distillery — Co. Wicklow",
      items: [
        { name: "Glendalough Double Barrel",       price: "12" },
        { name: "Glendalough Pot Still",           price: "14" },
        { name: "Glendalough 7yr Mizunara Cask",   price: "16" },
      ],
    },
    {
      title: "Kilbeggan Distillery — Co. Westmeath",
      items: [
        { name: "Kilbeggan 18yr", price: "60" },
      ],
    },
    {
      title: "Kinahan's Distillery — Co. Cork",
      items: [
        { name: "Kinahan's Small Batch",      price: "12" },
        { name: "Kinahan's Small Batch 10yr", price: "12" },
      ],
    },
    {
      title: "Kinsale Spirit Distillery — Co. Cork",
      items: [
        { name: "Great Earl Single Grain",  price: "14" },
        { name: "Spanish Earl Single Malt", price: "16" },
        { name: "Red Earl",                 price: "12" },
        { name: "Wild Atlantic IPA",        price: "10" },
        { name: "Wild Atlantic Rechard",    price: "10" },
      ],
    },
    {
      title: "Midleton Distillery — Co. Cork",
      items: [
        { name: "Blue Spot",                        price: "35"  },
        { name: "Green Spot",                       price: "16"  },
        { name: "Green Spot Chateau-Leoville",      price: "35"  },
        { name: "Green Spot Montelena",             price: "35"  },
        { name: "Red Spot",                         price: "60"  },
        { name: "Yellow Spot",                      price: "30"  },
        { name: "Jameson Original",                 price: "10"  },
        { name: "Jameson Black Barrel",             price: "12"  },
        { name: "Jameson Caskmates IPA",            price: "12"  },
        { name: "Jameson Caskmates Stout",          price: "12"  },
        { name: "Jameson Orange",                   price: "10"  },
        { name: "Jameson Triple Triple",            price: "10"  },
        { name: "Jameson 18yr",                     price: "40"  },
        { name: "Knappogue Castle 12yr",            price: "14"  },
        { name: "Knappogue Castle 14yr",            price: "16"  },
        { name: "Knappogue Castle 16yr",            price: "30"  },
        { name: "Knappogue Castle 21yr",            price: "50"  },
        { name: "Midleton Very Rare Barry Crockett", price: "90" },
        { name: "Midleton Very Rare Dair Gaelach",  price: "75"  },
        { name: "Midleton Very Rare 2023",          price: "60"  },
        { name: "Paddy's",                          price: "10"  },
        { name: "Powers Gold",                      price: "10"  },
        { name: "Powers John Lane 12yr",            price: "16"  },
        { name: "Powers Rye",                       price: "12"  },
        { name: "Redbreast 12yr",                   price: "16"  },
        { name: "Redbreast 12yr Cask Strength",     price: "24"  },
        { name: "Redbreast 15yr",                   price: "24"  },
        { name: "Redbreast 18yr",                   price: "50"  },
        { name: "Redbreast 21yr",                   price: "80"  },
        { name: "Redbreast 27yr",                   price: "200" },
        { name: "Redbreast Lustau",                 price: "18"  },
        { name: "Redbreast PX Sherry Cask",         price: "50"  },
        { name: "Redbreast Tawny Port",             price: "50"  },
        { name: "Redbreast Kentucky Oak",           price: "50"  },
        { name: "Redbreast Missouri Oak",           price: "50"  },
      ],
    },
    {
      title: "Roe & Co Distillery — Co. Dublin",
      items: [
        { name: "Roe & Co", price: "10" },
      ],
    },
    {
      title: "Slane Distillery — Co. Meath",
      items: [
        { name: "Slane Triple Casked", price: "10" },
      ],
    },
    {
      title: "Teeling Distillery — Co. Dublin",
      items: [
        { name: "Teeling Blackpitts",   price: "14" },
        { name: "Teeling Pot Still",    price: "14" },
        { name: "Teeling Small Batch",  price: "10" },
        { name: "Teeling Single Grain", price: "12" },
        { name: "Teeling Single Malt",  price: "14" },
      ],
    },
    {
      title: "The Shed Distillery — Co. Leitrim",
      items: [
        { name: "Drumshanbo Pot Still",    price: "12" },
        { name: "Drumshanbo Marsala Cask", price: "16" },
      ],
    },
    {
      title: "Tullamore Distillery — Co. Offaly",
      items: [
        { name: "Tullamore DEW",           price: "10" },
        { name: "Tullamore DEW 12yr",      price: "14" },
        { name: "Tullamore DEW 18yr",      price: "35" },
        { name: "Tullamore DEW Cider Cask", price: "12" },
        { name: "Tullamore DEW Honey",     price: "12" },
        { name: "Tullamore DEW Rum Cask",  price: "12" },
      ],
    },
    {
      title: "Walsh Distillery — Co. Carlow",
      items: [
        { name: "Irishman's Founders Reserve", price: "12" },
        { name: "Irishman's Harvest",          price: "14" },
        { name: "Writer's Tears Copper Pot",   price: "12" },
      ],
    },
    {
      title: "West Cork Distillery — Co. Cork",
      items: [
        { name: "West Cork IPA Cask",   price: "12" },
        { name: "West Cork Stout Cask", price: "12" },
      ],
    },
  ],
};

// ── Warmers ───────────────────────────────────────────────────────────────────

export const warmersSection: DrinkSection = {
  id: "warmers",
  title: "Warmers",
  groups: [
    {
      title: "",
      items: [
        { name: "Kirwan's Toddy", price: "14", note: "Tullamore DEW, Barry's Irish Tea, Lemon, Honey" },
        { name: "Irish Coffee",   price: "14", note: "Jameson Irish Whiskey, Demerara, Coffee, Bailey's Cream" },
        { name: "Beckett's Brew", price: "14", note: "Paddy's, Allspice Dram & Hot Apple Cider" },
      ],
    },
  ],
};

// ── Signature Cocktails ───────────────────────────────────────────────────────

export const signatureCocktailsSection: DrinkSection = {
  id: "signature-cocktails",
  title: "Signature Cocktails",
  groups: [
    {
      title: "",
      items: [
        { name: "Ohh Lisdoonvarna",        price: "16", note: "Green Spot Irish Whiskey, Ballygowan Sparkling Water, Chili Tincture & Mint" },
        { name: "Kirwan's Old Fashioned",  price: "15", note: "Jameson Black Barrel, Demerara, Bitters" },
        { name: "Galway Girl",             price: "15", note: "Tito's Vodka, Passionfruit, Vanilla, Lime" },
        { name: "Doctor's Dilemma",        price: "15", note: "Jameson, Giffard Ginger, Connemara, Honey & Ginger" },
        { name: "Irish Espresso Martini",  price: "15", note: "Jameson Cold Brew, Kahlua, Espresso, Demerara" },
        { name: "Celtic Crush",            price: "14", note: "Wild Atlantic IPA Whiskey, Cinnamon, Triple Sec, Smoked Cinnamon Bitters & Club Orange Irish Soda" },
        { name: "Róisín Corcra",           price: "14", note: "Violet Rose — Empress Indigo Gin, Crème De Violette, Luxardo Liqueur & Lemon" },
        { name: "Aer Lingus",              price: "14", note: "Flying Tumbler \"The Bird\" Irish Whiskey, Aperol, Foro Amaro & Lemon" },
        { name: "Viva La Quinta Brigada",  price: "14", note: "Altos Reposado, Spiced Pear, Ginger, Honey, Chili & Lime" },
        { name: "1870",                    price: "14", note: "Old Forester 86, Orgeat, Banana & Lime" },
        { name: "Fairytale of New York",   price: "14", note: "Hudson \"Bright Lights, Big Bourbon,\" Lemon & Red Wine" },
        { name: "Ramon",                   price: "14", note: "Kinsale Irish Gin, Irish Mist, Campari & Demerara" },
        { name: "Loch Garman",             price: "14", note: "Tito's Vodka, Giffard Strawberry, Mulled Wine Syrup, Lemon & Soda" },
        { name: "An Idiot Abroad",         price: "14", note: "Tullamore Dew Caribbean Cask, Bacardi, Curaçao, Orgeat, Luxardo & Lemon" },
        { name: "Sweet Skibbereen",        price: "12", note: "Tito's, Mulled Wine, Lime & Ginger Beer" },
        { name: "Jack's Pumpkin Patch",    price: "12", note: "Jack Daniels, Pumpkin Syrup, Allspice Dram, Espresso & Cocoa Bitters" },
      ],
    },
  ],
};

// ── Wine ──────────────────────────────────────────────────────────────────────

export const wineSection: DrinkSection = {
  id: "wine",
  title: "Wine",
  subtitle: "Glass / Bottle",
  groups: [
    {
      title: "Sparkling",
      items: [
        { name: "Conca D'Oro",  price: "14 / 52", note: "Prosecco, Italy"       },
        { name: "Campo Viejo",  price: "10 / 36", note: "Cava Brut, Spain"      },
        { name: "Biutiful",     price: "12 / 44", note: "Brut Rosé Cava, Spain" },
      ],
    },
    {
      title: "Rosé",
      items: [
        { name: "Perrin Rosé",         price: "10 / 36", note: "Côtes du Rhône, France"  },
        { name: "Fleurs De Prairie",   price: "11 / 40", note: "Provence Rosé, France"   },
        { name: "M De Minuty",         price: "14 / 52", note: "Provence Rosé, France"   },
      ],
    },
    {
      title: "White",
      items: [
        { name: "Perrin",              price: "10 / 36", note: "Luberon Blanc, France"    },
        { name: "Margote",             price: "11 / 40", note: "Chardonnay, France"       },
        { name: "Andica",              price: "12 / 44", note: "Sauvignon Blanc, Chile"   },
        { name: "Ornella Molon",       price: "12 / 44", note: "Pinot Grigio, Italy"      },
        { name: "Domaine Lauverjat",   price: "18 / 68", note: "Sancerre, France"         },
        { name: "Dr. Konstantin Frank", price: "11 / 40", note: "Riesling, New York"     },
      ],
    },
    {
      title: "Red",
      items: [
        { name: "Perrin",              price: "10 / 35", note: "Ventoux Rouge, France"              },
        { name: "Fairfax Wine Co.",    price: "11 / 40", note: "Cabernet Sauvignon, California"     },
        { name: "Patient Cottat",      price: "12 / 44", note: "Pinot Noir, France"                 },
        { name: "Terrazas De Los Andes", price: "11 / 40", note: "Malbec, Argentina"               },
        { name: "Chateau La Mothe",    price: "12 / 44", note: "Bordeaux, France"                   },
        { name: "Viña Real",           price: "14 / 52", note: "Rioja Tempranillo Crianza, Spain"   },
        { name: "Château Kirwan",      price: "150",     note: "Margaux Grand Cru Classé — Bottle"  },
      ],
    },
  ],
};

// ── Happy Hour ────────────────────────────────────────────────────────────────

export const happyHourSection: DrinkSection = {
  id: "happy-hour",
  title: "Happy Hour",
  subtitle: "3pm – 6pm Monday thru Friday",
  groups: [
    {
      title: "Beers",
      items: [
        { name: "Eggenberg Pilsner",     price: "6" },
        { name: "DC Brau Corruption IPA", price: "6" },
        { name: "Blue Moon",             price: "6" },
      ],
    },
    {
      title: "Wine",
      items: [
        { name: "Perrin Luberon Blanc",  price: "8" },
        { name: "Perrin Ventoux Rouge",  price: "8" },
        { name: "Perrin Rosé",           price: "8" },
        { name: "Campo Viejo Cava",      price: "8" },
      ],
    },
    {
      title: "Well Drinks",
      items: [
        { name: "Tito's Vodka",            price: "8" },
        { name: "Beefeater Gin",           price: "8" },
        { name: "Bacardi Rum",             price: "8" },
        { name: "Corazon Silver Tequila",  price: "8" },
        { name: "Jameson Irish Whiskey",   price: "8" },
        { name: "Old Forester 86 Bourbon", price: "8" },
      ],
    },
    {
      title: "Cocktails",
      items: [
        { name: "Old Fashioned",  price: "10", note: "Old Forester 86, Demerara & Angostura" },
        { name: "Tito's Mule",    price: "10", note: "Tito's, Lime & Ginger Beer" },
        { name: "Celtic Crush",   price: "10", note: "Wild Atlantic IPA Whiskey, Cinnamon, Triple Sec, Smoked Cinnamon Bitters & Club Orange Irish Soda" },
      ],
    },
  ],
};

// ── Bottles ───────────────────────────────────────────────────────────────────

export const bottlesSection: DrinkSection = {
  id: "bottles",
  title: "Bottles",
  groups: [
    {
      title: "",
      items: [
        { name: "Bud Light",                      price: "6" },
        { name: "Corona Extra",                   price: "6" },
        { name: "Pacifico",                       price: "6" },
        { name: "Michelob Ultra",                 price: "6" },
        { name: "Miller Lite",                    price: "6" },
        { name: "Heineken",                       price: "6" },
        { name: "Stella Artois",                  price: "7" },
        { name: "Birra Moretti",                  price: "7" },
        { name: "High Noon",                      price: "8", note: "Black Cherry or Lime" },
      ],
    },
  ],
};

// ── Cans ──────────────────────────────────────────────────────────────────────

export const cansSection: DrinkSection = {
  id: "cans",
  title: "Cans",
  groups: [
    {
      title: "",
      items: [
        { name: "Allagash White",             price: "7" },
        { name: "Atlas Ponzi",                price: "7" },
        { name: "Atlas Silent Neighbor",      price: "7" },
        { name: "Coors Light",                price: "6" },
        { name: "Dogfish Head 60 Minute IPA", price: "7" },
      ],
    },
    {
      title: "",
      items: [
        { name: "Dogfish Head Seaquench", price: "7" },
        { name: "DC Brau Penn Quarter",   price: "7" },
        { name: "Heineken Silver",        price: "7" },
        { name: "Modelo Especial",        price: "6" },
        { name: "Yuengling Lager",        price: "6" },
      ],
    },
    {
      title: "",
      items: [
        { name: "Murphys Irish Stout", price: "9", note: "16oz"          },
        { name: "Peroni",              price: "7", note: "11.2oz"        },
        { name: "Lagunitas IPA",       price: "7" },
        { name: "Guinness 0.0",        price: "6", note: "Non-Alcoholic" },
        { name: "Heineken 0.0",        price: "6", note: "Non-Alcoholic" },
      ],
    },
  ],
};

// ── Draught ───────────────────────────────────────────────────────────────────

export const draughtSection: DrinkSection = {
  id: "draught",
  title: "Draught",
  groups: [
    {
      title: "Irish",
      items: [
        { name: "Guinness",        price: "9" },
        { name: "Magners",         price: "9" },
        { name: "Smithwicks",      price: "9" },
        { name: "Harp Irish Lager", price: "9" },
      ],
    },
    {
      title: "Craft",
      items: [
        { name: "DC Brau Corruption",            price: "8", note: "Washington, DC"      },
        { name: "Eggenberg Pilsner",             price: "8", note: "Austria"             },
        { name: "Heineken",                      price: "8", note: "Holland"             },
        { name: "Raised By Wolves IPA",          price: "8", note: "Washington, DC"      },
        { name: "Sierra Nevada Hazy Little Thing", price: "8", note: "California"        },
        { name: "Blue Moon",                     price: "8", note: "Denver, Colorado"    },
        { name: "Sam Adams Seasonal",            price: "8", note: "Boston"              },
      ],
    },
    {
      title: "Mixed Pints",
      items: [
        { name: "Half & Half",          price: "9", note: "Guinness + Harp"                  },
        { name: "Ireland at the Wharf", price: "9", note: "Guinness + DC Brau Corruption"    },
        { name: "Blacksmith",           price: "9", note: "Guinness + Smithwicks"            },
        { name: "Blackberg",            price: "9", note: "Guinness + Eggenberg"             },
        { name: "Black Velvet",         price: "9", note: "Guinness + Strongbow"             },
        { name: "Black Seasonal",       price: "9", note: "Guinness + Seasonal"              },
        { name: "Black & Blue",         price: "9", note: "Guinness + Blue Moon"             },
        { name: "Black Wolf",           price: "9", note: "Guinness + Raised by Wolves"      },
        { name: "Black & Hazy",         price: "9", note: "Guinness + Hazy IPA"              },
      ],
    },
  ],
};
