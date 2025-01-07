"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
  { id: "01", label: "INTRODUCTION", href: "#introduction" },
  { id: "02", label: "WORKS", href: "#works" },
  { id: "03", label: "LINKS", href: "#links" },
  { id: "04", label: "AESTHETIC", href: "#aesthetic" },
  { id: "05", label: "WORK WITH ME", href: "#contact" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background z-40"
        >
          <div className="container mx-auto px-8 pt-32">
            <button
              onClick={onClose}
              className="fixed top-8 right-8 z-50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="border-t border-current py-6"
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-baseline gap-8 group"
                  >
                    <span className="text-sm opacity-50 font-mono">
                      {item.id}
                    </span>
                    <span className="text-5xl md:text-7xl font-bold tracking-tighter transition-colors group-hover:text-opacity-50">
                      {item.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}