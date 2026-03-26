"use client";

import { useState } from "react";
import styles from "./PortfolioSection.module.css";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Potato islands",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 1,
      title: "Skoda corporate",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Pixflow studio",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Harddot stone",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <section className={styles.portfolioSection} id="projects">
      <div className={`container ${styles.container}`}>
        
        <div className={styles.imageCol}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeProject}
                src={projects[activeProject].image} 
                alt={projects[activeProject].title} 
                className={styles.projectImage} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className={styles.discoverBtn}>
              <ArrowRight size={24} className="text-dark" strokeWidth={1.5} />
            </div>
            <span className={styles.discoverText}>Discover case study</span>
          </motion.div>
        </div>

        <motion.div 
          className={styles.textCol}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.p 
            className={styles.subtitle}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Crafting unique<br />
            <span style={{textDecoration: "underline", textUnderlineOffset: "4px"}}>stories for brands.</span>
          </motion.p>

          <ul className={styles.projectList}>
            {projects.map((project, index) => (
              <motion.li 
                key={project.id} 
                className={`${styles.projectItem} ${activeProject === index ? styles.active : ""}`}
                onClick={() => setActiveProject(index)}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
              >
                {project.title}
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className={styles.description}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <h4 className={styles.descTitle}>Every brand has a story.</h4>
            <p className={styles.descText}>
              We blend strategy, creativity, and emotion to craft narratives that are uniquely yours - stories that spark engagement and leave a lasting impression.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
