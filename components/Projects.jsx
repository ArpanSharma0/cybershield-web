"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Quantum Ledger",
    desc: "Next-gen blockchain security infrastructure for financial institutions.",
    stack: ["React", "Go", "Solidity"],
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "NetShield AI",
    desc: "Real-time threat detection system powered by machine learning.",
    stack: ["Python", "TensorFlow", "Next.js"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Vortex CRM",
    desc: "Custom enterprise CRM with end-to-end encryption for sensitive data.",
    stack: ["Node.js", "PostgreSQL", "React"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Featured <span className="text-primary italic">Projects.</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium">
              A selection of our latest engineering works for clients 
              ranging from stealth startups to global enterprises.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/10 hover:border-primary/50 text-white font-bold transition-all">
            See All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/5"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map(s => (
                            <span key={s} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                {s}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        {project.title}
                        <ExternalLink size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed font-medium">
                    {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
