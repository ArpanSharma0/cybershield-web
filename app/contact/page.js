"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";


export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("Select a Service");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    "SEO & Organic Growth",
    "Performance Marketing",
    "Web Development",
    "Ecommerce Strategy"
  ];

  return (
    <main className="relative min-h-screen bg-bg text-text-primary font-body overflow-hidden">
      <Navbar />

      <SmoothScroll>
        <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 md:mb-16 max-w-3xl"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors text-xs uppercase tracking-widest mb-6 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to home
              </Link>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.85] tracking-tighter mb-6">
                Let&apos;s build <br />
                <span className="text-muted">the future.</span>
              </h1>
              <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
                Ready to scale your digital presence? We&apos;re here to help you build systems that drive real growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <div className="bg-surface/20 border border-stroke rounded-3xl p-6 md:p-10">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-surface/50 border border-stroke rounded-2xl px-5 py-3 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-surface/50 border border-stroke rounded-2xl px-5 py-3 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 relative" ref={dropdownRef}>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Service of Interest</label>
                      <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-surface/50 border rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between cursor-pointer text-text-primary ${isDropdownOpen ? 'border-accent/50 shadow-lg shadow-accent/5' : 'border-stroke'}`}
                      >
                        <span className={selectedService === "Select a Service" ? "text-muted/40 text-sm" : "text-sm"}>{selectedService}</span>
                        <ChevronDown size={16} className={`text-muted transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {/* Custom Dropdown */}
                      <motion.div 
                        initial={false}
                        animate={{ 
                          opacity: isDropdownOpen ? 1 : 0, 
                          y: isDropdownOpen ? 0 : -8,
                          scale: isDropdownOpen ? 1 : 0.98,
                          pointerEvents: isDropdownOpen ? 'auto' : 'none'
                        }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0d1117] border border-stroke/70 rounded-2xl overflow-hidden z-20 shadow-2xl shadow-black/40 backdrop-blur-2xl"
                      >
                        <div className="p-1.5">
                          {services.map((service, idx) => (
                            <div 
                              key={idx}
                              onClick={() => {
                                setSelectedService(service);
                                setIsDropdownOpen(false);
                              }}
                              className={`flex items-center justify-between px-4 py-3 text-sm rounded-xl cursor-pointer transition-all duration-200 ${
                                selectedService === service 
                                  ? 'text-text-primary bg-white/[0.06]' 
                                  : 'text-muted hover:text-text-primary hover:bg-white/[0.04]'
                              }`}
                            >
                              <span>{service}</span>
                              {selectedService === service && (
                                <Check size={14} className="text-accent" />
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-4">Message</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full bg-surface/50 border border-stroke rounded-2xl px-5 py-3 focus:outline-none focus:border-text-primary transition-colors placeholder:text-muted/30 resize-none"
                      />
                    </div>

                    <button className="relative group overflow-hidden rounded-full w-full py-4 transition-all duration-300 mt-2" type="button">
                      <div className="absolute inset-0 accent-gradient" />
                      <div className="relative flex items-center justify-center gap-2 text-text-primary font-bold text-sm tracking-widest uppercase">
                        Send Message <Send size={16} />
                      </div>
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-muted mb-1 font-bold">Email Us</h4>
                      <p className="text-lg font-display italic">info@cybershield.in</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-muted mb-1 font-bold">Call Us</h4>
                      <p className="text-lg font-display italic">+91 9315471293</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-text-primary shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-muted mb-1 font-bold">Visit Us</h4>
                      <p className="text-sm font-display italic leading-relaxed">
                        T3, B1603, NXOne, Tech zone 4,<br />
                        Opposite Gaur city mall,<br />
                        Greater Noida, UP, 201306
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-[2rem] bg-surface/30 border border-stroke mt-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-muted mb-4 font-bold">Global Presence</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Based in India, serving clients across the US, UK, Canada, and Dubai. Our team operates on a global scale to deliver high-performance digital systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </SmoothScroll>

      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gradient opacity-[0.03] blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gradient opacity-[0.03] blur-[150px] -z-10 -translate-x-1/3 translate-y-1/3" />
    </main>
  );
}
