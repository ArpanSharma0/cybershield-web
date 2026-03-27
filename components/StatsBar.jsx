"use client";

import styles from "./StatsBar.module.css";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of engineering" },
  { value: "200+", label: "Tech deliveries" },
  { value: "98%", label: "Client satisfaction" },
  { value: "40+", label: "Enterprise clients" },
];

export default function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
