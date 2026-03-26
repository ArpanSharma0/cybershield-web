"use client";

import styles from "./FeaturesSection.module.css";
import { ArrowDownRight, Gem, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      id: "01",
      title: "Strategy meets\n<span class='hand-drawn-underline'>innovation.</span>",
      description: "Our proven expertise is built on a <span style='text-decoration: underline; text-underline-offset: 4px; font-weight: 500;'>foundation of real-world</span> results, consistent delivery, and client trust. From strategy to execution, we've successfully handled complex challenges across diverse industries.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      badgeIcon: Gem,
      badgeText: "Innovative\nstrategies",
      reverse: false
    },
    {
      id: "02",
      title: "Certified trusted\n<span class='hand-drawn-underline'>specialization.</span>",
      description: "Our proven expertise is built on a <span style='text-decoration: underline; text-underline-offset: 4px; font-weight: 500;'>foundation of real-world</span> results, consistent delivery, and client trust. From strategy to execution, we've successfully handled complex challenges across diverse industries.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      badgeIcon: ShieldCheck,
      badgeText: "Tailored\napproach",
      reverse: true
    },
    {
      id: "03",
      title: "Purely tailored\n<span class='hand-drawn-underline'>deliverables.</span>",
      description: "Our proven expertise is built on a <span style='text-decoration: underline; text-underline-offset: 4px; font-weight: 500;'>foundation of real-world</span> results, consistent delivery, and client trust. From strategy to execution, we've successfully handled complex challenges across diverse industries.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      badgeIcon: CheckCircle,
      badgeText: "Professional\nexecution",
      reverse: false
    }
  ];

  return (
    <section className={styles.featuresSection} id="features">
      
      {/* Logos Strip top */}
      <motion.div 
        className={`container ${styles.logoStrip}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.logoLabel}>Trusted by top brands</p>
        <div className={styles.logos}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" alt="Walmart" className={styles.brandLogo} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg" alt="Logitech" className={styles.brandLogo} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className={styles.brandLogo} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Monday_logo.svg" alt="Monday.com" className={styles.brandLogo} />
        </div>
      </motion.div>

      <div className={styles.gridContainer}>
        {features.map((feature, index) => (
          <div key={feature.id} className={`${styles.featureRow} ${feature.reverse ? styles.reverse : ''}`}>
            
            <motion.div 
              className={styles.textContent}
              initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.textInner}>
                <div className={styles.numberBadge}>{feature.id}</div>
                <h2 
                  className={styles.title} 
                  dangerouslySetInnerHTML={{ __html: feature.title }} 
                />
                <div className={styles.arrowIcon}>
                  <ArrowDownRight size={24} />
                </div>
                <p 
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
                <button className="btn btn-dark" style={{ marginTop: '20px' }}>
                  <Gem size={16} /> Our services
                </button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.imageContent}
              initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.imageWrapper}>
                <img src={feature.image} alt="Feature" className={styles.image} />
                <motion.div 
                  className={styles.floatingBadge}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.4 }}
                >
                  <feature.badgeIcon size={28} className="text-white" style={{ marginBottom: '8px' }} />
                  <span className={styles.badgeText} dangerouslySetInnerHTML={{ __html: feature.badgeText.replace('\n', '<br/>') }} />
                </motion.div>
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
