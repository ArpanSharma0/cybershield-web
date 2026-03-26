"use client";

import styles from "./Footer.module.css";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { name: "Facebook", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Dribbble", link: "#" },
    { name: "Instagram", link: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footerWrap} id="contact">
      
      {/* Social Bar */}
      <div className={styles.socialBar}>
        <div className={`container ${styles.socialContainer}`}>
          {socials.map((social, index) => (
            <a key={index} href={social.link} className={styles.socialLink}>
              {social.name} <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className="container">
          
          <motion.div 
            className={styles.massiveTextWrap}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.copyrightIcon}>©</div>
            <h2 className={styles.massiveText}>2026 Cybershield</h2>
          </motion.div>

          <motion.div 
            className={styles.footerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } }
            }}
          >
            
            <motion.div 
              className={styles.brandCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <div className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/CyberShieldLogoC 1.png" alt="CyberShield Logo" style={{ height: "38px", width: "auto", objectFit: "contain" }} />
              </div>
            </motion.div>

            <motion.div 
              className={styles.addressCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <h5 className={styles.colTitle}>Cybershield - HQ</h5>
              <p className={styles.colText}>
                Graaf Florisstraat 22A,<br/>
                Netherlands - 3021
              </p>
            </motion.div>

            <motion.div 
              className={styles.addressCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <h5 className={styles.colTitle}>Cybershield - APAC</h5>
              <p className={styles.colText}>
                365 Grand via de courts,<br/>
                Barcelona - 1422
              </p>
            </motion.div>

            <motion.div 
              className={styles.linksCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Link href="#about" className={styles.footerLink}>About studio</Link>
              <Link href="#services" className={styles.footerLink}>Our services</Link>
              <Link href="#projects" className={styles.footerLink}>Projects</Link>
            </motion.div>

            <motion.div 
              className={styles.linksCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Link href="#blog" className={styles.footerLink}>Latest blog</Link>
              <Link href="#contact" className={styles.footerLink}>Contact us</Link>
            </motion.div>

            <motion.div 
              className={styles.backToTopCol}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <button onClick={scrollToTop} className={styles.backToTopBtn}>
                Back to top ↑
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
    </footer>
  );
}
