import styles from './SectionHeading.module.css';

function SectionHeading({ label, title, subtitle }) {
  return (
    <div className={styles.heading}>
      <div className={styles.divider} />

      <p className={styles.label}>{label}</p>

      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
