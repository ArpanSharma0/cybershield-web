"use client";

import styles from "./TestimonialsSection.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Our collaboration was smooth from start to finish. The team took time to understand our business goals, offered thoughtful creative solutions, and delivered a strong visual identity that truly reflects who we are.",
    name: "Alexander Harad",
    role: "CTO, Global Retail",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    quote:
      "The interactive 3D product viewer they built completely transformed our sales process. WebGL performance was flawless and the integration with our industrial systems was seamless.",
    name: "Matthew Taylor",
    role: "VP of Engineering, NexusTech",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    quote:
      "CyberShield built our entire data analytics platform from scratch. The backend scales effortlessly and the dashboards are beautiful. Highly recommended for complex engineering work.",
    name: "Sara Mendes",
    role: "Product Lead, DataPulse",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const avatarColors = ["#EF6A25", "#535351", "#3a3a38"];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Label */}
        <div className={styles.label}>[Testimonials]</div>

        {/* Heading */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          OUR CLIENTS SAY
        </motion.h2>

        {/* Avatar group */}
        <div className={styles.avatarGroup}>
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              className={`${styles.avatarBtn} ${active === i ? styles.avatarActive : ""}`}
              onClick={() => setActive(i)}
              style={{ "--btn-color": avatarColors[i] }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={t.avatar} alt={t.name} className={styles.avatarImg} />
            </motion.button>
          ))}
          <motion.div
            className={styles.plusBadge}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            +21
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          key={active}
          className={styles.quoteWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.quote}>"{testimonials[active].quote}"</p>
          <div className={styles.author}>
            <span className={styles.authorName}>{testimonials[active].name}</span>
            <span className={styles.authorRole}>[{testimonials[active].role}]</span>
          </div>
        </motion.div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
