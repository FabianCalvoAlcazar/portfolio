/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Cpu, 
  Globe, 
  Terminal,
  Mail,
  Calendar,
} from 'lucide-react';

// --- DATOS: PROYECTOS ---
const PROJECTS = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "A high-performance analytics dashboard with real-time data visualization using WebSockets.",
    tags: ["React", "D3.js", "Node.js"],
    category: "Web",
    color: "from-purple-500 to-indigo-600",
    link: "#",
    repo: "#"
  },
  {
    id: 2,
    title: "EcoTrack Mobile",
    description: "Cross-platform mobile application for tracking personal carbon footprints and recycling habits.",
    tags: ["React Native", "Firebase", "Maps API"],
    category: "Mobile",
    color: "from-emerald-400 to-teal-600",
    link: "#",
    repo: "#"
  },
  {
    id: 3,
    title: "Sentience AI",
    description: "Natural Language Processing tool that summarizes legal documents into plain English.",
    tags: ["Python", "OpenAI API", "Next.js"],
    category: "AI",
    color: "from-orange-400 to-pink-600",
    link: "#",
    repo: "#"
  }
];

// --- DATOS: EXPERIENCIA ---
const EXPERIENCE = [
  {
    company: "TechNova Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading a team of 5 developers in building scalable microservices. Improved system latency by 40%."
  },
  {
    company: "Creative Solutions",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: "Developed interactive UIs for e-commerce clients using React and Tailwind. Implemented CI/CD pipelines."
  },
  {
    company: "StartUp Garage",
    role: "Junior Web Developer",
    period: "2018 - 2020",
    description: "Collaborated on the launch of 3 MVP products. Maintained legacy codebases and integrated payment gateways."
  }
];

// --- DATOS: SKILLS ---
const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
  Tools: ["Docker", "AWS", "Git", "Figma", "Linux"]
};

const CATEGORIES = ["All", "Web", "Mobile", "AI", "Tools"];

// --- COMPONENTE DE ANIMACIÓN AL SCROLL ---
const RevealOnScroll: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Code2 size={20} className="text-white" />
            </div>
            <span>DevPortfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Always Visible */}
      <header className="relative pt-32 pb-40 px-6 overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-indigo-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Crafting digital <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
              experiences.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I&apos;m a Full Stack Developer transforming ideas into scalable, high-performance web applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                {/* --- FOTO DE PERFIL (Movida aquí) --- */}
                <div className="relative w-32 h-32 mb-8 group">
                  <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                    alt="Profile" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-950 shadow-2xl"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About Me
                </h2>
                <div className="w-20 h-1.5 bg-indigo-500 mb-8 rounded-full"></div>
                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                  With over 5 years of experience in software development, I have a passion for building software that solves real-world problems. My journey began with a simple curiosity about how websites worked, which evolved into a career in full-stack engineering.
                </p>
                <p className="text-slate-400 leading-relaxed text-lg">
                  When I&apos;m not coding, you can find me contributing to open-source projects, writing tech blogs, or exploring the latest advancements in AI and machine learning.
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                   <Cpu className="text-indigo-400" /> Technical Arsenal
                 </h3>
                 <div className="space-y-6">
                   {Object.entries(SKILLS).map(([category, items]) => (
                     <div key={category}>
                       <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">{category}</h4>
                       <div className="flex flex-wrap gap-2">
                         {items.map(skill => (
                           <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-default">
                             {skill}
                           </span>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
              <p className="text-slate-400">My career path and the companies I&apos;ve had the privilege to work with.</p>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-10 md:pl-0">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-indigo-400 bg-indigo-950/30 rounded-full border border-indigo-900">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                    <h4 className="text-lg text-slate-400 mb-4">{job.company}</h4>
                    <p className="text-slate-500 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-slate-400">A collection of my best work.</p>
              </div>
              
              <div className="flex p-1 bg-slate-900/50 border border-slate-800 rounded-xl overflow-x-auto no-scrollbar">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      filter === cat 
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
                >
                  <div className={`h-48 bg-linear-to-br ${project.color} relative p-6 flex flex-col justify-end`}>
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-md w-fit p-2 rounded-lg mb-3 text-white border border-white/20">
                        {project.category === 'Web' && <Globe size={20} />}
                        {project.category === 'Mobile' && <Smartphone size={20} />}
                        {project.category === 'AI' && <Cpu size={20} />}
                        {project.category === 'Tools' && <Terminal size={20} />}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                      <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                      <a href={project.repo} className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-linear-to-b from-slate-950 to-indigo-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                I&apos;m currently available for freelance projects and open to new full-time opportunities. 
                If you have an idea you want to bring to life, let&apos;s talk.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all">
                  <Mail size={20} />
                  Send an Email
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all">
                  <Calendar size={20} />
                  Schedule a Call
                </a>
              </div>

              <div className="flex justify-center gap-8 border-t border-slate-800 pt-8">
                <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><ExternalLink size={24} /></a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 px-6 text-center text-slate-600 text-sm">
        <p>© 2024 DevPortfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}