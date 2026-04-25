"use client";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const roles = ["SEO", "PPC Ads", "Platforms", "Strategy"];

export default function Hero() {
  const videoRef = useRef(null);
  const nameRef = useRef(null);
  const eyebrowRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // HLS Logic
    const video = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8");
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    }

    // GSAP Entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(nameRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    )
    .fromTo(eyebrowRef.current, 
      { y: 20, opacity: 0, filter: "blur(10px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 }, 
      "-=0.8"
    );

    // Role Cycling
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          ref={eyebrowRef}
          className="text-xs text-muted font-body uppercase tracking-[0.3em] mb-8"
        >
          Trusted by 100+ businesses • 300+ successful projects
        </motion.div>

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6"
        >
          CyberShield
        </h1>

        <div className="flex items-center justify-center gap-2 text-lg md:text-2xl font-body text-muted mb-12">
          <span>Expert</span>
          <div className="h-8 md:h-12 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-display italic text-text-primary inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span>Systems Built for Growth.</span>
        </div>

        <p className="text-sm md:text-base text-muted font-body max-w-2xl mx-auto mb-12 leading-relaxed">
          We Build Scalable Digital Systems That Drive Real Business Growth. From high-performance websites to data-driven marketing, we help brands attract, convert, and scale with precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Book Call */}
          <Link href="/contact" className="relative group overflow-hidden rounded-full transition-all duration-300">
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-text-primary text-bg rounded-full px-8 py-3.5 group-hover:bg-bg group-hover:text-text-primary transition-all duration-300 font-bold text-sm tracking-widest uppercase">
              Book a Strategy Call
            </div>
          </Link>

          {/* View Our Work */}
          <Link href="/#work" className="relative group overflow-hidden rounded-full transition-all duration-300">
             <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <div className="relative border-2 border-stroke bg-bg text-text-primary rounded-full px-8 py-3 group-hover:border-transparent transition-all duration-300 font-bold text-sm tracking-widest uppercase">
              View Our Work
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke overflow-hidden">
          <div className="w-full h-1/2 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
