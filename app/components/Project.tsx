"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  SiNextdotjs, SiPython, SiReact, SiDocker, SiTypescript,
  SiTailwindcss, SiMysql, SiBootstrap, SiFastapi, SiHtml5,
  SiCss, SiJavascript, SiNodedotjs, SiExpress, SiPostgresql
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

interface ProjectItem {
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  images: string[];
  features?: string[];
  github?: string;
}

const getTechIcon = (tech: string) => {
  const iconProps = { size: 12 };
  switch (tech.toLowerCase()) {
    case "next.js": return <SiNextdotjs {...iconProps} />;
    case "react": return <SiReact {...iconProps} className="text-[#61DAFB]" />;
    case "python": return <SiPython {...iconProps} className="text-[#3776AB]" />;
    case "docker": return <SiDocker {...iconProps} className="text-[#2496ED]" />;
    case "typescript": return <SiTypescript {...iconProps} className="text-[#3178C6]" />;
    case "tailwind css":
    case "tailwindcss": return <SiTailwindcss {...iconProps} className="text-[#06B6D4]" />;
    case "mysql": return <SiMysql {...iconProps} className="text-[#4479A1]" />;
    case "bootstrap": return <SiBootstrap {...iconProps} className="text-[#7952B3]" />;
    case "fastapi": return <SiFastapi {...iconProps} className="text-[#05998B]" />;
    case "html": return <SiHtml5 {...iconProps} className="text-[#E34F26]" />;
    case "css": return <SiCss {...iconProps} className="text-[#1572B6]" />;
    case "javascript": return <SiJavascript {...iconProps} className="text-[#F7DF1E]" />;
    case "nodejs": return <SiNodedotjs {...iconProps} className="text-[#339933]" />;
    case "expressjs": return <SiExpress {...iconProps} className="text-foreground" />;
    case "postgresql": return <SiPostgresql {...iconProps} className="text-[#4169E1]" />;
    default: return <FaCode {...iconProps} />;
  }
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const projects: ProjectItem[] = [
    {
      title: "Car rental system",
      desc: "A comprehensive car rental platform for managing bookings, vehicles, and customer data.",
      longDesc: "I developed a car rental system as a web application, where my primary responsibility was in the frontend development. I implemented the provided UI/UX designs and transformed them into fully functional web pages. The system was designed with a responsive layout to ensure optimal usability across various devices and screen sizes. Additionally, I developed and integrated APIs to retrieve data from the database and display it on the website. This enabled the system to efficiently manage data and respond accurately to user interactions.",
      tech: ["Next.js", "TypeScript", "Tailwind css", "MySQL", "Docker"],
      images: [
        "/images/projects3/project-0.jpg",
        "/images/projects3/project-1.jpg",
        "/images/projects3/project-2.jpg",
        "/images/projects3/project-3.jpg",
        "/images/projects3/project-4.jpg",
        "/images/projects3/project-5.jpg",
        "/images/projects3/project-6.jpg",
      ],
      features: [],
    },
    {
      title: "Student project data management system from PDF file (Graduation Project)",
      desc: "An automated system for extracting and managing student project data directly from PDF documents.",
      longDesc: "This project aims to solve the problem of unclear file naming. Users often have difficulty finding project content and must open each file manually to verify its contents. The system extracts important information from the files to help users quickly access the information they need.",
      tech: ["React", "Bootstrap", "FastAPI", "Python"],
      images: [
        "/images/projects2/project-0.jpg",
        "/images/projects2/project-1.jpg",
        "/images/projects2/project-2.jpg",
        "/images/projects2/project-3.jpg",
        "/images/projects2/project-4.jpg",
        "/images/projects2/project-5.jpg",
        "/images/projects2/project-6.jpg",
        "/images/projects2/project-7.jpg",
        "/images/projects2/project-8.jpg",
        "/images/projects2/project-9.jpg",
      ],
      features: [
        "Importing and managing user account data.",
        "Authenticating users via university email.",
        "Uploading PDF project files to Google Drive and extracting information into Google Sheets.",
        "Managing project data effectively.",
        "Searching for project files based on relevant information."
      ],
      github: "https://github.com/Zm1thDev/Project-end-Year-4",
    },
    {
      title: "Name checking system",
      desc: "The attendance recording and monitoring system is a mini project.",
      longDesc: "The attendance tracking system is a web application designed for data verification and attendance tracking. It's a mini-project developed using Node.js and Express with a PostgreSQL database.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Nodejs", "Expressjs", "Postgresql"],
      images: [
        "/images/projects1/project-0.jpg",
        "/images/projects1/project-1.jpg",
        "/images/projects1/project-2.jpg",
        "/images/projects1/project-3.jpg",
        "/images/projects1/project-4.jpg",
      ],
      features: [
        "Record student attendance for each class group and save the data to a database.",
        "Allow downloading the student list for each class group as a CSV file.",
        "Enable searching for student names and managing additional student information.",
        "Provide a dashboard displaying attendance details.",
      ],
      github: "https://github.com/Zm1thDev/checkname",
    },
    {
      title: "Income and expenditure system",
      desc: "The income and expense system is a mini project.",
      longDesc: "The income and expense system is a web application mini-project developed to record and track daily income and expenses.",
      tech: ["Next.js", "TypeScript", "Tailwind css", "MySQL"],
      images: [
        "/images/projects4/project-0.jpg",
        "/images/projects4/project-1.jpg",
        "/images/projects4/project-2.jpg",
        "/images/projects4/project-3.jpg",
        "/images/projects4/project-4.jpg",
      ],
      features: [
        "Login / Register to access the system.",
        "Record income and expense transactions.",
        "Filter all transactions, including income and expense.",
        "Dashboard displaying comparisons and spending.",
        "Export data as a CSV file."
      ],
      github: "https://github.com/Zm1thDev/Income-expenses",
    },
  ];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-primary/5 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Pro<span className="text-primary">jects</span>
          </motion.h2>
          <motion.div
            whileInView={{ width: "80px" }}
            initial={{ width: "0" }}
            className="h-1.5 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group relative overflow-hidden rounded-2xl glass transition-all cursor-pointer hover:border-primary/50"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-6 py-2 bg-primary/90 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-primary/80">
                      {getTechIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <span className="p-2 glass rounded-lg text-primary/80"><Github size={18} /></span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/20 dark:bg-black/90 backdrop-blur-md transition-colors duration-500"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[80vh] md:max-h-[50vh] overflow-hidden rounded-[2.5rem] 
                         backdrop-blur-2xl border transition-all duration-300
                         bg-background/95 
                         text-foreground
                         border-border
                         shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)]
                         flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 md:right-6 z-50 p-1.5 rounded-full text-black md:text-white md:bg-primary md:shadow-lg hover:scale-110 active:scale-95 transition-all group cursor-pointer"
                title="Close"
              >
                <div className="absolute inset-0 bg-primary/40 blur-xl group-hover:bg-primary/60 transition-colors rounded-full" />
                <X size={16} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[220px] md:h-auto relative bg-slate-100 dark:bg-black/40 group/carousel shrink-0">
                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 left-5 z-50 p-1 rounded bg-primary backdrop-blur-md text-white transition-all shadow-lg hover:scale-110 cursor-pointer"
                  title="View Fullscreen"
                >
                  <Maximize2 size={15} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-primary text-white shadow-xl hover:scale-110 active:scale-95 transition-all group/nav cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-primary/40 blur-xl group-hover/nav:bg-primary/60 transition-colors rounded-full" />
                      <ChevronLeft size={15} className="relative z-10" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-primary text-white shadow-xl hover:scale-110 active:scale-95 transition-all group/nav cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-primary/40 blur-xl group-hover/nav:bg-primary/60 transition-colors rounded-full" />
                      <ChevronRight size={15} className="relative z-10" />
                    </button>

                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)]
                                       ${i === currentImageIndex
                              ? "w-8 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                              : "w-2 bg-primary/20 group-hover/carousel:bg-primary/40"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-7 md:p-10 overflow-y-auto flex flex-col transition-colors duration-300
                              bg-gradient-to-b from-transparent to-background/50">
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest
                                                 bg-primary/5 text-primary/80 border border-primary/10">
                          {getTechIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight
                                   text-foreground">
                      {selectedProject.title}
                    </h3>

                    <div className="h-1.5 w-12 bg-primary rounded-full mb-8 shadow-sm dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                    <div className="space-y-8 leading-relaxed">
                      <section>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-primary">Overview</h4>
                        <p className="text-[13px] font-medium leading-relaxed italic border-l-3 border-primary/30 pl-5
                                      text-foreground/80">
                          "{selectedProject.desc}"
                        </p>
                      </section>

                      <section>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-primary">The Project</h4>
                        <p className="text-sm leading-relaxed text-foreground/60 mb-3">
                          {selectedProject.longDesc}
                        </p>

                        {selectedProject.features && selectedProject.features.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-primary">Features</h4>
                            <ul className="space-y-1">
                              {selectedProject.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/60 group/feat">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover/feat:scale-150 transition-transform" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </section>
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                {(selectedProject.github) && (
                  <div className={`grid ${selectedProject.github ? 'grid-cols-1' : 'grid-cols-1'} gap-4 mt-8 pt-8 border-t border-border`}>
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-4 py-4 text-white text-sm font-bold rounded-2xl transition-all active:scale-95 shadow-lg
                                   bg-slate-800 hover:bg-slate-700 dark:bg-primary dark:hover:bg-primary/80"
                      >
                        <Github size={18} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Fullscreen Image */}
      <AnimatePresence>
        {isFullscreen && selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
              className="absolute inset-0 bg-black/20 dark:bg-black/90 backdrop-blur-md transition-colors duration-500 cursor-zoom-out"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image and Controls */}
              <div className="relative group/fs-controls flex items-center justify-center max-w-full max-h-[85vh]">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                />

                {/* Close Button */}
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 z-[210] p-1.5 md:p-2 rounded-full bg-primary/80 backdrop-blur-md text-white shadow-xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
                  title="Close"
                >
                  <div className="absolute inset-0 bg-primary/40 blur-xl group-hover:bg-primary/60 transition-colors rounded-full" />
                  <X size={12} className="relative z-10 md:w-5 md:h-5" />
                </button>

                {/*  Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[210] p-1.5 md:p-2 rounded-full bg-primary/80 backdrop-blur-md text-white shadow-xl hover:scale-110 active:scale-95 transition-all group/prev cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-primary/40 blur-lg group-hover/prev:bg-primary/60 transition-colors rounded-full" />
                      <ChevronLeft size={15} className="relative z-10 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[210] p-1.5 md:p-2 rounded-full bg-primary/80 backdrop-blur-md text-white shadow-xl hover:scale-110 active:scale-95 transition-all group/next cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-primary/40 blur-lg group-hover/next:bg-primary/60 transition-colors rounded-full" />
                      <ChevronRight size={15} className="relative z-10 md:w-5 md:h-5" />
                    </button>

                    {/* Mobile Indicator Bubbles - Inside Bottom */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 md:hidden pointer-events-none">
                      {selectedProject.images.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]
                                       ${i === currentImageIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;

