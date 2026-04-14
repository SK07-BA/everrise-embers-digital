import { motion } from "framer-motion";
import storyBrandGraphic from "@/assets/story-brand-graphic.png";
import wheatEmbers from "@/assets/wheat-embers.png";

/** Stats row under Our Story — edit `value` / `label` anytime (add or remove rows and update the grid class below if needed). */
const STORY_STATS: { value: string; label: string }[] = [
  { value: "10+", label: "Signature items" },
  { value: "3+", label: "Years of craft" },
  { value: "∞", label: "Happy customers" },
];

const StorySection = () => {
  const statCols = STORY_STATS.length;

  return (
    <section id="story" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <motion.img
        src={wheatEmbers}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className="absolute -right-16 top-10 w-[200px] opacity-15 rotate-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={wheatEmbers}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className="absolute -left-16 bottom-10 w-[180px] opacity-10 -rotate-12 scale-x-[-1]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="divider-gold mb-16 max-w-xs mx-auto" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Brand graphic — larger, image only */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start w-full"
          >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[44rem]">
              <div className="absolute inset-0 bg-primary/8 blur-[80px] rounded-full scale-90 -z-10" />
              <div className="relative overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={storyBrandGraphic}
                  alt="EverRise and Embers — E and E monogram, since 2019, 100% eggless. Crafted from the heart, free from compromise."
                  className="relative z-10 w-full h-auto object-cover object-center block"
                  width={960}
                  height={1200}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Story text + stats below */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-4"
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-10 grid rounded-xl border border-border bg-warm-white shadow-soft overflow-hidden"
              style={{ gridTemplateColumns: `repeat(${statCols}, minmax(0, 1fr))` }}
            >
              {STORY_STATS.map((item, index) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className={`px-2 py-5 sm:px-4 sm:py-6 text-center ${
                    index < STORY_STATS.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <p className="font-display text-2xl sm:text-3xl md:text-[2.125rem] font-semibold text-primary leading-none">
                    {item.value}
                  </p>
                  <p className="font-body mt-2.5 text-[10px] sm:text-[11px] text-muted-foreground font-medium tracking-[0.22em] uppercase">
                    {item.label}
                  </p>
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
