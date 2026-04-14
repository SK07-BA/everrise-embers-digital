import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import imgChocolateCookies from "@/assets/menu-chocolate-cookies.jpg";
import imgPeanutCookies from "@/assets/menu-peanut-cookies.jpg";
import imgCinnamonCookies from "@/assets/menu-cinnamon-cookies.jpg";
import imgBaklava from "@/assets/menu-baklava.jpg";
import imgCroissants from "@/assets/menu-croissants.jpg";
import imgPretzels from "@/assets/menu-pretzels.jpg";
import imgCupcakes from "@/assets/menu-cupcakes.jpg";
import imgBrownies from "@/assets/menu-brownies.jpg";

type Category = "All" | "Cookies" | "Pastries" | "Breads" | "Sweets";

interface MenuItem {
  title: string;
  desc: string;
  price: string;
  qty: string;
  image: string;
  category: Category;
}

const menuItems: MenuItem[] = [
  {
    title: "Chocolate Cookies",
    desc: "Rich, chewy, 100% eggless chocolate chip cookies",
    price: "$22",
    qty: "12 pieces",
    image: imgChocolateCookies,
    category: "Cookies",
  },
  {
    title: "Peanut Butter Cookies",
    desc: "Nutty, melt-in-your-mouth eggless peanut butter bliss",
    price: "$22",
    qty: "12 pieces",
    image: imgPeanutCookies,
    category: "Cookies",
  },
  {
    title: "Sugar Cinnamon Cookies",
    desc: "Warm cinnamon-sugar dusted eggless cookies",
    price: "$22",
    qty: "12 pieces",
    image: imgCinnamonCookies,
    category: "Cookies",
  },
  {
    title: "Baklava",
    desc: "Flaky, honey-soaked layers with crushed pistachios",
    price: "$55",
    qty: "36 pieces",
    image: imgBaklava,
    category: "Pastries",
  },
  {
    title: "Croissants",
    desc: "Buttery, golden, perfectly laminated eggless croissants",
    price: "$15",
    qty: "6 pieces",
    image: imgCroissants,
    category: "Breads",
  },
  {
    title: "Pretzels",
    desc: "Soft, warm, salted eggless pretzels",
    price: "$20",
    qty: "10 pieces",
    image: imgPretzels,
    category: "Breads",
  },
  {
    title: "Cupcakes",
    desc: "Fluffy eggless cupcakes with artisan frosting",
    price: "Custom",
    qty: "Ask us",
    image: imgCupcakes,
    category: "Sweets",
  },
  {
    title: "Brownies",
    desc: "Fudgy, dense, eggless chocolate brownies",
    price: "Custom",
    qty: "Ask us",
    image: imgBrownies,
    category: "Sweets",
  },
];

const categories: Category[] = ["All", "Cookies", "Pastries", "Breads", "Sweets"];

const FeaturedSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="relative py-32 bg-background">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-ember/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6">
        <div className="divider-gold mb-16 max-w-xs mx-auto" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delicious treats for every occasion
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            All items are 100% eggless and made fresh to order. Prices may vary based on design complexity and customizations.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full font-body text-sm transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(38_65%_45%/0.2)]"
                  : "glass border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-body text-xs font-medium">
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-xs mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-xl font-bold text-primary">
                      {item.price}
                    </p>
                    <p className="font-body text-muted-foreground text-xs">
                      {item.qty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
