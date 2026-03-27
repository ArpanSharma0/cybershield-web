"use client";

import styles from "./Footer.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { name: "Facebook", link: "#" },
  { name: "Twitter", link: "#" },
  { name: "Dribbble", link: "#" },
  { name: "Instagram", link: "#" },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer} id="contact">
      {/* Social bar */}
      <div className={styles.socialBar}>
        <div className={styles.socialContainer}>
          {socials.map((s, i) => (
            <a key={i} href={s.link} className={styles.socialLink}>
              {s.name} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Transform section + Form */}
      <div className={styles.transformSection}>
        <div className={styles.container}>
          <div className={styles.transformGrid}>
            {/* Left: Heading */}
            <motion.div
              className={styles.transformLeft}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className={styles.transformHeading}>TRANSFORM YOUR BRAND</h2>
              <p className={styles.transformSub}>
                Ready to start a project? Leave a message or reach us directly.
              </p>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              className={styles.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.formInput}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>E-mail</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.formInput}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  placeholder="Your message"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className={styles.sendBtn}>
                {sent ? "Message sent ✓" : "Send message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.container}>
          {/* Big year text */}
          <motion.div
            className={styles.bigTextWrap}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.bigTextSymbol}>©</span>
            <h2 className={styles.bigText}>2026 Cybershield</h2>
          </motion.div>

          {/* Footer grid */}
          <div className={styles.footerGrid}>
            <div className={styles.brandCol}>
              <img
                src="/CyberShieldLogoC 1.png"
                alt="CyberShield Logo"
                style={{ height: "32px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <div className={styles.addressCol}>
              <h5 className={styles.colTitle}>HQ — India</h5>
              <p className={styles.colText}>NX ONE, T-3, B-1603, 16th floor,<br />Hawelia Road, Amrapali Dream Valley,<br />Greater Noida, UP 201009, India</p>
            </div>

            <div className={styles.linksCol}>
              <Link href="#about" className={styles.footerLink}>About studio</Link>
              <Link href="#services" className={styles.footerLink}>Our services</Link>
              <Link href="#projects" className={styles.footerLink}>Projects</Link>
            </div>

            <div className={styles.linksCol}>
              <Link href="#blog" className={styles.footerLink}>Latest blog</Link>
              <Link href="#contact" className={styles.footerLink}>Contact us</Link>
            </div>

            <div className={styles.topCol}>
              <button onClick={scrollToTop} className={styles.backToTop}>
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
