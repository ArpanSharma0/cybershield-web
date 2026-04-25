"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#work" },
  { name: "Projects", href: "/#journal" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          isScrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <div className="relative group w-10 h-10 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
            {/* Animated Gradient Border */}
            <div className="absolute w-[200%] aspect-square accent-gradient group-hover:rotate-180 transition-transform duration-1000" />
            {/* Inner Content */}
            <div className="absolute inset-[2px] bg-bg rounded-full flex items-center justify-center">
              <img src="/Group 1000004877.svg" alt="CyberShield Logo" className="w-5 h-5 object-contain" />
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Nav Links */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-xs sm:text-sm text-muted rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:text-text-primary hover:bg-stroke/30 transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Contact Button */}
        <Link href="/contact">
          <div className="relative group flex items-center justify-center overflow-hidden rounded-full">
            {/* Border Glow on Hover */}
            <span className="absolute -inset-[2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            
            <div className="text-xs sm:text-sm text-text-primary bg-surface/50 group-hover:bg-[#4E85BF] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 backdrop-blur-md flex items-center gap-1">
              Contact <span className="transform translate-y-[1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </nav>
  );
}
