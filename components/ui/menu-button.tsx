"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors",
        "before:absolute before:inset-0 before:border before:border-foreground/20 before:transition-transform",
        "hover:before:scale-105",
        className
      )}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex items-center space-x-2"
      >
        <span>Menu</span>
        <div className="relative w-4 h-4">
          <motion.span
            className="absolute inset-0 w-full h-[1px] bg-current origin-center"
            variants={{
              open: { rotate: 45, y: 8 },
              closed: { rotate: 0, y: 6 }
            }}
          />
          <motion.span
            className="absolute inset-0 w-full h-[1px] bg-current origin-center"
            variants={{
              open: { rotate: -45, y: 8 },
              closed: { rotate: 0, y: 10 }
            }}
          />
        </div>
      </motion.div>
    </button>
  );
}