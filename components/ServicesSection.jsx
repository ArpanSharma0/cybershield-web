"use client";

import styles from "./ServicesSection.module.css";
import { ArrowUpRight, Megaphone, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Marketing strategy",
      description: "We develop targeted marketing strategies that align with your goals and convert into success.",
      Icon: Megaphone,
    },
    {
      id: 2,
      title: "Business strategy",
      description: "A well-defined marketing strategy helps position your brand and drive consistent growth.",
      Icon: Target,
    },
    {
      id: 3,
      title: "Product development",
      description: "We turn ideas into market-ready products through thoughtful design, strategy and innovation.",
      Icon: Lightbulb,
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.servicesSection} id="services">
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
            We help you to go online and<br />
            <span className="hand-drawn-underline">increase your sales.</span>
          </h2>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className={styles.card} variants={itemVars}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.cardArrow}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className={styles.cardIconBg}>
                <service.Icon size={120} strokeWidth={1} className={styles.iconGhost} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.bottomLink}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Let's make something great work together. <a href="#contact" className={styles.link}>Got a project in mind?</a>
        </motion.div>
        
      </div>
    </section>
  );
}
