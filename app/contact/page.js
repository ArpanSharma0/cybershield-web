"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import ContactFooter from "@/components/ContactFooter";

export default function ContactPage() {
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
                href="/" 
                className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors text-xs uppercase tracking-widest mb-8 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to home
              </Link>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.8] tracking-tighter mb-8">
                Let&apos;s build <br />
                <span className="text-muted">the future.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Ready to scale your digital presence? We&apos;re here to help you build systems that drive real growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-surface/50 border border-stroke rounded-3xl px-6 py-4 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-surface/50 border border-stroke rounded-3xl px-6 py-4 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Service of Interest</label>
                    <select className="w-full bg-surface/50 border border-stroke rounded-3xl px-6 py-4 focus:outline-none focus:border-text-primary transition-colors appearance-none text-muted">
                        <option>SEO & Organic Growth</option>
                        <option>Performance Marketing</option>
                        <option>Web Development</option>
                        <option>Ecommerce Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-surface/50 border border-stroke rounded-3xl px-6 py-4 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30 resize-none"
                    />
                  </div>

                  <button className="relative group overflow-hidden rounded-full w-full py-5 transition-all duration-300" type="button">
                    <div className="absolute inset-0 accent-gradient" />
                    <div className="relative flex items-center justify-center gap-2 text-text-primary font-bold text-sm tracking-widest uppercase">
                      Send Message <Send size={16} />
                    </div>
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 space-y-16"
              >
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-muted mb-2 font-bold">Email Us</h4>
                      <p className="text-xl font-display italic">info@cybershield.in</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-muted mb-2 font-bold">Call Us</h4>
                      <p className="text-xl font-display italic">+91 9315471293</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-muted mb-2 font-bold">Visit Us</h4>
                      <p className="text-sm font-display italic leading-tight">
                        T3, B1603, NXOne, Tech zone 4,<br />
                        Opposite Gaur city mall,<br />
                        Greater Noida, UP, 201306
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-surface/30 border border-stroke">
                  <h4 className="text-xs uppercase tracking-widest text-muted mb-6 font-bold">Global Presence</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Based in India, serving clients across the US, UK, Canada, and Dubai. Our team operates on a global scale to deliver high-performance digital systems.
                  </p>
                </div>
              </motion.div>
            </div>
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
