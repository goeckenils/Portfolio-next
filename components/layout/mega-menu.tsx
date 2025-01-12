"use client";

import { motion, AnimatePresence, easeOut } from "framer-motion";
import { X } from "lucide-react";
import { TransitionLink } from "@/lib/TransitionLink";

const menuItems = [
  { id: "01", label: "INTRODUCTION", href: "/introduction" },
  { id: "02", label: "WORKS", href: "/work" },
  { id: "03", label: "LINKS", href: "/links" },
  { id: "04", label: "AESTHETIC", href: "/aesthetic" },
  { id: "05", label: "WORK WITH ME", href: "/contact" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 bg-background z-40"
        >
          <div className="p-12 pt-32">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1, // Reverse stagger for exit
                  },
                },
              }}
              className="pt-24"
            >
              {menuItems.map((item) => (
                <motion.div
                  style={{marginTop: -12}}
                  key={item.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { ease: easeOut } },
                    exit: { y: 20, opacity: 0, transition: { ease: easeOut } }, // Exit animation for each item
                  }}
                  className=""
                >
                  <TransitionLink
                    href={item.href}
                    onClick={onClose}
                    className="flex items-baseline group"
                  >
                    <span
                    style={{width: 100, display:"block"}}
                     className="text-6xl md:text-7xl font-bold tracking-tighter transition-colors group-hover:text-opacity-50">

                      {item.id}
                    </span>
                    <span className="pl-4 text-6xl md:text-7xl font-bold tracking-tighter transition-colors group-hover:text-opacity-50">
                      {item.label}
                    </span>
                  </TransitionLink>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}