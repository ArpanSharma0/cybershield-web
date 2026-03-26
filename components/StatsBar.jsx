"use client";

import styles from "./StatsBar.module.css";
import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    {
      value: "92",
      suffix: "^",
      text: "93% Growth from last year 2024.",
    },
    {
      value: "98",
      suffix: "%",
      text: "Boost successful client call rates.",
    },
    {
      value: "3M",
      suffix: "+",
      text: "Active registered happy clients.",
      isPrimary: true,
    },
    {
      value: "12",
      suffix: "+",
      text: "We create top worldwide brands.",
    },
  ];

  return (
    <section className={styles.statsBar}>
      <motion.div 
        className={`container ${styles.container}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {stats.map((stat) => (
          <motion.div 
            key={stat.text} 
            className={styles.statItem}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className={styles.statValue}>
              {stat.value}
              <span className={stat.isPrimary ? styles.suffixPrimary : styles.suffixSecondary}>
                {stat.suffix}
              </span>
            </div>
            <p className={styles.statText}>{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
