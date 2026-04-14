import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Chocolate Cookies",
    desc: "Rich, chewy, 100% eggless chocolate chip cookies",
    price: "$22",
    qty: "12 pieces",
    emoji: "🍪",
  },
  {
    title: "Peanut Butter Cookies",
    desc: "Nutty, melt-in-your-mouth eggless peanut butter bliss",
    price: "$22",
    qty: "12 pieces",
    emoji: "🥜",
  },
  {
    title: "Sugar Cinnamon Cookies",
    desc: "Warm cinnamon-sugar dusted eggless cookies",
    price: "$22",
    qty: "12 pieces",
    emoji: "✨",
  },
  {
    title: "Baklava",
    desc: "Flaky, honey-soaked layers with crushed pistachios",
    price: "$55",
    qty: "36 pieces",
    emoji: "🍯",
  },
  {
    title: "Croissants",
    desc: "Buttery, golden, perfectly laminated eggless croissants",
    price: "$15",
    qty: "6 pieces",
    emoji: "🥐",
  },
  {
    title: "Pretzels",
    desc: "Soft, warm, salted eggless pretzels",
    price: "$20",
    qty: "10 pieces",
    emoji: "🥨",
  },
  {
    title: "Cupcakes",
    desc: "Fluffy eggless cupcakes with artisan frosting",
    price: "Custom",
    qty: "Ask us",
    emoji: "🧁",
  },
  {
    title: "Brownies",
    desc: "Fudgy, dense, eggless chocolate brownies",
    price: "Custom",
    qty: "Ask us",
    emoji: "🍫",
  },
];

const FeaturedSection = () => {
  return (
    <section id="menu" className="relative py-32 bg-background">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-ember/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6">
        {/* Divider */}
        <div className="divider-gold mb-16 max-w-xs mx-auto" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            From the Oven · 100% Eggless
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Menu
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs mb-3 leading-relaxed">
                  {item.desc}
                </p>
                <p className="font-display text-2xl font-bold text-primary">
                  {item.price}
                </p>
                <p className="font-body text-muted-foreground text-xs mt-1">
                  {item.qty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
