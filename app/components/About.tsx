"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  SiTypescript, SiReact,SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiMysql, SiExpress, SiPhp, SiXampp  
} from "react-icons/si";
import { FaHtml5, FaCss3Alt,FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  const education = [
    {
      school: "Rajamangala University of Technology Krungthep",
      degree: "Bachelor of Computer Science, Faculty of Science and Technology",
      year: "2022 - 2025",
    },
    {
      school: "Pomnakarachsawatyanon School",
      degree: "Middle and Upper Secondary School",
      year: "2016 - 2022",
    }
  ];

  const internships = [
    {
      company: "Sc Spark Solution",
      role: "Programmer Intern",
      year: "10 Nov 2025 - 6 Mar 2026",
      points: [
        "Developed a car rental system as a Web Application by implementing UI/UX designs into functional web pages.",
        "Built the system to support responsive design for multiple screen sizes and devices.",
        "Developed and integrated APIs to retrieve data from the database and display it on the website."
      ]
    }
  ];

  const allSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    { name: "Javascript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
    { name: "Typescript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-foreground" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "XAMPP", icon: <SiXampp className="text-[#FB7A24]" /> },
    { name: "GitHub", icon: <FaGithub className="text-foreground" /> },
  ];

  // skills
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 dark:bg-primary/[0.02] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            whileInView={{ width: "80px" }}
            initial={{ width: "0" }}
            className="h-1.5 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="space-y-24">
          {/* Education */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary/20" />
              <span className="px-6 py-2 bg-primary/10 rounded-full text-xl font-bold border border-primary/20 text-primary whitespace-nowrap tracking-widest">
                EDUCATION
              </span>
              <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-primary/50 to-primary/20" />
            </motion.div>

            <div className="relative space-y-12 px-4 md:px-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

              {education.map((item, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] -translate-x-1/2 z-20 border-2 border-background" />

                  {/* Card Content */}
                  <div className="w-full md:w-[45%]">
                    <div className="group relative p-6 md:p-8 glass rounded-[2rem] hover:border-primary/50 transition-all duration-500 overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />

                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-black mb-4 tracking-widest uppercase">
                          {item.year}
                        </span>
                        <h4 className="text-xl md:text-2xl font-black mb-1 group-hover:text-primary transition-colors leading-tight">
                          {item.degree}
                        </h4>
                        <p className="text-base md:text-lg font-bold text-foreground/80 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {item.school}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary/20" />
              <span className="px-6 py-2 bg-primary/10 rounded-full text-xl font-bold border border-primary/20 text-primary whitespace-nowrap tracking-widest">
                INTERNSHIP EXPERIENCE
              </span>
              <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-primary/50 to-primary/20" />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {internships.map((job, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative w-full max-w-xl p-8 glass rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-tighter">
                        {job.year}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black mb-1 group-hover:text-primary transition-colors leading-tight">
                      {job.role}
                    </h4>
                    <p className="text-lg font-bold text-foreground/80 mb-6 italic">
                      {job.company}
                    </p>
                    <ul className="text-foreground/60 leading-relaxed font-medium mt-auto list-disc pl-5 space-y-2 text-sm">
                      {job.points.map((point, i) => (
                        <li key={i} className="group-hover:text-foreground/80 transition-colors">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-12">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary/20" />
              <span className="px-6 py-2 bg-primary/10 rounded-full text-xl font-bold border border-primary/20 text-primary whitespace-nowrap tracking-widest uppercase">
                Skills
              </span>
              <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-primary/50 to-primary/20" />
            </motion.div>

            <div className="relative w-full overflow-hidden py-10">
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

              <motion.div
                className="flex gap-6 md:gap-10 items-center whitespace-nowrap"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {marqueeSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-center gap-2 p-5 glass rounded-2xl min-w-[120px] md:min-w-[140px] hover:border-primary/50 transition-all hover:scale-105 group"
                  >
                    <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
