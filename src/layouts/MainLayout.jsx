import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export default MainLayout;
