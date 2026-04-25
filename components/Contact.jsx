"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-56 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-accent uppercase tracking-widest font-bold text-sm mb-6 block">Take the next step</span>
          <h2 className="text-6xl md:text-[10rem] font-display italic leading-[0.85] tracking-tighter mb-16">
            Ready to <span className="text-stroke">Scale</span> Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-16">
            Book a free 15-minute strategy call with our growth experts. 
            No pitch, just pure value and a Roadmap to Scale.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="px-12 py-7 rounded-full bg-accent-gradient text-white text-xl font-bold hover:scale-105 transition-all flex items-center gap-3 group shadow-2xl shadow-blue-500/20">
              <Calendar size={24} />
              Book Free Strategy Call
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a href="mailto:hello@cybershield.agency" className="text-lg font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b border-stroke pb-1">
              hello@cybershield.agency
            </a>
          </div>
        </motion.div>
      </div>

      {/* Extreme aesthetic background glow */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-accent-gradient opacity-[0.03] blur-[250px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[1000px] h-[1000px] bg-accent-gradient opacity-[0.03] blur-[250px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
