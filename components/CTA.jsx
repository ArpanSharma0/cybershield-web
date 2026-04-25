"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-[60px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl text-center"
        >
          <div className="inline-flex py-3 px-6 rounded-full bg-primary/20 text-primary text-sm font-black uppercase tracking-widest mb-8">
            Ready to secure your future?
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.05] tracking-tight">
            Let’s build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              secure and scalable.
            </span>
          </h2>
          <button className="px-12 py-5 bg-primary hover:bg-blue-600 text-white text-xl font-extrabold rounded-full transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 mx-auto">
            Book a Free Consultation
            <Send className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
