"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  const currentYear = 2026;
  
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10 border-t border-white/5 pt-12">
        {/* Brand/Logo */}
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

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-[11px] font-bold tracking-widest uppercase opacity-40">
            Copyright © {currentYear} phatcharapon.
          </p>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40 leading-none">
            All rights reserved.
          </p>
        </div>

        {/* Social Links*/}
        <div className="flex gap-4">
          {[
            { icon: <Github size={18} />, href: "https://github.com/Zm1thDev", color: "hover:text-primary" },
            { icon: <Facebook size={18} />, href: "https://www.facebook.com/patcharapon.sangangam/", color: "hover:text-primary" },
            { icon: <Mail size={18} />, href: "mailto:patcharapon0810@gmail.com", color: "hover:text-primary" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-3 glass rounded-xl opacity-60 hover:opacity-100 transition-all duration-300 border border-white/5 hover:border-primary/20 ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
