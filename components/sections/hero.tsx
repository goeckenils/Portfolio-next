"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title mb-12">
            NILS GOECKE
            <br />
            WEBDEVELOPER &
            <br />
            DIGITAL DESIGNER
          </h1>
          
          <div className="flex p-4 bg-foreground">
            <a 
              href="#works" 
              className=" items-center gap-2 text-sm color-white uppercase hover:opacity-50 transition-opacity"
            >
              See Projects
              <span className="text-xl color-white">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}