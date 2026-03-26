"use client";

import { useState, useRef } from "react";
import styles from "./PortfolioSection.module.css";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Maps scroll progress to background position, going left to right (0% to 100%)
  const bgPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projects = [
    {
      id: 0,
      title: "Complex Backends",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 1,
      title: "Industrial Tech",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "3D Interactive Web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "LLM Training",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Databases",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "AI Agents",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <motion.section 
      className={styles.portfolioSection} 
      id="projects"
      ref={containerRef}
      style={{
        background: "linear-gradient(90deg, #0a0c10 0%, #0f172a 50%, #0a0c10 100%)",
        backgroundSize: "200% 100%",
        backgroundPositionX: bgPos
      }}
    >
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
            Engineering robust<br />
            <span style={{textDecoration: "underline", textUnderlineOffset: "4px"}}>solutions for scale.</span>
          </motion.p>

          <ul className={styles.projectList}>
            {projects.map((project, index) => (
              <motion.li 
                key={project.id} 
                className={`${styles.projectItem} ${activeProject === index ? styles.active : ""}`}
                onClick={() => setActiveProject(index)}
                onViewportEnter={() => setActiveProject(index)}
                viewport={{ amount: "all", margin: "-40% 0px -40% 0px" }}
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
            <h4 className={styles.descTitle}>Architecture that lasts.</h4>
            <p className={styles.descText}>
              We blend deep technical engineering with immersive 3D design to craft powerful systems and visually stunning interactive experiences.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
