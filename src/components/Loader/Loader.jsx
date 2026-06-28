import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        <div className={styles.initials}>
          <span className={styles.letter}>A</span>

          <div className={styles.line} />

          <span className={styles.letter}>K</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
