"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
  "01  Complex Backends",
  "02  Industrial Tech",
  "03  3D Interactive Web",
  "04  LLM Training",
  "05  Data Analytics",
  "06  AI Agents",
];

const SERVICE_COLORS = [
  "rgba(232, 92, 28, 0.12)",   // Orange
  "rgba(26, 124, 153, 0.12)",  // Teal
  "rgba(147, 51, 234, 0.12)",  // Purple
  "rgba(16, 185, 129, 0.12)",  // Green
  "rgba(220, 38, 38, 0.12)",   // Red
  "rgba(59, 130, 246, 0.12)",  // Blue
];

const WORDS = ["CYBERSHIELD®", "TECHNOLOGIES"];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle the active service while hovering (demo)
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SERVICES.length);
    }, 2500);
    return () => clearInterval(id);
  }, [isHovered]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const wordVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const letterVariant = (delay = 0) => ({
    hidden: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      y: 40,
      opacity: 0,
    },
    show: {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
  });

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div 
        className={styles.heroBg} 
        style={{
          background: `radial-gradient(circle at 30% 50%, ${SERVICE_COLORS[active]} 0%, transparent 60%)`,
          transition: "background 0.8s ease"
        }}
      />

      <div className={styles.inner}>
        {/* LEFT: numbered service list */}
        <div className={styles.serviceList}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              className={`${styles.serviceItem} ${active === i ? styles.serviceActive : ""}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: "easeOut" }}
              onMouseEnter={() => {
                setActive(i);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              {svc}
            </motion.div>
          ))}
        </div>

        {/* CENTER: Morph headline */}
        <motion.div
          className={styles.centerContent}
          variants={wordVariants}
          initial="hidden"
          animate="show"
        >
          <div className={styles.headlineWrap}>
            {WORDS.map((word, wi) => (
              <div key={wi} className={styles.headlineRow} style={{ overflow: "hidden" }}>
                <motion.span
                  className={styles.headlineWord}
                  variants={letterVariant(wi * 0.22)}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.div
            className={styles.ctaLine}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link href="#contact" className={styles.ctaUnderline}>
              Request a session
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM: description + dashboard image */}
      <div className={styles.bottom}>
        <motion.p
          className={styles.descText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          We are a tech agency focused on building complex, scalable, and effective
          systems. From backends to 3D experiences, we help enterprises grow with
          confidence in a fast-moving world.
        </motion.p>

        {/* Parallax dashboard image */}
        <motion.div
          className={styles.dashboardWrap}
          style={{ y: imageY }}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop"
            alt="Dashboard"
            className={styles.dashboardImg}
          />
        </motion.div>
      </div>
    </section>
  );
}
