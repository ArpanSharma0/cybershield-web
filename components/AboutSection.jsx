"use client";

import styles from "./AboutSection.module.css";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const scrollVar = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.bgTextWrapper}>
        <div className={styles.bgText}>complex backends</div>
      </div>
      
      <div className={`container ${styles.container}`}>
        
        <div className={styles.leftContent}>
          <motion.div 
            className={styles.contentWrapper}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={scrollVar} className={styles.badgeTop}>WHO WE ARE</motion.div>
            <motion.h2 variants={scrollVar} className={styles.title}>
              We're a futuristic<br />
              tech solutions <span className="hand-drawn-underline">agency.</span>
            </motion.h2>
            <motion.p variants={scrollVar} className={styles.description}>
              We blend deep engineering expertise with cutting-edge 3D design.<br/>
              Specializing in scalable backends, e-commerce, and industrial tech since 2012.
            </motion.p>
            
            <motion.div variants={scrollVar} className={styles.awardsBlock}>
              <h3 className={styles.awardsTitle}>industrial.</h3>
              <p className={styles.awardsDesc}><strong>Tech</strong> - Enterprise Scalability</p>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.rightImages}>
          <motion.div 
            className={styles.imagesGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }} 
              className={styles.imgSmallContainer}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" 
                alt="Sketching" 
                className={styles.imgSmall} 
              />
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 50 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } }
              }} 
              className={styles.imgLargeContainer}
            >
               <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" 
                alt="Working" 
                className={styles.imgLarge} 
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={styles.floatingScore}
              >
                <div className={styles.scoreTop}>4.9</div>
                <div className={styles.scoreStars}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="var(--color-primary)" className="text-primary" />)}
                </div>
                <div className={styles.scoreLabel}>Verified score</div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: 0.8 } }
              }} 
              className={styles.experienceBadge}
            >
              <span className={styles.expNumber}>15<span className={styles.expPlus}>+</span></span>
              <span className={styles.expText}>Years of robust<br/>engineering.</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
