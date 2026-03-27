"use client";

import { useState } from "react";
import styles from "./ServicesSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, MonitorPlay, BrainCircuit, BarChart, Megaphone, Server, Bot } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Complex Backends",
    description:
      "Scalable, secure architecture for high-traffic e-commerce and enterprise applications. Built for zero downtime.",
    Icon: Database,
    imgs: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=300&auto=format&fit=crop",
    ],
  },
  {
    id: "02",
    title: "Industrial Tech",
    description:
      "Smart software, IoT integrations, and robust automation tools for modern industry and real-time monitoring.",
    Icon: Cpu,
    imgs: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
    ],
  },
  {
    id: "03",
    title: "3D Interactive Web",
    description:
      "Immersive, animated, WebGL-powered 3D experiences that captivate users. We do: website design & redesign, UX for web products, interactive layouts & animations, design systems for scalable products.",
    Icon: MonitorPlay,
    imgs: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop",
    ],
  },
  {
    id: "04",
    title: "LLM Training",
    description:
      "Custom fine-tuning and deployment of Large Language Models for enterprise pipelines and intelligent automation.",
    Icon: BrainCircuit,
    imgs: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=300&auto=format&fit=crop",
    ],
  },
  {
    id: "05",
    title: "Data Analytics",
    description:
      "Deep data processing, predictive modeling, and targeted business intelligence dashboards.",
    Icon: BarChart,
    imgs: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
    ],
  },
  {
    id: "06",
    title: "AI Agents",
    description:
      "Autonomous AI agents to automate workflows, customer service, and internal operations at scale.",
    Icon: Bot,
    imgs: [
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=300&auto=format&fit=crop",
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(2); // '3D Interactive Web' active by default

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.sectionLabel}>[Services]</div>

        <div className={styles.servicesList}>
          {services.map((svc, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={svc.id}
                className={`${styles.serviceRow} ${isActive ? styles.serviceRowActive : ""}`}
                onClick={() => setActive(i)}
                layout
              >
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNum}>{svc.id}</span>
                  <h3 className={styles.serviceTitle}>{svc.title.toUpperCase()}</h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.serviceBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.serviceBodyInner}>
                        <p className={styles.serviceDesc}>{svc.description}</p>
                        {svc.imgs && (
                          <div className={styles.serviceImgs}>
                            {svc.imgs.map((src, idx) => (
                              <motion.div
                                key={idx}
                                className={styles.serviceImgWrap}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                              >
                                <img src={src} alt={svc.title} className={styles.serviceImg} />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
