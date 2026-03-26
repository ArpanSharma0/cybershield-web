"use client";

import styles from "./ServicesSection.module.css";
import { ArrowUpRight, Database, Cpu, MonitorPlay, BrainCircuit, BarChart, Megaphone, Server, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Complex Backends",
      description: "Scalable, secure architecture for high-traffic e-commerce and enterprise applications.",
      Icon: Database,
    },
    {
      id: 2,
      title: "Industrial Tech",
      description: "Smart software, IoT integrations, and robust automation tools for modern industry.",
      Icon: Cpu,
    },
    {
      id: 3,
      title: "3D Interactive Web",
      description: "Immersive, animated, WebGL-powered 3D experiences that captivate users.",
      Icon: MonitorPlay,
    },
    {
      id: 4,
      title: "LLM Training",
      description: "Custom fine-tuning and deployment of Large Language Models for enterprise pipelines.",
      Icon: BrainCircuit,
    },
    {
      id: 5,
      title: "Business & Data Analytics",
      description: "Deep data processing, predictive modeling, and targeted business intelligence.",
      Icon: BarChart,
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to hyper-scale your brand's digital presence.",
      Icon: Megaphone,
    },
    {
      id: 7,
      title: "Databases",
      description: "High-performance database design, optimization, and migration for scalable data storage.",
      Icon: Server,
    },
    {
      id: 8,
      title: "AI Agents",
      description: "Autonomous AI agents to automate workflows, customer service, and internal operations.",
      Icon: Bot,
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
            We engineer solutions that<br />
            <span className="hand-drawn-underline">drive your business.</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            // Calculate a stacked top offset mapping to the index
            const topOffset = 100 + index * 20;

            return (
              <motion.div 
                key={service.id} 
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{
                  top: `${topOffset}px`,
                  zIndex: index,
                }}
              >
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
            );
          })}
        </div>

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
