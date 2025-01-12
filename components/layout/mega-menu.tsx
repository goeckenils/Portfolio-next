"use client";

import { motion, AnimatePresence, easeOut } from "framer-motion";
import { X } from "lucide-react";
import { TransitionLink } from "@/lib/TransitionLink";
import Link from "next/link"

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

const itemVariants = {
  closed: {
    opacity: 0,
    y: 20
  },
  open: {
    opacity: 1,
    y:0 
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};


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
          initial="closed"
          animate="open"
          exit="closed"
          variants={sideVariants}
              className="pt-24"
            >
              {menuItems.map((item) => (
                <motion.div
                  style={{marginTop: -12}}
                  key={item.id}
                  variants={itemVariants}
                  className=""
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-baseline group"
                  >
                    <span
                    style={{width: 100, display:"block"}}
                     className="text-6xl md:text-7xl  tracking-tighter transition-colors group-hover:text-opacity-50">

                      {item.id}
                    </span>
                    <span className="pl-4 text-6xl md:text-7xl font-bold tracking-tighter transition-colors group-hover:text-opacity-50">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}