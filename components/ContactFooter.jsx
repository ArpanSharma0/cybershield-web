"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { Twitter, Linkedin, Github, Dribbble, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  const videoRef = useRef(null);
  const marqueeRef = useRef(null);

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

    // GSAP Marquee
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer id="contact" className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-bg overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Marquee Section */}
        <div className="w-full overflow-hidden border-y border-stroke/30 py-8 md:py-12 mb-24 md:mb-32">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/10 tracking-tighter uppercase px-8">
                SCALABLE BY DESIGN • BUILT FOR PERFORMANCE •
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-display italic leading-none text-text-primary mb-12">
              Ready to <span className="text-muted">Scale Your Presence?</span>
            </h2>
            <p className="text-muted text-sm md:text-base uppercase tracking-[0.2em] mb-12 max-w-xl mx-auto">
                Let’s build a system that drives traffic, converts users, and grows your business.
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center rounded-full p-[2px] overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
              <div className="relative flex items-center gap-4 bg-bg rounded-full px-10 py-5 text-lg md:text-2xl font-display italic text-text-primary tracking-wide">
                Book Your Strategy Call <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-stroke/30">
          {/* Social Links */}
          <div className="flex items-center gap-8 order-2 md:order-1 text-muted text-xs uppercase tracking-widest font-bold">
            <a href="tel:+919315471293" className="hover:text-text-primary transition-colors">+91 9315471293</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted font-body uppercase tracking-[0.2em] order-3 md:order-2">
            © 2026 CYBERSHIELD. ALL RIGHTS RESERVED.
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-3 order-1 md:order-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
              <div className="relative w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-text-primary font-bold uppercase tracking-widest">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
