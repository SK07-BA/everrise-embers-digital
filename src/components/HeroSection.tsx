import { motion } from "framer-motion";
import heroCookie from "@/assets/hero-cookie.png";
import EmberParticles from "./EmberParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ember/5 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <EmberParticles />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-primary/80 font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Artisan Baked · Small Batch · Soul Warmed
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6">
            <span className="text-foreground">EverRise</span>
            <br />
            <span className="text-primary">&</span>{" "}
            <span className="text-foreground italic">Embers</span>
          </h1>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
            Where every crumb tells a story of fire, patience, and craft. Baked at the edge of perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-body font-medium text-primary-foreground bg-gradient-to-r from-ember to-ember-glow glow-pulse transition-all duration-300 text-base"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-body font-medium glass text-foreground hover:border-primary/30 transition-all duration-300 text-base"
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Cookie hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative flex items-center justify-center"
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-ember/10 blur-[100px]" />
          <motion.img
            src={heroCookie}
            alt="Artisanal chocolate chip cookie with melting chocolate and sea salt"
            width={1024}
            height={1024}
            className="relative z-10 w-[400px] md:w-[500px] lg:w-[580px] drop-shadow-[0_20px_60px_rgba(217,153,45,0.3)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
