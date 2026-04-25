"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

const caseStudies = [
  {
    client: "FinTech Startup",
    problem: "Struggling with high CAC and low organic reach.",
    solution: "Implemented comprehensive SEO strategy and ROI-focused LinkedIn ads.",
    result: "320% Increase in qualified leads",
    metrics: [{ icon: <TrendingUp size={16} />, label: "+145% Traffic" }, { icon: <Users size={16} />, label: "3.2x ROI" }],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    client: "E-commerce Empire",
    problem: "Mobile conversion rates were 50% lower than desktop.",
    solution: "Custom Next.js headless commerce setup with ultra-fast UX optimization.",
    result: "$1.2M Added revenue in 6 months",
    metrics: [{ icon: <Target size={16} />, label: "2.1s Load speed" }, { icon: <TrendingUp size={16} />, label: "+85% Mobile CR" }],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    client: "SaaS Platform",
    problem: "Global enterprise customers found the brand outdated.",
    solution: "Full premium rebrand and interactive product demonstration portal.",
    result: "Closed 4 Fortune 500 deals in Q3",
    metrics: [{ icon: <Users size={16} />, label: "+200% Demo requests" }, { icon: <Target size={16} />, label: "98% Positive feedback" }],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-accent uppercase tracking-widest font-bold text-sm mb-4 block">Proven Results</span>
          <h2 className="text-5xl md:text-7xl font-display italic leading-tight mb-8">
            Success Stories <span className="text-muted">Built on Performance</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            We don't just deliver projects; we deliver measurable business outcomes. 
            Here's how we've helped global clients scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-stroke hover:border-accent transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest">
                  {study.client}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h4 className="text-muted text-sm uppercase tracking-widest font-bold mb-2">Problem</h4>
                  <p className="text-foreground font-medium leading-relaxed">{study.problem}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-muted text-sm uppercase tracking-widest font-bold mb-2">Solution</h4>
                  <p className="text-foreground leading-relaxed">{study.solution}</p>
                </div>

                <div className="mt-auto pt-8 border-t border-stroke space-y-6">
                  <div className="flex flex-col">
                    <h4 className="text-accent text-2xl font-display italic mb-1">{study.result}</h4>
                  </div>
                  
                  <div className="flex gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-stroke text-xs text-muted">
                        {metric.icon}
                        {metric.label}
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                    Read Full Story
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
