"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const servicesDropdown = [
  "Tech solution",
  "digital marketing solutions",
  "data & buisness consultancy",
  "AI solution",
  "Market places",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logo}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/CyberShieldLogoC 1.png"
              alt="CyberShield Logo"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          
          <div className={styles.dropdownWrap} ref={dropdownRef}>
            <button 
              className={`${styles.navLink} ${styles.servicesBtn}`}
              onClick={() => setShowDropdown(!showDropdown)}
              aria-expanded={showDropdown}
            >
              Services
              <span className={`${styles.chevron} ${showDropdown ? styles.chevronUp : ""}`}>⌄</span>
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div 
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {servicesDropdown.map((service, idx) => (
                    <Link 
                      key={idx} 
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className={styles.dropdownItem}
                      onClick={() => setShowDropdown(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#blog" className={styles.navLink}>Blog</Link>
        </nav>

        {/* Right: Info + CTA */}
        <div className={styles.rightZone}>
          <ThemeToggle />
          <span className={styles.email}>hi@cybershield.io</span>
          <span className={styles.divider}>·</span>
          <span className={styles.location}>Worldwide</span>
          <Link href="#contact" className={styles.ctaLink}>Contact us</Link>
        </div>
      </div>
    </header>
  );
}
