import styles from './HeroBackground.module.css';

function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      {/* Base */}
      <div className={styles.base} />

      {/* Cinematic Lighting */}
      <div className={styles.topGlow} />
      <div className={styles.centerGlow} />
      <div className={styles.bottomGlow} />

      {/* Side Lighting */}
      <div className={styles.leftLight} />
      <div className={styles.rightLight} />

      {/* Atmosphere */}
      <div className={styles.mist} />
      <div className={styles.particles} />
      <div className={styles.vignette} />
    </div>
  );
}

export default HeroBackground;
