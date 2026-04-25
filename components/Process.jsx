"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Target, Zap, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "Deep dive into your current systems to find leaks and opportunities for growth.",
    icon: <ClipboardCheck className="w-10 h-10 text-blue-400" />,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Architecting a custom roadmap focused on revenue generation and scale.",
    icon: <Target className="w-10 h-10 text-blue-500" />,
  },
  {
    number: "03",
    title: "Execution",
    description: "Building your high-performance website and launching multi-channel marketing campaigns.",
    icon: <Zap className="w-10 h-10 text-indigo-400" />,
  },
  {
    number: "04",
    title: "Scale",
    description: "Data-driven optimization and scaling your systems to maximize profitability.",
    icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-stroke/30 -z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-accent uppercase tracking-widest font-bold text-sm mb-4 block">How We Work</span>
          <h2 className="text-5xl md:text-7xl font-display italic leading-tight mb-8">
            The <span className="text-muted">CyberShield</span> Blueprint
          </h2>
          <p className="text-lg md:text-xl text-muted">
            A battle-tested 4-step process designed to take your business from audit to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex flex-col items-center text-center p-8 bg-surface/30 rounded-[40px] border border-stroke hover:border-accent transition-all duration-500 hover:bg-surface/50 translate-y-0 hover:-translate-y-4 shadow-xl shadow-transparent hover:shadow-accent/5 backdrop-blur-sm"
            >
              <div className="text-6xl font-display italic text-stroke group-hover:text-accent opacity-20 mb-6 transition-all duration-500">
                {step.number}
              </div>
              
              <div className="mb-8 p-6 rounded-3xl bg-background border border-stroke group-hover:scale-110 transition-transform duration-500 group-hover:border-accent/30 shadow-2xl shadow-transparent group-hover:shadow-accent/10">
                {step.icon}
              </div>
              
              <h3 className="text-3xl font-display italic mb-6">{step.title}</h3>
              <p className="text-muted leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {step.description}
              </p>
              
              <div className="mt-auto pt-8">
                <ArrowRight className="w-6 h-6 text-stroke transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aesthetic accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-gradient opacity-10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent-gradient opacity-10 blur-[100px] pointer-events-none" />
    </section>
  );
}
