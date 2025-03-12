import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "backdrop-blur-lg bg-notify-darker/80 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center w-[10%]">
          <img src="/Notify-logo.png" alt="app image" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#why-notify"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Why Notify
          </a>
          <a
            href="#download"
            className="button-transition bg-gradient-to-r from-notify-neon/80 to-notify-lime/80 text-black px-5 py-2.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-xl bg-notify-dark/95 border-b border-white/10 animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="#features"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-notify"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Notify
            </a>
            <a
              href="#download"
              className="button-transition bg-gradient-to-r from-notify-purple to-notify-blue text-white px-5 py-2.5 rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
