"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import ContactFooter from "@/components/ContactFooter";

export default function EcommercePage() {
  return (
    <main className="relative min-h-screen bg-bg text-text-primary font-body overflow-hidden">
      <Navbar />

      <SmoothScroll>
        <div className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-16 md:mb-24"
            >
              <Link 
                href="/#work" 
                className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors text-xs uppercase tracking-widest mb-8 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to services
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">Service</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                E-commerce & Marketplace
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Build high-converting online stores and scalable commerce systems.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                "Shopify / Custom Stores",
                "Payment Integration",
                "Marketplace Setup",
                "Conversion Optimization"
              ].map((feature, i) => (
                <div key={i} className="p-8 md:p-12 rounded-[2rem] bg-surface/30 border border-stroke backdrop-blur-md flex flex-col justify-center gap-4 hover:border-text-primary transition-colors duration-300 min-h-[200px]">
                  <h3 className="text-2xl md:text-3xl font-display italic">{feature}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <ContactFooter />
      </SmoothScroll>

      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gradient opacity-[0.03] blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gradient opacity-[0.03] blur-[150px] -z-10 -translate-x-1/3 translate-y-1/3" />
    </main>
  );
}
