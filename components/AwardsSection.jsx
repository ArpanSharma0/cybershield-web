"use client";

import styles from "./AwardsSection.module.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  { year: "2026", recognition: "Best API Architecture", platform: "Global Tech Awards", project: "E-Com Backend" },
  { year: "2025", recognition: "Innovation in IoT", platform: "Industrial Tech Summit", project: "Factory Automation" },
  { year: "2024", recognition: "Immersive Web Experience", platform: "Awwwards", project: "3D Product Viewer" },
  { year: "2024", recognition: "Excellence in E-Commerce", platform: "E-tail Awards", project: "Global Marketplace" },
  { year: "2023", recognition: "Best Enterprise Solution", platform: "SaaS Awards", project: "Data Management API" },
];

export default function AwardsSection() {
  return (
    <section className={styles.awardsSection} id="awards">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>RECOGNITION &amp; AWARDS</h2>
          <p className={styles.subtitle}>Building systems that receive industry attention.</p>
        </motion.div>

        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <div className={styles.colYear}>Year</div>
            <div className={styles.colRecognition}>Recognition</div>
            <div className={styles.colPlatform}>Platform</div>
            <div className={styles.colProject}>Project</div>
            <div className={styles.colIcon}></div>
          </div>

          <motion.div
            className={styles.tableBody}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } }
            }}
          >
            {awards.map((award) => (
              <motion.div
                key={award.project}
                className={styles.tableRow}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ backgroundColor: "rgba(239, 106, 37, 0.04)" }}
              >
                <div className={styles.colYear}>{award.year}</div>
                <div className={styles.colRecognition}>{award.recognition}</div>
                <div className={styles.colPlatform}>{award.platform}</div>
                <div className={styles.colProject}>{award.project}</div>
                <div className={styles.colIcon}>
                  <ArrowUpRight size={16} className={styles.arrowIcon} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
