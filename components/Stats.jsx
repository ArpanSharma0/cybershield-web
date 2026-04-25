"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Years Industry Experience" },
  { value: 300, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Businesses Served Globally" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2; // seconds
      const increment = end / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-bg border-y border-stroke relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-center"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-display italic text-text-primary/10 group-hover:text-accent group-hover:opacity-100 transition-all duration-700 leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mt-4">
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted group-hover:text-text-primary transition-colors duration-500 font-bold bg-bg px-4 py-2 rounded-full border border-stroke/50">
                  {stat.label}
                </span>
              </div>
              
              {/* Subtle radial glow */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-full bg-accent-gradient opacity-0 group-hover:opacity-[0.03] blur-[80px] transition-opacity duration-1000 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
