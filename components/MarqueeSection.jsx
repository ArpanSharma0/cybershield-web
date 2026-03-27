"use client";

import styles from "./MarqueeSection.module.css";

const items = [
  "COMPLEX BACKENDS",
  "•",
  "INDUSTRIAL TECH",
  "•",
  "3D INTERACTIVE WEB",
  "•",
  "LLM TRAINING",
  "•",
  "DATA ANALYTICS",
  "•",
  "AI AGENTS",
  "•",
];

export default function MarqueeSection() {
  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={item === "•" ? styles.dot : styles.word}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
