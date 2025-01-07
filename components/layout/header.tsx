"use client";

import { useState } from "react";
import { MegaMenu } from "./mega-menu";
import { Zap } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="full-w full-h flex justify-between p-12">
      <div className="top-bar">
      <div className="logo">
        <Zap className="w-6 h-6" />
      </div>
      
      <ThemeToggle />
      
      <button 
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>
</div>

      <div className="bottom-bar">      
        <div className="footer-text left">
        Bandelstrasse 9F<br />
        30171 Hannover
      </div>
      
      <div className="footer-text right">
        Portfolio<br />
        2025
      </div>
      </div>

    </header>
          <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </>
  );
}