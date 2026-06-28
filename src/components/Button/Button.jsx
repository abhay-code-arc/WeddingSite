import styles from './Button.module.css';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
