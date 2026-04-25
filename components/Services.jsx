"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Megaphone, Layout, ShoppingCart, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description: "Rank higher and dominate search results with data-driven strategies for sustainable organic growth.",
    icon: <Search className="w-8 h-8 text-blue-400" />,
    link: "#",
    tagline: "Rank higher & get organic traffic",
  },
  {
    title: "Paid Advertising",
    description: "Scale your business with high-performance PPC and social media ads focused on maximizing ROI.",
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    link: "#",
    tagline: "Scale with ROI-focused ads",
  },
  {
    title: "Website Development",
    description: "Fast, modern, and high-converting websites crafted to turn your visitors into loyal customers.",
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
    link: "#",
    tagline: "Fast, modern, conversion-focused sites",
  },
  {
    title: "Ecommerce Growth",
    description: "End-to-end solutions for online stores, from development to Amazon listing optimization.",
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    link: "#",
    tagline: "Increase online store revenue",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent uppercase tracking-widest font-bold text-sm mb-4 block">Our Specialties</span>
            <h2 className="text-5xl md:text-7xl font-display italic leading-tight">
              Growth-Focused <span className="text-muted">Solutions</span> for Your Business
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-muted max-w-sm mb-4"
          >
            We don't just build websites; we create marketing systems that scale revenue.
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-3xl bg-surface/50 border border-stroke hover:border-accent transition-all duration-500 relative flex flex-col justify-between h-[400px] hover:bg-surface/80"
            >
              <div>
                <div className="mb-8 w-16 h-16 rounded-2xl bg-background border border-stroke flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-display italic mb-4">{service.title}</h3>
                <p className="text-muted mb-6 group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                <div className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.tagline}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center group-hover:bg-accent-gradient group-hover:border-transparent transition-all duration-300">
                  <ArrowUpRight size={20} className="group-hover:text-white" />
                </div>
              </div>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
