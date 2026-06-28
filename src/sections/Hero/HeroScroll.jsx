import styles from './HeroScroll.module.css';

function HeroScroll() {
  return (
    <div className={styles.scroll} aria-hidden="true">
      <span className={styles.line}></span>
    </div>
  );
}

export default HeroScroll;
