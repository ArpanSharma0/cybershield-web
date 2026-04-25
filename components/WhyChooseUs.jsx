"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Security-First Approach",
    desc: "We build everything with a proactive security mindset, minimizing vulnerabilities from day one.",
  },
  {
    title: "Fast & Scalable Solutions",
    desc: "Our architectures are designed to handle growth effortlessly without compromising performance.",
  },
  {
    title: "Industry-Level Expertise",
    desc: "A team of senior engineers and product designers with years of high-level experience.",
  },
  {
    title: "End-to-End Development",
    desc: "From initial requirement analysis to final deployment and maintenance — we handle it all.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-black/50 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Why Choose <br />
              <span className="text-primary italic">CyberShield.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-xl font-medium leading-relaxed">
              We don't just build software. We build resilient digital foundations 
              that allow your business to scale with absolute confidence.
            </p>
            
            <div className="grid gap-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="aspect-square bg-white/[0.03] border border-white/5 rounded-3xl p-1 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center text-white/50 font-mono text-sm">
                    {/* Abstract technical visual */}
                    <div className="space-y-4">
                        <div className="w-full h-2 bg-primary/20 rounded-full" />
                        <div className="w-full h-2 bg-primary/10 rounded-full" />
                        <div className="w-3/4 h-2 bg-primary/5 rounded-full" />
                        <div className="w-full h-2 bg-primary/20 rounded-full" />
                        <div className="w-1/2 h-2 bg-primary/10 rounded-full" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
