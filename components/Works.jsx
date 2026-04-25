"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Digital & Performance Marketing",
    description: "Scale traffic, optimize funnels, and convert users into revenue.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/9] md:aspect-auto"
  },
  {
    id: 2,
    title: "E-commerce & Marketplace",
    description: "Build high-converting online stores and scalable commerce systems.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto"
  },
  {
    id: 3,
    title: "Web & App Development",
    description: "Fast, scalable, and modern digital products engineered to perform.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto"
  },
  {
    id: 4,
    title: "GenAI & Agentic AI",
    description: "Automate workflows, build AI agents, and scale business intelligence.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/9] md:aspect-auto"
  }
];

export default function Works() {
  return (
    <section id="work" className="py-16 md:py-24 bg-bg relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tight text-text-primary mb-8">
              Growth-Driven <span className="italic">Services</span>
            </h2>
            <p className="text-lg text-muted font-body leading-relaxed max-w-sm">
                CyberShield is a growth-focused digital agency specializing in modern web development and performance marketing.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full border border-stroke text-sm group hover:border-transparent transition-all relative overflow-hidden">
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-text-primary group-hover:text-white flex items-center gap-2">
              View all work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: work.id * 0.1 }}
              className={`${work.colSpan} ${work.aspect} min-h-[280px] md:min-h-[300px] group relative rounded-3xl overflow-hidden bg-surface border border-stroke cursor-pointer`}
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Halftone Overlay */}
              <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply pointer-events-none" />

              {/* Hover Label */}
              <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="bg-bg/80 backdrop-blur-lg rounded-full p-1 pl-6 flex items-center justify-between border border-white/10 group-hover:shadow-xl group-hover:shadow-black/20">
                  <span className="text-sm text-text-primary font-body tracking-wide py-2">
                    View — <span className="font-display italic ml-1">{work.title}</span>
                  </span>
                  <div className="w-10 h-10 rounded-full bg-text-primary text-bg flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Gradient Shine on Hover */}
              <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
