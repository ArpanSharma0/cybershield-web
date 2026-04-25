"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const journalEntries = [
  {
    id: 1,
    title: "Proactive Website Maintenance",
    category: "Performance & Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400",
    readTime: "Optimization",
    date: "MANAGED"
  },
  {
    id: 2,
    title: "Marketplace Optimization",
    category: "Sales Performance",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=400",
    readTime: "Scale",
    date: "RESULTS"
  },
  {
    id: 3,
    title: "Social Media Strategy",
    category: "Brand Engagement",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
    readTime: "Presence",
    date: "DATA-DRIVEN"
  },
  {
    id: 4,
    title: "Content & Growth Strategy",
    category: "Authority & Trust",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
    readTime: "Engage",
    date: "SCALABLE"
  }
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8"
        >
            <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-px bg-stroke" />
                    <span className="text-xs text-muted uppercase tracking-[0.3em]">Insights</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tight text-text-primary mb-8 text-left">
                    Strategic <span className="italic">outcomes</span>
                </h2>
                <p className="text-lg text-muted font-body leading-relaxed max-w-sm">
                    We combine technology and creativity to build digital systems that are not only refined but commercially effective.
                </p>
            </div>

            <button className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full border border-stroke text-sm group hover:border-transparent transition-all relative overflow-hidden">
                <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-text-primary group-hover:text-white flex items-center gap-2">
                    View all journal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </motion.div>

        {/* Entries List */}
        <div className="flex flex-col gap-4">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-4 md:p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[2rem] md:rounded-full transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />

              {/* Image Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-stroke group-hover:border-accent/30 transition-colors duration-500 shrink-0">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">
                  {entry.category}
                </div>
                <h3 className="text-xl md:text-2xl font-display italic text-text-primary group-hover:text-white transition-colors duration-300 truncate pr-4">
                  {entry.title}
                </h3>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-6 text-xs text-muted shrink-0 w-full md:w-auto mt-4 md:mt-0 justify-between md:justify-end md:pr-4">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-stroke" />
                  {entry.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-stroke" />
                  {entry.date}
                </div>
                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-all duration-500 hidden sm:flex shrink-0">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
