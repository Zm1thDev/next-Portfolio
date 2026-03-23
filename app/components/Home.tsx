"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-10">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-primary">Hello</span> Everyone
              </h2>
              <span className="text-3xl md:text-4xl animate-bounce">👋</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I&apos;m{" "}
              <span className="text-primary">
                <Typewriter
                  words={["Patcharapon Sangangam"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Welcome to my little space where all my work and experiences are gathered I hope you will see what I like and maybe even be inspired.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="relative z-10">View Projects</span>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-foreground/5 dark:bg-slate-900/40 border border-foreground/10 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 text-foreground font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="relative z-10">Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-[80px] animate-pulse" />

              <motion.div
                className="relative z-10 w-full h-full p-4"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full border-4 border-primary/30 overflow-hidden shadow-2xl relative">
                  <img
                    src="/images/home/profile-3.jfif"
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
