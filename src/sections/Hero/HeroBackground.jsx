import styles from './HeroBackground.module.css';

function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      {/* Main Background */}
      <div className={styles.base} />

      {/* Luxury Lighting */}
      <div className={styles.topGlow} />
      <div className={styles.bottomGlow} />
      <div className={styles.leftLight} />
      <div className={styles.rightLight} />

      {/* Atmosphere */}
      <div className={styles.mist} />
      <div className={styles.vignette} />

      {/* Decorative Border */}
      <div className={styles.frame}>
        <span className={styles.top} />
        <span className={styles.right} />
        <span className={styles.bottom} />
        <span className={styles.left} />
      </div>
    </div>
  );
}

export default HeroBackground;
