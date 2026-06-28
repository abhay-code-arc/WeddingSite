import styles from './HeroScroll.module.css';

function HeroScroll() {
  return (
    <div className={styles.scroll} aria-hidden="true">
      <span className={styles.label}>Scroll</span>

      <div className={styles.line}>
        <span className={styles.indicator} />
      </div>
    </div>
  );
}

export default HeroScroll;
