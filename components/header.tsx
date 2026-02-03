"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/40 border-b border-white/[0.1]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <h1 className="font-serif text-2xl font-bold text-primary">
            Time Travel Agency
          </h1>
        </a>

        <button className="px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary rounded-full text-sm font-semibold transition-all duration-300">
          Galerie
        </button>
      </div>
    </motion.header>
  );
}
