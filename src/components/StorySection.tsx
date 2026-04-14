import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import wheatEmbers from "@/assets/wheat-embers.png";

const StorySection = () => {
  return (
    <section id="story" className="relative py-32 bg-background overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      {/* Decorative wheat */}
      <motion.img
        src={wheatEmbers}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className="absolute -right-16 top-10 w-[200px] opacity-20 rotate-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={wheatEmbers}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className="absolute -left-16 bottom-10 w-[180px] opacity-15 -rotate-12 scale-x-[-1]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Logo / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
              <img
                src={logo}
                alt="EverRise & Embers - Eggless Bakery"
                className="relative z-10 w-[320px] md:w-[400px] rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary/80 font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Born from Fire,{" "}
              <span className="text-primary italic">Crafted with Heart</span>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                EverRise & Embers was born from a simple belief — that indulgence should never come with compromise. Every recipe we craft is <span className="text-foreground font-medium">100% eggless</span>, because we believe everyone deserves to experience the magic of freshly baked goodness.
              </p>
              <p>
                From our very first loaf to our signature cookies, we've spent years perfecting the art of eggless baking. Our recipes use time-honoured techniques — slow fermentation, hand-folded doughs, and fire-kissed crusts — proving that eggless doesn't mean less.
              </p>
              <p>
                Every item that leaves our kitchen carries the warmth of real craftsmanship. No shortcuts, no eggs, no compromise — just pure, soulful baking that rises above expectations.
              </p>
            </div>

            {/* Eggless highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { icon: "🥚", label: "100% Eggless" },
                { icon: "🔥", label: "Fire-Baked" },
                { icon: "❤️", label: "Made with Love" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-body text-xs text-primary font-medium tracking-wide">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
