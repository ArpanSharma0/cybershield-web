"use client";

import styles from "./AwardsSection.module.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AwardsSection() {
  const awards = [
    { year: "2025", recognition: "Honors", platform: "Awwwards", project: "Cropo identity" },
    { year: "2025", recognition: "Site of the month", platform: "CSS Design awards", project: "Violator series" },
    { year: "2024", recognition: "Site of the day", platform: "The portfolio", project: "Harddot stone" },
    { year: "2024", recognition: "Site of the day", platform: "One page love", project: "Tailoring inteo" },
    { year: "2023", recognition: "Mobile excellence", platform: "The portfolio", project: "CSS Awards" },
  ];

  return (
    <section className={styles.awardsSection} id="awards">
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge badge-primary" style={{ marginBottom: "20px" }}>
            AGENCY SERVICES
          </div>
          <h2 className={styles.title}>
            We're achieving<br />
            <span className="hand-drawn-underline">recognition & awards.</span>
          </h2>
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
              show: { transition: { staggerChildren: 0.1 } }
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
              >
                <div className={styles.colYear}>{award.year}</div>
                <div className={styles.colRecognition}>{award.recognition}</div>
                <div className={styles.colPlatform}>{award.platform}</div>
                <div className={styles.colProject}>{award.project}</div>
                <div className={styles.colIcon}>
                  <ArrowUpRight size={18} className={styles.arrowIcon} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
