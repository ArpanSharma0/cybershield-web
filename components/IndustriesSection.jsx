"use client";

import { motion } from "framer-motion";
import styles from "./IndustriesSection.module.css";
import { 
  ArrowUpRight, 
  ShoppingCart, 
  HeartPulse, 
  GraduationCap, 
  Truck, 
  Utensils, 
  Car, 
  CreditCard, 
  Plane, 
  Building, 
  ShieldCheck, 
  Home, 
  Umbrella 
} from "lucide-react";

// Industry list derived from the reference image
const INDUSTRIES = [
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "EduTech", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Restaurant", icon: Utensils },
  { name: "Automotive", icon: Car },
  { name: "FinTech", icon: CreditCard },
  { name: "Travel", icon: Plane },
  { name: "Real Estate", icon: Building },
  { name: "Auto Warranty", icon: ShieldCheck },
  { name: "Home Warranty", icon: Home },
  { name: "Insurance", icon: Umbrella },
];

export default function IndustriesSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className={styles.section} id="industries">
      <div className="container">
        
        <div className={styles.top}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Our customized software solutions tackle unique industry challenges, empowering businesses to achieve their goals effectively
          </motion.h2>

          <motion.a 
            href="#contact" 
            className={styles.viewMoreBtn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View More <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div key={idx} className={styles.card} variants={itemVariants}>
                <div className={styles.icon}>
                  <Icon size={38} strokeWidth={1.5} />
                </div>
                <span className={styles.label}>{ind.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
