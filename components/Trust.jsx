"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Active Clients", value: "20+" },
  { label: "Client Satisfaction", value: "99%" },
];

const logos = ["TechCorp", "VentureCap", "GlobalSec", "AlphaSystems", "CloudNine"];

export default function Trust() {
  return (
    <section className="py-20 bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-12">
            Trusted by startups and growing businesses
          </p>
          
          {/* Logo Strip */}
          <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
            {logos.map((logo) => (
              <span key={logo} className="text-2xl font-black tracking-tighter text-white">
                {logo}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-white/5 pt-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl font-extrabold text-white mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
