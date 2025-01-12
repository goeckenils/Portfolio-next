"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText"
import Link from "next/link"



export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText text="NILS GOECKE" className="hero-title"/>
          <AnimatedText text="WEBDEVELOPER &" className="hero-title"/>
          <AnimatedText text="DIGITAL DESIGNER" className="hero-title mb-8"/>
          
          <div className="inline-flex flex px-4 py-2 bg-foreground ">
            <Link
              href="/work" 
              style={{marginTop:"-2px"}}
              className="items-center gap-2 text-sm text-white uppercase hover:opacity-50 transition-opacity"
            >
              See Projects
              <span className="text-xl text-white pl-2">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}