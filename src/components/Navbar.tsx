import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-xl font-semibold text-primary tracking-wide">
          EverRise <span className="text-muted-foreground">&</span> Embers
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors duration-300">Menu</a>
          <a href="#story" className="hover:text-primary transition-colors duration-300">Our Story</a>
          <a href="#locations" className="hover:text-primary transition-colors duration-300">Locations</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
        </div>
        <button className="glass px-5 py-2 rounded-full text-sm font-body text-primary hover:bg-primary/10 transition-colors duration-300">
          Order Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
