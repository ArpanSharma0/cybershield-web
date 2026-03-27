"use client";

import styles from "./FeaturesSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "01",
    title: "Scalable Infrastructure",
    description:
      "Our backends are built on a foundation of high availability, robust security, and unparalleled performance. Systems that never fail under pressure — enterprise-grade from day one.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: "02",
    title: "AI Agents & LLM Training",
    description:
      "Custom-trained Large Language Models and autonomous AI agents designed to automate complex workflows. We build intelligent systems that reason, act, and scale alongside your business.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: "03",
    title: "Interactive 3D Experiences",
    description:
      "WebGL-powered 3D environments that captivate users and elevate your brand beyond traditional flat design. Immersive, performance-optimized, and beautiful on every device.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
    reverse: false,
  },
];

function FeatureRow({ feature }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={`${styles.featureRow} ${feature.reverse ? styles.reverse : ""}`}
    >
      <motion.div
        className={styles.textCol}
        initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.numBadge}>{feature.id}</div>
        <h2 className={styles.featureTitle}>{feature.title.toUpperCase()}</h2>
        <p className={styles.featureDesc}>{feature.description}</p>
        <button className="btn btn-primary" style={{ marginTop: "28px" }}>
          Our solutions
        </button>
      </motion.div>

      <motion.div
        className={styles.imgCol}
        initial={{ opacity: 0, x: feature.reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.imgOuter}>
          <motion.img
            src={feature.image}
            alt={feature.title}
            className={styles.img}
            style={{ y: imageY }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection} id="features">
      {/* Brand logos strip */}
      <motion.div
        className={styles.brandsStrip}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.brandsLabel}>Trusted by top brands</span>
        <div className={styles.brandLogos}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
            alt="Walmart"
            className={styles.brandLogo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className={styles.brandLogo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Monday_logo.svg"
            alt="Monday.com"
            className={styles.brandLogo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg"
            alt="Logitech"
            className={styles.brandLogo}
          />
        </div>
      </motion.div>

      {/* Feature rows */}
      <div className={styles.rows}>
        {features.map((f) => (
          <FeatureRow key={f.id} feature={f} />
        ))}
      </div>
    </section>
  );
}
