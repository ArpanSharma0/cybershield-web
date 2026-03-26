"use client";

import { Play, Star, Briefcase } from "lucide-react";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
  };

  const floatVars = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatVarsDelay = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="hero-gradient-bg"
      ></motion.div>
      
      <motion.div 
        className={`container ${styles.container}`}
        variants={containerVars}
        initial="hidden"
        animate="show"
      >
        
        <div className={styles.leftContent}>
          <motion.h1 variants={itemVars} className={styles.title}>
            Building <span className="hand-drawn-underline">brands</span>,<br />
            one success<br />
            story at a time.
          </motion.h1>
          <motion.div variants={itemVars} className={styles.actionButtons}>
            <button className="btn btn-dark">
              <Briefcase size={18} /> Explore service
            </button>
            <button className={styles.playButton}>
              <span className={styles.playIconContainer}>
                <Play size={16} className="text-primary" fill="currentColor" />
              </span>
              About agency
            </button>
          </motion.div>
        </div>

        <motion.div variants={itemVars} className={styles.centerContent}>
          <div className={styles.imageContainer}>
            <motion.img 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Professional Woman" 
              className={styles.portraitImage}
            />
            <motion.div 
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className={styles.rotatingBadge}
            >
              <svg viewBox="0 0 100 100" width="120" height="120">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize="11" fontWeight="600" letterSpacing="2">
                  <textPath href="#circle">
                    POWERFUL BRANDING SERVICE AGENCY • BASED ON NEW YORK •
                  </textPath>
                </text>
              </svg>
              <div className={styles.badgeInnerIcon}>
                <svg viewBox="0 0 24 24" fill="var(--color-primary)" width="32" height="32">
                   <circle cx="12" cy="12" r="12" />
                   <path d="M12 4L16 12L12 20L8 12Z" fill="white" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVars} className={styles.rightContent}>
          <motion.div variants={floatVarsDelay} animate="animate" className={`${styles.floatingCard} ${styles.videoCard}`}>
            <div className={styles.videoThumbnail}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=300&auto=format&fit=crop" alt="Desk" />
              <button className={styles.smallPlayBtn}>
                <Play size={12} fill="currentColor" className="text-primary" />
              </button>
            </div>
            <div className={styles.videoText}>
              <p>The help you need,<br/>When you need it.</p>
            </div>
          </motion.div>

          <motion.div variants={floatVars} animate="animate" className={`${styles.floatingCard} ${styles.reviewsCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Trusted by</span>
                <span className={styles.cardTitle}>Client review</span>
              </div>
              <div className={styles.cardRating}>
                <Star size={14} fill="white" /> 4.9
              </div>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.avatarGroup}>
                <img src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Avatar 3" />
              </div>
              <div className={styles.happyClients}>
                <strong>20K+</strong>
                <span>Happy clients</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
