import styles from './Button.module.css';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      <span className={styles.text}>{children}</span>

      <span className={styles.glow} />
    </button>
  );
}

export default Button;
