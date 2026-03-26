import styles from "./MarqueeSection.module.css";

export default function MarqueeSection() {
  const text = "Engineering scalable backends. Designing immersive 3D experiences. Building industrial tech. ";

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeBelt}>
        <div className={styles.marqueeContent}>
          <div className={styles.marqueeGroup}>
            {[...Array(3)].map((_, i) => (
               <span key={i} className={styles.textOutline}>
                 <span className={styles.textSolid}>Solutions.</span> {text}
               </span>
            ))}
          </div>
           <div className={styles.marqueeGroup} aria-hidden="true">
            {[...Array(3)].map((_, i) => (
               <span key={i} className={styles.textOutline}>
                  <span className={styles.textSolid}>Solutions.</span> {text}
               </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
