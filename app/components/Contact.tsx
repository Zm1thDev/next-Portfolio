"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: "patcharapon0810@gmail.com",
      href: "mailto:patcharapon0810@gmail.com",
      color: "bg-blue-500/10 text-blue-500",
      border: "border-blue-500/20",
    },
    {
      icon: <Facebook size={28} />,
      label: "Facebook",
      value: "Patcharapon Sangangam",
      href: "https://www.facebook.com/patcharapon.sangangam/",
      color: "bg-indigo-500/10 text-indigo-500",
      border: "border-indigo-500/20",
    },
    {
      icon: <Phone size={28} />,
      label: "Phone",
      value: "098 039 9138",
      href: "tel:0980399138",
      color: "bg-cyan-500/10 text-cyan-500",
      border: "border-cyan-500/20",
    },
    {
      icon: <MapPin size={28} />,
      label: "Location",
      value: "Phra Samut Chedi, Samut Prakan, 10290",
      color: "bg-purple-500/10 text-purple-500",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/2 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Con<span className="text-primary">tact</span>
          </motion.h2>
          <motion.div
            whileInView={{ width: "80px" }}
            initial={{ width: "0" }}
            className="h-1.5 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] mb-6"
          />
        </div>

        <div className="max-w-lg mx-auto space-y-4">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href?.startsWith("http") ? "_blank" : undefined}
              rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`group relative p-5 glass rounded-[1.75rem] ${info.border} hover:border-primary/50 transition-all duration-500 flex items-center gap-6 overflow-hidden cursor-pointer`}
            >
              <div className={`absolute -top-8 -right-8 w-20 h-20 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 ${info.color}`} />
              
              <div className={`p-3.5 rounded-xl ${info.color} shrink-0 transform transition-transform group-hover:rotate-12 duration-500`}>
                {info.icon}
              </div>
              
              <div className="flex-1">
                <h4 className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40 mb-1">{info.label}</h4>
                <p className="text-lg font-bold group-hover:text-primary transition-colors italic leading-none">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
