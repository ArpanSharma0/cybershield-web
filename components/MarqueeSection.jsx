import styles from "./MarqueeSection.module.css";

export default function MarqueeSection() {
  const text = "Designing memorable brands that connect. Creating cohesive brand experiences. ";

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeBelt}>
        <div className={styles.marqueeContent}>
          <div className={styles.marqueeGroup}>
            {[...Array(3)].map((_, i) => (
              <span key={i} className={styles.textOutline}>
                <span className={styles.textSolid}>Strategy.</span> {text}
              </span>
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={styles.textOutline}>
                 <span className={styles.textSolid}>Strategy.</span> {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
