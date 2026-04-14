import { motion } from "framer-motion";
import { useState } from "react";

const flavors = [
  "Chocolate", "Vanilla", "Red Velvet", "Butterscotch",
  "Pineapple", "Strawberry", "Black Forest", "Mango",
  "Coffee Mocha", "Blueberry", "Oreo", "Caramel"
];

const CustomCakeSection = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  const toggleFlavor = (flavor: string) => {
    setSelected((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleOrder = () => {
    const text = `Hi! I'd like to order a custom eggless cake 🎂%0A%0AFlavors: ${selected.join(", ") || "Not specified"}%0AOccasion: ${occasion || "Not specified"}%0AMessage on cake: ${message || "None"}`;
    window.open(`https://wa.me/YOUR_NUMBER?text=${text}`, "_blank");
  };

  return (
    <section id="custom" className="relative py-32 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
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
            Your Vision, Our Craft · 100% Eggless
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Custom Cakes
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Tell us your dream cake — any flavour, any occasion. We'll bake it completely eggless, with the same love and perfection.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Flavor picker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
              Pick Your Flavours
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => toggleFlavor(flavor)}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 border ${
                    selected.includes(flavor)
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(38_65%_45%/0.2)]"
                      : "glass border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Occasion & Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Occasion
              </label>
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="Birthday, Anniversary, etc."
                className="w-full glass rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 border border-border focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Message on Cake
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Happy Birthday, Sarah!"
                className="w-full glass rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 border border-border focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <button
              onClick={handleOrder}
              className="px-8 py-4 rounded-full font-body font-medium text-primary-foreground bg-gradient-to-r from-ember to-ember-glow glow-pulse transition-all duration-300 text-base inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send Custom Order via WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeSection;
