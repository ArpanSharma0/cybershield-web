"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const explorations = [
  { 
    id: 1, 
    title: "Dhoop Mag", 
    niche: "Independent Editorial", 
    link: "https://dhoopmag.com", 
    image: "https://s.wordpress.com/mshots/v1/https://dhoopmag.com?w=800", 
    rotation: -5, 
    y: 100 
  },
  { 
    id: 2, 
    title: "CVNT", 
    niche: "Creative Collective", 
    link: "https://cvnt.com", 
    image: "https://s.wordpress.com/mshots/v1/https://cvnt.com?w=800", 
    rotation: 5, 
    y: -50 
  },
  { 
    id: 3, 
    title: "Khegai", 
    niche: "Professional Services", 
    link: "https://khegai.com", 
    image: "https://s.wordpress.com/mshots/v1/https://khegai.com?w=800", 
    rotation: -8, 
    y: 150 
  },
  { 
    id: 4, 
    title: "Mango Media", 
    niche: "Media Production", 
    link: "https://mangomedia.com", 
    image: "https://s.wordpress.com/mshots/v1/https://mangomedia.com?w=800", 
    rotation: 10, 
    y: -100 
  },
  { 
    id: 5, 
    title: "chkstepan", 
    niche: "Web Engineering", 
    link: "https://chkstepan.com", 
    image: "https://s.wordpress.com/mshots/v1/https://chkstepan.com?w=800", 
    rotation: -3, 
    y: 200 
  },
  { 
    id: 6, 
    title: "Tellet AI", 
    niche: "AI Communication", 
    link: "https://tellet.ai", 
    image: "https://s.wordpress.com/mshots/v1/https://tellet.ai?w=800", 
    rotation: 7, 
    y: -150 
  },
  { 
    id: 7, 
    title: "Crayo AI", 
    niche: "AI Creative Tools", 
    link: "https://crayo.ai", 
    image: "https://s.wordpress.com/mshots/v1/https://crayo.ai?w=800", 
    rotation: -4, 
    y: 120 
  },
  { 
    id: 8, 
    title: "Zazu", 
    niche: "E-Commerce", 
    link: "https://www.zazuindia.com/", 
    image: "https://s.wordpress.com/mshots/v1/https://www.zazuindia.com/?w=800", 
    rotation: 6, 
    y: -80 
  },
  { 
    id: 9, 
    title: "Atompoint", 
    niche: "IT Consultancy", 
    link: "https://atompoint.com", 
    image: "https://s.wordpress.com/mshots/v1/https://atompoint.com?w=800", 
    rotation: -5, 
    y: 180 
  },
  { 
    id: 10, 
    title: "CodeWinglet", 
    niche: "IT Solutions", 
    link: "https://codewinglet.com", 
    image: "https://s.wordpress.com/mshots/v1/https://codewinglet.com?w=800", 
    rotation: 4, 
    y: -120 
  },
  { 
    id: 11, 
    title: "Postevand", 
    niche: "Sustainable Packaging", 
    link: "https://postevand.com", 
    image: "https://s.wordpress.com/mshots/v1/https://postevand.com?w=800", 
    rotation: -7, 
    y: 220 
  },
  { 
    id: 12, 
    title: "Frase", 
    niche: "SEO/AEO Software", 
    link: "https://frase.io", 
    image: "https://s.wordpress.com/mshots/v1/https://frase.io?w=800", 
    rotation: 8, 
    y: -160 
  },
];

export default function Explorations() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const columnLeftRef = useRef(null);
  const columnRightRef = useRef(null);
  const pinnedContentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Pin the content in the center
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: pinnedContentRef.current,
      pinSpacing: false,
    });

    // Parallax columns
    gsap.to(columnLeftRef.current, {
      y: -500,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    gsap.to(columnRightRef.current, {
      y: 500,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    return () => {
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[500vh] bg-bg overflow-hidden">
      {/* Layer 1: Pinned Center Content */}
      <div 
        ref={pinnedContentRef}
        className="absolute inset-0 h-screen flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="max-w-2xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Showcase</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-display italic leading-tight text-text-primary mb-8 px-4">
            Visual <span className="text-accent underline decoration-stroke/30 decoration-thickness-2 underline-offset-8">playground</span>
          </h2>
          <p className="text-lg text-muted font-body leading-relaxed max-w-sm mx-auto mb-12 pointer-events-auto">
            A curated selection of high-performance websites, creative engineering, and digital products.
          </p>
          <div className="flex justify-center mt-12 animate-bounce pointer-events-none">
            <ArrowDown className="text-stroke" size={24} />
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="relative pt-32 pb-32 max-w-[1400px] mx-auto px-6 grid grid-cols-2 gap-12 md:gap-40 z-20">
        {/* Left Column */}
        <div ref={columnLeftRef} className="flex flex-col gap-24 md:gap-40">
          {explorations.slice(0, 6).map((item) => (
            <motion.div
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-square max-w-[320px] rounded-3xl overflow-hidden bg-surface border border-stroke cursor-pointer"
              style={{ rotate: item.rotation, y: item.y }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Overlay Label */}
              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-bg/90 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">{item.niche}</span>
                  <span className="text-xs text-text-primary font-bold uppercase tracking-widest">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div ref={columnRightRef} className="flex flex-col gap-24 md:gap-40 pt-96">
          {explorations.slice(6).map((item) => (
            <motion.div
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-square max-w-[320px] rounded-3xl overflow-hidden bg-surface border border-stroke cursor-pointer"
              style={{ rotate: item.rotation, y: item.y }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Overlay Label */}
              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-bg/90 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">{item.niche}</span>
                  <span className="text-xs text-text-primary font-bold uppercase tracking-widest">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Aesthetic Accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-gradient opacity-[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-accent-gradient opacity-[0.02] blur-[150px] pointer-events-none" />
    </section>
  );
}
