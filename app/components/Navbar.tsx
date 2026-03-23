"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Github } from "lucide-react";
import { BsCodeSlash } from "react-icons/bs";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "about", "projects", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-high-tech origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-primary dark:text-high-tech"
            >
              <BsCodeSlash size={25} />
            </motion.div>
            <span className="text-xl font-bold tracking-tighter text-glow">
              PATCHARA<span className="text-secondary">PON</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors group py-2 ${isActive
                    ? "text-primary dark:text-high-tech"
                    : "hover:text-primary dark:hover:text-high-tech"
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Zm1thDev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 text-foreground hover:text-primary dark:hover:text-high-tech transition-all cursor-pointer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1awUaKGrpR2TFFK8iHzhslkTYWFpw7Xu0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-primary/30 text-sm font-semibold hover:bg-primary/10 transition-all cursor-pointer"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/10 text-primary dark:bg-high-tech/10 dark:text-high-tech hover:scale-110 transition-transform cursor-pointer"
            >
              {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/10 text-primary dark:bg-high-tech/10 dark:text-high-tech cursor-pointer"
            >
              {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-1 cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-2 pt-2 space-y-1 sm:px-3 text-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative block px-3 py-4 text-base font-medium transition-colors group ${isActive ? "text-primary" : ""
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${isActive ? "w-16" : "w-0 group-hover:w-16"
                      }`} />
                  </a>
                );
              })}
              <div className="flex justify-center items-center gap-3 py-4 border-t border-border">
                <a href="https://github.com" target="_blank" className="p-3 rounded-full hover:bg-primary/10 text-foreground hover:text-primary dark:hover:text-high-tech transition-all cursor-pointer">
                  <Github size={20} />
                </a>
                <a href="#" className="px-6 py-2 rounded-full border border-primary/30 text-sm font-semibold hover:bg-primary/10 transition-all cursor-pointer">
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
