"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-primary text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform group cursor-pointer border border-white/20"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-primary/40 blur-xl group-hover:bg-primary/60 transition-colors rounded-full" />
            <ArrowUp size={20} className="relative z-10" />
          </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
