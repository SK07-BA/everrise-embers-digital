import { motion } from "framer-motion";

const items = [
  {
    title: "Sea Salt Chocolate",
    desc: "72% dark chocolate with Maldon sea salt crystals",
    price: "$4.50",
    emoji: "🍪",
  },
  {
    title: "Sourdough Boule",
    desc: "48-hour fermented, wood-fired, crispy crust",
    price: "$8.00",
    emoji: "🍞",
  },
  {
    title: "Burnt Honey Tart",
    desc: "Caramelized wildflower honey, torched meringue",
    price: "$6.75",
    emoji: "🍯",
  },
];

const FeaturedSection = () => {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 font-body text-sm tracking-[0.3em] uppercase mb-4">
            From the Oven
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Signatures
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>
              <p className="font-display text-2xl font-bold text-primary">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
