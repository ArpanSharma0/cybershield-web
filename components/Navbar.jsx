"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="var(--color-primary)" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2L22 12L12 22L2 12Z" fill="white" />
              </svg>
            </span>
            Agen<span className="text-primary">i</span>x
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#blog" className={styles.navLink}>Blog</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.rightActions}>
          <span className={styles.tagline}>High quality <span style={{textDecoration: "underline"}}>digital experience.</span></span>
          <button className="btn btn-outline" style={{ padding: "10px 24px", borderRadius: "100px" }}>
            <MessageSquare size={16} /> Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}
