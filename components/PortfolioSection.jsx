"use client";

import styles from "./PortfolioSection.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    title: "FinFlow Analytics",
    category: "Backend & Data Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "Nexus Industrial",
    category: "IoT & Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Quantum3D",
    category: "3D Web Experience",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AuraMind LLM",
    category: "AI & LLM Training",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "DataPulse CRM",
    category: "SaaS Platform Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "ShieldBot Agent",
    category: "AI Agent System",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800&auto=format&fit=crop",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="projects">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>[Our works]</span>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            GALLERY
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((proj) => (
            <motion.div key={proj.id} className={styles.card} variants={item}>
              <div className={styles.imgWrap}>
                <img src={proj.image} alt={proj.title} className={styles.img} />
                <div className={styles.overlay}>
                  <div className={styles.overlayText}>
                    <span className={styles.overlayCategory}>{proj.category}</span>
                    <span className={styles.overlayTitle}>{proj.title}</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.metaTitle}>{proj.title}</span>
                <span className={styles.metaCategory}>{proj.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
