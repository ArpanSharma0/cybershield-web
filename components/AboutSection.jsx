"use client";

import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {/* Label */}
        <div className={styles.label}>[Studio]</div>

        {/* Big headline */}
        <motion.div
          className={styles.headlineWrap}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.headline}>
            WE BUILD ROBUST TECH SYSTEMS THAT POWER BUSINESSES
          </h2>
        </motion.div>

        {/* Two column text block */}
        <div className={styles.textGrid}>
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              We are a multidisciplinary tech studio working with startups,
              scaleups, and enterprises. Deep engineering expertise with
              cutting-edge design — complex backends, AI agents, and immersive 3D.
            </p>
          </motion.div>

          <motion.div
            className={styles.col}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <p>
              CyberShield helps brands define their tech infrastructure, build
              scalable systems, and launch meaningful products that support real
              business growth worldwide.
            </p>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className={styles.metaItem}>Based in Netherlands</span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.metaItem}>Since 2012</span>
        </motion.div>
      </div>
    </section>
  );
}
